import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import JobView from '../views/jobs/JobView.vue'
import JobDetail from '../views/jobs/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'Job',
    component: JobView
  },
  {
    path: '/jobs/:id',
    name: 'Jobdetail',
    component: JobDetail,
    props: true
  },
  // make simple redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // all not found pages
  {
    path:'/:catchAll(.*)',
    component: NotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
