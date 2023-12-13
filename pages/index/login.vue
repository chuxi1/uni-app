<template>
	<view class="container" :class="{ 'loading-class': isShow }">
		<u-toast ref="uToast" />
		<view class="context" v-if="!isShow">
			<u--form labelPosition="left" :model="model1" :rules="rules" ref="uForm">
				<u-form-item label="账号" prop="username" borderBottom>
					<u--input v-model="model1.username" border="node" placeholder="请输入账号"></u--input>
				</u-form-item>
				<u-form-item label="密码" prop="password" borderBottom>
					<u--input v-model="model1.password" password border="node" placeholder="请输入密码"></u--input>
				</u-form-item>
			</u--form>
			<u-button @click="submit" type="primary">提交</u-button>
		</view>
		<loading :image-url="loadingImageUrl" :visible="isLoading" />
	</view>
</template>

<script>
	import Loading from '@/pages/components/loading.vue';
	import {
		logins
	} from '../api/index.js'
	export default {
		name: 'login',
		components: {
			Loading,
		},
		data() {
			return {
				isLoading: false,
				isShow: false,
				loadingImageUrl: require('@/static/images/icon/file.jpeg'), // 你的加载图片的 URL
				model1: {
					username: '',
					password: '',
				},
				rules: {
					'username': {
						type: 'string',
						required: true,
						message: '请填写账号',
						trigger: ['blur', 'change']
					},
					'password': {
						type: 'string',
						required: true,
						message: '请填写密码',
						trigger: ['blur', 'change']
					},
				},
			};
		},
		onLoad() {
			this.isShow = true
			setTimeout(() => {
				this.isShow = false
			}, 2000)
		},
		methods: {
			submit() {
				this.$refs.uForm.validate().then(res => {
					this.isLoading = true
					// uni.showLoading({
					// 	title: '正在登录'
					// })
					logins({
						userAccount: this.model1.username,
						userPwd: this.model1.password
					}).then(res => {
						if (res.code == 200) {
							this.$store.commit('setToken', res.data.token)
							setTimeout(() => {
								this.isLoading = false
								// uni.hideLoading();
								uni.switchTab({
									url: '/pages/index/index'
								})
							}, 1500)
						} else {
							setTimeout(() => {
								this.isLoading = false
								this.$refs.uToast.error(res.msg)
							}, 1000)
						}
					})
				}).catch(errors => {
					this.$refs.uToast.error('账号或密码不能为空')
				})

			}
		},
	};
</script>
<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		background: url('@/static/images/icon/book.png') center center no-repeat;
		background-size: cover;

		.context {
			background-color: white;
			padding: 20px;
			border-radius: 10px;
			box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .1);
		}
	}

	.loading-class {
		background: url('@/static/images/icon/shan.jpeg') center center no-repeat;
		background-size: cover;
		z-index: 999;
	}
</style>