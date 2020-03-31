<template>
	<view>
		<!-- 顶部白色部分 -->
		<view class="bg-white" @click="this.$navigate('device-order')">
			<view class="mx-35" style="height: 392rpx;width: 680rpx;">
				<view class="d-flex j-center p-3 border-bottom">
					<view class="d-flex flex-column a-center j-center text-black">
						<view>设备号：{{dev_sn}}</view>
						<view>关联商户：{{mer_name}}</view>
					</view>
				</view>
				<!-- 收益统计 -->
				<view class="px-2 pt-1">
					<view class=" d-flex j-sb text-black" >
						<view>今日</view>
						<view>收益：￥2534.22 订单：102</view>
					</view>
					<view class=" d-flex j-sb text-black">
						<view>本月</view>
						<view>收益：￥2534.22 订单：102</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 交易流水 -->
		<view class="mx-25">
			<!-- 下方订单详情 -->
			<block v-for="(order, idx1) in list" :key="idx1">
				<view class="mt-3 mb-4 rounded-12 text-black bg-white d-flex flex-column px-3 shadow-nom"
				style="height: 345rpx;" @click="toDeviceOrder(order)">
					<view class="py-1  border-bottom d-flex a-center j-sb mb-1">
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
			</block>
			<!-- <text class="font-22 text-blue d-flex a-center j-center" style="margin-top: 250rpx;">添加备注</text> -->
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: [
					{tit: "今日", cont: "收益：￥2534.22 订单：102"},
					{tit: "昨日", cont: "收益：￥2534.22 订单：102"},
					{tit: "30日", cont: "收益：￥2522534.22 订单：122302"},
					{tit: "全部", cont: "收益：￥2522534.22 订单：122302"},
				],             
				order: [
					{tit: "支付类型", cont: "银行卡支付"},
					{tit: "设备编号", cont: "0215"},
					{tit: "支付时间", cont: "2019.07.31 12:23:55"},
					{tit: "支付人", cont: "*马珍珍"},
					{tit: "消费金额", cont: "￥520"},
				],
				dev_sn: "",
				mer_name: "",
				day_money: "",
				day_amount: "",
				month_money: "",
				month_amount: "",
				
				mer_id: "",
				startTime: "",
				endTime: "",
				loadtext: "上拉加载更多",
				emit: 10,
				list: []
			}
		},
		onReachBottom() {
			if(this.emit > this.list.length) {
				console.log('不会再上拉了哦');
				return
			}
			console.log('啦啦啦');
			this.loadtext = "加载中..."
			this.emit += 10 
			console.log("触发上拉加载", this.emit);
			// this.__init()
			this.__device()
		},
		onLoad(option) {
			this.dev_sn = option.dev_sn
			this.mer_name = option.mer_name
			uni.setStorageSync('deviceOrder_mer_name', this.mer_name); // 可以通过下面跳转页面传值
			// 获取开始时间
			try {
				this.startTime = uni.getStorageSync('startTime')
				if( !this.startTime ) {
					uni.showToast({
						title: "请先去'收益统计'确定时间",
						icon: "none",
						duration: 3000
					})
				}
			} catch (e) {
			    console.log("catch:", e);
			}
			this.endTime = this.$Time.getTime()
			console.log("开始时间：", this.startTime, '结束时间：',this.endTime);
			// 获取商户ID
			this.__init()
			
		},
		methods: {
			// 今日 收益统计
			async __earn() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "agent_device_statistics",
					order_status: 1,
					device_id: "00004102MC8H156",
					order_status: "1",
					start_time: '2019-07-17',
					end_time: this.endTime,
					slimit: 0,
					elimit: this.emit,
				}).then((res) => {
					// console.log(this.startTime, this.endTime);
					this.list = res.arr
					// console.log("返回list数组", this.list);
					console.log("list数组长度：", this.list.length,'emit长度：',this.emit);
					// 恢复加载状态
					this.loadtext = this.list.length < this.emit ? "没有更多了" :  "上拉加载更多"
				}).catch((e) => {
					console.log("catch error:", e);
				})
			},
			// 去详情页
			toDeviceOrder(item) {
				uni.setStorageSync('DeviceOrder', item);
				uni.navigateTo({
					url: "/pages/device-order/device-order"
				})
			},
			// 请求商户ID
			async __init() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "merchant_list",
					key_value: this.mer_name,
				}).then((data) => {
					this.mer_id = data.arr[0].merchant_id
					console.log('商户ID:', this.mer_id);
					// 交易流水
					this.__device()
				}).catch((e) => {
					console.log("catch error:", e);
				})
			},
			// 交易流水
			async __device() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "order_list",
					key_value: this.mer_name,
					// merchant_id: this.mer_id,
					merchant_id: 375,
					order_status: "1",
					start_time: '2019-07-17',
					end_time: this.endTime,
					slimit: 0,
					elimit: this.emit,
				}).then((res) => {
					// console.log(this.startTime, this.endTime);
					this.list = res.arr
					// console.log("返回list数组", this.list);
					console.log("list数组长度：", this.list.length,'emit长度：',this.emit);
					// 恢复加载状态
					this.loadtext = this.list.length < this.emit ? "没有更多了" :  "上拉加载更多"
				}).catch((e) => {
					console.log("catch error:", e);
				})
			}
		}
	}
</script>

<style>

</style>
