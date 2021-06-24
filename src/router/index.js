import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path:"/",
      redirect:"/Clara"
    },
    {
      path: "/Clara",
      component: () => import("../components/index")
    },
    {
      path:'/Clara_Write',
      component: () => import("../view/Bloe"),
    },
    {
      path:'/Details',
      component: () => import("../view/About")
    },
    {
      path:'/Login',
      component:() => import("../components/index")
    },
    {
      path:'/show',
      component:() => import("../components/show")
    },
    {
      path:"*",
      name:"/404",
      component:()=>import("../components/404")
    },
    {
      path:"/test",
      component:()=>import("../components/404")
    },
    {
      path: "/Search_page",
      component: () => import("../components/Search_page")
    }
  ],
  mode:"history"
})
