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
            }
        },
        methods: {

        } 
    }
).mount("#app");
