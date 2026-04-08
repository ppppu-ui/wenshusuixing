<template>
  <view class="page no-tab">
    <view class="nav">
      <span class="back-btn" @click="back()">←</span>
      <text>景区导航</text>
      <span class="nav-btn" @click="downloadOffline">离线下载</span>
    </view>
    <view class="map-box">
      <text>景区高精度手绘地图</text>
      <view class="map-location">📍</view>
    </view>
    <view class="map-offline">
      <text>📶 已切换至离线导航模式，定位/导航功能正常使用</text>
    </view>
    <view class="map-func">
      <view class="map-func-item" @click="showPOI('卫生间')">🚻 卫生间</view>
      <view class="map-func-item" @click="showPOI('餐厅')">🍜 餐厅</view>
      <view class="map-func-item" @click="showPOI('医疗点')">⚕️ 医疗点</view>
      <view class="map-func-item" @click="showPOI('停车场')">🅿️ 停车场</view>
    </view>
    <view class="section-title">周边景点</view>
    <view class="card">
      <view class="card-title">铜车马展厅</view>
      <view class="card-desc">距离当前位置200米 | 步行3分钟 | 开放中</view>
      <view class="btn btn-secondary" style="margin:8rpx 0 0;padding:6rpx" @click="navigateTo('铜车马展厅')">导航前往</view>
    </view>
    <view class="card">
      <view class="card-title">兵马俑三号坑</view>
      <view class="card-desc">距离当前位置500米 | 步行7分钟 | 开放中</view>
      <view class="btn btn-secondary" style="margin:8rpx 0 0;padding:6rpx" @click="navigateTo('兵马俑三号坑')">导航前往</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const back = () => {
  uni.navigateBack();
};

const downloadOffline = () => {
  // 离线下载功能，暂时提示
  uni.showToast({ title: '离线下载功能开发中', icon: 'none' });
};

const showPOI = (type) => {
  // 显示POI功能，暂时提示
  uni.showToast({ title: `显示${type}功能开发中`, icon: 'none' });
};

const navigateTo = (destination) => {
  // 导航前往功能，暂时提示
  uni.showToast({ title: `导航到${destination}功能开发中`, icon: 'none' });
};
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
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

.map-box {
  width: 100%;
  height: 320rpx;
  background: linear-gradient(180deg, #E9ECEF, #DEE2E6);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ADB5BD;
  font-size: 16rpx;
}

.map-location {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36rpx;
  color: #E53935;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.15);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
}

.map-offline {
  background: #E3F2FD;
  color: #1976D2;
  padding: 10rpx 16rpx;
  font-size: 13rpx;
  text-align: center;
  border-bottom: 1rpx solid #BBDEFB;
}

.map-func {
  display: flex;
  background: #fff;
  padding: 16rpx;
  border-bottom: 1rpx solid #E9ECEF;
  gap: 12rpx;
}

.map-func-item {
  flex: 1;
  padding: 12rpx;
  background: #F5F7FA;
  border-radius: 8rpx;
  text-align: center;
  font-size: 13rpx;
  color: #495057;
  cursor: pointer;
  transition: all 0.2s;
  border: 1rpx solid #E9ECEF;
}

.map-func-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
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

.btn-secondary {
  background: transparent;
  color: #495057;
  border: 1rpx solid #DEE2E6;
}

.btn-secondary:active {
  background: #F8F9FA;
  border-color: #ADB5BD;
}
</style>