<template>
    <div class="mt-top">
        <h3>Cursos</h3>
        <CoursesListComponent></CoursesListComponent>
    </div>
</template>

<script>
import CoursesListComponent from '@/components/_comuns/CoursesList/CoursesList.vue'

export default {
    name: 'CourseComponent',
    components: {
        CoursesListComponent
    }
}
</script>















<style src="./Course.scss" lang="scss" scoped />