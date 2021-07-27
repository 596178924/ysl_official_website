<template>
	<div id="security-management">
		<div class="sub-title">
			<p class="title">
				安全管理
			</p>
		</div>
		<!-- <el-empty description="security-management还没写"></el-empty> -->
		<ol>
			<li>
				<span>登录密码</span>
				<div>
					<p>******</p>
					<span>用于平台账户登录</span>
				</div>
				<el-button @click="toName('changeUserPassword')">更改</el-button>
			</li>
			<li>
				<span>手机验证</span>
				<div>
					<p>******</p>
					<span>用于接收短信验证码及联系平台，若停用请及时更改</span>
				</div>
				<el-button>更改</el-button>
			</li>
			<li>
				<span>对公账号</span>
				<div>
					<p>******</p>
					<span>中国建设银行</span>
				</div>
				<!-- <el-button>更改</el-button> -->
			</li>
			<li>
				<span>验证邮箱</span>
				<div>
					<p>******</p>
					<span>用于找回密码，重新设置手机号码等操作</span>
				</div>
				<el-button>更改</el-button>
			</li>
		</ol>
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
		toName(name) {
			this.$routerUtil.toName(name)
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
#security-management {
	padding-bottom: 7.25rem;
	.el-steps {
		max-width: 37.5rem;
		margin: 3.125rem auto 0 auto;
	}
	ol {
		margin: 3.625rem;
		li {
			margin-bottom: 2.5rem;
			display: grid;
			grid-template-columns: 13.5rem auto 4.375rem;
			align-items: center;
			span {
				color: #999999;
			}
		}
	}
}
</style>
