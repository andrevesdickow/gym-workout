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
        title: 'Stiff',
        src: '/img/leg/stiff-com-barra.gif',
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
    weekDay: 2,
    weekDayName: 'Terça-feira',
    trainings: [
      {
        title: 'Puxada a frente',
        src: '/img/back/puxada-a-frente.gif',
        reps: '3x12'
      },
      {
        title: 'Puxada alta',
        src: '/img/back/puxada-alta-com-barra.webp',
        reps: '3x10'
      },
      {
        title: 'Remada baixa',
        src: '/img/back/remada-baixa.webp',
        reps: '3x10'
      },
      {
        title: 'Voador inverso',
        src: '/img/back/voador-invertido-no-peck-deck.webp',
        reps: '3x12'
      },
      {
        title: 'Rosca Scott (barra W)',
        src: '/img/arm/rosca-scott-com-barra-w.webp',
        reps: '4x10'
      },
      {
        title: 'Rosca martelo sentado',
        src: '/img/arm/rosca-martelo-com-halteres-no-banco-inclinado.webp',
        reps: '3x10'
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
        title: 'Crossover',
        src: '/img/chest/crossover.gif',
        reps: '3x10'
      },
      {
        title: 'Dumbbell Press',
        src: '/img/chest/dumbbell-press.gif',
        reps: '4x10'
      },
      {
        title: 'Desenvolvimento com halteres',
        src: '/img/chest/desenvolvimento-com-halteres.webp',
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
        title: 'Pulley com corda',
        src: '/img/arm/triceps-puxada-no-pulley-com-corda.webp',
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
    weekDay: 4,
    weekDayName: 'Quinta-feira',
    trainings: [
      {
        title: 'Corrida (esteira)',
        src: '/img/others/corrida-na-esteira-inclinada.webp',
        reps: '-+ 30min',
        hasCountdown: false
      }
    ]
  },
  {
    weekDay: 5,
    weekDayName: 'Sexta-feira',
    trainings: [
      {
        title: 'Tríceps corda unilateral',
        src: '/img/arm/triceps-puxada-no-pulley-com-corda.webp',
        reps: '4x10'
      },
      {
        title: 'Rosca 21',
        src: '/img/arm/rosca-21.webp',
        reps: '3x21'
      },
      {
        title: 'Tríceps testa (barra W)',
        src: '/img/arm/triceps-testa-no-banco-inclinado.webp',
        reps: '3x12'
      },
      {
        title: 'Rosca martelo',
        src: '/img/arm/rosca-martelo-com-halteres.webp',
        reps: '3x12'
      },
      {
        title: 'Rosca inversa (sentado)',
        src: '/img/arm/rosca-inversa-barra-w.gif',
        reps: '4x10'
      },
      {
        title: 'Flexão de punho',
        src: '/img/arm/flexao-de-punho-com-halteres.jpg',
        reps: '3x10'
      },
      {
        title: 'Abdominal capitão',
        src: '/img/others/abdominal-capitao.gif',
        reps: '3x15'
      }
    ]
  }
] as TrainingDay[];
