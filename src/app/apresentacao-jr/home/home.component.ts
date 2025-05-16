import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'Frontend Developer';
  userName = 'Luiz Carlos';
  apelido = 'Júnior';
  sections = [
    {
      icon: '../../../assets/quem-sou-eu.png',
      title: 'Quem sou eu?',
      description: 'Venha conferir minha trajetória e o que me motiva!',
      url: '/sobre',
    },
    {
      icon: '../../../assets/no-corre.png',
      title: 'No corre na Icatu',
      description: 'Dá uma olhada nos projetos que estou atuando por aqui!',
      url: '/projetos',
    },
    {
      icon: '../../../assets/frases.png',
      title: 'Se Você É Front-End, Vai Se Identificar',
      description:
        'Descubra o lado divertido (e um pouco caótico) do desenvolvimento front-end com essa seleção de frases',
      url: '/frase',
    },
  ];
}
