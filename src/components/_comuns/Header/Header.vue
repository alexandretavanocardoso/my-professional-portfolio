<template>
    <nav class="navbar navbar-expand-lg" style="background-color: rgba(92, 92, 92, 0.9);">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#" @click="navigateNextPage('AboutMeComponent')">💻 ALEXANDRE TAVANO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a @click="navigateNextPage('AboutMeComponent')" class="nav-link text-white" aria-current="page"
                            href="#">Sobre mim</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a @click="navigateNextPage('CurriculumComponent')" class="nav-link text-white" aria-current="page"
                            href="#">Currículo</a>
                    </li> -->
                    <li class="nav-item">
                        <a @click="navigateNextPage('SkillComponent')" class="nav-link text-white"
                            href="#">Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a @click="navigateNextPage('ProjectComponent')" class="nav-link text-white"
                            href="#">Projetos</a>
                    </li>
                    <li class="nav-item">
                        <a @click="navigateNextPage('CourseComponent')" class="nav-link text-white"
                            href="#">Cursos</a>
                    </li>
                    <li class="nav-item">
                        <a @click="navigateNextPage('FormationAcademicComponent')" class="nav-link text-white"
                            href="#">Formação-Acadêmica</a>
                    </li>
                    <li class="nav-item">
                        <a @click="navigateNextPage('ContactMeComponent')" class="nav-link text-white"
                            href="#">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderComponent",
    methods: {
        navigateNextPage(tela) {
            this.$emit("navigate", tela);
        }
    }
}
</script>









<style src="./Header.scss" lang="scss" scoped />