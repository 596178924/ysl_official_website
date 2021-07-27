<template>
	<div id="agricultural-super-enterprise">
		<div class="limit-max-width no-1 flex-column-center">
			<h1>农超企入驻</h1>
			<div class="text-bg-hr">
				直面优质产品供应者
			</div>
			<button type="button">
				立即咨询
			</button>
		</div>
		<div class="page-model limit-max-width no-2 ">
			<div class="no-model-title-center">
				<p>关于产品来源</p>
				<span>
					ABOUT THE SOURCE OF THE PRODUCT
				</span>
			</div>
			<ol class="model-content">
				<li>
					<p>
						<span>
							原生联产品
						</span>
					</p>
					<span>这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案</span>
				</li>
				<li>
					<p>
						<span>合作地区</span>
					</p>
					<span>这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案</span>
				</li>
			</ol>
		</div>
		<div class="page-model limit-max-width no-3">
			<div class="no-model-title-center">
				
				<p>采购数字化全链路 打造高效供应链协同管理</p>
				<span>
					ABOUT THE SOURCE OF THE PRODUCT
				</span>
			</div>
			<div class="context">
				<img src="@/assets/images/agriculturalSuperEnterprise/no-3-image.png" alt="">
			</div>
		</div>
		<div class="page-model limit-max-width no-4 flex-center-js-sard">
			<div class="model-text">
				<h1>寻源采购</h1>
				<p>多重寻源场景</p>
				<p>满足不同采购需求的流合规性</p>
				<ol>
					<li><span>询价采购：来源丰富、充分比价</span></li>
					<li><span>招标采购：在线合规、多方协同</span></li>
					<li><span>竞价采购：透明博弈、快速降本</span></li>
					<li><span>供应商招募：半径扩大、高效触达</span></li>
				</ol>
			</div>
			<div class="image-box">
				<img src="@/assets/images/agriculturalSuperEnterprise/no-4-image.png" alt="">
			</div>
		</div>
		<div class="page-model limit-max-width no-5">
			<div class="no-model-title-center">
				<p>入驻流程</p>
				<span>
					ABOUT THE SOURCE OF THE PRODUCT
				</span>
			</div>
			<div class="image-box">
				<img src="@/assets/images/agriculturalSuperEnterprise/no-5-image.png" >
			</div>
		</div>
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
#agricultural-super-enterprise {
	.page-model {
		padding-top: 3.375rem;
		padding-bottom: 3.375rem;
	}
	
	.no-1 {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: left top;
		background-image: url(../../assets/images/agriculturalSuperEnterprise/banner-bg.png);
		height: 28.125rem;
		color: #FFFFFF;
		h1 {
			font-size: 6.5rem;
		}
		button {
			color: #FFFFFF;
			border: 0.125rem solid #FFFFFF;
			padding: 1rem 3rem;
			font-size: 1.25rem;
			margin-top: 1.5rem;
		}
		.text-bg-hr {
			//背景横线
			font-size: 2.5rem;
			position: relative;
			&:after,
			&:before {
				content: "";
				display: block;
				position: absolute;
				width: 3.125rem;
				height: 0.125rem;
				background-color: #FFFFFF;
				top: 50%;
			}
			&:after {
				right: -4.6875rem;
			}
			&:before {
				left: -4.6875rem;
			}
		}
	}
	
	.no-2 {
		.model-content {
			li {
				display: grid;
				grid-template-columns: 15rem auto;
				// margin: 0 0;
				padding: 3rem 4rem 0 5rem;
				&:not(:last-child) {
					&> span {
						padding-bottom: 3rem;
						border-bottom: 0.0625rem solid #F2F2F2;
					}
				}
			}
			p {
				display: flex;
				align-items: center;
				span {
					font-size: 1.375rem;
					border-left: 0.25rem solid #0DA056;
					padding-left: 1rem;
				}
			}
		}
	}

	.no-3{
		.context {
			max-width: 68rem;
			margin: 4rem auto;
		}
	}
	.no-4{
		.model-text {
			h1 {
				margin-bottom: 1rem;
			}
			p {
				color: #999999;
				font-size: 0.75rem;
				&:not(:last-child) {
					margin-bottom: .5rem;
				}
			}
			ol {
				margin-top: 1rem;
			}
			li {
				list-style: disc;
				list-style-position: inside;
				color: #0DA056;
				span {
					color: #333333;
				}
				&:not(:last-child) {
					margin-bottom: .5rem;
				}
			}
		}
		.image-box {
			max-width: 32.5rem;
		}
	}
	.no-5{
		.image-box {
			max-width: 68rem;
			margin: 4rem auto;
		}
	}
}
</style>