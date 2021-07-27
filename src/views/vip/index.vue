<template>
	<div id="vip" limit-max-width>
		<EasyBreadCrumb></EasyBreadCrumb>
		<div class="vip-content">
			<EasySideBar ref="EasySideBar" :route="true" v-model="defaultAlive" :sidebarlist="subBarRouteList" @sidebarItemClick="sidebarItemClick"></EasySideBar>
			<!-- <Sidebar ref="Sidebar" :menus="menus"></Sidebar> -->
			<div class="sub-router-view">
				<transition name="ease" mode="out-in">
					<keep-alive><router-view /></keep-alive>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
import EasySideBar from '@/components/EasySideBar/index.vue';
import Sidebar from '@/components/EasySideBar/Sidebar.vue';
import EasyBreadCrumb from '@/components/EasyBreadCrumb/index.vue';

export default {
	data() {
		return {
			defaultAlive: 0,
			// aliveTitle:"",
			subBarRouteList: [
				{
					label: '个人信息',
					toName: 'userInfo'
				},
				{
					label: '安全管理',
					toName: 'securityManagement'
				},
				{
					label: '地址管理',
					toName: 'addressManagement'
				},
				{
					label: '需求管理',
					toName: 'demandManagement'
				},
				{
					label: '订单管理',
					toName: 'orderManagement'
				},
				{
					label: '客服中心',
					toName: 'customerService'
				},
				{
					label: '更改密码',
					toName: 'changeUserPassword'
				},
			],
			menus:[
				{
					title: '个人信息',
					index: '/vip/userInfo'
				},
				{
					title: '安全管理',
					index: '/vip/securityManagement',
					// subs:[
						// {
						// 	title: '安全管理',
						// 	index: '/vip/securityManagement',
						// },
						// {
						// 	title: '更改密码',
						// 	index: '/vip/changeUserPassword'
						// },
					// ]
				},
				{
					title: '地址管理',
					index: '/vip/addressManagement'
				},
				{
					title: '需求管理',
					index: '/vip/demandManagement'
				},
				{
					title: '订单管理',
					index: '/vip/orderManagement',
					subs:[
						{
							title: '订单管理',
							index: '/vip/orderManagement'
						},
					]
				},
				{
					title: '客服中心',
					index: '/vip/customerService'
				},
			],
		};
	},
	components: {
		EasySideBar,
		Sidebar,
		EasyBreadCrumb
	},
	watch:{
		$route(route,oldRoute){
			if(oldRoute.fullPath.indexOf('/vip/')>=0) {
				// console.log('vip route change')
				this.setRouteBar(true);
			}
		},
	},
	created() {
		// let currentRouteName = this.$route.name;
		// console.log(currentRouteName)
		// this.setRouteBar();
	},
	mounted() {},
	methods: {
		setRouteBar(isWatch) {
			this.$nextTick(()=>{
				// console.log('setRouteBar')
				let currentRouteName = this.$route.name;
				this.subBarRouteList.map((item,index) => {
					// console.log(currentRouteName == item.toName)
					if(currentRouteName == item.toName) {
						this.defaultAlive = index
					}
				})
				if(!!!isWatch) { //避免重复跳转
					this.sidebarItemClick(this.defaultAlive);
				}
			})
		},
		sidebarItemClick(index) {
			// console.log('sidebarItemClick',index)
			this.$routerUtil.toName(this.subBarRouteList[index].toName);
			// this.aliveTitle = this.subBarRouteList[index].label;
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
@import "@/styles/transition/ease.scss";
#vip {
	background-color: #f9f9f9;
}
.vip-content {
	display: grid;
	grid-template-columns: 13.75rem auto;
}
.sub-router-view {
	background-color: #FFFFFF;
	margin-left: 0.0625rem;
	padding: 1rem;
	/deep/ .sub-title {
		font-size: 1.25rem;
		padding-bottom: 1rem;
		border-bottom: 0.0625rem solid #F9F9F9;
	}
}
</style>
