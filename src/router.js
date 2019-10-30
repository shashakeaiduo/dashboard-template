import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Trending from './views/Trending.vue'

// vue-router issue imported by ElementUI
// TODO: upgrade ElementUI to 2.13.0
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/trending',
      name: 'Trending',
      component: Trending
    },
    {
      path: '/about',
      name: "About",
      component: About
    },
    {
      path: '/subhome',
      name: "SubHome",
      component: Home
    },
    {
      path: '/subabout',
      name: "SubAbout",
      component: About
    }
  ]
})

export default router