<template>
	<div class="custom-loading" v-show="visible">
		<img :src="imageUrl" alt="Loading...">
	</div>
</template>

<script>
	export default {
		props: {
			imageUrl: {
				type: String,
			},
			visible: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>

<style scoped>
	.custom-loading {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.5);
		/* 背景颜色，可根据需要调整 */
	}


	.custom-loading img {
		width: 160px;
		height: 140px;
		/* 调整图片大小 */
	}
</style>