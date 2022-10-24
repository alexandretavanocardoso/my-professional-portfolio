<template>
    <div class="mt-top">
        <h3>Projetos pessoais</h3>
        <ProjectListComponent></ProjectListComponent>
    </div>
</template>

<script>
import ProjectListComponent from '@/components/_comuns/ProjectList/ProjectList.vue'

export default {
    name: 'ProjectComponent',
    components: {
        ProjectListComponent
    }
}
</script>













<style src="./Project.scss" lang="scss" scoped />