import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Landing'
import ThankYou from './pages/ThankYou'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      component: ThankYou
    }
  ]
})
