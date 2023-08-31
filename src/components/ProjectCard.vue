<script>
    export default{
        name: 'ProjectCard',
        props: {
            project: Object,
        },
    }
</script>

<template>
    <div class="card">
        <img :src="project.image" :alt="project.title">
        <p class="title">
            {{ project.title }}
        </p>
        <p class="type" :style="'color:' + project.type.color + ';'">
            {{ project.type.name }}
        </p>
        <p class="topic">
            {{ project.topic }}
        </p>
        <ul class="technology_list">
            <li v-for="technology in project.technologies" :style="'color:' + technology.border_color + ';'">
                {{ technology.name }}
            </li>
        </ul>
        <a :href="project.gitHub" class="gitHub_btn">
            See this Project Repository
        </a>
    </div>
</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        justify-content: end;
        flex-direction: column;
        width: 700px;
        height: 100%;
        background-color: rgb(183, 183, 183);
        overflow: hidden;
        border-radius: 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        img{
            width: 100%;
            display: block;
        }
        .title{
            text-transform: uppercase;
            font-size: 1.5rem;
            padding: 0 1rem;
        }
        .topic{
            text-transform: capitalize;
            font-size: 1.2rem;
            padding: 0 1rem;
        }

        .type{
            text-transform: uppercase;
            font-size: 1.4rem;
            padding: 0 1rem;
        }

        .technology_list{
            list-style: none;
            display: flex;
            gap: 1rem;
            padding: 0 1rem;
        }

        .gitHub_btn{
            display: block;
            margin: 2rem 1rem;
            text-decoration: none;
            color: azure;
            background-color: rgb(33, 129, 129);
            padding: 0.7rem 2rem;
            border-radius: 10px;
        }
    }
</style>
