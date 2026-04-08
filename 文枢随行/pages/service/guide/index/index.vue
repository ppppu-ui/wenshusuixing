<template>
  <view class="page">
    <div class="nav">
      <span class="back-btn" @click="goBack">←</span>
      本地向导
      <span class="filter-btn" @click="showFilter">筛选</span>
    </div>
    <div class="guide-search">
      <div class="guide-search-box" @click="showSearch">
        <span class="guide-search-icon">🔍</span>
        <span class="guide-search-placeholder">搜索向导服务类型，如：讲解/拍照</span>
      </div>
    </div>
    <div class="guide-section">
      <div class="guide-section-title">
        周边认证向导
        <span class="guide-section-subtitle">（距离由近至远）</span>
      </div>
      <div class="guide-list">
        <div class="guide-item" @click="goToGuideDetail">
          <div class="guide-item-avatar">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20guide%20portrait%20friendly%20smile%20male&image_size=square" alt="张向导" />
          </div>
          <div class="guide-item-content">
            <div class="guide-item-header">
              <div class="guide-item-name">张向导</div>
              <div class="guide-item-badge">认证向导</div>
            </div>
            <div class="guide-item-tags">
              <div class="guide-item-tag">兵马俑讲解</div>
              <div class="guide-item-tag">非遗介绍</div>
            </div>
            <div class="guide-item-stats">
              <div class="guide-item-rating">⭐ 4.9 (128条评价)</div>
              <div class="guide-item-distance">距离500米</div>
            </div>
            <div class="guide-item-info">
              <div class="guide-item-price">服务价格：50元/小时</div>
              <div class="guide-item-experience">从业5年</div>
            </div>
          </div>
          <div class="guide-item-call" @click.stop="callGuide('13800138000')">
            <span>📞</span>
          </div>
        </div>
        <div class="guide-item" @click="goToGuideDetail">
          <div class="guide-item-avatar">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20guide%20portrait%20friendly%20smile%20female&image_size=square" alt="李向导" />
          </div>
          <div class="guide-item-content">
            <div class="guide-item-header">
              <div class="guide-item-name">李向导</div>
              <div class="guide-item-badge">认证向导</div>
            </div>
            <div class="guide-item-tags">
              <div class="guide-item-tag">景区带路</div>
              <div class="guide-item-tag">旅拍</div>
            </div>
            <div class="guide-item-stats">
              <div class="guide-item-rating">⭐ 4.8 (96条评价)</div>
              <div class="guide-item-distance">距离800米</div>
            </div>
            <div class="guide-item-info">
              <div class="guide-item-price">服务价格：40元/小时</div>
              <div class="guide-item-experience">从业3年</div>
            </div>
          </div>
          <div class="guide-item-call" @click.stop="callGuide('13900139000')">
            <span>📞</span>
          </div>
        </div>
        <div class="guide-item" @click="goToGuideDetail">
          <div class="guide-item-avatar">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20guide%20portrait%20friendly%20smile%20middle%20age&image_size=square" alt="王向导" />
          </div>
          <div class="guide-item-content">
            <div class="guide-item-header">
              <div class="guide-item-name">王向导</div>
              <div class="guide-item-badge">认证向导</div>
            </div>
            <div class="guide-item-tags">
              <div class="guide-item-tag">历史文化</div>
              <div class="guide-item-tag">美食推荐</div>
            </div>
            <div class="guide-item-stats">
              <div class="guide-item-rating">⭐ 4.9 (156条评价)</div>
              <div class="guide-item-distance">距离1.2公里</div>
            </div>
            <div class="guide-item-info">
              <div class="guide-item-price">服务价格：60元/小时</div>
              <div class="guide-item-experience">从业8年</div>
            </div>
          </div>
          <div class="guide-item-call" @click.stop="callGuide('13700137000')">
            <span>📞</span>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    showFilter() {
      // 显示筛选选项
      console.log('显示筛选');
    },
    showSearch() {
      // 显示搜索框
      console.log('显示搜索');
    },
    goToGuideDetail() {
      // 跳转到向导详情页面
      console.log('跳转到向导详情');
    },
    callGuide(phone) {
      // 拨打电话
      console.log('拨打电话', phone);
      uni.makePhoneCall({
        phoneNumber: phone
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

.nav {
  height: 48px;
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border: none;
}

.back-btn {
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  left: 16px;
  top: 8px;
}

.back-btn:active {
  opacity: 0.7;
  background: rgba(255,255,255,0.15);
}

.filter-btn {
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  padding: 6px 12px;
  border-radius: 16px;
  position: absolute;
  right: 16px;
  top: 8px;
}

.filter-btn:active {
  background: rgba(255,255,255,0.15);
}

.guide-search {
  padding: 16px;
}

.guide-search-box {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 12px 16px;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: all 0.2s;
}

.guide-search-box:active {
  transform: scale(0.98);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.guide-search-icon {
  font-size: 16px;
  color: #6C757D;
  margin-right: 8px;
}

.guide-search-placeholder {
  font-size: 14px;
  color: #6C757D;
}

.guide-section {
  background: #fff;
  margin: 0 16px 16px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.guide-section-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #F1F3F5;
  display: flex;
  align-items: center;
  gap: 8px;
}

.guide-section-subtitle {
  font-size: 12px;
  font-weight: 400;
  color: #6C757D;
}

.guide-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.guide-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #F8F9FA;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}

.guide-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.guide-item-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #E8F5E9;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.guide-item-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-item-content {
  flex: 1;
}

.guide-item-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.guide-item-name {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
}

.guide-item-badge {
  font-size: 10px;
  padding: 2px 8px;
  background: #E8F5E9;
  color: #2E7D32;
  border-radius: 10px;
  font-weight: 500;
}

.guide-item-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.guide-item-tag {
  font-size: 12px;
  padding: 4px 12px;
  background: #E3F2FD;
  color: #1976D2;
  border-radius: 12px;
  font-weight: 500;
}

.guide-item-stats {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 12px;
  color: #6C757D;
}

.guide-item-rating {
  color: #FFC107;
  font-weight: 500;
}

.guide-item-distance {
  color: #6C757D;
}

.guide-item-info {
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: #495057;
}

.guide-item-price {
  font-weight: 500;
  color: #F44336;
}

.guide-item-experience {
  color: #6C757D;
}

.guide-item-call {
  width: 36px;
  height: 36px;
  background: #E8F5E9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2E7D32;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
  margin-top: 12px;
}

.guide-item-call:active {
  background: #C8E6C9;
  transform: scale(1.1);
}
</style>