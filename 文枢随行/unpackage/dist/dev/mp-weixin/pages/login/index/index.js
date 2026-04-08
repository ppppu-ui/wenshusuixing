"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    wechatLogin() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    },
    adminLogin() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.wechatLogin && $options.wechatLogin(...args)),
    b: common_vendor.o((...args) => $options.adminLogin && $options.adminLogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74536dfd"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/login/index/index.js.map
