<template>
    <div v-if="this.formation == 'etec'">
        <h5>Grade curricular</h5>
        <div style="margin-top: 20px;" class="row">
            <div class="col-md-4">
                <ul>
                    <li><b>Módulo I</b></li>
                    <li>Linguagem, Trabalho e Tecnologia.</li>
                    <li>Programação e Algoritmos.</li>
                    <li>Banco de Dados I.</li>
                    <li>Análise e Projeto de Sistemas.</li>
                    <li>Design Digital.</li>
                    <li>Programação Web I.</li>
                    <li>Fundamentos da Informática.</li>
                    <li>Técnicas de Programação.</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>Módulo II</b></li>
                    <li>Inglês Instrumental.</li>
                    <li>Desenvolvimento de Sistemas.</li>
                    <li>Banco de Dados II.</li>
                    <li>Internet e Protocolos.</li>
                    <li>Programação de Aplicativos Mobile I.</li>
                    <li>Programação Web II.</li>
                    <li>Planejamento do Trabalho de Conclusão de Curso (TCC).</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>Módulo III</b></li>
                    <li>Segurança de Sistemas de Informação.</li>
                    <li>Banco de Dados III.</li>
                    <li>Sistemas Embarcados.</li>
                    <li>Programação de Aplicativos Mobile II.</li>
                    <li>Programação Web III.</li>
                    <li>Qualidade e Teste de Software.</li>
                    <li>Ética e Cidadania Organizacional.</li>
                    <li>Desenvolvimento do Trabalho de Conclusão de Curso (TCC).</li>
                </ul>
            </div>
        </div>
    </div>

    <div v-if="this.formation == 'fgp'">
        <h5>Grade curricular</h5>
        <div style="margin-top: 20px;" class="row">
            <div class="col-md-4">
                <ul>
                    <li><b>1º Semestre: Núcleo Instrumental</b></li>
                    <li>Empresas, Mercados e Negócios.</li>
                    <li>Matemática Aplicada.</li>
                    <li>Comunicação Empresarial.</li>
                    <li>Psicologia Aplicada.</li>
                    <li>Fundamentos da Administração.</li>
                    <li>Projeto Integrador.</li>
                    <li>Atividades Complementares.</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>2º Semestre: Núcleo Instrumental</b></li>
                    <li>Algoritmos e Lógica de Programação.</li>
                    <li>Estatística Aplicada.</li>
                    <li>Desenvolvimento Humano e Profissional.</li>
                    <li>Fundamentos da WEB.</li>
                    <li>Filosofia e Ética profissional.</li>
                    <li>Projeto Integrador.</li>
                    <li>Atividades Complementares.</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>3º Semestre: Núcleo Instrumental</b></li>
                    <li>Fundamentos e Estrutura de Banco de Dados.</li>
                    <li>Sistemas de Informações Gerenciais Integrados.</li>
                    <li>Engenharia de Software.</li>
                    <li>Arquitetura e Organização de Computadores.</li>
                    <li>Sociologia e Relações Étnico Raciais.</li>
                    <li>Projeto Integrador.</li>
                    <li>Atividades Complementares.</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>4º Semestre: Núcleo Instrumental</b></li>
                    <li>Introdução a Orientação por Objetos.</li>
                    <li>Sistemas Operacionais.</li>
                    <li>Tópicos em Engenharia de Software.</li>
                    <li>Tópicos em Estrutura de Dados.</li>
                    <li>Fundamentos de Redes de Computadores.</li>
                    <li>Projeto Integrador.</li>
                    <li>Atividades Complementares.</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>5º Semestre: Núcleo Instrumental</b></li>
                    <li>Gerenciamento e Monitoramento de Redes de Computadores.</li>
                    <li>Gerenciamento e Segurança de Banco de Dados.</li>
                    <li>Desenvolvimento de Software para WEB e Dispositivos Móveis.</li>
                    <li>Governança Corporativa Empreendedorismo.</li>
                    <li>Projeto Integrador.</li>
                    <li>Atividades Complementares.</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>6º Semestre: Núcleo Instrumental</b></li>
                    <li>Computação Cognitiva e Semântica.</li>
                    <li>Business Intelligence e Big Data Analycts.</li>
                    <li>Design para WEB.</li>
                    <li>Gestão de Projetos Marketing Digital.</li>
                    <li>Projeto Integrador.</li>
                    <li>Atividades Complementares.</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>7º Semestre: Núcleo Instrumental</b></li>
                    <li>Integração Entre Sistemas Computacionais.</li>
                    <li>Trabalho Conclusão de Curso I.</li>
                    <li>Orientação Estagio Supervisionado.</li>
                    <li>Gestão Ambiental.</li>
                    <li>Negociação e Resolução de Conflitos.</li>
                    <li>Estagio Supervisionado.</li>
                    <li>Projeto Integrador.</li>
                    <li>Atividades Complementares.</li>
                </ul>
            </div>
            <div class="col-md-4">
                <ul>
                    <li><b>8º Semestre: Núcleo Instrumental</b></li>
                    <li>Arquitetura Orientada a Serviço e WEBSERVICE.</li>
                    <li>Administração de Recursos Humanos.</li>
                    <li>Inovação e Negócios.</li>
                    <li>Trabalho de Conclusão de Curso II.</li>
                    <li>Orientação Estagio Supervisionado.</li>
                    <li>Estagio Supervisionado.</li>
                    <li>Projeto Integrador.</li>
                    <li>Atividades Complementares.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CurriculumGridComponent',
    props: {
        formation: String
    }
} 
</script>

<style src="./CurriculumGrid.scss" lang="scss" scoped></style>