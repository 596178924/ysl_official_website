<template>
	<div class="edit-address">
		<el-dialog
			:title="dialogTitle"
			:visible.sync="show"
			top="6vh"
			:close-on-click-modal="false"
			@closed="close"
		>
			<el-form ref="Form" :model="Form" :rules="Rules" label-position="right" label-width="160px">
				<el-form-item prop="userName" label="姓名"><el-input v-model="Form.userName" clearable /></el-form-item>
				<el-form-item prop="phoneNo" label="手机号"><el-input v-model="Form.phoneNo" clearable /></el-form-item>
				<el-form-item prop="address" label="所在地址">
					<!-- <el-input v-model="Form.address" clearable /> -->
					<SelectAddress ref="SelectAddress"></SelectAddress>
				</el-form-item>
				<el-form-item prop="addressInfo" label="详细地址">
					<el-input
					  type="textarea"
					  :rows="4"
					  placeholder="请输入内容"
					  v-model="Form.addressInfo">
					</el-input>
				</el-form-item>
				<el-form-item prop="isDefault" label="设为默认地址">
					<el-radio-group v-model="Form.isDefault">
						<el-radio :label="true">是</el-radio>
						<el-radio :label="false">否</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="">确定</el-button>
					<el-button  @click="show = false">返回</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>
<script>
import SelectAddress from "@/components/SelectAddress/index.vue"
export default {
	data(){return{
		isChange:false,
		show:false,
		Form: {
			userName:"",
			phoneNo:"",
			address:"",
			addressInfo:"",
			isDefault:true,
		},
		Rules: {
			userName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
			phoneNo: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
			address: [{ required: true, message: '请选择地址', trigger: 'blur' }],
			addressInfo: [{ required: true, message: '请输入详细地址', trigger: 'blur' }],
		}
	}},
	components: {
		SelectAddress
	},
	computed: {
		dialogTitle() {
			return !this.isChange?"新增地址":"修改地址"
		}
	},
	mounted() {
		
	},
	methods:{
		emptyForm() {
			//重置表单
			this.$nextTick(() => {
				this.clearValidate('Form');
				this.resetForm('Form');
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
		open(formData) {
			if(formData) {
				console.log(formData)
				this.isChange = true;
			}
			this.show = true;
		},
		close() {
			this.isChange = false;
			this.$refs['SelectAddress'].emptyData();
			this.emptyForm();
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
.edit-address {
	.el-form {
		padding-right: 4.25rem;
	}
	
}
</style>
