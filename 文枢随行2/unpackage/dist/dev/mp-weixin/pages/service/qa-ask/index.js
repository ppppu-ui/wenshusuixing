"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const questionTitle = common_vendor.ref("");
    const questionContent = common_vendor.ref("");
    const destination = common_vendor.ref("");
    const selectedTags = common_vendor.ref([]);
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const toggleTag = (tag) => {
      const index = selectedTags.value.indexOf(tag);
      if (index > -1) {
        selectedTags.value.splice(index, 1);
      } else {
        selectedTags.value.push(tag);
      }
    };
    const submitQuestion = () => {
      if (!questionTitle.value || !questionContent.value) {
        common_vendor.index.showToast({ title: "请填写问题标题和描述", icon: "none" });
        return;
      }
      common_vendor.index.showToast({ title: "问题发布成功", icon: "success" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 1500);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => back()),
        b: common_vendor.o(submitQuestion),
        c: questionTitle.value,
        d: common_vendor.o(($event) => questionTitle.value = $event.detail.value),
        e: questionContent.value,
        f: common_vendor.o(($event) => questionContent.value = $event.detail.value),
        g: destination.value,
        h: common_vendor.o(($event) => destination.value = $event.detail.value),
        i: selectedTags.value.includes("交通") ? 1 : "",
        j: common_vendor.o(($event) => toggleTag("交通")),
        k: selectedTags.value.includes("住宿") ? 1 : "",
        l: common_vendor.o(($event) => toggleTag("住宿")),
        m: selectedTags.value.includes("美食") ? 1 : "",
        n: common_vendor.o(($event) => toggleTag("美食")),
        o: selectedTags.value.includes("景点") ? 1 : "",
        p: common_vendor.o(($event) => toggleTag("景点")),
        q: selectedTags.value.includes("购物") ? 1 : "",
        r: common_vendor.o(($event) => toggleTag("购物")),
        s: selectedTags.value.includes("其他") ? 1 : "",
        t: common_vendor.o(($event) => toggleTag("其他"))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6f54e585"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/service/qa-ask/index.js.map
