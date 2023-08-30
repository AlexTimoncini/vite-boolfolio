<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
    export default{
        name: 'ProjectList',
        components: {
            ProjectCard
        },
        data() {
            return {
                projects: [],
                projectsApi: 'http://127.0.0.1:8000/api/projects',
            }
        },
        methods: {
            getProjects(){
                axios.get(this.projectsApi, {
                    params: {
                    ID: 12345
                    }
                })
                .then((response) => {
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        created() {
            this.getProjects();
        },

    }
</script>

<template>
    <div class="container">
        <ul class="project_list">
            <li v-for="project in projects">
                <ProjectCard :project="project"/>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        max-width: 1500px;
        width: 100%;
        margin: auto;
        padding: 5rem 0;

        .project_list{
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-wrap: wrap;
            list-style: none;
            gap: 1rem;
            width: 100%;
        }
    }
</style>
