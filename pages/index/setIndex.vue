<template>
	<view class="">
		<u-navbar title="设置" leftText="返回" :autoBack="true">
		</u-navbar>
		<u-collapse @change="change" @close="close" @open="open">
			<u-collapse-item title="文档指南" name="Docs guide">
				<text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
			</u-collapse-item>
			<u-collapse-item title="组件全面" name="Variety components">
				<text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
			</u-collapse-item>
			<u-collapse-item title="众多利器" name="Numerous tools">
				<text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
			</u-collapse-item>
		</u-collapse>
		<u-cell-group>
			<u-cell size="large" title="单元格" value="内容" isLink></u-cell>
			<u-cell size="large" title="单元格" value="内容" label="描述信息"></u-cell>
		</u-cell-group>
		<u-number-box v-model="value" @change="valChange"></u-number-box>
		<view class="wrap">
			<u-toast ref="uToast"></u-toast>
			<u-code :seconds="seconds" ref="uCode" @change="codeChange"></u-code>
			<u-button @tap="getCode" type="primary">{{tips}}</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indicator: true,
				value: 0,
				tips: '',
				// refCode: null,
				seconds: 10,
			}
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			open(e) {
				// console.log('open', e)
			},
			close(e) {
				// console.log('close', e)
			},
			change(e) {
				// console.log('change', e)
			}
		}
	}
</script>
<style lang="scss">
</style>