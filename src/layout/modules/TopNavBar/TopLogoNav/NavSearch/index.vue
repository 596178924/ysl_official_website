<template>
	<div class="nav-search" drift-right>
		<div class="border-input">
			<!-- <img class="nav-search-icon" src="@/assets/iconImages/icon_search.png" alt=""> -->
			<el-icon class="nav-search-icon el-icon-search"></el-icon>
			<input class="nav-search-input" type="text" placeholder="输入产品类型/名称/规格进行搜索">
		</div>
		<button class="nav-search-button">
			搜索
		</button>
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
.nav-search {
	height: 2.5rem;
	display: flex;
	align-items: center;
	.border-input {
		height: 100%;
		border: 0.0625rem solid #0DA056;
		border-right: 0;
		display: flex;
	}
	.nav-search-icon {
		width: 0.875rem;
		height: 0.875rem;
		margin: 0.675rem .5rem .5rem .5rem;
	}
	.nav-search-input {
		border: 0;
		height: 100%;
		width: 18.75rem;
	}
	.nav-search-button {
		padding: 0 2.5rem;
		height: 100%;
		color: #FFFFFF;
		background-color: #0DA056;
	}
}
</style>
