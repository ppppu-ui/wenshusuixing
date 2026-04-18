<template>
  <view class="login">
    <view class="login-logo">随行文旅</view>
    <view class="login-desc">智慧旅行 · 覆盖旅行前/中/后全流程</view>

    <view class="tab-row">
      <view class="tab-item" :class="{ active: mode === 'login' }" @click="switchMode('login')">登录</view>
      <view class="tab-item" :class="{ active: mode === 'register' }" @click="switchMode('register')">注册</view>
    </view>

    <view class="form-card">
      <view class="form-item">
        <text class="label">手机号</text>
        <input
          class="input"
          type="number"
          maxlength="11"
          placeholder="请输入手机号"
          v-model="form.phone"
        />
      </view>

      <view class="form-item">
        <text class="label">密码</text>
        <input
          class="input"
          type="password"
          placeholder="请输入密码"
          v-model="form.password"
        />
      </view>

      <template v-if="mode === 'register'">
        <view class="form-item">
          <text class="label">昵称</text>
          <input
            class="input"
            type="text"
            placeholder="请输入昵称"
            v-model="form.nickname"
          />
        </view>

        <view class="form-item">
          <text class="label">城市</text>
          <input
            class="input"
            type="text"
            placeholder="请输入城市"
            v-model="form.city"
          />
        </view>
      </template>

      <view class="btn btn-primary" :class="{ disabled: loading }" @click="submitAuth">
        {{ loading ? '提交中...' : (mode === 'login' ? '登录' : '注册并登录') }}
      </view>
    </view>
  </view>
</template>

<script>
const BASE_URL = 'http://10.158.14.40:8080';
const DEV_BYPASS_LOGIN = true;

export default {
  data() {
    return {
      mode: 'login',
      loading: false,
      form: {
        phone: '',
        password: '',
        nickname: '',
        city: ''
      }
    };
  },
  methods: {
    switchMode(mode) {
      this.mode = mode;
    },
    validateForm() {
      if (!/^1\d{10}$/.test(this.form.phone)) {
        uni.showToast({ title: '请输入正确手机号', icon: 'none' });
        return false;
      }
      if (!this.form.password || this.form.password.length < 6) {
        uni.showToast({ title: '密码至少6位', icon: 'none' });
        return false;
      }
      if (this.mode === 'register') {
        if (!this.form.nickname.trim()) {
          uni.showToast({ title: '请输入昵称', icon: 'none' });
          return false;
        }
        if (!this.form.city.trim()) {
          uni.showToast({ title: '请输入城市', icon: 'none' });
          return false;
        }
      }
      return true;
    },
    submitAuth() {
      if (!this.validateForm() || this.loading) return;
      if (this.mode === 'register') {
        this.register();
      } else {
        if (DEV_BYPASS_LOGIN) {
          this.mockLogin();
          return;
        }
        this.login();
      }
    },
    mockLogin() {
      this.loading = true;
      const mockToken = `dev-token-${Date.now()}`;
      uni.setStorageSync('token', mockToken);
      uni.setStorageSync('userInfo', {
        nickname: '开发测试用户',
        phone: this.form.phone || '13800000000'
      });
      uni.showToast({
        title: '开发模式：已跳过登录',
        icon: 'none',
        duration: 1000
      });
      setTimeout(() => {
        uni.switchTab({
          url: '/pages/index/index'
        });
        this.loading = false;
      }, 800);
    },
    register() {
      this.loading = true;
      uni.request({
        url: `${BASE_URL}/api/user/register`,
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        data: {
          phone: this.form.phone,
          password: this.form.password,
          nickname: this.form.nickname.trim(),
          city: this.form.city.trim()
        },
        success: (res) => {
          if (res.statusCode === 200) {
            uni.showToast({ title: '注册成功，正在登录', icon: 'none' });
            this.login();
            return;
          }
          uni.showToast({ title: '注册失败，请重试', icon: 'none' });
        },
        fail: (err) => {
          console.error('注册请求失败:', err);
          uni.showToast({ title: `网络异常: ${err.errMsg}`, icon: 'none' });
        },
        complete: () => {
          this.loading = false;
        }
      });
    },
    login() {
      this.loading = true;
      uni.request({
        url: `${BASE_URL}/api/user/login`,
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        data: {
          phone: this.form.phone,
          password: this.form.password
        },
        success: (res) => {
          const resp = res.data || {};
          if (res.statusCode !== 200) {
            uni.showToast({ title: '登录失败，请稍后重试', icon: 'none' });
            return;
          }

          const token =
            (resp.data && (resp.data.token || resp.data.accessToken || resp.data.jwt)) ||
            resp.token ||
            '';

          if (token) {
            uni.setStorageSync('token', token);
          }
          if (resp.data && typeof resp.data === 'object') {
            uni.setStorageSync('userInfo', resp.data);
          }

          uni.showToast({
            title: resp.message || '登录成功',
            icon: 'success',
            duration: 1200
          });

          setTimeout(() => {
            uni.switchTab({
              url: '/pages/index/index'
            });
          }, 900);
        },
        fail: (err) => {
          console.error('登录请求失败:', err);
          uni.showToast({ title: `网络异常: ${err.errMsg}`, icon: 'none' });
        },
        complete: () => {
          this.loading = false;
        }
      });
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
  padding: 0 24px;
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
  margin-bottom: 28px;
}

.tab-row {
  width: 100%;
  display: flex;
  background: #f4f7f5;
  border-radius: 12px;
  padding: 4px;
  margin-bottom: 16px;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 10px 0;
  color: #5d6d7e;
  border-radius: 8px;
  font-size: 14px;
}

.tab-item.active {
  background: #fff;
  color: #2f9e44;
  font-weight: 600;
}

.form-card {
  width: 100%;
  background: #fff;
  border: 1px solid #edf1ef;
  border-radius: 14px;
  padding: 16px;
  box-sizing: border-box;
}

.form-item {
  margin-bottom: 12px;
}

.label {
  display: block;
  font-size: 13px;
  color: #5d6d7e;
  margin-bottom: 6px;
}

.input {
  height: 42px;
  border: 1px solid #dbe7df;
  border-radius: 10px;
  padding: 0 12px;
  font-size: 14px;
}

.btn {
  display: block;
  width: 100%;
  margin-top: 14px;
  padding: 14px;
  text-align: center;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
}

.btn-primary {
  background: linear-gradient(90deg, #4CAF50, #66BB6A);
  color: #fff;
  box-shadow: 0 4px 12px rgba(76,175,80,0.2);
}

.btn.disabled {
  opacity: 0.7;
}
</style>
