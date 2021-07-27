<template>
	<button class="nav-shopping-cart-button">
		<img class="nav-shopping-cart-button-icon" src="@/assets/iconImages/icon_shoppingcar.png" alt="">
		<span>购物车</span>
		<span class="count">({{shopCarCount}})</span>
	</button>
</template>
<script>
export default {
	data(){return{
		"shopCarCount":0, // int
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
.nav-shopping-cart-button {
	// background-color: green;
	height: 2.5rem;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	margin-left: 0.625rem;
	border: 0.0625rem solid #DDDDDD;
	.nav-shopping-cart-button-icon {
		width: 1rem;
		height: 0.875rem;
		margin-right: .25rem;
	}
	.count {
		color: #FF5600;
	}
}
</style>
