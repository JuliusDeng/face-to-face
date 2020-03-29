<template>
	<view>
		<!-- 黄色头部 -->
		<view class="bg-yellow position-relative" style="height: 200rpx;">
			<view class="position-absolute d-flex" style="top: 30rpx;height: 138rpx;">
				<!-- 头像 -->
				<image :src="imgurl" style="width: 138rpx;height: 138rpx;" class="rounded-half ml-5 bg-blue"></image>
				<!-- 信息 -->
				<view class="ml-4 d-flex flex-column border" style="width: 430rpx;height: 138rpx;">
					<view class="d-flex a-center" style="height: 47rpx;">
						<view class="font-36 font-w400" style="width: 210rpx;">{{relname}}</view>
						<view class="d-flex j-center a-center font-30 font-w400 rounded-12" style="width: 128rpx;height: 40rpx;background:#F9E46C;">服务商</view>
					</view>
					<view class="d-flex a-center font-20" style="padding-top: 16rpx;">
						<text style="width: 170rpx;">编号：{{userID}}</text>
						<!-- 不要了<text>推广数：0</text> -->
					</view>
					<view class="font-20 mt-1">
						服务商：{{agentname}}
					</view>
				</view>
				<!-- 二维码 -->
				<view class="d-flex a-center" @click="open">
					<image src="../../static/icon/qrcode.png" style="width: 40rpx;height: 40rpx;"></image>
				</view>

			</view>
		</view>
		<!-- 弹出二维码 -->
		<!-- <button @click="open">打开弹窗</button> -->
		<uni-popup ref="popup" type="top">
			<view class=" mx-75 d-flex a-center j-center flex-column" style="width: 600rpx;height: 857rpx;">
				<!-- 头像 -->
				<image src="/static/icon/weibiaoti-2.png" style="width: 138rpx;height: 138rpx;" class="rounded-half border border-white"></image>
				<!-- 白色] -->
				<view class="bg-white d-flex flex-column a-center text-black font-30 rounded-24 " 
				style="width: 600rpx;height: 755rpx;margin-top: -50rpx;">
					<view class="mt-5 pt-2">{{relname}}</view>
					<view>ID：{{userID}}</view>
					<tki-qrcode class="mt-5" ref="qrcode" :val="userID" size="378" 
					unit="upx" :icon="icon" :iconSize="iconsize" :onval="onval" :loadMake="loadMake" :usingComponents="true" />
					<view class="mt-5">快速签到，一扫即可</view>
				</view>
			</view>
		</uni-popup>
		
		
		
		<!-- 列表项 -->
		<view class="w-700 mx-25 mt-3">
			<view class="bg-white text-black font-32 shadow-nom rounded-12 d-flex flex-column py-25 px-3" style="height: 250rpx;">
				<view class="d-flex j-sb mb-2">
					<view class="d-flex a-center" @click="this.$navigate('staff')">
						<image src="../../static/icon/weibiaoti-2.png" style="width: 39rpx;height: 40rpx;"></image>
						<view class="ml-2">姓名</view>
					</view>
					<view class="d-flex a-center ">
						<text class="mr-3">{{nickname}}</text>
						<image src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
					</view>
				</view>
				<view class="d-flex j-sb mb-2">
					<view class="d-flex a-center" @click="this.$navigate('staff')">
						<image src="../../static/icon/weibiaoti-4.png" style="width: 39rpx;height: 40rpx;"></image>
						<view class="ml-2">性别</view>
					</view>
					<view class="d-flex a-center ">
						<text class="mr-3">{{sex=='1'?'男':'女'}}</text>
						<image src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
					</view>
				</view>
				<view class="d-flex j-sb">
					<view class="d-flex a-center" @click="this.$navigate('staff')">
						<image src="../../static/icon/weibiaoti-9.png" style="width: 39rpx;height: 40rpx;"></image>
						<view class="ml-2">学校</view>
					</view>
					<view class="d-flex a-center ">
						<text class="mr-3">{{school}}</text>
						<image src="../../static/right/rignt.png" style="width: 11rpx;height: 20rpx;"></image>
					</view>
				</view>
			</view>
			<!-- 意见反馈 -->
			<view class="bg-white text-black font-32 shadow-nom rounded-12 d-flex j-sb py-25 px-3 mt-3" style="height: 98rpx;">
				<view class="d-flex a-center" @click="this.$navigate('staff')">
					<image src="../../static/icon/weibiaoti-5.png" style="width: 39rpx;height: 40rpx;"></image>
					<view class="ml-2">意见反馈</view>
				</view>
				<text>{{tel}}</text>
			</view>
			<!-- 公司 -->
			<text class="font-20 text-55 d-flex j-center mt-45">公司：{{company}}</text>
		</view>



	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"

	export default {
		components: {
			uniPopup,
			tkiQrcode
		},
		data() {
			return {
				imgurl: "",
				relname: "",
				userID: "",
				agentname: "",
				nickname: "",
				sex: "",
				school: "",
				tel: "",
				company: "",
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
			}
		},
		onLoad(options) {
			console.log(options);
			this.company = options.name
			this.tel = options.tel
			this.agentname = options.agentName
			
			this.__init()
		},
		methods: {
			open() {
				this.$refs.popup.open()
				this.$refs.qrcode._makeCode()
			},
			async __init() {
				this.$H.post("/user/", {
					user_id: "183823",
					token: "dXQyMDIwMDMyNjExNDUyNTgyNjc4Njc0",
					app: "app"
				}).then((data) => {
					console.log(data);
					this.imgurl = data.user_info.headimgurl
					this.relname = data.user_info.realname
					this.userID = data.user_info.user_id
					this.nickname = data.user_info.nickname
					this.sex = data.user_info.sex
					this.school = data.user_info.school_id
				}).catch((error) => {
					console.log('--catch 错误:', error);
				})

			}

		}
	}
</script>

<style>

</style>
