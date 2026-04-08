"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tripList: [],
      openedIndex: -1,
      touchStartX: 0,
      touchMoveX: 0
    };
  },
  onShow() {
    this.loadTripList();
    this.openedIndex = -1;
  },
  methods: {
    loadTripList() {
      const savedTrips = common_vendor.index.getStorageSync("myTrips") || [];
      this.tripList = savedTrips.map((trip) => ({
        ...trip,
        status: "confirmed",
        statusText: "已确认"
      }));
    },
    formatNumber(num) {
      return num.toLocaleString();
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      return `${date.getMonth() + 1}月${date.getDate()}日创建`;
    },
    createNewTrip() {
      common_vendor.index.navigateTo({
        url: "/pages/ai-trip/index/index"
      });
    },
    goToAI() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    },
    goToTripDetail(id) {
      if (this.openedIndex !== -1) {
        this.openedIndex = -1;
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/trip/detail/index?id=${id}`
      });
    },
    touchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    touchMove(e) {
      this.touchMoveX = e.touches[0].clientX;
    },
    touchEnd(e) {
      const index = parseInt(e.currentTarget.dataset.index);
      const diff = this.touchStartX - this.touchMoveX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.openedIndex = index;
        } else {
          this.openedIndex = -1;
        }
      }
    },
    showDeleteConfirm(id) {
      common_vendor.index.showModal({
        title: "删除行程",
        content: "确定删除该行程吗？",
        confirmColor: "#E74C3C",
        success: (res) => {
          if (res.confirm) {
            this.deleteTrip(id);
          } else {
            this.openedIndex = -1;
          }
        }
      });
    },
    deleteTrip(id) {
      let savedTrips = common_vendor.index.getStorageSync("myTrips") || [];
      savedTrips = savedTrips.filter((trip) => trip.id !== id);
      common_vendor.index.setStorageSync("myTrips", savedTrips);
      this.tripList = this.tripList.filter((trip) => trip.id !== id);
      this.openedIndex = -1;
      common_vendor.index.showToast({
        title: "已删除",
        icon: "success"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.createNewTrip && $options.createNewTrip(...args)),
    b: $data.tripList.length === 0
  }, $data.tripList.length === 0 ? {
    c: common_vendor.o((...args) => $options.goToAI && $options.goToAI(...args))
  } : {}, {
    d: common_vendor.f($data.tripList, (trip, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.showDeleteConfirm(trip.id), trip.id),
        b: common_vendor.t(trip.title),
        c: common_vendor.t(trip.statusText),
        d: common_vendor.n(trip.status),
        e: common_vendor.t(trip.days),
        f: common_vendor.t(trip.days - 1),
        g: common_vendor.t(trip.spots),
        h: common_vendor.t($options.formatNumber(trip.budget)),
        i: common_vendor.t($options.formatDate(trip.createTime)),
        j: $data.openedIndex === index ? 1 : "",
        k: $data.openedIndex === index ? "translateX(-80px)" : "translateX(0)",
        l: common_vendor.o(($event) => $options.goToTripDetail(trip.id), trip.id),
        m: trip.id,
        n: index,
        o: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args), trip.id),
        p: common_vendor.o((...args) => $options.touchMove && $options.touchMove(...args), trip.id),
        q: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args), trip.id)
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3a042aff"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/trip/index/index.js.map
