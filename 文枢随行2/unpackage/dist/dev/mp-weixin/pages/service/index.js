"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const go = (page) => {
      switch (page) {
        case "help":
          common_vendor.index.showToast({ title: "紧急求助功能开发中", icon: "none" });
          break;
        case "guide":
          common_vendor.index.showToast({ title: "本地向导功能开发中", icon: "none" });
          break;
        case "qaAsk":
          common_vendor.index.navigateTo({ url: "/pages/service/qa-ask/index" });
          break;
        case "qaDetail":
          common_vendor.index.showToast({ title: "问答详情功能开发中", icon: "none" });
          break;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => go("help")),
        b: common_vendor.o(($event) => go("guide")),
        c: common_vendor.o(($event) => go("qaAsk")),
        d: common_vendor.o(($event) => go("qaDetail")),
        e: common_vendor.o(($event) => go("qaDetail"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f6ccea2d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/service/index.js.map
