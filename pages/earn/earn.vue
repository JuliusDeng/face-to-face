<template>
	<view class="h-vh100 bg-white ">
		
		<view class="uni-list-cell-db">
			<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
				<view class="uni-input">{{array[index].name}}</view>
			</picker>
		</view>
		
		
		<!-- 头部 -->
		<view class="d-flex j-sb a-center border rounded-12" style="height: 98rpx;">
			<view class="ml-3 font-32 text-black">接收统计推送</view>
			<switch class="mr-3" checked color="#F1F1F1" />
		</view>
		<!-- 两行状态 -->
		<view class="d-flex flex-column bg-main">
			<!-- 上面 -->
			<view class="ml-3  d-flex a-center" style="height: 100rpx;">
				<view class="border d-flex bg-white mr-3 text-gray" style="width: 210rpx;height: 70rpx;" >
					<view class="flex-1 border-right d-flex a-center j-center font-20">状态</view>
					<view class="flex-2  d-flex a-center j-center" @click="">
						<picker class="d-flex" @change="bindPickerChange" :value="index" :range="array" range-key="name">
							<view class="text-gray font-20 mr-2">{{array[index].name}}</view>
						</picker>
						<image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image>
					</view>
				</view>
				
				<view class="border d-flex bg-white mr-3 text-gray" style="width: 210rpx;height: 70rpx;" >
					<view class="flex-1 border-right d-flex a-center j-center font-20">设备</view>
					<view class="flex-2  d-flex a-center j-center" @click="this.$navigate('earn-search')">
						<text class="mr-2 font-20">全部</text>
						<image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image>
					</view>
				</view>
				
				<view class="border d-flex font-20 bg-white mr-3 text-gray" style="width: 210rpx;height: 70rpx;" >
					<view class="flex-1 border-right d-flex a-center j-center font-20">商户</view>
					<view class="flex-2  d-flex a-center j-center" @click="">
						<text class="mr-2 font-20">全部</text>
						<image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image>
					</view>
				</view>
				
			</view>
			<!-- 下面 -->
			<view class="mx-3 border-top d-flex a-center" style="height: 111rpx;">
				<view class="border d-flex a-center bg-white text-gray" style="width: 280rpx;height: 70rpx;">
					<view class="d-flex a-center j-center border-right" style="width: 70rpx;height: 70rpx;">
						<image src="../../static/icon/calendar.png" style="width: 42rpx;height: 42rpx;"></image>
					</view>
					<view class="d-flex a-center j-center font-20" style="width: 210rpx;">开始时间</view>
				</view>
				<!-- 横线 -->
				<view class="d-flex a-center j-center" style="width: 130rpx;height: 70rpx;">
					<view style="width: 60rpx;height: 2rpx;background: #8A8A8A;"></view>
				</view>
				<view class="border d-flex a-center bg-white text-gray" style="width: 280rpx;height: 70rpx;">
					<view class="d-flex a-center j-center border-right" style="width: 70rpx;height: 70rpx;">
						<image src="../../static/icon/calendar.png" style="width: 42rpx;height: 42rpx;"></image>
					</view>
					<view class="d-flex a-center j-center font-20" style="width: 210rpx;">结束时间</view>
				</view>
			</view>
		</view>
		<!-- 收到 -->
		<view class="d-flex flex-column a-center j-center" style="height: 253rpx;">
			<view class="d-flex a-center font-28 text-gray" style="height: 40rpx;">共收到</view>
			<view class="d-flex a-center font-60 mt-1 text-black" style="height: 80rpx;">￥12000.25</view>
		</view>
		<!-- 订单均价 -->
		<view class="d-flex text-black" style="height: 90rpx;">
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
				index: 0,
				array: [{name:'全部'},{name: '已支付'}, {name:'申请退款'}, {name:'已退款'}],
				// array: [],
				status: ""
			}
		},
		onLoad() {
			this.__init()
			this.bindPickerChange()
		},
		methods: {
			bindPickerChange(e) {
				console.log('---' + e.detail.value)
				this.index = e.detail.value
				this.status = e.detail.value
				this.__init()
			},
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMxNzE1MjYyMjI1OTAzOTQ1",
					opt: "agent_device_statistics",
					slimit: 0, //始值
					elimit: 15, //数量
					order_status: this.status, //订单状态  空为全部  1为已支付 2为申请退款  -1已退款
					device_id: "", //设备ID
					order_sn: "", //订单号
					merchant_id: "", //商户ID
					start_time: "2019-07-17", //开始日期 如：2019-07-17
					end_time: "2020-02-17", //结束日期 如：2020-02-17
				}).then((data) => {
					console.log(data);
				}).catch(() => {
					console.log("catch error!!");
				})
				
			}


		}
	}
</script>

<style>

</style>
