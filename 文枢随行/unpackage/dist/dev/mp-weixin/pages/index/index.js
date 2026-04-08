"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goToAiTrip() {
      common_vendor.index.navigateTo({
        url: "/pages/ai-trip/index/index"
      });
    },
    goToService() {
      common_vendor.index.switchTab({
        url: "/pages/service/index/index"
      });
    },
    goToCheckin() {
      common_vendor.index.navigateTo({
        url: "/pages/checkin/index/index"
      });
    },
    goToDarenTrip() {
      common_vendor.index.navigateTo({
        url: "/pages/daren-trip/index/index"
      });
    },
    goToNavigation() {
      common_vendor.index.navigateTo({
        url: "/pages/navigation/index/index"
      });
    },
    goToTripDetail() {
      common_vendor.index.switchTab({
        url: "/pages/trip/index/index"
      });
    },
    goToCheckinDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/checkin/detail/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToAiTrip && $options.goToAiTrip(...args)),
    b: common_vendor.o((...args) => $options.goToService && $options.goToService(...args)),
    c: common_vendor.o((...args) => $options.goToCheckin && $options.goToCheckin(...args)),
    d: common_vendor.o((...args) => $options.goToDarenTrip && $options.goToDarenTrip(...args)),
    e: common_vendor.o((...args) => $options.goToNavigation && $options.goToNavigation(...args)),
    f: common_vendor.o((...args) => $options.goToDarenTrip && $options.goToDarenTrip(...args)),
    g: common_vendor.o((...args) => $options.goToTripDetail && $options.goToTripDetail(...args)),
    h: common_vendor.o((...args) => $options.goToTripDetail && $options.goToTripDetail(...args)),
    i: common_vendor.o((...args) => $options.goToCheckin && $options.goToCheckin(...args)),
    j: common_vendor.o((...args) => $options.goToCheckinDetail && $options.goToCheckinDetail(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
