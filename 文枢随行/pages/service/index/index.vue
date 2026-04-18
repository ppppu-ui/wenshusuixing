<template>
  <view class="page">
    <div class="search-container">
      <div class="search-box">
        <input type="text" placeholder="搜索问题/服务/目的地" class="search-input" />
        <span class="search-icon">🔍</span>
      </div>
    </div>
    <div class="service-cards">
      <div class="service-card emergency" @click="goToEmergency">
        <div class="service-card-icon">
          <span class="service-card-icon-text">SOS</span>
        </div>
        <div class="service-card-content">
          <div class="service-card-title">紧急求助</div>
          <div class="service-card-desc">医疗/走失/遗失求助</div>
        </div>
      </div>
      <div class="service-card guide" @click="goToGuide">
        <div class="service-card-icon">
          <span>🧭</span>
        </div>
        <div class="service-card-content">
          <div class="service-card-title">本地向导</div>
          <div class="service-card-desc">呼叫附近专业向导</div>
        </div>
      </div>
    </div>
    <div class="qa-section">
      <div class="qa-input" @click="goToQAAsk">
        <span class="qa-input-icon">🤔</span>
        <span class="qa-input-placeholder">你有什么旅行问题？问问本地人～</span>
      </div>
      <div class="qa-list">
        <div
          class="qa-item"
          v-for="item in qaListDisplay"
          :key="item.id"
          @click="goToQADetail(item)"
        >
          <div class="qa-item-header">
            <span class="qa-item-user">{{ item.user }}</span>
            <span class="qa-item-time">{{ item.time }}</span>
            <span class="qa-item-location">{{ item.location }}</span>
          </div>
          <div class="qa-item-question">{{ item.question }}</div>
          <div class="qa-item-answer" v-if="item.answer">
            <div class="qa-item-answerer">本地达人「{{ item.answerer }}」解答 ✅</div>
            <div class="qa-item-answer-content">{{ item.answer }}</div>
          </div>
        </div>
        <div class="qa-empty" v-if="qaListDisplay.length === 0">暂无问答数据</div>
      </div>
    </div>
  </view>
</template>

<script>
const BASE_URL = 'http://10.158.14.40:8080';

