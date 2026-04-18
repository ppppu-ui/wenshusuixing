"use strict";
const common_vendor = require("../../../common/vendor.js");
const BASE_URL = "http://10.158.14.40:8080";
const _sfc_main = {
  data() {
    return {
      qaList: []
    };
  },
  onShow() {
    this.fetchQaList();
  },
  computed: {
    qaListDisplay() {
      if (this.qaList.length > 0)
        return this.qaList;
      return [
        {
          id: "local-1",
          user: "游客",
          time: "2小时前",
          location: "西安",
          question: "西安兵马俑需要提前预约吗？现场能买票吗？",
          answerer: "西安老陕",
          answer: "需要提前1-3天在官方公众号预约，现场无线下票口，节假日建议更早预约，避免没票～"
        },
        {
          id: "local-2",
          user: "游客",
          time: "5小时前",
          location: "成都",
          question: "成都本地人推荐的火锅店，不要网红店！",
          answerer: "",
          answer: ""
        }
      ];
    }
  },
  methods: {
    fetchQaList() {
      const token = common_vendor.index.getStorageSync("token");
      const userInfo = common_vendor.index.getStorageSync("userInfo") || {};
      common_vendor.index.request({
        url: `${BASE_URL}/api/expert/question/list`,
        method: "GET",
        header: {
          ...token ? { Authorization: `Bearer ${token}` } : {}
        },
        data: {
          userId: userInfo.id || userInfo.userId || void 0,
          page: 1,
          size: 10
        },
        success: (res) => {
          const resp = res.data || {};
          if (res.statusCode !== 200)
            return;
          if (resp.code && resp.code !== 200)
            return;
          const list = this.extractList(resp.data);
          this.qaList = list.map(this.mapQaItem).filter(Boolean);
        }
      });
    },
    extractList(data) {
      if (Array.isArray(data))
        return data;
      if (data && Array.isArray(data.records))
        return data.records;
      if (data && Array.isArray(data.list))
        return data.list;
      if (data && Array.isArray(data.items))
        return data.items;
      return [];
    },
    mapQaItem(item) {
      if (!item || typeof item !== "object")
        return null;
      return {
        id: item.id || item.questionId,
        user: item.userName || "游客",
        time: item.createTimeText || "刚刚",
        location: item.city || "未知地点",
        question: item.question || item.content || "暂无问题内容",
        answerer: item.expertName || "本地达人",
        answer: item.answer || item.latestAnswer || ""
      };
    },
    goBack() {
      common_vendor.index.navigateBack();
    },
    goToEmergency() {
      common_vendor.index.navigateTo({
        url: "/pages/service/emergency/index/index",
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/service/index/index.vue:146", "跳转失败:", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    },
    goToGuide() {
      common_vendor.index.navigateTo({
        url: "/pages/service/guide/index/index",
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/service/index/index.vue:158", "跳转失败:", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    },
    goToQADetail(item) {
      const id = item && item.id ? item.id : "";
      common_vendor.index.navigateTo({
        url: `/pages/service/qa-detail/index/index${id ? `?id=${id}` : ""}`,
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/service/index/index.vue:171", "跳转失败:", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    },
    goToQAAsk() {
      common_vendor.index.navigateTo({
        url: "/pages/service/qa-ask/index/index",
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/service/index/index.vue:183", "跳转失败:", err);
          common_vendor.index.showToast({
            title: "页面跳转失败",
            icon: "none"
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.goToEmergency && $options.goToEmergency(...args)),
    b: common_vendor.o((...args) => $options.goToGuide && $options.goToGuide(...args)),
    c: common_vendor.o((...args) => $options.goToQAAsk && $options.goToQAAsk(...args)),
    d: common_vendor.f($options.qaListDisplay, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.user),
        b: common_vendor.t(item.time),
        c: common_vendor.t(item.location),
        d: common_vendor.t(item.question),
        e: item.answer
      }, item.answer ? {
        f: common_vendor.t(item.answerer),
        g: common_vendor.t(item.answer)
      } : {}, {
        h: item.id,
        i: common_vendor.o(($event) => $options.goToQADetail(item), item.id)
      });
    }),
    e: $options.qaListDisplay.length === 0
  }, $options.qaListDisplay.length === 0 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e27afa56"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/service/index/index.js.map
