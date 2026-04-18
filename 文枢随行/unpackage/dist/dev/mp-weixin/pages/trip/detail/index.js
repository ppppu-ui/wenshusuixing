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
  onLoad(options) {
    const id = options.id;
    const source = options.source || "my";
    if (id) {
      this.loadTripData(id, source);
    }
  },
  onPageScroll(e) {
    this.isSticky = e.scrollTop > 80;
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString();
    },
    loadTripData(id, source = "my") {
      if (source === "my") {
        const savedTrips = common_vendor.index.getStorageSync("myTrips") || [];
        const trip = savedTrips.find((t) => String(t.id) === String(id));
        if (trip) {
          this.tripData = { ...this.tripData, ...trip };
        }
        return;
      }
      const darenTripMap = {
        "daren-xian-3d": {
          title: "西安3日非遗文化深度游",
          days: 3,
          budgetPerPerson: 800,
          totalBudget: 800,
          daysList: [
            {
              route: "兵马俑 → 华清宫",
              spots: [
                { name: "秦始皇兵马俑博物馆", duration: "09:00-12:00", desc: "世界遗产，经典打卡", tags: ["世界遗产", "达人推荐"] },
                { name: "华清宫", duration: "13:30-16:00", desc: "唐风文化体验", tags: ["历史文化"] }
              ]
            },
            {
              route: "古城墙 → 永兴坊",
              spots: [
                { name: "西安古城墙", duration: "09:30-11:30", desc: "骑行环城体验", tags: ["户外活动"] },
                { name: "永兴坊", duration: "12:30-14:00", desc: "非遗美食街区", tags: ["美食"] }
              ]
            },
            {
              route: "陕西历史博物馆 → 大雁塔",
              spots: [
                { name: "陕西历史博物馆", duration: "09:00-11:30", desc: "了解十三朝文明", tags: ["博物馆"] },
                { name: "大雁塔", duration: "15:00-17:00", desc: "地标夜景拍照", tags: ["文化地标"] }
              ]
            }
          ]
        },
        "daren-chengdu-2d": {
          title: "成都2日美食打卡",
          days: 2,
          budgetPerPerson: 600,
          totalBudget: 600,
          daysList: [
            {
              route: "宽窄巷子 → 人民公园",
              spots: [
                { name: "宽窄巷子", duration: "10:00-12:00", desc: "老成都街巷体验", tags: ["城市漫游"] },
                { name: "人民公园", duration: "14:00-15:30", desc: "体验成都慢生活", tags: ["休闲"] }
              ]
            },
            {
              route: "锦里 → 火锅体验",
              spots: [
                { name: "锦里古街", duration: "10:00-12:00", desc: "川蜀文化与小吃", tags: ["文化"] },
                { name: "本地火锅店", duration: "18:00-20:00", desc: "达人私藏火锅店", tags: ["美食推荐"] }
              ]
            }
          ]
        },
        "daren-guilin-4d": {
          title: "桂林4日山水甲天下",
          days: 4,
          budgetPerPerson: 1200,
          totalBudget: 1200,
          daysList: [
            {
              route: "象鼻山 → 两江四湖",
              spots: [
                { name: "象鼻山", duration: "09:00-11:00", desc: "桂林城市地标", tags: ["自然风光"] },
                { name: "两江四湖夜游", duration: "19:00-20:30", desc: "夜景游船体验", tags: ["夜游"] }
              ]
            },
            {
              route: "漓江 → 阳朔西街",
              spots: [
                { name: "漓江竹筏", duration: "09:00-12:00", desc: "山水画廊精华段", tags: ["必体验"] },
                { name: "阳朔西街", duration: "15:00-17:00", desc: "休闲慢逛", tags: ["打卡"] }
              ]
            },
            {
              route: "遇龙河 → 十里画廊",
              spots: [
                { name: "遇龙河漂流", duration: "09:30-11:30", desc: "田园山水风光", tags: ["自然体验"] },
                { name: "十里画廊骑行", duration: "14:00-16:00", desc: "经典骑行路线", tags: ["户外"] }
              ]
            },
            {
              route: "龙脊梯田",
              spots: [
                { name: "龙脊梯田", duration: "09:00-14:00", desc: "少数民族村寨与梯田景观", tags: ["深度游"] }
              ]
            }
          ]
        }
      };
      if (darenTripMap[id]) {
        this.tripData = { ...this.tripData, ...darenTripMap[id] };
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
            h: spotIndex,
            i: spotIndex === day.spots.length - 1 ? 1 : ""
          });
        })
      } : {}, {
        h: dayIndex
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2755ff7f"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/trip/detail/index.js.map
