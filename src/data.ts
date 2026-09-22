export type NavKey = "助手" | "品类" | "需求" | "供应商" | "采购" | "看板";
export type ViewKey =
  | "home"
  | "chat"
  | "demand"
  | "category"
  | "srm"
  | "purchase"
  | "board"
  | "case";
export type SrmTab = "寻源任务" | "供应商认证" | "绩效评价" | "供应商组合";

export const DEFAULT_PROMPT =
  "我们研发二部下周要做底盘防水测试，急需买几台测试电机，预算没卡死。";

export const HISTORY = [
  {
    id: "h1",
    title: "我们办公室需要采购一批…",
    meta: "需寻源 · 待发起",
    time: "今天 10:14",
    view: "chat" as ViewKey,
  },
  {
    id: "h2",
    title: "我们办公室需要采购一批…",
    meta: "对话中",
    time: "今天 10:11",
    view: "chat" as ViewKey,
  },
  {
    id: "h3",
    title: "帮我采购一批办公室用的…",
    meta: "对话中",
    time: "今天 10:10",
    view: "chat" as ViewKey,
  },
  {
    id: "h4",
    title: "帮我整理一批物料清单，…",
    meta: "对话中",
    time: "昨天 15:18",
    view: "chat" as ViewKey,
  },
  {
    id: "h5",
    title: "研发测试电机采购",
    meta: "供应商验证",
    time: "04-30 11:08",
    view: "case" as ViewKey,
  },
  {
    id: "h6",
    title: "采购办公用品",
    meta: "",
    time: "04-29 16:16",
    view: "chat" as ViewKey,
  },
  {
    id: "h7",
    title: "采购中性笔",
    meta: "",
    time: "04-09 02:48",
    view: "chat" as ViewKey,
  },
  {
    id: "h8",
    title: "采购会议用品",
    meta: "",
    time: "04-09 01:03",
    view: "chat" as ViewKey,
  },
  {
    id: "h9",
    title: "采购会议现场搭建",
    meta: "",
    time: "04-08 23:10",
    view: "chat" as ViewKey,
  },
  {
    id: "h10",
    title: "购买一批会议礼品物资",
    meta: "",
    time: "04-08 21:37",
    view: "chat" as ViewKey,
  },
  {
    id: "h11",
    title: "采购研发测试物料",
    meta: "",
    time: "04-07 22:58",
    view: "chat" as ViewKey,
  },
];

export const DEMO_CARDS = [
  { id: "01", title: "AI 澄清需求", desc: "把口语需求补成需求单" },
  { id: "02", title: "预算费用管控", desc: "按品类选择预算口径" },
  { id: "03", title: "品类治理规则", desc: "分类后挂载标准模板" },
  { id: "04", title: "验收标准", desc: "先定义怎么才算合格" },
  { id: "05", title: "寻源选择策略", desc: "比价/谈判/招投标分流" },
  { id: "06", title: "供应商准入", desc: "Checklist 后才能入池" },
  { id: "07", title: "合同与 PO", desc: "标准字段传递给供应商" },
  { id: "08", title: "履约三单匹配", desc: "收货、发票、付款联动" },
  { id: "09", title: "绩效反馈", desc: "履约结果影响下次推荐" },
  { id: "10", title: "一键跑主案例", desc: "研发测试电机采购演示" },
];

export const PAPER_CHAT = [
  {
    role: "user" as const,
    text: "我们办公室需要采购一批办公用品",
  },
  {
    role: "ai" as const,
    text: "好的，收到您的采购需求。为了能帮您整理成清晰的需求单，我先确认一下：\n\n请问这次采购主要包括哪些办公用品？比如是打印纸、文具，还是办公家具？另外，大概需要多少数量呢？",
  },
  { role: "user" as const, text: "打印纸，40 包" },
  {
    role: "ai" as const,
    text: "好的，40包打印纸，记录下来了。请问这批打印纸的预算是多少？另外，对送货时间有具体要求吗？是这周就要，还是下周？",
  },
  { role: "user" as const, text: "未设置预算，尽快送货" },
  {
    role: "ai" as const,
    text: "明白了，尽快送达。请问这批打印纸是哪个部门使用的？比如行政部、销售部或其他部门？\n\n另外，对打印纸的品牌或克重（比如70g或80g）有什么偏好吗？",
  },
  { role: "user" as const, text: "没有，常规即可" },
  {
    role: "ai" as const,
    text: "好的。为了确保是您需要的“常规”标准，我确认一下：您所在的行业或公司通常使用的打印纸有特定的质量标准文件吗？比如入职文档里提到过，还是基本靠经验确认质量没问题就行？",
  },
  { role: "user" as const, text: "ok" },
  {
    role: "ai" as const,
    text: "好的，以下是本次采购需求的结构化需求单：\n\n**采购项目**：打印纸\n**采购数量**：40 包\n**交货要求**：尽快送货\n**质量标准**：常规（按行业通用标准）\n**供应商要求**：无特殊要求\n**预算口径**：未设置",
  },
  {
    role: "ai" as const,
    text: "这是您需要的描述，请确认是否准确。如果没问题，我就可以生成结构化采购需求单了。",
  },
];

