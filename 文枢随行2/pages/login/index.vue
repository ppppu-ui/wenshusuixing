<template>
  <view class="login">
    <view class="login-logo">随行文旅</view>
    <view class="login-desc">智慧旅行 · 覆盖旅行前/中/后全流程</view>
    <view class="btn btn-primary" @click="go('home')">微信一键授权登录</view>
    <view class="login-daren" @click="go('darenLogin')">本地达人/管理员请点击此处登录</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const go = (page) => {
  switch (page) {
    case 'home':
      uni.switchTab({ url: '/pages/index/index' });
      break;
    case 'darenLogin':
      // 本地达人登录页面，暂时跳转到发现页
      uni.switchTab({ url: '/pages/index/index' });
      break;
    default:
      break;
  }
};
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40rpx;
  background: #fff;
}

.login-logo {
  font-size: 36rpx;
  font-weight: 700;
  color: #4CAF50;
  margin-bottom: 12rpx;
}

.login-desc {
  font-size: 14rpx;
  color: #ADB5BD;
  margin-bottom: 40rpx;
}

.login-daren {
  font-size: 14rpx;
  color: #495057;
  margin-top: 20rpx;
  cursor: pointer;
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