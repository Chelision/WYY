import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import  searchVedio from './views/bottomTab/searchVedio.vue'

Vue.use(Router)

// @ts-ignore
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      //component:() => import('./views/bottomTab/home/home.vue')
      redirect:'/home'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/index',
      component:() => import('./views/index/index.vue'),
      children:[
        {
          path:'',
          component:() => import('./views/bottomTab/home/home.vue')
        },
        {
          path:'/home',
          component:() => import('./views/bottomTab/home/home.vue')
        },
        {
          path:'/mine',
          component:() => import('./views/bottomTab/mine/mine.vue'),
          meta:{
            requiredName:true
          }
        },
        {
          path:'/setting',
          component:() => import('./views/bottomTab/setting/setting.vue'),
          meta:{
            requiredName:true
          }
        },
        {
          path:'/vedio',
          component:() => import('./views/bottomTab/vedio/vedio.vue')
        }
      ]
    },
    {
      path: '/searchMusic',
      name: 'searchMusic',
      component: ()=> import('./views/bottomTab/home/searchMusic/searchMusic.vue')
    },
    {
      path:'/searchVedio',
      name:'searchVedio',
      component:()=>import('./views/bottomTab/vedio/searchVideo.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('./views/login/login.vue')
    },
    {
      path:'/saoyisao',
      name:'saoyisao',
      component:()=>import('./views/bottomTab/setting/saoyisao.vue')
    },
    {
      path:'/songsForm',
      name:'songForm',
      meta:{
        requiredName:true
      },
      component:() => import('./views/bottomTab/mine/songsForm.vue')
    }

  ]
})
