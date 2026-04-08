"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        destination: "",
        days: 3,
        budget: "",
        mustVisit: "",
        customInterest: ""
      },
      daysOptions: [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7+", value: 8 }
      ],
      budgetHints: [
        { label: "经济型 500", value: 500 },
        { label: "舒适型 1000", value: 1e3 },
        { label: "豪华型 2000", value: 2e3 }
      ],
      interests: [
        { label: "文化古迹", value: "culture", icon: "🏛️" },
        { label: "美食探索", value: "food", icon: "🍜" },
        { label: "自然风光", value: "nature", icon: "🏔️" },
        { label: "小众秘境", value: "niche", icon: "🌿" },
        { label: "亲子家庭", value: "family", icon: "👨‍👩‍👧‍👦" },
        { label: "户外徒步", value: "hiking", icon: "🥾" }
      ],
      selectedInterests: [],
      errors: {
        destination: "",
        days: "",
        budget: "",
        interests: ""
      },
      isLoading: false
    };
  },
  computed: {
    isFormValid() {
      return this.formData.destination && this.formData.days && this.formData.budget && this.selectedInterests.length > 0;
    }
  },
  methods: {
    goBack() {
      common_vendor.index.navigateBack();
    },
    selectDays(day) {
      this.formData.days = day;
      this.errors.days = "";
    },
    setBudget(value) {
      this.formData.budget = value.toString();
      this.errors.budget = "";
    },
    toggleInterest(value) {
      const index = this.selectedInterests.indexOf(value);
      const totalSelected = this.selectedInterests.length + (this.formData.customInterest ? 1 : 0);
      if (index > -1) {
        this.selectedInterests.splice(index, 1);
      } else {
        if (totalSelected < 3) {
          this.selectedInterests.push(value);
        } else {
          common_vendor.index.showToast({
            title: "最多选择3个兴趣",
            icon: "none"
          });
        }
      }
      this.errors.interests = "";
    },
    validateField(field) {
      this.errors[field] = "";
      switch (field) {
        case "destination":
          if (!this.formData.destination.trim()) {
            this.errors.destination = "请输入目的地";
          }
          break;
        case "budget":
          if (!this.formData.budget) {
            this.errors.budget = "请输入预算金额";
          } else if (isNaN(this.formData.budget) || parseInt(this.formData.budget) <= 0) {
            this.errors.budget = "请输入有效的金额";
          }
          break;
      }
    },
    validateForm() {
      let isValid = true;
      if (!this.formData.destination.trim()) {
        this.errors.destination = "请输入目的地";
        isValid = false;
      }
      if (!this.formData.days) {
        this.errors.days = "请选择出行天数";
        isValid = false;
      }
      if (!this.formData.budget) {
        this.errors.budget = "请输入预算金额";
        isValid = false;
      } else if (isNaN(this.formData.budget) || parseInt(this.formData.budget) <= 0) {
        this.errors.budget = "请输入有效的金额";
        isValid = false;
      }
      if (this.selectedInterests.length === 0) {
        this.errors.interests = "请至少选择1个出行兴趣";
        isValid = false;
      }
      return isValid;
    },
    generatePlan() {
      if (!this.validateForm()) {
        common_vendor.index.showToast({
          title: "请完善表单信息",
          icon: "none"
        });
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        const generatedTrip = {
          title: `${this.formData.destination}${this.formData.days}日文化游`,
          days: this.formData.days >= 8 ? 7 : this.formData.days,
          budgetPerPerson: parseInt(this.formData.budget),
          totalBudget: parseInt(this.formData.budget) * 3,
          // 假设3人
          daysList: this.generateMockItinerary()
        };
        common_vendor.index.setStorageSync("generatedTripData", generatedTrip);
        common_vendor.index.navigateTo({
          url: "/pages/ai-trip/result/index"
        });
      }, 1500);
    },
    generateMockItinerary() {
      const days = this.formData.days >= 8 ? 7 : this.formData.days;
      const itinerary = [];
      const routes = ["兵马俑 → 华清宫", "古城墙 → 大雁塔", "陕西历史博物馆 → 小雁塔", "钟鼓楼 → 回民街", "华山一日游", "大明宫 → 曲江池", "永兴坊 → 碑林"];
      for (let i = 0; i < days && i < routes.length; i++) {
        itinerary.push({
          route: routes[i],
          spots: [
            {
              name: `景点${i * 2 + 1}`,
              duration: "2小时",
              desc: "精彩景点，值得一游",
              tags: ["必打卡"]
            },
            {
              name: `景点${i * 2 + 2}`,
              duration: "1.5小时",
              desc: "特色体验",
              tags: ["推荐"]
            }
          ]
        });
      }
      return itinerary;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    b: common_vendor.o(($event) => $options.validateField("destination")),
    c: $data.formData.destination,
    d: common_vendor.o(($event) => $data.formData.destination = $event.detail.value),
    e: $data.errors.destination
  }, $data.errors.destination ? {
    f: common_vendor.t($data.errors.destination)
  } : {}, {
    g: $data.errors.destination ? 1 : "",
    h: common_vendor.f(8, (day, k0, i0) => {
      return {
        a: common_vendor.t(day >= 8 ? "7+" : day),
        b: day,
        c: $data.formData.days === day ? 1 : "",
        d: common_vendor.o(($event) => $options.selectDays(day), day)
      };
    }),
    i: $data.errors.days
  }, $data.errors.days ? {
    j: common_vendor.t($data.errors.days)
  } : {}, {
    k: $data.errors.days ? 1 : "",
    l: common_vendor.o(($event) => $options.validateField("budget")),
    m: $data.formData.budget,
    n: common_vendor.o(($event) => $data.formData.budget = $event.detail.value),
    o: common_vendor.f($data.budgetHints, (hint, index, i0) => {
      return {
        a: common_vendor.t(hint.label),
        b: index,
        c: common_vendor.o(($event) => $options.setBudget(hint.value), index)
      };
    }),
    p: $data.errors.budget
  }, $data.errors.budget ? {
    q: common_vendor.t($data.errors.budget)
  } : {}, {
    r: $data.errors.budget ? 1 : "",
    s: common_vendor.f($data.interests, (interest, index, i0) => {
      return {
        a: common_vendor.t(interest.icon),
        b: common_vendor.t(interest.label),
        c: index,
        d: $data.selectedInterests.includes(interest.value) ? 1 : "",
        e: !$data.selectedInterests.includes(interest.value) && $data.selectedInterests.length >= 3 ? 1 : "",
        f: common_vendor.o(($event) => $options.toggleInterest(interest.value), index)
      };
    }),
    t: $data.selectedInterests.length >= 3,
    v: $data.formData.customInterest,
    w: common_vendor.o(($event) => $data.formData.customInterest = $event.detail.value),
    x: $data.selectedInterests.length >= 3
  }, $data.selectedInterests.length >= 3 ? {} : {}, {
    y: $data.selectedInterests.length > 0 || $data.formData.customInterest
  }, $data.selectedInterests.length > 0 || $data.formData.customInterest ? {
    z: common_vendor.t($data.selectedInterests.length + ($data.formData.customInterest ? 1 : 0))
  } : {}, {
    A: $data.errors.interests
  }, $data.errors.interests ? {
    B: common_vendor.t($data.errors.interests)
  } : {}, {
    C: $data.errors.interests ? 1 : "",
    D: $data.formData.mustVisit,
    E: common_vendor.o(($event) => $data.formData.mustVisit = $event.detail.value),
    F: !$data.isLoading
  }, !$data.isLoading ? {} : {}, {
    G: $data.isLoading ? 1 : "",
    H: !$options.isFormValid ? 1 : "",
    I: common_vendor.o((...args) => $options.generatePlan && $options.generatePlan(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c6cfe5e5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/ai-trip/index/index.js.map
