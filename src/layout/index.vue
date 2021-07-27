<template>
	<div id="layout">
		<div>
			<TopNavBar ref="TopNavBar"></TopNavBar>
			<div ref="AppMain" class="app-main">
			<!-- <div class="app-main" style="min-height:800px"> -->
				<router-view></router-view>
			</div>
		</div>
		<BottomFooter ref="BottomFooter"></BottomFooter>
	</div>
</template>
<script>
import TopNavBar from "./modules/TopNavBar/index.vue";
import BottomFooter from "./modules/BottomFooter/index.vue";
export default {
	data(){return{
	}},
	components: {
		TopNavBar,
		BottomFooter
	},
	computed: {
		
	},
	mounted() {
		// this.changeMainMinHeight()
	},
	methods:{
		// changeMainMinHeight() {
		// 	this.$nextTick(()=>{
		// 		// let refAppMain = this.$refs['AppMain'];
		// 		let refAppMain = document.getElementsByClassName('app-main')[0];
		// 		let refTopNavBar = this.$refs['TopNavBar'];
		// 		let refBottomFooter = this.$refs['BottomFooter'];
		// 		let refHeight = refTopNavBar.$el.offsetHeight + refBottomFooter.$el.offsetHeight;
		// 		// refAppMain.$el.style.minHeight = window.innerHeight - refHeight;
		// 		refAppMain.style.minHeight = window.innerHeight - refHeight;
		// 		console.log("mainMinHeight:",refAppMain.style)
		// 	})
		// }
	}
}
</script>
<style  lang="scss" scoped="scoped">
#layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
