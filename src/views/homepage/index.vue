<template>
	<div id="homepage" >
		<div class="homepage-model no-1" >
			<div class="banner limit-max-width">
				<p class="h-title">
					<span>
						原生联
					</span>
					<span>
						产业互联网服务平台
					</span>
				</p>
				<p class="p-title">
					<span>原生联大企业采购平台为企业提供互联网采购整体解决方案，帮助企业实现采购全流程数字化、可视化打</span>
					<span>造大数据驱动的供应链协同网络，致力于成为大型企业建立阳光高效的互联网采购管理系统的首选平台</span>
				</p>
				<button>
					采购商合作
				</button>
			</div>
			<div class="banner-model limit-max-width">
				<div class="drift-right">
					<ul class="ul-count-to" >
						<li>
							<span>
								成交规模
							</span>
							<p>
								<countTo :startVal='0' :endVal='10000' suffix="+" :duration='3000'></countTo>
								<span>家</span>
							</p>
						</li>
						<li>
							<span>
								入驻合作社
							</span>
							<p>
								<countTo :startVal='0' :endVal='1600' suffix="+" :duration='3000'></countTo>
								<span>家</span>
							</p>
						</li>
						<li>
							<span>
								平台供应商
							</span>
							<p>
								<countTo :startVal='0' :endVal='4592' suffix="+" :duration='3000'></countTo>
								<span>家</span>
							</p>
						</li>
						<li>
							<span>
								农超企数
							</span>
							<p>
								<countTo :startVal='0' :endVal='2483' suffix="+" :duration='3000'></countTo>
								<span>家</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="homepage-model limit-max-width no-2">
			<div class="flex mask-box">
				<EasyMaskBox v-for="(item ,index) in 6" :key="index">
					<img src="@/assets/demoImage/easy-demo.png" alt="">
					<template #mask>
						<p>
							<span>唐人神</span>
						</p>
						<span>
							成立于1988年，是首批农业
							产业化国家重点龙头企业，
							拥有70余家子公司。
						</span>
					</template>
				</EasyMaskBox>
			</div>
			<div class="no-model-title-left-border">
				<p>
					农业新标准
				</p>
				<span>AGRICULTURAL STANDARDS</span>
			</div>
			<div class="patent-model">
				<div class="patent-left flex-center">
					<p>
						<span>
							300
							<i class="text-superscript">+</i>
						</span>
						<br>
						<span>专利技术</span>
					</p>
				</div>
				<ol class="patent-right">
					<li class="flex-center" v-for="(item,index) in 8" :key="index">
						专利图片{{index}}
					</li>
				</ol>
			</div>
		</div>
		<div class="homepage-model limit-max-width no-3">
			<div class="no-model-title-center">
				<p>
					特色服务
				</p>
				<span>
					CHARACTERISTIC SERVICE
				</span>
			</div>
			<ol class="flex-js-sb">
				<li v-for="item in no3List" :key="item.title">
					<p class="title">{{item.title}}</p>
					<p class="subTitle">{{item.subTitle}}</p>
					<div class="separate"></div>
					<ol class="subList">
						<li v-for="subItem in item.subList">
							{{subItem}}
						</li>
					</ol>
				</li>
			</ol>
		</div>
		<div class="homepage-model limit-max-width no-4">
			<div class="no-model-title-left-border">
				<p>
					热门资讯
				</p>
				<span>
					INFORMATION
				</span>
			</div>
			
			<div class="content flex-js-sb">
				<div class="swiper-box">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="(item,index) in no4ImageList" :key="index">
								<img :src="item.src" >
								<div class="swiper-info">
									<div class="swiper-title">
										{{item.title}}
									</div>
								</div>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<ul class="information-model">
					<li v-for="(item,index) in no4InformationList" :key="index">
						<img :src="item.src" alt="">
						<div class="flex-column-js-sard">
							<p class="font-hide">{{item.title}}</p>
							<span class="font-hide-2">{{item.subText}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import EasyMaskBox from "@/components/EasyMaskBox/index.vue";
import EasySwiper from "@/components/EasySwiper/index.vue";
import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';
import countTo from 'vue-count-to';
export default {
	data(){return{
		no1List:[
			{
				imageUrl:require("@/assets/demoImage/easy-demo.png"),
				textP:"",
				textSpan:"",
			},
		],
		no3List:[
			{
				title:"专利技术服务",
				subTitle:"Patented technical services",
				subList:[
					"这是文案这是文案这是文案",
					"这是文案这是文案这是文案",
					"这是文案这是文案这是文案",
					"这是文案这是文案这是文案",
				],
			},
			{
				title:"原生认证服务",
				subTitle:"Native authentication services",
				subList:[
					"这是文案这是文案这是文案",
				],
			},
			{
				title:"品牌授权服务",
				subTitle:"Brand Licensing Services",
				subList:[
					"这是文案这是文案这是文案",
				],
			},
			{
				title:"企采金融服务",
				subTitle:"Companies adopt services",
				subList:[
					"这是文案这是文案这是文案",
				],
			},
		],
		no4ImageList:[
			{
				src:require("@/assets/images/homepage/no3-bg.png"),
				title:"云南省耕地质量保护与提升办法",
			},
			{
				src:require("@/assets/images/homepage/no3-bg.png"),
				title:"云南省耕地质量保护与提升办法",
			},
			{
				src:require("@/assets/images/homepage/no3-bg.png"),
				title:"云南省耕地质量保护与提升办法",
			},
			{
				src:require("@/assets/images/homepage/no3-bg.png"),
				title:"云南省耕地质量保护与提升办法",
			},
			{
				src:require("@/assets/images/homepage/no3-bg.png"),
				title:"云南省耕地质量保护与提升办法",
			},
		],
		no4InformationList:[
			{
				src:require("@/assets/images/homepage/no4-list-1.png"),
				title:"原生联数字化采购打通中小企业供需造血能力需造血能力",
				subText:"近日，原生联企业采购推出“企业复工扶持计划”，打造“企采商”业务，面向平台上3000万中小企业提供一站式数字化采数字化采",
			},
			{
				src:require("@/assets/images/homepage/no4-list-2.png"),
				title:"降本千万俱乐部再添一员，泰山石膏累积数字累积数字",
				subText:"泰山石膏有限公司与原生联企业采购平台达成战略合作，依托原生联互联网技术构建企业采购管理平台。",
			},
			{
				src:require("@/assets/images/homepage/no4-list-3.png"),
				title:"原生联企业采购推供应链金融保理，24小时吸24小时吸",
				subText:"近日，南京大田科技开发有限公司在原生联企业采购平台上一笔与江苏省交通工程集团有限公司的交易获得融资，成功解决了成功解决了",
			},
		],
		_swiper: undefined,
		swiperOption: {
			el: '.swiper-container',
			loop: true, //循环
			// autoplay : true,
			autoplay : {
				delay : 3000, //自动切换的时间间隔，单位ms
			},
			pagination: {
				//分页符
				el: '.swiper-pagination',
				clickable:true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
			},
		}
	}},
	components: {
		EasyMaskBox,
		EasySwiper,
		countTo
	},
	mounted() {
		this.$nextTick(() => {
			this.swiperInit();
		});
	},
	methods:{
		swiperInit() {
			this._swiper = new Swiper('.swiper-container', this.swiperOption);
		},
	}
}
</script>
<style  lang="scss" scoped="scoped">
// @import "@/styles/class/limit-max-width.scss";
@import "@/styles/variables.scss";

#homepage {
	.homepage-model {
		// @include mixin-limit-max-width;
		&:nth-child(even) {
			background-color: #F2F3F5;
		}
	}
}
.no-2,
.no-3,
.no-4{
	padding-top: 2.5rem;
	padding-bottom: 2.5rem;
}

