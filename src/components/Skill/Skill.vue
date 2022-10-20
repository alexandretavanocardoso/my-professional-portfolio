<template>
    <div class="div-main">
        <div class="row" v-for="(skill, index) in skills" :key="index">
            <div class="col-md-3 card-skill">
                <img :src="skill.img"/>
                <h4>{{skill.title}}</h4>
                <p>{{skill.categoria}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillComponent',
    data: () => ({
        skills: [
            {
                img: 'https://img.icons8.com/color/144/000000/vue-js.png',
                title: 'Vuejs',
                categoria: 'Frontend'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/html-5--v1.png',
                title: 'Html',
                categoria: 'Frontend'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/sass.png',
                title: 'Sass',
                categoria: 'Frontend'
            },
            {
                img: 'https://img.icons8.com/color/144/7950F2/css3.png',
                title: 'Css',
                categoria: 'Frontend'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/javascript--v1.png',
                title: 'Javascript',
                categoria: 'Frontend'
            },
            {
                img: 'https://img.icons8.com/ios-filled/100/000000/jquery.png',
                title: 'Jquery',
                categoria: 'Frontend'
            },
            {
                img: 'https://img.icons8.com/ios-filled/150/000000/c-sharp-logo.png',
                title: 'C#',
                categoria: 'Backend'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/net-framework.png',
                title: '.Net Core',
                categoria: 'Backend'
            },
            {
                img: 'https://img.icons8.com/dotty/100/000000/sql.png',
                title: 'Sql Server',
                categoria: 'Backend'
            },
            {
                img: 'https://img.icons8.com/ios-glyphs/240/000000/github.png',
                title: 'Github',
                categoria: 'Versionamento'
            },
            {
                img: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/000000/external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-color-tal-revivo.png',
                title: 'BitBucket',
                categoria: 'Versionamento'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/heroku.png',
                title: 'Heroku',
                categoria: 'Hospedagem'
            },
            {
                img: 'https://img.icons8.com/fluency/100/000000/sprint-iteration.png',
                title: 'Scrum',
                categoria: 'Métodos Ágeis'
            },
            {
                img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/100/000000/external-kanban-project-management-flaticons-flat-flat-icons-2.png',
                title: 'Kanban',
                categoria: 'Métodos Ágeis'
            }
        ]
    })
}
</script>

<style src="./Skill.scss" lang="scss" scoped />