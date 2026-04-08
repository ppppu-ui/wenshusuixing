<template>
  <view class="page">
    <!-- 顶部导航栏 - 浅青绿色渐变 -->
    <view class="header-nav">
      <view class="nav-bg">
        <view class="mountain-decoration"></view>
      </view>
      <view class="nav-content">
        <view class="back-btn" @click="goBack">
          <text class="back-icon">←</text>
        </view>
        <view class="nav-title">景区导航</view>
        <view class="nav-placeholder"></view>
      </view>
    </view>

    <!-- 搜索框区域 -->
    <view class="search-section">
      <view class="search-box" :class="{ 'is-focused': isSearchFocused }">
        <text class="search-icon">🔍</text>
        <input 
          type="text" 
          v-model="searchKeyword"
          placeholder="搜索景点/设施/卫生间..." 
          class="search-input"
          @focus="isSearchFocused = true"
          @blur="isSearchFocused = false"
          @confirm="handleSearch"
        />
        <view class="search-clear" v-if="searchKeyword" @click="clearSearch">
          <text class="clear-icon">×</text>
        </view>
      </view>
      <!-- 离线下载按钮 -->
      <view class="download-btn" @click="downloadMap">
        <svg class="icon-svg download-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <text class="download-text">离线下载</text>
      </view>
    </view>

    <!-- 地图区域 -->
    <view class="map-container">
      <image 
        class="map-image" 
        src="https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&h=600&fit=crop"
        mode="aspectFill"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
      />
      <view class="map-marker" :style="markerStyle">
        <view class="marker-dot"></view>
        <view class="marker-pulse"></view>
      </view>
      
      <!-- 地图控制按钮 -->
      <view class="map-controls">
        <view class="control-btn zoom-in" @click="zoomIn">
          <text class="control-icon">+</text>
        </view>
        <view class="control-btn zoom-out" @click="zoomOut">
          <text class="control-icon">−</text>
        </view>
        <view class="control-btn locate" @click="centerMap">
          <text class="control-icon">📍</text>
        </view>
      </view>

      <!-- 地图缩放比例 -->
      <view class="map-scale" v-if="scale > 1">
        <text>{{ Math.round(scale * 100) }}%</text>
      </view>
    </view>

    <!-- 快捷服务栏 -->
    <view class="facilities-section">
      <view class="facility-item" @click="findToilet">
        <view class="facility-icon toilet">
          <text>🚻</text>
        </view>
        <text class="facility-name">卫生间</text>
      </view>
      <view class="facility-item" @click="findRestaurant">
        <view class="facility-icon restaurant">
          <text>🍽️</text>
        </view>
        <text class="facility-name">餐厅</text>
      </view>
      <view class="facility-item" @click="findMedical">
        <view class="facility-icon medical">
          <text>🏥</text>
        </view>
        <text class="facility-name">医疗点</text>
      </view>
      <view class="facility-item" @click="findParking">
        <view class="facility-icon parking">
          <text>🅿️</text>
        </view>
        <text class="facility-name">停车场</text>
      </view>
      <view class="facility-item" @click="findEntrance">
        <view class="facility-icon entrance">
          <text>🚪</text>
        </view>
        <text class="facility-name">出入口</text>
      </view>
    </view>

    <!-- 离线提示栏 -->
    <view class="offline-bar">
      <view class="offline-content">
        <text class="offline-icon">📶</text>
        <text class="offline-text">当前为离线导航模式，定位功能正常使用</text>
      </view>
      <view class="offline-action" @click="switchToOnline">
        <text>切换在线</text>
      </view>
    </view>

    <!-- 周边景点 -->
    <view class="nearby-section">
      <view class="section-header">
        <view class="section-title">
          <text class="title-icon">⛰️</text>
          <text>周边景点</text>
        </view>
        <view class="section-more" @click="viewMore">
          <text>更多</text>
          <text class="more-arrow">→</text>
        </view>
      </view>

      <view class="attraction-list">
        <view 
          v-for="(item, index) in attractions" 
          :key="index"
          class="attraction-card"
          @click="viewDetail(item)"
        >
          <view class="card-main">
            <view class="attraction-info">
              <view class="info-header">
                <text class="attraction-name">{{ item.name }}</text>
                <view class="status-badge" :class="item.status">
                  <text>{{ item.statusText }}</text>
                </view>
              </view>
              <view class="info-meta">
                <text class="meta-item">
                  <text class="meta-icon">📍</text>
                  <text>距您 {{ item.distance }}米</text>
                </text>
                <text class="meta-item">
                  <text class="meta-icon">🚶</text>
                  <text>步行{{ item.walkTime }}分钟</text>
                </text>
              </view>
              <view class="info-tags">
                <text v-for="(tag, tIndex) in item.tags" :key="tIndex" class="tag">{{ tag }}</text>
              </view>
            </view>
            <view class="attraction-action">
              <view class="collect-btn" @click.stop="toggleCollect(index)">
                <text class="collect-icon" :class="{ 'is-collected': item.isCollected }">⭐</text>
              </view>
            </view>
          </view>
          <view class="card-footer">
            <view class="nav-btn-primary" @click.stop="navigateTo(item)">
              <text class="nav-icon">🧭</text>
              <text class="nav-text">导航前往</text>
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
      isSearchFocused: false,
      searchKeyword: '',
      scale: 1,
      markerPosition: { x: 50, y: 50 },
      touchStartData: { x: 0, y: 0, distance: 0 },
      attractions: [
        {
          name: '铜车马展厅',
          status: 'open',
          statusText: '开放中',
          distance: 200,
          walkTime: 3,
          tags: ['必看', '文化', '镇馆之宝'],
          isCollected: false
        },
        {
          name: '兵马俑一号坑',
          status: 'open',
          statusText: '开放中',
          distance: 350,
          walkTime: 5,
          tags: ['世界遗产', '必打卡'],
          isCollected: true
        },
        {
          name: '兵马俑三号坑',
          status: 'crowded',
          statusText: '拥挤',
          distance: 500,
          walkTime: 7,
          tags: ['历史', '考古'],
          isCollected: false
        },
        {
          name: '秦始皇陵',
          status: 'open',
          statusText: '开放中',
          distance: 1200,
          walkTime: 15,
          tags: ['世界遗产', '历史'],
          isCollected: false
        }
      ]
    };
  },
  computed: {
    markerStyle() {
      return {
        left: this.markerPosition.x + '%',
        top: this.markerPosition.y + '%'
      };
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    clearSearch() {
      this.searchKeyword = '';
    },
    handleSearch() {
      if (!this.searchKeyword.trim()) {
        uni.showToast({
          title: '请输入搜索内容',
          icon: 'none'
        });
        return;
      }
      uni.showToast({
        title: `搜索: ${this.searchKeyword}`,
        icon: 'none'
      });
    },
    downloadMap() {
      uni.navigateTo({
        url: '/pages/navigation/offline-map/offline-map',
        fail: () => {
          uni.showToast({
            title: '页面开发中',
            icon: 'none'
          });
        }
      });
    },
    zoomIn() {
      if (this.scale < 3) {
        this.scale += 0.5;
      }
    },
    zoomOut() {
      if (this.scale > 1) {
        this.scale -= 0.5;
      }
    },
    centerMap() {
      uni.getLocation({
        type: 'gcj02',
        success: (res) => {
          uni.showToast({
            title: '已定位到当前位置',
            icon: 'success'
          });
        },
        fail: () => {
          uni.showToast({
            title: '定位失败，请检查权限',
            icon: 'none'
          });
        }
      });
    },
    touchStart(e) {
      const touches = e.touches;
      if (touches.length === 1) {
        this.touchStartData.x = touches[0].clientX;
        this.touchStartData.y = touches[0].clientY;
      } else if (touches.length === 2) {
        const x = touches[0].clientX - touches[1].clientX;
        const y = touches[0].clientY - touches[1].clientY;
        this.touchStartData.distance = Math.sqrt(x * x + y * y);
      }
    },
    touchMove(e) {
      const touches = e.touches;
      if (touches.length === 2) {
        const x = touches[0].clientX - touches[1].clientX;
        const y = touches[0].clientY - touches[1].clientY;
        const distance = Math.sqrt(x * x + y * y);
        const scale = distance / this.touchStartData.distance;
        this.scale = Math.min(Math.max(this.scale * scale, 1), 3);
        this.touchStartData.distance = distance;
      }
    },
    touchEnd(e) {
      // 处理拖拽结束
    },
    findToilet() {
      uni.showToast({
        title: '已显示附近卫生间',
        icon: 'none'
      });
    },
    findRestaurant() {
      uni.showToast({
        title: '已显示附近餐厅',
        icon: 'none'
      });
    },
    findMedical() {
      uni.showToast({
        title: '已显示附近医疗点',
        icon: 'none'
      });
    },
    findParking() {
      uni.showToast({
        title: '已显示附近停车场',
        icon: 'none'
      });
    },
    findEntrance() {
      uni.showToast({
        title: '已显示出入口位置',
        icon: 'none'
      });
    },
    switchToOnline() {
      uni.showModal({
        title: '切换模式',
        content: '是否切换到在线导航模式？',
        success: (res) => {
          if (res.confirm) {
            uni.showToast({
              title: '已切换至在线模式',
              icon: 'success'
            });
          }
        }
      });
    },
    viewMore() {
      uni.showToast({
        title: '查看更多景点',
        icon: 'none'
      });
    },
    viewDetail(item) {
      uni.navigateTo({
        url: `/pages/attraction/detail?name=${item.name}`
      });
    },
    toggleCollect(index) {
      const item = this.attractions[index];
      item.isCollected = !item.isCollected;
      uni.showToast({
        title: item.isCollected ? '已收藏' : '取消收藏',
        icon: 'none'
      });
    },
    navigateTo(item) {
      uni.showModal({
        title: '开始导航',
        content: `是否开始导航到${item.name}？`,
        success: (res) => {
          if (res.confirm) {
            uni.showToast({
              title: '开始导航',
              icon: 'success'
            });
          }
        }
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

/* 顶部导航栏 - 浅青绿色渐变 */
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

.back-btn {
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.6);
  border-radius: 50%;
}

.back-icon {
  font-size: 18px;
  color: #2C3E50;
}

.nav-title {
  font-size: 18px;
  font-weight: 700;
  color: #2C3E50;
}

.nav-action {
  padding: 6px 12px;
  background-color: rgba(255,255,255,0.6);
  border-radius: 16px;
}

.nav-placeholder {
  width: 36px;
}

/* 搜索区域 */
.search-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(180deg, #E8F5E9 0%, #F8FAF9 100%);
  gap: 12px;
}

.search-box {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 24px;
  padding: 0 16px;
  height: 40px;
  border: 1px solid #E8EDE9;
  transition: all 0.3s ease;
}

.search-box.is-focused {
  border-color: #5FB878;
  box-shadow: 0 2px 8px rgba(95,184,120,0.15);
}

.search-icon {
  font-size: 16px;
  color: #95A5A6;
  margin-right: 8px;
}

.search-input {
  flex: 1;
  height: 100%;
  font-size: 14px;
  color: #2C3E50;
}

.search-input::placeholder {
  color: #B0BEC5;
}

.search-clear {
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #E0E0E0;
  border-radius: 50%;
  margin-left: 8px;
}

.clear-icon {
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 600;
}

/* 离线下载按钮 */
.download-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid #A5D6A7;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.download-btn:active {
  transform: scale(0.95);
  background: linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%);
}

.download-icon {
  font-size: 14px;
  margin-right: 4px;
}

.download-text {
  font-size: 12px;
  color: #2E7D32;
  font-weight: 500;
}

/* 地图区域 */
.map-container {
  position: relative;
  height: 280px;
  margin: 0 16px 16px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #E8EDE9;
}

.map-image {
  width: 100%;
  height: 100%;
}

.map-marker {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #5FB878 0%, #7EC8A6 100%);
  border-radius: 50%;
  border: 3px solid #FFFFFF;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.marker-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background-color: rgba(95,184,120,0.3);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

/* 地图控制按钮 */
.map-controls {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-btn {
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all 0.2s ease;
}

.control-btn:active {
  transform: scale(0.95);
  background-color: #F8FAF9;
}

.control-icon {
  font-size: 20px;
  color: #2C3E50;
  font-weight: 600;
}

.control-btn.locate .control-icon {
  font-size: 18px;
}

/* 地图缩放比例 */
.map-scale {
  position: absolute;
  left: 12px;
  bottom: 12px;
  background-color: rgba(0,0,0,0.6);
  padding: 4px 10px;
  border-radius: 12px;
}

.map-scale text {
  font-size: 12px;
  color: #FFFFFF;
  font-weight: 500;
}

/* 快捷服务栏 */
.facilities-section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
  margin: 0 16px 12px;
  background-color: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #E8EDE9;
}

.facility-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;
}

.facility-item:active {
  transform: scale(0.95);
}

.facility-icon {
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 8px;
}

.facility-icon.toilet {
  background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
}

.facility-icon.restaurant {
  background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);
}

.facility-icon.medical {
  background: linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%);
}

