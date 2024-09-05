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
            }
        },
        methods: {
            selezionato(i) {
                this.indiceAttivo = i;
                console.log(this.indiceAttivo);




            }
        } 
    }
).mount("#app");
