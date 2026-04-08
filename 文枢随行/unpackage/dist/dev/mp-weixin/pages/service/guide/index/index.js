"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    showFilter() {
      common_vendor.index.__f__("log", "at pages/service/guide/index/index.vue:115", "显示筛选");
    },
    showSearch() {
      common_vendor.index.__f__("log", "at pages/service/guide/index/index.vue:119", "显示搜索");
    },
    goToGuideDetail() {
      common_vendor.index.__f__("log", "at pages/service/guide/index/index.vue:123", "跳转到向导详情");
    },
    callGuide(phone) {
      common_vendor.index.__f__("log", "at pages/service/guide/index/index.vue:127", "拨打电话", phone);
      common_vendor.index.makePhoneCall({
        phoneNumber: phone
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: common_vendor.o((...args) => $options.showFilter && $options.showFilter(...args)),
    c: common_vendor.o((...args) => $options.showSearch && $options.showSearch(...args)),
    d: common_vendor.o(($event) => $options.callGuide("13800138000")),
    e: common_vendor.o((...args) => $options.goToGuideDetail && $options.goToGuideDetail(...args)),
    f: common_vendor.o(($event) => $options.callGuide("13900139000")),
    g: common_vendor.o((...args) => $options.goToGuideDetail && $options.goToGuideDetail(...args)),
    h: common_vendor.o(($event) => $options.callGuide("13700137000")),
    i: common_vendor.o((...args) => $options.goToGuideDetail && $options.goToGuideDetail(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a8843254"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/service/guide/index/index.js.map