export const DEMAND_ROWS = [
  {
    id: "PR-2026-0430-001",
    dept: "研发二部",
    item: "IP67 防水伺服电机",
    budget: "研发试制采购预算",
    status: "可寻源",
    tone: "ok" as const,
  },
  {
    id: "PR-2026-0429-002",
    dept: "市场部",
    item: "发布会搭建与摄影服务",
    budget: "市场费用预算",
    status: "待补 SOW",
    tone: "warn" as const,
  },
  {
    id: "PR-2026-0429-004",
    dept: "客服中心",
    item: "AI 质检系统一期",
    budget: "IT 项目预算",
    status: "安全评审中",
    tone: "warn" as const,
  },
  {
    id: "PR-2026-0428-011",
    dept: "行政部",
    item: "A4 复印纸 40 包",
    budget: "办公费用预算",
    status: "待预算确认",
    tone: "warn" as const,
  },
];

export const CATEGORY_ROWS = [
  {
    sku: "OFF-A4-70G",
    name: "A4 复印纸",
    spec: "70g / 5包/箱 / 常规办公",
    strategy: "资源池暂无匹配，需寻源",
    tone: "warn" as const,
  },
  {
    sku: "OFF-WB-10",
    name: "白板笔套装",
    spec: "低气味 / 黑蓝红 / 10支",
    strategy: "合格供应商优先",
    tone: "ok" as const,
  },
  {
    sku: "MOTOR-IP67-400W",
    name: "IP67 防水伺服电机",
    spec: "400W / 1.2Nm / IP67",
    strategy: "合格供应商库优选",
    tone: "ok" as const,
  },
];

export const SOURCE_ROWS = [
  {
    id: "SR-0038",
    desc: "IP67 伺服电机 400W",
    cat: "工控电机",
    method: "三方询价 + 价格比较",
    status: "寻源中",
    tone: "warn" as const,
  },
  {
    id: "SR-0037",
    desc: "高精度温度传感器",
    cat: "传感器",
    method: "新供应商引入",
    status: "待选定",
    tone: "warn" as const,
  },
  {
    id: "SR-0036",
    desc: "定制防水线束",
    cat: "线缆",
    method: "样品测试 + 谈判",
    status: "推进中",
    tone: "info" as const,
  },
  {
    id: "SR-0035",
    desc: "年度办公纸品协议",
    cat: "办公用品",
    method: "协议价刷新",
    status: "待比价",
    tone: "warn" as const,
  },
];

export const CERT_ROWS = [
  {
    name: "华南精密电机",
    contact: "待确认",
    cert: "ISO9001 待上传",
    result: "待准入",
    action: "发送资料清单",
    tone: "warn" as const,
  },
  {
    name: "深圳纸品直供",
    contact: "李经理 / 已回访",
    cert: "营业执照已收",
    result: "待风控",
    action: "进入风控",
    tone: "warn" as const,
  },
  {
    name: "速达机电贸易",
    contact: "无效",
    cert: "过期",
    result: "拒绝",
    action: "加入黑名单",
    tone: "bad" as const,
  },
];

export const PERF_ROWS = [
  {
    name: "华东工业备件",
    ontime: "96%",
    quality: "98%",
    grade: "A",
    strategy: "优先使用",
  },
  {
    name: "一站式办公仓",
    ontime: "94%",
    quality: "96%",
    grade: "A-",
    strategy: "协议续签",
  },
  {
    name: "长三角工控",
    ontime: "89%",
    quality: "91%",
    grade: "B",
    strategy: "限制紧急单",
  },
];

