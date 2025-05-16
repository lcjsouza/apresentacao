import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextoService } from 'src/app/shared/services/texto.service';
import { IMAGENS, TEXT_SOBRE } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {
  textoCompleto: string = '';
  imgAi = IMAGENS.IMG_SOBRE;

  constructor(private textoService: TextoService) {}

  ngOnInit() {
    this.textoService.iniciarEfeitoDeDigitacao(TEXT_SOBRE.AREA_ADMINISTRATIVA);
  }

  get textoFormatado(): string {
    return this.textoService.textoCompleto
      .split('\n\n')
      .map(paragrafo => `<p>${paragrafo.replace(/\n/g, '<br>')}</p>`)
      .join('');
  }
}