.facility-icon.parking {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
}

.facility-icon.entrance {
  background: linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%);
}

.facility-icon text {
  font-size: 22px;
}

.facility-name {
  font-size: 12px;
  color: #5D6D7E;
}

/* 离线提示栏 */
.offline-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin: 0 16px 12px;
  background-color: #F5F5F5;
  border-radius: 12px;
  border: 1px solid #E0E0E0;
}

.offline-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.offline-icon {
  font-size: 16px;
  margin-right: 8px;
}

.offline-text {
  font-size: 13px;
  color: #616161;
}

.offline-action {
  padding: 6px 12px;
  background-color: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #BDBDBD;
}

.offline-action text {
  font-size: 12px;
  color: #616161;
  font-weight: 500;
}

/* 周边景点 */
.nearby-section {
  padding: 0 16px;
}

.section-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.section-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #2C3E50;
}

.title-icon {
  font-size: 18px;
  margin-right: 6px;
}

.section-more {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.section-more text {
  font-size: 13px;
  color: #5FB878;
}

.more-arrow {
  margin-left: 4px;
}

.attraction-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.attraction-card {
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #E8EDE9;
  transition: all 0.2s ease;
}

.attraction-card:active {
  background-color: #F8FAF9;
}

.card-main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
}

.attraction-info {
  flex: 1;
}

