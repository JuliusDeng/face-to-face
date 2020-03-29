<template>
	<view>
		<!-- tab选项卡 -->
		<view class="bg-white d-flex a-center border-top" style="height: 98rpx;">
			<view class="font-30 flex-1 d-flex a-center j-center text-black" v-for="(item, index) in tabBars" :key="index">
				<view class="d-flex a-center" :class="tabIndex === index ? 'tabactive': ''" @click="changeTab(item, index)" style="height: 98rpx;">{{item.name}}</view>
			</view>
		</view>
		<!-- 收益列表 -->
		<view class="h-vh100" v-for="(tab, tabI) in tabBars" :key="tabI" v-show="tabI === tabIndex">
			<view class="px-25" v-for="(item, index) in tab.list" :key="index">
				<view class="font-24 text-ba py-25">{{item.add_time}}</view>
				<view class="d-flex bg-white rounded-12 text-black" style="height: 170rpx;">
					<view class="flex-1 d-flex flex-column j-sb my-25 ml-4">
						<view class="font-24">合计：</view>
						<view class="font-24">收款笔数：</view>
					</view>
					<view class="flex-2 d-flex flex-column j-sb my-2 a-end mr-4">
						<view class="font-48">￥{{item.sum_money}}</view>
						<view class="font-30">{{item.count_num}}</view>
					</view>
				</view>
			</view>
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
				tabIndex: 0,
				tabBars: [ 
					{
						name: "每日",
						list: [],
						group: "day"
					},
					{
						name: "每周",
						list: [],
						group: "week"
					},
					{
						name: "每月",
						list: [],
						group: "month"
					}
				],
				loadtext: "上拉加载更多",
				emit: 10,
				init_group: "day",
				startTime: "",
				endTime: "",
				out: ""
			}
		},
		onLoad() {
			try {
				this.startTime = uni.getStorageSync('start_time')
				this.endTime = uni.getStorageSync('end_time')
				if( !this.startTime || !this.endTime ) {
					uni.showToast({
						title: "请先去'收益统计'确定时间",
						icon: "none",
						duration: 3000
					})
				}
			} catch (e) {
			    console.log("catch:", e);
			}
			console.log("开始结束：", this.startTime, this.endTime);
			this.__init()
		},
		onReachBottom() {
			if(this.emit > this.out.length) {
				console.log('不会再上拉了哦');
				return
			}
			console.log('啦啦啦');
			this.loadtext = "加载中..."
			this.emit += 10 
			console.log("触发上拉加载", this.emit);
			this.__init()
		},
		methods: {
			// 切换选项卡
			changeTab(item, index) {
				this.tabIndex = index
				this.init_group = item.group
				this.emit = 10
				this.__init()
			},
			// 获取后台数据
			async __init() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "agent_device_statistics",
					slimit: 0, //始值
					elimit: this.emit, //数量
					order_status: 1, //订单状态  空为全部  1为已支付 2为申请退款  -1已退款
					device_id: "", // 设备ID
					merchant_id: "",   //商户ID
					start_time: this.startTime, //开始日期 如：2019-07-17
					end_time: this.endTime, //结束日期 如：2020-02-17
					group: this.init_group
				}).then((res) => {
					this.out = res.count
					this.tabBars[0].list = res.count
					this.tabBars[1].list = res.count
					this.tabBars[2].list = res.count
					// 恢复加载状态
					console.log('比较长度：', this.out.length, this.emit);
					this.loadtext = this.out.length < this.emit ? "没有更多了" :  "上拉加载更多"
				}).catch((e) => {
					console.log("catch error!!", e);
				})
				
			}
		}
	}
</script>

<style>
.tabactive{
	border-bottom: 5rpx solid #F4CB2E;
	color: #F4CB2E;
	margin-bottom: -5rpx;
}
</style>
