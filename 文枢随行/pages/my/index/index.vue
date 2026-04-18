<template>
  <view class="page">
    <view class="user-info">
      <view class="user-avatar">
        <image
          class="user-avatar-img"
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20portrait%20friendly%20smile&image_size=square"
          mode="aspectFill"
        />
      </view>
      <view class="user-details">
        <view class="user-name">旅行达人</view>
        <view class="user-id">ID: 123456789</view>
      </view>
    </view>

    <view class="user-stats">
      <view class="stat-item">
        <view class="stat-value">12</view>
        <view class="stat-label">定制行程</view>
      </view>
      <view class="stat-item">
        <view class="stat-value">35</view>
        <view class="stat-label">打卡天数</view>
      </view>
      <view class="stat-item">
        <view class="stat-value">128</view>
        <view class="stat-label">获赞数</view>
      </view>
    </view>

    <view class="menu-section">
      <view class="menu-item" @click="goToMyTrips">
        <text class="menu-icon">✈️</text>
        <text class="menu-text">我的行程</text>
        <text class="menu-arrow">→</text>
      </view>
      <view class="menu-item" @click="goToMyCheckins">
        <text class="menu-icon">📅</text>
        <text class="menu-text">我的打卡</text>
        <text class="menu-arrow">→</text>
      </view>
      <view class="menu-item" @click="goToMyQAs">
        <text class="menu-icon">💬</text>
        <text class="menu-text">我的问答</text>
        <text class="menu-arrow">→</text>
      </view>
      <view class="menu-item" @click="goToMyFavorites">
        <text class="menu-icon">❤️</text>
        <text class="menu-text">我的收藏</text>
        <text class="menu-arrow">→</text>
      </view>
      <view class="menu-item" @click="goToSettings">
        <text class="menu-icon">⚙️</text>
        <text class="menu-text">设置</text>
        <text class="menu-arrow">→</text>
      </view>
    </view>

    <view class="logout-btn" @click="logout">退出登录</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToMyTrips() {
      uni.switchTab({
        url: '/pages/trip/index/index'
      });
    },
    goToMyCheckins() {
      uni.navigateTo({
        url: '/pages/checkin/index/index'
      });
    },
    goToMyQAs() {
      uni.switchTab({
        url: '/pages/service/index/index'
      });
    },
    goToMyFavorites() {
      uni.navigateTo({
        url: '/pages/daren-trip/index/index'
      });
    },
    goToSettings() {
      uni.showToast({
        title: '设置功能开发中',
        icon: 'none'
      });
    },
    logout() {
      uni.showModal({
        title: '退出登录',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            uni.reLaunch({
              url: '/pages/login/index/index'
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background: #F8F9FA;
  padding-bottom: 32px;
}

.user-info {
  background: linear-gradient(135deg, #4CAF50, #66BB6A);
  padding: 32px 24px 48px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 0 0 32px 32px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.user-avatar .user-avatar-img {
  width: 100%;
  height: 100%;
}

.user-details {
  flex: 1;
  color: #fff;
}

.user-name {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
}

.user-id {
  font-size: 14px;
  opacity: 0.9;
}

.user-stats {
  display: flex;
  background: #fff;
  margin: -24px 16px 24px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  justify-content: space-around;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
}

.stat-label {
  font-size: 12px;
  color: #6C757D;
  font-weight: 500;
}

.menu-section {
  background: #fff;
  margin: 0 16px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #F1F3F5;
  transition: background 0.2s;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:active {
  background: #F8F9FA;
}

.menu-icon {
  font-size: 20px;
  margin-right: 16px;
  width: 24px;
  text-align: center;
}

.menu-text {
  flex: 1;
  font-size: 16px;
  color: #212529;
  font-weight: 500;
}

.menu-arrow {
  font-size: 14px;
  color: #ADB5BD;
  transition: transform 0.2s;
}

.menu-item:active .menu-arrow {
  transform: translateX(4px);
}

.logout-btn {
  margin: 0 16px;
  padding: 16px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #E53935;
  border: 1px solid #FFCDD2;
}

.logout-btn:active {
  background: #FFEBEE;
  transform: scale(0.98);
}
</style>
