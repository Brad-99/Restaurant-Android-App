<template>
	<view>
		<view class="cu-bar solid-bottom hread">
			<view class="user" @click="toLogin">
				<view>
					<image class="avatarUrl" :src="userinfo.avatar||'../../static/image/head.jpeg'"></image>
				</view>
				<view class="nickname">{{userinfo.name||'Hello,Please Login'}}</view>
			</view>
		</view>
		<view style="margin-top: 20rpx;"></view>
		<view class="cu-list menu">
			<view class="cu-item arrow">
				<navigator class="content" url="../comment/comment" hover-class="navigator-hover">
					<text class="cuIcon-vip text-red"></text>
					<text class="">My comments</text>
				</navigator>
			</view>
			<view v-if="userinfo" @click="lout" class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-refresh text-red"></text>
					<text class="">Logout</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {}
			}
		},
		onLoad() {
			this.userinfo = uni.getStorageSync('userInfo')
		},
		onShow() {
			this.userinfo = uni.getStorageSync('userInfo')
		},
		methods: {
			lout() {
				uni.clearStorageSync('userInfo')
				this.toLogin()
			},
			toLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
		}
	}
</script>

<style>
	#service {
		border-color: #FFFFFF;
		padding: 0;
		margin: 0;
		background-color: #FFFFFF;
		line-height: none;
		text-align: left;
		color: #333333;
		display: block;
		font-size: 30rpx;

	}

	#service::after {
		border: none;
	}

	.hread {
		display: inline-block;
		width: 100%;
		margin: 0 auto;
		background-color: #f37b1d;
	}

	.user {
		text-align: center;
		padding-top: 120rpx;
		padding-bottom: 20rpx;
	}

	.avatarUrl {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}

	.nickname {
		color: #FFFFFF;
		font-size: 32rpx;
		margin-bottom: 30px;
	}
</style>