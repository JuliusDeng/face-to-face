<template>
	<view>
		<!-- 顶部白色部分 -->
		<view class="bg-white" @click="this.$navigate('device-order')">
			<view class="mx-35" style="height: 392rpx;width: 680rpx;">
				
				<view class="d-flex j-sb p-3 border-bottom">
					<image src="../../static/1post.png" style="width: 92rpx;height: 94rpx;"></image>
					<view class="d-flex flex-column a-end text-black">
						<view>设备号：123456789</view>
						<view>关联商户：护理学1楼 重庆味面</view>
					</view>
				</view>
				
				<view class="px-2 pt-1">
					<view class=" d-flex j-sb text-black" v-for="(item, index) in title" :key="index">
						<view>{{item.tit}}</view>
						<view>{{item.cont}}</view>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 下方订单详情 -->
		<block v-for="i in 2" :key="i">
			<view class="mx-25 m-2 rounded-12 bg-white d-flex flex-column px-3 shadow-nom" style="height: 345rpx;">
				<view class="py-1  border-bottom d-flex a-center j-sb mb-1" @click="this.$navigate('device-order')">
					<view class="font-24 text-black">订单号：20190703154545454545</view>
					<view class="font-30 font-weight text-cyan">支付完成</view>
				</view>
				
				<view class="d-flex j-sb a-center text-black font-22 pb-1" v-for="(item, idx) in order" :key="idx">
					<view>{{item.tit}}</view>
					<view>{{item.cont}}</view>
				</view>
				
			</view>
		</block>
		
		
		
		
		
		
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
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
