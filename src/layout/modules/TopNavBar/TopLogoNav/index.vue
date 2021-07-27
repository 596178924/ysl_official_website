<template>
	<div id="top-logo-nav" limit-max-width>
		<!-- <div class="logo-label">
			<p>原生联</p>
			<p>YUAN  SHENG  LIAN</p>
		</div> -->
		<div class="ysl-logo flex-center-js-sb">
			<img src="../../../../assets/images/topnavbar/ysl-logo.png" alt="">
			<p>
				<span>
					原生的
				</span>
				<span>
					健康的
				</span>
				<span>
					美味的
				</span>
			</p>
		</div>
		<!-- <ShowNavMateRouteTitle></ShowNavMateRouteTitle> -->
		<NavSearch></NavSearch>
		<NavShoppingCartButton></NavShoppingCartButton>
	</div>
</template>
<script>
// import ShowNavMateRouteTitle from "./ShowNavMateRouteTitle/index.vue";
import NavSearch from "./NavSearch/index.vue";
import NavShoppingCartButton from "./NavShoppingCartButton/index.vue";

export default {
	data(){return{
		
	}},
	components: {
		// ShowNavMateRouteTitle,
		NavSearch,
		NavShoppingCartButton,
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
#top-logo-nav {
	display: flex;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
	// .logo-label {
	// 	color: #00BF30;
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items: center;
	// 	margin-right: 2.5rem;
	// 	p {
	// 		&:first-child {
	// 			font-size: 2.25rem;
	// 		}
	// 		&:last-child {
	// 			font-size: .75rem;
	// 		}
	// 	}
	// }
	.ysl-logo {
		img {
			width: 10.875rem;
			margin-right: 1rem;
		}
		font-size: 1.375rem;
		color: #069B87;
	}
}
</style>
