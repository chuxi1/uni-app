<template>
	<view class="container">
		<view class="context">
		</view>
		<view class="foot">
			<u-tabbar :placeholder="false" :value="value" @change="jump" :fixed="false" :safeAreaInsetBottom="false">
				<u-tabbar-item text="首页" icon="home" name="index"></u-tabbar-item>
				<u-tabbar-item text="放映厅" icon="photo" name="photo"></u-tabbar-item>
				<u-tabbar-item text="直播" icon="play-right" name="play-right"></u-tabbar-item>
				<u-tabbar-item text="我的" name="personal" icon="account"></u-tabbar-item>
			</u-tabbar>
		</view>
	</view>
</template>

<script>
	export default {
		name:'main',
		data() {
			return {
				value: 'index',
			};
		},
		methods: {
			jump(value) {
				this.value = value
				uni.navigateTo({
					url: `/pages/index/${value}`
				})
			}
		},
	};
</script>

<style lang="scss">
	.container {
		.foot {
			position: fixed;
			bottom: 0px;
			right: 0px;
			left: 0px;
		}
	}
</style>