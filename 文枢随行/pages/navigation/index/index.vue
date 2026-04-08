<template>
  <view class="page">
    <!-- 顶部导航栏 - 浅青绿色渐变 -->
    <view class="header-nav">
      <view class="nav-bg">
        <view class="mountain-decoration"></view>
      </view>
      <view class="nav-content">
        <view class="back-btn" @click="goBack">
          <svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
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
          <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
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
          <svg class="icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </view>
        <view class="control-btn zoom-out" @click="zoomOut">
          <svg class="icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </view>
        <view class="control-btn locate" @click="centerMap">
          <svg class="icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
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
          <svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </view>
        <text class="facility-name">卫生间</text>
      </view>
      <view class="facility-item" @click="findRestaurant">
        <view class="facility-icon restaurant">
          <svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
        </view>
        <text class="facility-name">餐厅</text>
      </view>
      <view class="facility-item" @click="findMedical">
        <view class="facility-icon medical">
          <svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </view>
        <text class="facility-name">医疗点</text>
      </view>
      <view class="facility-item" @click="findParking">
        <view class="facility-icon parking">
          <svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        </view>
        <text class="facility-name">停车场</text>
      </view>
      <view class="facility-item" @click="findEntrance">
        <view class="facility-icon entrance">
          <svg class="icon-svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </view>
        <text class="facility-name">出入口</text>
      </view>
    </view>

    <!-- 离线提示栏 -->
    <view class="offline-bar">
      <view class="offline-content">
        <svg class="icon-svg offline-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
          <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
          <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
          <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
          <line x1="12" y1="20" x2="12.01" y2="20"></line>
        </svg>
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
          <svg class="icon-svg title-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="1 6 1 22 8 18 16 22 21 18 21 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
          <text>周边景点</text>
        </view>
        <view class="section-more" @click="viewMore">
          <text>更多</text>
          <svg class="icon-svg more-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
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
                  <svg class="icon-svg meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <text>距您 {{ item.distance }}米</text>
                </text>
                <text class="meta-item">
                  <svg class="icon-svg meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <text>步行{{ item.walkTime }}分钟</text>
                </text>
              </view>
              <view class="info-tags">
                <text v-for="(tag, tIndex) in item.tags" :key="tIndex" class="tag">{{ tag }}</text>
              </view>
            </view>
            <view class="attraction-action">
              <view class="collect-btn" @click.stop="toggleCollect(index)">
                <svg class="icon-svg collect-icon" :class="{ 'is-collected': item.isCollected }" width="18" height="18" viewBox="0 0 24 24" fill="none" :stroke="item.isCollected ? '#4CAF50' : '#333333'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </view>
            </view>
          </view>
          <view class="card-footer">
            <view class="nav-btn-primary" @click.stop="navigateTo(item)">
              <svg class="icon-svg nav-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
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

/* SVG图标基础样式 */
.icon-svg {
  display: block;
  flex-shrink: 0;
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
}
</style>
