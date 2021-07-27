<template>
	<span class="nav-mate-route-title" v-show="showNavMateRouteTitle">{{ routeTitle}}</span>
</template>
<script>
export default {
	data() {
		return {
			showNavMateRouteTitle: false,
			routeTitle:"",
		};
	},
	watch: {
		$route(route) {
			// console.log(route);
			if (route.meta.unshowRouteTitle) {
				return this.showNavMateRouteTitle = false;
			}
			this.showNavMateRouteTitle = true;
			if(route.meta.showParentTitle) {
				return this.routeTitle = this.getRouteParentTitle(route.matched);
			} else if(!route.meta.title) {
				return this.routeTitle = this.getRouteParentTitle(route.matched);
			} 
			this.routeTitle = route.meta.title;
		},
	},
	methods: {
		getRouteParentTitle(matched) {
			if(matched.length<=0) {
				return ""
			}
			let length = matched.length - 1;
			let parentLength = length - 1;
			let title = matched[parentLength].meta.title;
			// console.log("title : ",title)
			// console.log("matched : ", matched[parentLength])
			if(!title||this.$route.meta.hideNavMetaRouteTitle) {
				// title = '';
				let sliceMatched = matched.slice(0,parentLength)
				title = this.getRouteParentTitle(sliceMatched)
			}
			return title
		}
	}
};
</script>
