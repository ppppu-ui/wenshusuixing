<template>
  <view class="page">
    <view class="nav nav-center">行程</view>
    <view class="search">
      <input type="text" placeholder="搜索我的行程" />
    </view>
    <view class="section-title">
      <text>我的行程</text>
      <text class="section-more" @click="go('aiTrip')">+ 新建行程</text>
    </view>
    <view class="card" @click="go('tripDetail')">
      <view class="card-title">西安3日非遗文化游</view>
      <view class="card-desc">2026-05-01 至 2026-05-03 | 3天2晚 | 人均800元</view>
      <view class="trip-status">
        <view class="tag tag-blue">进行中</view>
        <view class="trip-progress">
          <view class="trip-progress-bar" style="width: 33%"></view>
        </view>
        <text class="trip-progress-text">1/3 天</text>
      </view>
    </view>
    <view class="card" @click="go('tripDetail')">
      <view class="card-title">成都2日美食休闲游</view>
      <view class="card-desc">2026-04-15 至 2026-04-16 | 2天1晚 | 人均600元</view>
      <view class="trip-status">
        <view class="tag tag-green">已完成</view>
        <view class="trip-progress">
          <view class="trip-progress-bar" style="width: 100%"></view>
        </view>
        <text class="trip-progress-text">2/2 天</text>
      </view>
    </view>
    <view class="section-title">
      <text>收藏的行程</text>
    </view>
    <view class="card" @click="go('tripDetail')">
      <view class="card-title">北京5日经典游</view>
      <view class="card-desc">故宫+长城+颐和园 | 5天4晚 | 人均1200元</view>
      <view class="trip-status">
        <view class="tag tag-gray">未开始</view>
      </view>
    </view>
    <view class="card" @click="go('tripDetail')">
      <view class="card-title">杭州3日西湖游</view>
      <view class="card-desc">西湖+灵隐寺+宋城 | 3天2晚 | 人均900元</view>
      <view class="trip-status">
        <view class="tag tag-gray">未开始</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

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

.section-more {
  font-size: 13rpx;
  color: #4CAF50;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 4rpx;
}

.section-more::after {
  content: "→";
  font-size: 12rpx;
}

.section-more:active {
  opacity: 0.7;
  transform: translateX(2rpx);
}

.card {
  background: #fff;
  border-radius: 12rpx;
  padding: 20rpx 16rpx;
  margin: 0 16rpx 12rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1rpx solid #E9ECEF;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 3rpx;
  height: 100%;
  background: #4CAF50;
  opacity: 0.6;
}

.card:active {
  transform: translateY(-2rpx);
  box-shadow: 0 8rpx 20rpx rgba(0,0,0,0.08);
  border-color: #DEE2E6;
}

.card-title {
  font-size: 16rpx;
  font-weight: 700;
  color: #212529;
  margin-bottom: 8rpx;
}

.card-desc {
  font-size: 13rpx;
  color: #495057;
  line-height: 1.6;
  margin-bottom: 12rpx;
}

.trip-status {
  display: flex;
  align-items: center;
  gap: 12rpx;
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

.tag-green {
  background: #E8F5E9;
  color: #2E7D32;
}

.tag-gray {
  background: #E9ECEF;
  color: #6C757D;
}

.trip-progress {
  flex: 1;
  height: 6rpx;
  background: #E9ECEF;
  border-radius: 3rpx;
  overflow: hidden;
}

.trip-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  border-radius: 3rpx;
  transition: width 0.3s ease;
}

.trip-progress-text {
  font-size: 12rpx;
  color: #ADB5BD;
  min-width: 80rpx;
  text-align: right;
}
</style>