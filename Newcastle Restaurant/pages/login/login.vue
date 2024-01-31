<template>
	<view>
		<image src="/static/loginLogo.png" style="width: 100vw;margin-top: 100px;" mode="widthFix"></image>
		<view style="padding: 20px;">
			<view style="border: 1px solid #bececd;display: flex;align-items: center;padding: 8px 12px;margin-bottom: 10px;">
				<image src="/static/email-fill.png" style="height: 30px;margin-right: 10px;" mode="heightFix"></image>
				<input placeholder="email" placeholder-style="color: #bececd;font-style: oblique;" style="" type="text" v-model="email">
			</view>

			<view style="border: 1px solid #bececd;display: flex;align-items: center;padding: 8px 12px;margin-bottom: 10px;">
				<image src="/static/Lock.png" style="height: 30px;margin-right: 10px;" mode="heightFix"></image>
				<input placeholder="password" placeholder-style="color: #bececd;font-style: oblique;" style="" type="password" v-model="password">
			</view>
		</view>

		<view style="padding: 20px;">
			<button style="background-color: #5e8685;color: #fff;border-radius: 0;" @click='login'>LOGIN</button>
		</view>
	</view>
</template>

<script>
	import util from '../../util.js'
	export default {
		data() {
			return {
				email: '',
				password: ''
			};
		},
		methods: {
			login() {
				uni.showLoading({
					title: 'login……'
				})
				this.$api.post('/getuser', {
					email: this.email,
					password: this.password
				}).then(res => {
					uni.hideLoading()
					if (res.user != null) {
						uni.setStorageSync('userInfo', res.user)
						uni.switchTab({
							url: '/pages/index/index'
						})
					} else {
						uni.showToast({
							title: 'Incorrect account or password',
							icon: "none"
						})
					}
				})
			}
		}
	};
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
	}
</style>