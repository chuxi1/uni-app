<template>
	<view class="container">
		<view class="header">
			<view class="icon">
				<u-icon name="arrow-left" size="25" @click="back"></u-icon>
			</view>
			<view class="centered"><b style="font-size: 16px;">工单管理</b></view>
			<view class="right-aligned mr-10"><u-icon name="plus" color="block" size="20"
					@click="addWorkorder"></u-icon>
			</view>
		</view>
		<view class="context">
			<u-list @scrolltolower="scrolltolower" v-if="urls.length > 0">
				<u-list-item v-for="(item, index) in urls" :key="index">
					<view class="fram my-card">
						<span style="font-size: 16px;font-weight: 800;">主题：{{item.theme}}</span>
						<span>创建时间：{{ new Date().toLocaleString('en-US', { hour12: false }) }}</span>
						<span>状态：未处理</span>
						<span>
							<u-button type="primary" text="查看" @click="getContent(item)"
								style="width: 50px; margin-right: auto;margin-right: 0;"></u-button>
						</span>

					</view>
					<!-- <u-cell :title="item.theme" isLink @click="getContent(item)">
						<u-avatar slot="icon" shape="square" size="50" src="item.theme"></u-avatar>
					</u-cell> -->
				</u-list-item>
			</u-list>
			<u-empty mode="data" v-else :icon='icon' textSize='18' width='240px' height='240px'></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'workorder',
		data() {
			return {
				icon: require('@/static/images/icon/nodata.png'),
				urls: [
					// 'https://cdn.uviewui.com/uview/album/1.jpg',
					// 'https://cdn.uviewui.com/uview/album/2.jpg',
					// 'https://cdn.uviewui.com/uview/album/3.jpg',
					// 'https://cdn.uviewui.com/uview/album/4.jpg',
					// 'https://cdn.uviewui.com/uview/album/5.jpg',
					// 'https://cdn.uviewui.com/uview/album/6.jpg',
					// 'https://cdn.uviewui.com/uview/album/7.jpg',
					// 'https://cdn.uviewui.com/uview/album/8.jpg',
					// 'https://cdn.uviewui.com/uview/album/9.jpg',
					// 'https://cdn.uviewui.com/uview/album/11.jpg',
					// 'https://cdn.uviewui.com/uview/album/12.jpg',
				],
			};
		},
		onLoad() {
			// this.addWorkorder();
			const param1 = this.$route.query.param1;
			const param2 = this.$route.query.param2;
			if (param1) {
				this.urls.push({
					theme: param1,
					content: param2
				}, {
					theme: param1 + 1,
					content: param2
				})
			}
		},
		methods: {
			scrolltolower() {
				console.log('12')
				// Handle scrolltolower event if needed
				uni.navigateTo({
					url: '/pages/workorder/addwork'
				})
			},
			getContent(row) {
				const targetRoute = '/pages/workorder/addwork'; // Change this to your actual target route

				// Replace 'value1' and 'value2' with your actual parameter values
				const parameter1 = row.theme;
				const parameter2 = row.content;
				uni.navigateTo({
					url: `${targetRoute}?param1=${parameter1}&param2=${parameter2}`,
				});
			},
			addWorkorder() {
				uni.navigateTo({
					url: '/pages/workorder/addwork'
				})
				// const newImageUrl = 'https://example.com/new-image.jpg';
				// this.urls.push(newImageUrl);
				// console.log('Updated URLs:', this.urls);
			},
			back() {
				uni.switchTab({
					url: '/pages/index/personal'
				})
			},
		},
	};
</script>

<style lang="scss">
	.container {
		height: 100vh;
		width: 100%;
		background-color: rgba(71, 143, 214, 0.1);

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 5.5%;
			width: 100%;
			background: rgb(248, 248, 248);
			// box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		}

		.context {
			// padding-top: 25px;
			height: 95%;
			width: 100%;

			.fram {
				height: 115px;
				margin: 10px;
				display: flex;
				flex-direction: column;
				padding: 15px;
				line-height: 28px;
			}
		}
	}
</style>