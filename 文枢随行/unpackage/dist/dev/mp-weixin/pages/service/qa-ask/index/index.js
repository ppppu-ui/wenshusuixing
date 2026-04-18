"use strict";
const common_vendor = require("../../../../common/vendor.js");
const BASE_URL = "http://10.158.14.40:8080";
const _sfc_main = {
  data() {
    return {
      question: "",
      location: "",
      tags: ["行程规划", "景点推荐", "美食攻略", "交通出行", "住宿推荐", "门票信息", "当地文化", "安全提示"],
      selectedTags: [],
      isSubmitting: false
    };
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    toggleTag(tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      } else {
        if (this.selectedTags.length < 3) {
          this.selectedTags.push(tag);
        } else {
          common_vendor.index.showToast({
            title: "最多选择3个标签",
            icon: "none"
          });
        }
      }
    },
    uploadImage() {
      common_vendor.index.__f__("log", "at pages/service/qa-ask/index/index.vue:92", "上传图片");
      common_vendor.index.chooseImage({
        count: 3,
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/service/qa-ask/index/index.vue:96", "选择图片成功", res);
        }
      });
    },
    submitQuestion() {
      if (this.isSubmitting)
        return;
      if (!this.question.trim()) {
        common_vendor.index.showToast({
          title: "请输入问题内容",
          icon: "none"
        });
        return;
      }
      if (!this.location.trim()) {
        common_vendor.index.showToast({
          title: "请输入相关地点",
          icon: "none"
        });
        return;
      }
      const token = common_vendor.index.getStorageSync("token");
      const userInfo = common_vendor.index.getStorageSync("userInfo") || {};
      this.isSubmitting = true;
      common_vendor.index.request({
        url: `${BASE_URL}/api/expert/question`,
        method: "POST",
        header: {
          "Content-Type": "application/json",
          ...token ? { Authorization: `Bearer ${token}` } : {}
        },
        data: {
          userId: userInfo.id || userInfo.userId || void 0,
          question: this.question.trim(),
          city: this.location.trim(),
          tags: this.selectedTags
        },
        success: (res) => {
          const resp = res.data || {};
          if (res.statusCode !== 200) {
            common_vendor.index.showToast({ title: "提交失败，请稍后重试", icon: "none" });
            return;
          }
          if (resp.code && resp.code !== 200) {
            common_vendor.index.showToast({ title: resp.message || "提交失败", icon: "none" });
            return;
          }
          common_vendor.index.showToast({ title: "问题提交成功", icon: "success" });
          setTimeout(() => {
            common_vendor.index.navigateBack();
          }, 800);
        },
        fail: () => {
          common_vendor.index.showToast({ title: "网络异常，提交失败", icon: "none" });
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: $data.question,
    c: common_vendor.o(($event) => $data.question = $event.detail.value),
    d: common_vendor.t($data.question.length),
    e: $data.location,
    f: common_vendor.o(($event) => $data.location = $event.detail.value),
    g: common_vendor.f($data.tags, (tag, k0, i0) => {
      return {
        a: common_vendor.t(tag),
        b: tag,
        c: $data.selectedTags.includes(tag) ? 1 : "",
        d: common_vendor.o(($event) => $options.toggleTag(tag), tag)
      };
    }),
    h: common_vendor.o((...args) => $options.uploadImage && $options.uploadImage(...args)),
    i: common_vendor.o((...args) => $options.submitQuestion && $options.submitQuestion(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0c328a30"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/service/qa-ask/index/index.js.map
