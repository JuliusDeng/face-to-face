<template>
	<view class="h-vh100 bg-white px-5 text-black">
		<!-- 收款人 -->
		<view class="d-flex flex-column j-center a-center border-bottom" style="height: 250rpx;">
			<view class="font-24">*马珍珍</view>
			<view class="font-60">￥2.00</view>
		</view>
		<!-- 订单号 -->
		<view class="d-flex flex-column j-center font-22 pb-3 pt-4 border-bottom" style="height: 400rpx;">
			<view class="d-flex j-sb pb-1" v-for="(item, idx) in order" :key="idx">
				<view>{{item.tit}}</view>
				<view>{{item.cont}}</view>
			</view>
		</view>
		<!-- 退款时间 -->
		<view class="font-22 text-black pt-3" style="height: 160rpx;">
			<view class="d-flex j-sb pb-1" v-for="(item, idx) in refund" :key="idx">
				<view>{{item.tit}}</view>
				<view>{{item.cont}}</view>
			</view>
			<view class="d-flex j-sb text-black">
				<view>备注</view>
				<view>
					<text>设备故障</text> <text class="ml-1 text-blue">修改</text>
				</view>
			</view>
			
			
		</view>
		
		<!-- <view class="d-flex j-sb font-22 text-black" style="height: 160rpx;">
			<view class="">
				备注
			</view>
			<view class="">
				<text>设备故障</text> <text class="text-blue">修改</text>
			</view>
		</view> -->
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order: [
					{tit: "订单号", cont: "20195200520520520520"},
					{tit: "当前状态", cont: "交易完成"},
					{tit: "支付类型", cont: "银行卡支付"},
					{tit: "设备编号", cont: "4889854665MHC5546"},
					{tit: "支付时间", cont: "2019.07.31 12:23:55"},
					{tit: "商户名称", cont: "风味食堂"},
					{tit: "收银员", cont: "风味食堂-章鱼哥"}
				],
				refund: [
					{tit: "退款时间", cont: "2019.05.31 12:23:55"},
					{tit: "退款经手", cont: "痞老板"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
