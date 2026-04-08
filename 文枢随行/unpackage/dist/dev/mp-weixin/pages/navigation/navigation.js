"use strict";
const common_vendor = require("../../common/vendor.js");
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
  const _component_path = common_vendor.resolveComponent("path");
  const _component_polyline = common_vendor.resolveComponent("polyline");
  const _component_line = common_vendor.resolveComponent("line");
  const _component_svg = common_vendor.resolveComponent("svg");
  (_component_path + _component_polyline + _component_line + _component_svg)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: common_vendor.o(($event) => $data.isSearchFocused = true),
    c: common_vendor.o(($event) => $data.isSearchFocused = false),
    d: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args)),
    e: $data.searchKeyword,
    f: common_vendor.o(($event) => $data.searchKeyword = $event.detail.value),
    g: $data.searchKeyword
  }, $data.searchKeyword ? {
    h: common_vendor.o((...args) => $options.clearSearch && $options.clearSearch(...args))
  } : {}, {
    i: $data.isSearchFocused ? 1 : "",
    j: common_vendor.p({
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
    }),
    k: common_vendor.p({
      points: "7 10 12 15 17 10"
    }),
    l: common_vendor.p({
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }),
    m: common_vendor.p({
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#4CAF50",
      ["stroke-width"]: "1.5",
      ["stroke-linecap"]: "round",
      ["stroke-linejoin"]: "round"
    }),
    n: common_vendor.o((...args) => $options.downloadMap && $options.downloadMap(...args)),
    o: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    p: common_vendor.o((...args) => $options.touchMove && $options.touchMove(...args)),
    q: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args)),
    r: common_vendor.s($options.markerStyle),
    s: common_vendor.o((...args) => $options.zoomIn && $options.zoomIn(...args)),
    t: common_vendor.o((...args) => $options.zoomOut && $options.zoomOut(...args)),
    v: common_vendor.o((...args) => $options.centerMap && $options.centerMap(...args)),
    w: $data.scale > 1
  }, $data.scale > 1 ? {
    x: common_vendor.t(Math.round($data.scale * 100))
  } : {}, {
    y: common_vendor.o((...args) => $options.findToilet && $options.findToilet(...args)),
    z: common_vendor.o((...args) => $options.findRestaurant && $options.findRestaurant(...args)),
    A: common_vendor.o((...args) => $options.findMedical && $options.findMedical(...args)),
    B: common_vendor.o((...args) => $options.findParking && $options.findParking(...args)),
    C: common_vendor.o((...args) => $options.findEntrance && $options.findEntrance(...args)),
    D: common_vendor.o((...args) => $options.switchToOnline && $options.switchToOnline(...args)),
    E: common_vendor.o((...args) => $options.viewMore && $options.viewMore(...args)),
    F: common_vendor.f($data.attractions, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.statusText),
        c: common_vendor.n(item.status),
        d: common_vendor.t(item.distance),
        e: common_vendor.t(item.walkTime),
        f: common_vendor.f(item.tags, (tag, tIndex, i1) => {
          return {
            a: common_vendor.t(tag),
            b: tIndex
          };
        }),
        g: item.isCollected ? 1 : "",
        h: common_vendor.o(($event) => $options.toggleCollect(index), index),
        i: common_vendor.o(($event) => $options.navigateTo(item), index),
        j: index,
        k: common_vendor.o(($event) => $options.viewDetail(item), index)
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b0045dab"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/navigation/navigation.js.map
