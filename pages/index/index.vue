<template>
	<view class="container">
		<u-swiper :list="list3" indicator indicatorMode="line" circular></u-swiper>
		<view class="u-page">
			<view class="u-demo-block">
				<text class="u-demo-block__title" style="margin-bottom: 15px;">基础使用</text>
				<u-scroll-list indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
					<view class="scroll-list" style="flex-direction: row;">
						<view class="scroll-list__goods-item" v-for="(item, index) in goodsArr" :key="index"
							:class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']">
							<image class="scroll-list__goods-item__image" :src="goodsBaseUrl + item.thumbnail" mode="">
							</image>
							<text class="scroll-list__goods-item__text">￥{{ item.price }}</text>
						</view>
						<view class="scroll-list__show-more" @tap="showMore">
							<text class="scroll-list__show-more__text">查看更多</text>
							<u-icon name="arrow-leftward" color="#f56c6c" size="12"></u-icon>
						</view>
					</view>
				</u-scroll-list>
			</view>
			<view class="u-demo-block">
				<text class="u-demo-block__title">多菜单扩展</text>
				<u-scroll-list :indicator="indicator">
					<view class="scroll-list">
						<view class="scroll-list__line" v-for="(item, index) in menuArr" :key="index">
							<view class="scroll-list__line__item" v-for="(item1, index1) in item" :key="index1"
								:class="[(index1 === item.length - 1) && 'scroll-list__line__item--no-margin-right']">
								<image class="scroll-list__line__item__image" :src="menuBaseUrl + item1.icon" mode="">
								</image>
								<text class="scroll-list__line__item__text">{{ item1.name }}</text>
							</view>
						</view>
					</view>
				</u-scroll-list>
			</view>
		</view>
		<view class="foot">
			<view class="farm-center my-card">
				<view class="data">
					<view class="farm">
						<u-icon name="warning-fill" color="rgb(37,97,259)" size="28"></u-icon>
					</view>
					<view class="center">
						<span><b>报警内容</b> <span style="float: right;">2022/3/11 19:1	0</span></span>
						<span>异常告警，有一台设备故障了，需要等待工作人员来维修</span>
					</view>
				</view>
				<view class="data">
					<view class="farm">
						<u-icon name="warning-fill" color="rgb(37,97,259)" size="28"></u-icon>
					</view>
					<view class="center">
						<span><b>报警内容</b></span>
					</view>
				</view>
			</view>


		</view>
		<!-- 		<u-scroll-list>
			<view class="context">
				<view class="farm" v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex">
					<view class="icon">
						<u-icon color="white" :customStyle="{ paddingTop: '10rpx' }" :name="baseListItem.name"
							:size="30"></u-icon>
					</view>
					<view class="text-font">
						<text class="grid-text">{{ baseListItem.title }}</text>
					</view>
				</view>
			</view>
		</u-scroll-list> -->
		<!-- <hr style="margin: 0 20px;opacity: 0.5;" /> -->
	</view>
</template>