.no-1 {
	.banner,
	.banner-model {
		background-repeat: no-repeat;
		background-position: center;
	}
	.banner {
		color: #ffffff;
		height: 34.375rem;
		background-image: url(../../assets/images/homepage/no1-banner.png);
		.h-title {
			padding-top: 3.5rem;
			margin-bottom: 1.25rem;
			span:first-child {
				font-size: 6.75rem;
			}
			span:last-child {
				font-size: 4.375rem;
			}
		}
		.p-title {
			span {
				display: block;
				margin-bottom: 0.75rem;
			}
		}
		button {
			background-color: #FFFFFF;
			color: $ThemeColor;
			border-radius: 10rem;
			padding: .75rem 2rem;
			margin-top: 1rem;
			font-weight: bold;
		}
	}
	.banner-model {
		height: 11.125rem;
		margin-top: -2.625rem;
		display: flex;
		background-image: url(../../assets/images/homepage/no1-banner-model.png);
		.drift-right {
			width: 62rem;
			height: 8.5rem;
		}
		.ul-count-to {
			height: 100%;
			margin-top: 2.625rem;
			color: #FFFFFF;
			display: grid;
			grid-template-columns: repeat(4,1fr);
			align-items: center;
			li {
				&> span {
					margin-left: 2.5rem;
					font-size: 0.75rem;
				}
				p {
					text-align: center;
					span:first-child {
						font-size: 2.5rem;
						white-space: nowrap;
					}
					span:last-child {
						font-size: 1rem;
					}
				}
			}
		}
	}
}

