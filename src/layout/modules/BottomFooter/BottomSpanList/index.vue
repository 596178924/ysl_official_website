<template>
	<ul class="bottom-span-list">
		<li v-for="item in spanList" :key="item.label">
			<span
				@click="
					() => {
						item.onClick;
					}
				"
			>
				{{ item.label }}
			</span>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		spanList: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped="scoped">
.bottom-span-list {
	color: #999999;
	font-size: 0.75rem;
	display: flex;
	justify-content: center;
	padding: 1rem 0;
	li {
		padding: 0 0.75rem;
		&:not(:last-child) {
			border-right: 0.0625rem solid #999999;
		}
		span {
			cursor: pointer;
		}
	}
}
</style>
