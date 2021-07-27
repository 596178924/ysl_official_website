<template>
	<div id="change-user-password">
		<div class="sub-title">
			<p class="title">
				更改密码
			</p>
		</div>
		<!-- <el-steps :active="currentIndex" align-center process-status="wait" finish-status="success">
			<el-step title="安全验证"></el-step>
			<el-step title="新密码"></el-step>
			<el-step title="设置完成"></el-step>
		</el-steps>
		<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
			<el-form-item prop="phoneNo" label="验证方式">
				<el-radio-group v-model="testToEmail">
				    <el-radio :label="false">手机验证</el-radio>
				    <el-radio :label="true">邮箱验证</el-radio>
				  </el-radio-group>
			</el-form-item>
			<transition name="ease" mode="out-in">
				<el-form-item prop="phoneNo" label="手机号码" v-show="!testToEmail">
					<span>{{Form.phoneNo}}</span>
				</el-form-item>
				<el-form-item prop="phoneNo" label="邮箱验证" v-show="testToEmail">
					<span>{{Form.email}}</span>
				</el-form-item>
			</transition>
			<el-form-item>
				<el-button type="success" @click="submit">下一步</el-button>
				<el-button @click="back">返回</el-button>
			</el-form-item>
		</el-form> -->
		<EasyStepForm :steps="steps" v-model="currentIndex" @emitNext="stepNext" @emitPrev="stepPrev">
			<div v-if="currentIndex == 1">
				<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
					<el-form-item prop="verifyType" label="验证方式">
						<el-radio-group v-model="Form.verifyType">
							<el-radio :label="1">手机验证</el-radio>
							<el-radio :label="2">邮箱验证</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item prop="phoneNo" label="手机号码" v-show="Form.verifyType == 1">
						{{Form.phoneNo}}
					</el-form-item>
					<el-form-item prop="email" label="验证邮箱"  v-show="Form.verifyType == 2">
						{{Form.email}}
					</el-form-item>
				</el-form>
			</div>
			<div v-else-if="currentIndex == 2">
				<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
					<el-form-item prop="verifyType" label="验证方式">
						<VerifyElementInput v-model="Form.verifyCode"></VerifyElementInput>
					</el-form-item>
				</el-form>
			</div>
			<div v-else-if="currentIndex == 3">
				完成了
			</div>
		</EasyStepForm>
	</div>
</template>

<script>
import EasyStepForm from "@/components/EasyStepForm/index.vue";
import VerifyElementInput from "@/components/VerifyElementInput/index.vue";
export default {
	data(){return{
		value:"",
		currentIndex:1,
		testToEmail:false,
		Form: {
			verifyType: 1,// 1 phone 2 email
			phoneNo:"phone...",
			email:"email...",
			verifyCode:"",
		},
		Rules: {
		},
		steps:[
			{title:"安全验证"},
			{title:"新密码"},
			{title:"设置完成"},
		]
	}},
	components: {
		EasyStepForm,
		VerifyElementInput,
	},
	computed: {
		
	},
	mounted() {
		
	},
	methods:{
		stepNext(index) {
			this.currentIndex = index;
		},
		stepPrev(index) {
			this.currentIndex = index;
		}
	}
}
</script>

<style  lang="scss" scoped="scoped">
@import "@/styles/transition/ease.scss";
#change-user-password {
	// /deep/.el-steps,
	// /deep/.el-form {
	// 	max-width: 37.5rem;
	// 	margin: 3.125rem auto 0 auto;
	// }
	.easy-step-form {
		max-width: 37.5rem;
		margin: 3.125rem auto 0 auto;
	}
	.el-input {
		max-width: 20rem;
	}
	// .submit-bottom {
	// 	background-color: #00BF30;
	// 	color: #FFFFFF;
	// 	border: 0;
	// }
}
</style>
