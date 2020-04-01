
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/user/user","pages/earn/earn","pages/shops-earn/shops-earn","pages/shops/shops","pages/staff/staff","pages/staff-add/staff-add","pages/staff-remove/staff-remove","pages/device/device","pages/device-order/device-order","pages/deal/deal","pages/deal-order/deal-order","pages/order-check/order-check","pages/order-refund/order-refund","pages/order-detail/order-detail","pages/login/login","pages/device-search/device-search","pages/earn-search-merchant/earn-search-merchant","pages/earn-search-device/earn-search-device","pages/shops-device/shops-device","pages/shops-deal/shops-deal"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"服务商APP","compilerVersion":"2.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"面对面交易(商户服务)1"}},{"path":"/pages/user/user","meta":{},"window":{"navigationBarTitleText":"个人中心2"}},{"path":"/pages/earn/earn","meta":{},"window":{"navigationBarTitleText":"收益统计3"}},{"path":"/pages/shops-earn/shops-earn","meta":{},"window":{"navigationBarTitleText":"商户详情5"}},{"path":"/pages/shops/shops","meta":{},"window":{"navigationBarTitleText":"商户管理6","onReachBottomDistance":60}},{"path":"/pages/staff/staff","meta":{},"window":{"navigationBarTitleText":"员工管理7"}},{"path":"/pages/staff-add/staff-add","meta":{},"window":{"navigationBarTitleText":"添加员工8"}},{"path":"/pages/staff-remove/staff-remove","meta":{},"window":{"navigationBarTitleText":"移除员工9"}},{"path":"/pages/device/device","meta":{},"window":{"navigationBarTitleText":"设备交易统计10"}},{"path":"/pages/device-order/device-order","meta":{},"window":{"navigationBarTitleText":"账单详情11"}},{"path":"/pages/deal/deal","meta":{},"window":{"navigationBarTitleText":"交易流水12(19)"}},{"path":"/pages/deal-order/deal-order","meta":{},"window":{"navigationBarTitleText":"交易流水12"}},{"path":"/pages/order-check/order-check","meta":{},"window":{"navigationBarTitleText":"校正订单14"}},{"path":"/pages/order-refund/order-refund","meta":{},"window":{"navigationBarTitleText":"退单校正16"}},{"path":"/pages/order-detail/order-detail","meta":{},"window":{"navigationBarTitleText":"账单详情17"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录18"}},{"path":"/pages/device-search/device-search","meta":{},"window":{"navigationBarTitleText":"设备列表（20）","onReachBottomDistance":90}},{"path":"/pages/earn-search-merchant/earn-search-merchant","meta":{},"window":{"navigationBarTitleText":"商户搜索（21）"}},{"path":"/pages/earn-search-device/earn-search-device","meta":{},"window":{"navigationBarTitleText":"设备搜索（22）"}},{"path":"/pages/shops-device/shops-device","meta":{},"window":{"navigationBarTitleText":"商户下设备列表（23）"}},{"path":"/pages/shops-deal/shops-deal","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