<script>
	import {
		listUser
	} from '../api/index.js'
	export default {
		name: 'index',
		data() {
			return {
				baseList: [{
						name: 'home',
						title: '首页'
					}, {
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
					{
						name: 'star',
						title: '星星'
					},
					{
						name: 'hourglass',
						title: '沙漏'
					},

					{
						name: 'star',
						title: '音量'
					},
				],
				indicator: true,
				list3: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				goodsBaseUrl: 'https://cdn.uviewui.com/uview/goods/',
				menuBaseUrl: 'https://cdn.uviewui.com/uview/menu/',
				goodsArr: [{
						price: '230.5',
						thumbnail: '1.jpg'
					},
					{
						price: '74.1',
						thumbnail: '2.jpg'
					},
					{
						price: '8457',
						thumbnail: '6.jpg'
					},
					{
						price: '1442',
						thumbnail: '5.jpg'
					},
					{
						price: '541',
						thumbnail: '2.jpg'
					},
					{
						price: '234',
						thumbnail: '3.jpg'
					},
					{
						price: '562',
						thumbnail: '4.jpg'
					},
					{
						price: '251.5',
						thumbnail: '1.jpg'
					}
				],
				menuArr: [
					[{
							name: '天猫新品',
							icon: '11.png'
						},
						{
							name: '今日爆款',
							icon: '9.png'
						}, {
							name: '天猫国际',
							icon: '17.png'
						}, {
							name: '饿了么',
							icon: '6.png'
						}, {
							name: '天猫超市',
							icon: '11.png'
						}, {
							name: '分类',
							icon: '2.png'
						}, {
							name: '天猫美食',
							icon: '3.png'
						}, {
							name: '阿里健康',
							icon: '12.png'
						}, {
							name: '口碑生活',
							icon: '7.png'
						}
					],
					[{
							name: '充值中心',
							icon: '8.png'
						},
						{
							name: '机票酒店',
							icon: '10.png'
						}, {
							name: '金币庄园',
							icon: '18.png'
						}, {
							name: '阿里拍卖',
							icon: '15.png'
						}, {
							name: '淘宝吃货',
							icon: '16.png'
						}, {
							name: '闲鱼',
							icon: '4.png'
						}, {
							name: '会员中心',
							icon: '6.png'
						}, {
							name: '造点新货',
							icon: '13.png'
						}, {
							name: '土货鲜食',
							icon: '14.png'
						}
					]
				],
				config: {
					pageNo: 1, // 当前页码
					pageSize: 10, // 每页的数据条数
					total: 0 //共几条
				},
				value5: ''
			}
		},
		computed: {
			token() {
				return this.$store.getters.getToken;
			},
		},
		onLoad() {
			this.doSomethingWithToken()

		},
		methods: {
			doSomethingWithToken() {
				const tokenValue = this.token;
				console.log('Token:', tokenValue);
				listUser(this.config).then(res => {
					console.log(res)
				})
			},
			test() {
				function Promise(fn) {
					this.cbs = [];
					const resolve = (value) => {
						setTimeout(() => {
							this.data = value;
							console.log(value)
							this.cbs.forEach((cb) => cb(value));
						});
					}
					fn(resolve);
				}
				Promise.prototype.then = function(onResolved) {
					return new Promise((resolve) => {
						this.cbs.push(() => {
							const res = onResolved(this.data);
							if (res instanceof Promise) {
								res.then(resolve);
							} else {
								resolve(res);
							}
						});
					});
				};
			},
			onPullDownRefresh() {
				// 停止下拉刷新动画
				setTimeout(() => {
					uni.stopPullDownRefresh();
				}, 1000)
			}
		}
	}
</script>

<style lang="scss">
	.container {

		.scroll-list {
			@include flex(column);

			&__goods-item {
				margin-right: 20px;

				&__image {
					width: 60px;
					height: 60px;
					border-radius: 4px;
				}

				&__text {
					color: #f56c6c;
					text-align: center;
					font-size: 12px;
					margin-top: 5px;
				}
			}

			&__show-more {
				background-color: #fff0f0;
				border-radius: 3px;
				padding: 3px 6px;
				@include flex(column);
				align-items: center;

				&__text {
					font-size: 12px;
					width: 12px;
					color: #f56c6c;
					line-height: 16px;
				}
			}

			&__line {
				@include flex;
				margin-top: 10px;

				&__item {
					margin-right: 15px;

					&__image {
						width: 61px;
						height: 48px;
					}

					&__text {
						margin-top: 5px;
						color: $u-content-color;
						font-size: 12px;
						text-align: center;
					}

					&--no-margin-right {
						margin-right: 0;
					}
				}
			}
		}

		.context {
			display: flex;
			padding: 0 20px 10px 20px;

			.farm {
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: column;
				margin-right: 40px;
				height: 80px;

				.icon {
					padding: 10px;
					background-color: #5af;
					border-radius: 10px;
				}
			}

		}

	}

	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}

	.foot {
		width: 100%;
		height: 30%;
		display: flex;
		justify-content: center;

		.farm-center {
			width: 90%;
			margin-top: 20px;
			display: flex;
			flex-direction: column;

			.data {
				display: flex;
				margin: 10px;
			}

			.farm {
				width: 50px;
				height: 50px;
				margin-right: 10px;
				background: rgb(226, 245, 255);
				border-radius: 8px;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.center {
				display: flex;
				flex-direction: column;
				width: 75%;
				height: 100%;
			}
		}

	}
</style>