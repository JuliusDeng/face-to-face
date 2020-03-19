<template>
	<view class="h-vh100">
		<view class="position-relative">
			<!-- 黄色头部 -->
			<view class="bg-yellow" style="height: 200rpx;">
				<view class="pt-1 pl-5 d-flex">
					<image :src="merchant.logo_url" style="width: 138rpx;height: 138rpx;"
					class="rounded-half bg-red"></image>
					<view class="ml-3 font-24">
						<view class="font-32">{{merchant.merchant_name}}</view>
						<view>电话：{{merchant.merchant_tel}}</view>
						<view>地址：{{merchant.merchant_address}}</view>
					</view>
				</view>
				
			</view>
			<!-- 交易金额 -->
			<view class="mx-25 bg-white rounded-12 position-absolute d-flex flex-column a-center " 
			style="width: 700rpx;height: 353rpx;margin-top: -35rpx;">
				<view class="text-gray font-28 mt-35">今日交易金额</view>
				<view class="font-60 text-black">￥{{merchant.today.total_amount}}</view>
				
				<view class="d-flex" style="width: 700rpx;">
					<view class="flex-1 d-flex flex-column a-center font-26 border-right">
						<view class="text-gray">今日订单</view>
						<view class="text-black">{{merchant.today.total_people}}</view>
					</view>
					<view class="flex-1 d-flex flex-column a-center j-center font-26">
						<view class="text-gray">昨日金额</view>
						<view class="text-black">{{merchant.yesterday.total_amount}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 2个列表项 -->
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
				merchant: ""
			}
		},
		onLoad(options) {
			console.log(options);
			const value = uni.getStorageSync('id');
			console.log(value);
			for(let i=0; i< value.arr.length; i++) {
				if(options.id == value.arr[i].merchant_id) {
					this.merchant = value.arr[i]
					console.log(this.merchant);
					break
				}
			}
		},
		/* onLoad() {
			 const value = uni.getStorageSync('id');
			 console.log(value);
			 function(option) {
				 console.log(Option)
			 }
		}, */
		methods: {
			
		}
	}
</script>

<style>

</style>
