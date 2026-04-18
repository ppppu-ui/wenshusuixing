"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isSticky: false,
      expandedDays: [0, 1],
      tripData: {
        title: "西安3日非遗文化游",
        days: 3,
        budgetPerPerson: 800,
        totalBudget: 2400,
        daysList: [
          {
            route: "兵马俑 → 华清宫",
            spots: [
              {
                name: "秦始皇兵马俑博物馆",
                duration: "3小时",
                desc: "世界第八大奇迹，感受千年秦军威仪",
                tags: ["世界遗产", "必打卡"]
              },
              {
                name: "华清宫",
                duration: "2小时",
                desc: "唐代皇家温泉，杨贵妃沐浴之地",
                tags: ["历史文化"]
              },
              {
                name: "回民街美食",
                duration: "1.5小时",
                desc: "品尝地道西安小吃",
                tags: ["美食推荐"]
              }
            ]
          },
          {
            route: "古城墙 → 大雁塔",
            spots: [
              {
                name: "西安古城墙骑行",
                duration: "2小时",
                desc: "骑行环游明代古城墙",
                tags: ["户外活动"]
              },
              {
                name: "大雁塔+大唐不夜城",
                duration: "3小时",
                desc: "唐代佛教圣地，夜景灯光秀",
                tags: ["夜景", "文化"]
              }
            ]
          }
        ]
      }
    };
  },
  computed: {
    totalSpots() {
      return this.tripData.daysList.reduce((total, day) => total + day.spots.length, 0);
    }
  },
  onLoad() {
    this.loadGeneratedTripData();
  },
  onPageScroll(e) {
    this.isSticky = e.scrollTop > 80;
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString();
    },
    loadGeneratedTripData() {
      const generatedData = common_vendor.index.getStorageSync("generatedTripData");
      if (generatedData) {
        this.tripData = { ...this.tripData, ...generatedData };
      }
    },
    goBack() {
      common_vendor.index.navigateBack();
    },
    goToNavigation() {
      common_vendor.index.navigateTo({
        url: "/pages/navigation/index/index"
      });
    },
    toggleDay(dayIndex) {
      const index = this.expandedDays.indexOf(dayIndex);
      if (index > -1) {
        this.expandedDays.splice(index, 1);
      } else {
        this.expandedDays.push(dayIndex);
      }
    },
    generateChecklist() {
      common_vendor.index.showToast({
        title: "清单生成中...",
        icon: "loading"
      });
      setTimeout(() => {
        common_vendor.index.showToast({
          title: "清单已生成",
          icon: "success"
        });
      }, 1500);
    },
    addSpot() {
      common_vendor.index.showToast({
        title: "添加景点功能",
        icon: "none"
      });
    },
    deleteSpot(dayIndex, spotIndex) {
      common_vendor.index.showModal({
        title: "确认删除",
        content: "确定要删除这个景点吗？",
        success: (res) => {
          if (res.confirm) {
            this.tripData.daysList[dayIndex].spots.splice(spotIndex, 1);
            common_vendor.index.showToast({
              title: "已删除",
              icon: "success"
            });
          }
        }
      });
    },
    submitAudit() {
      common_vendor.index.showModal({
        title: "提交审核",
        content: "提交后本地达人将为您审核行程合理性",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "提交成功",
              icon: "success"
            });
          }
        }
      });
    },
    regenerateTrip() {
      const tripData = {
        destination: "西安",
        days: this.tripData.days,
        budget: String(this.tripData.budgetPerPerson),
        interests: ["culture", "food"],
        mustVisit: "兵马俑,华清宫",
        customInterest: ""
      };
      common_vendor.index.setStorageSync("regenerateTripData", tripData);
      common_vendor.index.navigateBack();
    },
    confirmTrip() {
      let savedTrips = common_vendor.index.getStorageSync("myTrips");
      if (!Array.isArray(savedTrips)) {
        savedTrips = [];
      }
      const newTrip = {
        id: Date.now(),
        title: this.tripData.title || "未命名行程",
        days: this.tripData.days || 3,
        budget: this.tripData.totalBudget || 2400,
        spots: this.totalSpots || 0,
        createTime: (/* @__PURE__ */ new Date()).toISOString(),
        // 详情页需要的完整结构一并保留
        budgetPerPerson: this.tripData.budgetPerPerson || 0,
        totalBudget: this.tripData.totalBudget || 0,
        daysList: Array.isArray(this.tripData.daysList) ? this.tripData.daysList : []
      };
      savedTrips.unshift(newTrip);
      common_vendor.index.setStorageSync("myTrips", savedTrips);
      common_vendor.index.setStorageSync("latestConfirmedTrip", newTrip);
      const verifyTrips = common_vendor.index.getStorageSync("myTrips");
      if (!Array.isArray(verifyTrips) || verifyTrips.length === 0) {
        common_vendor.index.showToast({
          title: "保存失败，请重试",
          icon: "none"
        });
        return;
      }
      common_vendor.index.showToast({
        title: "行程保存成功",
        icon: "success",
        duration: 1500
      });
      setTimeout(() => {
        common_vendor.index.switchTab({
          url: "/pages/trip/index/index"
        });
      }, 1500);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: common_vendor.t($data.tripData.title),
    c: common_vendor.o((...args) => $options.goToNavigation && $options.goToNavigation(...args)),
    d: common_vendor.t($data.tripData.budgetPerPerson),
    e: common_vendor.t($data.tripData.days),
    f: common_vendor.t($data.tripData.days - 1),
    g: common_vendor.t($options.totalSpots),
    h: $data.isSticky ? 1 : "",
    i: common_vendor.t($options.formatNumber($data.tripData.totalBudget)),
    j: common_vendor.o((...args) => $options.generateChecklist && $options.generateChecklist(...args)),
    k: common_vendor.f($data.tripData.daysList, (day, dayIndex, i0) => {
      return common_vendor.e({
        a: common_vendor.t(dayIndex + 1),
        b: common_vendor.t(day.route),
        c: common_vendor.t(day.spots.length),
        d: $data.expandedDays.includes(dayIndex) ? 1 : "",
        e: common_vendor.o(($event) => $options.toggleDay(dayIndex), dayIndex),
        f: $data.expandedDays.includes(dayIndex)
      }, $data.expandedDays.includes(dayIndex) ? {
        g: common_vendor.f(day.spots, (spot, spotIndex, i1) => {
          return common_vendor.e({
            a: spotIndex !== day.spots.length - 1
          }, spotIndex !== day.spots.length - 1 ? {} : {}, {
            b: common_vendor.t(spot.name),
            c: common_vendor.t(spot.duration),
            d: spot.desc
          }, spot.desc ? {
            e: common_vendor.t(spot.desc)
          } : {}, {
            f: spot.tags && spot.tags.length
          }, spot.tags && spot.tags.length ? {
            g: common_vendor.f(spot.tags, (tag, tIndex, i2) => {
              return {
                a: common_vendor.t(tag),
                b: tIndex
              };
            })
          } : {}, {
            h: common_vendor.o(($event) => $options.deleteSpot(dayIndex, spotIndex), spotIndex),
            i: spotIndex,
            j: spotIndex === day.spots.length - 1 ? 1 : ""
          });
        })
      } : {}, {
        h: dayIndex
      });
    }),
    l: common_vendor.o((...args) => $options.addSpot && $options.addSpot(...args)),
    m: common_vendor.o((...args) => $options.submitAudit && $options.submitAudit(...args)),
    n: common_vendor.o((...args) => $options.regenerateTrip && $options.regenerateTrip(...args)),
    o: common_vendor.o((...args) => $options.confirmTrip && $options.confirmTrip(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3c95eb52"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/ai-trip/result/index.js.map
