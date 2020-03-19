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
    memuOrder: number            if set, will be sorted in ascending order
  }
*/
export const routes: RouteConfig[] = [
  {
    path: '/exercise',
    component: Layout,
    redirect: '/exercise/overview',
    meta: {
      title: 'Exercise',
      icon: 'dumbbell',
      menuOrder: 4
    },
    children: [
      {
        path: 'overview',
        component: () => import(/* webpackChunkName: "exercise-overview" */ '@/views/exercise/overview/index.vue'),
        name: 'exercise-overview',
        meta: {
          title: 'Exercise Overview',
          noCache: false
        }
      },
      {
        path: 'create',
        component: () => import(/* webpackChunkName: "exercise-create" */ '@/views/exercise/create/index.vue'),
        name: 'exercise-create',
        meta: {
          title: 'Create Exercise',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/exercise/edit',
    component: () => import(/* webpackChunkName: "exercise-edit" */ '@/views/exercise/edit/index.vue'),
    name: 'exercise-edit',
    meta: {
      title: 'Edit Exercise',
      noCache: false,
      hidden: true
    }
  }
]