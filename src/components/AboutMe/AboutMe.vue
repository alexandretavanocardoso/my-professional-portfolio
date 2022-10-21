<template>
    <div class="mt-top">
        <h3>Sobre mim</h3>
        <div class="row card-background">
            <div class="col-md-12">
                <h2 class="title">Alexandre Tavano Cardoso</h2>
                <p class="description">
                    Me chamo Alexandre Tavano Cardoso, tenho 20 anos, atualmente sou desenvolvedor fullstack, estou
                    sempre
                    buscando aprimorar meus conhecimentos e métodos para melhorar minha performance e minhas
                    habilidades,
                    visando um código limpo e com qualidade. <br /><br />

                    <b>Github: </b><a href="https://github.com/alexandretavanocardoso" target="_blank"
                        rel="noopener noreferrer">Meu Github</a> <br />
                    <b>Linkedin: </b><a href="https://www.linkedin.com/in/alexandretavano/" target="_blank"
                        rel="noopener noreferrer">Meu Linkedin</a>
                </p>

                <div class="about2">
                    <div>
                        <img src="https://img.icons8.com/material-sharp/100/000000/espresso-cup--v1.png">
                        <h4><b>{{coffe}}</b> Copos de café</h4>
                    </div>
                    <div>
                        <img
                            src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/100/000000/external-graphic-sales-vitaliy-gorbachev-lineal-vitaly-gorbachev.png">
                        <h4><b>3</b> Anos de experiência</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMeComponent',
    data: () => ({
        coffe: 0
    }),
    created() {
        setInterval(this.coffe = Math.floor(Math.random() * 1000) + 1, 1000)
    }
}
</script>

<style src="./AboutMe.scss" lang="scss" scoped />