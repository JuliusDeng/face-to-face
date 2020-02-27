<template>
	<view class="h-vh100 bg-white ">
		<!-- 头部 -->
		<view class="d-flex j-sb a-center border rounded-12" style="height: 98rpx;">
			<view class="ml-3 font-32 text-black">接收统计推送</view>
			<switch class="mr-3" checked color="#F1F1F1"/>
		</view>
		<!-- 两行状态 -->
		<view class="d-flex flex-column bg-main">
			<!-- 上面 -->
			<view class="ml-3  d-flex a-center" style="height: 100rpx;">
				
				<view class="border d-flex font-20 bg-white mr-3" style="width: 210rpx;height: 70rpx;" 
				v-for="i in 3" :key="i">
					<view class="flex-1 border-right d-flex a-center j-center">状态</view>
					<view class="flex-2  d-flex a-center j-center">全部</view>
				</view>
				
			</view>
			<!-- 下面 -->
			<view class="mx-3 border-top d-flex a-center" style="height: 111rpx;">
				<view class="border d-flex a-center bg-white" style="width: 280rpx;height: 70rpx;">
					<view class="d-flex a-center j-center border-right" 
					style="width: 70rpx;height: 70rpx;">图</view>
					<view class="d-flex a-center j-center font-20" style="width: 210rpx;">开始时间</view>
				</view>
				<view class="d-flex a-center j-center" style="width: 130rpx;height: 70rpx;">
					<view style="width: 60rpx;height: 2rpx;background: #8A8A8A;"></view>
				</view>
				<view class="border d-flex a-center bg-white" style="width: 280rpx;height: 70rpx;">
					<view class="d-flex a-center j-center border-right" 
					style="width: 70rpx;height: 70rpx;">图</view>
					<view class="d-flex a-center j-center font-20" style="width: 210rpx;">结束时间</view>
				</view>
			</view>
		</view>
		<!-- 收到 -->
		<view class="d-flex flex-column a-center j-center" style="height: 253rpx;">
			<view class="d-flex a-center font-28 text-gray" style="height: 40rpx;">共收到</view>
			<view class="d-flex a-center font-60 mt-1 text-black" 
			style="height: 80rpx;">￥12000.25</view>
		</view> 
		<!-- 订单均价 -->
		<view class="d-flex" style="height: 90rpx;">
			<view class="flex-1 d-flex flex-column a-center border-right">
				<text class="font-26 text-gray">订单数量</text>
				<text class="font-26 ">1000</text>
			</view>
			<view class="flex-1 d-flex flex-column a-center">
				<text class="font-26 text-gray">单笔均价</text>
				<text class="font-26">￥12.00</text>
			</view>
		</view>
		<!-- 意见反馈 -->
		<view class="text-blue d-flex j-center font-22" style="margin-top: 288rpx;">意见反馈</view>
		
		 
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
