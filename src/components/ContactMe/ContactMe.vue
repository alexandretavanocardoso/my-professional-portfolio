<template>
    <div class="row div-principal">
        <div class="col-6">
            <div v-for="(contact, index) in contacts" :key="index">
                <i :class="contact.icon"></i>
                <h4>{{contact.title}}</h4>
                <p>{{contact.subtitle}}</p>
            </div>

            <div>
                <button class="btn btn-outline-dark"><a href="https://github.com/alexandretavanocardoso" target="_blank">Github</a></button>
                <button class="btn btn-outline-primary"><a href="https://www.linkedin.com/in/alexandretavano/" target="_blank">Linkedin</a></button>
            </div>
        </div>
        <div class="col-6">
            <div class="form-floating">
                <textarea class="form-control" v-model="messageWhatsApp"></textarea>
                <button type="button" class="btn btn-primary" @click="sendMessageWhatsApp()">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactMeComponent',
    data: () => ({
        contacts: [
            {
                icon: "",
                title: "Cidade",
                subtitle: "Barra Bonita, SP"
            },
            {
                icon: "",
                title: "Celular",
                subtitle: "(14) 99907-4567"
            },
            {
                icon: "",
                title: "E-mail",
                subtitle: "AlexandreTavanoDeveloper@outlook.com"
            }
        ],
        messageWhatsApp: ""
    }),
    methods: {
        sendMessageWhatsApp() {
            console.log(this.messageWhatsApp)
        }
    }
}
</script>



<style src="./ContactMe.scss" lang="scss" scoped />