<template>
    <div>
        <HeaderComponent></HeaderComponent>

        <div class="container mt30">
            <AboutMeComponent></AboutMeComponent>
            <SkillComponent></SkillComponent>
            <ProjectComponent></ProjectComponent>
            <ContactMeComponent></ContactMeComponent>
            <FooterComponent></FooterComponent>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/_comuns/Header/Header.vue'
import AboutMeComponent from '@/components/AboutMe/AboutMe.vue'
import SkillComponent from '@/components/Skill/Skill.vue'
import ProjectComponent from '@/components/Project/Project.vue'
import ContactMeComponent from '@/components/ContactMe/ContactMe.vue'
import FooterComponent from '@/components/_comuns/Footer/Footer.vue'

export default {
    name: 'HomeComponent',
    components: {
        HeaderComponent,
        AboutMeComponent,
        SkillComponent,
        ProjectComponent,
        ContactMeComponent,
        FooterComponent
    }
}
</script>

<style src="./Home.scss" lang="scss" scoped />