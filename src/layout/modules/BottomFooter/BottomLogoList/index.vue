<template>
	<div class="bottom-logo-list">
		<img class="bottom-logo-image" src="@/assets/images/buttomfooter/bottom-logo.png" alt="">
		<ol class="bottom-dl-list-ol">
			<dl v-for="dlItem in dlList" :key="dlItem.dt">
				<dt>{{dlItem.dt}}</dt>
				<dd v-for="ddItem in dlItem.dds">
					<span  @click="ddItem.onClick">{{ddItem.label}}</span>
				</dd>
			</dl>
		</ol>
	</div>
</template>
<script>
export default {
	data(){return{
		"dlList":[
			{
				"dt":"疑难解答",
				"dds":[
					{
						"label":"疑难解答",
						"onClick":()=>{}
					},
					{
						"label":"查询订单",
						"onClick":()=>{}
					},
					{
						"label":"发布需求",
						"onClick":()=>{}
					},
					{
						"label":"在线交易",
						"onClick":()=>{}
					},
				]
			},
			{
				"dt":"合作社入门",
				"dds":[
					{
						"label":"寻找农资",
						"onClick":()=>{}
					},
					{
						"label":"寻找劳务",
						"onClick":()=>{}
					},
					{
						"label":"发布产品",
						"onClick":()=>{}
					},
					{
						"label":"管理订单",
						"onClick":()=>{}
					},
				]
			},
			{
				"dt":"采购商入门",
				"dds":[
					{
						"label":"发布询价",
						"onClick":()=>{}
					},
					{
						"label":"发布招标",
						"onClick":()=>{}
					},
					{
						"label":"管理订单",
						"onClick":()=>{}
					},
					{
						"label":"管理供应商",
						"onClick":()=>{}
					},
				]
			},
			{
				"dt":"农资企业入门",
				"dds":[
					{
						"label":"如何报价",
						"onClick":()=>{}
					},
					{
						"label":"如何投标",
						"onClick":()=>{}
					},
					{
						"label":"撮合交易",
						"onClick":()=>{}
					},
					{
						"label":"管理订单",
						"onClick":()=>{}
					},
				]
			},
			{
				"dt":"平台规则",
				"dds":[
					{
						"label":"违规处理",
						"onClick":()=>{}
					},
				]
			}
		]
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
.bottom-logo-list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.bottom-dl-list-ol {
		display: flex;
		dl {
			padding: 3.125rem 0;
			&:not(:last-child) {
				margin-right: 6.25rem;
			}
			&:last-child{
				margin-right: 3.625rem;
			}
			dt {
				color: #FFFFFF;
				font-size: 0.875rem;
				margin-bottom: 1.875rem;
			}
			dd {
				color: #999999;
				font-size: 0.75rem;
				&:not(:last-child) {
					padding-bottom: 1.25rem;
				}
				span {
					cursor: pointer;
					&:hover,
					&:active{
						color: #FF5600;
					}
				}
			}
			
		}
	}
	.bottom-logo-image {
		height: 6.8125rem;
		width: 12.9375rem;
		margin-left: 1.25rem;
	}
}
</style>
