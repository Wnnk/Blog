import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"
import Login from "../views/Login"
import Layout from "../views/Layout"
import UserList from "../views/UserList"
<<<<<<< HEAD
=======
import Blog from "../views/Blog"
import BlogDetail from "../components/BlogDetail"
>>>>>>> d6801fe (create and delete)


Vue.use(VueRouter)

const routes = [
  //登录路由
  {
    path:"/login",
    name:"Login",
    component:Login
  },
  {
    path:"/",
    name:"Home",
    component: Home
  },
  //管理路由
  {
    path:"/layout",
    name:"layout",
    component:Layout,
    children:[
      {
        path:"/userlist",
        name:"",
        component:UserList,
<<<<<<< HEAD
=======
      },
      {
        path:"/blog",
        name:"",
        component:Blog,
      },
      {
        path:"/blogdetail",
        name:"",
        component:BlogDetail,
>>>>>>> d6801fe (create and delete)
      }
    ]

  },
  
]

const router = new VueRouter({
  // mode: 'history',   //模式  history hash ，
  base: process.env.BASE_URL, //定义一个基础URL，用的是vue-cli默认的配置项。
  routes  //配置项
})

export default router
