<template>
	<view class="mx-25">
		<!-- 搜索框 -->
		<view class="bg-white d-flex a-center font-30 pl-4 my-4 shadow-nom rounded-12" 
		style="height: 100rpx;">
			<text class="text-black">交易时间:</text>
			<input class="text-ba ml-5 pl-5" type="text" placeholder="请选择时间" />
		</view>
		<view class="bg-white d-flex a-center font-30 pl-4 my-4 shadow-nom rounded-12"
		style="height: 100rpx;">
			<text class="text-black">终端编号:</text>
			<input class="text-ba ml-5 pl-3" type="text" placeholder="请输入终端编号" />
		</view>
		<!-- 查询按钮 -->
		<button class="text-black font-30 rounded-12 mt-4" @click="this.$navigate('order-refund')"
		style="background:#F4CB2E;height: 80rpx;">查 询</button>
		<!-- 时间编号 -->
		<view class="d-flex j-sb a-center mt-3">
			<text class="text-55 font-24">时间编号查询</text>
			<text class="text-55 font-24">遇到问题</text>
		</view>
		<!-- 下面文字 -->
		<view class="d-flex flex-column" style="margin-top: 130rpx;">
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
