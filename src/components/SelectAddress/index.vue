<template>
	<ul class="select-address" flex>
		<li>
			<el-select
				v-model="addressNo.provinceRegionNo"
				placeholder="请选择省地域"
				clearable
				filterable
				v-if="provinceRegionList.length > 0"
				@change="setCityRegionList"
			>
				<el-option v-for="item in provinceRegionList" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<span v-else>数据加载失败</span>
		</li>
		<li>
			<el-select
				v-model="addressNo.cityRegionNo"
				placeholder="请选择城市地域"
				clearable
				filterable
				v-if="cityRegionList.length > 0"
				@change="setAreaRegionList"
			>
				<el-option v-for="item in cityRegionList" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<span v-else>未选择省地域</span>
		</li>
		<li>
			<el-select v-model="addressNo.areaRegionNo" placeholder="请选择区地域" clearable filterable v-if="areaRegionList.length > 0">
				<el-option v-for="item in areaRegionList" :key="item.value" :label="item.label" :value="item.value"></el-option>
			</el-select>
			<span v-else>未选择城市</span>
		</li>
	</ul>
</template>
<script>
import AddressJson from '@/utils/json/city2.json';
export default {
	data(){return{
		AddressJson: AddressJson, //地区选择json数据
		provinceRegionList: [], //	integer($int32) 省地域编号
		cityRegionList: [], //		integer($int32) 城市地域编号
		areaRegionList: [], //		integer($int32) 区地域编号
		addressNo: {
			provinceRegionNo: null, //	integer($int32) 省地域编号
			cityRegionNo: null, //		integer($int32) 城市地域编号
			areaRegionNo: null, //		integer($int32) 区地域编号
		},
	}},
	components: {
		
	},
	computed: {
		
	},
	created() {
		this.setProvinceRegionList();
	},
	mounted() {
		
	},
	methods:{
		emptyData() {
			this.addressNo.provinceRegionNo = null;
			this.addressNo.cityRegionNo = null;
			this.addressNo.areaRegionNo = null;
			this.cityRegionList = [];
			this.areaRegionList = [];
		},
		splitStr(str) {
			let arr = str.split(',');
			arr[1] = Number(arr[1]);
			return arr;
		},
		setProvinceRegionList() {
			//设置省区选择框
			//设置省选择项
			let AddressJson = this.AddressJson;
			if (AddressJson.length > 0) {
				let list = [];
				AddressJson.forEach(item => {
					// console.log(item.name)
					let arr = this.splitStr(item.name);
					list.push({
						label: arr[0],
						value: arr[1],
						cityList: item.cityList
					});
				});
				this.provinceRegionList = list;
				// console.log(list);
			}
		},
		setCityRegionList(pValue) {
			//设置城市 选择框
			this.addressNo.cityRegionNo = null;
			this.addressNo.areaRegionNo = null;
			this.cityRegionList = [];
			this.areaRegionList = [];
			console.log('取消地域', this.cityRegionList, this.addressNo.cityRegionNo);
			console.log('取消区', this.areaRegionList, this.addressNo.areaRegionNo);
			//设置城市选择项
			// console.log("setCityRegionList",pValue);
			if (!!pValue) {
				let provinceRegionList = this.provinceRegionList;
				provinceRegionList.forEach(proItem => {
					if (proItem.value === pValue) {
						let list = [];
						proItem.cityList.forEach(cityItem => {
							let arr = this.splitStr(cityItem.name);
							list.push({
								label: arr[0],
								value: arr[1],
								areaList: cityItem.areaList
							});
						});
						this.cityRegionList = list;
						// console.log(list);
					}
				});
			}
		},
		setAreaRegionList(cValue) {
			//设置区域选择框
			this.addressNo.areaRegionNo = null;
			this.areaRegionList = [];
			console.log('取消区', this.areaRegionList, this.addressNo.areaRegionNo);
			// 设置区选择项
			// console.log("setAreaRegionList-->",cValue);
			// areaRegionList
			if (!!cValue) {
				let cityRegionList = this.cityRegionList;
				cityRegionList.forEach(cityItem => {
					if (cityItem.value === cValue) {
						// console.log(cityItem);
						let list = [];
						cityItem.areaList.forEach(areaItem => {
							// console.log(areaItem);
							let arr = this.splitStr(areaItem);
							list.push({
								label: arr[0],
								value: arr[1]
							});
						});
						this.areaRegionList = list;
						// console.log(list);
					}
				});
			}
		},
	}
}
</script>
<style  lang="scss" scoped="scoped">
li:not(:last-child) {
	margin-right: 0.625rem;
}
.el-select {
	max-width: 146px;
}
</style>
