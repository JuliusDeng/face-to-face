<template>
	<view>
		<!-- 搜索框 -->
		<view class="cu-bar bg-white search">
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" 
				type="text" placeholder="按商户ID搜索" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-yellow shadow-blur rounded-12">搜索</button>
			</view>
		</view>
		<!-- 列表 -->
		<text class="ml-3 font-24 text-gray">共有2户商家</text>
			
		<view class="mt-2 mx-25 d-flex a-center border shadow-nom bg-white mb-2" style="height: 180rpx;"
		v-for="i in 2" :key="i" @click="this.$navigate('shops-earn')">
			<image class="ml-3" src="../../static/logo.png" style="width: 120rpx;height: 120rpx;"></image>
			<view class="d-flex flex-column ml-3 font-24 text-black">
				<text>水母餐厅</text>
				<text>电话：1324567899</text>
				<text>地址：重庆市九龙坡杨家坪西郊路32号</text>
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
		methods: {
			
		}
	}
</script>

<style>

</style>
