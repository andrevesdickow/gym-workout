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
        title: 'Agachamento hack',
        src: '/img/leg/agachamento-hack-squat.gif',
        reps: '3x12'
      },
      {
        title: 'Leg press 45°',
        src: '/img/leg/leg-press-45.webp',
        reps: '3x12'
      },
      {
        title: 'Afundo',
        src: '/img/leg/agachamento-afundo-com-halteres.webp',
        reps: '3x12'
      },
      {
        title: 'Cadeira extensora',
        src: '/img/leg/cadeira-extensora.webp',
        reps: '4x10'
      },
      {
        title: 'Panturrilha no Leg H.',
        src: '/img/leg/panturrilha-no-leg-press.webp',
        reps: '4x12'
      },
      {
        title: 'Panturrilha de pé',
        src: '/img/leg/panturrilha-de-pe-com-step.gif',
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
        title: 'Rosca simultânea',
        src: '/img/arm/rosca-direta-com-halteres.webp',
        reps: '4x10'
      },
      {
        title: 'Rosca martelo (sentado)',
        src: '/img/arm/rosca-martelo-com-halteres-no-banco-inclinado.webp',
        reps: '3x10'
      },
      {
        title: 'Rosca inversa (sentado)',
        src: '/img/arm/rosca-inversa-barra-w.gif',
        reps: '3x12'
      },
      {
        title: 'Abdominal declinado',
        src: '/img/others/abdominal-obliquo-no-banco-inclinado.webp',
        reps: '3x15'
      },
      {
        title: 'Corrida (esteira)',
        src: '/img/others/corrida-na-esteira-inclinada.webp',
        reps: '> 10min',
        hasCountdown: false
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
        title: 'Voador',
        src: '/img/chest/voador-no-peck-deck.webp',
        reps: '3x12'
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
        title: 'Pulley com corda',
        src: '/img/arm/triceps-puxada-no-pulley-com-corda.webp',
        reps: '4x10'
      },
      {
        title: 'Prancha',
        src: '/img/others/prancha.gif',
        reps: '3x45s'
      },
      {
        title: 'Corrida (esteira)',
        src: '/img/others/corrida-na-esteira-inclinada.webp',
        reps: '> 10min',
        hasCountdown: false
      }
    ]
  },
  {
    weekDay: 4,
    weekDayName: 'Quinta-feira',
    trainings: [
      {
        title: 'Agachamento búlgaro',
        src: '/img/leg/agachamento-bulgaro.gif',
        reps: '4x10'
      },
      {
        title: 'Elevação pélvica',
        src: '/img/leg/elevacao-pelvica.gif',
        reps: '3x10'
      },
      {
        title: 'Cadeira abdutora',
        src: '/img/leg/cadeira-abducao.webp',
        reps: '3x10'
      },
      {
        title: 'Cadeira flexora',
        src: '/img/leg/cadeira-flexora.gif',
        reps: '4x10'
      },
      {
        title: 'Mesa flexora',
        src: '/img/leg/mesa-flexora.webp',
        reps: '3x12'
      },
      {
        title: 'Stiff',
        src: '/img/leg/stiff-com-barra.gif',
        reps: '3x12'
      },
      {
        title: 'Panturrilha sentado',
        src: '/img/leg/panturrilha-sentado.gif',
        reps: '4x12'
      },
      {
        title: 'Panturrilha de pé',
        src: '/img/leg/panturrilha-de-pe-com-step.gif',
        reps: '4x12'
      }
    ]
  },
  {
    weekDay: 5,
    weekDayName: 'Sexta-feira',
    trainings: [
      {
        title: 'Tríceps pulley',
        src: '/img/arm/triceps-puxada-no-pulley.webp',
        reps: '4x∞'
      },
      {
        title: 'Rosca simultânea',
        src: '/img/arm/rosca-direta-com-halteres.webp',
        reps: '4x∞'
      },
      {
        title: 'Tríceps testa (com halteres)',
        src: '/img/arm/triceps-testa-com-halteres.webp',
        reps: '4x∞'
      },
      {
        title: 'Rosca Scott',
        src: '/img/arm/rosca-scott-com-barra-w.webp',
        reps: '4x∞'
      },
      {
        title: 'Tríceps francês',
        src: '/img/arm/triceps-frances.webp',
        reps: '4x∞'
      },
      {
        title: 'Rosca 45°',
        src: '/img/arm/rosca-45.webp',
        reps: '4x∞'
      },
      {
        title: 'Flexão de punho',
        src: '/img/arm/flexao-de-punho-com-halteres.jpg',
        reps: '3x10'
      }
    ]
  }
] as TrainingDay[];
