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
        <view class="nav-title">AI行程定制</view>
        <view class="nav-placeholder"></view>
      </view>
    </view>

    <!-- 引导文案 -->
    <view class="guide-section">
      <view class="guide-title">✨ 智能规划您的完美旅程</view>
      <view class="guide-desc">告诉我们您的偏好，AI为您量身定制专属行程</view>
    </view>

    <!-- 表单区域 -->
    <view class="form-container">
      <!-- 目的地 -->
      <view class="form-item" :class="{ 'has-error': errors.destination }">
        <view class="form-label">
          <text class="label-text">目的地</text>
          <text class="required-mark">*</text>
        </view>
        <view class="input-wrapper">
          <text class="input-icon">📍</text>
          <input 
            type="text" 
            class="form-input" 
            placeholder="请输入想去的城市或景点" 
            v-model="formData.destination"
            @blur="validateField('destination')"
          >
        </view>
        <view class="error-msg" v-if="errors.destination">{{ errors.destination }}</view>
      </view>

      <!-- 出行天数 -->
      <view class="form-item" :class="{ 'has-error': errors.days }">
        <view class="form-label">
          <text class="label-text">出行天数</text>
          <text class="required-mark">*</text>
        </view>
        <scroll-view class="days-scroll" scroll-x="true" show-scrollbar="false">
          <view class="days-list">
            <view 
              v-for="day in 8" 
              :key="day"
              class="day-btn"
              :class="{ active: formData.days === day }"
              @click="selectDays(day)"
            >
              <text class="day-text">{{ day >= 8 ? '7+' : day }}</text>
              <text class="day-unit">天</text>
            </view>
          </view>
        </scroll-view>
        <view class="error-msg" v-if="errors.days">{{ errors.days }}</view>
      </view>

      <!-- 人均预算 -->
      <view class="form-item" :class="{ 'has-error': errors.budget }">
        <view class="form-label">
          <text class="label-text">人均预算</text>
          <text class="required-mark">*</text>
        </view>
        <view class="input-wrapper">
          <text class="input-icon">💰</text>
          <input 
            type="digit" 
            class="form-input" 
            placeholder="请输入预算金额" 
            v-model="formData.budget"
            @blur="validateField('budget')"
          >
          <text class="input-unit">元</text>
        </view>
        <view class="budget-hint">
          <text v-for="(hint, index) in budgetHints" :key="index" class="hint-tag" @click="setBudget(hint.value)">{{ hint.label }}</text>
        </view>
        <view class="error-msg" v-if="errors.budget">{{ errors.budget }}</view>
      </view>

      <!-- 出行兴趣 -->
      <view class="form-item" :class="{ 'has-error': errors.interests }">
        <view class="form-label">
          <text class="label-text">出行兴趣</text>
          <text class="required-mark">*</text>
          <text class="limit-hint">（最多选3个）</text>
        </view>
        <view class="interest-grid">
          <view 
            v-for="(interest, index) in interests" 
            :key="index"
            class="interest-item"
            :class="{ 
              active: selectedInterests.includes(interest.value),
              disabled: !selectedInterests.includes(interest.value) && selectedInterests.length >= 3
            }"
            @click="toggleInterest(interest.value)"
          >
            <text class="interest-icon">{{ interest.icon }}</text>
            <text class="interest-name">{{ interest.label }}</text>
          </view>
        </view>
        
        <!-- 自定义兴趣输入 -->
        <view class="custom-interest">
          <view class="custom-interest-label">
            <text class="label-icon">✏️</text>
            <text class="label-text">自定义兴趣</text>
            <text class="optional-mark">（选填）</text>
          </view>
          <view class="custom-interest-input-wrapper">
            <input 
              type="text" 
              class="custom-interest-input" 
              placeholder="例如：喜欢安静、喜欢拍照、不吃辣..." 
              v-model="formData.customInterest"
              :disabled="selectedInterests.length >= 3"
            >
          </view>
          <view class="custom-interest-hint" v-if="selectedInterests.length >= 3">
            <text class="hint-text">已选满3个兴趣，无法添加自定义</text>
          </view>
        </view>
        
        <view class="selected-count" v-if="selectedInterests.length > 0 || formData.customInterest">
          已选择 {{ selectedInterests.length + (formData.customInterest ? 1 : 0) }}/3 个
        </view>
        <view class="error-msg" v-if="errors.interests">{{ errors.interests }}</view>
      </view>

      <!-- 必去景点 -->
      <view class="form-item">
        <view class="form-label">
          <text class="label-text">必去景点</text>
          <text class="optional-mark">（选填）</text>
        </view>
        <view class="input-wrapper">
          <text class="input-icon">🏛️</text>
          <input 
            type="text" 
            class="form-input" 
            placeholder="请输入必去景点，多个用逗号分隔" 
            v-model="formData.mustVisit"
          >
        </view>
      </view>
    </view>

    <!-- 提交按钮区域 -->
    <view class="submit-section">
      <view class="submit-hint">
        <text class="hint-icon">💡</text>
        <text class="hint-text">AI将根据您的选择，智能规划最优路线</text>
      </view>
      <view 
        class="submit-btn" 
        :class="{ loading: isLoading, disabled: !isFormValid }"
        @click="generatePlan"
      >
        <text v-if="!isLoading" class="btn-text">生成最优行程方案</text>
        <text v-else class="btn-loading">
          <text class="loading-icon">⏳</text>
          <text>AI规划中...</text>
        </text>
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
      formData: {
        destination: '',
        days: 3,
        budget: '',
        mustVisit: '',
        customInterest: ''
      },
      daysOptions: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7+', value: 8 }
      ],
      budgetHints: [
        { label: '经济型 500', value: 500 },
        { label: '舒适型 1000', value: 1000 },
        { label: '豪华型 2000', value: 2000 }
      ],
      interests: [
        { label: '文化古迹', value: 'culture', icon: '🏛️' },
        { label: '美食探索', value: 'food', icon: '🍜' },
        { label: '自然风光', value: 'nature', icon: '🏔️' },
        { label: '小众秘境', value: 'niche', icon: '🌿' },
        { label: '亲子家庭', value: 'family', icon: '👨‍👩‍👧‍👦' },
        { label: '户外徒步', value: 'hiking', icon: '🥾' }
      ],
      selectedInterests: [],
      errors: {
        destination: '',
        days: '',
        budget: '',
        interests: ''
      },
      isLoading: false
    };
  },
  computed: {
    isFormValid() {
      return this.formData.destination && 
             this.formData.days && 
             this.formData.budget && 
             this.selectedInterests.length > 0;
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    selectDays(day) {
      this.formData.days = day;
      this.errors.days = '';
    },
    setBudget(value) {
      this.formData.budget = value.toString();
      this.errors.budget = '';
    },
    toggleInterest(value) {
      const index = this.selectedInterests.indexOf(value);
      // 计算当前总选择数（包括自定义兴趣）
      const totalSelected = this.selectedInterests.length + (this.formData.customInterest ? 1 : 0);
      
      if (index > -1) {
        this.selectedInterests.splice(index, 1);
      } else {
        if (totalSelected < 3) {
          this.selectedInterests.push(value);
        } else {
          uni.showToast({
            title: '最多选择3个兴趣',
            icon: 'none'
          });
        }
      }
      this.errors.interests = '';
    },
    validateField(field) {
      this.errors[field] = '';
      
      switch(field) {
        case 'destination':
          if (!this.formData.destination.trim()) {
            this.errors.destination = '请输入目的地';
          }
          break;
        case 'budget':
          if (!this.formData.budget) {
            this.errors.budget = '请输入预算金额';
          } else if (isNaN(this.formData.budget) || parseInt(this.formData.budget) <= 0) {
            this.errors.budget = '请输入有效的金额';
          }
          break;
      }
    },
    validateForm() {
      let isValid = true;
      
      if (!this.formData.destination.trim()) {
        this.errors.destination = '请输入目的地';
        isValid = false;
      }
      
      if (!this.formData.days) {
        this.errors.days = '请选择出行天数';
        isValid = false;
      }
      
      if (!this.formData.budget) {
        this.errors.budget = '请输入预算金额';
        isValid = false;
      } else if (isNaN(this.formData.budget) || parseInt(this.formData.budget) <= 0) {
        this.errors.budget = '请输入有效的金额';
        isValid = false;
      }
      
      if (this.selectedInterests.length === 0) {
        this.errors.interests = '请至少选择1个出行兴趣';
        isValid = false;
      }
      
      return isValid;
    },
    generatePlan() {
      if (!this.validateForm()) {
        uni.showToast({
          title: '请完善表单信息',
          icon: 'none'
        });
        return;
      }
      
      this.isLoading = true;
      
      // 模拟AI规划过程
      setTimeout(() => {
        this.isLoading = false;
        
        // 保存生成的行程数据
        const generatedTrip = {
          title: `${this.formData.destination}${this.formData.days}日文化游`,
          days: this.formData.days >= 8 ? 7 : this.formData.days,
          budgetPerPerson: parseInt(this.formData.budget),
          totalBudget: parseInt(this.formData.budget) * 3, // 假设3人
          daysList: this.generateMockItinerary()
        };
        uni.setStorageSync('generatedTripData', generatedTrip);
        
        // 跳转到AI生成结果页
        uni.navigateTo({
          url: '/pages/ai-trip/result/index'
        });
      }, 1500);
    },
    generateMockItinerary() {
      // 生成模拟行程数据
      const days = this.formData.days >= 8 ? 7 : this.formData.days;
      const itinerary = [];
      const routes = ['兵马俑 → 华清宫', '古城墙 → 大雁塔', '陕西历史博物馆 → 小雁塔', '钟鼓楼 → 回民街', '华山一日游', '大明宫 → 曲江池', '永兴坊 → 碑林'];
      
      for (let i = 0; i < days && i < routes.length; i++) {
        itinerary.push({
          route: routes[i],
          spots: [
            { 
              name: `景点${i * 2 + 1}`, 
              duration: '2小时',
              desc: '精彩景点，值得一游',
              tags: ['必打卡']
            },
            { 
              name: `景点${i * 2 + 2}`, 
              duration: '1.5小时',
              desc: '特色体验',
              tags: ['推荐']
            }
          ]
        });
      }
      return itinerary;
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

/* 引导文案 */
.guide-section {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
  padding: 20px 16px 24px;
  text-align: center;
}

.guide-title {
  font-size: 20px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 8px;
}

.guide-desc {
  font-size: 13px;
  color: #5D6D7E;
}

/* 表单容器 */
.form-container {
  padding: 20px 16px;
}

/* 表单项 */
.form-item {
  margin-bottom: 20px;
}

.form-item.has-error .form-input {
  border-color: #E74C3C;
  background-color: #FEF5F5;
}

.form-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
}

.label-text {
  font-size: 15px;
  font-weight: 600;
  color: #2C3E50;
}

.required-mark {
  font-size: 14px;
  color: #E74C3C;
  margin-left: 4px;
}

.optional-mark {
  font-size: 13px;
  color: #95A5A6;
  margin-left: 4px;
}

.limit-hint {
  font-size: 12px;
  color: #95A5A6;
  margin-left: 8px;
}

/* 输入框包装器 */
.input-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid #E8EDE9;
  border-radius: 10px;
  padding: 0 14px;
}

.input-icon {
  font-size: 18px;
  margin-right: 10px;
}

.form-input {
  flex: 1;
  height: 44px;
  font-size: 15px;
  color: #2C3E50;
}

.input-unit {
  font-size: 14px;
  color: #95A5A6;
  margin-left: 8px;
}

/* 错误提示 */
.error-msg {
  font-size: 12px;
  color: #E74C3C;
  margin-top: 6px;
  padding-left: 4px;
}

/* 天数横向滚动选择器 */
.days-scroll {
  width: 100%;
  white-space: nowrap;
}

.days-list {
  display: flex;
  flex-direction: row;
  padding: 4px 0;
}

.day-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-right: 12px;
  background-color: #FFFFFF;
  border: 2px solid #E8EDE9;
  border-radius: 12px;
  flex-shrink: 0;
}

