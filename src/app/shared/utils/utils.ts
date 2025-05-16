export enum TEXT_SOBRE {
  AREA_ADMINISTRATIVA = `Antes de entrar de vez no mundo da tecnologia, passei 8 anos na área administrativa, lidando com gestão de pessoas, departamento pessoal, controle de indicadores e atendimento a clientes. Foi nesse período que desenvolvi um olhar mais estratégico sobre como as empresas funcionam. Toda essa bagagem acabou sendo fundamental quando decidi migrar para TI: cheguei com mais maturidade, mais jogo de cintura e uma noção clara de como criar soluções que realmente resolvem problemas do dia a dia.\n\n
    Desde que migrei para a tecnologia, já são mais de 4 anos atuando como desenvolvedor front-end, com foco em Angular e na criação de aplicações web escaláveis e voltadas para a melhor experiência do usuário. Hoje atuo como Desenvolvedor Pleno, colaborando com os times do Canal Plataforma. Tenho domínio nas ferramentas como Angular, TypeScript, SASS, APIs REST, Azure DevOps e Power BI. Recentemente, venho explorando IA Generativa, chatbots com LLMs e Flutter`,
}

export const FRASES = [
  `Ser front-end é passar metade do tempo ajustando CSS e a outra metade xingando o CSS.`,
  `Responsividade: aquele momento mágico em que tudo quebra… simultaneamente em três tamanhos de tela.`,
  `Deploy feito com sucesso. Agora é só esperar o bug aparecer disfarçado de elogio do cliente.`,
  `Nada como um npm install pra lembrar que seu projeto depende de 1483 bibliotecas que você nunca ouviu falar`,
  `Nada é tão eterno quanto um console.log esquecido em produção.`,
];

export enum IMAGENS {
  BEL = '../../assets/Bel.png',
  BRENO = '../../assets/Breno.png',
  CARLOS_A = '../../assets/CarlosA.png',
  CARLOS_H = '../../assets/CarlosH.png',
  DAVI = '../../assets/Davi.png',
  FELIPE = '../../assets/Felipe.png',
  ISA = '../../assets/Isa.png',
  JR = '../../assets/Jr.png',
  MATHEUS_G = '../../assets/MatheusG.png',
  MATHEUS_S = '../../assets/MatheusS.png',
  PAULO = '../../assets/Paulao.png',
  PEDRO = '../../assets/Pedro.png',
  R10 = '../../assets/R10.png',
  RENATA = '../../assets/Renata.png',
  RENATO = '../../assets/Renato.png',
  DALLARA_AI_1 = '../../assets/dallara-avatar.png',
  DALLARA_AI_2 = '../../assets/dallara-avatar2.png',
  IMG_SOBRE = '../../assets/adm-ti.png',
}

export const PROJETOS = [
  {
    icon: '../../assets/micro2.png',
    title: 'Adesão PrevEmpresarial',
    endpoint: 'adesao',
    description:
      'Permite que parceiros ofereçam adesão a previdência empresarial aos colaboradores, integrando dados da API de negociação PGBL e realizando assinaturas via IcatuSign.',
    devs: [
      {
        img: IMAGENS.RENATA,
        name: 'Renata Maria',
        role: 'Analista de Sistemas',
      },
      {
        img: IMAGENS.PAULO,
        name: 'Paulo Carneiro',
        role: 'Líder Técnico',
      },
      {
        img: IMAGENS.DAVI,
        name: 'Davi',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.JR,
        name: 'Júnior',
        role: 'Desenvolvedor Front-end',
      },
      {
        img: IMAGENS.PEDRO,
        name: 'Pedro',
        role: 'Desenvolvedor Front-end',
      },
      {
        img: IMAGENS.MATHEUS_G,
        name: 'Matheus Gomes',
        role: 'Desenvolvedor Front-end',
      },
      {
        img: IMAGENS.FELIPE,
        name: 'Felipe',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.R10,
        name: 'R10',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.BEL,
        name: 'Isabela',
        role: 'Desenvolvedor Back-end',
      },
    ],
  },
  {
    icon: '../../assets/micro2.png',
    title: 'IcatuSign',
    endpoint: 'icatuSign',
    description:
      'Integração com APIs RESTful, incluindo autenticação JWT, paginação, filtros dinâmicos e consumo eficiente de endpoints para aplicações escaláveis.',
    devs: [
      {
        img: IMAGENS.ISA,
        name: 'Isabela',
        role: 'Analista de Sistemas',
      },
      {
        img: IMAGENS.MATHEUS_S,
        name: 'Matheus Saboia',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.BRENO,
        name: 'Breno',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.FELIPE,
        name: 'Felipe',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.JR,
        name: 'Júnior',
        role: 'Desenvolvedor Front-end',
      },     
      {
        img: IMAGENS.RENATO,
        name: 'Renato',
        role: 'Desenvolvedor Front-end',
      }, 
      {
        img: IMAGENS.DAVI,
        name: 'Davi',
        role: 'Desenvolvedor Back-end',
      },
    ],
  },
  {
    icon: '../../assets/micro2.png',
    title: 'Sicredi',
    endpoint: 'sicred',
    description:
      'Explorando a arquitetura de microfrontends para projetos modulares e independentes.',
    devs: [
      {
        img: IMAGENS.RENATA,
        name: 'Renata Maria',
        role: 'Analista de Sistemas',
      },
      {
        img: IMAGENS.DAVI,
        name: 'Davi',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.JR,
        name: 'Júnior',
        role: 'Desenvolvedor Front-end',
      },
    ],
  },
  {
    icon: '../../assets/micro2.png',
    title: 'Equilíbrio',
    endpoint: 'equilibrio',
    description:
      'Explorando a arquitetura de microfrontends para projetos modulares e independentes.',
    devs: [
      {
        img: IMAGENS.RENATA,
        name: 'Renata Maria',
        role: 'Analista de Sistemas',
      },
      {
        img: IMAGENS.CARLOS_H,
        name: 'Carlos Henrique',
        role: 'Analista de Sistemas',
      },
      {
        img: IMAGENS.PAULO,
        name: 'Paulo Carneiro',
        role: 'Líder Técnico',
      },
      {
        img: IMAGENS.DAVI,
        name: 'Davi',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.R10,
        name: 'R10',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.CARLOS_A,
        name: 'Carlos Alexandre',
        role: 'Desenvolvedor Back-end',
      },
      {
        img: IMAGENS.JR,
        name: 'Júnior',
        role: 'Desenvolvedor Front-end',
      },
      {
        img: IMAGENS.MATHEUS_G,
        name: 'Matheus Gomes',
        role: 'Desenvolvedor Front-end',
      },
      {
        img: IMAGENS.RENATO,
        name: 'Renato',
        role: 'Desenvolvedor Front-end',
      }, 
    ],
  },
  // {
  //   icon: '../../assets/micro2.png',
  //   title: 'Caixa',
  //   description:
  //     'Explorando a arquitetura de microfrontends para projetos modulares e independentes.',
  //   devs: [],
  // },
];
