<template>
	<div id="top-nav-bar" >
		<!-- limit-max-width -->
		<!-- 顶部 主要导航栏-->
		<MainNavBar></MainNavBar>
		<!-- 
			logo
			搜索栏
			购物车
		 -->
		<TopLogoNav></TopLogoNav>
		<!-- 
			menu页面导航栏
		 -->
		<MenuNavBar></MenuNavBar>
	</div>
</template>
<script>
import MainNavBar from "./MainNavBar/index.vue";
import TopLogoNav from "./TopLogoNav/index.vue";
import MenuNavBar from "./MenuNavBar/index.vue";
export default {
	data(){return{
		
	}},
	components: {
		MainNavBar,
		TopLogoNav,
		MenuNavBar,
	},
	computed: {},
	mounted() {
		
	},
	methods:{
		
	}
}
</script>
<style  lang="scss" scoped="scoped">
#top-nav-bar {
	
}
</style>