.day-btn.active {
  background: linear-gradient(135deg, #5FB878 0%, #7EC8A6 100%);
  border-color: #5FB878;
}

.day-text {
  font-size: 20px;
  font-weight: 700;
  color: #2C3E50;
}

.day-btn.active .day-text {
  color: #FFFFFF;
}

.day-unit {
  font-size: 11px;
  color: #95A5A6;
  margin-top: 2px;
}

.day-btn.active .day-unit {
  color: #FFFFFF;
}

/* 预算提示 */
.budget-hint {
  display: flex;
  flex-direction: row;
  margin-top: 8px;
}

.hint-tag {
  font-size: 12px;
  color: #5FB878;
  background-color: #E8F5E9;
  padding: 5px 10px;
  border-radius: 12px;
  margin-right: 8px;
}

/* 兴趣标签网格 - 居中布局 */
.interest-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.interest-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #FFFFFF;
  border: 1px solid #E8EDE9;
  border-radius: 20px;
}

.interest-item.active {
  background-color: #E8F5E9;
  border-color: #5FB878;
}

.interest-item.disabled {
  opacity: 0.5;
}

.interest-icon {
  font-size: 16px;
  margin-right: 6px;
}

.interest-name {
  font-size: 13px;
  color: #2C3E50;
}

.interest-item.active .interest-name {
  color: #5FB878;
  font-weight: 600;
}

