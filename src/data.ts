export type NavKey = "助手" | "需求" | "品类" | "供应商" | "采购" | "风险" | "看板";
export type ViewKey =
  | "home"
  | "chat"
  | "demand"
  | "category"
  | "srm"
  | "purchase"
  | "board"
  | "case"
  | "risk";
export type SrmTab = "寻源任务" | "供应商认证" | "绩效评价" | "供应商组合";

export const DEFAULT_PROMPT =
  "我们研发二部下周要做底盘防水测试，急需买几台测试电机，预算没卡死。";

export const HISTORY = [
  {
    id: "h0",
    title: "日本IC工厂地震 · 断供风险",
    meta: "风险情报",
    time: "今天 09:18",
    view: "risk" as ViewKey,
  },
  {
    id: "h0",
    title: "日本 IC 工厂地震风险穿透",
    meta: "风险情报",
    time: "今天 09:18",
    view: "risk" as ViewKey,
  },
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
  { id: "11", title: "风险情报决策", desc: "全球风险穿透到采购行动" },
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

/** 五维权重合计 100%。综合分 = 交期×25% + 质量×25% + 成本×15% + 研发×20% + 售后×15% */
export const PERF_WEIGHTS = { ontime: 0.25, quality: 0.25, cost: 0.15, rd: 0.2, afterSales: 0.15 };

export const PERF_ROWS = [
  {
    name: "华东工业备件",
    category: "工控电机",
    ontimeRaw: "96%",
    qualityRaw: "98%",
    ontime: 96,
    quality: 98,
    cost: 94,
    rd: 95,
    afterSales: 93,
    total: 96,
    grade: "A",
    strategy: "优先使用",
    note: "研发物料主供，五维均按本周期实绩计分。",
  },
  {
    name: "一站式办公仓",
    category: "办公用品",
    ontimeRaw: "94%",
    qualityRaw: "96%",
    ontime: 94,
    quality: 96,
    cost: 91,
    rd: 78,
    afterSales: 90,
    total: 90,
    grade: "A-",
    strategy: "协议续签",
    note: "办公品类本周期无在研项目，研发分取品类协作基线，不按电机项目同权放大。",
  },
  {
    name: "长三角工控",
    category: "工控电机",
    ontimeRaw: "89%",
    qualityRaw: "91%",
    ontime: 89,
    quality: 91,
    cost: 88,
    rd: 82,
    afterSales: 80,
    total: 87,
    grade: "B",
    strategy: "限制紧急单",
    note: "交期分 89 低于 90 阈值，综合分 87 落在 B 档，紧急单降权。",
  },
];

export const PERF_SCORE_SOURCES = [
  {
    key: "ontime",
    title: "交期打分",
    raw: "准时率",
    weight: "权重 25%",
    ai: true,
    caps: ["NLP", "OCR"],
    desc: "准时率线性映射为 0–100 分。交期分低于 90 触发紧急单限制。",
    map: "交期分 = 准时率 × 100 − 改期 / 在途异常扣分",
    traditional: "传统：仅看 PO 承诺日与签收日是否逾期，靠人工催货记录。",
    aiDiff: "AI：NLP 解析催货邮件与改期沟通，OCR 识别物流单据；自动量化响应速度与在途异常。",
    metrics: ["平均回复时长", "改期次数", "在途延误识别率"],
    sources: [
      { system: "采购订单 / SRM", field: "承诺交期、PO 要求到货日" },
      { system: "WMS 到货签收", field: "实际签收时间、逾期天数" },
      { system: "TMS 物流单据 OCR", field: "发运单号、节点时间、异常章戳" },
      { system: "催货邮件 NLP", field: "平均回复时长、改期承诺兑现率" },
    ],
  },
  {
    key: "quality",
    title: "质量打分",
    raw: "质量合格率",
    weight: "权重 25%",
    ai: true,
    caps: ["OCR", "图像识别"],
    desc: "质量合格率线性映射为 0–100 分，质检异常与退换货会下修分数。",
    map: "质量分 = 合格率 × 100 − 图像异常扣分 − 退换货扣分",
    traditional: "传统：依赖 IQC 录入合格率与退换货台账，照片靠人工翻看。",
    aiDiff: "AI：OCR / 图像识别对接质检照片与物流单据，自动发现外观缺陷、缺件与单据不一致。",
    metrics: ["图像异常检出数", "单据一致性", "退换货闭环率"],
    sources: [
      { system: "IQC 来料检验", field: "抽检合格批次 / 送检批次" },
      { system: "质检照片 图像识别", field: "外观缺陷、缺件、铭牌参数" },
      { system: "物流 / 验收单据 OCR", field: "品名数量与 PO 一致性" },
      { system: "退换货单", field: "退货率、让步接收次数" },
    ],
  },
  {
    key: "cost",
    title: "成本打分",
    raw: "价格偏离",
    weight: "权重 15%",
    ai: true,
    caps: ["NLP", "外部数据"],
    desc: "对照协议价与同期询价中位价，并结合行业波动修正。",
    map: "成本分 = 100 − 价格偏离 − 账期不配合 − 行业波动惩罚",
    traditional: "传统：人工比价与协议价核对，很少纳入外部市场波动。",
    aiDiff: "AI：NLP 抽取合同价格条款与账期；对接行业公开行情，把供应链价格韧性纳入评分。",
    metrics: ["协议价偏离度", "账期配合度", "行业波动敏感度"],
    sources: [
      { system: "合同文本 NLP", field: "单价、阶梯价、账期、违约金条款" },
      { system: "询比价单 / PO", field: "报价、成交价、历史协议价" },
      { system: "行业公开行情", field: "品类价格指数、波动区间" },
    ],
  },
  {
    key: "rd",
    title: "研发项目打分",
    raw: "项目协同",
    weight: "权重 20%",
    ai: true,
    caps: ["NLP", "OCR"],
    desc: "覆盖试制、联调、验收到项目复盘。无在研项目时取品类协作基线。",
    map: "研发分 = 里程碑、样品符合率、问题闭环、沟通配合度加权",
    traditional: "传统：依赖项目经理主观评价与零散会议纪要。",
    aiDiff: "AI：NLP 解析邮件沟通与巡检报告，将沟通配合度、问题解决能力转为平均回复时长与闭环率。",
    metrics: ["沟通配合度", "问题解决能力", "巡检问题闭环率"],
    sources: [
      { system: "PLM / 项目管理", field: "里程碑按时完成率、变更次数" },
      { system: "邮件沟通 NLP", field: "平均回复时长、技术答疑配合度" },
      { system: "巡检报告 NLP", field: "问题条目、整改闭环率" },
      { system: "样品 / 资质证书 OCR", field: "参数符合率、证书有效期" },
    ],
  },
  {
    key: "afterSales",
    title: "售后打分",
    raw: "服务履约",
    weight: "权重 15%",
    ai: true,
    caps: ["NLP"],
    desc: "覆盖安装调试、保修响应、退换货到回访。",
    map: "售后分 = 服务响应速度 + 问题解决能力 + 沟通配合度",
    traditional: "传统：靠工单完成数与人工满意度问卷，难量化沟通过程。",
    aiDiff: "AI：NLP 自动解析工单投诉与客服记录，将服务响应速度、问题解决能力、沟通配合度转为平均回复时长、投诉闭环率。",
    metrics: ["平均回复时长", "投诉闭环率", "一次解决率"],
    sources: [
      { system: "工单投诉 NLP", field: "平均回复时长、投诉闭环率" },
      { system: "客服记录 NLP", field: "沟通配合度、情绪与升级次数" },
      { system: "退换货 / 索赔单", field: "闭环时长、一次解决率" },
      { system: "CRM 回访", field: "现场支持满意度、复购意愿" },
    ],
  },
  {
    key: "compliance",
    title: "合规与韧性（并入等级）",
    raw: "外部风险",
    weight: "等级修正",
    ai: true,
    caps: ["OCR", "外部数据"],
    desc: "不单独占五维权重，发现高风险时下调等级或限制推荐。",
    map: "等级修正 = 资质有效性 − 涉诉 / 处罚 / 舆情风险",
    traditional: "传统：年度人工尽调，难以及时感知司法、处罚与舆情变化。",
    aiDiff: "AI：OCR 识别资质证书过期；对接司法涉诉、行政处罚、环保舆情与行业波动，将合规风险与供应链韧性纳入评价。",
    metrics: ["资质过期告警", "涉诉 / 处罚命中", "舆情风险等级"],
    sources: [
      { system: "资质证书 OCR", field: "营业执照、ISO、授权有效期" },
      { system: "司法 / 行政处罚公开数据", field: "涉诉、失信、处罚记录" },
      { system: "环保与行业舆情", field: "负面舆情、供给中断风险" },
    ],
  },
];

export const PERF_AI_CALLS = [
  {
    id: "nlp",
    title: "NLP 文本解析",
    text: "解析合同、邮件、工单投诉、巡检报告、客服记录，输出平均回复时长、投诉闭环率、沟通配合度。",
  },
  {
    id: "ocr",
    title: "OCR / 图像识别",
    text: "识别质检照片、物流单据、资质证书，自动标记质量异常、单据不一致与资质过期。",
  },
  {
    id: "external",
    title: "外部风险接入",
    text: "对接司法涉诉、行政处罚、环保舆情与行业波动，修正成本分与综合等级。",
  },
];

export const PERF_CHAIN = [
  { step: "01", title: "交期", metric: "签收 + 物流 OCR + 邮件 NLP", tip: "传统只看逾期；AI 量化响应与在途异常", ai: true },
  { step: "02", title: "质量", metric: "合格率 + 质检图像识别", tip: "传统靠人工看片；AI 自动检出异常", ai: true },
  { step: "03", title: "成本", metric: "合同 NLP + 行业行情", tip: "传统人工比价；AI 纳入波动韧性", ai: true },
  { step: "04", title: "研发项目", metric: "邮件 / 巡检 NLP", tip: "传统主观评价；AI 量化配合度", ai: true },
  { step: "05", title: "售后", metric: "工单 / 客服 NLP", tip: "传统问卷打分；AI 量化闭环率", ai: true },
  { step: "06", title: "合规韧性", metric: "证书 OCR + 外部公开数据", tip: "传统年度尽调；AI 持续风险修正", ai: true },
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
  "11": {
    title: "风险情报 Agent",
    desc: "感知全球风险，映射企业供应链，并生成可执行采购决策。",
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
