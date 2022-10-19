<template>
    <div>
        <HeaderComponent @navigate="navigatePage = $event"></HeaderComponent>

        <div class="container mt30">
            <KeepAlive>
                <div>
                    <component :is="navigatePage"></component>
                </div>
            </KeepAlive>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/_comuns/Header/Header.vue'
import AboutMeComponent from '@/components/AboutMe/AboutMe.vue'
import SkillComponent from '@/components/Skill/Skill.vue'
import ProjectComponent from '@/components/Project/Project.vue'
import FormationAcademicComponent from '@/components/FormationAcademic/FormationAcademic.vue'
import LicenceComponent from '@/components/Licence/Licence.vue'
import ContactMeComponent from '@/components/ContactMe/ContactMe.vue'
import FooterComponent from '@/components/_comuns/Footer/Footer.vue'

export default {
    name: 'HomeComponent',
    data: () => ({
        navigatePage: "AboutMeComponent"
    }),
    components: {
        HeaderComponent,
        AboutMeComponent,
        SkillComponent,
        ProjectComponent,
        FormationAcademicComponent,
        LicenceComponent,
        ContactMeComponent,
        FooterComponent
    }
}
</script>

<style src="./Home.scss" lang="scss" scoped />