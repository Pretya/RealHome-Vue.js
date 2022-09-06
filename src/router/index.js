import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PropertyView from '../views/PropertyView.vue'
import BlogView from '../views/BlogView.vue'
import ContactsView from '../views/ContactsView.vue'

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
    path: '/property',
    name: 'property',
		component: PropertyView
  },
	{
    path: '/Blog',
    name: 'Blog',
		component: BlogView
  },
	{
    path: '/Contacts',
    name: 'Contacts',
		component: ContactsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
