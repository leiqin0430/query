import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('@/views/Login')
const Err404 = () => import('@/views/Err404')
const Err403 = () => import('@/views/Err403')

const Home = () => import(/* webpackChunkName: "group-foo" */ '@/views/Home')
// const grid = () => import(/* webpackChunkName: "group-foo" */ '@/views/tab1/grid')
const form = () => import(/* webpackChunkName: "group-foo" */ '@/views/tab1/form')

const scss = () => import('@/views/tab2/scss')

const echarts = () => import('@/views/charts/echarts')

const dict = () => import('@/views/metadata/dict')
const table = () => import('@/views/metadata/table')

export default new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login, hidden: true },
    { path: '/404', component: Err404, hidden: true },
    { path: '/403', component: Err403, hidden: true },
    {
      path: '/',
      name: '元数据管理',
      iconCls: 'el-icon-menu',
      component: Home,
      groupName: 'metadata',
      children: [
        {path: 'dict', name: '代码字典', iconCls: 'el-icon-menu', component: dict, meta: {groupName: 'metadata'}},
        {path: 'table', name: '数据表信息', iconCls: 'el-icon-menu', component: table, meta: {groupName: 'metadata'}}
      ]
    },
    {
      path: '/',
      name: '综合查询',
      iconCls: 'el-icon-menu',
      component: Home,
      groupName: 'query',
      children: [
        {path: 'form', name: 'Form 表单', iconCls: 'el-icon-menu', component: form},
        {path: 'scss', name: 'scss', iconCls: 'el-icon-menu', component: scss},
        {path: 'echarts', name: 'echarts', iconCls: 'el-icon-menu', component: echarts}
      ]
    }
  ]
})
