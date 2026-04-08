"use strict";
const common_vendor = require("../../common/vendor.js");
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
        url: "/pages/service/emergency/index"
      });
    },
    goToGuide() {
      common_vendor.index.navigateTo({
        url: "/pages/service/guide/index"
      });
    },
    goToQADetail() {
      common_vendor.index.navigateTo({
        url: "/pages/service/qa-detail/index?id=1"
      });
    },
    goToQAAsk() {
      common_vendor.index.navigateTo({
        url: "/pages/service/qa-ask/qa-ask"
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cb2df937"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/service/service.js.map
