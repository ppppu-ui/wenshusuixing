"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selectedType: "",
      description: "",
      contact: "",
      helpTypes: ["医疗救助", "安全求助", "设施故障", "走失求助", "物品遗失", "其他问题"]
    };
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    selectType(type) {
      this.selectedType = type;
    },
    sendHelp() {
      if (!this.selectedType) {
        common_vendor.index.showToast({
          title: "请选择求助类型",
          icon: "none"
        });
        return;
      }
      common_vendor.index.__f__("log", "at pages/service/emergency/index/index.vue:105", "发送求助信息", {
        type: this.selectedType,
        description: this.description,
        contact: this.contact
      });
      common_vendor.index.showToast({
        title: "求助信息已发送",
        icon: "success"
      });
    },
    callRescue(phone) {
      common_vendor.index.__f__("log", "at pages/service/emergency/index/index.vue:117", "拨打救援电话", phone);
      common_vendor.index.makePhoneCall({
        phoneNumber: phone
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: common_vendor.f($data.helpTypes, (type, k0, i0) => {
      return {
        a: common_vendor.t(type),
        b: type,
        c: $data.selectedType === type ? 1 : "",
        d: common_vendor.o(($event) => $options.selectType(type), type)
      };
    }),
    c: $data.description,
    d: common_vendor.o(($event) => $data.description = $event.detail.value),
    e: $data.contact,
    f: common_vendor.o(($event) => $data.contact = $event.detail.value),
    g: common_vendor.o((...args) => $options.sendHelp && $options.sendHelp(...args)),
    h: common_vendor.o(($event) => $options.callRescue("029-XXXXXXX")),
    i: common_vendor.o(($event) => $options.callRescue("029-XXXXXXX"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dacf98fd"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/service/emergency/index/index.js.map
