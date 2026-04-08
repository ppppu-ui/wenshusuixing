<template>
  <view class="login">
    <div class="login-logo">随行文旅</div>
    <div class="login-desc">智慧旅行 · 覆盖旅行前/中/后全流程</div>
    <div class="btn btn-primary" @click="wechatLogin">微信一键授权登录</div>
    <div class="login-daren" @click="adminLogin">本地达人/管理员请点击此处登录</div>
  </view>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    wechatLogin() {
      // 微信登录逻辑
      uni.switchTab({
        url: '/pages/index/index'
      });
    },
    adminLogin() {
      // 管理员登录逻辑
    }
  }
};
</script>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  background: #fff;
  box-sizing: border-box;
}

.login-logo {
  font-size: 36px;
  font-weight: 700;
  color: #4CAF50;
  margin-bottom: 12px;
}

.login-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 60px;
}

.btn {
  display: block;
  width: calc(100% - 32px);
  margin: 16px auto;
  padding: 14px;
  text-align: center;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
  border: none;
  line-height: 1.3;
}

.btn:active {
  transform: scale(0.98);
  opacity: 0.92;
}

.btn-primary {
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  color: #fff;
  box-shadow: 0 4px 12px rgba(76,175,80,0.2);
  width: 100%;
  margin: 0 0 24px 0;
}

.login-daren {
  font-size: 14px;
  color: #4CAF50;
  text-decoration: underline;
  cursor: pointer;
}
</style>