import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About.vue'
// const Menu = () => import('./components/Menu.vue')
// const Admin = () =>
//   import(/* webpackChunkName: "footer-group" */ './components/Admin.vue')
// const About = () =>
//   import(/* webpackChunkName: "footer-group" */ './components/About.vue')
import Contact from './components/Contact.vue'
import Delivery from './components/Delivery.vue'
import History from './components/History.vue'
import OrderingGuide from './components/OrderingGuide.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior(to) {
    //   return { x: 0, y: 0 }
    // return { selector: '.btn' }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'ordering-guide': OrderingGuide,
        delivery: Delivery,
        history: History
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        alert('Only for authorised personal')
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: '/contact',
          name: 'contact',
          component: Contact
        },
        {
          path: '/history',
          name: 'history',
          component: History
        },
        {
          path: '/delivery',
          name: 'delivery',
          component: Delivery
        },
        {
          path: '/oredring-guide',
          name: 'OrderingGuide',
          component: OrderingGuide
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '*',
      redirect: '/'
    }
  ]
})
