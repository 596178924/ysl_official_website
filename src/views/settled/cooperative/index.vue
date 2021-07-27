<template>
	<div id="cooperative-view">
		<div class="no-1 limit-max-width flex-center"><button class="no-1-banner-button">立即入驻</button></div>
		<div class="no-2 limit-max-width">
			<div class="model">
				<div class="no-model-title-center">
					<p>关于产品来源</p>
					<span>ABOUT THE SOURCE OF THE PRODUCT</span>
				</div>
				<ol class="model-content">
					<li>
						<p><span>原生联产品</span></p>
						<span>
							这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案
						</span>
					</li>
					<li>
						<p><span>合作地区</span></p>
						<span>
							这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案这里是相关文案
						</span>
					</li>
				</ol>
			</div>
		</div>
		<div class="no-3 limit-max-width">
			<div class="no-model-title-center">
				<p>专属权益</p>
				<span>EXCLUSIVE RIGHTS</span>
			</div>
			<div class="model-content">
				<EasySlidSelect :list="no3List">
					<template v-slot="{item}">
						<div class="no-3-models-box">
							<img :src="item.image" alt="">
							<div class="no-3-model-mask">
								<div class="title">
									{{item.title}}
								</div>
								<div class="hr"></div>
								<span class="subText">
									{{item.subText}}
								</span>
							</div>
						</div>
					</template>
				</EasySlidSelect>
			</div>
		</div>
		<div class="no-4 limit-max-width">
			<div class="no-model-title-center">
				<p>入驻流程</p>
				<span>IN THE PROCESS</span>
			</div>
			<div class="model-content">
				<el-steps :active="currentIndex" align-center finish-status="success">
					<el-step v-for="(step,index) in steps" :key="step.title" :title="step.title">
						<template #icon>
							{{ index + 1 }}
						</template>
					</el-step>
				</el-steps>
				<div class="model-step-box">
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import EasySlidSelect from "@/components/EasySlidSelect/index.vue";
export default {
	data() {
		return {
			no3List:[
				{
					title:"身份权益",
					subText:"您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处",
					image:require("@/assets/images/settled/cooperative/no3-demo.png"),
				},
				{
					title:"报价权益66",
					subText:"您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处",
					image:require("@/assets/images/settled/cooperative/no3-demo.png"),
				},
				{
					title:"专属终端",
					subText:"您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处",
					image:require("@/assets/images/settled/cooperative/no3-demo.png"),
					src:"@/assets/images/settled/cooperative/no3-demo.png",
				},
				{
					title:"订单反馈",
					subText:"您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处",
					image:require("@/assets/images/settled/cooperative/no3-demo.png"),
				},
				{
					title:"维权通道",
					subText:"您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处",
					image:require("@/assets/images/settled/cooperative/no3-demo.png"),
				},
				{
					title:"金融权益",
					subText:"您可向采购商展现您的专属大企业采购供应商标识，还可通过多渠道积累分数提升等级，彰显您的不同之处",
					image:require("@/assets/images/settled/cooperative/no3-demo.png"),
				},
			],
			currentIndex: 2,
			steps:[
				{
					title:"申请入驻",
				},
				{
					title:"填写资料",
				},
				{
					title:"平台审核",
				},
				{
					title:"入驻成功",
				},
			]
		};
	},
	components: {
		EasySlidSelect,
	},
	computed: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
@import '@/styles/variables.scss';
#cooperative-view {
	.no-3,
	.no-4{
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
	}
	.no-1 {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url(../../../assets/images/settled/cooperative/no1-banner-bg.png);
		height: 37.5rem;
		color: #ffffff;

		.no-1-banner-button {
			color: $ThemeColor;
			font-size: 1.25rem;
			background-color: #ffffff;
			padding: 1rem 3rem;
			margin-bottom: -3rem;
			border-radius: 0.25rem;
		}
	}
	.no-2 {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url(../../../assets/images/settled/cooperative/no2-bg.png);
		height: 31.25rem;
		position: relative;
		.model {
			background-color: #ffffff;
			padding: 2.5rem 0;
			margin-top: -6.25rem;
			position: absolute;
			bottom: 6.25rem;
			max-width: calc(75rem - 17px);
		}
		.model-content {
			li {
				display: grid;
				grid-template-columns: 15rem auto;
				// margin: 0 0;
				padding: 3rem 4rem 0 5rem;
				&:not(:last-child) {
					& > span {
						padding-bottom: 3rem;
						border-bottom: 0.0625rem solid #f2f2f2;
					}
				}
			}
			p {
				display: flex;
				align-items: center;
				span {
					font-size: 1.375rem;
					border-left: 0.25rem solid #0da056;
					padding-left: 1rem;
				}
			}
		}
	}
	.no-3 {
		background-repeat: no-repeat;
		background-position: bottom left;
		background-size: 100% 25rem;
		background-image: url(../../../assets/images/settled/cooperative/no3-bg.png);
		min-height: 800px;
		.no-3-models-box {
			position: relative;
			color: #FFFFFF;
			height: 23.75rem;
			width: 100%;
			img {
				// position: absolute;
				// left: 0;
				// top: 0;
				width: 100%;
				height: 100%;
				// z-index: -1;
			}
			.no-3-model-mask {
				position: absolute;
				top: 0;
				right: 0;
				width: 34.375rem;
				height: 100%;
				background-color: rgba($color: #001224, $alpha: 0.8);
				padding: 5.625rem 3.75rem;
				.hr {
					background-color: $ThemeColor;
					height: 0.125rem;
					width: 2.25rem;
					margin-top: 1.25rem;
					margin-bottom: 2.25rem;
				}
				.title {
					font-size: 1.5rem;
				}
				span {
					font-size: 0.875rem;
				}
			}
		}
	}
	.no-4 {
		.model-content {
			/deep/ .el-steps {
				max-width: 40.625rem;
				margin: 3.125rem auto;
			}
			/deep/ .el-step__icon {
				width: 3rem;
				height: 3rem;
				font-size: 1.375rem;
			}
			/deep/ .el-step__line {
				top: 1.5rem;
			}
			/deep/ .el-step__title.is-process,
			/deep/ .el-step__title.is-success{
				color: $ThemeColor;
			}
			/deep/ .el-step__head.is-process,
			/deep/ .el-step__head.is-success{
				border-color: $ThemeColor;
				color: #FFFFFF;
			}
			/deep/ .el-step__icon.is-text {
				background-color: $ThemeColor;
			}
			/deep/ .el-step__head.is-wait {
				border-color: #333333;
			}
			/deep/ .el-step__head.is-wait .el-step__icon.is-text {
				background-color: #333333;
			}
			.model-step-box {
				background-color: #001224;
			}
		}
	}
}
</style>
