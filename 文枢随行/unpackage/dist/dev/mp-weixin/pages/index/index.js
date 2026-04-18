"use strict";
const common_vendor = require("../../common/vendor.js");
const BASE_URL = "http://10.158.14.40:8080";
const _sfc_main = {
  data() {
    return {
      searchKeyword: "",
      expertTrips: [],
      searchSource: [
        {
          id: "trip-xian",
          type: "trip",
          typeText: "达人行程",
          title: "西安3日非遗文化游",
          keywords: ["西安", "非遗", "兵马俑", "文化"],
          route: "/pages/trip/detail/index?id=daren-xian-3d&source=daren"
        },
        {
          id: "trip-chengdu",
          type: "trip",
          typeText: "达人行程",
          title: "成都2日美食休闲游",
          keywords: ["成都", "美食", "火锅", "锦里"],
          route: "/pages/trip/detail/index?id=daren-chengdu-2d&source=daren"
        },
        {
          id: "spot-bingmayong",
          type: "spot",
          typeText: "热门打卡",
          title: "秦始皇兵马俑博物馆",
          keywords: ["兵马俑", "博物馆", "西安", "打卡"],
          route: "/pages/checkin/detail/index"
        },
        {
          id: "entry-nav",
          type: "feature",
          typeText: "功能入口",
          title: "景区导航",
          keywords: ["导航", "地图", "景区"],
          route: "/pages/navigation/index/index"
        },
        {
          id: "entry-ai",
          type: "feature",
          typeText: "功能入口",
          title: "AI智能定制",
          keywords: ["ai", "智能", "定制", "行程"],
          route: "/pages/ai-trip/index/index"
        }
      ]
    };
  },
  computed: {
    mergedSearchSource() {
      const baseSource = this.searchSource.filter((item) => item.type !== "trip");
      const tripSource = this.expertTripsDisplay.map((trip, index) => ({
        id: `trip-dynamic-${trip.id || index}`,
        type: "trip",
        typeText: "达人行程",
        title: trip.title,
        keywords: [trip.title, trip.tag || "", trip.desc || ""].filter(Boolean),
        route: `/pages/trip/detail/index?id=${trip.id}&source=daren`
      }));
      return [...tripSource, ...baseSource];
    },
    filteredResults() {
      const keyword = this.searchKeyword.trim().toLowerCase();
      if (!keyword)
        return [];
      return this.mergedSearchSource.filter((item) => {
        const inTitle = item.title.toLowerCase().includes(keyword);
        const inKeywords = item.keywords.some((k) => String(k).toLowerCase().includes(keyword));
        return inTitle || inKeywords;
      });
    },
    expertTripsDisplay() {
      if (this.expertTrips.length > 0) {
        return this.expertTrips;
      }
      return [
        {
          id: "daren-xian-3d",
          title: "西安3日非遗文化游",
          desc: "达人认证 · 兵马俑+古城墙+非遗体验",
          tag: "文化游",
          tagType: "culture",
          price: 800,
          icon: "🏛️",
          coverStyle: "background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);"
        },
        {
          id: "daren-chengdu-2d",
          title: "成都2日美食休闲游",
          desc: "达人认证 · 宽窄巷子+锦里+本地火锅",
          tag: "美食游",
          tagType: "food",
          price: 600,
          icon: "🍜",
          coverStyle: "background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);"
        }
      ];
    }
  },
  onShow() {
    this.fetchExpertTrips();
  },
  methods: {
    fetchExpertTrips() {
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: `${BASE_URL}/api/trip/expert-selected`,
        method: "GET",
        header: {
          "Content-Type": "application/json",
          ...token ? { Authorization: `Bearer ${token}` } : {}
        },
        data: {
          page: 1,
          size: 2
        },
        success: (res) => {
          const resp = res.data || {};
          if (res.statusCode !== 200)
            return;
          if (resp.code && resp.code !== 200)
            return;
          const list = this.extractListFromResponse(resp.data);
          this.expertTrips = list.map((item, idx) => this.mapExpertTrip(item, idx)).filter(Boolean);
        }
      });
    },
    extractListFromResponse(data) {
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
    mapExpertTrip(item, idx) {
      if (!item || typeof item !== "object")
        return null;
      const fallbackId = idx === 0 ? "daren-xian-3d" : `daren-expert-${idx + 1}`;
      const title = item.title || item.tripTitle || item.name || "达人推荐行程";
      const price = Number(item.price || item.budgetPerPerson || item.budget || 0) || 0;
      const tagRaw = item.interest || item.category || item.tag || "";
      const tag = tagRaw || "精选游";
      const tagType = /美食/.test(tag) ? "food" : "culture";
      return {
        id: item.id || fallbackId,
        title,
        desc: item.description || item.summary || "达人认证 · 精选路线推荐",
        tag,
        tagType,
        price,
        icon: tagType === "food" ? "🍜" : "🏛️",
        coverStyle: tagType === "food" ? "background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%);" : "background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);"
      };
    },
    handleSearch() {
      if (!this.searchKeyword.trim())
        return;
      if (this.filteredResults.length === 1) {
        this.goBySearchResult(this.filteredResults[0]);
      }
    },
    clearSearch() {
      this.searchKeyword = "";
    },
    goBySearchResult(item) {
      common_vendor.index.navigateTo({
        url: item.route
      });
      this.searchKeyword = "";
    },
    goToAiTrip() {
      common_vendor.index.navigateTo({
        url: "/pages/ai-trip/index/index"
      });
    },
    goToService() {
      common_vendor.index.switchTab({
        url: "/pages/service/index/index"
      });
    },
    goToCheckin() {
      common_vendor.index.navigateTo({
        url: "/pages/checkin/index/index"
      });
    },
    goToDarenTrip() {
      common_vendor.index.navigateTo({
        url: "/pages/daren-trip/index/index"
      });
    },
    goToNavigation() {
      common_vendor.index.navigateTo({
        url: "/pages/navigation/index/index"
      });
    },
    goToTripDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/trip/detail/index?id=${id}&source=daren`
      });
    },
    goToCheckinDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/checkin/detail/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args)),
    b: $data.searchKeyword,
    c: common_vendor.o(($event) => $data.searchKeyword = $event.detail.value),
    d: $data.searchKeyword
  }, $data.searchKeyword ? {
    e: common_vendor.o((...args) => $options.clearSearch && $options.clearSearch(...args))
  } : {}, {
    f: $data.searchKeyword
  }, $data.searchKeyword ? common_vendor.e({
    g: $options.filteredResults.length === 0
  }, $options.filteredResults.length === 0 ? {} : {}, {
    h: common_vendor.f($options.filteredResults, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.typeText),
        b: common_vendor.t(item.title),
        c: item.id,
        d: common_vendor.o(($event) => $options.goBySearchResult(item), item.id)
      };
    })
  }) : {}, {
    i: common_vendor.o((...args) => $options.goToAiTrip && $options.goToAiTrip(...args)),
    j: common_vendor.o((...args) => $options.goToService && $options.goToService(...args)),
    k: common_vendor.o((...args) => $options.goToCheckin && $options.goToCheckin(...args)),
    l: common_vendor.o((...args) => $options.goToDarenTrip && $options.goToDarenTrip(...args)),
    m: common_vendor.o((...args) => $options.goToNavigation && $options.goToNavigation(...args)),
    n: common_vendor.o((...args) => $options.goToDarenTrip && $options.goToDarenTrip(...args)),
    o: common_vendor.f($options.expertTripsDisplay, (trip, index, i0) => {
      return {
        a: common_vendor.t(trip.icon || "🗺️"),
        b: common_vendor.s(trip.coverStyle),
        c: common_vendor.t(trip.tag),
        d: trip.tagType === "food" ? 1 : "",
        e: common_vendor.t(trip.title),
        f: common_vendor.t(trip.desc),
        g: common_vendor.t(trip.price),
        h: trip.id || index,
        i: common_vendor.o(($event) => $options.goToTripDetail(trip.id), trip.id || index)
      };
    }),
    p: $options.expertTripsDisplay.length === 0
  }, $options.expertTripsDisplay.length === 0 ? {} : {}, {
    q: common_vendor.o((...args) => $options.goToCheckin && $options.goToCheckin(...args)),
    r: common_vendor.o((...args) => $options.goToCheckinDetail && $options.goToCheckinDetail(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
