<template>
  <view class="page">
    <!-- 顶部导航栏 -->
    <view class="header-nav">
      <view class="nav-bg">
        <view class="mountain-decoration"></view>
      </view>
      <view class="nav-content">
        <view class="back-btn" @click="goBack">
          <text class="back-icon">←</text>
        </view>
        <view class="nav-title">行程详情</view>
        <view class="nav-placeholder"></view>
      </view>
    </view>

    <!-- 吸顶悬浮卡片 - 行程核心信息 -->
    <view class="sticky-card" :class="{ 'is-sticky': isSticky }">
      <view class="trip-info-card">
        <view class="trip-title-row">
          <view class="trip-title">{{ tripData.title }}</view>
          <view class="trip-actions">
            <view class="trip-badge">已保存</view>
            <view class="nav-btn" @click="goToNavigation">
              <text class="nav-btn-icon">🧭</text>
              <text class="nav-btn-text">导航</text>
            </view>
          </view>
        </view>
        <view class="trip-meta">
          <view class="meta-item">
            <text class="meta-icon">💰</text>
            <text class="meta-text">人均 ¥{{ tripData.budgetPerPerson }}</text>
          </view>
          <view class="meta-item">
            <text class="meta-icon">📅</text>
            <text class="meta-text">{{ tripData.days }}天{{ tripData.days - 1 }}晚</text>
          </view>
          <view class="meta-item">
            <text class="meta-icon">🎯</text>
            <text class="meta-text">{{ totalSpots }}个景点</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 预算卡片 -->
    <view class="section">
      <view class="section-header">
        <view class="section-title">
          <text class="title-icon">💰</text>
          <text>预算明细</text>
        </view>
      </view>
      <view class="budget-card">
        <view class="budget-total">
          <view class="budget-label">预估总预算</view>
          <view class="budget-amount">
            <text class="amount-unit">¥</text>
            <text class="amount-num">{{ formatNumber(tripData.totalBudget) }}</text>
          </view>
        </view>
        <view class="budget-progress">
          <view class="progress-track">
            <view class="progress-fill" style="width: 75%;"></view>
          </view>
        </view>
        <view class="budget-breakdown">
          <view class="breakdown-item">
            <view class="item-dot" style="background: #5FB878;"></view>
            <text class="item-name">门票</text>
            <text class="item-percent">30%</text>
          </view>
          <view class="breakdown-item">
            <view class="item-dot" style="background: #7EC8A6;"></view>
            <text class="item-name">餐饮</text>
            <text class="item-percent">25%</text>
          </view>
          <view class="breakdown-item">
            <view class="item-dot" style="background: #A5D6A7;"></view>
            <text class="item-name">交通</text>
            <text class="item-percent">20%</text>
          </view>
          <view class="breakdown-item">
            <view class="item-dot" style="background: #C8E6C9;"></view>
            <text class="item-name">其他</text>
            <text class="item-percent">25%</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 行程列表 -->
    <view class="section">
      <view class="section-header">
        <view class="section-title">
          <text class="title-icon">🗓️</text>
          <text>行程安排</text>
        </view>
        <view class="section-action" @click="generateChecklist">
          <text class="action-icon">📋</text>
          <text class="action-text">生成清单</text>
        </view>
      </view>

      <!-- Day Cards -->
      <view 
        v-for="(day, dayIndex) in tripData.daysList" 
        :key="dayIndex"
        class="day-card"
      >
        <view class="day-header" @click="toggleDay(dayIndex)">
          <view class="day-info">
            <view class="day-number">Day {{ dayIndex + 1 }}</view>
            <view class="day-route">{{ day.route }}</view>
          </view>
          <view class="day-meta">
            <text class="spot-count">{{ day.spots.length }}个景点</text>
            <text class="expand-icon" :class="{ 'is-expanded': expandedDays.includes(dayIndex) }">▼</text>
          </view>
        </view>
        <view class="day-content" v-if="expandedDays.includes(dayIndex)">
          <view 
            v-for="(spot, spotIndex) in day.spots" 
            :key="spotIndex"
            class="spot-item"
            :class="{ 'is-last': spotIndex === day.spots.length - 1 }"
          >
            <view class="spot-time-line">
              <view class="time-dot"></view>
              <view class="time-line" v-if="spotIndex !== day.spots.length - 1"></view>
            </view>
            <view class="spot-content">
              <view class="spot-header">
                <view class="spot-name">{{ spot.name }}</view>
                <view class="spot-duration">
                  <text class="duration-icon">⏱️</text>
                  <text>{{ spot.duration }}</text>
                </view>
              </view>
              <view class="spot-desc" v-if="spot.desc">{{ spot.desc }}</view>
              <view class="spot-tags" v-if="spot.tags && spot.tags.length">
                <text v-for="(tag, tIndex) in spot.tags" :key="tIndex" class="spot-tag">{{ tag }}</text>
              </view>
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
      isSticky: false,
      expandedDays: [0, 1],
      tripData: {
        title: '西安3日非遗文化游',
        days: 3,
        budgetPerPerson: 800,
        totalBudget: 2400,
        daysList: [
          {
            route: '兵马俑 → 华清宫',
            spots: [
              { 
                name: '秦始皇兵马俑博物馆', 
                duration: '3小时',
                desc: '世界第八大奇迹，感受千年秦军威仪',
                tags: ['世界遗产', '必打卡']
              },
              { 
                name: '华清宫', 
                duration: '2小时',
                desc: '唐代皇家温泉，杨贵妃沐浴之地',
                tags: ['历史文化']
              },
              { 
                name: '回民街美食', 
                duration: '1.5小时',
                desc: '品尝地道西安小吃',
                tags: ['美食推荐']
              }
            ]
          },
          {
            route: '古城墙 → 大雁塔',
            spots: [
              { 
                name: '西安古城墙骑行', 
                duration: '2小时',
                desc: '骑行环游明代古城墙',
                tags: ['户外活动']
              },
              { 
                name: '大雁塔+大唐不夜城', 
                duration: '3小时',
                desc: '唐代佛教圣地，夜景灯光秀',
                tags: ['夜景', '文化']
              }
            ]
          }
        ]
      }
    };
  },
  computed: {
    totalSpots() {
      return this.tripData.daysList.reduce((total, day) => total + day.spots.length, 0);
    }
  },
  onLoad(options) {
    // 统一详情页数据来源：my(我的行程) / daren(达人行程)
    const id = options.id;
    const source = options.source || 'my';
    if (id) {
      this.loadTripData(id, source);
    }
  },
  onPageScroll(e) {
    this.isSticky = e.scrollTop > 80;
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString();
    },
    loadTripData(id, source = 'my') {
      if (source === 'my') {
        const savedTrips = uni.getStorageSync('myTrips') || [];
        const trip = savedTrips.find(t => String(t.id) === String(id));
        if (trip) {
          this.tripData = { ...this.tripData, ...trip };
        }
        return;
      }

      const darenTripMap = {
        'daren-xian-3d': {
          title: '西安3日非遗文化深度游',
          days: 3,
          budgetPerPerson: 800,
          totalBudget: 800,
          daysList: [
            {
              route: '兵马俑 → 华清宫',
              spots: [
                { name: '秦始皇兵马俑博物馆', duration: '09:00-12:00', desc: '世界遗产，经典打卡', tags: ['世界遗产', '达人推荐'] },
                { name: '华清宫', duration: '13:30-16:00', desc: '唐风文化体验', tags: ['历史文化'] }
              ]
            },
            {
              route: '古城墙 → 永兴坊',
              spots: [
                { name: '西安古城墙', duration: '09:30-11:30', desc: '骑行环城体验', tags: ['户外活动'] },
                { name: '永兴坊', duration: '12:30-14:00', desc: '非遗美食街区', tags: ['美食'] }
              ]
            },
            {
              route: '陕西历史博物馆 → 大雁塔',
              spots: [
                { name: '陕西历史博物馆', duration: '09:00-11:30', desc: '了解十三朝文明', tags: ['博物馆'] },
                { name: '大雁塔', duration: '15:00-17:00', desc: '地标夜景拍照', tags: ['文化地标'] }
              ]
            }
          ]
        },
        'daren-chengdu-2d': {
          title: '成都2日美食打卡',
          days: 2,
          budgetPerPerson: 600,
          totalBudget: 600,
          daysList: [
            {
              route: '宽窄巷子 → 人民公园',
              spots: [
                { name: '宽窄巷子', duration: '10:00-12:00', desc: '老成都街巷体验', tags: ['城市漫游'] },
                { name: '人民公园', duration: '14:00-15:30', desc: '体验成都慢生活', tags: ['休闲'] }
              ]
            },
            {
              route: '锦里 → 火锅体验',
              spots: [
                { name: '锦里古街', duration: '10:00-12:00', desc: '川蜀文化与小吃', tags: ['文化'] },
                { name: '本地火锅店', duration: '18:00-20:00', desc: '达人私藏火锅店', tags: ['美食推荐'] }
              ]
            }
          ]
        },
        'daren-guilin-4d': {
          title: '桂林4日山水甲天下',
          days: 4,
          budgetPerPerson: 1200,
          totalBudget: 1200,
          daysList: [
            {
              route: '象鼻山 → 两江四湖',
              spots: [
                { name: '象鼻山', duration: '09:00-11:00', desc: '桂林城市地标', tags: ['自然风光'] },
                { name: '两江四湖夜游', duration: '19:00-20:30', desc: '夜景游船体验', tags: ['夜游'] }
              ]
            },
            {
              route: '漓江 → 阳朔西街',
              spots: [
                { name: '漓江竹筏', duration: '09:00-12:00', desc: '山水画廊精华段', tags: ['必体验'] },
                { name: '阳朔西街', duration: '15:00-17:00', desc: '休闲慢逛', tags: ['打卡'] }
              ]
            },
            {
              route: '遇龙河 → 十里画廊',
              spots: [
                { name: '遇龙河漂流', duration: '09:30-11:30', desc: '田园山水风光', tags: ['自然体验'] },
                { name: '十里画廊骑行', duration: '14:00-16:00', desc: '经典骑行路线', tags: ['户外'] }
              ]
            },
            {
              route: '龙脊梯田',
              spots: [
                { name: '龙脊梯田', duration: '09:00-14:00', desc: '少数民族村寨与梯田景观', tags: ['深度游'] }
              ]
            }
          ]
        }
      };

      if (darenTripMap[id]) {
        this.tripData = { ...this.tripData, ...darenTripMap[id] };
      }
    },
    goBack() {
      uni.navigateBack();
    },
    goToNavigation() {
      uni.navigateTo({
        url: '/pages/navigation/index/index'
      });
    },
    toggleDay(dayIndex) {
      const index = this.expandedDays.indexOf(dayIndex);
      if (index > -1) {
        this.expandedDays.splice(index, 1);
      } else {
        this.expandedDays.push(dayIndex);
      }
    },
    generateChecklist() {
      uni.showToast({
        title: '清单生成中...',
        icon: 'loading'
      });
      setTimeout(() => {
        uni.showToast({
          title: '清单已生成',
          icon: 'success'
        });
      }, 1500);
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

.nav-placeholder {
  width: 36px;
}

/* 吸顶卡片 */
.sticky-card {
  padding: 0 16px 16px;
  background: linear-gradient(180deg, #E8F5E9 0%, #F8FAF9 100%);
  transition: all 0.3s ease;
}

.sticky-card.is-sticky {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 12px 16px;
  background: rgba(255,255,255,0.95);
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.trip-info-card {
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #E8EDE9;
}

.trip-title-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.trip-title {
  font-size: 18px;
  font-weight: 700;
  color: #2C3E50;
}

.trip-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.trip-badge {
  font-size: 11px;
  color: #5FB878;
  background-color: #E8F5E9;
  padding: 4px 10px;
  border-radius: 12px;
}

.nav-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #E8F5E9;
  padding: 4px 10px;
  border-radius: 12px;
}

.nav-btn-icon {
  font-size: 12px;
  margin-right: 3px;
}

.nav-btn-text {
  font-size: 11px;
  color: #5FB878;
  font-weight: 500;
}

.trip-meta {
  display: flex;
  flex-direction: row;
}

.meta-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
}

.meta-icon {
  font-size: 14px;
  margin-right: 4px;
}

.meta-text {
  font-size: 13px;
  color: #5D6D7E;
}

/* 区块样式 */
.section {
  margin-bottom: 20px;
  padding: 0 16px;
}

.section-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  margin-right: 8px;
}

