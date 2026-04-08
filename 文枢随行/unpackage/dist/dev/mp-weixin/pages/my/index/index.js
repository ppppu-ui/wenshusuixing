"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goToMyTrips() {
      common_vendor.index.switchTab({
        url: "/pages/trip/index/index"
      });
    },
    goToMyCheckins() {
      common_vendor.index.navigateTo({
        url: "/pages/checkin/index/index"
      });
    },
    goToMyQAs() {
      common_vendor.index.switchTab({
        url: "/pages/service/index/index"
      });
    },
    goToMyFavorites() {
      common_vendor.index.navigateTo({
        url: "/pages/daren-trip/index/index"
      });
    },
    goToSettings() {
      common_vendor.index.showToast({
        title: "设置功能开发中",
        icon: "none"
      });
    },
    logout() {
      common_vendor.index.showModal({
        title: "退出登录",
        content: "确定要退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.__f__("log", "at pages/my/index/index.vue:102", "退出登录");
            common_vendor.index.navigateTo({
              url: "/pages/login/index/index"
            });
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToMyTrips && $options.goToMyTrips(...args)),
    b: common_vendor.o((...args) => $options.goToMyCheckins && $options.goToMyCheckins(...args)),
    c: common_vendor.o((...args) => $options.goToMyQAs && $options.goToMyQAs(...args)),
    d: common_vendor.o((...args) => $options.goToMyFavorites && $options.goToMyFavorites(...args)),
    e: common_vendor.o((...args) => $options.goToSettings && $options.goToSettings(...args)),
    f: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b1dad14e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/my/index/index.js.map
