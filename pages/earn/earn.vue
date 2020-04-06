<template>
	<view class="h-vh100 bg-white ">
		<!-- 头部 -->
		<view class="d-flex j-sb a-center border rounded-12" style="height: 98rpx;">
			<view class="ml-3 font-32 text-black">接收统计推送</view>
			<switch class="mr-3" checked color="#F1F1F1" />
		</view>
		<!-- 两行筛选 -->
		<view class="d-flex flex-column bg-main">
			<!-- 状态-->
			<view class="ml-3  d-flex a-center" style="height: 100rpx;">
				<view class="border d-flex bg-white mr-3 text-gray" style="width: 210rpx;height: 70rpx;" >
					<view class="flex-1 border-right d-flex a-center j-center font-20">状态</view>
					<view class="flex-2  d-flex a-center j-center">
						<picker class="d-flex" @change="bindPickerChange" :value="index" :range="array" range-key="name">
							<view class="text-gray font-20 mr-2">{{array[index].name}}</view>
						</picker>
						<image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image>
					</view>
				</view>
				<!-- 设备 -->
				<view class="border d-flex bg-white mr-3 text-gray" style="width: 210rpx;height: 70rpx;" >
					<view class="flex-1 border-right d-flex a-center j-center font-20">设备</view>
					<view class="flex-2  d-flex a-center j-center" @click="toDevice">
						<text class="font-20 mer_sel d-flex j-center a-center" style="width: 120rpx;" v-if="dev_name=='全部'">
							{{dev_name}}
						</text>
						<text class="font-14 mer_sel d-flex j-center a-center" style="width: 120rpx;" v-else>
							{{dev_name}}
						</text>
						<!-- <view class="d-flex j-center a-center"><image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image></view> -->
						<image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image>
					</view>
				</view>
				<!-- 商户 -->
				<view class="border d-flex font-20 bg-white mr-3 text-gray" style="width: 210rpx;height: 70rpx;" >
					<view class="flex-1 border-right d-flex a-center j-center font-20">商户</view>
					<view class="flex-2  d-flex a-center j-center"  @click="toMerchant">
						<text class="mr-2 font-20">{{mer_name}}</text>
						<image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image>
					</view>
				</view>
			</view>
			<!-- 下面 选日期-->
			<view class="mx-3 border-top d-flex a-center" style="height: 111rpx;">
				<view class="border d-flex a-center bg-white text-gray" style="width: 280rpx;height: 70rpx;" @click="open_one()">
					<view class="d-flex a-center j-center border-right" style="width: 70rpx;height: 70rpx;">
						<image src="../../static/icon/calendar.png" style="width: 42rpx;height: 42rpx;"></image>
					</view>
					<view class="d-flex a-center j-center font-20" style="width: 210rpx;">{{start_time}}</view>
				</view>
				<!-- 横线 -->
				<view class="d-flex a-center j-center" style="width: 130rpx;height: 70rpx;">
					<view style="width: 60rpx;height: 2rpx;background: #8A8A8A;"></view>
				</view>
				<view class="border d-flex a-center bg-white text-gray" style="width: 280rpx;height: 70rpx;" @click="open_two()">
					<view class="d-flex a-center j-center border-right" style="width: 70rpx;height: 70rpx;">
						<image src="../../static/icon/calendar.png" style="width: 42rpx;height: 42rpx;"></image>
					</view>
					<view class="d-flex a-center j-center font-20" style="width: 210rpx;">{{end_time}}</view>
				</view>
			</view>
		</view>
		<!-- 收到 -->
		<view class="d-flex flex-column a-center j-center" style="height: 253rpx;">
			<view class="d-flex a-center font-28 text-gray" style="height: 40rpx;">共收到</view>
			<view class="d-flex a-center font-60 mt-1 text-black" style="height: 80rpx;">￥{{total_money}}</view>
		</view>
		<!-- 订单均价 -->
		<view class="d-flex text-black" style="height: 90rpx;">
			<view class="flex-1 d-flex flex-column a-center border-right">
				<text class="font-26 text-gray">订单数量</text>
				<text class="font-26 ">{{amount}}</text>
			</view>
			<view class="flex-1 d-flex flex-column a-center">
				<text class="font-26 text-gray">单笔均价</text>
				<!-- <text class="font-26">￥{{averagy_money== 'NaN' ? '爱你哦' : averagy_money}}</text> -->
				<text class="font-26">￥{{averagy_money}}</text>
			</view>
		</view>
		<!-- 意见反馈 -->
		<view class="text-blue d-flex j-center font-22" style="margin-top: 288rpx;">意见反馈</view>
		
		<uni-calendar ref="calendar_one" :insert="info.insert" lunar="true" :startDate="info.startDate"
		:endDate="info.endDate" range="false" @confirm="confirm_one" />
		<uni-calendar ref="calendar_two" :insert="info.insert" lunar="true" :startDate="info.startDate"
		:endDate="info.endDate" range="false" @confirm="confirm_two" />

	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	
	export default {
		components: {
			uniCalendar
		},
		data() {
			return {
				// 状态
				index: 0,
				array: [
					{name:'全部'},
					{name: '已支付'}, 
					{name:'申请退款'}, 
					{name:'已退款'}
				],
				status: "",
				// 设备和商户
				dev_name: "全部",
				mer_name: "全部",
				dev_id: "",
				mer_id: "",
				// 日历时间
				showCalendar: false,
				info: {
					startDate: '2019-06-01',
					endDate: '2020-06-01',
					range: true,
					insert: false,
					selected: []
				},
				start_time: "2019-07-17",
				end_time: "2020-02-17",
				all_money: 0,
				total_money: 0,
				amount: 0,
				averagy_money: 0,
			}
		},
		onShow() {
			try {
			    const value = uni.getStorageSync('earn');
				console.log('onShow取出缓存：', value)
			    if (value) {
					// 取设备
					if (value.dev_id) {
						this.dev_id = value.dev_id
						this.dev_name = value.dev_id
					} else {
						this.dev_id = ''
						this.dev_name = '全部'
					}
					// 取商户
					if (value.mer_id) {
						this.mer_id = value.mer_id
						this.mer_name = value.mer_id
					} else {
						this.mer_id = ''
						this.mer_name = '全部'
					}
			    } else {
					// console.log('value没有值：');
				}
			} catch (e) {
			    // error
			}
			this.__init()
		},
		methods: {
			// 日期选择
			open_one() {
				console.log('open_one',this.$refs.calendar_one.open());
				this.$refs.calendar_one.open()
			},
			open_two() {
				console.log('open_two',this.$refs.calendar_one.open());
				this.$refs.calendar_two.open()
			},
			confirm_one(e) {
				this.start_time = e.fulldate
				this.setlocation()
				this.__init()
			},
			confirm_two(e) {
				this.end_time = e.fulldate
				this.setlocation()
				this.__init()
			},
			// 跳转商户页
			toMerchant() {
				this.setlocation()
				uni.navigateTo({
				    url: '/pages/earn-search-merchant/earn-search-merchant'
				});
			},
			// 跳转设备页
			toDevice() {
				this.setlocation()
				uni.navigateTo({
				    url: '/pages/earn-search-device/earn-search-device'
				});
			},
			// 状态选择
			bindPickerChange(e) {
				this.index = e.detail.value // value为序号0 1 2 3 
				this.status = e.detail.value
				if(e.detail.value == 0) {
					this.status = ''
				}
				if(e.detail.value == 3) {
					this.status = -1
				}
				this.setlocation()
				this.__init()
				// console.log('支付状态:', this.status);
			},
			// 设置缓存
			setlocation () {
				const data = {
					index: this.index,
					status: this.status,
					dev_name: this.dev_name,
					dev_id: this.dev_id,
					mer_name: this.mer_name,
					mer_id: this.mer_id,
					start_time: this.start_time,
					end_time: this.end_time
				}
				uni.setStorageSync('earn', data)
			},
			// 后台数据
			async __init() {
				this.$H.post("/agent/", {
					user_id: uni.getStorageSync('uid'),
					token: uni.getStorageSync('utoken'),
					opt: "agent_device_statistics",
					order_status: this.status, //订单状态  空为全部  1为已支付 2为申请退款  -1已退款
					device_id: this.dev_id, // 设备ID
					merchant_id: this.mer_id,   //商户ID
					start_time: this.start_time, //开始日期 如：2019-07-17
					end_time: this.end_time, //结束日期 如：2020-02-17
					group: "day"
				}).then((res) => {
					uni.hideLoading()
					console.log('打印改变后的值：', '->'+this.status,'->'+this.dev_name,'->'+this.mer_name);
					this.all_money = 0
					this.amount = 0
					if(res.count.length < 1) {
						uni.showToast({
							title: "暂无数据",
							icon: "none",
							duration: 2500
						})
					}
					for(var i=0; i<res.count.length; i++) {
						console.log('for里面：', this.all_money + '+' + res.count[i].sum_money);
						this.all_money += (parseFloat(res.count[i].sum_money))
						this.amount += parseFloat(res.count[i].count_num)
					}
					console.log('总金额：', this.all_money,'笔数：',this.amount);
					this.total_money = this.all_money.toFixed(2)
					this.averagy_money = (this.all_money / this.amount).toFixed(2)
					console.log('嗷嗷',this.averagy_money);
				}).catch((e) => {
					console.log("catch error:", e);
				})
				
			}
		}
	}
</script>

<style>
.mer_sel{
	width: 120px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
</style>
