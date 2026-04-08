"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const selectedTags = common_vendor.ref(["文化"]);
    const toggleTag = (tag) => {
      const index = selectedTags.value.indexOf(tag);
      if (index > -1) {
        selectedTags.value.splice(index, 1);
      } else if (selectedTags.value.length < 3) {
        selectedTags.value.push(tag);
      }
    };
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const go = (page) => {
      switch (page) {
        case "tripDetail":
          common_vendor.index.navigateTo({ url: "/pages/trip/detail" });
          break;
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => back()),
        b: common_vendor.o(($event) => toggleTag("文化")),
        c: common_vendor.o(($event) => toggleTag("美食")),
        d: common_vendor.o(($event) => toggleTag("自然")),
        e: common_vendor.o(($event) => toggleTag("小众")),
        f: common_vendor.o(($event) => toggleTag("亲子")),
        g: common_vendor.o(($event) => toggleTag("徒步")),
        h: common_vendor.o(($event) => go("tripDetail"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e7eac4e1"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/ai-trip/index.js.map
