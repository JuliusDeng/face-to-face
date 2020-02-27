<template>
	<view class="box">
		<!-- 111 -->
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			
		</view>
		<!-- 222 -->
		<view class="cu-bar search bg-white">
			
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			
		</view>
		<!-- 333 -->
		<view class="cu-bar bg-red search">
			
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			
		</view>
		<!-- 444 -->
		<view class="cu-bar bg-cyan search">
			<view class="search-form radius">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