.info-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
}

.attraction-name {
  font-size: 16px;
  font-weight: 700;
  color: #2C3E50;
  margin-right: 8px;
}

.status-badge {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 500;
}

.status-badge.open {
  background-color: #E8F5E9;
  color: #5FB878;
}

.status-badge.crowded {
  background-color: #FFF3E0;
  color: #FF9A56;
}

.status-badge.closed {
  background-color: #FFEBEE;
  color: #E74C3C;
}

.info-meta {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}

.meta-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  font-size: 13px;
  color: #5D6D7E;
}

.meta-icon {
  font-size: 12px;
  margin-right: 4px;
}

.info-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.tag {
  font-size: 11px;
  color: #5FB878;
  background-color: #E8F5E9;
  padding: 3px 8px;
  border-radius: 10px;
  margin-right: 6px;
  margin-bottom: 4px;
}

.attraction-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.collect-btn {
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  border-radius: 50%;
}

.collect-icon {
  font-size: 18px;
  color: #BDBDBD;
  transition: all 0.2s ease;
}

.collect-icon.is-collected {
  color: #FF9A56;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid #F0F0F0;
  padding-top: 12px;
}

.nav-btn-primary {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(135deg, #5FB878 0%, #7EC8A6 100%);
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.2s ease;
}

.nav-btn-primary:active {
  transform: scale(0.95);
  opacity: 0.9;
}

.nav-icon {
  font-size: 14px;
  margin-right: 4px;
}

.nav-text {
  font-size: 13px;
  color: #FFFFFF;
  font-weight: 500;
}

/* 底部留白 */
.bottom-space {
  height: 30px;
}
</style>
