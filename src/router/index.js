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
      component: () => import("../view/Bloe")
    },
    {
      path:'/Details',
      component: () => import("../view/About")
    },
    {
      path:'/Login',
      component:() => import("../components/index")
    },
  ],
  mode:"history"
})
