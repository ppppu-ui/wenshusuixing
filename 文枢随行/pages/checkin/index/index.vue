<template>
  <view class="page">
    <div class="nav">
      <span class="back-btn" @click="goBack">←</span>
      打卡任务
    </div>
    <div class="checkin-header">
      <div class="checkin-header-title">每日打卡</div>
      <div class="checkin-header-subtitle">连续打卡30天，赢取旅行基金</div>
    </div>
    <div class="checkin-calendar">
      <div class="checkin-calendar-header">
        <span class="checkin-calendar-month">10月 2026</span>
        <div class="checkin-calendar-stats">
          <span>已打卡 15 天</span>
          <span>连续 7 天</span>
        </div>
      </div>
      <div class="checkin-calendar-days">
        <div class="checkin-calendar-day">日</div>
        <div class="checkin-calendar-day">一</div>
        <div class="checkin-calendar-day">二</div>
        <div class="checkin-calendar-day">三</div>
        <div class="checkin-calendar-day">四</div>
        <div class="checkin-calendar-day">五</div>
        <div class="checkin-calendar-day">六</div>
        <div class="checkin-calendar-date disabled">28</div>
        <div class="checkin-calendar-date disabled">29</div>
        <div class="checkin-calendar-date disabled">30</div>
        <div class="checkin-calendar-date">1</div>
        <div class="checkin-calendar-date checked">2</div>
        <div class="checkin-calendar-date checked">3</div>
        <div class="checkin-calendar-date checked">4</div>
        <div class="checkin-calendar-date checked">5</div>
        <div class="checkin-calendar-date checked">6</div>
        <div class="checkin-calendar-date checked">7</div>
        <div class="checkin-calendar-date checked today">8</div>
        <div class="checkin-calendar-date">9</div>
        <div class="checkin-calendar-date">10</div>
        <div class="checkin-calendar-date">11</div>
        <div class="checkin-calendar-date">12</div>
        <div class="checkin-calendar-date">13</div>
        <div class="checkin-calendar-date">14</div>
        <div class="checkin-calendar-date">15</div>
        <div class="checkin-calendar-date">16</div>
        <div class="checkin-calendar-date">17</div>
        <div class="checkin-calendar-date">18</div>
        <div class="checkin-calendar-date">19</div>
        <div class="checkin-calendar-date">20</div>
        <div class="checkin-calendar-date">21</div>
        <div class="checkin-calendar-date">22</div>
        <div class="checkin-calendar-date">23</div>
        <div class="checkin-calendar-date">24</div>
        <div class="checkin-calendar-date">25</div>
        <div class="checkin-calendar-date">26</div>
        <div class="checkin-calendar-date">27</div>
        <div class="checkin-calendar-date">28</div>
        <div class="checkin-calendar-date">29</div>
        <div class="checkin-calendar-date">30</div>
        <div class="checkin-calendar-date">31</div>
      </div>
    </div>
    <div class="checkin-tasks">
      <div class="checkin-tasks-title">今日任务</div>
      <div class="checkin-task-item">
        <div class="checkin-task-icon">📸</div>
        <div class="checkin-task-content">
          <div class="checkin-task-name">分享今日旅行照片</div>
          <div class="checkin-task-reward">+10 积分</div>
        </div>
        <div class="checkin-task-status completed">已完成</div>
      </div>
      <div class="checkin-task-item" @click="goToAnswerQuestion">
        <div class="checkin-task-icon">💬</div>
        <div class="checkin-task-content">
          <div class="checkin-task-name">回答一个旅行问题</div>
          <div class="checkin-task-reward">+15 积分</div>
        </div>
        <div class="checkin-task-status">去完成</div>
      </div>
      <div class="checkin-task-item" @click="goToCustomTrip">
        <div class="checkin-task-icon">✈️</div>
        <div class="checkin-task-content">
          <div class="checkin-task-name">定制一个行程</div>
          <div class="checkin-task-reward">+25 积分</div>
        </div>
        <div class="checkin-task-status">去完成</div>
      </div>
    </div>
    <div class="checkin-rewards">
      <div class="checkin-rewards-title">打卡奖励</div>
      <div class="checkin-rewards-list">
        <div class="checkin-reward-item">
          <div class="checkin-reward-icon">🎁</div>
          <div class="checkin-reward-content">
            <div class="checkin-reward-name">连续7天</div>
            <div class="checkin-reward-desc">旅行装备优惠券</div>
          </div>
          <div class="checkin-reward-status received">已领取</div>
        </div>
        <div class="checkin-reward-item">
          <div class="checkin-reward-icon">🎯</div>
          <div class="checkin-reward-content">
            <div class="checkin-reward-name">连续14天</div>
            <div class="checkin-reward-desc">景区门票折扣</div>
          </div>
          <div class="checkin-reward-status pending">未达成</div>
        </div>
        <div class="checkin-reward-item">
          <div class="checkin-reward-icon">🏆</div>
          <div class="checkin-reward-content">
            <div class="checkin-reward-name">连续30天</div>
            <div class="checkin-reward-desc">旅行基金500元</div>
          </div>
          <div class="checkin-reward-status">未达成</div>
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
    goToAnswerQuestion() {
      // 跳转到问答页面
      uni.switchTab({
        url: '/pages/service/index/index'
      });
    },
    goToCustomTrip() {
      // 跳转到AI行程定制页面
      uni.navigateTo({
        url: '/pages/ai-trip/index/index'
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

.checkin-header {
  background: linear-gradient(135deg, #E8F5E9, #F1F8E9);
  padding: 24px 16px;
  text-align: center;
  border-radius: 0 0 24px 24px;
  margin-bottom: 24px;
}

.checkin-header-title {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
  margin-bottom: 8px;
}

.checkin-header-subtitle {
  font-size: 14px;
  color: #495057;
}

.checkin-calendar {
  background: #fff;
  margin: 0 16px 24px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.checkin-calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.checkin-calendar-month {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
}

.checkin-calendar-stats {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #6C757D;
}

.checkin-calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  text-align: center;
}

.checkin-calendar-day {
  font-size: 13px;
  font-weight: 600;
  color: #6C757D;
  padding: 8px;
}

.checkin-calendar-date {
  font-size: 14px;
  font-weight: 500;
  color: #212529;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
}

.checkin-calendar-date:active {
  background: #E8F5E9;
  transform: scale(1.1);
}

.checkin-calendar-date.checked {
  background: #4CAF50;
  color: #fff;
  font-weight: 600;
}

.checkin-calendar-date.today {
  background: #2196F3;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(33,150,243,0.3);
}

.checkin-calendar-date.disabled {
  color: #ADB5BD;
  cursor: not-allowed;
}

.checkin-calendar-date.disabled:active {
  background: none;
  transform: none;
}

.checkin-tasks {
  background: #fff;
  margin: 0 16px 24px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.checkin-tasks-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 16px;
}

.checkin-task-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #F8F9FA;
  border-radius: 12px;
  margin-bottom: 12px;
  transition: all 0.2s;
  cursor: pointer;
}

.checkin-task-item:last-child {
  margin-bottom: 0;
}

.checkin-task-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.checkin-task-icon {
  font-size: 24px;
  margin-right: 16px;
  width: 32px;
  text-align: center;
}

.checkin-task-content {
  flex: 1;
}

.checkin-task-name {
  font-size: 15px;
  font-weight: 500;
  color: #212529;
  margin-bottom: 4px;
}

.checkin-task-reward {
  font-size: 13px;
  color: #4CAF50;
  font-weight: 600;
}

.checkin-task-status {
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
  transition: all 0.2s;
}

.checkin-task-status.completed {
  background: #E8F5E9;
  color: #2E7D32;
}

.checkin-task-status:not(.completed) {
  background: #E3F2FD;
  color: #1976D2;
  cursor: pointer;
}

.checkin-task-status:not(.completed):active {
  background: #BBDEFB;
  transform: scale(0.95);
}

.checkin-rewards {
  background: #fff;
  margin: 0 16px 24px;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.checkin-rewards-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 16px;
}

.checkin-rewards-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkin-reward-item {
  display: flex;
  align-items: center;
  padding: 16px;
  background: #F8F9FA;
  border-radius: 12px;
  transition: all 0.2s;
  cursor: pointer;
}

.checkin-reward-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.checkin-reward-icon {
  font-size: 24px;
  margin-right: 16px;
  width: 32px;
  text-align: center;
}

.checkin-reward-content {
  flex: 1;
}

.checkin-reward-name {
  font-size: 15px;
  font-weight: 500;
  color: #212529;
  margin-bottom: 4px;
}

.checkin-reward-desc {
  font-size: 13px;
  color: #6C757D;
}

.checkin-reward-status {
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
}

.checkin-reward-status.received {
  background: #E8F5E9;
  color: #2E7D32;
}

.checkin-reward-status.pending {
  background: #E9ECEF;
  color: #6C757D;
}
</style>