import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:() => import("../components/index")
    },
    {
      path: "/index",
      component: () => import("../components/index")
    },
    {
      path:'/Bloe-page-1',
      component: () => import("../view/Bloe")
    },
    {
      path:'/About-page-1',
      component: () => import("../view/About")
    },
    {
      path:'/Login',
      component:() => import("../components/index")
    },
  ],
  mode:"history"
})
