// Vue
const { createApp } = Vue;

createApp (
    {
        data() {
            return{
                /* DATI */
                cards: dataUsers,
                messaggiUtente: dataMessaggiUtente,
                messaggiAmico: dataMessaggiAmico,
                /* VARIABILI ATTIVO*/
                attivo: "",
                indiceAttivo: 0,
                /* VARIABILI PER I MESSAGGI DA INVIARE */
                messaggioMostrato: '',
                messaggio: '',
                /* BARRA RICERCA VARIABILE */
                ricerca: '',
                /* INDICI PER TROVARE I VALORI DELLE BARRE DI RICERCA */
                cardActive: 0,
                indexVecchio: 0,
                /* VARIABILI PER UTILIZZO DI LUXON */
                dataOggi: '',
                orarioMessaggio: '', 
                /* VARIABILI PER DOG API*/
                razzaACaso: '',
            }
        },
        created() {
            this.funzioneOrarioMessaggi();
        },
        methods: {
            fetchDogApi(){
                axios
                    .get("https://dog.ceo/api/breeds/list/all")
                    .then((joshua) => {
                        const razza = Object.keys(joshua.data.message); 
                        this.razzaACaso = razza[Math.floor(Math.random() * razza.length)]; 
                        console.log(`swag razza: ` + this.razzaACaso);
                        this.razzaACaso = this.razzaACaso;
                        console.log(this.razzaACaso); 
                    })
                    .catch((errore) => {
                        console.error('razza non trovata', errore);
                    });
            },
            eliminaMessaggio(i) { 
                if (this.cards[this.indiceAttivo].messages[i].status == 'received') {
                    this.cards[this.indiceAttivo].messages.splice(i, 1, {
                        message: "Il messaggio è stato cancellato", 
                        status: 'receive'
                    });
                } else if (this.cards[this.indiceAttivo].messages[i].status == 'sent') {
                    this.cards[this.indiceAttivo].messages.splice(i, 1, {
                        message: "Il messaggio è stato cancellato", 
                        status: 'sent'
                    });
                }
            },
            selezionato(i) { 
                this.cardActive = this.swagBarraRicerca[i];
                this.indexVecchio = this.cards.findIndex(cardSwag => cardSwag.name == this.cardActive.name);
                this.indiceAttivo = this.indexVecchio;
                console.log(this.indiceAttivo);
            },
            mandaMessaggio() {
                this.fetchDogApi();
                const dataLuxon = luxon.DateTime.now();
                if (this.messaggio.trim()){ 
                    this.cards[this.indiceAttivo].messages.push({date: `${dataLuxon.day}/${dataLuxon.month}/${dataLuxon.year} ${dataLuxon.hour}:${dataLuxon.minute}:${dataLuxon.second}`, message: this.messaggio, status: 'sent'});
                    this.messaggio =  '';
                    setTimeout(() => {
                        this.cards[this.indiceAttivo].messages.push({date: '10/02/2024 15:22:01', message: 'Razza cane: ' + this.razzaACaso, status: 'received'});
                    }, 1000);
                }
            },
            funzioneOrarioMessaggi(){
                const dataLuxon = luxon.DateTime.now();
                this.orarioMessaggio = `${dataLuxon.day}/${dataLuxon.month}/${dataLuxon.year} ${dataLuxon.hour}:${dataLuxon.minute}:${dataLuxon.second}`;
            },
            mostraDropDown(i) {
                this.cards[this.indiceAttivo].messages[i].dropDownAttivo = true;
            },
            nascondiDropDown(i) {
                this.cards[this.indiceAttivo].messages[i].dropDownAttivo = false;
            }
        },
        computed: {
            swagBarraRicerca() {
                return this.cards.filter(cardSwag => {
                    return cardSwag.name.toLowerCase().includes(this.ricerca.toLowerCase());
                });
            },
        }
    }
).mount("#app");
