import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/HomeView.vue';
import Jobs from '@/views/JobsView.vue';
import Resources from '@/views/ResourcesView.vue';
import User from '@/views/UserView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
