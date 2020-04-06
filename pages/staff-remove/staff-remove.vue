<template>
	<view>
		<view class="d-flex j-center py-4">
			<!-- <image src="../../static/logo.png" style="width: 160rpx;height: 160rpx;"></image> -->
		</view>
		<view class="d-flex flex-column font-30 a-center">
			<view>章鱼哥</view>
			<view>员工：123456789</view>
		</view>
		
		<view class="text-gray font-24 mx-3 pb-1 border-bottom">权限设置</view>
		<view class="border-bottom mx-4 py-2 mb-3 border-bottom d-flex j-sb a-center">
			<view class="font-30">
				<view class="">收款记录</view>
				<view class="">开启后，可以查看你的收款记录</view>
			</view>
			<view class="">
				<switch checked="true" color="#F4CB2E" style="transform:scale(1.0);"/>
			</view>
		</view>	
		
		<!-- <view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">默认样式</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">不同颜色和尺寸的switch</view>
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>
		
			<view class="uni-title">推荐展示样式</view>
		</view> -->
		
		
		<!-- <button type="primary"></button> -->
		<button class="mx-3 text-white font-30" style="margin-top: 80rpx;background:#FE1A1A;">移除员工</button>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
