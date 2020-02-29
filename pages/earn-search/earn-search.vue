<template>
	<view class="h-vh100">
		<uni-search-bar radius="12" placeholder="请输入设备信息" bgColor="#DCDCDC" @confirm="search" />		
		<text class="font-24 text-gray ml-2">共有15台设备</text>
		<!-- POS机 -->
		<view class="mx-2 mt-2">
			<view class="d-flex j-sb bg-white rounded-12 text-black mb-2 shadow-nom" 
			style="height: 215rpx;" v-for="i in 3" :key="i" @click="this.$navigate('device')">
				<view class="ml-3 span-6 d-flex flex-column">
					<image class="mt-4 border bg-blue" src="../../static/logo.png"
					style="width: 92rpx;height: 94rpx;"></image>
					<view class="mt-2 font-18">食堂POS机</view>
				</view>
				<view class="mr-3 span-18 d-flex flex-column j-center a-end font-24">
					<text>设备号：123456789</text>
					<text>关联商户：护理学1楼重庆味面</text>
					<text>设备地址：护理食堂3窗口</text>
				</view>
			</view>
			
		</view>
		
		
		
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	
	export default {
		components: {
			uniSearchBar,
		},
	}
</script>

<style>

</style>
