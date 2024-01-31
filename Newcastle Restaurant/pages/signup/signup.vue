<template>
	<view class="page">
		<image src="/static/registerBg.png" style="width: 100vw;margin-top: 100px;" mode="widthFix"></image>
		<view style="padding: 20px;">
			<view style="border: 1px solid #bececd;display: flex;align-items: center;padding: 8px 12px;margin-bottom: 10px;">
				<image src="/static/user.png" style="height: 30px;margin-right: 10px;" mode="heightFix"></image>
				<input placeholder="username" placeholder-style="color: #bececd;font-style: oblique;" v-model='username'
					type="text">
			</view>

			<view style="border: 1px solid #bececd;display: flex;align-items: center;padding: 8px 12px;margin-bottom: 10px;">
				<image src="/static/email-fill.png" style="height: 30px;margin-right: 10px;" mode="heightFix"></image>
				<input placeholder="email" placeholder-style="color: #bececd;font-style: oblique;" v-model='email' type="text">
			</view>

			<view style="border: 1px solid #bececd;display: flex;align-items: center;padding: 8px 12px;margin-bottom: 10px;">
				<image src="/static/Lock.png" style="height: 30px;margin-right: 10px;" mode="heightFix"></image>
				<input placeholder="password" placeholder-style="color: #bececd;font-style: oblique;" v-model='password'
					type="password">
			</view>

			<view style="border: 1px solid #bececd;display: flex;align-items: center;padding: 8px 12px;margin-bottom: 10px;">
				<image src="/static/Lock.png" style="height: 30px;margin-right: 10px;" mode="heightFix"></image>
				<input placeholder="confirm password" placeholder-style="color: #bececd;font-style: oblique;"
					v-model='rePassword' type="password">
			</view>

		</view>
		<view style="padding: 20px;">
			<button style="background-color: #5e8685;color: #fff;border-radius: 0;" @click='sumbit'>CREATE</button>
		</view>
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
			return {
				username: '',
				email: '',
				password: '',
				rePassword: ''
			};
		},
		onLoad() {

		},
		methods: {
			sumbit() {
				if (this.password != this.rePassword) {
					uni.showToast({
						title: 'The two passwords do not match',
						icon: 'none'
					})
					return
				}
				this.$api.post('/getusers').then(res => {
						this.users = res.user
						return res.user
					}).then(user => {
						return user[user.length - 1].id + 10
					}).then(imageId => {
						return this.$api.post('/adduser', {
							name: this.username,
							email: this.email,
							password: this.password,
							avatar: `https://picsum.photos/id/${imageId}/300`
						})
					})
					.then(res => {
						uni.hideLoading()
						if (res.code == 1001) {
							uni.showToast({
								title: 'Success',
								icon: "none"
							})
							setTimeout(() => {
								uni.redirectTo({
									url: '/pages/login/login'
								})
							}, 1500)
						} else {
							uni.showToast({
								title: 'Register Error',
								icon: "none"
							})
						}
					})
			}
		}
	};
</script>