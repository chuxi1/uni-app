<template>
	<view class="container">
		<view class="context  mt-10">
			<text class="u-demo-block__title">主题</text>
			<u--input placeholder="请输入主题" v-model="theme" style="background-color: white;"></u--input>
			<text class="u-demo-block__title">内容</text>
			<view class="u-demo-block__content">
				<u--textarea v-model="content" placeholder="请描述你遇到的问题"></u--textarea>
			</view>
			<u-button type="primary" text="提交" @click="change" style="margin-top: 25px;"
				shape="circle"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				theme: '',
				content: ''
			}
		},
		onLoad() {
			this.theme = this.$route.query.param1;
			this.content = this.$route.query.param2;

		},
		methods: {
			change() {
				const targetRoute = '/pages/workorder/workorderManage'; // Change this to your actual target route

				// Replace 'value1' and 'value2' with your actual parameter values
				const parameter1 = this.theme;
				const parameter2 = this.content;

				uni.navigateTo({
					url: `${targetRoute}?param1=${parameter1}&param2=${parameter2}`,
				});

			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: rgba(71, 143, 214, 0.1);
		display: flex;
		justify-content: center;

		.context {
			width: 80%;
			line-height: 40px;
		}

	}
</style>