.section-action {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #E8F5E9;
  padding: 6px 12px;
  border-radius: 16px;
}

.section-action .action-icon {
  font-size: 14px;
  margin-right: 4px;
}

.section-action .action-text {
  font-size: 12px;
  color: #5FB878;
  font-weight: 600;
}

/* 预算卡片 */
.budget-card {
  background-color: #FFFFFF;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #E8EDE9;
}

.budget-total {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 16px;
}

.budget-label {
  font-size: 14px;
  color: #5D6D7E;
  margin-right: 12px;
}

.budget-amount {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.amount-unit {
  font-size: 18px;
  color: #5FB878;
  font-weight: 600;
}

.amount-num {
  font-size: 32px;
  color: #5FB878;
  font-weight: 700;
}

.budget-progress {
  margin-bottom: 16px;
}

.progress-track {
  height: 8px;
  background-color: #E8EDE9;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #5FB878 0%, #7EC8A6 100%);
  border-radius: 4px;
}

.budget-breakdown {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.breakdown-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin-bottom: 8px;
}

.item-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}

.item-name {
  font-size: 13px;
  color: #5D6D7E;
  margin-right: 8px;
}

.item-percent {
  font-size: 13px;
  color: #2C3E50;
  font-weight: 600;
}

/* 日程卡片 */
.day-card {
  background-color: #FFFFFF;
  border-radius: 16px;
  margin-bottom: 12px;
  border: 1px solid #E8EDE9;
  overflow: hidden;
}

