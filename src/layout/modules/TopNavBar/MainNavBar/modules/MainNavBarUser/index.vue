<template>
	<div id="main-nav-bar-user">
		<ol flex-center-js-sb>
			<li flex-center-js-sb>
				<img src="../../../../../../assets/iconImages/icon_shouji.png" alt="">
				<span>手机版</span>
			</li>
			<li>
				<span>请登录</span>
			</li>
			<li @click="$routerUtil.toName('userRegister')">
				<span>免费注册</span>
			</li>
		</ol>
	</div>
</template>
<script>
export default {
	data(){return{
		
	}},
	components: {
		
	},
	computed: {
		
	},
	mounted() {
		
	},
	methods:{
		
	}
}
</script>
<style  lang="scss" scoped="scoped">
#main-nav-bar-user {
	ol {
		height: 100%;
	}
	li{
		font-size: 0.75rem;
		padding-right: 1.5rem;
		cursor: pointer;
		img {
			width: .75rem;
		}
	}
}
</style>
