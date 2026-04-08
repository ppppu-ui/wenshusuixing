<template>
  <view class="page">
    <div class="nav">
      <span class="back-btn" @click="goBack">←</span>
      紧急求助
    </div>
    <div class="emergency-location">
      <div class="emergency-location-icon">📍</div>
      <div class="emergency-location-content">
        <div class="emergency-location-title">当前定位</div>
        <div class="emergency-location-text">秦始皇兵马俑博物馆-一号坑</div>
      </div>
    </div>
    <div class="emergency-form">
      <div class="emergency-form-section">
        <div class="emergency-form-label">求助类型 *</div>
        <div class="emergency-form-types">
          <div 
            v-for="type in helpTypes" 
            :key="type"
            class="emergency-form-type"
            :class="{ active: selectedType === type }"
            @click="selectType(type)"
          >{{ type }}</div>
        </div>
      </div>
      <div class="emergency-form-section">
        <div class="emergency-form-label">求助描述（选填）</div>
        <textarea 
          v-model="description" 
          class="emergency-form-textarea" 
          placeholder="请简要描述你的问题，如：身体不适需要帮助"
          rows="4"
        ></textarea>
      </div>
      <div class="emergency-form-section">
        <div class="emergency-form-label">联系方式（选填）</div>
        <input 
          v-model="contact" 
          type="text" 
          class="emergency-form-input" 
          placeholder="请输入手机号码"
        />
      </div>
    </div>
    <div class="emergency-btn" @click="sendHelp">
      立即发送求助信息
    </div>
    <div class="emergency-rescue">
      <div class="emergency-rescue-title">附近救援点</div>
      <div class="emergency-rescue-list">
        <div class="emergency-rescue-item">
          <div class="emergency-rescue-item-icon">🏥</div>
          <div class="emergency-rescue-item-content">
            <div class="emergency-rescue-item-name">兵马俑景区医疗点</div>
            <div class="emergency-rescue-item-info">距离300米 | 步行5分钟</div>
            <div class="emergency-rescue-item-phone">电话：029-XXXXXXX</div>
          </div>
          <div class="emergency-rescue-item-call" @click="callRescue('029-XXXXXXX')">
            <span>📞</span>
          </div>
        </div>
        <div class="emergency-rescue-item">
          <div class="emergency-rescue-item-icon">👮</div>
          <div class="emergency-rescue-item-content">
            <div class="emergency-rescue-item-name">兵马俑景区警务点</div>
            <div class="emergency-rescue-item-info">距离500米 | 步行8分钟</div>
            <div class="emergency-rescue-item-phone">电话：029-XXXXXXX</div>
          </div>
          <div class="emergency-rescue-item-call" @click="callRescue('029-XXXXXXX')">
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
      selectedType: '',
      description: '',
      contact: '',
      helpTypes: ['医疗救助', '安全求助', '设施故障', '走失求助', '物品遗失', '其他问题']
    };
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    selectType(type) {
      this.selectedType = type;
    },
    sendHelp() {
      if (!this.selectedType) {
        uni.showToast({
          title: '请选择求助类型',
          icon: 'none'
        });
        return;
      }
      // 发送求助信息的逻辑
      console.log('发送求助信息', {
        type: this.selectedType,
        description: this.description,
        contact: this.contact
      });
      uni.showToast({
        title: '求助信息已发送',
        icon: 'success'
      });
    },
    callRescue(phone) {
      // 拨打电话的逻辑
      console.log('拨打救援电话', phone);
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
  background: linear-gradient(90deg, #FF5722, #FF9800);
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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

.emergency-location {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  padding: 16px;
  margin: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.emergency-location-icon {
  font-size: 24px;
  width: 40px;
  height: 40px;
  background: #FFEBEE;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F44336;
}

.emergency-location-content {
  flex: 1;
}

.emergency-location-title {
  font-size: 12px;
  color: #6C757D;
  margin-bottom: 4px;
}

.emergency-location-text {
  font-size: 14px;
  font-weight: 500;
  color: #212529;
}

.emergency-form {
  background: #fff;
  margin: 0 16px 16px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.emergency-form-section {
  margin-bottom: 20px;
}

.emergency-form-section:last-child {
  margin-bottom: 0;
}

.emergency-form-label {
  font-size: 14px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 12px;
  display: block;
}

.emergency-form-types {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.emergency-form-type {
  padding: 8px 16px;
  border: 1px solid #DEE2E6;
  border-radius: 20px;
  font-size: 14px;
  color: #6C757D;
  background: #F8F9FA;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.emergency-form-type.active {
  background: linear-gradient(90deg, #FF5722, #FF9800);
  color: #fff;
  border-color: #FF5722;
  box-shadow: 0 4px 12px rgba(255,87,34,0.2);
}

.emergency-form-type:active {
  transform: scale(0.95);
}

.emergency-form-textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  font-size: 14px;
  color: #212529;
  background: #F8F9FA;
  resize: none;
  outline: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.2s;
}

.emergency-form-textarea:focus {
  border-color: #FF5722;
  box-shadow: 0 4px 12px rgba(255,87,34,0.15);
}

.emergency-form-input {
  width: 100%;
  padding: 14px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  font-size: 14px;
  color: #212529;
  background: #F8F9FA;
  outline: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.2s;
}

.emergency-form-input:focus {
  border-color: #FF5722;
  box-shadow: 0 4px 12px rgba(255,87,34,0.15);
}

.emergency-btn {
  background: linear-gradient(90deg, #FF5722, #FF9800);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(255,87,34,0.2);
  margin: 0 16px 24px;
}

.emergency-btn:active {
  transform: scale(0.98);
  opacity: 0.92;
}

.emergency-rescue {
  background: #fff;
  margin: 0 16px 24px;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.emergency-rescue-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #F1F3F5;
}

.emergency-rescue-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.emergency-rescue-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #F8F9FA;
  border-radius: 8px;
  transition: all 0.2s;
}

.emergency-rescue-item:active {
  background: #E9ECEF;
  transform: scale(0.98);
}

.emergency-rescue-item-icon {
  font-size: 24px;
  width: 40px;
  height: 40px;
  background: #E3F2FD;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976D2;
  flex-shrink: 0;
}

.emergency-rescue-item-content {
  flex: 1;
}

.emergency-rescue-item-name {
  font-size: 14px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 4px;
}

.emergency-rescue-item-info {
  font-size: 12px;
  color: #6C757D;
  margin-bottom: 4px;
}

.emergency-rescue-item-phone {
  font-size: 12px;
  color: #F44336;
  font-weight: 500;
}

.emergency-rescue-item-call {
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
  margin-top: 2px;
}

.emergency-rescue-item-call:active {
  background: #C8E6C9;
  transform: scale(1.1);
}
</style>