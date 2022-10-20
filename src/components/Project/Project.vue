<template>
    <div class="div-principal">
        <div class="row" v-for="(project, index) in projects" :key="index">
            <div class="col-4">
                <div class="card card-project">
                    <div class="card-body">
                        <h5 class="card-title">{{project.title}}</h5>
                        <div class="buttons">
                            <a target="_blank" :href="project.linkGit" class="btn btn-primary btn-sm">Github</a>
                            <a target="_blank" :href="project.outherLink" class="btn btn-danger btn-sm"
                                v-if="project.outherLink">Hospedagem</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectComponent',
    data: () => ({
        projects: [
            {
                title: "my-professional-portfolio",
                linkGit: "https://github.com/alexandretavanocardoso/my-professional-portfolio",
                outherLink: "https://alexandre-tavano-cardoso.herokuapp.com"
            },
            {
                title: "ETEC_Projeto_Atelie_Moonchild",
                linkGit: "https://github.com/alexandretavanocardoso/ETEC_Projeto_Atelie_Moonchild",
                outherLink: ""
            },
            {
                title: "alexandretavanocardoso",
                linkGit: "https://github.com/alexandretavanocardoso/alexandretavanocardoso",
                outherLink: ""
            },
            {
                title: "Decrypt_CSharp",
                linkGit: "https://github.com/alexandretavanocardoso/Decrypt_CSharp",
                outherLink: ""
            },
            {
                title: "Vidracaria_Portal",
                linkGit: "https://github.com/alexandretavanocardoso/Vidracaria_Portal",
                outherLink: ""
            }
        ]
    })
}
</script>









<style src="./Project.scss" lang="scss" scoped />