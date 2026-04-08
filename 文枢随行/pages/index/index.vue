<template>
  <view class="page">
    <!-- 顶部搜索区域 -->
    <view class="header">
      <view class="search-box">
        <text class="search-icon">🔍</text>
        <input type="text" class="search-input" placeholder="搜索目的地/景点/玩法">
      </view>
    </view>

    <!-- AI智能定制 Banner -->
    <view class="ai-banner" @click="goToAiTrip">
      <view class="ai-banner-bg">
        <view class="mountain-pattern"></view>
      </view>
      <view class="ai-banner-content">
        <view class="ai-banner-title">
          <text class="ai-icon">✨</text>
          <text>AI智能定制</text>
        </view>
        <view class="ai-banner-desc">预算 · 兴趣 · 时间 → 一键生成最优方案</view>
        <view class="ai-banner-btn">
          <text>立即体验</text>
          <text class="arrow">→</text>
        </view>
      </view>
    </view>

    <!-- 功能入口 -->
    <view class="func-grid">
      <view class="func-item" @click="goToService">
        <view class="func-icon func-icon-service">
          <text>💬</text>
        </view>
        <text class="func-name">文旅服务</text>
      </view>
      <view class="func-item" @click="goToCheckin">
        <view class="func-icon func-icon-checkin">
          <text>📍</text>
        </view>
        <text class="func-name">打卡任务</text>
      </view>
      <view class="func-item" @click="goToDarenTrip">
        <view class="func-icon func-icon-daren">
          <text>🌟</text>
        </view>
        <text class="func-name">达人严选</text>
      </view>
      <view class="func-item" @click="goToNavigation">
        <view class="func-icon func-icon-nav">
          <text>🧭</text>
        </view>
        <text class="func-name">景区导航</text>
      </view>
    </view>

    <!-- 达人严选行程 -->
    <view class="section">
      <view class="section-header">
        <view class="section-title">
          <text class="title-icon">🎒</text>
          <text>达人严选行程</text>
        </view>
        <view class="section-more" @click="goToDarenTrip">
          <text>更多</text>
          <text class="arrow">→</text>
        </view>
      </view>
      <view class="card-list">
        <view class="trip-card" @click="goToTripDetail">
          <view class="trip-card-image">
            <view class="image-placeholder" style="background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);">
              <text class="landscape-icon">🏛️</text>
            </view>
            <view class="trip-card-tag">文化游</view>
          </view>
          <view class="trip-card-content">
            <view class="trip-card-title">西安3日非遗文化游</view>
            <view class="trip-card-desc">达人认证 · 兵马俑+古城墙+非遗体验</view>
            <view class="trip-card-footer">
              <view class="trip-card-price">
                <text class="price-unit">¥</text>
                <text class="price-num">800</text>
                <text class="price-text">/人起</text>
              </view>
              <view class="trip-card-badge">
                <text class="badge-icon">✓</text>
                <text>达人预审</text>
              </view>
            </view>
          </view>
        </view>

        <view class="trip-card" @click="goToTripDetail">
          <view class="trip-card-image">
            <view class="image-placeholder" style="background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);">
              <text class="landscape-icon">🍜</text>
            </view>
            <view class="trip-card-tag tag-food">美食游</view>
          </view>
          <view class="trip-card-content">
            <view class="trip-card-title">成都2日美食休闲游</view>
            <view class="trip-card-desc">达人认证 · 宽窄巷子+锦里+本地火锅</view>
            <view class="trip-card-footer">
              <view class="trip-card-price">
                <text class="price-unit">¥</text>
                <text class="price-num">600</text>
                <text class="price-text">/人起</text>
              </view>
              <view class="trip-card-badge">
                <text class="badge-icon">✓</text>
                <text>达人预审</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 热门打卡点 -->
    <view class="section">
      <view class="section-header">
        <view class="section-title">
          <text class="title-icon">📸</text>
          <text>热门打卡点</text>
        </view>
        <view class="section-more" @click="goToCheckin">
          <text>更多</text>
          <text class="arrow">→</text>
        </view>
      </view>
      <view class="spot-card" @click="goToCheckinDetail">
        <view class="spot-card-image">
          <view class="image-placeholder" style="background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);">
            <text class="landscape-icon">🏺</text>
          </view>
        </view>
        <view class="spot-card-content">
          <view class="spot-card-title">秦始皇兵马俑博物馆</view>
          <view class="spot-card-desc">打卡领兵马俑数字藏品</view>
          <view class="spot-card-location">
            <text class="location-icon">📍</text>
            <text>西安市临潼区</text>
          </view>
          <view class="spot-card-tags">
            <view class="spot-tag tag-heritage">
              <text class="tag-icon">🏺</text>
              <text>非遗打卡</text>
            </view>
            <view class="spot-tag">
              <text class="tag-icon">🎁</text>
              <text>领藏品</text>
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
    };
  },
  methods: {
    goToAiTrip() {
      uni.navigateTo({
        url: '/pages/ai-trip/index/index'
      });
    },
    goToService() {
      uni.switchTab({
        url: '/pages/service/index/index'
      });
    },
    goToCheckin() {
      uni.navigateTo({
        url: '/pages/checkin/index/index'
      });
    },
    goToDarenTrip() {
      uni.navigateTo({
        url: '/pages/daren-trip/index/index'
      });
    },
    goToNavigation() {
      uni.navigateTo({
        url: '/pages/navigation/index/index'
      });
    },
    goToTripDetail() {
      uni.switchTab({
        url: '/pages/trip/index/index'
      });
    },
    goToCheckinDetail() {
      uni.navigateTo({
        url: '/pages/checkin/detail/index'
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

/* 顶部搜索区域 */
.header {
  padding: 12px 20px;
  background-color: #E8F5E9;
}

.search-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 24px;
  padding: 12px 16px;
  border: 1px solid #E8EDE9;
}

.search-icon {
  font-size: 18px;
  color: #5FB878;
  margin-right: 10px;
}

.search-input {
  flex: 1;
  font-size: 14px;
  color: #2C3E50;
}

/* AI智能定制 Banner */
.ai-banner {
  margin: 0 20px 20px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  border: 1px solid #C8E6C9;
}

.ai-banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #5FB878 0%, #4A9B61 50%, #3D8B53 100%);
}

.mountain-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, #FFFFFF 100%);
}

.ai-banner-content {
  position: relative;
  padding: 24px 20px;
}

.ai-banner-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #FFFFFF;
}

