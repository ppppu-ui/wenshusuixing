<template>
  <view class="page">
    <view class="nav nav-center">发现</view>
    <view class="search">
      <input type="text" placeholder="搜索目的地/景点/玩法" />
    </view>
    <view class="home-banner" @click="go('aiTrip')">
      <text>AI智能定制行程</text>
      <text class="banner-desc">预算·兴趣·时间 → 一键生成最优方案</text>
    </view>
    <view class="home-func">
      <view class="home-func-item" style="color:#2196F3" @click="go('service')">
        <text>💬 文旅服务</text>
      </view>
      <view class="home-func-item" style="color:#FF9800" @click="go('checkin')">
        <text>📍 打卡任务</text>
      </view>
      <view class="home-func-item" style="color:#4CAF50" @click="go('darenTrip')">
        <text>🌟 达人严选</text>
      </view>
    </view>
    <view class="section-title">
      <text>达人严选行程</text>
      <text class="section-more" @click="go('darenTrip')">更多</text>
    </view>
    <view class="card" @click="go('tripDetail')">
      <view class="card-title">西安3日非遗文化游</view>
      <view class="card-desc">达人认证 | 兵马俑+古城墙+非遗体验 | 人均800元</view>
      <view class="tag tag-blue">达人预审</view>
      <view class="tag">文化游</view>
    </view>
    <view class="card" @click="go('tripDetail')">
      <view class="card-title">成都2日美食休闲游</view>
      <view class="card-desc">达人认证 | 宽窄巷子+锦里+本地火锅 | 人均600元</view>
      <view class="tag tag-blue">达人预审</view>
      <view class="tag">美食游</view>
    </view>
    <view class="section-title">
      <text>热门打卡点</text>
      <text class="section-more" @click="go('checkin')">更多</text>
    </view>
    <view class="card" @click="go('checkinDetail')">
      <view class="card-title">秦始皇兵马俑博物馆</view>
      <view class="card-desc">打卡领兵马俑数字藏品 | 西安市临潼区</view>
      <view class="tag tag-orange">非遗打卡</view>
      <view class="tag">领藏品</view>
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
    case 'service':
      uni.switchTab({ url: '/pages/service/index' });
      break;
    case 'checkin':
      uni.navigateTo({ url: '/pages/checkin/index' });
      break;
    case 'darenTrip':
      uni.navigateTo({ url: '/pages/daren-trip/index' });
      break;
    case 'tripDetail':
      uni.navigateTo({ url: '/pages/trip/detail' });
      break;
    case 'checkinDetail':
      uni.navigateTo({ url: '/pages/checkin/detail' });
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

.home-banner {
  margin: 16rpx;
  height: 150rpx;
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  border-radius: 16rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22rpx;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}

.home-banner::after {
  content: "☁️";
  position: absolute;
  right: 20rpx;
  top: 20rpx;
  font-size: 24rpx;
  opacity: 0.4;
}

.home-banner:active {
  transform: scale(0.985);
}

.banner-desc {
  font-size: 14rpx;
  font-weight: 400;
  margin-top: 8rpx;
  opacity: 0.9;
}

.home-func {
  display: flex;
  margin: 0 16rpx;
  gap: 12rpx;
}

.home-func-item {
  flex: 1;
  height: 88rpx;
  background: #fff;
  border-radius: 12rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  font-size: 14rpx;
  color: #212529;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  border: 1rpx solid #E9ECEF;
  gap: 8rpx;
}

.home-func-item:active {
  transform: scale(0.96);
  box-shadow: 0 6rpx 16rpx rgba(0,0,0,0.08);
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
  margin-bottom: 10rpx;
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

.tag-orange {
  background: #FFF3E0;
  color: #F57C00;
}
</style>