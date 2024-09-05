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

                tempoRisposta: 0,
                swagTempo: 0,
            }
        },
        methods: {
            selezionato(i) {
                this.indiceAttivo = i;
                console.log(this.indiceAttivo);
            },
            mandaMessaggio() {
                this.cards[this.indiceAttivo].messages.push({date: '10/02/2024 12:33:22', message: this.messaggio, status: 'sent'});
                this.messaggio =  '';
                this.swagTempo = setInterval(() => {
                    this.tempoRisposta++;
                }, 2000);
                clearInterval(this.swagTempo);
                this.cards[this.indiceAttivo].messages.push({date: '10/02/2024 15:22:01', message: 'okay', status: 'receive'});

            }
        } 
    }
).mount("#app");
