【随行文旅 uni-app 小程序项目铁律 - 违反即终止执行】

### 一、项目结构与路由锁死（绝对禁止修改）
1.  【文件权限红线】
    - 禁止修改：pages.json、manifest.json、App.vue、main.js、package.json 等根配置文件
    - 禁止移动、重命名、删除任何现有页面、文件夹、组件
    - 禁止在 pages/ 根目录创建任何 .vue 页面文件
    - 页面路径严格遵循固定结构，100% 匹配 pages.json 配置

2.  【标准页面结构（永久不变）】
    pages/
    ├── login/index.vue          # 登录页
    ├── index/index.vue          # 首页/发现页（tabBar）
    ├── ai-trip/
    │   ├── index.vue           # AI行程页
    │   └── result.vue          # AI行程结果页
    ├── trip/
    │   ├── index.vue           # 行程页（tabBar）
    │   └── detail.vue          # 行程详情页
    ├── navigation/index.vue    # 导航页
    ├── service/
    │   ├── index.vue           # 服务页（tabBar）
    │   └── qa-ask/index.vue    # 提问页
    ├── my/index.vue            # 我的页（tabBar）
    ├── checkin/
    │   ├── index.vue           # 打卡页
    │   └── detail.vue          # 打卡详情页
    └── daren-trip/index.vue    # 达人严选页

3.  【tabBar 固定路径（禁止修改）】
    - 发现：pages/index/index
    - 行程：pages/trip/index
    - 服务：pages/service/index
    - 我的：pages/my/index

### 二、代码开发规范（必须100%遵守）
1.  【技术栈统一】
    - 框架：uni-app + Vue3 + <script setup> 组合式API
    - 样式：scss + rpx（设计稿750px，1px=1rpx），所有样式加 scoped
    - 跳转：严格使用 uni.navigateTo / uni.switchTab，路径必须复制 pages.json，禁止手写猜测

2.  【HTML → uni-app 强制转换规则】
    - <div> → <view>
    - <span>/<p> → <text>（所有文字必须用 text 包裹）
    - <img> → <image mode="widthFix">
    - <a> → <navigator> 或 @click 跳转
    - onclick → @click
    - 禁止原生 DOM 操作（如 document.querySelector），所有数据用 Vue 响应式

3.  【修改原则】
    - 增量修改：只修改目标代码，禁止全文件覆盖、自动重构、自动优化
    - 新增优先：加功能优先新建组件/文件，不破坏原有代码
    - 先确认后执行：任何修改前，必须列出「修改的文件、行号、内容」，经确认后再执行
    - 禁止越权：只允许修改 pages/ 下的业务页面、components/ 下的公共组件，禁止修改配置文件

### 三、错误处理规范
1.  出现编译/运行报错：只修复报错行，禁止重写整个文件、修改项目结构
2.  路径报错：优先检查 pages.json 配置，禁止修改文件结构适配错误路径
3.  禁止为了修复报错，擅自修改 pages.json、移动文件、重命名页面

### 四、工作模式要求
1.  每次任务必须先明确：修改的文件、功能范围、影响范围
2.  输出代码必须带注释、结构分层、可直接运行
3.  禁止自动新增页面、路由、依赖，除非明确要求
4.  严格遵循「清新自然的文旅轻国风」视觉风格，统一配色、间距、字体