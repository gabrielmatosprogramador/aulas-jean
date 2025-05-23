const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/novoProduto',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NovoProduto.vue') }],
  },
  {
    path: '/editaProduto/:idProduto',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EditaProduto.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
