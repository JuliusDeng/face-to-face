<template>
	<view>
		<!-- 顶部白色部分 -->
		<view class="bg-white">
			<view class="mx-35" style="height: 360rpx;width: 680rpx;">
				<view class="d-flex j-center p-3 border-bottom">
					<view class="d-flex flex-column a-center j-center text-black">
						<view>设备号：{{dev_id}}</view>
						<view>关联商户：{{mer_name}}</view>
					</view>
				</view>
				<!-- 收益统计 -->
				<view class="px-2 pt-1">
					<view class=" d-flex j-sb text-black" >
						<view>今日</view>
						<view>收益：￥{{day_money == '' ? '数据空' : day_money}} 订单：{{day_amount == '' ? '数据空' : day_amount}}</view>
					</view>
					<view class=" d-flex j-sb text-black" >
						<view>昨日</view>
						<view>收益：￥{{yes_money == '' ? '数据空' : yes_money}} 订单：{{yes_amount == '' ? '数据空' : yes_amount}}</view>
					</view>
					<view class=" d-flex j-sb text-black">
						<view>本月</view>
						<view>收益：￥{{month_money == '' ? '数据空' : month_money}} 订单：{{month_amount == '' ? '数据空' : month_amount}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 交易流水 -->
		<view class="mx-25">
			<view class="d-flex mt-2">本年度交易流水如下：</view>
			<!-- 下方订单详情 -->
			<block v-for="(order, idx) in list" :key="idx">
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
				dev_id: "",
				mer_name: "",
				
				// start_time: "",
				today_end_time: "",
				yesterday_end_time: "",
				tomorrow_end_time: "",
				year_start_time: "",
				
				day_money: "",
				day_amount: "",
				yes_money: "",
				yes_amount: "",
				month_money: "",
				month_amount: "",
				
				mer_id: "",
				emit: 10,
				list: [],  // 存放交易流水
				loadtext: "上拉加载更多",
			}
		},
		onReachBottom() {
			if(this.emit > this.list.length) {
				console.log('不会再上拉了哦');
				return
			}
			this.loadtext = "加载中..."
			this.emit += 10 
			console.log("触发上拉加载", this.emit);
			this.__deal()
		},
		onLoad(option) {
			if(this.list < 1) {
				uni.showLoading({
					title: '加载中...',
					mask: true
				});
			}
			this.dev_id = option.dev_id
			this.mer_name = option.mer_name
			
			// 今天
			this.today_end_time = this.$timeout.today()
			console.log(this.today_end_time);
			// 明天
			this.tomorrow_end_time = this.$timeout.tomorrow()
			console.log(this.tomorrow_end_time);
			// 昨天
			this.yesterday_end_time = this.$timeout.yesterday()
			console.log(this.yesterday_end_time);
			// 今年2020-01-01
			this.year_start_time = this.$timeout.year()
			console.log(this.year_start_time);
			
			this.__today()
			this.__yesterday()
			this.__month()
			// 请求商户ID
			this.__init()
			
		},
		methods: {
			// 今天 收益统计
			async __today() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "agent_device_statistics",
					order_status: 1,
					device_id: this.dev_id,
					// start_time: this.today_end_time,
					// end_time: tomorrow_end_time,
					start_time: '2019-07-09',
					end_time: '2019-12-12',
					group: 'day'
				}).then((res) => {
					console.log(res);
					this.day_money = res.count[0].sum_money
					this.day_amount = res.count[0].count_num
				}).catch((e) => {
					console.log("catch error:", e);
				})
			},
			// 昨天 收益统计
			async __yesterday() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "agent_device_statistics",
					order_status: 1,
					device_id: this.dev_id,
					start_time: this.yesterday_end_time,
					end_time: this.today_end_time,
					group: 'day'
				}).then((res) => {
					this.yes_money = res.count[0].sum_money
					this.yes_amount = res.count[0].count_num
				}).catch((e) => {
					console.log("catch error:", e);
				})
			},
			// 本月 收益统计
			async __month() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "agent_device_statistics",
					order_status: "1",
					device_id: this.dev_id,
					start_time: this.today_end_time,
					end_time: this.tomorrow_end_time,
					group: 'month'
				}).then((res) => {
					this.month_money = res.count[0].sum_money
					this.month_amount = res.count[0].count_num
				}).catch((e) => {
					console.log("catch error:", e);
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
					// 请求交易流水
					if(this.mer_id) {
						this.__deal()
					}
				}).catch((e) => {
					console.log("catch error:", e);
				})
			},
			// 交易流水
			async __deal() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "order_list",
					merchant_id: this.mer_id,
					// merchant_id: 375,
					order_status: "",
					// start_time: this.year_start_time,
					// end_time: this.tomorrow_end_time,
					start_time: '2019-10-10',
					end_time: '2019-10-11',
					slimit: 0,
					elimit: this.emit,
				}).then((res) => {
					this.list = res.arr
					uni.hideLoading()
					if(this.list.length < 1) {
						uni.showToast({
							title: "暂无数据",
							icon: "none",
							duration: 2500
						})
					}
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
					url: `/pages/device-order/device-order?mer_name=${this.mer_name}`
				})
			},
		}
	}
</script>

<style>

</style>
