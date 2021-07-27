<template>
	<div id="menu-nav-bar" limit-max-width v-show="$route.meta.isTopMenuNarBar">
		<ul>
			<!-- <li v-for="(item,index) in menuList" :key="item.toName" -->
			<li v-for="(item,index) in menuList" :key="item.label" 
				:class="[{'alive':currentIndex == index}]"
			 @click="$routerUtil.toName(item.toName)">
				{{item.label}}
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data(){return{
		currentIndex: 0,
		menuList:[
			{
				label:"首页",
				toName:"homepage"
			},
			{
				label:"特色服务",
				toName:"homepage"
			},
			{
				label:"农资采集",
				toName:"homepage"
			},
			{
				label:"农超企直采",
				toName:"agriculturalSuperEnterprise"
			},
			{
				label:"供应链金融",
				toName:"homepage"
			},
			{
				label:"防伪溯源",
				toName:"homepage"
			},
			{
				label:"数字农业",
				toName:"homepage"
			},
			{
				label:"万村联万企",
				toName:"homepage"
			},
		],
	}},
	watch:{
		$route(route) {
			this.startRouteCurrentIndex();
		}
	},
	components: {
		
	},
	computed: {
		
	},
	created() {
		this.startRouteCurrentIndex();
	},
	methods:{
		startRouteCurrentIndex() {
			let num = 0;
			for(let index = 0;index<this.menuList.length;index++) {
				if(this.$route.name == this.menuList[index].toName) {
					this.currentIndex = index;
					num ++;
					break;
				}
			}
			num<=0?this.currentIndex = -1: null;
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
#menu-nav-bar {
	// background-color: #00BF30;
	ul {
		display: flex;
		height: 3.125rem;
		line-height: 3.125rem;
		li {
			min-width: 7.75rem;
			text-align: center;
			cursor: pointer;
			font-size: 1.125rem;
			&:hover {
				background-color: #f4f4f4;
			}
		}
	}
	.alive {
		color: #0DA056;
		background-color: #f4f4f4;
	}
}
</style>
