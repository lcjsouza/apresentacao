import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextoService {
  textoCompleto: string = '';
  frasesDigitadas: string[] = [];
  constructor() {}

  iniciarEfeitoDeDigitacao(texto: string): void {
    let index = 0;
    

    const intervalo = setInterval(() => {
      this.textoCompleto += texto.charAt(index);
      index++;

      if (index === texto.length) {
        clearInterval(intervalo);
        // return textoCompleto;
      }
    }, 15); // Ajuste a velocidade da digitação com o valor do intervalo
    
  }

  iniciarEfeitoDeDigitacaoArray(frases: string[], callback?: () => void): void {
    this.frasesDigitadas = new Array(frases.length).fill('');
    let fraseIndex = 0;
    let charIndex = 0;

    const digitar = () => {
      if (fraseIndex >= frases.length) {
        if (callback) callback();
        return;
      }

      const fraseAtual = frases[fraseIndex];

      this.frasesDigitadas[fraseIndex] += fraseAtual.charAt(charIndex);
      charIndex++;

      if (charIndex >= fraseAtual.length) {
        fraseIndex++;
        charIndex = 0;
        setTimeout(digitar, 400); // pausa entre frases
      } else {
        setTimeout(digitar, 20); // velocidade de digitação
      }
    };

    digitar();
  }

  digitarTexto(
    texto: string,
    callback: (parcial: string) => void,
    onFim?: () => void,
    velocidade: number = 20
  ) {
    let index = 0;
    const intervalo = setInterval(() => {
      callback(texto.substring(0, index + 1));
      index++;
      if (index === texto.length) {
        clearInterval(intervalo);
        if (onFim) onFim();
      }
    }, velocidade);
  }
}
