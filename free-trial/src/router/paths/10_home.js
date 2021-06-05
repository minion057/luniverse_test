export default {
  routes: [
    {
      title: 'info_input',
      path: '/input',
      name: 'info_input',
      component: function(resolve) {
        require(['@/components/info_input.vue'], resolve)
      },
    },
    {
      title: 'info_list',
      path: '/list',
      name: 'info_list',
      component: function(resolve) {
        require(['@/components/info_list.vue'], resolve)
      },
    },
    {
      title: 'info_addinput',
      path: '/addinput',
      name: 'info_addinput',
      component: function(resolve) {
        require(['@/components/info_addinput.vue'], resolve)
      },
    },
    {
      title: 'home',
      path: '/home',
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
