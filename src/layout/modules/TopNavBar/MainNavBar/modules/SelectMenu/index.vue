<template>
	<ul id="select-menu" drift-right>
		<li v-for="item in menus"  @click="menuItemClick(item)">
			<span>{{item.label}}</span>
			<i v-show="item.subList" class="el-icon-arrow-down"></i>
			<ol class="sub-list" v-if="item.subList">
				<li v-for="subItem in item.subList" @click.stop="menuItemClick(subItem)">
					{{subItem.label}}
				</li>
			</ol>
		</li>
	</ul>
</template>
<script>
export default {
	data(){return{
		// currentIndex:
	}},
	props:{
		menus:{
			type:Array,
			default:()=>[],
		}
	},
	components: {
		
	},
	computed: {
		
	},
	mounted() {
		
	},
	methods:{
		menuItemClick(item) {
			// console.log("menuItemClick:",item.toName)
			if(item.toName) {
				this.$routerUtil.toName(item.toName);
			}
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
#select-menu {
	display: flex;
	& > li {
		cursor: pointer;
		// padding: 0 1rem;
		line-height: 1.875rem;
		font-size: 0.75rem;
		height: 1.875rem;
		min-width: 6rem;
		text-align: center;
		position: relative;
		.el-icon-arrow-down {
			transition: transform .3s;
		}
		&:after {
			content: "|";
			position: absolute;
			right: -0.125rem;
			top: -0.0625rem;
			color: #828282;
		}
		&:hover {
			background-color: #FFFFFF;
			color: #00BF30;
			
			&:after{
				opacity: 0;
			}
			.el-icon-arrow-down {
				transform: rotateZ(-180deg);
			}
			.sub-list {
				z-index: 1000;
				opacity: 1;
			}
		}
		.sub-list {
			transition: all .3s;
			color: #999999;
			opacity: 0;
			position: absolute;
			// bottom: 0;
			top: 1.875rem;
			left: 0;
			z-index: -1;
			width: 100%;
			li {
				background-color: #FFFFFF;
				&:hover {
					color: #00BF30;
				}
			}
		}
	}
	
}
</style>
