import Vue from 'vue'
import Router from 'vue-router'
//아래에 연결할 서브페이지(콤퍼넌드)를 import
import main_page from '../main_page.vue';
import sub_page from '../sub_page.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: main_page},
    { path: '/main', component: main_page},
    { path: '/sub', component: sub_page}
  ]
})
