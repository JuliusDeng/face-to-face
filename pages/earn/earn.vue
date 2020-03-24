<template>
	<view class="h-vh100 bg-white ">
		<!-- 头部 -->
		<view class="d-flex j-sb a-center border rounded-12" style="height: 98rpx;">
			<view class="ml-3 font-32 text-black">接收统计推送</view>
			<switch class="mr-3" checked color="#F1F1F1" />
		</view>
		<!-- 两行状态 -->
		<view class="d-flex flex-column bg-main">
			<!-- 上面 -->
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
				
				<view class="border d-flex bg-white mr-3 text-gray" style="width: 210rpx;height: 70rpx;" >
					<view class="flex-1 border-right d-flex a-center j-center font-20">设备</view>
					<view class="flex-2  d-flex a-center j-center" @click="$navigate('earn-search-device')">
						<text class="font-20 mer_sel d-flex j-center a-center" style="width: 120rpx;">{{dev_name}}</text>
						<!-- <view class="d-flex j-center a-center"><image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image></view> -->
						<image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image>
					</view>
				</view>
				
				<view class="border d-flex font-20 bg-white mr-3 text-gray" style="width: 210rpx;height: 70rpx;" >
					<view class="flex-1 border-right d-flex a-center j-center font-20">商户</view>
					<view class="flex-2  d-flex a-center j-center"  @click="$navigate('earn-search-merchant')">
						<text class="mr-2 font-20">{{mer_name}}</text>
						<image src="../../static/right/bottom.png" style="width: 10rpx;height: 8rpx;"></image>
					</view>
				</view>
				
			</view>
			<!-- 下面 -->
			<view class="mx-3 border-top d-flex a-center" style="height: 111rpx;">
				<view class="border d-flex a-center bg-white text-gray" style="width: 280rpx;height: 70rpx;" @click="open_one()">
					<view class="d-flex a-center j-center border-right" style="width: 70rpx;height: 70rpx;">
						<image src="../../static/icon/calendar.png" style="width: 42rpx;height: 42rpx;"></image>
					</view>
					<view class="d-flex a-center j-center font-20" style="width: 210rpx;">{{time_start}}</view>
				</view>
				<!-- 日历组件 -->
				<!-- <uni-calendar ref="calendar" :date="info.date" :insert="info.insert" :lunar="info.lunar" :startDate="info.startDate" 
				:endDate="info.endDate" range="false" @confirm="confirm" /> -->
				<!-- 横线 -->
				<view class="d-flex a-center j-center" style="width: 130rpx;height: 70rpx;">
					<view style="width: 60rpx;height: 2rpx;background: #8A8A8A;"></view>
				</view>
				<view class="border d-flex a-center bg-white text-gray" style="width: 280rpx;height: 70rpx;" @click="open_two()">
					<view class="d-flex a-center j-center border-right" style="width: 70rpx;height: 70rpx;">
						<image src="../../static/icon/calendar.png" style="width: 42rpx;height: 42rpx;"></image>
					</view>
					<view class="d-flex a-center j-center font-20" style="width: 210rpx;">{{time_end}}</view>
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
				<text class="font-26">￥{{money}}</text>
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
				showCalendar: false,
				info: {
					startDate: '2019-06-01',
					endDate: '2020-06-01',
					range: true,
					insert: false,
					selected: []
				},
				
				
				index: 0,
				array: [
					{name:'全部'},
					{name: '已支付'}, 
					{name:'申请退款'}, 
					{name:'已退款'}
				],
				status: "",
				dev_name: "全部",
				mer_name: "全部",
				dev_id: "",
				mer_id: "",
				out_money: 0,
				total_money: 0,
				amount: 0,
				money: 0,
				time_start: "2019-07-17",
				time_end: "2020-02-17",
			}
		},
		onShow() {
			try {
				// earn-search-device 部分
				const all = uni.getStorageSync('dev_allname')
				if(all) {
					this.dev_name ="全部"
					this.dev_id = uni.getStorageSync('dev_all')
					this.__init()
					uni.removeStorageSync('dev_allname');
					uni.removeStorageSync('dev_all');
				}
			    const value = uni.getStorageSync('dev_class');
			    if (value) {
					console.log(value);
					this.dev_name = value.device_id;
					this.dev_id = value.device_id
					console.log('this.dev_id', this.dev_id);
					this.__init()
					uni.removeStorageSync('dev_class');
					uni.removeStorageSync('dev_name');
			    }
				// earn-search-merchant 部分
				const all_mer = uni.getStorageSync('dev_allname_mer')
				if(all_mer) {
					this.mer_name ="全部"
					this.mer_id = uni.getStorageSync('dev_all_mer')
					this.__init()
					uni.removeStorageSync('dev_allname_mer');
					uni.removeStorageSync('dev_all_mer');
				}
				const value_mer = uni.getStorageSync('dev_class_mer');
				if (value_mer) {
					console.log('value_mer', value_mer);
					// this.mer_name = "ID:`${value_mer.merchant_id}`";
					this.mer_name = value_mer.merchant_id;
					this.mer_id = value_mer.merchant_id
					console.log('this.mer_id', this.mer_id);
					this.__init()
					uni.removeStorageSync('dev_class_mer');
					uni.removeStorageSync('dev_name_mer');
				}
			} catch (e) {
			    console.log('catch error!!', e);
			}
			
		},
		onLoad() {
			this.__init()
		},
		methods: {
			open_one() {
				console.log('open_one');
				this.$refs.calendar_one.open()
			},
			open_two() {
				console.log('open_two');
				this.$refs.calendar_two.open()
			},
			confirm_one(e) {
				console.log('confirm open_one 返回:', e)
				this.time_start = e.fulldate
				this.__init()
			},
			confirm_two(e) {
				console.log('confirm open_two 返回:', e)
				this.time_end = e.fulldate
				this.__init()
			},
			bindPickerChange(e) {
				console.log('---' + e)
				console.log('---', e.detail.value);
				this.index = e.detail.value // value为序号0 1 2 3 
				this.status = e.detail.value
				if(e.detail.value == 3) {
					this.status = -1
				}
				this.__init()
			},
			async __init() {
				this.$H.post("/agent/", {
					user_id: "100003",
					token: "dXQyMDIwMDMyMzExMjM0OTMzNzM3ODAz",
					opt: "agent_device_statistics",
					/* slimit: 0, //始值
					elimit: 5, //数量 */
					order_status: this.status, //订单状态  空为全部  1为已支付 2为申请退款  -1已退款
					device_id: this.dev_id, // 设备ID
					merchant_id: this.mer_id,   //商户ID
					start_time: this.time_start, //开始日期 如：2019-07-17
					end_time: this.time_end, //结束日期 如：2020-02-17
				}).then((res) => {
					console.log('123445656',this.time_start, this.time_end);
					let out = res.count
					// console.log(out);
					this.out_money = 0
					for(let i=0; i<out.length; i++) {
						this.out_money += (parseFloat(out[i].sum_money))
						this.amount += parseFloat(out[i].count_num)
					}
					console.log('out_money', this.out_money);
					this.total_money = this.out_money.toFixed(2)
					this.money = (this.total_money / this.amount).toFixed(2)
				}).catch(() => {
					console.log("catch error!!");
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
