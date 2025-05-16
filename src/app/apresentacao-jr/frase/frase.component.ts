import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextoService } from 'src/app/shared/services/texto.service';
import { FRASES } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-frase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frase.component.html',
  styleUrl: './frase.component.scss',
})
export class FraseComponent {
  frases: string[] = FRASES;

  constructor(private textoService: TextoService) {}

  ngOnInit() {
    this.textoService.iniciarEfeitoDeDigitacaoArray(this.frases);
  }

  get frasesRenderizadas(): string[] {
    return this.textoService.frasesDigitadas;
  }
}
