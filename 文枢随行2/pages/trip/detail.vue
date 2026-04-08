<template>
  <view class="page">
    <view class="nav">
      <span class="back-btn" @click="back()">←</span>
      <text>行程详情</text>
      <span class="nav-btn" @click="go('map')">景区导航</span>
    </view>
    <view class="trip-detail-header">
      <view class="trip-detail-title">西安3日非遗文化游</view>
      <view class="trip-detail-info">
        <text>人均预算：800元</text>
        <text>达人预审：未审核</text>
        <text>更新时间：2026-0X-0X</text>
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
        <span class="nav-btn" style="font-size:12rpx" @click="go('checklist')">生成Checklist</span>
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-drag">☰</span>
          <span>秦始皇兵马俑博物馆 | 3小时</span>
        </view>
        <span class="trip-day-del" @click="deleteItem">×</span>
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-drag">☰</span>
          <span>华清宫 | 2小时</span>
        </view>
        <span class="trip-day-del" @click="deleteItem">×</span>
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-drag">☰</span>
          <span>回民街美食 | 1.5小时</span>
        </view>
        <span class="trip-day-del" @click="deleteItem">×</span>
      </view>
    </view>
    <view class="trip-day">
      <view class="trip-day-title">Day2 古城墙 → 大雁塔</view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-drag">☰</span>
          <span>西安古城墙骑行 | 2小时</span>
        </view>
        <span class="trip-day-del" @click="deleteItem">×</span>
      </view>
      <view class="trip-day-item">
        <view class="trip-day-left">
          <span class="trip-day-drag">☰</span>
          <span>大雁塔+大唐不夜城 | 3小时</span>
        </view>
        <span class="trip-day-del" @click="deleteItem">×</span>
      </view>
    </view>
    <view class="btn btn-primary" style="width:100%;margin:0;border-radius:0" @click="addItem">+ 添加景点/活动</view>
    <view class="btn btn-secondary" @click="go('darenAudit')">提交本地达人审核</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const back = () => {
  uni.navigateBack();
};

const go = (page) => {
  switch (page) {
    case 'map':
      uni.navigateTo({ url: '/pages/navigation/index' });
      break;
    case 'checklist':
      // 生成Checklist功能，暂时提示
      uni.showToast({ title: '生成Checklist功能开发中', icon: 'none' });
      break;
    case 'darenAudit':
      // 提交本地达人审核，暂时提示
      uni.showToast({ title: '提交审核功能开发中', icon: 'none' });
      break;
    default:
      break;
  }
};

const deleteItem = () => {
  // 删除行程项功能，暂时提示
  uni.showToast({ title: '删除功能开发中', icon: 'none' });
};

const addItem = () => {
  // 添加景点/活动功能，暂时提示
  uni.showToast({ title: '添加功能开发中', icon: 'none' });
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

.trip-day-drag {
  color: #ADB5BD;
  font-size: 18rpx;
}

.trip-day-del {
  color: #E53935;
  font-size: 18rpx;
  cursor: pointer;
  transition: all 0.2s;
  width: 28rpx;
  height: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.trip-day-del:active {
  background: #FFEBEE;
  transform: scale(1.1);
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