/* 自定义兴趣 */
.custom-interest {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px dashed #E8EDE9;
}

.custom-interest-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
}

.custom-interest-label .label-icon {
  font-size: 14px;
  margin-right: 6px;
}

.custom-interest-label .label-text {
  font-size: 14px;
  color: #5D6D7E;
  font-weight: 500;
}

.custom-interest-input-wrapper {
  background-color: #FFFFFF;
  border: 1px solid #E8EDE9;
  border-radius: 10px;
  padding: 0 14px;
}

.custom-interest-input-wrapper.disabled {
  background-color: #F5F5F5;
}

.custom-interest-input {
  width: 100%;
  height: 42px;
  font-size: 14px;
  color: #2C3E50;
}

.custom-interest-input::placeholder {
  color: #BDBDBD;
}

.custom-interest-hint {
  margin-top: 6px;
}

.custom-interest-hint .hint-text {
  font-size: 11px;
  color: #95A5A6;
}

/* 已选择计数 */
.selected-count {
  font-size: 12px;
  color: #5FB878;
  text-align: right;
  margin-top: 8px;
}

/* 提交区域 */
.submit-section {
  padding: 8px 16px 20px;
}

.submit-hint {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.hint-icon {
  font-size: 13px;
  margin-right: 6px;
}

.hint-text {
  font-size: 12px;
  color: #95A5A6;
}

/* 提交按钮 */
.submit-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 46px;
  background: linear-gradient(135deg, #5FB878 0%, #4A9B61 100%);
  border-radius: 23px;
  box-shadow: 0 4px 16px #C8E6C9;
}

.submit-btn.disabled {
  background: linear-gradient(135deg, #BDBDBD 0%, #9E9E9E 100%);
  box-shadow: none;
}

.submit-btn.loading {
  background: linear-gradient(135deg, #7EC8A6 0%, #5FB878 100%);
}

.btn-text {
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
}

.btn-loading {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
  color: #FFFFFF;
}

.loading-icon {
  font-size: 16px;
  margin-right: 6px;
}

/* 底部留白 */
.bottom-space {
  height: 20px;
}
</style>
