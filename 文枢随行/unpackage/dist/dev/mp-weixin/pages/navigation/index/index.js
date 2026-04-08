"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isSearchFocused: false,
      searchKeyword: "",
      scale: 1,
      markerPosition: { x: 50, y: 50 },
      touchStartData: { x: 0, y: 0, distance: 0 },
      attractions: [
        {
          name: "铜车马展厅",
          status: "open",
          statusText: "开放中",
          distance: 200,
          walkTime: 3,
          tags: ["必看", "文化", "镇馆之宝"],
          isCollected: false
        },
        {
          name: "兵马俑一号坑",
          status: "open",
          statusText: "开放中",
          distance: 350,
          walkTime: 5,
          tags: ["世界遗产", "必打卡"],
          isCollected: true
        },
        {
          name: "兵马俑三号坑",
          status: "crowded",
          statusText: "拥挤",
          distance: 500,
          walkTime: 7,
          tags: ["历史", "考古"],
          isCollected: false
        },
        {
          name: "秦始皇陵",
          status: "open",
          statusText: "开放中",
          distance: 1200,
          walkTime: 15,
          tags: ["世界遗产", "历史"],
          isCollected: false
        }
      ]
    };
  },
  computed: {
    markerStyle() {
      return {
        left: this.markerPosition.x + "%",
        top: this.markerPosition.y + "%"
      };
    }
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    clearSearch() {
      this.searchKeyword = "";
    },
    handleSearch() {
      if (!this.searchKeyword.trim()) {
        common_vendor.index.showToast({
          title: "请输入搜索内容",
          icon: "none"
        });
        return;
      }
      common_vendor.index.showToast({
        title: `搜索: ${this.searchKeyword}`,
        icon: "none"
      });
    },
    downloadMap() {
      common_vendor.index.navigateTo({
        url: "/pages/navigation/offline-map/offline-map",
        fail: () => {
          common_vendor.index.showToast({
            title: "页面开发中",
            icon: "none"
          });
        }
      });
    },
    zoomIn() {
      if (this.scale < 3) {
        this.scale += 0.5;
      }
    },
    zoomOut() {
      if (this.scale > 1) {
        this.scale -= 0.5;
      }
    },
    centerMap() {
      common_vendor.index.getLocation({
        type: "gcj02",
        success: (res) => {
          common_vendor.index.showToast({
            title: "已定位到当前位置",
            icon: "success"
          });
        },
        fail: () => {
          common_vendor.index.showToast({
            title: "定位失败，请检查权限",
            icon: "none"
          });
        }
      });
    },
    touchStart(e) {
      const touches = e.touches;
      if (touches.length === 1) {
        this.touchStartData.x = touches[0].clientX;
        this.touchStartData.y = touches[0].clientY;
      } else if (touches.length === 2) {
        const x = touches[0].clientX - touches[1].clientX;
        const y = touches[0].clientY - touches[1].clientY;
        this.touchStartData.distance = Math.sqrt(x * x + y * y);
      }
    },
    touchMove(e) {
      const touches = e.touches;
      if (touches.length === 2) {
        const x = touches[0].clientX - touches[1].clientX;
        const y = touches[0].clientY - touches[1].clientY;
        const distance = Math.sqrt(x * x + y * y);
        const scale = distance / this.touchStartData.distance;
        this.scale = Math.min(Math.max(this.scale * scale, 1), 3);
        this.touchStartData.distance = distance;
      }
    },
    touchEnd(e) {
    },
    findToilet() {
      common_vendor.index.showToast({
        title: "已显示附近卫生间",
        icon: "none"
      });
    },
    findRestaurant() {
      common_vendor.index.showToast({
        title: "已显示附近餐厅",
        icon: "none"
      });
    },
    findMedical() {
      common_vendor.index.showToast({
        title: "已显示附近医疗点",
        icon: "none"
      });
    },
    findParking() {
      common_vendor.index.showToast({
        title: "已显示附近停车场",
        icon: "none"
      });
    },
    findEntrance() {
      common_vendor.index.showToast({
        title: "已显示出入口位置",
        icon: "none"
      });
    },
    switchToOnline() {
      common_vendor.index.showModal({
        title: "切换模式",
        content: "是否切换到在线导航模式？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "已切换至在线模式",
              icon: "success"
            });
          }
        }
      });
    },
    viewMore() {
      common_vendor.index.showToast({
        title: "查看更多景点",
        icon: "none"
      });
    },
    viewDetail(item) {
      common_vendor.index.navigateTo({
        url: `/pages/attraction/detail?name=${item.name}`
      });
    },
    toggleCollect(index) {
      const item = this.attractions[index];
      item.isCollected = !item.isCollected;
      common_vendor.index.showToast({
        title: item.isCollected ? "已收藏" : "取消收藏",
        icon: "none"
      });
    },
    navigateTo(item) {
      common_vendor.index.showModal({
        title: "开始导航",
        content: `是否开始导航到${item.name}？`,
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "开始导航",
              icon: "success"
            });
          }
        }
      });
    }
  }
};
if (!Array) {
  const _component_line = common_vendor.resolveComponent("line");
  const _component_polyline = common_vendor.resolveComponent("polyline");
  const _component_svg = common_vendor.resolveComponent("svg");
  const _component_path = common_vendor.resolveComponent("path");
  const _component_circle = common_vendor.resolveComponent("circle");
  const _component_rect = common_vendor.resolveComponent("rect");
  const _component_polygon = common_vendor.resolveComponent("polygon");
  (_component_line + _component_polyline + _component_svg + _component_path + _component_circle + _component_rect + _component_polygon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12"
    }),
    b: common_vendor.p({
      points: "12 19 5 12 12 5"
    }),
    c: common_vendor.p({
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    d: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    e: common_vendor.o(($event) => $data.isSearchFocused = true),
    f: common_vendor.o(($event) => $data.isSearchFocused = false),
    g: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args)),
    h: $data.searchKeyword,
    i: common_vendor.o(($event) => $data.searchKeyword = $event.detail.value),
    j: $data.searchKeyword
  }, $data.searchKeyword ? {
    k: common_vendor.p({
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }),
    l: common_vendor.p({
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }),
    m: common_vendor.p({
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#FFFFFF",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    n: common_vendor.o((...args) => $options.clearSearch && $options.clearSearch(...args))
  } : {}, {
    o: $data.isSearchFocused ? 1 : "",
    p: common_vendor.p({
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }),
    q: common_vendor.p({
      points: "7 10 12 15 17 10"
    }),
    r: common_vendor.p({
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }),
    s: common_vendor.p({
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#4CAF50",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    t: common_vendor.o((...args) => $options.downloadMap && $options.downloadMap(...args)),
    v: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    w: common_vendor.o((...args) => $options.touchMove && $options.touchMove(...args)),
    x: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args)),
    y: common_vendor.s($options.markerStyle),
    z: common_vendor.p({
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }),
    A: common_vendor.p({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }),
    B: common_vendor.p({
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    C: common_vendor.o((...args) => $options.zoomIn && $options.zoomIn(...args)),
    D: common_vendor.p({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }),
    E: common_vendor.p({
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    F: common_vendor.o((...args) => $options.zoomOut && $options.zoomOut(...args)),
    G: common_vendor.p({
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }),
    H: common_vendor.p({
      cx: "12",
      cy: "10",
      r: "3"
    }),
    I: common_vendor.p({
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    J: common_vendor.o((...args) => $options.centerMap && $options.centerMap(...args)),
    K: $data.scale > 1
  }, $data.scale > 1 ? {
    L: common_vendor.t(Math.round($data.scale * 100))
  } : {}, {
    M: common_vendor.p({
      d: "M18 8h1a4 4 0 0 1 0 8h-1"
    }),
    N: common_vendor.p({
      d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
    }),
    O: common_vendor.p({
      x1: "6",
      y1: "1",
      x2: "6",
      y2: "4"
    }),
    P: common_vendor.p({
      x1: "10",
      y1: "1",
      x2: "10",
      y2: "4"
    }),
    Q: common_vendor.p({
      x1: "14",
      y1: "1",
      x2: "14",
      y2: "4"
    }),
    R: common_vendor.p({
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    S: common_vendor.o((...args) => $options.findToilet && $options.findToilet(...args)),
    T: common_vendor.p({
      d: "M18 8h1a4 4 0 0 1 0 8h-1"
    }),
    U: common_vendor.p({
      d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
    }),
    V: common_vendor.p({
      x1: "6",
      y1: "1",
      x2: "6",
      y2: "4"
    }),
    W: common_vendor.p({
      x1: "10",
      y1: "1",
      x2: "10",
      y2: "4"
    }),
    X: common_vendor.p({
      x1: "14",
      y1: "1",
      x2: "14",
      y2: "4"
    }),
    Y: common_vendor.p({
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    Z: common_vendor.o((...args) => $options.findRestaurant && $options.findRestaurant(...args)),
    aa: common_vendor.p({
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }),
    ab: common_vendor.p({
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    ac: common_vendor.o((...args) => $options.findMedical && $options.findMedical(...args)),
    ad: common_vendor.p({
      x: "1",
      y: "3",
      width: "15",
      height: "13"
    }),
    ae: common_vendor.p({
      points: "16 8 20 8 23 11 23 16 16 16 16 8"
    }),
    af: common_vendor.p({
      cx: "5.5",
      cy: "18.5",
      r: "2.5"
    }),
    ag: common_vendor.p({
      cx: "18.5",
      cy: "18.5",
      r: "2.5"
    }),
    ah: common_vendor.p({
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    ai: common_vendor.o((...args) => $options.findParking && $options.findParking(...args)),
    aj: common_vendor.p({
      d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }),
    ak: common_vendor.p({
      points: "10 17 15 12 10 7"
    }),
    al: common_vendor.p({
      x1: "15",
      y1: "12",
      x2: "3",
      y2: "12"
    }),
    am: common_vendor.p({
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    an: common_vendor.o((...args) => $options.findEntrance && $options.findEntrance(...args)),
    ao: common_vendor.p({
      x1: "1",
      y1: "1",
      x2: "23",
      y2: "23"
    }),
    ap: common_vendor.p({
      d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
    }),
    aq: common_vendor.p({
      d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
    }),
    ar: common_vendor.p({
      d: "M10.71 5.05A16 16 0 0 1 22.58 9"
    }),
    as: common_vendor.p({
      d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
    }),
    at: common_vendor.p({
      d: "M8.53 16.11a6 6 0 0 1 6.95 0"
    }),
    av: common_vendor.p({
      x1: "12",
      y1: "20",
      x2: "12.01",
      y2: "20"
    }),
    aw: common_vendor.p({
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    ax: common_vendor.o((...args) => $options.switchToOnline && $options.switchToOnline(...args)),
    ay: common_vendor.p({
      points: "1 6 1 22 8 18 16 22 21 18 21 2 16 6 8 2 1 6"
    }),
    az: common_vendor.p({
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "18"
    }),
    aA: common_vendor.p({
      x1: "16",
      y1: "6",
      x2: "16",
      y2: "22"
    }),
    aB: common_vendor.p({
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    aC: common_vendor.p({
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }),
    aD: common_vendor.p({
      points: "12 5 19 12 12 19"
    }),
    aE: common_vendor.p({
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#4CAF50",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    aF: common_vendor.o((...args) => $options.viewMore && $options.viewMore(...args)),
    aG: common_vendor.f($data.attractions, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.statusText),
        c: common_vendor.n(item.status),
        d: "5b4bbd1f-57-" + i0 + "," + ("5b4bbd1f-56-" + i0),
        e: "5b4bbd1f-58-" + i0 + "," + ("5b4bbd1f-56-" + i0),
        f: "5b4bbd1f-56-" + i0,
        g: common_vendor.t(item.distance),
        h: "5b4bbd1f-60-" + i0 + "," + ("5b4bbd1f-59-" + i0),
        i: "5b4bbd1f-61-" + i0 + "," + ("5b4bbd1f-59-" + i0),
        j: "5b4bbd1f-59-" + i0,
        k: common_vendor.t(item.walkTime),
        l: common_vendor.f(item.tags, (tag, tIndex, i1) => {
          return {
            a: common_vendor.t(tag),
            b: tIndex
          };
        }),
        m: "5b4bbd1f-63-" + i0 + "," + ("5b4bbd1f-62-" + i0),
        n: item.isCollected ? 1 : "",
        o: "5b4bbd1f-62-" + i0,
        p: common_vendor.p({
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: item.isCollected ? "#4CAF50" : "#333333",
          ["stroke-width"]: "1.5",
          ["stroke-linecap"]: "round",
          ["stroke-linejoin"]: "round"
        }),
        q: common_vendor.o(($event) => $options.toggleCollect(index), index),
        r: "5b4bbd1f-65-" + i0 + "," + ("5b4bbd1f-64-" + i0),
        s: "5b4bbd1f-64-" + i0,
        t: common_vendor.o(($event) => $options.navigateTo(item), index),
        v: index,
        w: common_vendor.o(($event) => $options.viewDetail(item), index)
      };
    }),
    aH: common_vendor.p({
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }),
    aI: common_vendor.p({
      cx: "12",
      cy: "10",
      r: "3"
    }),
    aJ: common_vendor.p({
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    aK: common_vendor.p({
      cx: "12",
      cy: "12",
      r: "10"
    }),
    aL: common_vendor.p({
      points: "12 6 12 12 16 14"
    }),
    aM: common_vendor.p({
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#333333",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    aN: common_vendor.p({
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    }),
    aO: common_vendor.p({
      points: "3 11 22 2 13 21 11 13 3 11"
    }),
    aP: common_vendor.p({
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#FFFFFF",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5b4bbd1f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/navigation/index/index.js.map
