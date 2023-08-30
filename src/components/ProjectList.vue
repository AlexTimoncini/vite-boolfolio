<script>
import axios from 'axios';
    export default{
        name: 'ProjectList',
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
            <li v-for="project in projects" class="project">
                <div class="card">
                    <img :src="project.image" :alt="project.title">
                    <p class="title">
                        {{ project.title }}
                    </p>
                    <p class="topic">
                        {{ project.topic }}
                    </p>
                    <p class="type" :style="'color:' + project.type.color + ';'">
                        {{ project.type.name }}
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
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        max-width: 1500px;
        margin: auto;

        .project_list{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            list-style: none;
            gap: 1rem;
            .project{
                width: calc((100% / 4) - 3rem);
                background-color: beige;
                border-radius: 10px;

                img{
                    width: 100%;
                    display: block;
                }
            }
        }
    }
</style>