.ai-icon {
  font-size: 24px;
  margin-right: 8px;
}

.ai-banner-desc {
  font-size: 13px;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.ai-banner-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #5FB878;
}

.ai-banner-btn .arrow {
  font-size: 12px;
  margin-left: 4px;
}

/* 功能入口网格 */
.func-grid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px 24px;
}

.func-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  background-color: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E8EDE9;
  flex: 1;
  margin: 0 6px;
}

.func-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 24px;
}

.func-icon-service {
  background: linear-gradient(135deg, #5FB878 0%, #7EC8A6 100%);
}

.func-icon-checkin {
  background: linear-gradient(135deg, #FF9A56 0%, #FFB347 100%);
}

.func-icon-daren {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.func-icon-nav {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
}

.func-name {
  font-size: 12px;
  color: #2C3E50;
  font-weight: 500;
}

/* 区块样式 */
.section {
  margin-bottom: 20px;
  padding: 0 20px;
}

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.section-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
  color: #2C3E50;
}

.title-icon {
  font-size: 18px;
  color: #5FB878;
  margin-right: 8px;
}

.section-more {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  color: #5FB878;
  font-weight: 500;
}

.section-more .arrow {
  font-size: 11px;
  margin-left: 2px;
}

/* 行程卡片 */
.card-list {
  display: flex;
  flex-direction: column;
}

.trip-card {
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #E8EDE9;
  margin-bottom: 12px;
}

.trip-card-image {
  position: relative;
  width: 120px;
  height: 120px;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.landscape-icon {
  font-size: 40px;
}

.trip-card-tag {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #5FB878;
  color: #FFFFFF;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 10px;
  font-weight: 500;
}

.trip-card-tag.tag-food {
  background-color: #FF9A56;
}

.trip-card-content {
  flex: 1;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.trip-card-title {
  font-size: 15px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 6px;
  line-height: 1.4;
}

.trip-card-desc {
  font-size: 12px;
  color: #5D6D7E;
  line-height: 1.5;
}

.trip-card-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.trip-card-price {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.price-unit {
  font-size: 12px;
  color: #E74C3C;
  font-weight: 600;
}

.price-num {
  font-size: 20px;
  color: #E74C3C;
  font-weight: 700;
  margin: 0 2px;
}

.price-text {
  font-size: 11px;
  color: #95A5A6;
}

.trip-card-badge {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #E8F5E9;
  color: #5FB878;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 10px;
  font-weight: 500;
}

.badge-icon {
  font-size: 12px;
  margin-right: 3px;
}

/* 打卡点卡片 */
.spot-card {
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #E8EDE9;
}

.spot-card-image {
  width: 100px;
  height: 100px;
}

.spot-card-content {
  flex: 1;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
}

.spot-card-title {
  font-size: 15px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 6px;
}

.spot-card-desc {
  font-size: 12px;
  color: #5FB878;
  margin-bottom: 8px;
  font-weight: 500;
}

.spot-card-location {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 11px;
  color: #95A5A6;
  margin-bottom: 10px;
}

.location-icon {
  font-size: 12px;
  margin-right: 4px;
}

.spot-card-tags {
  display: flex;
  flex-direction: row;
}

.spot-tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #E8F5E9;
  color: #5FB878;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 12px;
  font-weight: 500;
  margin-right: 8px;
}

.spot-tag.tag-heritage {
  background-color: #FFF3E0;
  color: #FF9A56;
}

.tag-icon {
  font-size: 11px;
  margin-right: 3px;
}

/* 底部留白 */
.bottom-space {
  height: 30px;
}
</style>