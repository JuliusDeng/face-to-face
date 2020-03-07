<template>
	<view>
		
		<!-- 黄色头部 -->
		<view class="bg-yellow position-relative" style="height: 200rpx;">
			<view class="position-absolute d-flex" style="top: 30rpx;height: 138rpx;">
				
				<image src="../../static/logo.png" style="width: 138rpx;height: 138rpx;"
				class="rounded-half ml-5"></image>
				
				<view class="ml-4 d-flex flex-column border" style="width: 430rpx;height: 138rpx;">
					<view class="d-flex a-center" style="height: 47rpx;">
						<view class="font-36 font-w400" style="width: 210rpx;">痞老板</view>
						<view class="d-flex j-center a-center font-30 font-w400 rounded-12" 
						style="width: 128rpx;height: 40rpx;background:#F9E46C;">服务商</view>
					</view>
					<view class="d-flex a-center font-20" style="padding-top: 16rpx;">
						<text style="width: 170rpx;">编号：154944</text>
						<text>推广数：12</text>
					</view>
					<view class="font-20 mt-1">
						服务商：比基尼海滩有限公司
					</view>
				</view>
				
				<view class="d-flex a-center">
					<image src="../../static/logo.png" style="width: 40rpx;height: 40rpx;"></image>
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
			this.__init()
		},
		methods: {
			async __init() {
				this.$H.post('/user/', {
					code: '',
					app: xcx
				})
			}.then((data) => {
				console.log(data);
			}).catch((data) => {
				console.log(data);
			})
			
			
			
		}
	}
</script>

<style>

</style>
