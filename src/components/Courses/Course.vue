<template>
    <div class="mt-top">
        <h3>Cursos</h3>
        <div class="div-main">
            <div class="row" v-for="(course, index) in courses" :key="index">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="@/assets/img/udemy.png" alt="Udemy" width="50" height="50">
                            <h5 class="card-title">{{course.title}}</h5>
                            <a target="_blank" :href="course.link" class="btn btn-outline-dark" v-if="course.link">Certificado</a>
                            <p v-else style="margin-top: 20px; text-decoration: underline;">EM ANDAMENTO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseComponent',
    data: () => ({
        courses: [
            {
                title: "Desenvolvimento Web com Vue",
                link: ""
            },
            {
                title: "C# COMPLETO Programação Orientada a Objetos",
                link: "https://www.udemy.com/certificate/UC-ba2b02fd-c24f-458a-a94d-2f22d0a2aba1/"
            },
            {
                title: "O curso de Banco de Dados e SQL",
                link: "https://www.udemy.com/certificate/UC-3289de98-d515-4ad0-8fe4-008ae25732ae/"
            },
            {
                title: "TDD em C# com xUnit, NUnit e Moq",
                link: "https://www.udemy.com/certificate/UC-8e06cec3-7e77-4ace-98ea-60ec666d9e22/"
            },
            {
                title: "Curso Web API ASP .NET Core Essencial",
                link: "https://www.udemy.com/certificate/UC-cba2a049-77a2-4d7d-bf09-e5bd4a4609ec/"
            },
            {
                title: "Git e Github Essencial para o Desenvolvedor",
                link: "https://www.udemy.com/certificate/UC-469a870e-e82a-4929-abe8-732cd2e468ff/"
            },
            {
                title: "Linguagem de programação C# - Avançado",
                link: "https://www.udemy.com/certificate/UC-603b1528-fe33-4712-889c-38bebc19bf2f/"
            },
            {
                title: "Crie uma Web API com Asp .NET Core + EF Core + Docker",
                link: ""
            },
            {
                title: "Curso CSS3 Avançado - Projeto Web Responsive",
                link: "https://www.udemy.com/certificate/UC-14b7ddf5-785b-45e2-8779-7b9af4013017/"
            },
            {
                title: "HTML5 e CSS3",
                link: "https://www.udemy.com/certificate/UC-f250ca87-a1d2-4f9c-a580-6404a4feb208/"
            },
            {
                title: "jQuery - Curso COMPLETO Com Projetos Reais",
                link: "https://www.udemy.com/certificate/UC-6acbbda9-7049-4fe7-a337-15c195493304/"
            },
            {
                title: "Design Patterns com C#",
                link: "https://www.udemy.com/certificate/UC-fe07974b-be46-4e20-8f79-af87fd09adc9/"
            },
            {
                title: "Figma Design de interfaces do zero ao profissional",
                link: "https://www.udemy.com/certificate/UC-8c96e90b-5178-4f1d-a836-c80b5a443bf0/"
            }
        ]
    })
}
</script>















<style src="./Course.scss" lang="scss" scoped />