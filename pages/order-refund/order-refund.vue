<template>
	<view class="mx-25">
		<!-- 下方订单详情 -->
		<view class="mt-3 mb-4 rounded-12 text-black bg-white d-flex flex-column px-3 shadow-nom" 
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
		<!-- 按钮 -->
		<button class="mx-3 text-white font-30" style="background:#00D499; 
		@click="this.$navigate('order-detail')"">校正</button>
		<button class="mx-3 mt-4 text-white font-30" style="background:#FE1A1A;" 
		@click="this.$navigate('order-detail')">退单</button>
		
		<text class="font-22 text-blue d-flex a-center j-center" style="margin-top: 250rpx;">添加备注</text>
		
		
		
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
