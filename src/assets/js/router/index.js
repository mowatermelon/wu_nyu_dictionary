import Vue from 'vue'
import Router from 'vue-router'

const Dictionary = resolve => require(['@/pages/Dictionary'], resolve)
const Voice = resolve => require(['@/pages/Voice'], resolve)
const Rule = resolve => require(['@/pages/Rule'], resolve)
const Address = resolve => require(['@/pages/Address'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history', // "hash" | "history" | "abstract"
  base: __dirname,
  linkActiveClass: 'mdui-tab-active router-link-exact-active mdui-bottom-nav-active',
  routes: [{
      path: '/',
      redirect: '/v-dic'
    },
    {
      path: '/v-dic',
      name: 'v-dic',
      component: Dictionary
    },
    {
      path: '/v-voice',
      name: 'v-voice',
      component: Voice,
    },
    {
      path: '/v-rule',
      component: Rule,
      name: 'v-rule'
    },
    {
      path: '/v-addr',
      component: Address,
      name: 'v-addr'
    }

  ]
});
