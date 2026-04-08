<template>
  <view class="page">
    <div class="nav">
      <span class="back-btn" @click="goBack">←</span>
      打卡详情
    </div>
    <div class="checkin-detail-header">
      <div class="checkin-detail-date">2026年10月8日</div>
      <div class="checkin-detail-status">
        <span class="checkin-detail-status-icon">✅</span>
        <span class="checkin-detail-status-text">今日已打卡</span>
      </div>
    </div>
    <div class="checkin-detail-content">
      <div class="checkin-detail-section">
        <div class="checkin-detail-section-title">打卡记录</div>
        <div class="checkin-detail-record">
          <div class="checkin-detail-record-item">
            <div class="checkin-detail-record-time">08:30</div>
            <div class="checkin-detail-record-content">
              <div class="checkin-detail-record-title">每日签到</div>
              <div class="checkin-detail-record-desc">连续打卡第7天</div>
            </div>
            <div class="checkin-detail-record-reward">+5 积分</div>
          </div>
          <div class="checkin-detail-record-item">
            <div class="checkin-detail-record-time">10:15</div>
            <div class="checkin-detail-record-content">
              <div class="checkin-detail-record-title">分享旅行照片</div>
              <div class="checkin-detail-record-desc">分享了秦始皇兵马俑的照片</div>
            </div>
            <div class="checkin-detail-record-reward">+10 积分</div>
          </div>
        </div>
      </div>
      <div class="checkin-detail-section">
        <div class="checkin-detail-section-title">获得奖励</div>
        <div class="checkin-detail-rewards">
          <div class="checkin-detail-reward-item">
            <div class="checkin-detail-reward-icon">🎁</div>
            <div class="checkin-detail-reward-content">
              <div class="checkin-detail-reward-name">连续7天打卡奖励</div>
              <div class="checkin-detail-reward-desc">旅行装备优惠券</div>
            </div>
            <div class="checkin-detail-reward-status">已领取</div>
          </div>
        </div>
      </div>
      <div class="checkin-detail-section">
        <div class="checkin-detail-section-title">打卡统计</div>
        <div class="checkin-detail-stats">
          <div class="checkin-detail-stat-item">
            <div class="checkin-detail-stat-value">7</div>
            <div class="checkin-detail-stat-label">连续打卡</div>
          </div>
          <div class="checkin-detail-stat-item">
            <div class="checkin-detail-stat-value">15</div>
            <div class="checkin-detail-stat-label">本月打卡</div>
          </div>
          <div class="checkin-detail-stat-item">
            <div class="checkin-detail-stat-value">25</div>
            <div class="checkin-detail-stat-label">总打卡</div>
          </div>
          <div class="checkin-detail-stat-item">
            <div class="checkin-detail-stat-value">120</div>
            <div class="checkin-detail-stat-label">总积分</div>
          </div>
        </div>
      </div>
      <div class="checkin-detail-section">
        <div class="checkin-detail-section-title">打卡照片</div>
        <div class="checkin-detail-photos">
          <div class="checkin-detail-photo-item">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Terracotta%20Warriors%20Xi%20an%20ancient%20history%20cultural%20relic&image_size=landscape_16_9" alt="兵马俑照片" />
            <div class="checkin-detail-photo-desc">秦始皇兵马俑</div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkin-detail-footer">
      <div class="checkin-detail-footer-text">继续坚持，距离30天打卡目标还有23天</div>
      <div class="checkin-detail-footer-btn" @click="shareCheckin">分享打卡</div>
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
    shareCheckin() {
      // 分享打卡的逻辑
      console.log('分享打卡');
      uni.showToast({
        title: '分享成功',
        icon: 'success'
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

.checkin-detail-header {
  background: linear-gradient(135deg, #E8F5E9, #F1F8E9);
  padding: 24px 16px;
  border-radius: 0 0 24px 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkin-detail-date {
  font-size: 18px;
  font-weight: 700;
  color: #212529;
}

.checkin-detail-status {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #4CAF50;
  padding: 6px 12px;
  border-radius: 16px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.checkin-detail-status-icon {
  font-size: 16px;
}

.checkin-detail-content {
  padding: 0 16px;
}

.checkin-detail-section {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.checkin-detail-section-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #F1F3F5;
}

.checkin-detail-record {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkin-detail-record-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #F8F9FA;
  border-radius: 12px;
  transition: all 0.2s;
}

.checkin-detail-record-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.checkin-detail-record-time {
  font-size: 13px;
  font-weight: 600;
  color: #6C757D;
  width: 60px;
  flex-shrink: 0;
}

.checkin-detail-record-content {
  flex: 1;
  margin-left: 12px;
}

.checkin-detail-record-title {
  font-size: 15px;
  font-weight: 500;
  color: #212529;
  margin-bottom: 4px;
}

.checkin-detail-record-desc {
  font-size: 13px;
  color: #6C757D;
}

.checkin-detail-record-reward {
  font-size: 13px;
  font-weight: 600;
  color: #4CAF50;
  background: #E8F5E9;
  padding: 4px 8px;
  border-radius: 8px;
}

.checkin-detail-rewards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkin-detail-reward-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #F8F9FA;
  border-radius: 12px;
  transition: all 0.2s;
}

.checkin-detail-reward-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.checkin-detail-reward-icon {
  font-size: 24px;
  margin-right: 16px;
  width: 32px;
  text-align: center;
}

.checkin-detail-reward-content {
  flex: 1;
}

.checkin-detail-reward-name {
  font-size: 15px;
  font-weight: 500;
  color: #212529;
  margin-bottom: 4px;
}

.checkin-detail-reward-desc {
  font-size: 13px;
  color: #6C757D;
}

.checkin-detail-reward-status {
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  background: #E8F5E9;
  color: #2E7D32;
}

.checkin-detail-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.checkin-detail-stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: #F8F9FA;
  border-radius: 12px;
  transition: all 0.2s;
  cursor: pointer;
}

.checkin-detail-stat-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.checkin-detail-stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #4CAF50;
  margin-bottom: 4px;
}

.checkin-detail-stat-label {
  font-size: 13px;
  color: #6C757D;
  font-weight: 500;
}

.checkin-detail-photos {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkin-detail-photo-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.2s;
  cursor: pointer;
}

.checkin-detail-photo-item:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.checkin-detail-photo-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.checkin-detail-photo-desc {
  padding: 12px;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  color: #212529;
  text-align: center;
}

.checkin-detail-footer {
  background: #fff;
  padding: 20px 16px;
  margin: 24px 0 0;
  border-top: 1px solid #F1F3F5;
  position: sticky;
  bottom: 0;
  z-index: 90;
}

.checkin-detail-footer-text {
  font-size: 14px;
  color: #6C757D;
  text-align: center;
  margin-bottom: 16px;
}

.checkin-detail-footer-btn {
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 14px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(76,175,80,0.2);
}

.checkin-detail-footer-btn:active {
  transform: scale(0.98);
  opacity: 0.92;
}
</style>