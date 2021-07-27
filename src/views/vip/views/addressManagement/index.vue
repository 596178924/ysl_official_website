<template>
	<div id="address-management">
		<div class="sub-title flex-center-js-sb">
			<p class="title">
				地址管理
			</p>
			<el-button type="success" @click="$refs['EditAddress'].open()">
				<i class="el-icon-plus"></i>
				新增地址
			</el-button>
		</div>
		<!-- <el-empty description="address-management还没写"></el-empty> -->
		<el-table :data="tableData" border  v-loading="isLoading" ref="TableDom" highlight-current-row :header-cell-style="{ textAlign: 'center','background-color': '#f9f9f9', }"
					:cell-style="{ textAlign: 'center' }">
			<el-table-column prop="username" label="姓名" width="120"></el-table-column>
			<el-table-column prop="phoneNo" label="手机号"  width="120"></el-table-column>
			<el-table-column prop="address" label="地址" ></el-table-column>
			<el-table-column label="操作"  width="140">
				<template v-slot="{row}">
					<el-link type="primary" @click="$refs['EditAddress'].open(row)">修改</el-link>
					<el-link type="danger">删除</el-link>
				</template>
			</el-table-column>
		</el-table>
		<TablePagination
			:total="tableQueryOption.total"
			:current="tableQueryOption.current"
			@currentChange="
				val => {
					tableQueryOption.current = val;
					getTableData();
				}
			"
			@sizeChange="
				val => {
					tableQueryOption.size = val;
					getTableData();
				}
			"
		/>
		<EditAddress ref='EditAddress'></EditAddress>
	</div>
</template>
<script>
import TablePagination from "@/components/TablePagination/index.vue";
import EditAddress from "./EditAddress/index.vue";
export default {
	data(){return{
		isLoading:false,
		tableData:[
			{
				username:"123",
				phoneNo:"15588888888",
				address:"湖南省长沙市岳麓区麓谷企业广场F2栋1005室"
			}
		],
		tableQueryOption:{
			current:1,
			size:10,
			total:0
		},
	}},
	components: {
		TablePagination,
		EditAddress,
	},
	computed: {
		
	},
	mounted() {
		
	},
	methods:{
		getTableData() {
			
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
#address-management {
	.el-link {
		&:not(:last-child) {
			margin-right: 0.5rem;
		}
	}
}
</style>
