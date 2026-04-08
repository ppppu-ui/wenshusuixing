"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    goToEmergency() {
      common_vendor.index.navigateTo({
        url: "/pages/service/emergency/index/index",
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/service/index/index.vue:74", "跳转失败:", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    },
    goToGuide() {
      common_vendor.index.navigateTo({
        url: "/pages/service/guide/index/index",
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/service/index/index.vue:86", "跳转失败:", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    },
    goToQADetail() {
      common_vendor.index.navigateTo({
        url: "/pages/service/qa-detail/index/index",
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/service/index/index.vue:98", "跳转失败:", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    },
    goToQAAsk() {
      common_vendor.index.navigateTo({
        url: "/pages/service/qa-ask/index/index",
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/service/index/index.vue:110", "跳转失败:", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToEmergency && $options.goToEmergency(...args)),
    b: common_vendor.o((...args) => $options.goToGuide && $options.goToGuide(...args)),
    c: common_vendor.o((...args) => $options.goToQAAsk && $options.goToQAAsk(...args)),
    d: common_vendor.o((...args) => $options.goToQADetail && $options.goToQADetail(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e27afa56"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/service/index/index.js.map
