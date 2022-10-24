<template>
    <div class="mt-top">
        <h3>Formação acadêmica</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Etec Comendador João Rays - Curso Técnico, Desenvolvimento de sistema
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div>
                            <h5>Descrição</h5>
                            <p>É o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e
                                mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de
                                programação específica. Modela, implementa e mantém bancos de dados.</p>
                        </div>
                        <hr />
                        <CurriculumGridComponent formation="etec"></CurriculumGridComponent>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Faculdade FGP - Sistema de Informação (Cursando)
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <div>
                            <h5>Descrição</h5>
                            <p>Este curso tem como objetivo, formar profissionais que, apoiados nos conceitos e técnicas
                                de informática, teoria de sistemas e administração, contribuam na solução de problemas
                                de tratamento de informação nas organizações, por meio da concepção, construção e
                                manutenção de modelos informatizados de automação corporativa.</p>
                        </div>
                        <hr />
                        <CurriculumGridComponent formation="fgp"></CurriculumGridComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CurriculumGridComponent from '@/components/_comuns/CurriculumGrid/CurriculumGrid.vue'

export default {
    name: 'FormationAcademicComponent',
    components: {
        CurriculumGridComponent
    }
}
</script>

<style src="./FormationAcademic.scss" lang="scss" scoped />