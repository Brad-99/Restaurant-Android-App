<template>
	<view class="page">
		<view class="bg-white" style="padding: 20px;">
			<view v-for="item in list" :key="item.id" style="margin-bottom: 20px;"
				@click="toRestaurant(item.restaurantInfo.id)">
				<image style="width: 100%;border-radius: 16px;min-width: 50px;" :src="item.restaurantInfo.logo" mode="widthFix">
				</image>
				<view style="margin-top: 10px;padding: 0 10px;">
					<view style="display: flex;justify-content: space-between;width: 100%;">
						<view style="font-size: 20px;font-weight: bold;">
							{{item.restaurantInfo.name}}
						</view>
						<view style="font-size: 14px;color: #999;">
							{{item.create_time}}
						</view>
					</view>
					<view style="margin-top: 10px;">
						{{item.context}}
					</view>
				</view>
			</view>

		</view>


	</view>
</template>

<style scoped lang="scss">
	.page {}
</style>

<script>
	export default {
		components: {},
		data() {
			return {
				list: []
			};
		},
		onShow() {
			this.getList()
		},
		methods: {
			toRestaurant(id) {
				uni.navigateTo({
					url: '../merchant/merchant?id=' + id
				});
			},
			getList() {
				const id = uni.getStorageSync('userInfo').id

				this.$api.post('/getrestaurant').then(data => {
					return data.restaurant.map(e => ({
						id: e.id,
						logo: e.images,
						name: e.name,
						address: e.address,
						phone: e.phone,
						opening_time: e.open_time,
					}))
				}).then(restaurantList => {
					this.$api.post('/getcomment').then(res => {
						this.list = res.comment.filter(e => e.user_id == id).map(e => ({
							...e,
							restaurantInfo: restaurantList.find(r => r.id == e.restaurant_id)
						}))
					})
				})
			}
		}
	};
</script>