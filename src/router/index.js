import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout/index.vue'

Vue.use(VueRouter);
// Router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
	return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'layout',
	redirect:'homepage',
    component: layout,
	children:[
		{
			path:'/homepage',
			name:'homepage',
			meta:{
				title:"首页",
				// unshowRouteTitle:true, //不展示首部页面title
				isTopMenuNarBar:true,
			},
			component: () => import('@/views/homepage/index.vue'),
		},
		{
			path:'/agriculturalSuperEnterprise',
			name:'agriculturalSuperEnterprise',
			meta:{
				title:"农超企直采",
				// unshowRouteTitle:true, //不展示首部页面title
				isTopMenuNarBar:true,
			},
			component: () => import('@/views/agriculturalSuperEnterprise/index.vue'),
		},
		
		{
			path:'/user/register',
			name:'userRegister',
			meta:{
				title:"欢迎原生联会员"
			},
			component: () => import('@/views/user/register/index.vue'),
		},
		{
			path:'/demo',
			name:'demo',
			component: () => import('@/views/demo/index.vue'),
		},
		{
			path:'/vip',
			name:'vip',
			component: () => import('@/views/vip/index.vue'),
			meta:{
				title:"会员中心"
			},
			children:[
				{
					path:'userInfo',
					name:'userInfo',
					meta:{
						title:"个人中心",
						unshowRouteTitle:true
					},
					component: () => import('@/views/vip/views/userInfo/index.vue'),
				},
				{
					path:'securityManagement',
					name:'securityManagement',
					meta:{
						title:"安全管理",
						unshowRouteTitle:true
					},
					component: () => import('@/views/vip/views/securityManagement/index.vue'),
				},
				
				{
					path:'addressManagement',
					name:'addressManagement',
					meta:{
						title:"地址管理",
						unshowRouteTitle:true
					},
					component: () => import('@/views/vip/views/addressManagement/index.vue'),
				},
				{
					path:'demandManagement',
					name:'demandManagement',
					meta:{
						title:"需求管理",
						unshowRouteTitle:true
					},
					component: () => import('@/views/vip/views/demandManagement/index.vue'),
				},
				{
					path:'orderManagement',
					name:'orderManagement',
					meta:{
						title:"订单管理",
						unshowRouteTitle:true
					},
					component: () => import('@/views/vip/views/orderManagement/index.vue'),
				},
				{
					path:'customerService',
					name:'customerService',
					meta:{
						title:"客服中心",
						unshowRouteTitle:true
					},
					component: () => import('@/views/vip/views/customerService/index.vue'),
				},
				{
					path:'changeUserPassword',
					name:'changeUserPassword',
					meta:{
						title:"修改密码",
						unshowRouteTitle:true
					},
					component: () => import('@/views/vip/views/securityManagement/changeUserPassword/index.vue'),
				},
				
			]
		},
		{
			path:'/settled/cooperative',
			name:'settledCooperative',
			component: () => import('@/views/settled/cooperative/index.vue'),
			meta:{
				title:"我是合作社"
			},
		},
	]
  }
]

const router = new VueRouter({
  routes
})

export default router
