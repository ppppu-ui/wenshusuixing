"use strict";
const common_vendor = require("../../../common/vendor.js");
const BASE_URL = "http://10.158.14.40:8080";
const _sfc_main = {
  data() {
    return {
      mode: "login",
      loading: false,
      form: {
        phone: "",
        password: "",
        nickname: "",
        city: ""
      }
    };
  },
  methods: {
    switchMode(mode) {
      this.mode = mode;
    },
    validateForm() {
      if (!/^1\d{10}$/.test(this.form.phone)) {
        common_vendor.index.showToast({ title: "请输入正确手机号", icon: "none" });
        return false;
      }
      if (!this.form.password || this.form.password.length < 6) {
        common_vendor.index.showToast({ title: "密码至少6位", icon: "none" });
        return false;
      }
      if (this.mode === "register") {
        if (!this.form.nickname.trim()) {
          common_vendor.index.showToast({ title: "请输入昵称", icon: "none" });
          return false;
        }
        if (!this.form.city.trim()) {
          common_vendor.index.showToast({ title: "请输入城市", icon: "none" });
          return false;
        }
      }
      return true;
    },
    submitAuth() {
      if (!this.validateForm() || this.loading)
        return;
      if (this.mode === "register") {
        this.register();
      } else {
        {
          this.mockLogin();
          return;
        }
      }
    },
    mockLogin() {
      this.loading = true;
      const mockToken = `dev-token-${Date.now()}`;
      common_vendor.index.setStorageSync("token", mockToken);
      common_vendor.index.setStorageSync("userInfo", {
        nickname: "开发测试用户",
        phone: this.form.phone || "13800000000"
      });
      common_vendor.index.showToast({
        title: "开发模式：已跳过登录",
        icon: "none",
        duration: 1e3
      });
      setTimeout(() => {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
        this.loading = false;
      }, 800);
    },
    register() {
      this.loading = true;
      common_vendor.index.request({
        url: `${BASE_URL}/api/user/register`,
        method: "POST",
        header: { "Content-Type": "application/json" },
        data: {
          phone: this.form.phone,
          password: this.form.password,
          nickname: this.form.nickname.trim(),
          city: this.form.city.trim()
        },
        success: (res) => {
          if (res.statusCode === 200) {
            common_vendor.index.showToast({ title: "注册成功，正在登录", icon: "none" });
            this.login();
            return;
          }
          common_vendor.index.showToast({ title: "注册失败，请重试", icon: "none" });
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/login/index/index.vue:157", "注册请求失败:", err);
          common_vendor.index.showToast({ title: `网络异常: ${err.errMsg}`, icon: "none" });
        },
        complete: () => {
          this.loading = false;
        }
      });
    },
    login() {
      this.loading = true;
      common_vendor.index.request({
        url: `${BASE_URL}/api/user/login`,
        method: "POST",
        header: { "Content-Type": "application/json" },
        data: {
          phone: this.form.phone,
          password: this.form.password
        },
        success: (res) => {
          const resp = res.data || {};
          if (res.statusCode !== 200) {
            common_vendor.index.showToast({ title: "登录失败，请稍后重试", icon: "none" });
            return;
          }
          const token = resp.data && (resp.data.token || resp.data.accessToken || resp.data.jwt) || resp.token || "";
          if (token) {
            common_vendor.index.setStorageSync("token", token);
          }
          if (resp.data && typeof resp.data === "object") {
            common_vendor.index.setStorageSync("userInfo", resp.data);
          }
          common_vendor.index.showToast({
            title: resp.message || "登录成功",
            icon: "success",
            duration: 1200
          });
          setTimeout(() => {
            common_vendor.index.switchTab({
              url: "/pages/index/index"
            });
          }, 900);
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/login/index/index.vue:207", "登录请求失败:", err);
          common_vendor.index.showToast({ title: `网络异常: ${err.errMsg}`, icon: "none" });
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.mode === "login" ? 1 : "",
    b: common_vendor.o(($event) => $options.switchMode("login")),
    c: $data.mode === "register" ? 1 : "",
    d: common_vendor.o(($event) => $options.switchMode("register")),
    e: $data.form.phone,
    f: common_vendor.o(($event) => $data.form.phone = $event.detail.value),
    g: $data.form.password,
    h: common_vendor.o(($event) => $data.form.password = $event.detail.value),
    i: $data.mode === "register"
  }, $data.mode === "register" ? {
    j: $data.form.nickname,
    k: common_vendor.o(($event) => $data.form.nickname = $event.detail.value),
    l: $data.form.city,
    m: common_vendor.o(($event) => $data.form.city = $event.detail.value)
  } : {}, {
    n: common_vendor.t($data.loading ? "提交中..." : $data.mode === "login" ? "登录" : "注册并登录"),
    o: $data.loading ? 1 : "",
    p: common_vendor.o((...args) => $options.submitAuth && $options.submitAuth(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74536dfd"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/login/index/index.js.map
