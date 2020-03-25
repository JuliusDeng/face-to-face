<template>
	<view>
		<!-- tab选项卡 -->
		<view class="bg-white d-flex a-center border-top" style="height: 98rpx;">
			<view class="font-30 flex-1 d-flex a-center j-center text-black" v-for="(item, index) in tabBars" :key="index">
				<view class="d-flex a-center" :class="tabIndex === index ? 'tabactive': ''" @click="changeTab(item, index)" style="height: 98rpx;">{{item.name}}</view>
			</view>
		</view>
		<!-- 收益列表 -->
		<view v-for="(tab, tabI) in tabBars" :key="tabI" v-show="tabI === tabIndex">
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
				init_group: ""
			}
		},
		onLoad() {
			this.__init()
		},
		onReachBottom() {
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
				this.__init()
			},
			// 获取后台数据
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMyMzExMjM0OTMzNzM3ODAz",
					opt: "agent_device_statistics",
					slimit: "0", //始值
					elimit: `${this.emit}`, //数量
					order_status: 1, //订单状态  空为全部  1为已支付 2为申请退款  -1已退款
					device_id: "", // 设备ID
					merchant_id: "",   //商户ID
					start_time: "2019-07-17", //开始日期 如：2019-07-17
					end_time: "2020-02-17", //结束日期 如：2020-02-17
					group: this.init_group
				}).then((res) => {
					let out = res.count
					this.tabBars[0].list = out
					this.tabBars[1].list = out
					this.tabBars[2].list = out
					console.log("this.tabBars[0].list.length", res.count.length);
					console.log("this.emit", this.emit);
					
					// 恢复加载状态
					this.loadtext = this.tabBars[0].list.length < this.emit ? "没有更多了" :  "上拉加载更多"
					/* this.out_money = 0
					for(let i=0; i<out.length; i++) {
						this.out_money += (parseFloat(out[i].sum_money))
						this.amount += parseFloat(out[i].count_num)
					}
					console.log('out_money', this.out_money);
					this.total_money = this.out_money.toFixed(2)
					this.money = (this.total_money / this.amount).toFixed(2) */
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