export const PORTFOLIO_ROWS = [
  {
    name: "工控电机年度组合",
    primary: "华东工业备件",
    backup: "长三角工控",
    status: "生效中",
    tone: "ok" as const,
  },
  {
    name: "办公用品协议组合",
    primary: "一站式办公仓",
    backup: "深圳纸品直供",
    status: "待准入补齐",
    tone: "warn" as const,
  },
  {
    name: "传感器专项组合",
    primary: "—",
    backup: "—",
    status: "寻源中",
    tone: "info" as const,
  },
];

export const PO_ROWS = [
  {
    id: "PO-202604301108",
    supplier: "华东工业备件",
    amount: "¥18,400",
    type: "标准 PO",
    status: "智能审核通过",
    tone: "warn" as const,
  },
  {
    id: "CT-202604291502",
    supplier: "深圳会务服务商A",
    amount: "¥148,000",
    type: "服务合同",
    status: "法务审核中",
    tone: "warn" as const,
  },
  {
    id: "PO-202604280911",
    supplier: "一站式办公仓",
    amount: "¥4,260",
    type: "协议价 PO",
    status: "已收货",
    tone: "ok" as const,
  },
];

export const PRODUCTS = [
  {
    id: "hd",
    sku: "MOTOR-IP67-400W",
    city: "上海",
    name: "华东工业备件",
    tags: "合格库 / 现货 8 台 / 5 天交付",
    desc: "已在合格供应商库，联系方式和资质均已验证，满足 IP67/400W/1.2Nm，库存 8 台，5 天可交付。",
    price: 3680,
    qty: 5,
    preferred: true,
    removed: false,
    score: 96,
    code: "SUP-HW-001",
    checks: [
      {
        ok: true,
        title: "联系方式",
        text: "刘经理 / 13800010001 / sales@hd-industry.example，2026-04-28 已回访确认。",
      },
      {
        ok: true,
        title: "资质能力",
        text: "ISO9001、原厂授权、增值税专票，最近验证 2026-04-20。",
      },
      {
        ok: true,
        title: "规格匹配",
        text: "400W / 1.2Nm / IP67，连续运行 2 小时均满足。",
      },
      {
        ok: true,
        title: "履约表现",
        text: "准时交付率 96%，质量 98%，最近采购 2026-03-18。",
      },
    ],
  },
  {
    id: "hn",
    sku: "MOTOR-IP67-400W-B",
    city: "深圳",
    name: "华南精密电机",
    tags: "新 sourcing / 待准入 / 7 天交付",
    desc: "参数和产能能满足，但属于新供应商，联系方式和资质仍需验证，不适合作为本次紧急采购首选。",
    price: 3580,
    qty: 5,
    preferred: false,
    removed: false,
    score: 72,
    code: "SRC-HW-003",
    checks: [
      {
        ok: false,
        title: "联系方式",
        text: "电话或邮箱待回访，未完成有效性确认。",
      },
      {
        ok: false,
        title: "资质能力",
        text: "声称 ISO9001 和开票，但证明未上传。",
      },
      {
        ok: true,
        title: "规格匹配",
        text: "400W / 1.2Nm / IP67，月产能 200 台。",
      },
      {
        ok: false,
        title: "履约表现",
        text: "无历史交期，需准入后再使用。",
      },
    ],
  },
  {
    id: "csj",
    sku: "MOTOR-STD-400W",
    city: "苏州",
    name: "长三角工控",
    tags: "合格库 / 无现货 / 9 天交付",
    desc: "价格更低，但不具备现货，交期 9 天，授权证明缺失，质保仅 6 个月。",
    price: 3450,
    qty: 5,
    preferred: false,
    removed: false,
    score: 64,
    code: "SUP-MRO-002",
    checks: [
      {
        ok: true,
        title: "联系方式",
        text: "陈经理 / 13800010002 / contact@csj-mro.example，2026-04-26 已验证。",
      },
      {
        ok: false,
        title: "资质能力",
        text: "ISO9001 有效，但原厂授权证明缺失。",
      },
      {
        ok: false,
        title: "规格匹配",
        text: "400W、1.2Nm 匹配，IP67 证明待补充。",
      },
      {
        ok: false,
        title: "履约表现",
        text: "准时交付率 89%，质保仅 6 个月，不满足本次约束。",
      },
    ],
  },
  {
    id: "sd",
    sku: "MOTOR-UNKNOWN",
    city: "杭州",
    name: "速达机电贸易",
    tags: "已剔除 / 高风险",
    desc: "联系方式验证失败，资质过期，无法证明供货能力。",
    price: 3300,
    qty: 5,
    preferred: false,
    removed: true,
    score: 18,
    code: "SUP-SD-004",
    checks: [
      {
        ok: false,
        title: "联系方式",
        text: "联系方式验证失败，无法完成有效性确认。",
      },
      {
        ok: false,
        title: "资质能力",
        text: "资质文件过期，无法进入资源池。",
      },
      {
        ok: false,
        title: "规格匹配",
        text: "无法核实 400W / IP67 原厂规格。",
      },
      {
        ok: false,
        title: "履约表现",
        text: "无可信履约记录，已按高风险剔除。",
      },
    ],
  },
];

