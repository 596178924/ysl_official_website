<template>
	<div id="register-view" limit-max-width>
		<div class="register-form-box">
			<el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-position="right" label-width="160px">
				<el-form-item prop="userName" label="用户名"><el-input v-model="registerForm.userName" clearable /></el-form-item>
				<el-form-item prop="password" label="密码"><el-input v-model="registerForm.password" clearable /></el-form-item>
				<el-form-item prop="againPassword" label="确认密码"><el-input v-model="registerForm.againPassword" clearable /></el-form-item>
				<el-form-item prop="phoneNo" label="手机号"><el-input v-model="registerForm.phoneNo" clearable /></el-form-item>
				<el-form-item prop="verify" label="验证码">
					<!-- <el-input v-model="registerForm.verify" clearable class="verify-input">
						<template slot="append">
							获取验证码
						</template>
					</el-input> -->
					
					<VerifyElementInput v-model="registerForm.verify"></VerifyElementInput>
				</el-form-item>
				<el-form-item prop="idCart" label="身份证号码"><el-input v-model="registerForm.idCart" clearable /></el-form-item>
				<el-form-item>
					<p flex style="font-size: 0.75rem;">
						<span>注册即同意
							<span class="click-text">
								《原生联用户协议》
							</span>
						</span>
						<span drift-right>已有账号,
							<span class="click-text">
								立即登录
							</span>
						</span>
					</p>
				</el-form-item>
				<el-form-item>
					<!-- <el-button type="plain" @click="emptyForm">重置</el-button> -->
					<el-button class="submit-bottom" @click="submit">提交</el-button>
				</el-form-item>
			</el-form>
			
			<img class="form-image" src="@/assets/images/user/register/register-form-bg.png" alt="">
		</div>
	</div>
</template>
<script>
import VerifyElementInput from "@/components/VerifyElementInput/index.vue";
export default {
	data() {
		return {
			registerForm: {
				userName: '', //string
				password: '', //string
				againPassword: '', //string
				phoneNo: '', //string
				verify: '', //string
				idCart: ''
			},
			registerRules: {
				userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
				againPassword: [{ required: true, message: '请再次输入密码', trigger: 'blur' }, { validator: this.validateAgainPassword, trigger: 'blur' }],
				phoneNo: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
				verify: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
				idCart: [{ required: true, message: '请输入身份证号', trigger: 'blur' }]
			}
		};
	},
	components: {
		VerifyElementInput,
	},
	methods: {
		submit() {
			// TODO 提交注册
			
		},
		registerSubmit() {
			this.$refs['registerForm'].validate(async valid => {
				if (valid) {
					console.log('submit!!');
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		emptyForm(name) {
			let formName;
			!!!name && typeof name == 'string' ? (formName = name) : (formName = 'Form');
			//重置表单
			this.$nextTick(() => {
				this.clearValidate(formName);
				this.resetForm(formName);
			});
		},
		resetForm(formName) {
			//清空表单的验证结果
			this.$refs[formName].resetFields();
		},
		clearValidate(formName) {
			//移除该表单项的校验结果
			this.$refs[formName].clearValidate();
		},
		validateAgainPassword(rule, value, callback) {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.Form.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#register-view {
	height: 44rem;
	background-image: url(../../../assets/images/user/register/register-bg.png);
	background-repeat: no-repeat;
	// background-size: cover;
	background-size: 100vw 100%;
	background-position: bottom left;
	padding-top: 4rem;
	.register-form-box {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		border-radius: .25rem;
		max-width: 68.75rem;
		max-height: 34.375rem;
		margin: 0 auto;
		background-color: #FFFFFF;
		box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.3);
		.el-form {
			padding-top: 3rem;
		}
		.form-image {
			width: 31.25rem;
			height: 100%;
		}
		.el-input {
			min-width: 20rem;
		}
	}
	.submit-bottom {
		background-color: #00BF30;
		color: #FFFFFF;
		width: 100%;
		border: 0;
	}
	.click-text {
		color: #00BF30;
	}
}

</style>