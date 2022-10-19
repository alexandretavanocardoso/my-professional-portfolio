<template>
    <div class="dropdown space">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Linguagem
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click="changeLanguage()">Português</a></li>
            <li><a class="dropdown-item" href="#" @click="changeLanguage()">Inglês</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TranslationComponent',
    methods: {
        changeLanguage() {
            console.log("correct")
        }
    }
}
</script>

<style lang="scss" scoped>
.space{
    margin-left: 15px;
}
</style>