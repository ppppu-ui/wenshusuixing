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
        case "service":
          common_vendor.index.switchTab({ url: "/pages/service/index" });
          break;
        case "checkin":
          common_vendor.index.navigateTo({ url: "/pages/checkin/index" });
          break;
        case "darenTrip":
          common_vendor.index.navigateTo({ url: "/pages/daren-trip/index" });
          break;
        case "tripDetail":
          common_vendor.index.navigateTo({ url: "/pages/trip/detail" });
          break;
        case "checkinDetail":
          common_vendor.index.navigateTo({ url: "/pages/checkin/detail" });
          break;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => go("aiTrip")),
        b: common_vendor.o(($event) => go("service")),
        c: common_vendor.o(($event) => go("checkin")),
        d: common_vendor.o(($event) => go("darenTrip")),
        e: common_vendor.o(($event) => go("darenTrip")),
        f: common_vendor.o(($event) => go("tripDetail")),
        g: common_vendor.o(($event) => go("tripDetail")),
        h: common_vendor.o(($event) => go("checkin")),
        i: common_vendor.o(($event) => go("checkinDetail"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
