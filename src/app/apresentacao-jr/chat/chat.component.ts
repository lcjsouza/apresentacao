import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextoService } from 'src/app/shared/services/texto.service';
import { IMAGENS } from 'src/app/shared/utils/utils';

interface Message {
  text: string;
  from: 'user' | 'Dallara';
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  loading: boolean = false;
  @Input() userInput = '';
  @Input() endpointProjeto = '';
  messages: Message[] = [];
  imgAi = IMAGENS.DALLARA_AI_1;
  llm = 'gemini';

  constructor(private http: HttpClient, private textoService: TextoService) {}

  sendMessage() {    
    const endpoint = this.endpointProjeto === '' ? 'persona' : this.endpointProjeto;

    const message = this.userInput.trim();
    if (!message) return;
    this.messages.push({ text: message, from: 'user' });
    this.userInput = '';
    this.loading = true;

    this.http
      .post<{ response: string; audio: string }>(
        // `https://localhost:5000/api/chat/${endpoint}`,
         `https://back-apresentacao.onrender.com/api/chat/${endpoint}`,
        { message, llm: this.llm }
      )
      .subscribe({
        next: (res: any) => {
          // Se tiver audio, reproduz
          if (res.audio) this.converterAudio(res.audio);

          // Adiciona espaço para a resposta
          this.messages.push({ text: '', from: 'Dallara' });
          const respostaIndex = this.messages.length - 1;
          setTimeout(() => {
            this.textoService.digitarTexto(
              res.response,
              (parcial) => {
                this.messages[
                  respostaIndex
                ].text = `${parcial}<span class="cursor">|</span>`;
              },
              () => {
                this.messages[respostaIndex].text = `${res.response}`;
              }
            );
          }, 1000);
        },
        error: () => {
          this.messages.push({
            text: `Erro ao se conectar com o servidor.`,
            from: 'Dallara',
          });
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
  }

  converterAudio(resAudio: any) {
    // Converte o base64 para Blob e toca o áudio
    const audioBytes = atob(resAudio);
    const byteNumbers = new Array(audioBytes.length);
    for (let i = 0; i < audioBytes.length; i++) {
      byteNumbers[i] = audioBytes.charCodeAt(i);
    }
    const audioBlob = new Blob([new Uint8Array(byteNumbers)], {
      type: 'audio/wav',
    });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  }
}
