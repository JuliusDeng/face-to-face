<template>
	<view class="h-vh100 bg-white px-5 text-black">
		<!-- 收款人 -->
		<view class="d-flex flex-column j-center a-center border-bottom" style="height: 250rpx;">
			<view class="font-24">{{order.realname == "" ? "空***" : "order.realname"}}</view>
			<view class="font-60">￥{{order.money}}</view>
		</view>
		<!-- 订单号 -->
		<view class="d-flex flex-column j-center font-22 pb-3 pt-4 border-bottom" style="height: 400rpx;">
			<view class="d-flex j-sb pb-1">
				<view>订单号</view>
				<view>{{order.order_sn}}</view>
			</view>
			<view class="d-flex j-sb pb-1">
				<view>当前状态</view>
				<view>
					<view class="font-30 font-weight text-orange" v-if="order.order_status == 0">未支付</view>
					<view class="font-30 font-weight text-green" v-else-if="order.order_status == 1">已支付</view>
					<view class="font-30 font-weight text-mauve" v-else-if="order.order_status == 2">申请退款</view>
					<view class="font-30 font-weight text-brown" v-else-if="order.order_status == -1">已退款</view>
					<view class="font-30 font-weight text-olive" v-else-if="order.order_status == -2">取消支付</view>
					<view class="font-30 font-weight text-red" v-else="order.order_status == -3">支付失败</view>
				</view>
			</view>
			<view class="d-flex j-sb pb-1">
				<view>支付类型</view>
				<view>{{order.pay_body}}</view>
			</view>
			<view class="d-flex j-sb pb-1">
				<view>设备编号</view>
				<view>{{order.merchant_id}}</view>
			</view>
			<view class="d-flex j-sb pb-1">
				<view>支付时间</view>
				<view>{{order.creation_time}}</view>
			</view>
			<view class="d-flex j-sb pb-1">
				<view>商户名称</view>
				<view>{{mer_name}}</view>
			</view>
			<view class="d-flex j-sb pb-1">
				<view>收银员</view>
				<view>接口没有返回这个数据</view>
			</view>
		</view>
		<!-- 添加备注 -->
		<view class="d-flex j-center font-22 text-blue" style="margin-top: 286rpx;">添加备注</view>
			
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order: {},
				mer_name: ''
			}
		},
		onLoad() {
			this.order = uni.getStorageSync('DeviceOrder');
			this.mer_name = uni.getStorageSync('deviceOrder_mer_name')
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
