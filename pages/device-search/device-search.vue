<template>
	<view class="h-vh100">
		<!-- 搜索框 -->
		<view class="cu-bar bg-white search">
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="按设备ID搜索" 
				confirm-type="search" v-model="devid"></input>
			</view>
			<view class="action" @click="searchbtn">
				<button class="cu-btn bg-yellow shadow-blur rounded-12" >搜索</button>
			</view>
		</view>
		<!-- POS机列表 -->
		<text class="font-24 text-gray ml-2">共有{{list.length}}台设备</text>
		<view class="mx-2 mt-2">
			<view class="d-flex  bg-white rounded-12 text-black mb-2 shadow-nom" 
			style="height: 120rpx;" v-for="(item, index) in list" :key="item" @click="this.$navigate('device')">
				<view class="mr-3 span-18 d-flex flex-column a-center j-center font-24">
					<view>设备号：{{item.device_sn}}</view>
					<view>关联商户：{{item.merchant_name}}</view>
				</view>
			</view>
			
		</view>
		<!-- 上拉加载 -->
		<view class="d-flex a-center j-center text-light-muted font-md py-3">
			{{lodatext}}
		</view>
		
		
	</view>
</template>

<script>
	
	export default {
		components: {
		},
		data() {
			return {
				list: [],
				lodatext: "上拉加载更多",
				emit: 10,
				devid: ""
			}
		},
		onLoad() {
			this.__init()
		},
		onReachBottom() {
			this.lodatext = "加载中..."
			this.emit += 10 
			console.log(this.emit);
			this.__init()
		},
		methods: {
			searchbtn() {
				this.__init()
			},
			async __init(callback = false) {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMyMzExMjM0OTMzNzM3ODAz",
					opt: "device_list",
					slimit: "0",
					elimit: `${this.emit}`,
					device_id: this.devid
				}).then((data) => {
					console.log(data);
					this.list = data.arr
					
					// 恢复加载状态
					this.lodatext = this.list.length < this.emit ? "没有更多了" :  "上拉加载更多"
				}).catch(() => {
					console.log("catch error");
				})
			}
		}
		
		
	}
</script>

<style>

</style>
