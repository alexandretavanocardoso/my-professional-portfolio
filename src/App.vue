<template>
  <div>
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
import HomeComponent from '@/views/Home/Home.vue'

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
