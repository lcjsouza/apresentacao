import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROJETOS } from 'src/app/shared/utils/utils';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, ChatComponent],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  projetos = PROJETOS;
  projetoSelecionado: any = null;
  hoveredProjeto: any = null;
  messages: string = '';
  endpoint: string = '';

  abrirChat(projeto: any): void {
    if (this.projetoSelecionado?.title !== projeto.title) {
      const proj = projeto.title.toLowerCase();
      this.messages = `Dallara, fale sobre o projeto ${proj}?`;
      this.projetoSelecionado = projeto;
      this.endpoint = projeto.endpoint;
    } else {
      this.projetoSelecionado = null;
      this.messages = '';
    }
  }
}
