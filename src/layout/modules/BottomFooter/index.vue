<template>
	<div id="bottom-footer" limit-max-width>
		<BottomLogoList></BottomLogoList>
		<div class="hr"></div>
		<BottomSpanList :spanList="spanList" />
	</div>
</template>
<script>
import BottomLogoList from "./BottomLogoList/index.vue";
import BottomSpanList from "./BottomSpanList/index.vue";
export default {
	data(){return{
		"spanList":[
			{
				"label":"关于原生联",
				"onClick":()=>{},
			},
			{
				"label":"联系我们",
				"onClick":()=>{},
			},
			{
				"label":"知识产权",
				"onClick":()=>{},
			},
			{
				"label":"著作权与商标申明",
				"onClick":()=>{},
			},
			{
				"label":"法律申明",
				"onClick":()=>{},
			},
			{
				"label":"服务条款",
				"onClick":()=>{},
			},
			{
				"label":"隐私政策",
				"onClick":()=>{},
			},
			{
				"label":"网站导航",
				"onClick":()=>{},
			},
		],
	}},
	components: {
		BottomLogoList,
		BottomSpanList,
	},
	mounted() {
		
	},
	methods:{
		
	}
}
</script>
<style  lang="scss" scoped="scoped">
#bottom-footer {
	background-color: #21242D;
	.hr {
		background-color: #717171;
		height: 0.0625rem;
		display: block;
		overflow: hidden;
	}
}
</style>
