import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProjectIndex from './views/ProjectIndex.vue';
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
]
});
export { router };