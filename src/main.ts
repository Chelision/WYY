import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
//import cube from 'cube-ui'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false
//Vue.use(cube)
Vue.use(Vant)

router.beforeEach((to,from,next)=>{
  //无论是刷新还是跳转路由，第一个进入的就是这个路由前置钩子函数
  store.commit('settoken',localStorage.getItem('token'))
  if(to.meta.requiredName){
    if(store.state.token){//判断store中是否存有用户信息如果有则进行跳转
      next()
    }else{//如果没有，就登陆到登陆界面
      next({
        path:'/login',
        query:{redirect:to.fullPath}//传递当前跳转的完整路径
      })
    }
  }else{
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