export default {
  data() {
    return {
      qaList: []
    };
  },
  onShow() {
    this.fetchQaList();
  },
  computed: {
    qaListDisplay() {
      if (this.qaList.length > 0) return this.qaList;
      return [
        {
          id: 'local-1',
          user: '游客',
          time: '2小时前',
          location: '西安',
          question: '西安兵马俑需要提前预约吗？现场能买票吗？',
          answerer: '西安老陕',
          answer: '需要提前1-3天在官方公众号预约，现场无线下票口，节假日建议更早预约，避免没票～'
        },
        {
          id: 'local-2',
          user: '游客',
          time: '5小时前',
          location: '成都',
          question: '成都本地人推荐的火锅店，不要网红店！',
          answerer: '',
          answer: ''
        }
      ];
    }
  },
  methods: {
    fetchQaList() {
      const token = uni.getStorageSync('token');
      const userInfo = uni.getStorageSync('userInfo') || {};
      uni.request({
        url: `${BASE_URL}/api/expert/question/list`,
        method: 'GET',
        header: {
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        data: {
          userId: userInfo.id || userInfo.userId || undefined,
          page: 1,
          size: 10
        },
        success: (res) => {
          const resp = res.data || {};
          if (res.statusCode !== 200) return;
          if (resp.code && resp.code !== 200) return;

          const list = this.extractList(resp.data);
          this.qaList = list.map(this.mapQaItem).filter(Boolean);
        }
      });
    },
    extractList(data) {
      if (Array.isArray(data)) return data;
      if (data && Array.isArray(data.records)) return data.records;
      if (data && Array.isArray(data.list)) return data.list;
      if (data && Array.isArray(data.items)) return data.items;
      return [];
    },
    mapQaItem(item) {
      if (!item || typeof item !== 'object') return null;
      return {
        id: item.id || item.questionId,
        user: item.userName || '游客',
        time: item.createTimeText || '刚刚',
        location: item.city || '未知地点',
        question: item.question || item.content || '暂无问题内容',
        answerer: item.expertName || '本地达人',
        answer: item.answer || item.latestAnswer || ''
      };
    },
    goBack() {
      uni.navigateBack();
    },
    goToEmergency() {
      uni.navigateTo({
        url: '/pages/service/emergency/index/index',
        fail: (err) => {
          console.error('跳转失败:', err);
          uni.showToast({
            title: '页面跳转失败',
            icon: 'none'
          });
        }
      });
    },
    goToGuide() {
      uni.navigateTo({
        url: '/pages/service/guide/index/index',
        fail: (err) => {
          console.error('跳转失败:', err);
          uni.showToast({
            title: '页面跳转失败',
            icon: 'none'
          });
        }
      });
    },
    goToQADetail(item) {
      const id = item && item.id ? item.id : '';
      uni.navigateTo({
        url: `/pages/service/qa-detail/index/index${id ? `?id=${id}` : ''}`,
        fail: (err) => {
          console.error('跳转失败:', err);
          uni.showToast({
            title: '页面跳转失败',
            icon: 'none'
          });
        }
      });
    },
    goToQAAsk() {
      uni.navigateTo({
        url: '/pages/service/qa-ask/index/index',
        fail: (err) => {
          console.error('跳转失败:', err);
          uni.showToast({
            title: '页面跳转失败',
            icon: 'none'
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  background: #F8F9FA;
}

.search-container {
  padding: 16px;
}

.search-box {
  position: relative;
  background: #fff;
  border-radius: 24px;
  padding: 0 16px;
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #495057;
}

.search-icon {
  font-size: 16px;
  color: #ADB5BD;
  cursor: pointer;
}

.service-cards {
  display: flex;
  gap: 16px;
  padding: 0 16px 16px;
}

.service-card {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
}

.service-card:active {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
}

.service-card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
}

.service-card.emergency .service-card-icon {
  background: linear-gradient(135deg, #FF5722, #FF9800);
  color: #fff;
}

.service-card.guide .service-card-icon {
  background: linear-gradient(135deg, #2196F3, #64B5F6);
  color: #fff;
}

.service-card-icon-text {
  font-size: 18px;
}

.service-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 8px;
}

.service-card-desc {
  font-size: 13px;
  color: #6C757D;
  line-height: 1.4;
}

.qa-section {
  background: #fff;
  border-radius: 12px;
  margin: 0 16px 24px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.qa-input {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #F8F9FA;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.qa-input:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.qa-input-icon {
  font-size: 20px;
}

.qa-input-placeholder {
  font-size: 14px;
  color: #6C757D;
  flex: 1;
}

.qa-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.qa-item {
  padding: 16px;
  background: #F8F9FA;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
}

.qa-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.qa-item-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 13px;
  color: #6C757D;
}

.qa-item-user {
  font-weight: 500;
  color: #495057;
}

.qa-item-time {
  font-size: 12px;
}

.qa-item-location {
  font-size: 12px;
  padding: 2px 8px;
  background: #E3F2FD;
  color: #1976D2;
  border-radius: 12px;
  font-weight: 500;
}

.qa-item-question {
  font-size: 15px;
  color: #212529;
  font-weight: 500;
  margin-bottom: 12px;
  line-height: 1.4;
}

.qa-item-answer {
  background: #E8F5E9;
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.qa-item-answerer {
  font-size: 12px;
  color: #2E7D32;
  font-weight: 500;
  margin-bottom: 8px;
}

.qa-item-answer-content {
  font-size: 13px;
  color: #495057;
  line-height: 1.4;
}

.qa-empty {
  padding: 12px;
  text-align: center;
  color: #95A5A6;
  font-size: 13px;
}
</style>
