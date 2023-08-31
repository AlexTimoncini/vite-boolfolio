<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
    export default{
        name: 'ProjectShow',
        components: {
            ProjectCard
        },
        data() {
            return {
                singleProject: '',
                projectsApi: 'http://127.0.0.1:8000/api/projects',
            }
        },
        methods: {
            getSingleProject(){
                axios.get((this.projectsApi + '/' + this.$route.params.slug), {
                })
                .then((response) => {
                    this.singleProject = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        },
        beforeMount() {
            this.getSingleProject();
        },
    }
</script>

<template>
    <h1>Look at me:</h1>
    <div class="container">
        <ProjectCard :project="this.singleProject" v-if="typeof this.singleProject === 'object'"/>
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