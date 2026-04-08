<template>
  <view class="page">
    <div class="nav">
      <span class="back-btn" @click="goBack">←</span>
      提问
    </div>
    <div class="qa-ask-content">
      <div class="qa-ask-input-section">
        <div class="qa-ask-input-label">问题</div>
        <textarea 
          v-model="question" 
          class="qa-ask-input" 
          placeholder="请输入你的旅行问题，例如：西安兵马俑需要提前预约吗？"
          rows="4"
        ></textarea>
        <div class="qa-ask-input-tips">
          <span>{{ question.length }}/500</span>
        </div>
      </div>
      <div class="qa-ask-location-section">
        <div class="qa-ask-location-label">相关地点</div>
        <div class="qa-ask-location-input">
          <input 
            v-model="location" 
            type="text" 
            placeholder="请输入相关地点，例如：西安"
          />
        </div>
      </div>
      <div class="qa-ask-tags-section">
        <div class="qa-ask-tags-label">问题标签</div>
        <div class="qa-ask-tags">
          <div 
            v-for="tag in tags" 
            :key="tag"
            class="qa-ask-tag"
            :class="{ active: selectedTags.includes(tag) }"
            @click="toggleTag(tag)"
          >{{ tag }}</div>
        </div>
      </div>
      <div class="qa-ask-image-section">
        <div class="qa-ask-image-label">添加图片（可选）</div>
        <div class="qa-ask-image-upload">
          <div class="qa-ask-image-upload-btn" @click="uploadImage">
            <span class="qa-ask-image-upload-icon">+</span>
            <span class="qa-ask-image-upload-text">上传图片</span>
          </div>
        </div>
      </div>
      <div class="qa-ask-submit" @click="submitQuestion">
        提交问题
      </div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      location: '',
      tags: ['行程规划', '景点推荐', '美食攻略', '交通出行', '住宿推荐', '门票信息', '当地文化', '安全提示'],
      selectedTags: []
    };
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      } else {
        if (this.selectedTags.length < 3) {
          this.selectedTags.push(tag);
        } else {
          uni.showToast({
            title: '最多选择3个标签',
            icon: 'none'
          });
        }
      }
    },
    uploadImage() {
      // 上传图片的逻辑
      console.log('上传图片');
      uni.chooseImage({
        count: 3,
        success: (res) => {
          console.log('选择图片成功', res);
        }
      });
    },
    submitQuestion() {
      if (!this.question.trim()) {
        uni.showToast({
          title: '请输入问题内容',
          icon: 'none'
        });
        return;
      }
      // 提交问题的逻辑
      console.log('提交问题', {
        question: this.question,
        location: this.location,
        tags: this.selectedTags
      });
      uni.showToast({
        title: '问题提交成功',
        icon: 'success'
      });
      // 跳转到服务页面
      uni.navigateBack();
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

.qa-ask-content {
  padding: 20px 16px;
}

.qa-ask-input-section {
  margin-bottom: 24px;
}

.qa-ask-input-label {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 12px;
  display: block;
}

.qa-ask-input {
  width: 100%;
  padding: 16px;
  border: 1px solid #DEE2E6;
  border-radius: 12px;
  font-size: 14px;
  color: #212529;
  background: #fff;
  resize: none;
  outline: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.2s;
}

.qa-ask-input:focus {
  border-color: #4CAF50;
  box-shadow: 0 4px 12px rgba(76,175,80,0.15);
}

.qa-ask-input-tips {
  font-size: 12px;
  color: #6C757D;
  text-align: right;
  margin-top: 8px;
}

.qa-ask-location-section {
  margin-bottom: 24px;
}

.qa-ask-location-label {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 12px;
  display: block;
}

.qa-ask-location-input input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #DEE2E6;
  border-radius: 12px;
  font-size: 14px;
  color: #212529;
  background: #fff;
  outline: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.2s;
}

.qa-ask-location-input input:focus {
  border-color: #4CAF50;
  box-shadow: 0 4px 12px rgba(76,175,80,0.15);
}

.qa-ask-tags-section {
  margin-bottom: 24px;
}

.qa-ask-tags-label {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 12px;
  display: block;
}

.qa-ask-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.qa-ask-tag {
  padding: 8px 16px;
  border: 1px solid #DEE2E6;
  border-radius: 20px;
  font-size: 14px;
  color: #6C757D;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.qa-ask-tag.active {
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  color: #fff;
  border-color: #4CAF50;
  box-shadow: 0 4px 12px rgba(76,175,80,0.2);
}

.qa-ask-tag:active {
  transform: scale(0.95);
}

.qa-ask-image-section {
  margin-bottom: 32px;
}

.qa-ask-image-label {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 12px;
  display: block;
}

.qa-ask-image-upload {
  display: flex;
  gap: 12px;
}

.qa-ask-image-upload-btn {
  width: 80px;
  height: 80px;
  border: 2px dashed #DEE2E6;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  background: #fff;
}

.qa-ask-image-upload-btn:active {
  border-color: #4CAF50;
  background: #E8F5E9;
  transform: scale(0.95);
}

.qa-ask-image-upload-icon {
  font-size: 24px;
  color: #ADB5BD;
  margin-bottom: 4px;
}

.qa-ask-image-upload-text {
  font-size: 12px;
  color: #6C757D;
}

.qa-ask-submit {
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(76,175,80,0.2);
}

.qa-ask-submit:active {
  transform: scale(0.98);
  opacity: 0.92;
}
</style>