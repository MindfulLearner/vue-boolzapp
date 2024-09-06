// Vue
const { createApp } = Vue;

createApp (
    {
        data() {
            return{
                cards: dataUsers,
                messaggiUtente: dataMessaggiUtente,
                messaggiAmico: dataMessaggiAmico,


                attivo: "",
                indiceAttivo: 0,


                messaggioMostrato: '',
                messaggio: '',

                ricerca: '',


            }
        },
        methods: {
            /* sisstemare selezione*/
            selezionato(i) {
                this.indiceAttivo = i;
                console.log(this.indiceAttivo);
            },

            mandaMessaggio() {
                if (this.messaggio.trim()){ 
                    this.cards[this.indiceAttivo].messages.push({date: '10/02/2024 12:33:22', message: this.messaggio, status: 'sent'});
                    this.messaggio =  '';
                    setTimeout(() => {
                        this.cards[this.indiceAttivo].messages.push({date: '10/02/2024 15:22:01', message: 'okay', status: 'receive'});
                    }, 1000);
                }
            }
        },
        computed: {
            swagBarraRicerca() {
                return this.cards.filter(card => {
                    return card.name.toLowerCase().includes(this.ricerca.toLowerCase());
                });
            },
        }
    }
).mount("#app");
