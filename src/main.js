import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from "@/Home";
import Task from "@/Task";
import './index.css';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tasks/:task_id',
        name: 'Task',
        component: Task
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


createApp(App).use(router).mount('#app')
