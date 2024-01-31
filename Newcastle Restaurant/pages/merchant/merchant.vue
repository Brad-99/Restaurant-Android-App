<template>
	<view>
		<image :src="info.images" mode="widthFix" style="width: 100vw;"></image>

		<view class="cu-list menu " style="margin-top: 10rpx;">
			<view class="cu-item arrow" @click="openLocation">
				<view class="content">
					<text class="cuIcon-location text-green"></text>
					<text class="text-grey">{{info.address}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time text-blue"></text>
					<text class="text-grey">{{info.open_time}}</text>
				</view>
			</view>
			<view class="cu-item arrow" @click="call">
				<view class="content">
					<text class="cuIcon-phone text-orange "></text>
					<text class="text-grey">{{info.phone}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-tagfill text-red  margin-right-xs"></text>
					<text class="text-grey"></text>
				</view>
				<view class="action">
					<view v-for="(item,index) in info.tags.split(',')" :key="index" class="cu-tag round bg-blue light">{{item}}
					</view>
				</view>
			</view>
		</view>



		<view class="cu-bar bg-white solid-bottom mtop">
			<view class="action">
				<text class="cuIcon-title text-orange "></text> Comment
			</view>
			<view style="font-size: 25px;margin-right: 20px;" @click="addComment">
				+
			</view>
		</view>
		<view class="bg-white" style="padding: 10px;">

			<view v-for="item in comments" :key="item.id" style="display: flex;margin-bottom: 20px;">
				<image style="height:50px;width: 50px;border-radius: 50px;min-width: 50px;" :src="item.userInfo.avatar"></image>
				<view style="margin-left: 10px;flex:1">
					<view style="display: flex;justify-content: space-between;width: 100%;">
						<view style="font-size: 18px;">
							{{item.userInfo.name}}
						</view>
						<view style="font-size: 14px;color: #999;">
							{{item.create_time}}
						</view>
					</view>
					<view style="text-indent: 2ex;margin-top: 5px;">
						{{item.context}}
					</view>
				</view>
			</view>

		</view>

		<view class="bg-white" style="height: 50rpx;"></view>
	</view>
</template>

<script>
	import util from '../../util.js'
	export default {
		data() {
			return {
				comments: [],
				users: [],
				info: {},
				id: ''
			}
		},
		onLoad(options) {
			this.id = options.id
			this.loadData(options.id)
		},
		onShow() {
			this.loadData(this.id)
		},
		onPullDownRefresh() {
			this.loadData(this.id)
		},
		methods: {
			openLocation() {
				uni.openLocation({
					latitude: Number(this.info.lat),
					longitude: Number(this.info.lng),
					name: this.info.name,
					address: this.info.address,
				});
			},
			call() {
				uni.makePhoneCall({
					phoneNumber: this.info.phone
				});
			},
			addComment() {
				uni.navigateTo({
					url: '/pages/addComment/addComment?id=' + this.id
				})
			},
			loadData(id) {
				this.$api.post('/getrestaurant').then(res => {
					this.info = res.restaurant.find(e => e.id == id)
					uni.setNavigationBarTitle({
						title: info.name
					});
				})

				this.$api.post('/getusers').then(res => {
					this.users = res.user
					return res.user
				}).then(user => {
					// Get Comments
					this.$api.post('/getcomment').then(res => {
						this.comments = res.comment
							// Filter current restaurants first
							.filter(e => e.restaurant_id == id)
							// Constructed data format
							.map(e => ({
								...e,
								userInfo: user.find(u => u.id == e.user_id)
							}))
							// In reverse chronological order
							.sort(
								(a, b) => {
									return new Date(b.create_time) - new Date(a.create_time)
								}
							)
					})
				}).finally(() => {
					uni.stopPullDownRefresh()
				})
			},
		}
	}
</script>

<style>
	.merchant-image {
		width: 100%;
	}
</style>