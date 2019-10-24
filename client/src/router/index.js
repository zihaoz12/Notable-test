import Vue from 'vue'
import VueRouter from 'vue-router'
import NewAppointment from '../views/NewAppointment.vue'
import AppointmentsLists from '../views/AppointmentsLists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/appointments/index'
  },
  {
    path:'/appointments/create',
    name:'new-appointment',
    component:NewAppointment
  },
  {
    path:'/appointments/list',
    name:'list-appointment',
    component:AppointmentsLists
  }
 
]

const router = new VueRouter({
  routes
})

export default router
