<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
    export default{
        name: 'ProjectIndex',
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
                })
                .then((response) => {
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            showSingleProject(projectSlug){
                this.$router.push({name: 'Project', params: { slug: projectSlug }});
            }
        },
        created() {
            this.getProjects();
        },

    }
</script>

<template>
    <h1>Project List:</h1>
    <div class="container">
        <ul class="project_list">
            <li v-for="project in projects">
                <ProjectCard :project="project" @click="showSingleProject(project.slug)"/>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    h1{
        color: aliceblue;
    }
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