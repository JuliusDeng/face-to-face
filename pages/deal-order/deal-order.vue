<template>
	<view>
		<!-- 头部订单栏 -->
		<view class="d-flex j-sb a-center mx-3 font-24" style="height: 84rpx;">
			<view class="text-gray">
				<text>订单：54267</text> <text class="ml-2">合计：￥62356.00</text>
			</view>
			<view class="bg-white text-black px-2 py rounded-12">
				筛选条件查询
			</view>
		</view>
		<!-- 下方订单详情 -->
		<view class="mx-25 m-2 rounded-12 bg-white d-flex flex-column px-3 shadow-nom" 
		style="height: 345rpx;" @click="this.$navigate('deal-check')">
			<view class="py-1  border-bottom d-flex a-center j-sb mb-1" @click="this.$navigate('device-order')">
				<view class="font-24 text-black">订单号：20190703154545454545</view>
				<view class="font-30 font-weight text-green">支付完成</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1" v-for="(item, idx) in order" :key="idx">
				<view>{{item.tit}}</view>
				<view>{{item.cont}}</view>
			</view>
			
		</view>
		
		<view class="mx-25 m-2 rounded-12 bg-white d-flex flex-column px-3 shadow-nom" 
		style="height: 345rpx;" @click="this.$navigate('deal-check')">
			<view class="py-1  border-bottom d-flex a-center j-sb mb-1" @click="this.$navigate('device-order')">
				<view class="font-24 text-black">订单号：20190703154545454545</view>
				<view class="font-30 font-weight text-red">支付失败</view>
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
