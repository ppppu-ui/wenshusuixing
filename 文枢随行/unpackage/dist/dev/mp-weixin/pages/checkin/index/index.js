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
    goToAnswerQuestion() {
      common_vendor.index.switchTab({
        url: "/pages/service/index/index"
      });
    },
    goToCustomTrip() {
      common_vendor.index.navigateTo({
        url: "/pages/ai-trip/index/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: common_vendor.o((...args) => $options.goToAnswerQuestion && $options.goToAnswerQuestion(...args)),
    c: common_vendor.o((...args) => $options.goToCustomTrip && $options.goToCustomTrip(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1a9191d8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/checkin/index/index.js.map
