export default {
  routes: [
    {
      title: 'info_input',
      path: '/doctor/:doctorId(\\d+)',
      name: 'info_input',
      component: function(resolve) {
        require(['@/components/info_input.vue'], resolve)
      },
    },
    {
      title: 'info_list',
      path: '/carelist/:listId(\\d+)',
      name: 'info_list',
      component: function(resolve) {
        require(['@/components/info_list.vue'], resolve)
      },
    },
    {
      title: 'info_addinput',
      path: '/mediteam/:mediteamId(\\d+)',
      name: 'info_addinput',
      component: function(resolve) {
        require(['@/components/info_addinput.vue'], resolve)
      },
    },
    {
      title: 'medi_home',
      path: '/medi',
      name: 'medi_home',
      component: function(resolve) {
        require(['@/components/home.vue'], resolve)
      },
    },
    {
      title: 'home',
      path: '/',
      name: 'home',
      component: function(resolve) {
        require(['@/components/index.vue'], resolve)
      },
    },
    {
      title: 'header',
      path: '/header',
      name: 'header',
      component: function(resolve) {
        require(['@/components/header.vue'], resolve)
      },
    },
    {
      title: 'detail',
      path: '/:idolId(\\d+)',
      name: 'detail',
      component: function(resolve) {
        require(['@/components/detail.vue'], resolve)
      },
    },
    {
      title: 'product',
      path: '/product',
      name: 'product',
      component: function(resolve) {
        require(['@/components/product.vue'], resolve)
      },
    },
    {
      title: 'my',
      path: '/my',
      name: 'my',
      component: function(resolve) {
        require(['@/components/my.vue'], resolve)
      },
    },
    
  ],
}
