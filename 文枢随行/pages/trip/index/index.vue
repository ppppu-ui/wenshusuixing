<template>
  <view class="page">
    <!-- 顶部导航栏 -->
    <view class="header-nav">
      <view class="nav-bg">
        <view class="mountain-decoration"></view>
      </view>
      <view class="nav-content">
        <view class="nav-title">我的行程</view>
        <view class="nav-action" @click="createNewTrip">
          <text class="action-icon">+</text>
          <text class="action-text">新建</text>
        </view>
      </view>
    </view>

    <!-- 行程列表 -->
    <view class="trip-list">
      <!-- 空状态 -->
      <view class="empty-state" v-if="tripList.length === 0">
        <view class="empty-icon">🗺️</view>
        <view class="empty-title">还没有行程</view>
        <view class="empty-desc">点击右上角"新建"或去AI定制您的专属行程</view>
        <view class="empty-btn" @click="goToAI">
          <text>智能定制行程</text>
        </view>
      </view>

      <!-- 行程卡片列表 - 左滑删除 -->
      <view 
        v-for="(trip, index) in tripList" 
        :key="trip.id"
        class="swipe-item"
        :data-index="index"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
      >
        <!-- 删除按钮 -->
        <view class="delete-btn" @click="showDeleteConfirm(trip.id)">
          <text class="delete-icon">🗑️</text>
          <text class="delete-text">删除</text>
        </view>
        
        <!-- 行程卡片 -->
        <view 
          class="trip-card"
          :class="{ 'is-open': openedIndex === index }"
          :style="{ transform: openedIndex === index ? 'translateX(-80px)' : 'translateX(0)' }"
          @click="goToTripDetail(trip.id)"
        >
          <view class="card-bg"></view>
          <view class="card-content">
            <view class="trip-header">
              <view class="trip-title">{{ trip.title }}</view>
              <view class="trip-status" :class="trip.status">{{ trip.statusText }}</view>
            </view>
            <view class="trip-info">
              <view class="info-item">
                <text class="info-icon">📅</text>
                <text class="info-text">{{ trip.days }}天{{ trip.days - 1 }}晚</text>
              </view>
              <view class="info-item">
                <text class="info-icon">🎯</text>
                <text class="info-text">{{ trip.spots }}个景点</text>
              </view>
              <view class="info-item">
                <text class="info-icon">💰</text>
                <text class="info-text">¥{{ formatNumber(trip.budget) }}</text>
              </view>
            </view>
            <view class="trip-footer">
              <view class="create-time">{{ formatDate(trip.createTime) }}</view>
              <view class="arrow-icon">→</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部留白 -->
    <view class="bottom-space"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tripList: [],
      openedIndex: -1,
      touchStartX: 0,
      touchMoveX: 0
    };
  },
  onShow() {
    this.loadTripList();
    this.openedIndex = -1;
  },
  methods: {
    loadTripList() {
      const savedTrips = uni.getStorageSync('myTrips') || [];
      this.tripList = savedTrips.map(trip => ({
        ...trip,
        status: 'confirmed',
        statusText: '已确认'
      }));
    },
    formatNumber(num) {
      return num.toLocaleString();
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return `${date.getMonth() + 1}月${date.getDate()}日创建`;
    },
    createNewTrip() {
      uni.navigateTo({
        url: '/pages/ai-trip/index/index'
      });
    },
    goToAI() {
      uni.switchTab({
        url: '/pages/index/index'
      });
    },
    goToTripDetail(id) {
      if (this.openedIndex !== -1) {
        this.openedIndex = -1;
        return;
      }
      uni.navigateTo({
        url: `/pages/trip/detail/index?id=${id}`
      });
    },
    touchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    touchMove(e) {
      this.touchMoveX = e.touches[0].clientX;
    },
    touchEnd(e) {
      const index = parseInt(e.currentTarget.dataset.index);
      const diff = this.touchStartX - this.touchMoveX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.openedIndex = index;
        } else {
          this.openedIndex = -1;
        }
      }
    },
    showDeleteConfirm(id) {
      uni.showModal({
        title: '删除行程',
        content: '确定删除该行程吗？',
        confirmColor: '#E74C3C',
        success: (res) => {
          if (res.confirm) {
            this.deleteTrip(id);
          } else {
            this.openedIndex = -1;
          }
        }
      });
    },
    deleteTrip(id) {
      let savedTrips = uni.getStorageSync('myTrips') || [];
      savedTrips = savedTrips.filter(trip => trip.id !== id);
      uni.setStorageSync('myTrips', savedTrips);
      this.tripList = this.tripList.filter(trip => trip.id !== id);
      this.openedIndex = -1;
      uni.showToast({
        title: '已删除',
        icon: 'success'
      });
    }
  }
};
</script>

<style scoped>
/* 页面基础样式 */
.page {
  min-height: 100vh;
  background-color: #F8FAF9;
}

/* 顶部导航栏 */
.header-nav {
  position: relative;
  overflow: hidden;
}

.nav-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%);
}

.mountain-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 60%, rgba(255,255,255,0.4) 100%);
}

.nav-content {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 48px 16px 16px;
}

.nav-title {
  font-size: 20px;
  font-weight: 700;
  color: #2C3E50;
}

.nav-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255,255,255,0.6);
  padding: 6px 12px;
  border-radius: 16px;
}

.action-icon {
  font-size: 18px;
  color: #27AE60;
  font-weight: 600;
}

.action-text {
  font-size: 11px;
  color: #27AE60;
  margin-top: 2px;
}

/* 行程列表 */
.trip-list {
  padding: 16px;
}

/* 空状态 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-title {
  font-size: 18px;
  font-weight: 600;
  color: #2C3E50;
  margin-bottom: 8px;
}

.empty-desc {
  font-size: 14px;
  color: #95A5A6;
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.5;
}

.empty-btn {
  background: linear-gradient(135deg, #5FB878 0%, #7EC8A6 100%);
  padding: 14px 32px;
  border-radius: 24px;
}

.empty-btn text {
  font-size: 15px;
  color: #FFFFFF;
  font-weight: 600;
}

/* 左滑删除容器 */
.swipe-item {
  position: relative;
  margin-bottom: 16px;
}

/* 删除按钮 */
.delete-btn {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E74C3C;
  border-radius: 0 16px 16px 0;
}

.delete-icon {
  font-size: 20px;
  margin-bottom: 4px;
}

.delete-text {
  font-size: 13px;
  color: #FFFFFF;
  font-weight: 500;
}

/* 行程卡片 */
.trip-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: #FFFFFF;
  border: 1px solid #E8EDE9;
  transition: transform 0.3s ease;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #5FB878 0%, #7EC8A6 100%);
}

.card-content {
  padding: 20px 16px 16px;
}

.trip-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.trip-title {
  font-size: 17px;
  font-weight: 700;
  color: #2C3E50;
}

.trip-status {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 12px;
}

.trip-status.confirmed {
  color: #5FB878;
  background-color: #E8F5E9;
}

.trip-status.pending {
  color: #FF9A56;
  background-color: #FFF3E0;
}

.trip-info {
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
}

.info-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
}

.info-icon {
  font-size: 14px;
  margin-right: 4px;
}

.info-text {
  font-size: 13px;
  color: #5D6D7E;
}

.trip-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid #F0F0F0;
}

.create-time {
  font-size: 12px;
  color: #95A5A6;
}

.arrow-icon {
  font-size: 16px;
  color: #5FB878;
  font-weight: 600;
}

/* 底部留白 */
.bottom-space {
  height: 30px;
}
</style>
