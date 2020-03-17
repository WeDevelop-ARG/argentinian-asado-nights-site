import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Landing'
import ThankYou from './pages/ThankYou'
import PreviousEventInnerSection from './pages/PreviousEventInnerSection'

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
    },
    {
      path: '/previous-event',
      name: 'PreviousEventInnerSection',
      component: PreviousEventInnerSection,
      props: true
    }
  ]
})
