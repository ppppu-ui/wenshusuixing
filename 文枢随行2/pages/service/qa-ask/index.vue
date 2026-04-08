<template>
  <view class="page no-tab">
    <view class="nav">
      <span class="back-btn" @click="back()">←</span>
      <text>提问</text>
      <span class="nav-btn" @click="submitQuestion">发布</span>
    </view>
    <view class="qa-ask-container">
      <view class="form-item">
        <label class="form-label">问题标题 <span style="color:#F44336">*</span></label>
        <input type="text" class="form-input" placeholder="请输入问题标题，如：西安兵马俑需要提前预约吗？" v-model="questionTitle" />
      </view>
      <view class="form-item">
        <label class="form-label">问题描述 <span style="color:#F44336">*</span></label>
        <textarea class="form-textarea" placeholder="请详细描述你的问题，包括时间、地点等信息，以便本地达人更好地为你解答" v-model="questionContent"></textarea>
      </view>
      <view class="form-item">
        <label class="form-label">相关目的地</label>
        <input type="text" class="form-input" placeholder="请输入相关目的地，如：西安" v-model="destination" />
      </view>
      <view class="form-item">
        <label class="form-label">问题标签</label>
        <view class="tag-box">
          <view class="tag" :class="{ active: selectedTags.includes('交通') }" @click="toggleTag('交通')">交通</view>
          <view class="tag" :class="{ active: selectedTags.includes('住宿') }" @click="toggleTag('住宿')">住宿</view>
          <view class="tag" :class="{ active: selectedTags.includes('美食') }" @click="toggleTag('美食')">美食</view>
          <view class="tag" :class="{ active: selectedTags.includes('景点') }" @click="toggleTag('景点')">景点</view>
          <view class="tag" :class="{ active: selectedTags.includes('购物') }" @click="toggleTag('购物')">购物</view>
          <view class="tag" :class="{ active: selectedTags.includes('其他') }" @click="toggleTag('其他')">其他</view>
        </view>
      </view>
      <view class="tips">
        <text>💡 提示：问题越详细，得到的回答越准确哦！</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const questionTitle = ref('');
const questionContent = ref('');
const destination = ref('');
const selectedTags = ref([]);

const back = () => {
  uni.navigateBack();
};

const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag);
  if (index > -1) {
    selectedTags.value.splice(index, 1);
  } else {
    selectedTags.value.push(tag);
  }
};

const submitQuestion = () => {
  if (!questionTitle.value || !questionContent.value) {
    uni.showToast({ title: '请填写问题标题和描述', icon: 'none' });
    return;
  }
  // 提交问题功能，暂时提示
  uni.showToast({ title: '问题发布成功', icon: 'success' });
  setTimeout(() => {
    uni.navigateBack();
  }, 1500);
};
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #F8F9FA;
}

.nav {
  height: 48rpx;
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16rpx;
  font-size: 18rpx;
  font-weight: 700;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.06);
  border: none;
}

.nav-btn {
  font-size: 14rpx;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.back-btn {
  font-size: 20rpx;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;
  width: 32rpx;
  height: 32rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.back-btn:active {
  opacity: 0.7;
  background: rgba(255,255,255,0.15);
}

.qa-ask-container {
  padding: 16rpx;
}

.form-item {
  margin-bottom: 24rpx;
}

.form-label {
  display: block;
  font-size: 15rpx;
  font-weight: 600;
  color: #212529;
  margin-bottom: 10rpx;
}

.form-input {
  width: 100%;
  padding: 13rpx 18rpx;
  border: 1rpx solid #DEE2E6;
  border-radius: 10rpx;
  font-size: 15rpx;
  color: #495057;
  transition: all 0.25s;
  background: #fff;
}

.form-input:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 0 3rpx rgba(76,175,80,0.12);
  outline: none;
}

.form-input::placeholder {
  color: #ADB5BD;
}

.form-textarea {
  width: 100%;
  padding: 13rpx 18rpx;
  border: 1rpx solid #DEE2E6;
  border-radius: 10rpx;
  font-size: 15rpx;
  color: #495057;
  transition: all 0.25s;
  background: #fff;
  min-height: 150rpx;
  resize: none;
}

.form-textarea:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 0 3rpx rgba(76,175,80,0.12);
  outline: none;
}

.form-textarea::placeholder {
  color: #ADB5BD;
}

.tag-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10rpx;
}

.tag {
  padding: 8rpx 16rpx;
  background: #E9ECEF;
  color: #495057;
  font-size: 14rpx;
  border-radius: 16rpx;
  cursor: pointer;
  transition: all 0.2s;
}

.tag.active {
  background: #4CAF50;
  color: #fff;
}

.tips {
  background: #FFF3E0;
  color: #F57C00;
  padding: 12rpx 16rpx;
  border-radius: 8rpx;
  font-size: 13rpx;
  margin-top: 20rpx;
  border-left: 3rpx solid #FF9800;
}
</style>