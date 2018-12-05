import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/home'
    },
    //  首页
    {
      path: '/home',
      name: 'Home',
      // 路由懒加载
      component (resolve) {
        require(['../components/home.vue'], resolve)
      },
      // 配置是否需要keep-alive缓存
      meta: {
        needKeepAlive: true
      }
    },
    //  招聘中心
    {
      path: '/recruits',
      name: 'Recruits',
      // 路由懒加载
      component (resolve) {
        require(['../components/recruits/recruits.vue'], resolve)
      },
      // 配置是否需要keep-alive缓存
      meta: {
        needKeepAlive: true
      }
    },
    //  综合二级菜单列表
    {
      path: '/commonlist',
      name: 'Commonlist',
      // 路由懒加载
      component (resolve) {
        require(['../components/commonlist/commonlist.vue'], resolve)
      },
      // 配置是否需要keep-alive缓存
      meta: {
        needKeepAlive: true
      }
    },
    //  综合二级菜单内容页
    {
      path: '/commondetail',
      name: 'Commondetail',
      // 路由懒加载
      component (resolve) {
        require(['../components/commondetail/commondetail.vue'], resolve)
      },
      // 配置是否需要keep-alive缓存
      meta: {
        needKeepAlive: true
      }
    },
    // 404跳转主页
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
