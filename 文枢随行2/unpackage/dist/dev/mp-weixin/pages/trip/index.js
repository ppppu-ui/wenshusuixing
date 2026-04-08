"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const go = (page) => {
      switch (page) {
        case "aiTrip":
          common_vendor.index.navigateTo({ url: "/pages/ai-trip/index" });
          break;
        case "tripDetail":
          common_vendor.index.navigateTo({ url: "/pages/trip/detail" });
          break;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => go("aiTrip")),
        b: common_vendor.o(($event) => go("tripDetail")),
        c: common_vendor.o(($event) => go("tripDetail")),
        d: common_vendor.o(($event) => go("tripDetail")),
        e: common_vendor.o(($event) => go("tripDetail"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-572de036"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/trip/index.js.map
