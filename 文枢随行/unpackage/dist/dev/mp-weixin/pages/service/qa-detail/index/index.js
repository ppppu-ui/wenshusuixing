"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      liked: false,
      collected: false
    };
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    likeAnswer() {
      this.liked = !this.liked;
      common_vendor.index.__f__("log", "at pages/service/qa-detail/index/index.vue:104", "点赞");
    },
    collectAnswer() {
      this.collected = !this.collected;
      common_vendor.index.__f__("log", "at pages/service/qa-detail/index/index.vue:109", "收藏");
    },
    shareAnswer() {
      common_vendor.index.__f__("log", "at pages/service/qa-detail/index/index.vue:113", "分享");
      common_vendor.index.showToast({
        title: "分享成功",
        icon: "success"
      });
    },
    askQuestion() {
      common_vendor.index.navigateTo({
        url: "/pages/service/qa-ask/qa-ask"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: common_vendor.o((...args) => $options.likeAnswer && $options.likeAnswer(...args)),
    c: common_vendor.o((...args) => $options.collectAnswer && $options.collectAnswer(...args)),
    d: common_vendor.o((...args) => $options.shareAnswer && $options.shareAnswer(...args)),
    e: common_vendor.o((...args) => $options.askQuestion && $options.askQuestion(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-22dcc176"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/service/qa-detail/index/index.js.map
