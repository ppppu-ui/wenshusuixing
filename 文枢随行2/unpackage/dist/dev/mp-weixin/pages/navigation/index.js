"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const downloadOffline = () => {
      common_vendor.index.showToast({ title: "离线下载功能开发中", icon: "none" });
    };
    const showPOI = (type) => {
      common_vendor.index.showToast({ title: `显示${type}功能开发中`, icon: "none" });
    };
    const navigateTo = (destination) => {
      common_vendor.index.showToast({ title: `导航到${destination}功能开发中`, icon: "none" });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => back()),
        b: common_vendor.o(downloadOffline),
        c: common_vendor.o(($event) => showPOI("卫生间")),
        d: common_vendor.o(($event) => showPOI("餐厅")),
        e: common_vendor.o(($event) => showPOI("医疗点")),
        f: common_vendor.o(($event) => showPOI("停车场")),
        g: common_vendor.o(($event) => navigateTo("铜车马展厅")),
        h: common_vendor.o(($event) => navigateTo("兵马俑三号坑"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0b7d0d35"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/navigation/index.js.map
