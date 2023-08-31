<script>
	import HeaderNavbar from './components/HeaderNavbar.vue';
	import FooterNavbar from './components/FooterNavbar.vue';
    export default{
        name: 'App',
        components: {
			HeaderNavbar,
			FooterNavbar,
		}
    }
</script>

<template>
    <HeaderNavbar/>
    <router-view></router-view>   
    <FooterNavbar/>
</template>

<style lang="scss">
    @use './scss/style.scss';
</style>
