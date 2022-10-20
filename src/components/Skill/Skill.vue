<template>
    <div class="div-main">
        <div class="row" v-for="(skill, index) in skills" :key="index">
            <div class="col-md-3 card-skill">
                <img :src="skill.img"/>
                <h4>{{skill.title}}</h4>
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
                title: 'Vuejs'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/html-5--v1.png',
                title: 'Html'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/sass.png',
                title: 'Sass'
            },
            {
                img: 'https://img.icons8.com/color/144/7950F2/css3.png',
                title: 'Css'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/javascript--v1.png',
                title: 'Javascript'
            },
            {
                img: 'https://img.icons8.com/ios-filled/100/000000/jquery.png',
                title: 'Jquery'
            },
            {
                img: 'https://img.icons8.com/ios-filled/150/000000/c-sharp-logo.png',
                title: 'C#'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/net-framework.png',
                title: '.Net Core'
            },
            {
                img: 'https://img.icons8.com/dotty/100/000000/sql.png',
                title: 'Sql Server'
            },
            {
                img: 'https://img.icons8.com/ios-glyphs/240/000000/github.png',
                title: 'Github'
            },
            {
                img: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/000000/external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-color-tal-revivo.png',
                title: 'BitBucket'
            },
            {
                img: 'https://img.icons8.com/color/144/000000/heroku.png',
                title: 'Heroku'
            },
            {
                img: 'https://img.icons8.com/fluency/100/000000/sprint-iteration.png',
                title: 'Scrum'
            },
            {
                img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/100/000000/external-kanban-project-management-flaticons-flat-flat-icons-2.png',
                title: 'Kanban'
            }
        ]
    })
}
</script>

<style src="./Skill.scss" lang="scss" scoped />