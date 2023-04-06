type Training = {
  title: string;
  description?: string;
  src: string;
  reps?: string;
  hasCountdown?: boolean;
}

type TrainingDay = {
  weekDay: number;
  weekDayName: string;
  trainings: Training[];
}

export default [
  // {
  //   weekDay: 0,
  //   weekDayName: 'Domingo',
  //   trainings: []
  // },
  {
    weekDay: 1,
    weekDayName: 'Segunda-feira',
    trainings: [
      {
        title: 'Agachamento barra livre',
        src: '/img/leg/agachamento-com-barra.webp',
        reps: '3x12'
      },
      {
        title: 'Leg press 45°',
        src: '/img/leg/leg-press-45.webp',
        reps: '3x12'
      },
      {
        title: 'Cadeira extensora',
        src: '/img/leg/cadeira-extensora.webp',
        reps: '4x10'
      },
      {
        title: 'Cadeira adutora',
        src: '/img/leg/cadeira-aducao.webp',
        reps: '4x10'
      },
      {
        title: 'Panturrilha no Leg horizontal',
        src: '/img/leg/panturrilha-no-leg-press.webp',
        reps: '4x12'
      }
    ]
  },
  {
    weekDay: 2,
    weekDayName: 'Terça-feira',
    trainings: [
      {
        title: 'Puxada alta triângulo',
        src: '/img/back/puxada-alta-com-triangulo.webp',
        reps: '3x12'
      },
      {
        title: 'Serrote',
        src: '/img/back/serrote-no-banco.webp',
        reps: '3x8'
      },
      {
        title: 'Remada cavalinho (pronada)',
        src: '/img/back/remada-no-banco-inclinado-com-halteres.webp',
        reps: '3x12'
      },
      {
        title: 'Rosca direta na polia',
        src: '/img/arm/rosca-direta-no-cabo.webp',
        reps: '4x10'
      },
      {
        title: 'Rosca martelo sentado',
        src: '/img/arm/rosca-martelo-com-halteres-no-banco-inclinado.webp',
        reps: '3x10'
      },
      {
        title: 'Flexão de punho',
        src: '/img/arm/flexao-de-punho-com-halteres.jpg',
        reps: '3x8'
      },
      {
        title: 'Abdominal declinado',
        src: '/img/others/abdominal-obliquo-no-banco-inclinado.webp',
        reps: '3x15'
      }
    ]
  },
  {
    weekDay: 3,
    weekDayName: 'Quarta-feira',
    trainings: [
      {
        title: 'Agachamento búlgaro',
        src: '/img/leg/agachamento-bulgaro.gif',
        reps: '3x8'
      },
      {
        title: 'Elevação pélvica (máquina)',
        src: '/img/leg/elevacao-pelvica.gif',
        reps: '3x12'
      },
      {
        title: 'Cadeira abdutora',
        src: '/img/leg/cadeira-abducao.webp',
        reps: '4x10'
      },
      {
        title: 'Cadeira flexora',
        src: '/img/leg/cadeira-flexora.gif',
        reps: '4x10'
      },
      {
        title: 'Mesa flexora',
        src: '/img/leg/mesa-flexora.webp',
        reps: '3x10'
      },
      {
        title: 'Panturrilheira',
        src: '/img/leg/panturrilha-sentado.gif',
        reps: '4x12'
      }
    ]
  },
  {
    weekDay: 4,
    weekDayName: 'Quinta-feira',
    trainings: [
      {
        title: 'Supino inclinado',
        src: '/img/chest/supino-inclinado-com-barra.webp',
        reps: '3x10'
      },
      {
        title: 'Crucifixo',
        src: '/img/chest/crucifixo.gif',
        reps: '3x12'
      },
      {
        title: 'Crossover',
        src: '/img/chest/crossover.gif',
        reps: '3x10'
      },
      {
        title: 'Elevação frontal na polia (corda)',
        src: '/img/arm/elevacao-frontal-polia.gif',
        reps: '3x12'
      },
      {
        title: 'Elevação lateral na polia',
        src: '/img/arm/elevacao-lateral-na-polia.gif',
        reps: '3x10'
      },
      {
        title: 'Tríceps francês',
        src: '/img/arm/triceps-frances.webp',
        reps: '4x10'
      },
      {
        title: 'Pulley',
        src: '/img/arm/triceps-puxada-no-pulley.webp',
        reps: '4x10'
      },
      {
        title: 'Prancha',
        src: '/img/others/prancha.gif',
        reps: '3x45s'
      }
    ]
  },
  {
    weekDay: 5,
    weekDayName: 'Sexta-feira',
    trainings: [
      {
        title: 'Corrida (esteira)',
        src: '/img/others/corrida-na-esteira-inclinada.webp',
        reps: '> 30min',
        hasCountdown: false
      }
    ]
  }
  // {
  //   weekDay: 6,
  //   weekDayName: 'Sábado',
  //   trainings: []
  // }
] as TrainingDay[];
