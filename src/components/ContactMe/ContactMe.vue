<template>
    <div class="mt-top">
        <h3>Contato</h3>
        <div class="row div-main">
            <div class="col-md-6" style="margin-top: 20px;">
                <div class="form-floating">
                    <textarea class="form-control size-text-area" v-model="messageWhatsApp"></textarea>
                    <button type="button" class="btn btn-outline-dark btn-zap" @click="sendMessageWhatsApp()"><img
                            src="https://img.icons8.com/ios/50/000000/whatsapp--v1.png" /> Enviar
                        mensagem</button>
                </div>
            </div>
            <div class="col-md-6 div-main-addres">
                <div class="div-addres">
                    <ul>
                        <li><b>Cidade: </b>Barra Bonita, SP</li>
                        <li><b>Celular: </b>(14) 99907-4567</li>
                        <li><b>E-mail: </b><a href="mailto:AlexandreTavanoDeveloper@outlook.com"
                                target="_blank">AlexandreTavanoDeveloper@outlook.com</a></li>
                    </ul>
                </div>

                <div class="div-button">
                    <a class="btn btn-outline-dark" href="https://github.com/alexandretavanocardoso"
                        target="_blank"><img src="https://img.icons8.com/ios-glyphs/240/000000/github.png" /> Github</a>
                    <a class="btn btn-outline-info" href="https://www.linkedin.com/in/alexandretavano/"
                        target="_blank"><img src="https://img.icons8.com/color/144/000000/linkedin-circled.png" />
                        Linkedin</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactMeComponent',
    data: () => ({
        messageWhatsApp: "Olá, tudo bem ?",
        messageWhatsAppLink: "",
        linkWhatsApp: ""
    }),
    methods: {
        sendMessageWhatsApp() {
            if (this.messageWhatsApp.length < 1) {
                this.messageWhatsApp = "Olá, tudo bem ?"
            }

            this.messageWhatsAppLink = this.messageWhatsApp.replace(" ", "%20")
            window.location = `https://wa.me/5514999074567?text=${this.messageWhatsAppLink}`
        }
    }
}
</script>

<style src="./ContactMe.scss" lang="scss" scoped />