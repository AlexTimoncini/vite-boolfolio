<script>
    export default{
        name: 'AppHeader'
    }
</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'Home' }">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Projects' }">Projects</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    nav{
        height: 50px;
        background-color: aliceblue;
        color: black;

        ul{
            list-style: none;
            display: flex;
            justify-content: space-around;
            font-size: 2rem;
            font-family: sans-serif;
            text-transform: uppercase;
            
            a{
                text-decoration: none;
                color: black;
            }
        }
    }
</style>