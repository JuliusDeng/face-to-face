<template>
	<view class="mx-25">
		<!-- 搜索框 -->
		<view class="bg-white d-flex j-sb a-center my-4 shadow-nom rounded-12" style="height: 100rpx;">
			<view class="font-30 ml-4 d-flex a-center">
				<text class="text-black">订单编号:</text>
				<input class="text-ba ml-5 pl-2" type="text" placeholder="请输入终端编号" />
			</view>
			<image class="mr-2" src="../../static/logo.png" style="width: 50rpx;height: 50rpx;"></image>
		</view>
		<!-- 查询按钮 -->
		<button class="text-black font-30 rounded-12" @click="this.$navigate('order-time')" 
		style="background:#F4CB2E;height: 80rpx;">查询</button>
		<!-- 时间编号 -->
		<view class="d-flex j-sb a-center mt-3">
			<text class="text-55 font-24">时间编号查询</text>
			<text class="text-55 font-24">遇到问题</text>
		</view>
		<!-- 下面文字 -->
		<view class="d-flex flex-column" style="margin-top: 260rpx;">
			<text class="font-32 font-weight">查询说明:</text>
			<text class="font-24 mx-3 mt-1" space="emsp">  订单编号查询：请学生打开“云闪付“，卡管理】>【交易记录】，点击支付记录进入交易详情，提供订单交易码或订单编号。</text>
			<text class="font-24 mx-3 mt-1" space="emsp">   时间编号查询：请学生打开“云闪付“，【卡管理】>【交易记录】，点击支付记录进入交易详情，提供时间。</text>	 
		</view>
		
		
		
		
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
