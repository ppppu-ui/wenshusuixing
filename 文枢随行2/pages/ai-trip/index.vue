<template>
  <view class="page no-tab">
    <view class="nav">
      <span class="back-btn" @click="back()">←</span>
      <text>AI行程定制</text>
      <span class="nav-btn"></span>
    </view>
    <view class="form-item">
      <label class="form-label">目的地 <span style="color:#F44336">*</span></label>
      <input type="text" class="form-input" placeholder="请输入想去的城市/景点" />
    </view>
    <view class="form-item">
      <label class="form-label">出行天数 <span style="color:#F44336">*</span></label>
      <select class="form-select">
        <option>1天</option>
        <option selected>3天</option>
        <option>5天</option>
        <option>7天及以上</option>
      </select>
    </view>
    <view class="form-item">
      <label class="form-label">人均预算 <span style="color:#F44336">*</span></label>
      <input type="text" class="form-input" placeholder="请输入预算（元），如800" />
    </view>
    <view class="form-item">
      <label class="form-label">出行兴趣 <span style="color:#F44336">*</span>（最多选3个）</label>
      <view class="ai-tag-box">
        <view class="ai-tag active" @click="toggleTag('文化')">文化</view>
        <view class="ai-tag" @click="toggleTag('美食')">美食</view>
        <view class="ai-tag" @click="toggleTag('自然')">自然</view>
        <view class="ai-tag" @click="toggleTag('小众')">小众</view>
        <view class="ai-tag" @click="toggleTag('亲子')">亲子</view>
        <view class="ai-tag" @click="toggleTag('徒步')">徒步</view>
      </view>
    </view>
    <view class="form-item">
      <label class="form-label">必去景点（选填）</label>
      <input type="text" class="form-input" placeholder="请输入必去景点，多个用逗号分隔" />
    </view>
    <view class="btn btn-primary" @click="go('tripDetail')">生成最优行程方案</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const selectedTags = ref(['文化']);

const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag);
  if (index > -1) {
    selectedTags.value.splice(index, 1);
  } else if (selectedTags.value.length < 3) {
    selectedTags.value.push(tag);
  }
};

const back = () => {
  uni.navigateBack();
};

const go = (page) => {
  switch (page) {
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

.no-tab .page {
  height: 100%;
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

.form-item {
  margin: 0 16rpx 24rpx;
}

.form-label {
  display: block;
  font-size: 15rpx;
  font-weight: 600;
  color: #212529;
  margin-bottom: 10rpx;
}

.form-input, .form-select {
  width: 100%;
  padding: 13rpx 18rpx 13rpx 44rpx;
  border: 1rpx solid #DEE2E6;
  border-radius: 10rpx;
  font-size: 15rpx;
  color: #495057;
  transition: all 0.25s;
  background: #fff;
  position: relative;
}

.form-input:focus, .form-select:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 0 3rpx rgba(76,175,80,0.12);
  outline: none;
}

.form-input::placeholder {
  color: #ADB5BD;
}

.ai-tag-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
}

.ai-tag {
  padding: 8rpx 16rpx;
  background: #E9ECEF;
  color: #495057;
  font-size: 14rpx;
  border-radius: 16rpx;
  cursor: pointer;
  transition: all 0.2s;
}

.ai-tag.active {
  background: #4CAF50;
  color: #fff;
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