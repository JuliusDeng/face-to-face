<template>
	<view class="mx-25">
		<template >
			<template v-if="ways">
				<!-- 订单查询 -->
				<view class="bg-white d-flex j-sb a-center my-4 shadow-nom rounded-12" style="height: 100rpx;">
					<view class="font-30 ml-4 d-flex a-center">
						<text class="text-black">订单编号:</text>
						<input class="text-ba ml-5 pl-2" v-model="ordersn" type="text" placeholder="请输入终端编号" />
					</view>
					<image class="mr-2" src="../../static/icon/weibiaoti.png" style="width: 50rpx;height: 50rpx;"
					@click="scan"></image>
				</view>
				<!-- 查询按钮 -->
				<button class="text-black font-30 rounded-12" @click="__init" 
				style="background:#F4CB2E;height: 80rpx;">查询</button>
				<!-- 时间编号 -->
				<view class="d-flex j-sb a-center mt-3">
					<text class="text-55 font-24" @click="change">时间编号查询</text>
					<text class="text-55 font-24">遇到问题</text>
				</view>
			</template>
			
			<template v-else>
				<!-- 时间编号查询 -->
				<view class="bg-white d-flex a-center font-30 pl-4 my-4 shadow-nom rounded-12" 
				style="height: 100rpx;">
					<text class="text-black">交易时间:</text>
					<input class="text-ba ml-5 pl-5" v-model="paytime" type="text" placeholder="请选择时间" />
				</view>
				<view class="bg-white d-flex a-center font-30 pl-4 my-4 shadow-nom rounded-12"
				style="height: 100rpx;">
					<text class="text-black">终端编号:</text>
					<input class="text-ba ml-5 pl-3" v-model="deviceid" type="text" placeholder="请输入终端编号" />
				</view>
				<!-- 查询按钮 -->
				<button class="text-black font-30 rounded-12 mt-4" @click="__init"
				style="background:#F4CB2E;height: 80rpx;">查询</button>
				<!-- 时间编号 -->
				<view class="d-flex j-sb a-center mt-3">
					<text class="text-55 font-24" @click="change">订单查询</text>
					<text class="text-55 font-24">遇到问题</text>
				</view>
			</template>
			
			<!-- 下面文字 -->
			<view class="d-flex flex-column" style="margin-top: 260rpx;">
				<text class="font-32 font-weight">查询说明:</text>
				<text class="font-24 mx-3 mt-1" space="emsp">  订单编号查询：请学生打开“云闪付“，卡管理】>【交易记录】，点击支付记录进入交易详情，提供订单交易码或订单编号。</text>
				<text class="font-24 mx-3 mt-1" space="emsp">   时间编号查询：请学生打开“云闪付“，【卡管理】>【交易记录】，点击支付记录进入交易详情，提供时间。</text>	 
			</view>
		</template>
		
	</view>
</template>

<script>
	import permision from "@/common/lib/permission.js"

	export default {
		data() {
			return {
				ways: true,
				ordersn: "",
				paytime: "",
				deviceid: "",
				msg: "",
			}
		},
		methods: {
			// 扫码top
			async scan() {
				// #ifdef APP-PLUS
				let status = await this.checkPermission();
				if (status !== 1) {
				    return;
				}
				// #endif
				uni.scanCode({
					success: (res) => {
						// this.ordersn = val
						this.ordersn = res.result
						console.log('this.ordersn:', this.ordersn);
					},
					fail: (err) => {
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.camera'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要使用您的相机，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				});
			},
			// #ifdef APP-PLUS
			async checkPermission(code) {  // 检查权限（许可）
				let status = permision.isIOS ? await permision.requestIOS('camera') :
					await permision.requestAndroid('android.permission.CAMERA');
			
				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: "需要相机权限",
						confirmText: "设置",
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					})
				}
				return status;
			},
			// #endif
			change() {
				this.ways = !this.ways
			},
			async __init() {
				console.log('点击查询');
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "device_statistics",
					order_sn: this.ordersn, // 订单号
					search_pay_time: this.paytime, // 时间
					search_device_id: this.deviceid // 设备号
				}).then((res) => {
					console.log('点击查询', res);
					uni.navigateTo({
						url: "/pages/order-refund/order-refund"
					})
					
					/* this.msg = res
					try {
					    uni.setStorageSync('remsg', res.arr[0]);
						// uni.setStorageSync('ordersn', res.arr[0].order_sn);
						if(this.msg) {
							console.log('this.msg', this.msg);
							uni.navigateTo({
								url: "/pages/order-refund/order-refund"
							})
						} else {
							uni.showToast({
								title: "输入有误，未找到！",
								duration: 2500
							})
						}
					} catch (e) {
					    // error
						console.log('catch error: ',e);
					} */
				}).catch((e) => {
					uni.showToast({
						title: "请输入有效订单",
						icon: 'none'
					})
					console.log("catch error!!", e);
				})
				
			}
		}
	}
</script>

<style>

</style>