.no-2 {
	box-shadow: 0 .5rem .5rem -.25rem rgba($color: #000000, $alpha: 0.3) inset;
	.flex.mask-box {
		flex-wrap: nowrap;
		.easy-mask-box {
			/deep/ .mask {
				display: flex;
				flex-direction: column;
				justify-content: center;
				color: #FFFFFF ;
				background-color: $ThemeColor;
				padding: 0 2rem;
				& > span {
					font-size: 0.75rem;
				}
				p {
					margin-bottom: 1rem;
					height: 0.0625rem;
					background-color: #FFFFFF;
					span {
						background-color: $ThemeColor;
						padding-right: 1rem;
						// transform: translateY(-.5rem);
						position: relative;
						top: - 0.5625rem;
					}
				}
			}
		}
	}
	.patent-model {
		width: 100%;
		display: grid;
		grid-template-columns: 25rem auto;
		.patent-left {
			height: 18.75rem;
			width: 100%;
			background-image: url(../../assets/demoImage/easy-demo.png);
			// color: #FFFFFF;
			p {
				span:first-child {
					font-size: 5rem;
					line-height: 5rem;
					position: relative;
					.text-superscript {
						position: absolute;
						top: -1rem;
						font-size: 2.75rem;
					}
				}
			}
		}
		.patent-right {
			display: grid;
			grid-template-columns: repeat( 4 ,1fr);
			li {
				width: 12.5rem;
				&:nth-child(1),
				&:nth-child(3),
				&:nth-child(6),
				&:nth-child(8),
				{
					background-color: #F7F7F8;
				}
				&:nth-child(2),
				&:nth-child(4),
				&:nth-child(5),
				&:nth-child(7),{
					background-color: #FFFFFF;
				}
			}
		}
	}
}

.no-3 {
	background-image: url(../../assets/images/homepage/no3-bg.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	.flex-js-sb {
		margin-top: 4.5rem;
		&> li {
			flex: 1;
			background-color: #FFFFFF;
			padding: 2.25rem 1.875rem;
			min-height: 27.5rem;
			box-shadow: 0 0 .5rem -0.125rem rgba($color: #000000, $alpha: 0.3);
			border-radius: 0.25rem;
			transition: background-color 0.3s;
			&:not(:last-child) {
				margin-right: 2rem;
			}
			&:hover {
				background-color: $ThemeColor;
				box-shadow: 0 0 .75rem 2px rgba($color: #000000, $alpha: 0.3), inset 0 0 .5rem 0 rgba($color: #efefef, $alpha: 0.8);
				.title ,
				.subList li,
				.subTitle {
					color: #FFFFFF;
				}
				.separate {
					background-color: #FFFFFF;
				}
			}
			.title {
				font-size: 1.5rem;
				color:  $ThemeColor;
			}
			.subTitle {
				font-size: 0.75rem;
				color: #FF8000;
				margin: 0.75rem 0 1.75rem;
			}
			.separate {
				width: 3.75rem;
				height: 0.0625rem;
				background-color: #BBBBBB;
				margin-bottom: 3.25rem;
			}
		}
		.subList {
			padding-left: 1rem;
			li {
				list-style: disc;
				font-size: 0.75rem;
				color: #999999;
				&:not(:last-child) {
					margin-bottom: 1.5rem;
				}
			}
		}
	}
}

.no-4 {
	.content {
		.swiper-box {
			background-color: $ThemeColor;
			width: 44.375rem;
			height: 19.375rem;
			img {
				height: 100%;
				width: 100%;
			}
			.swiper-container {
				position: relative;
				left: 1rem;
				top: 1rem;
				height: 100%;
				width: 100%;
				/*重置覆盖分页器的样式*/
				.swiper-pagination {
					text-align: right;
					padding-right: 1rem;
				}
				/deep/ .swiper-pagination-bullet {
				  border-radius: 0;
				  width: 6px;
				  height: 6px;
				  background-color: #FFFFFF;
				  opacity: 1;
				  margin: 0 2px;
				}
				/*重置覆盖分页器激活时的样式表现*/
				/deep/ .swiper-pagination-bullet-active {
				  background-color: $ThemeColor;
				}
				.swiper-info {
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 3.125rem;
					line-height: 3.125rem;
					padding-left: 1rem;
					background-color: rgba($color: #000000, $alpha: 0.3);
					.swiper-title {
						color: #FFFFFF;
					}
				}
			}
		}
		.information-model {
			width: 26.5rem;
			li {
				display: grid;
				grid-template-columns: 4.375rem auto;
				grid-gap: 1rem;
				border-bottom: 0.0625rem solid #E4E4E4;
				padding: 1rem 0;
				cursor: pointer;
				&:hover p{
					color: #FF5600;
				}
				img {
					width: 4.375rem;
				}
				span {
					font-size: 0.75rem;
					color: #999999;
				}
			}
		}
	}
}
</style>
