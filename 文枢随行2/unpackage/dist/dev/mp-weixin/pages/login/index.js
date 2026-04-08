"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const go = (page) => {
      switch (page) {
        case "home":
          common_vendor.index.switchTab({ url: "/pages/index/index" });
          break;
        case "darenLogin":
          common_vendor.index.switchTab({ url: "/pages/index/index" });
          break;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => go("home")),
        b: common_vendor.o(($event) => go("darenLogin"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d08ef7d4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/index.js.map
