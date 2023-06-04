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
        title: 'Barra fixa',
        src: '/img/back/barra-fixa.webp',
        reps: '3x∞'
      },
      {
        title: 'Serrote',
        src: '/img/back/serrote-no-banco.webp',
        reps: '3x∞'
      },
      {
        title: 'Puxada alta (com barra ou triângulo)',
        src: '/img/back/puxada-alta-com-barra.webp',
        reps: '4x∞'
      },
      {
        title: 'Remada cavalinho',
        src: '/img/back/remada-no-banco-inclinado-com-halteres.webp',
        reps: '3x∞'
      },
      {
        title: 'Rosca direta (com barra W)',
        src: '/img/arm/rosca-direta-barra-w.webp',
        reps: '4x∞'
      },
      {
        title: 'Rosca martelo',
        src: '/img/arm/rosca-martelo.gif',
        reps: '3x∞'
      },
      {
        title: 'Rosca inversa (com barra W)',
        src: '/img/arm/rosca-inversa-barra-w.gif',
        reps: '3x∞'
      },
      {
        title: 'Abdominal',
        src: '/img/others/abdominal.webp',
        reps: '3x15'
      }
    ]
  },
  {
    weekDay: 2,
    weekDayName: 'Terça-feira',
    trainings: [
      {
        title: 'Supino inclinado',
        src: '/img/chest/supino-inclinado-com-barra.webp',
        reps: '4x∞'
      },
      {
        title: 'Dumbbell Press ou Supino inclinado',
        src: '/img/chest/dumbbell-press.gif',
        reps: '4x∞'
      },
      {
        title: 'Crossover',
        src: '/img/chest/cable-crossover.webp',
        reps: '3x∞'
      },
      {
        title: 'Voador',
        src: '/img/chest/voador-no-peck-deck.webp',
        reps: '3x∞'
      },
      {
        title: 'Desenvolvimento com halteres',
        src: '/img/chest/desenvolvimento-com-halteres.webp',
        reps: '3x∞'
      },
      {
        title: 'Elevação lateral na polia',
        src: '/img/arm/elevacao-lateral-na-polia.gif',
        reps: '4x∞'
      },
      {
        title: 'Pulley com corda',
        src: '/img/arm/triceps-puxada-no-pulley-com-corda.webp',
        reps: '4x∞'
      },
      {
        title: 'Prancha',
        src: '/img/others/prancha.gif',
        reps: '3x45s'
      }
    ]
  },
  {
    weekDay: 3,
    weekDayName: 'Quarta-feira',
    trainings: [
      {
        title: 'Agachamento (barra livre ou hack)',
        src: '/img/leg/agachamento-com-barra.webp',
        reps: '3x∞'
      },
      {
        title: 'Leg press 45°',
        src: '/img/leg/leg-press-45.webp',
        reps: '4x∞'
      },
      {
        title: 'Cadeira extensora',
        src: '/img/leg/cadeira-extensora.webp',
        reps: '4x∞'
      },
      {
        title: 'Cadeira abdutora',
        src: '/img/leg/cadeira-abducao.webp',
        reps: '3x∞'
      },
      {
        title: 'Cadeira ou mesa flexora',
        src: '/img/leg/cadeira-flexora.gif',
        reps: '4x∞'
      },
      {
        title: 'Stiff',
        src: '/img/leg/stiff-com-barra.gif',
        reps: '3x∞'
      },
      {
        title: 'Panturrilha sentado ou no Leg H.',
        src: '/img/leg/panturrilha-sentado.gif',
        reps: '4x∞'
      }
    ]
  },
  {
    weekDay: 4,
    weekDayName: 'Quinta-feira',
    trainings: [
      {
        title: 'Corrida (esteira)',
        src: '/img/others/esteira.webp',
        reps: '> 20min',
        hasCountdown: false
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
        title: 'Flexão de punho (2x)',
        src: '/img/arm/flexao-de-punho-com-halteres.jpg',
        reps: '3x∞'
      }
    ]
  }
] as TrainingDay[];
