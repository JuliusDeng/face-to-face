<template>
	<view>
		<view class="mx-3">
			<!-- 头部订单栏 -->
			<view class="d-flex j-sb a-center font-24" style="height: 84rpx;">
				<view class="text-gray">
					<text>订单：54267</text> <text class="ml-2">合计：￥62356.00</text>
				</view>
				<view class="bg-white text-black px-2 py rounded-12">
					筛选条件查询
				</view>
			</view>
			<!-- 搜索栏 -->
			<view class="py-2 pl-3 pr-1 border d-flex j-sb" style="height: 80rpx;background: #FFFBFF;">
				<view class="d-flex a-center">
					<text class="cuIcon-search lg"></text>
					<input class="ml-15 font-24 text-bf" type="text" placeholder="请输入关键字进行搜索..." />
				</view>
				<view class="border rounded font-20 text-6e d-flex a-center j-center" 
				style="width: 120rpx;height: 45rpx;">搜索</view>
			</view>
			<!-- 下面全部 -->
			<view class="d-flex flex-column bg-main border-bottom" @click="this.$navigate('earn-search')">
				<!-- 上面 -->
				<view class="d-flex a-center j-sb" style="height: 100rpx;">
					<view class="border d-flex font-20 bg-white text-gray" 
					style="width: 210rpx;height: 70rpx;"  v-for="i in 3" :key="i">
						<view class="flex-1 border-right d-flex a-center j-center">状态</view>
						<view class="flex-2  d-flex a-center j-center">全部</view>
					</view>
				</view>
				<!-- 下面 -->
				<view class="border-top d-flex a-center" style="height: 111rpx;">
					<view class="border d-flex a-center bg-white text-gray" style="width: 280rpx;height: 70rpx;">
						<view class="d-flex a-center j-center border-right" 
						style="width: 70rpx;height: 70rpx;">图</view>
						<view class="d-flex a-center j-center font-20" style="width: 210rpx;">开始时间</view>
					</view>
					<view class="d-flex a-center j-center" style="width: 130rpx;height: 70rpx;">
						<view style="width: 60rpx;height: 2rpx;background: #8A8A8A;"></view>
					</view>
					<view class="border d-flex a-center bg-white text-gray" style="width: 280rpx;height: 70rpx;">
						<view class="d-flex a-center j-center border-right" 
						style="width: 70rpx;height: 70rpx;">图</view>
						<view class="d-flex a-center j-center font-20" style="width: 210rpx;">结束时间</view>
					</view>
				</view>
			</view>
		</view>
		
		<button class="mx-3 mt-2 text-black font-30" style="background:#F4CB2E;">确认</button>
		
		<!-- 下方订单详情 -->
		<view class="mx-25 m-2 rounded-12 bg-white d-flex flex-column px-3 shadow-nom" 
		style="height: 345rpx;">
			<view class="py-1  border-bottom d-flex a-center j-sb mb-1" @click="this.$navigate('device-order')">
				<view class="font-24 text-black">订单号：20190703154545454545</view>
				<view class="font-30 font-weight text-green">支付完成</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1" v-for="(item, idx) in order" :key="idx">
				<view>{{item.tit}}</view>
				<view>{{item.cont}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order: [
					{tit: "支付类型", cont: "银行卡支付"},
					{tit: "设备编号", cont: "0215"},
					{tit: "支付时间", cont: "2019.07.31 12:23:55"},
					{tit: "支付人", cont: "*马珍珍"},
					{tit: "消费金额", cont: "￥520"},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
