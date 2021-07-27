<template>
	<el-pagination
		layout="total, sizes, prev, pager, next, jumper"
		:total="total"
		:page-size="size"
		:page-sizes="sizes"
		:current-page="current"
		@current-change="currentChange"
		@size-change="sizeChange"
	></el-pagination>
</template>
<script>
export default {
	data() {return {
	}},
	props:{
		total :{
			type:Number,
			default:0
		},
		current :{
			type:Number,
			default:1
		},
		size:{
			type:Number,
			default:10
		},
		sizes: {
			type:Array,
			default:()=>[10]
		}
	},
	methods:{
		currentChange(val) {
			this.$emit("currentChange",val);
		},
		sizeChange(val) {
			this.$emit("sizeChange",val);
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
.el-pagination {
	width: fit-content;
	margin:1rem 1rem 0 auto ;
}
</style>
