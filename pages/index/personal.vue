<template>
	<view class="container">
		<scroll-view scroll-y="true" class="scroll-Y" style="height: 85%;">
			<view class="content-container">
				<view class="header my-card">
					<span @click="navigateToNextPage()">我的账号</span>
					<p class="mt-10">
					<h3>18296431096@163.com</h3>
					</p>
				</view>
				<view class="context my-card">
					<span style="margin: 0;">我的订阅</span>
					<span><b style="font-size: 20px;">VIP</b></span>
					<span
						style="opacity: 0.8;">你的流量在{{ new Date().toLocaleString('en-US', { hour12: false }) }}到期,距离到期还有12小时，已用流量在今天后重置</span>
					<span><u-line-progress :percentage="30" :showText="false" height="8"></u-line-progress></span>
					<span><b>已用9.31GB / 总计50GB</b></span>
				</view>
				<view class="context1 my-card">
					<scroll-view scroll-y="true" class="scroll-Y" style="height: 100%;">
						<u-cell-group>
							<u-cell title="我的订单" isLink></u-cell>
							<u-cell title="我的钱包" isLink></u-cell>
							<u-cell title="邀请返利" url="/pages/components/form" isLink></u-cell>
							<u-cell title="表单" url="/pages/components/form" isLink></u-cell>
						</u-cell-group>
					</scroll-view>
				</view>
				<view class="context2 my-card">
					<u-cell-group>
						<u-cell title="我的工单" value="新版本" isLink url="/pages/workorder/workorderManage"></u-cell>
						<u-cell title="流量明细" url="/pages/index/setIndex" isLink></u-cell>
						<u-cell title="其他设置" url="/pages/index/setIndex" isLink></u-cell>
					</u-cell-group>
				</view>
				<view class="foot">
					<u-modal :title="title" :content="content" :show="show2" @confirm="confirm" @cancel="cancel"
						showCancelButton closeOnClickOverlay></u-modal>
					<u-button text="退出登录" style="color: red;" @click="logout"></u-button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'personal',
		data() {
			return {
				show2: false,
				title: '退出登录',
				content: '确定退出吗？',
			};
		},
		methods: {
			navigateToNextPage() {
				uni.navigateTo({
					url: '/pages/index/login',
				});
			},
			logout() {
				this.show2 = true;
			},
			confirm() {
				this.show2 = false;
				this.$store.commit('clearToken');
				uni.navigateTo({
					url: '/pages/index/login',
				});
			},
			cancel() {
				this.show2 = false;
			},
		},
	};
</script>

<style lang="scss">
	.container {
		background: url('@/static/images/icon/9.jpg') center center no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
	}

	.content-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.header {
		margin-top: 30px;
		width: 88%;
		height: 8%;
		padding: 15px 10px 10px 10px;
	}

	.context {
		display: flex;
		flex-direction: column;

		span {
			margin-top: 8px;
		}

		margin-top: 10px;
		width: 88%;
		min-height: 22%;
		padding: 10px;
	}

	.context1 {
		margin-top: 10px;
		width: 88%;
		min-height: 20%;
		padding: 0 10px 10px 10px;
	}

	.context2 {
		margin-top: 10px;
		width: 88%;
		min-height: 20%;
		padding: 0 10px 10px 10px;
	}

	.foot {
		margin-top: 10px;
		width: 94%;
		height: 30px;
	}
</style>