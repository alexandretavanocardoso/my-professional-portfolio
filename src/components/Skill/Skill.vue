<template>
    <div class="mt-top">
        <h3>Habilidades em desenvolvimento</h3>
        <SkillsListComponent></SkillsListComponent>
    </div>
</template>

<script>
import SkillsListComponent from '@/components/_comuns/SkillsList/SkillsList.vue'

export default {
    name: 'SkillComponent',
    components: {
        SkillsListComponent
    }
}
</script>

<style src="./Skill.scss" lang="scss" scoped />