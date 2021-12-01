const app = new Vue({
  el: '#root',
  data: {
    currentIndex: 0,
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '15:30',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '15:50',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '16:15',
            message: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
          date: '16:30',
          message: 'Ciao come stai?',
          status: 'sent'
        },
        {
          date: '16:30',
          message: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
        },
        {
          date: '16:35',
          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'received'
        }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
          date: '10:10',
          message: 'La Marianna va in campagna',
          status: 'received'
        },
        {
          date: '10:20',
          message: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
        },
        {
          date: '16:15',
          message: 'Ah scusa!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Marco',
        avatar: '_4',
        visible: true,
        messages: [{
          date: '15:30',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
        },
        {
          date: '15:50',
          message: 'Si, ma preferirei andare al cinema',
          status: 'received'
        }
        ],
      },
    ]
  },
  methods: {

  }
})