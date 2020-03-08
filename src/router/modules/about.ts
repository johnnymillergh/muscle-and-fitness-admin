/* eslint-disable no-unused-vars */
import { RouteConfig } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

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
export const routes: RouteConfig = {
  path: '/about',
  component: Layout,
  children: [
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/about/index.vue'),
      name: 'about',
      meta: {
        title: 'About',
        icon: 'dashboard'
      }
    }
  ]
}
