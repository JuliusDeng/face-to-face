<template>
	<view class="mx-25">
		<!-- 下方订单详情 -->
		<view class="mt-3 mb-4 rounded-12 text-black bg-white d-flex flex-column px-3 shadow-nom" 
		style="height: 345rpx;">
			<view class="py-1  border-bottom d-flex a-center j-sb mb-1" @click="this.$navigate('device-order')">
				<view class="font-24 text-black">订单号：{{order.order_sn}}</view>
				<view class="font-30 font-weight text-orange" v-if="order.order_status == 0">未支付</view>
				<view class="font-30 font-weight text-green" v-else-if="order.order_status == 1">已支付</view>
				<view class="font-30 font-weight text-mauve" v-else-if="order.order_status == 2">申请退款</view>
				<view class="font-30 font-weight text-brown" v-else-if="order.order_status == -1">已退款</view>
				<view class="font-30 font-weight text-olive" v-else-if="order.order_status == -2">取消支付</view>
				<view class="font-30 font-weight text-red" v-else="order.order_status == -3">支付失败</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1">
				<view>支付类型</view>
				<view>{{order.pay_body}}</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1" >
				<view>设备编号</view>
				<view>{{order.merchant_id}}</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1" >
				<view>支付时间</view>
				<view>{{order.creation_time}}</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1" >
				<view>支付人</view>
				<view>{{order.realname == "" ? "***" : "order.realname"}}</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1" >
				<view>消费金额</view>
				<view>{{order.money}}</view>
			</view>
		</view>
		<!-- 按钮 -->
		<button class="mx-3 text-white font-30" style="background:#00D499;" 
		@click="$navigate('order-detail')">校正</button>
		<button class="mx-3 mt-4 text-white font-30" style="background:#FE1A1A;" 
		@click="this.refund">退单</button>
		
		<text class="font-22 text-blue d-flex a-center j-center" style="margin-top: 250rpx;">添加备注</text>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order: {},
				order_sn: '',
			}
		},
		onLoad() {
			const value = uni.getStorageSync('order-check');
			this.order = value
			this.order_sn = value.order_sn
		},
		methods: {
			async refund() {
				// 调用退单接口
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "order_refund",
					order_sn: this.order_sn, //始值
				}).then((res) => {
					console.log(res);
					
					setTimeout(() => {
						uni.showToast({
						    title: '退款成功!',
						    icon: 'none'
						});
					}, 200)
					console.log('22');
					uni.navigateBack()
					console.log('333');
				}).catch((e) => {
					console.log("catch error!!", e);
				})
			},
			toDetail() {
				
			}
		}
	}
</script>

<style>

</style>
