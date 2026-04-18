# TabBar 图标说明

## 图标规范

### 尺寸
- 标准尺寸：81px × 81px
- 实际显示区域：建议图标内容在 60px × 60px 范围内

### 颜色规范
- 未选中状态（color）：#95A5A6（灰绿色）
- 选中状态（selectedColor）：#5FB878（主色浅青绿）

### 图标列表

1. **home.png / home-active.png** - 发现页图标
   - 建议使用：指南针或探索相关的线性图标

2. **trip.png / trip-active.png** - 行程页图标
   - 建议使用：日历或行程相关的线性图标

3. **service.png / service-active.png** - 服务页图标
   - 建议使用：客服或帮助相关的线性图标

4. **my.png / my-active.png** - 我的页图标
   - 建议使用：个人中心或用户相关的线性图标

### 设计建议
- 使用线性图标（outline style），符合轻国风调性
- 线条粗细统一，建议 3-4px
- 圆角处理，与整体设计语言一致
- 保持简洁，避免过多细节

## 临时解决方案

由于无法直接生成PNG文件，请使用以下方式获取图标：

### 方式1：使用在线图标库
推荐使用 [阿里巴巴矢量图标库](https://www.iconfont.cn/) 搜索以下关键词：
- 首页/发现：home、explore、compass
- 行程：calendar、schedule、trip
- 服务：service、help、support
- 我的：user、profile、my

### 方式2：使用设计工具
使用 Figma、Sketch 或 Photoshop 创建：
1. 画布尺寸：81×81px
2. 绘制线性图标
3. 导出为PNG格式
4. 分别制作未选中（灰色）和选中（绿色）两个版本

### 方式3：使用系统默认
如果不提供图标，小程序会只显示文字，不影响功能使用。
