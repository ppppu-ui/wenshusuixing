"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      activeFilter: "all"
    };
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    filterByType(type) {
      this.activeFilter = type;
      common_vendor.index.__f__("log", "at pages/daren-trip/index/index.vue:108", "筛选类型:", type);
    },
    goToTripDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/trip/detail/index?id=${id}&source=daren`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: common_vendor.o(($event) => $options.filterByType("all")),
    c: common_vendor.o(($event) => $options.filterByType("culture")),
    d: common_vendor.o(($event) => $options.filterByType("food")),
    e: common_vendor.o(($event) => $options.filterByType("nature")),
    f: common_vendor.o(($event) => $options.goToTripDetail("daren-xian-3d")),
    g: common_vendor.o(($event) => $options.goToTripDetail("daren-chengdu-2d")),
    h: common_vendor.o(($event) => $options.goToTripDetail("daren-guilin-4d"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b4e2b2af"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/daren-trip/index/index.js.map
