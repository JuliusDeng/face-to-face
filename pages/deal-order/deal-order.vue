<template>
	<view>
		<!-- 头部订单栏 -->
		<view class="d-flex j-sb a-center mx-3 font-24" style="height: 84rpx;">
			<view class="text-gray">
				<text>订单：54267</text> <text class="ml-2">合计：￥62356.00</text>
			</view>
			<view class="bg-white text-black px-2 py rounded-12">
				筛选条件查询
			</view>
		</view>
		<!-- 下方订单详情 -->
		<view class="mx-25 m-2 rounded-12 bg-white d-flex flex-column px-3 shadow-nom" 
		style="height: 345rpx;" @click="this.$navigate('deal-check')">
			<view class="py-1  border-bottom d-flex a-center j-sb mb-1" @click="this.$navigate('device-order')">
				<view class="font-24 text-black">订单号：20190703154545454545</view>
				<view class="font-30 font-weight text-green">支付完成</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1" v-for="(item, idx) in order" :key="idx">
				<view>{{item.tit}}</view>
				<view>{{item.cont}}</view>
			</view>
			
		</view>
		
		<view class="mx-25 m-2 rounded-12 bg-white d-flex flex-column px-3 shadow-nom" 
		style="height: 345rpx;" @click="this.$navigate('deal-check')">
			<view class="py-1  border-bottom d-flex a-center j-sb mb-1" @click="this.$navigate('device-order')">
				<view class="font-24 text-black">订单号：20190703154545454545</view>
				<view class="font-30 font-weight text-red">支付失败</view>
			</view>
			<view class="d-flex j-sb a-center text-black font-22 pb-1" v-for="(item, idx) in order" :key="idx">
				<view>{{item.tit}}</view>
				<view>{{item.cont}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order: []
			}
		},
		methods: {
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMyMzExMjM0OTMzNzM3ODAz",
					opt: "order_list",
					merchant_id: "371",   //商户ID
					day: "201910", //开始日期 如：201910
					order_status: "", //订单状态  空为全部  1为已支付 2为申请退款  -1已退款
				}).then((res) => {
					let out = res.count
					console.log("res.count", res.count);
					
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

</style>