.day-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #F8FAF9;
}

.day-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.day-number {
  font-size: 14px;
  font-weight: 700;
  color: #5FB878;
  background-color: #E8F5E9;
  padding: 4px 10px;
  border-radius: 12px;
  margin-right: 12px;
}

.day-route {
  font-size: 15px;
  font-weight: 600;
  color: #2C3E50;
}

.day-meta {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.spot-count {
  font-size: 12px;
  color: #95A5A6;
  margin-right: 8px;
}

.expand-icon {
  font-size: 12px;
  color: #95A5A6;
  transition: transform 0.3s ease;
}

.expand-icon.is-expanded {
  transform: rotate(180deg);
}

.day-content {
  padding: 16px;
}

/* 景点项 */
.spot-item {
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
}

.spot-item.is-last {
  padding-bottom: 0;
}

.spot-time-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  margin-right: 12px;
}

.time-dot {
  width: 10px;
  height: 10px;
  background-color: #5FB878;
  border-radius: 50%;
  border: 2px solid #E8F5E9;
}

.time-line {
  flex: 1;
  width: 2px;
  background-color: #E8EDE9;
  margin-top: 4px;
}

.spot-content {
  flex: 1;
}

.spot-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.spot-name {
  font-size: 15px;
  font-weight: 600;
  color: #2C3E50;
}

.spot-duration {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  color: #95A5A6;
}

.duration-icon {
  font-size: 12px;
  margin-right: 2px;
}

.spot-desc {
  font-size: 13px;
  color: #5D6D7E;
  line-height: 1.5;
  margin-bottom: 8px;
}

.spot-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.spot-tag {
  font-size: 11px;
  color: #5FB878;
  background-color: #E8F5E9;
  padding: 3px 8px;
  border-radius: 10px;
  margin-right: 6px;
  margin-bottom: 4px;
}

/* 底部留白 */
.bottom-space {
  height: 30px;
}
</style>