"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const go = (page) => {
      switch (page) {
        case "map":
          common_vendor.index.navigateTo({ url: "/pages/navigation/index" });
          break;
        case "checklist":
          common_vendor.index.showToast({ title: "生成Checklist功能开发中", icon: "none" });
          break;
        case "darenAudit":
          common_vendor.index.showToast({ title: "提交审核功能开发中", icon: "none" });
          break;
      }
    };
    const deleteItem = () => {
      common_vendor.index.showToast({ title: "删除功能开发中", icon: "none" });
    };
    const addItem = () => {
      common_vendor.index.showToast({ title: "添加功能开发中", icon: "none" });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => back()),
        b: common_vendor.o(($event) => go("map")),
        c: common_vendor.o(($event) => go("checklist")),
        d: common_vendor.o(deleteItem),
        e: common_vendor.o(deleteItem),
        f: common_vendor.o(deleteItem),
        g: common_vendor.o(deleteItem),
        h: common_vendor.o(deleteItem),
        i: common_vendor.o(addItem),
        j: common_vendor.o(($event) => go("darenAudit"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a829f08f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/trip/detail.js.map