export const LOADING_STAGES = [
  { pct: 18, text: "正在识别采购对象..." },
  { pct: 42, text: "正在抽取数量、交期、质量标准..." },
  { pct: 68, text: "正在召回合格供应商库..." },
  { pct: 100, text: "匹配完成，正在生成推荐结果..." },
];

export const TOASTS: Record<string, { title: string; desc: string }> = {
  "01": {
    title: "AI需求助手",
    desc: "口语需求已进入澄清对话，系统会补齐数量、交期和质量标准。",
  },
  "02": {
    title: "预算/费用管控",
    desc: "系统按品类自动选择预算口径，费用归口与预占规则已挂上。",
  },
  "03": {
    title: "品类治理规则",
    desc: "先做规则分类，再决定预算、验收、供应商和寻源策略。",
  },
  "04": {
    title: "验收标准",
    desc: "不同品类自动带出验收口径，避免“买到了但无法判定合格”。",
  },
  "05": {
    title: "寻源选择策略",
    desc: "AI 根据品类、金额、风险和资源池状态选择处理方式。",
  },
  "06": {
    title: "供应商准入",
    desc: "新供应商必须完成准入检查，合格后才能进入资源池。",
  },
  "07": {
    title: "合同与 PO",
    desc: "供应商正式接单前，合同条款和 PO 字段必须完整传递。",
  },
  "08": {
    title: "履约三单匹配",
    desc: "PO 发出后持续跟踪发货、验收、入库、发票和付款。",
  },
  "09": {
    title: "绩效反馈",
    desc: "履约结果会回写供应商等级，并影响下次推荐顺序。",
  },
  "10": {
    title: "AI匹配完成",
    desc: "已识别采购对象并召回合格供应商库，正在生成推荐结果。",
  },
  list: {
    title: "采购清单已生成",
    desc: "系统已把首选供应商、用途、交期、质量标准带入确认单。",
  },
  approve: {
    title: "智能按规则审批",
    desc: "订单已进入研发负责人 > 采购经理 > 财务预算审批链路。",
  },
  pool: {
    title: "已加入备选池",
    desc: "已选供应商已写入备选池，可继续比价或提交采购。",
  },
};

export const BOARD_COLUMNS = [
  {
    title: "需求澄清",
    cards: [
      { title: "A4 复印纸 40 包", tag: "待预算确认", dept: "行政部" },
      { title: "发布会搭建与摄影", tag: "待补 SOW", dept: "市场部" },
    ],
  },
  {
    title: "可寻源",
    cards: [
      { title: "IP67 防水伺服电机", tag: "可寻源", dept: "研发二部" },
    ],
  },
  {
    title: "寻源中",
    cards: [
      { title: "SR-0038 伺服电机 400W", tag: "三方询价", dept: "工控电机" },
      { title: "SR-0035 办公纸品协议", tag: "待比价", dept: "办公用品" },
    ],
  },
  {
    title: "准入认证",
    cards: [
      { title: "华南精密电机", tag: "待准入", dept: "工控电机" },
      { title: "AI 质检系统一期", tag: "安全评审中", dept: "客服中心" },
    ],
  },
  {
    title: "合同 / PO",
    cards: [
      { title: "PO-202604301108", tag: "智能审核通过", dept: "华东工业备件" },
      { title: "CT-202604291502", tag: "法务审核中", dept: "会务服务" },
    ],
  },
  {
    title: "履约验收",
    cards: [
      { title: "PO-202604280911", tag: "已收货", dept: "一站式办公仓" },
    ],
  },
];
