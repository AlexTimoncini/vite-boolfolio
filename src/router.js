import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProjectIndex from './views/ProjectIndex.vue';
import ProjectShow from './views/ProjectShow.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'Home',
component: Home
},
{
    path: '/projects',
    name: 'Projects',
    component: ProjectIndex
},
{
    path: '/projects/:slug',
    name: 'Project',
    component: ProjectShow
},
]
});
export { router };