<script>
  import ProjectList from './components/ProjectList.vue';
    export default{
        name: 'App',
        components: {
          ProjectList
        }
    }
</script>

<template>
    <ProjectList/>
</template>

<style lang="scss">
  @use './scss/style.scss';
</style>
