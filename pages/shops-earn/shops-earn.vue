<template>
	<view>
		<!-- 黄色背景 -->
		<view class="bg-yellow" style="height: 200rpx;">
			<view class="pt-1 pl-5 d-flex">
				<image :src="img" style="width: 138rpx;height: 138rpx;"
				class="rounded-half bg-red"></image>
				<view class="ml-3 font-24">
					<view class="font-32">{{name}}</view>
					<view>电话：{{tel==null ? '' : tel}}</view>
					<view>地址：{{address==null ? '' : address}}</view>
				</view>
			</view>
			
		</view>
		<!-- 交易金额 -->
		<view class="mx-25 bg-white rounded-12 d-flex flex-column a-center shadow-nom"
		style="width: 700rpx;height: 353rpx;margin-top: -35rpx;">
			<view class="font-28 mt-35 text-8a">今日交易金额</view>
			<view class="font-60 text-black" @click="">￥{{money==null ? '' : money}}</view>
			<view class="d-flex w-100 font-26 mt-4">
				<view class="flex-1 d-flex a-center flex-column border-right">
					<view class="text-8a">今日订单</view>
					<view class="text-black">{{order}}</view>
				</view>
				<view class="flex-1 d-flex a-center flex-column">
					<view class="text-8a">昨日金额</view>
					<view class="text-black">{{moneybf==null ? '' : moneybf}}</view>
				</view>
			</view>
		</view>
		<!-- 列表项 -->
		<view class="position-absolute w-700 mx-25 mt-2">
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('earn-search')">
					<image src="../../static/icon/weibiaoti-3.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">设备列表</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
			<view class="bg-white shadow-nom rounded-12 d-flex j-sb a-center mb-2" style="height: 98rpx;">
				<view class="d-flex a-center text-black font-32 ml-2" @click="this.$navigate('deal-order')">
					<image src="../../static/icon/weibiaoti-1.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">面对面交易流水</view>
				</view>
				<image class="mr-4" src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: "",
				name: "",
				tel: "",
				address: "",
				money: "",
				order: "",
				moneybf: ""
			}
		},
		onLoad(options) {
			console.log(options);
			const id = options.id
			const value = uni.getStorageSync('merchant');
			this.img = value.logo_url
			this.name = value.merchant_name
			this.tel = value.merchant_tel
			this.address = value.merchant_address
			this.money = value.today.total_amount
			this.order = value.today.total_people
			this.moneybf = value.yesterday.total_amount
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
