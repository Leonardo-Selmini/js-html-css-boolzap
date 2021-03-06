const app = new Vue({
  el: '#root',
  data: {
    currentIndex: 0,
    search: '',
    searchNew: '',
    closed: false,
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        newMessage: '',
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
        newMessage: '',
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
        newMessage: '',
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
        newMessage: '',
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
    ],
    newContacts: [
      {
        name: 'Giacomo',
        avatar: '_5',
        visible: true,
        newMessage: '',
        messages: [
          {
            date: dayjs().format('HH:mm'),
            message: 'Ciao! Sto usando WhatsApp',
            status: 'received'
          }
        ],
      },
      {
        name: 'Alessia',
        avatar: '_6',
        visible: true,
        newMessage: '',
        messages: [
          {
            date: dayjs().format('HH:mm'),
            message: 'Ciao! Sto usando WhatsApp',
            status: 'received'
          }
        ],
      },
      {
        name: 'Guglielmo',
        avatar: '_7',
        visible: true,
        newMessage: '',
        messages: [
          {
            date: dayjs().format('HH:mm'),
            message: 'Ciao! Sto usando WhatsApp',
            status: 'received'
          }
        ],
      },
      {
        name: 'Giovanni',
        avatar: '_8',
        visible: true,
        newMessage: '',
        messages: [
          {
            date: dayjs().format('HH:mm'),
            message: 'Ciao! Sto usando WhatsApp',
            status: 'received'
          }
        ],
      },
      {
        name: 'Elisa',
        avatar: '_9',
        visible: true,
        newMessage: '',
        messages: [
          {
            date: dayjs().format('HH:mm'),
            message: 'Ciao! Sto usando WhatsApp',
            status: 'received'
          },
        ],
      }
    ]
  },
  methods: {
    sendMessage: function () {
      const message = {
        date: dayjs().format('HH:mm'),
        message: this.contacts[this.currentIndex].newMessage,
        status: 'sent'
      };
      this.contacts[this.currentIndex].messages.push(message);
      this.contacts[this.currentIndex].newMessage = '';
      const ok = {
        date: dayjs().format('HH:mm'),
        message: 'ok',
        status: 'received'
      };
      const that = this;
      setTimeout(function () {
        that.contacts[that.currentIndex].messages.push(ok);
      }, 1000);
    },

    searchChat: function(message) {
      this.contacts.forEach(element => {
        if (!element.name.toLowerCase().includes(message.toLowerCase())) {
          element.visible = false;
        } else {
          element.visible = true;
        }
      });
      if (message.length == 0) {
        this.contacts.forEach(element => {
          element.visible = true;
        });
      }
    },

    searchNewChat: function(message) {
      this.newContacts.forEach(element => {
        if (!element.name.toLowerCase().includes(message.toLowerCase())) {
          element.visible = false;
        } else {
          element.visible = true;
        }
      });
      if (message.length == 0) {
        this.newContacts.forEach(element => {
          element.visible = true;
        });
      }
    },

    closeIt: function() {
      this.closed = true;
    },

    deleteMessage: function(index) {
      this.contacts[this.currentIndex].messages.splice(index, 1);
    },

    startChat: function(index) {
      this.contacts.push(this.newContacts[index]);
      this.newContacts.splice(index, 1);
    }

  // end methods    
  }
// end vue instance
})

