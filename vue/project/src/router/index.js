import Vue from 'vue'
import Router from 'vue-router'
// 아래에 연결할 서브페이지(컴포넌트)를 import
import MainContent from '../components/MainContent.vue';
import Sub1Content from '../components/Sub1Content.vue';
import Sub2Content from '../components/Sub2Content.vue';
import Sub3Content from '../components/Sub3Content.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: MainContent},
    { path: '/main', component: MainContent},
    { path: '/sub1', component: Sub1Content},
    { path: '/sub2', component: Sub2Content},
    { path: '/sub3', component: Sub3Content}
  ]
})
