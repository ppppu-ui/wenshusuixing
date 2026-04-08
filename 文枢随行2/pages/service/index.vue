<template>
  <view class="page">
    <view class="nav nav-center">文旅服务</view>
    <view class="search">
      <input type="text" placeholder="搜索问题/服务/目的地" />
    </view>
    <view class="service-urgent">
      <view class="service-urgent-item" @click="go('help')">
        <view class="service-urgent-icon service-urgent-icon-sos">🆘</view>
        <view class="service-urgent-text">
          <view class="service-urgent-title">紧急求助</view>
          <view class="service-urgent-desc">医疗/走失/遗失求助</view>
        </view>
      </view>
      <view class="service-urgent-item" @click="go('guide')">
        <view class="service-urgent-icon service-urgent-icon-guide">🧭</view>
        <view class="service-urgent-text">
          <view class="service-urgent-title">本地向导</view>
          <view class="service-urgent-desc">呼叫附近专业向导</view>
        </view>
      </view>
    </view>
    <view class="qa-ask-box" @click="go('qaAsk')">
      <span class="qa-ask-text">你有什么旅行问题？问问本地人～</span>
    </view>
    <view class="section-title">热门问答</view>
    <view class="qa-item" @click="go('qaDetail')">
      <view class="qa-item-header">
        <span class="qa-item-user">游客 | 2小时前</span>
        <span class="tag tag-blue">西安</span>
      </view>
      <view class="qa-item-title">西安兵马俑需要提前预约吗？现场能买票吗？</view>
      <view class="qa-item-answerer">本地达人「西安老陕」解答</view>
      <view class="qa-item-answer">需要提前1-3天在官方公众号预约，现场无线下票口，节假日建议更早预约，避免没票～</view>
    </view>
    <view class="qa-item" @click="go('qaDetail')">
      <view class="qa-item-header">
        <span class="qa-item-user">游客 | 5小时前</span>
        <span class="tag tag-blue">成都</span>
      </view>
      <view class="qa-item-title">成都本地人推荐的火锅店，不要网红店！</view>
      <view class="qa-item-answerer">本地达人「成都吃货」解答</view>
      <view class="qa-item-answer">推荐建设路的「老灶火锅」和锦里附近的「巷巷火锅」，锅底醇厚，菜品新鲜，本地人常去～</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const go = (page) => {
  switch (page) {
    case 'help':
      // 紧急求助页面，暂时提示
      uni.showToast({ title: '紧急求助功能开发中', icon: 'none' });
      break;
    case 'guide':
      // 本地向导页面，暂时提示
      uni.showToast({ title: '本地向导功能开发中', icon: 'none' });
      break;
    case 'qaAsk':
      uni.navigateTo({ url: '/pages/service/qa-ask/index' });
      break;
    case 'qaDetail':
      // 问答详情页面，暂时提示
      uni.showToast({ title: '问答详情功能开发中', icon: 'none' });
      break;
    default:
      break;
  }
};
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: calc(100% - 56rpx);
  overflow-y: auto;
  padding-bottom: 20rpx;
  background: #F8F9FA;
}

.nav {
  height: 48rpx;
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16rpx;
  font-size: 18rpx;
  font-weight: 700;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.06);
  border: none;
}

.nav-center {
  justify-content: center;
}

.search {
  margin: 12rpx 16rpx;
  height: 44rpx;
  background: #F5F7FA;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  padding: 0 18rpx;
  border: 1rpx solid #E9ECEF;
  transition: all 0.2s;
}

.search:focus-within {
  border-color: #4CAF50;
  background: #fff;
  box-shadow: 0 0 0 3rpx rgba(76,175,80,0.1);
}

.search::before {
  content: "🔍";
  margin-right: 10rpx;
  color: #ADB5BD;
  font-size: 16rpx;
}

.search input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
  font-size: 15rpx;
  color: #495057;
}

.search input::placeholder {
  color: #ADB5BD;
  transition: opacity 0.2s;
}

.search input:focus::placeholder {
  opacity: 0.5;
}

.service-urgent {
  display: flex;
  margin: 16rpx;
  gap: 12rpx;
}

.service-urgent-item {
  flex: 1;
  padding: 22rpx 16rpx;
  background: #fff;
  border-radius: 16rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12rpx;
  transition: all 0.25s;
  border: 1rpx solid #E9ECEF;
}

.service-urgent-item:active {
  transform: scale(0.97);
}

.service-urgent-icon {
  width: 44rpx;
  height: 44rpx;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20rpx;
  color: #fff;
}

.service-urgent-icon-sos {
  background: linear-gradient(180deg, #E53935, #D32F2F);
}

.service-urgent-icon-guide {
  background: linear-gradient(180deg, #FFB74D, #FF9800);
}

.service-urgent-text {
  flex: 1;
}

.service-urgent-title {
  font-size: 16rpx;
  font-weight: 700;
  color: #212529;
  margin-bottom: 6rpx;
}

.service-urgent-desc {
  font-size: 12rpx;
  color: #495057;
}

.qa-ask-box {
  margin: 16rpx;
  height: 52rpx;
  background: #fff;
  border-radius: 26rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  cursor: pointer;
  transition: all 0.25s;
  border: 1rpx solid #E9ECEF;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.03);
}

.qa-ask-box:active {
  background: #F8F9FA;
  transform: scale(0.98);
}

.qa-ask-box::before {
  content: "🙋";
  margin-right: 12rpx;
  font-size: 18rpx;
  color: #36BFFA;
}

.qa-ask-text {
  font-size: 15rpx;
  color: #ADB5BD;
}

.section-title {
  margin: 20rpx 16rpx 12rpx;
  font-size: 17rpx;
  font-weight: 700;
  color: #212529;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 12rpx;
}

.section-title::before {
  content: "";
  position: absolute;
  left: 0;
  width: 4rpx;
  height: 16rpx;
  background: #4CAF50;
  border-radius: 2rpx;
}

.qa-item {
  background: #fff;
  border-radius: 12rpx;
  padding: 18rpx 16rpx;
  margin: 0 16rpx 12rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  cursor: pointer;
  transition: all 0.25s;
  border: 1rpx solid #E9ECEF;
}

.qa-item:active {
  transform: translateY(-2rpx);
  box-shadow: 0 8rpx 20rpx rgba(0,0,0,0.08);
}

.qa-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rpx;
}

.qa-item-user {
  font-size: 12rpx;
  color: #ADB5BD;
}

.qa-item-title {
  font-size: 16rpx;
  font-weight: 600;
  color: #212529;
  margin-bottom: 10rpx;
}

.qa-item-answerer {
  font-size: 13rpx;
  color: #36BFFA;
  font-weight: 600;
  margin-bottom: 6rpx;
  display: flex;
  align-items: center;
  gap: 4rpx;
}

.qa-item-answerer::after {
  content: "✅";
  font-size: 10rpx;
}

.qa-item-answer {
  font-size: 14rpx;
  color: #495057;
  background: #F5F7FA;
  padding: 12rpx;
  border-radius: 8rpx;
  margin-top: 8rpx;
  line-height: 1.6;
  border-left: 3rpx solid #36BFFA;
}

.tag {
  display: inline-block;
  padding: 3rpx 9rpx;
  background: #E8F5E9;
  color: #2E7D32;
  font-size: 11rpx;
  border-radius: 12rpx;
  margin-right: 6rpx;
  margin-bottom: 6rpx;
  font-weight: 500;
}

.tag-blue {
  background: #E3F2FD;
  color: #1976D2;
}
</style>