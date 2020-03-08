/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

Vue.use(VueRouter)

const routerModulesFiles = require.context('@/router/modules', false, /.ts$/)
let allModuleRouterList: RouteConfig[] = []
routerModulesFiles.keys().forEach(key => {
  const specificRouterVariableKey = Object.keys(routerModulesFiles(key))
  allModuleRouterList = allModuleRouterList.concat(routerModulesFiles(key)[specificRouterVariableKey[0]])
})

/*
  name:'router-name'             the name field is required when using <keep-alive>, it should also match its component's name property
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    alwaysShow: true             if true, will always show the root menu (default is false)
                                 if false, hide the root menu when has less or equal than one children route
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
    affix: true                  if true, the tag will affix in the tags-view
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
*/
export const routes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "401" */ '@/views/error/401.vue'),
    meta: { hidden: true }
  },
  ...allModuleRouterList
]

const router = new VueRouter({ routes: routes })

export default router
