<template>
	<view class="page">
		<view style="display: flex;justify-content: center;">
			<textarea v-model="context" :maxlength="800" auto-focus placeholder="Please enter a comment"
				style="background-color: #f5f5f5;padding: 20px;height: 300px;width: 90vw;"></textarea>
		</view>
		<button style="background-color: #5e8685;color: #fff;border-radius: 0;margin: 20px;margin-top: 50px;"
			@click="submit">COMMENT</button>
	</view>
</template>

<style>
	page {
		background-color: #fff;
	}
</style>

<script>
	import utils from '../../utils/index.js'
	export default {
		components: {},
		data() {
			return {
				id: '',
				context: ''
			};
		},
		onLoad(options) {
			this.id = options.id
			this.loadData(options.id)
		},
		methods: {
			submit() {
				const userInfo = uni.getStorageSync('userInfo')
				if (!userInfo) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
					return
				}
				this.$api.post('/addcomment', {
					restaurant_id: this.id,
					user_id: userInfo.id,
					context: this.context,
					create_time: utils.timeFormat(new Date(), 'yyyy-mm-dd hh:MM')
				}).then(res => {
					if (res.code == 1001) {
						uni.navigateBack()
					}
				})
			}
		}
	};
</script>