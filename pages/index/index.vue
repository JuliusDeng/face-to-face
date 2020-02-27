<template>
	<view class="bg-main">
		
		<view class="position-relative border" style="height: 453rpx;">
			<!-- 黄色头部 -->
			<view class="d-flex j-center bg-yellow" style="height: 200rpx;">
				<view class="mt-2 d-flex a-center" style="height: 50rpx;" @click="this.$navigate('user')">
					<view class="font-36">精品蟹黄堡</view>
					<view class="font-30 top-tit px ml-3 d-flex a-center">服</view>	
				</view>
			</view>
			<!-- 白色中间 -->
			<view class="" style="height: 353rpx;">
				<view class="position-absolute mx-25 w-700 rounded-12 bg-white border d-flex flex-column a-center shadow-nom" style="margin-top: -100rpx;height: 353rpx;">
					<view class="font-28 mt-35 text-gray">今日交易金额</view>
					<view class="mt-1 font-60 text-black">￥12000.25</view>
					<view class="d-flex w-100 font-26">
						<view class="flex-1 d-flex a-center flex-column border-right">
							<view class="text-gray">今日订单</view>
							<view class="text-black">1000</view>
						</view>
						<view class="flex-1 d-flex a-center flex-column">
							<view class="text-gray">昨日金额</view>
							<view class="text-black">1200.00</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 底部列表 -->
			<view class="position-absolute border w-700 mx-25"  style="margin-top: -80rpx;">
				
				<view class="bg-white shadow-nom rounded-12 d-flex j-sb border a-center">
					<view class="d-flex" @click="this.$navigate('earn')">
						<text class="cuIcon-edit"></text>
						<view class="">收益统计</view>
					</view>
					<text class="cuIcon-edit"></text>
				</view>
				
				<view class="bg-white shadow-nom rounded-12 d-flex j-sb border a-center">
					<view class="d-flex" @click="this.$navigate('shop')">
						<text class="cuIcon-edit"></text>
						<view class="">商户管理</view>
					</view>
					<text class="cuIcon-edit"></text>
				</view>
				
				
				
			</view>
			
			
		</view>
		
		
		
		
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.top-tit{
		width:40rpx;
		height:40rpx;
		background:#F9E46C;
		border-radius:12rpx;
	}
</style>
