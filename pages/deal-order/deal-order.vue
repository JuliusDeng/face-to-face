<template>
	<view class="">
		<view class="mx-25">
			<!-- 下方订单详情 -->
			<block v-for="(order, idx) in list" :key="idx">
				<view class="mt-3 mb-4 rounded-12 text-black bg-white d-flex flex-column px-3 shadow-nom"
				style="height: 345rpx;">
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
			
			<!-- 上拉加载 -->
			<view class="d-flex a-center j-center text-light-muted font-md py-3">
				{{loadtext}}
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mer_id: "",
				list: [],
				start_time: "",
				end_time: "",
				emit: 10,
				loadtext: "上拉加载更多",
			}
		},
		onReachBottom() {
			console.log('111');
			if(this.list.length < this.emit) {
				console.log('333');
				return
			}
			this.loadtext = "加载中..."
			this.emit += 10 
			this.__deal()
			console.log('222');
		},
		onLoad(option) {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			console.log('option嗷嗷：', option);
			this.start_time = option.time
			// 转化出后一天的日期
			var aftime = new Date(this.start_time)
			var bftime = aftime.getTime() + 86400000
			var outtime = new Date(bftime)
			var Y = outtime.getFullYear() + '-';
			var M = (outtime.getMonth()+1 < 10 ? '0'+(outtime.getMonth()+1) : outtime.getMonth()+1) + '-';
			var D = outtime.getDate() + ' ';
			this.end_time = ( Y + M + D )
			console.log(this.end_time);
			
			// 获取设备ID
			const res_mer = uni.getStorageSync('deal-list-mer');
			this.mer_id =res_mer.merchant_id
			this.__deal()
		},
		methods: {
			async __deal() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "order_list",
					merchant_id: this.mer_id,
					order_status: "",
					start_time: this.start_time,
					end_time: this.end_time,
					slimit: 0,
					elimit: this.emit,
				}).then((res) => {
					uni.hideLoading()
					console.log(res.arr);
					this.list = res.arr
					console.log("list数组长度：", this.list.length,'emit长度：',this.emit);
					// 恢复加载状态
					this.loadtext = this.list.length < this.emit ? "没有更多了" :  "上拉加载更多"
				}).catch((e) => {
					console.log("catch error:", e);
				})
			},
		}
	}
</script>

<style>

</style>
