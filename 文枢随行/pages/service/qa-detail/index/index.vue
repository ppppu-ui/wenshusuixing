<template>
  <view class="page">
    <div class="nav">
      <span class="back-btn" @click="goBack">←</span>
      问答详情
    </div>
    <div class="qa-detail-content">
      <div class="qa-detail-question">
        <div class="qa-detail-question-title">秦始皇兵马俑需要提前预约吗？有线下售票窗口吗？</div>
        <div class="qa-detail-question-meta">
          <span class="qa-detail-question-time">2026-0X-0X</span>
          <span class="qa-detail-question-tags">
            <span class="qa-detail-question-tag">门票信息</span>
            <span class="qa-detail-question-tag">西安</span>
          </span>
        </div>
      </div>
      <div class="qa-detail-answer">
        <div class="qa-detail-answer-header">
          <div class="qa-detail-answer-avatar">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20guide%20portrait%20friendly%20smile&image_size=square" alt="回答者头像" />
          </div>
          <div class="qa-detail-answer-info">
            <div class="qa-detail-answer-name">西安老陕</div>
            <div class="qa-detail-answer-badge">本地达人</div>
          </div>
          <div class="qa-detail-answer-time">2026-0X-0X 10:25</div>
        </div>
        <div class="qa-detail-answer-content">
          <p>有线下售票窗口！</p>
          <p>预约方式：关注「秦始皇兵马俑博物馆」官方公众号，提前1-3天预约门票。节假日、周末一定要尽早预约，否则很容易没票。</p>
          <p>门票价格：成人120元，学生半价，65岁以上老人免票。</p>
        </div>
      </div>
      <div class="qa-detail-follow-up">
        <div class="qa-detail-follow-up-title">游客补充追问</div>
        <div class="qa-detail-follow-up-question">
          <div class="qa-detail-follow-up-question-header">
            <div class="qa-detail-follow-up-question-avatar">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tourist%20portrait%20friendly%20smile&image_size=square" alt="游客头像" />
            </div>
            <div class="qa-detail-follow-up-question-info">
              <div class="qa-detail-follow-up-question-name">游客</div>
              <div class="qa-detail-follow-up-question-time">2026-0X-0X 11:00</div>
            </div>
          </div>
          <div class="qa-detail-follow-up-question-content">
            请问从西安市区怎么去最方便？大概需要多久？
          </div>
        </div>
        <div class="qa-detail-follow-up-answer">
          <div class="qa-detail-follow-up-answer-header">
            <div class="qa-detail-follow-up-answer-avatar">
              <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20guide%20portrait%20friendly%20smile&image_size=square" alt="回答者头像" />
            </div>
            <div class="qa-detail-follow-up-answer-info">
              <div class="qa-detail-follow-up-answer-name">西安老陕</div>
              <div class="qa-detail-follow-up-answer-badge">本地达人</div>
            </div>
            <div class="qa-detail-follow-up-answer-time">2026-0X-0X 11:15</div>
          </div>
          <div class="qa-detail-follow-up-answer-content">
            地铁9号线直达「华清池站」，出站后打车10分钟就到景区大门，全程约1小时，非常方便！
          </div>
        </div>
      </div>
    </div>
    <div class="qa-detail-actions">
      <div class="qa-detail-action-btn" @click="likeAnswer">
        <span class="qa-detail-action-icon">👍</span>
        <span class="qa-detail-action-text">128</span>
      </div>
      <div class="qa-detail-action-btn" @click="collectAnswer">
        <span class="qa-detail-action-icon">⭐</span>
        <span class="qa-detail-action-text">收藏</span>
      </div>
      <div class="qa-detail-action-btn" @click="shareAnswer">
        <span class="qa-detail-action-icon">📤</span>
        <span class="qa-detail-action-text">分享</span>
      </div>
      <div class="qa-detail-action-btn qa-detail-action-btn-primary" @click="askQuestion">
        <span class="qa-detail-action-icon">💬</span>
        <span class="qa-detail-action-text">我也要追问</span>
      </div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      liked: false,
      collected: false
    };
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    likeAnswer() {
      this.liked = !this.liked;
      // 点赞逻辑
      console.log('点赞');
    },
    collectAnswer() {
      this.collected = !this.collected;
      // 收藏逻辑
      console.log('收藏');
    },
    shareAnswer() {
      // 分享逻辑
      console.log('分享');
      uni.showToast({
        title: '分享成功',
        icon: 'success'
      });
    },
    askQuestion() {
      uni.navigateTo({
        url: '/pages/service/qa-ask/index/index'
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
  padding-bottom: 70px;
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

.qa-detail-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.qa-detail-question {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.qa-detail-question-title {
  font-size: 18px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 12px;
  line-height: 1.4;
}

.qa-detail-question-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #6C757D;
}

.qa-detail-question-tags {
  display: flex;
  gap: 8px;
}

.qa-detail-question-tag {
  padding: 2px 8px;
  background: #E3F2FD;
  color: #1976D2;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 500;
}

.qa-detail-answer {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-left: 4px solid #4CAF50;
}

.qa-detail-answer-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.qa-detail-answer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #E8F5E9;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.qa-detail-answer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.qa-detail-answer-info {
  flex: 1;
}

.qa-detail-answer-name {
  font-size: 14px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 4px;
}

.qa-detail-answer-badge {
  font-size: 10px;
  padding: 2px 8px;
  background: #E8F5E9;
  color: #2E7D32;
  border-radius: 10px;
  font-weight: 500;
  display: inline-block;
}

.qa-detail-answer-time {
  font-size: 12px;
  color: #6C757D;
  flex-shrink: 0;
}

.qa-detail-answer-content {
  font-size: 14px;
  color: #495057;
  line-height: 1.5;
}

.qa-detail-answer-content p {
  margin-bottom: 8px;
}

.qa-detail-answer-content p:last-child {
  margin-bottom: 0;
}

.qa-detail-follow-up {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.qa-detail-follow-up-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #F1F3F5;
}

.qa-detail-follow-up-question {
  background: #F8F9FA;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.qa-detail-follow-up-question-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.qa-detail-follow-up-question-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #E8F5E9;
  flex-shrink: 0;
}

.qa-detail-follow-up-question-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.qa-detail-follow-up-question-info {
  flex: 1;
}

.qa-detail-follow-up-question-name {
  font-size: 12px;
  font-weight: 500;
  color: #212529;
  margin-bottom: 2px;
}

.qa-detail-follow-up-question-time {
  font-size: 10px;
  color: #6C757D;
}

.qa-detail-follow-up-question-content {
  font-size: 14px;
  color: #495057;
  line-height: 1.4;
}

.qa-detail-follow-up-answer {
  background: #E3F2FD;
  padding: 16px;
  border-radius: 8px;
}

.qa-detail-follow-up-answer-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.qa-detail-follow-up-answer-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #BBDEFB;
  flex-shrink: 0;
}

.qa-detail-follow-up-answer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.qa-detail-follow-up-answer-info {
  flex: 1;
}

.qa-detail-follow-up-answer-name {
  font-size: 12px;
  font-weight: 500;
  color: #212529;
  margin-bottom: 2px;
}

.qa-detail-follow-up-answer-badge {
  font-size: 10px;
  padding: 2px 8px;
  background: #BBDEFB;
  color: #1976D2;
  border-radius: 10px;
  font-weight: 500;
  display: inline-block;
}

.qa-detail-follow-up-answer-time {
  font-size: 10px;
  color: #6C757D;
  flex-shrink: 0;
}

.qa-detail-follow-up-answer-content {
  font-size: 14px;
  color: #495057;
  line-height: 1.4;
}

.qa-detail-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 12px 16px;
  border-top: 1px solid #DEE2E6;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.05);
}

.qa-detail-action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: #6C757D;
  background: #F8F9FA;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  justify-content: center;
}

.qa-detail-action-btn:active {
  transform: scale(0.95);
  background: #E9ECEF;
}

.qa-detail-action-btn-primary {
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  color: #fff;
  font-weight: 500;
  flex: 2;
}

.qa-detail-action-btn-primary:active {
  background: linear-gradient(90deg, #388E3C, #4CAF50);
  transform: scale(0.95);
}

.qa-detail-action-icon {
  font-size: 16px;
}

.qa-detail-action-text {
  font-size: 12px;
}
</style>
