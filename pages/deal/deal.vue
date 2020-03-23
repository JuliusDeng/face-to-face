<template>
	<view>
		<!-- tab选项卡 -->
		<view class="bg-white d-flex a-center border-top" style="height: 98rpx;">
			<view class="font-30 flex-1 d-flex a-center j-center text-black" v-for="(item, index) in tabBars" :key="index">
				<view class="d-flex a-center" :class="tabIndex === index ? 'tabactive': ''" @click="changeTab(index)" style="height: 98rpx;">{{item.name}}</view>
			</view>
		</view>
		<!-- 收益列表 -->
		<view v-for="(tab, tabI) in tabBars" :key="tabI" v-show="tabI === tabIndex">
			<view class="px-25" v-for="(item, index) in tab.list" :key="index">
				<view class="font-24 text-ba py-25">{{item.time}}</view>
				<view class="d-flex bg-white rounded-12 text-black" style="height: 170rpx;">
					<view class="flex-1 d-flex flex-column j-sb my-25 ml-4">
						<view class="font-24">合计：</view>
						<view class="font-24">收款笔数：</view>
					</view>
					<view class="flex-2 d-flex flex-column j-sb my-2 a-end mr-4">
						<view class="font-48">￥{{item.total}}</view>
						<view class="font-30">{{item.amount}}</view>
					</view>
				</view>
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
						list: [
							{
								time: "2019年10月11日",
								total: "1111",
								amount: "15542"
							},
							{
								time: "2050年10月11日",
								total: "98855454",
								amount: "15542"
							},
							{
								time: "2080年10月11日",
								total: "98855454",
								amount: "15542"
							}
						]
					},
					{
						name: "每周",
						list: [
							{
								time: "2019年10月11日",
								total: "2222",
								amount: "15542"
							},
							{
								time: "2050年10月11日",
								total: "98855454",
								amount: "15542"
							},
							{
								time: "2080年10月11日",
								total: "98855454",
								amount: "15542"
							}
						]
					},
					{
						name: "每月",
						list: [
							{
								time: "2019年10月11日",
								total: "33333",
								amount: "15542"
							},
							{
								time: "2050年10月11日",
								total: "98855454",
								amount: "15542"
							},
							{
								time: "2080年10月11日",
								total: "98855454",
								amount: "15542"
							}
						]
					}
				]
			}
		},
		onLoad() {
			this.__init()
		},
		methods: {
			// 切换选项卡
			changeTab(index) {
				this.tabIndex = index
			},
			// 获取后台数据
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMyMDE4NDQ1NTUzNzAyMTgx",
					opt: "device_list",
					slimit: 0,
					elimit: 10
				}).then((res) => {
					console.log(res);
					
				}).catch((error) => {
					console.log(error);
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
