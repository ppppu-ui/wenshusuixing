<template>
  <view class="page no-tab">
    <view class="nav">
      <span class="back-btn" @click="back()">←</span>
      <text>AI行程结果</text>
      <span class="nav-btn" @click="go('aiTrip')">重新生成</span>
    </view>
    <view class="trip-detail-header">
      <view class="trip-detail-title">西安3日非遗文化游</view>
      <view class="trip-detail-info">
        <text>人均预算：800元</text>
        <text>AI生成：2026-04-09</text>
        <text>适合人群：文化爱好者</text>
      </view>
    </view>
    <view class="trip-budget">
      <view class="trip-budget-title">预估总预算</view>
      <view class="trip-budget-num">¥800.00</view>
      <view class="trip-budget-progress">
        <view class="trip-budget-bar"></view>
      </view>
      <view class="card-desc" style="margin-top:8rpx">门票30% | 餐饮25% | 交通20% | 其他25%</view>
    </view>
    <view class="trip-day">
      <view class="trip-day-title">
        Day1 兵马俑 → 华清宫
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-time">09:00-12:00</span>
          <span>秦始皇兵马俑博物馆</span>
        </view>
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-time">13:00-15:00</span>
          <span>华清宫</span>
        </view>
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-time">18:00-19:30</span>
          <span>回民街美食</span>
        </view>
      </view>
    </view>
    <view class="trip-day">
      <view class="trip-day-title">Day2 古城墙 → 大雁塔</view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-time">09:00-11:00</span>
          <span>西安古城墙骑行</span>
        </view>
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-time">14:00-17:00</span>
          <span>大雁塔+大唐不夜城</span>
        </view>
      </view>
    </view>
    <view class="trip-day">
      <view class="trip-day-title">Day3 陕西历史博物馆 → 小雁塔</view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-time">09:00-12:00</span>
          <span>陕西历史博物馆</span>
        </view>
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-time">14:00-16:00</span>
          <span>小雁塔</span>
        </view>
      </view>
    </view>
    <view class="btn btn-primary" @click="go('tripDetail')">保存到我的行程</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const back = () => {
  uni.navigateBack();
};

const go = (page) => {
  switch (page) {
    case 'aiTrip':
      uni.navigateTo({ url: '/pages/ai-trip/index' });
      break;
    case 'tripDetail':
      uni.navigateTo({ url: '/pages/trip/detail' });
      break;
    default:
      break;
  }
};
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
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

.nav-btn {
  font-size: 14rpx;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.back-btn {
  font-size: 20rpx;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  width: 32rpx;
  height: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.back-btn:active {
  opacity: 0.7;
  background: rgba(255,255,255,0.15);
}

.trip-detail-header {
  padding: 20rpx 16rpx;
  background: linear-gradient(180deg, #E8F5E9, #F1F8E9);
  border-radius: 0 0 20rpx 20rpx;
}

.trip-detail-title {
  font-size: 20rpx;
  font-weight: 700;
  color: #212529;
  margin-bottom: 10rpx;
}

.trip-detail-info {
  font-size: 13rpx;
  color: #495057;
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;
}

.trip-budget {
  margin: 16rpx;
  padding: 20rpx;
  background: #fff;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  border: 1rpx solid #E9ECEF;
  position: relative;
}

.trip-budget::before {
  content: "💰";
  position: absolute;
  right: 20rpx;
  top: 20rpx;
  font-size: 20rpx;
  opacity: 0.3;
}

.trip-budget-title {
  font-size: 15rpx;
  font-weight: 600;
  color: #212529;
  margin-bottom: 10rpx;
}

.trip-budget-num {
  font-size: 26rpx;
  font-weight: 700;
  color: #4CAF50;
  margin-bottom: 12rpx;
}

.trip-budget-progress {
  height: 7rpx;
  background: #E9ECEF;
  border-radius: 4rpx;
  overflow: hidden;
}

.trip-budget-bar {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  width: 60%;
  border-radius: 4rpx;
}

.card-desc {
  font-size: 13rpx;
  color: #495057;
  line-height: 1.6;
}

.trip-day {
  margin: 0 16rpx 12rpx;
  background: #fff;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  border: 1rpx solid #E9ECEF;
  overflow: hidden;
}

.trip-day-title {
  padding: 14rpx 16rpx;
  font-size: 16rpx;
  font-weight: 700;
  color: #212529;
  border-bottom: 1rpx solid #F1F3F5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F8F9FA;
}

.trip-day-item {
  padding: 14rpx 16rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1rpx solid #F1F3F5;
  transition: background 0.2s;
}

.trip-day-item:nth-child(even) {
  background: #FDFDFD;
}

.trip-day-item:last-child {
  border-bottom: none;
}

.trip-day-left {
  display: flex;
  align-items: center;
  gap: 10rpx;
}

.trip-day-time {
  font-size: 13rpx;
  color: #ADB5BD;
  min-width: 120rpx;
}

.btn {
  display: block;
  width: calc(100% - 32rpx);
  margin: 16rpx auto;
  padding: 14rpx;
  text-align: center;
  border-radius: 12rpx;
  font-size: 15rpx;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  border: none;
  line-height: 1.3;
}

.btn:active {
  transform: scale(0.98);
  opacity: 0.92;
}

.btn-primary {
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  color: #fff;
  box-shadow: 0 4rpx 12rpx rgba(76,175,80,0.2);
}
</style>