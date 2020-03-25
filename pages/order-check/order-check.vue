<template>
	<view class="mx-25">
		<template v-if="ways">
			<!-- 订单查询 -->
			<view class="bg-white d-flex j-sb a-center my-4 shadow-nom rounded-12" style="height: 100rpx;">
				<view class="font-30 ml-4 d-flex a-center">
					<text class="text-black">订单编号:</text>
					<input class="text-ba ml-5 pl-2" v-model="ordersn" type="text" placeholder="请输入终端编号" />
				</view>
				<image class="mr-2" src="../../static/icon/weibiaoti.png" style="width: 50rpx;height: 50rpx;"></image>
			</view>
			<!-- 查询按钮 -->
			<button class="text-black font-30 rounded-12" @click="toRefund" 
			style="background:#F4CB2E;height: 80rpx;">查询</button>
			<!-- 时间编号 -->
			<view class="d-flex j-sb a-center mt-3">
				<text class="text-55 font-24" @click="change">时间编号查询</text>
				<text class="text-55 font-24">遇到问题</text>
			</view>
		</template>
		
		<template v-else>
			<!-- 时间编号查询 -->
			<view class="bg-white d-flex a-center font-30 pl-4 my-4 shadow-nom rounded-12" 
			style="height: 100rpx;">
				<text class="text-black">交易时间:</text>
				<input class="text-ba ml-5 pl-5" v-model="paytime" type="text" placeholder="请选择时间" />
			</view>
			<view class="bg-white d-flex a-center font-30 pl-4 my-4 shadow-nom rounded-12"
			style="height: 100rpx;">
				<text class="text-black">终端编号:</text>
				<input class="text-ba ml-5 pl-3" v-model="deviceid" type="text" placeholder="请输入终端编号" />
			</view>
			<!-- 查询按钮 -->
			<button class="text-black font-30 rounded-12 mt-4" @click="toRefund"
			style="background:#F4CB2E;height: 80rpx;">查询</button>
			<!-- 时间编号 -->
			<view class="d-flex j-sb a-center mt-3">
				<text class="text-55 font-24" @click="change">订单查询</text>
				<text class="text-55 font-24">遇到问题</text>
			</view>
		</template>
		
		
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
				ways: true,
				ordersn: "",
				paytime: "",
				deviceid: "",
				msg: ""
			}
		},
		onLoad() {
			// this.__init()
		},
		methods: {
			toRefund() {
				this.__init()
				uni.navigateTo({
					url: "/pages/order-refund/order-refund"
				})
			},
			change() {
				this.ways = !this.ways
			},
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMyMzExMjM0OTMzNzM3ODAz",
					opt: "device_statistics",
					order_sn: this.ordersn, //始值
					search_pay_time: this.paytime, //数量
					search_device_id: this.deviceid
				}).then((res) => {
					try {
					    uni.setStorageSync('remsg', res.arr[0]);
						// uni.setStorageSync('ordersn', res.arr[0].order_sn);
					} catch (e) {
					    // error
						console.log('error: ',e);
					}
				}).catch((e) => {
					console.log("catch error!!", e);
				})
				
			}
		}
	}
</script>

<style>

</style>
