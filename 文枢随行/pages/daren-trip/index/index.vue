<template>
  <view class="page">
    <div class="nav">
      <span class="back-btn" @click="goBack">←</span>
      达人严选
    </div>
    <div class="daren-trip-header">
      <div class="daren-trip-header-title">本地达人推荐</div>
      <div class="daren-trip-header-subtitle">精选优质行程，让旅行更有深度</div>
    </div>
    <div class="daren-trip-filter">
      <div class="daren-trip-filter-item active" @click="filterByType('all')">全部</div>
      <div class="daren-trip-filter-item" @click="filterByType('culture')">文化体验</div>
      <div class="daren-trip-filter-item" @click="filterByType('food')">美食之旅</div>
      <div class="daren-trip-filter-item" @click="filterByType('nature')">自然风光</div>
    </div>
    <div class="daren-trip-list">
      <div class="daren-trip-item" @click="goToTripDetail('daren-xian-3d')">
        <div class="daren-trip-item-image">
          <image class="daren-cover" src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Terracotta%20Warriors%20Xi%20an%20ancient%20history%20cultural%20relic&image_size=landscape_16_9" mode="aspectFill" />
          <div class="daren-trip-item-tag">文化体验</div>
        </div>
        <div class="daren-trip-item-content">
          <div class="daren-trip-item-title">西安3日非遗文化深度游</div>
          <div class="daren-trip-item-meta">
            <span>3天2晚</span>
            <span>¥800/人</span>
            <span>4.9分</span>
          </div>
          <div class="daren-trip-item-desc">探访兵马俑、华清宫，体验传统手工艺，品尝地道陕西美食</div>
          <div class="daren-trip-item-daren">
            <div class="daren-trip-item-daren-avatar">
              <image class="daren-avatar" src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20guide%20portrait%20friendly%20smile&image_size=square" mode="aspectFill" />
            </div>
            <div class="daren-trip-item-daren-info">
              <div class="daren-trip-item-daren-name">西安老陕</div>
              <div class="daren-trip-item-daren-badge">本地达人</div>
            </div>
          </div>
        </div>
      </div>
      <div class="daren-trip-item" @click="goToTripDetail('daren-chengdu-2d')">
        <div class="daren-trip-item-image">
          <image class="daren-cover" src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chengdu%20food%20hotpot%20Sichuan%20cuisine&image_size=landscape_16_9" mode="aspectFill" />
          <div class="daren-trip-item-tag">美食之旅</div>
        </div>
        <div class="daren-trip-item-content">
          <div class="daren-trip-item-title">成都2日美食打卡</div>
          <div class="daren-trip-item-meta">
            <span>2天1晚</span>
            <span>¥600/人</span>
            <span>4.8分</span>
          </div>
          <div class="daren-trip-item-desc">打卡宽窄巷子、锦里，品尝正宗川菜，体验成都慢生活</div>
          <div class="daren-trip-item-daren">
            <div class="daren-trip-item-daren-avatar">
              <image class="daren-avatar" src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=food%20blogger%20portrait%20friendly%20smile&image_size=square" mode="aspectFill" />
            </div>
            <div class="daren-trip-item-daren-info">
              <div class="daren-trip-item-daren-name">成都美食家</div>
              <div class="daren-trip-item-daren-badge">美食达人</div>
            </div>
          </div>
        </div>
      </div>
      <div class="daren-trip-item" @click="goToTripDetail('daren-guilin-4d')">
        <div class="daren-trip-item-image">
          <image class="daren-cover" src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Guilin%20landscape%20karst%20mountains%20Li%20River&image_size=landscape_16_9" mode="aspectFill" />
          <div class="daren-trip-item-tag">自然风光</div>
        </div>
        <div class="daren-trip-item-content">
          <div class="daren-trip-item-title">桂林4日山水甲天下</div>
          <div class="daren-trip-item-meta">
            <span>4天3晚</span>
            <span>¥1200/人</span>
            <span>4.9分</span>
          </div>
          <div class="daren-trip-item-desc">游览漓江、阳朔，体验竹筏漂流，欣赏山水田园风光</div>
          <div class="daren-trip-item-daren">
            <div class="daren-trip-item-daren-avatar">
              <image class="daren-avatar" src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=travel%20blogger%20portrait%20friendly%20smile&image_size=square" mode="aspectFill" />
            </div>
            <div class="daren-trip-item-daren-info">
              <div class="daren-trip-item-daren-name">山水客</div>
              <div class="daren-trip-item-daren-badge">旅行达人</div>
            </div>
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
      activeFilter: 'all'
    };
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    filterByType(type) {
      this.activeFilter = type;
      // 筛选行程的逻辑
      console.log('筛选类型:', type);
    },
    goToTripDetail(id) {
      uni.navigateTo({
        url: `/pages/trip/detail/index?id=${id}&source=daren`
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

.daren-trip-header {
  background: linear-gradient(135deg, #E8F5E9, #F1F8E9);
  padding: 24px 16px;
  text-align: center;
  border-radius: 0 0 24px 24px;
  margin-bottom: 24px;
}

.daren-trip-header-title {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
  margin-bottom: 8px;
}

.daren-trip-header-subtitle {
  font-size: 14px;
  color: #495057;
}

.daren-trip-filter {
  display: flex;
  gap: 16px;
  padding: 0 16px 16px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.daren-trip-filter::-webkit-scrollbar {
  display: none;
}

.daren-trip-filter-item {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #6C757D;
  background: #fff;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.daren-trip-filter-item.active {
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  color: #fff;
  box-shadow: 0 4px 12px rgba(76,175,80,0.2);
}

.daren-trip-filter-item:active {
  transform: scale(0.95);
}

.daren-trip-list {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.daren-trip-item {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: all 0.2s;
  cursor: pointer;
}

.daren-trip-item:active {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.daren-trip-item-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.daren-trip-item-image .daren-cover {
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
}

.daren-trip-item:active .daren-trip-item-image .daren-cover {
  transform: scale(1.05);
}

.daren-trip-item-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(90deg, #FF5722, #FF9800);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.daren-trip-item-content {
  padding: 16px;
}

.daren-trip-item-title {
  font-size: 18px;
  font-weight: 700;
  color: #212529;
  margin-bottom: 12px;
  line-height: 1.3;
}

.daren-trip-item-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #6C757D;
  font-weight: 500;
}

.daren-trip-item-meta span:nth-child(2) {
  color: #FF5722;
  font-weight: 600;
}

.daren-trip-item-meta span:nth-child(3) {
  color: #4CAF50;
  font-weight: 600;
}

.daren-trip-item-desc {
  font-size: 14px;
  color: #495057;
  line-height: 1.4;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.daren-trip-item-daren {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid #F1F3F5;
}

.daren-trip-item-daren-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #E8F5E9;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.daren-trip-item-daren-avatar .daren-avatar {
  width: 100%;
  height: 100%;
}

.daren-trip-item-daren-info {
  flex: 1;
}

.daren-trip-item-daren-name {
  font-size: 14px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 4px;
}

.daren-trip-item-daren-badge {
  font-size: 12px;
  padding: 2px 8px;
  background: #E3F2FD;
  color: #1976D2;
  border-radius: 12px;
  font-weight: 500;
  display: inline-block;
}
</style>