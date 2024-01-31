<template>
	<view class="page">
		<image src="/static/loginBg.png" style="width: 100vw;margin-top: 40px;" mode="widthFix"></image>
		<view style="padding: 20px;">
			<button style="background-color: #5e8685;color: #fff;border-radius: 0;" @click='toLogin'>LOG IN</button>
		</view>
		<view style="padding: 0 20px;">
			<button style="color: #5e8685;background-color: #fff;border-radius: 0;border: 2px solid #5e8685;"
				@click='toSignup'>SIGN UP</button>
		</view>
		<view style="height: 30px;"></view>
	</view>
</template>

<style>
	page {
		background-color: #fff;
	}
</style>

<script>
	export default {
		components: {},
		data() {
			return {};
		},
		onLoad() {
			if (uni.getStorageSync('userInfo')){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			toSignup() {
				uni.navigateTo({
					url: '/pages/signup/signup'
				})

			}
		}
	};
</script>