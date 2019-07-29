export default [
  { path: "*", component: () => import('../pages/404.vue') },
  {
    path: '/404',
    name: 'not found',
    meta: {
      requiresAuth: false
    },
    component: () => import('../pages/404.vue')
  },
  {
    path: '/tutorial/todolist',
    name: 'tutorial todo list',
    meta: {
      requiresAuth: false
    },
    component: () => import('../pages/todolist_tutorial/Index.vue')
  },
  {
    path: '/example/todolist',
    name: 'todo list',
    meta: {
      requiresAuth: false
    },
    component: () => import('../pages/todolist/Index.vue')
  }
]
