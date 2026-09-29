export type RiskTone = "high" | "mid" | "low";
export type RiskStep = "cockpit" | "detail" | "map" | "impact" | "simulate" | "action" | "copper";

export const RISK_EVENTS = [
  {
    id: "quake",
    title: "日本某半导体产业区地震",
    type: "突发事件",
    link: "3家供应商",
    level: "高" as const,
    tone: "high" as RiskTone,
  },
  {
    id: "tariff",
    title: "某国新关税政策",
    type: "政策",
    link: "12家供应商",
    level: "高" as const,
    tone: "high" as RiskTone,
  },
  {
    id: "flood",
    title: "某电子制造基地洪水",
    type: "自然灾害",
    link: "2家供应商",
    level: "中" as const,
    tone: "mid" as RiskTone,
  },
  {
    id: "copper",
    title: "铜价持续上涨",
    type: "行情",
    link: "18种物料",
    level: "中" as const,
    tone: "mid" as RiskTone,
  },
  {
    id: "port",
    title: "某主要港口拥堵",
    type: "物流",
    link: "7笔采购订单",
    level: "中" as const,
    tone: "mid" as RiskTone,
  },
];

export const RISK_QUAKE = {
  title: "日本某半导体产业区发生地震",
  time: "2026-09-29 06:42 JST",
  place: "日本关东半导体产业区",
  area: "震中半径 40km 工业园区",
  companies: "IC 制造工厂 A / 上游晶圆厂 C",
  notice: "工厂公告：部分产线暂停，恢复时间待评估",
  sources: "共同社 / 工厂官网公告 / 海关物流简报",
  status: "持续监测中",
  facts: [
    "某工厂位于地震影响区域。",
    "工厂公告显示部分生产暂停。",
    "该区域集中多家 IC 代工与封测企业。",
  ],
  inferences: [
    "该工厂可能影响企业供应商 A、B。",
    "供应商 A 为企业 IC-8842 的主要供应来源。",
    "当前库存 24 天，可能无法覆盖完整恢复周期（45 天）。",
  ],
  chain: [
    { id: "e", label: "地震事件", sub: "关东产业区", detail: "已确认事实 · 新闻与公告" },
    { id: "r", label: "日本某地区", sub: "受影响区域", detail: "震中半径 40km" },
    { id: "f", label: "IC 制造工厂 A", sub: "部分产线暂停", detail: "产能待恢复，周期未知" },
    { id: "s", label: "供应商 B", sub: "主供 IC-8842", detail: "年度采购额 ¥1,860万" },
    { id: "m", label: "IC-8842", sub: "14 种受影响物料之一", detail: "交期 45 天 / 替代认证 90 天" },
    { id: "p", label: "产品 P1 / P2", sub: "共 5 款产品", detail: "客户订单交付窗口 30～60 天" },
  ],
  impacts: [
    { label: "受影响供应商", value: "3家" },
    { label: "受影响工厂", value: "2家" },
    { label: "受影响物料", value: "14种" },
    { label: "受影响产品", value: "5款" },
    { label: "未来60天采购金额", value: "¥2,800万" },
    { label: "当前库存覆盖", value: "24天" },
    { label: "正常供应周期", value: "45天" },
    { label: "替代供应周期", value: "60～90天" },
    { label: "潜在断供风险", value: "高", warn: true },
  ],
  sims: [
    { name: "不行动", cost: "低", stock: "低", shortage: "高", delivery: "高", pick: false },
    { name: "增加现有供应商采购", cost: "中", stock: "中", shortage: "中", delivery: "中", pick: false },
    { name: "启动第二供应商", cost: "中高", stock: "中", shortage: "低", delivery: "低", pick: true },
  ],
  actions: [
    { who: "供应商 A", text: "确认工厂恢复时间、当前库存、在途数量、未来 30 天产能。" },
    { who: "供应商 B", text: "启动替代采购询价，锁定可交付窗口。" },
    { who: "研发", text: "确认替代 IC 认证周期，评估是否可并行导入。" },
    { who: "计划部门", text: "重新评估受影响产品未来 60 天排产。" },
    { who: "采购经理", text: "重新评估未来 30 天安全库存，并形成会议议题。" },
  ],
};

export const RISK_COPPER = {
  level: "中高",
  conclusion: "未来 30～60 天铜价上涨风险偏高。",
  confidence: "中",
  uncertainty: "美元指数、国内需求变化。",
  factors: [
    { name: "铜价", now: "20日持续上涨", dir: "↑" },
    { name: "全球库存", now: "持续下降", dir: "↑" },
    { name: "供应端", now: "存在扰动", dir: "↑" },
    { name: "国内需求", now: "稳定", dir: "→" },
    { name: "美元", now: "偏强", dir: "↓" },
    { name: "专家策略", now: "偏多", dir: "↑" },
    { name: "AI模型", now: "偏多", dir: "↑" },
  ],
  need: "1,000吨",
  stock: "300吨",
  strategies: [
    { name: "不行动", qty: "700吨", cash: "低", price: "高", shortage: "中", pick: false },
    { name: "提前采购20%", qty: "840吨", cash: "中", price: "中", shortage: "低", pick: true },
    { name: "提前采购40%", qty: "980吨", cash: "高", price: "低", shortage: "低", pick: false },
  ],
  advice: "在库存安全边界允许的情况下，可考虑提前锁定未来需求的 20%～30%。",
  backtest: [
    { date: "7月1日", judge: "上涨风险高", actual: "实际上涨", ok: true },
    { date: "7月15日", judge: "供应风险高", actual: "工厂停产", ok: true },
    { date: "8月1日", judge: "风险下降", actual: "供应恢复", ok: true },
    { date: "8月15日", judge: "下跌风险高", actual: "实际上涨", ok: false },
  ],
};

export const RISK_TARIFF = {
  title: "某国突然提高特定产品进口关税",
  chain: "关税政策 → HS Code → 产品 → 供应商国家 → 企业采购订单 → 成本变化",
  impact: "当前企业有 12 家供应商、37 种物料受到潜在影响，预计年度采购成本增加约 ¥620 万。",
  options: ["国内替代供应商", "第三国供应商", "贸易路径调整", "提前进口", "重新议价", "成本转嫁"],
};

export const RISK_EXPERT = {
  name: "专家策略 V1.2",
  rules: [
    "铜价 20 日涨幅 > 5%",
    "库存 < 30 天",
    "未来 60 天采购需求较高",
    "供应端风险较高",
  ],
  result: "采购风险 = 高 → 建议提前锁定部分需求",
  hist: [
    { label: "历史触发次数", value: "23" },
    { label: "判断正确", value: "18" },
    { label: "判断错误", value: "5" },
    { label: "平均成本变化", value: "-2.4%" },
    { label: "库存资金变化", value: "+6.1%" },
  ],
  compare: [
    { name: "专家策略", hit: "78%", cost: "-2.4%", stock: "+6.1%", note: "规则可解释，偏稳健" },
    { name: "AI 模型", hit: "74%", cost: "-1.8%", stock: "+4.2%", note: "覆盖更多非结构化信号" },
    { name: "AI + 专家", hit: "83%", cost: "-3.1%", stock: "+5.0%", note: "演示推荐组合" },
    { name: "基准采购策略", hit: "—", cost: "0%", stock: "0%", note: "按原计划采购，不作对冲" },
  ],
};

export const RISK_LIGHT: Record<string, { title: string; facts: string[]; inferences: string[]; impact: string }> = {
  flood: {
    title: "某电子制造基地洪水",
    facts: [
      "受灾地区存在企业供应商工厂。",
      "当地交通与仓储临时中断。",
    ],
    inferences: [
      "洪水 → 工厂停产 → 某物料供应中断 → 企业库存不足 → 生产风险。",
      "2 家供应商、若干线束与结构件可能受影响。",
    ],
    impact: "演示重点请走场景 A（地震）完整穿透；本事件用于展示自然灾害类风险入口。",
  },
  port: {
    title: "某主要港口拥堵",
    facts: [
      "港口作业积压，平均滞港时间上升。",
      "7 笔在途采购订单涉及该港口。",
    ],
    inferences: [
      "物流延误可能挤压安全库存窗口。",
      "可评估改港、空运加急或调整排产。",
    ],
    impact: "演示重点请走场景 A/C；本事件用于展示物流类风险入口。",
  },
};

export const RISK_NODE_DETAIL: Record<string, { company: string; addr: string; capacity: string; cycle: string; volume: string; history: string; alt: string; stock: string }> = {
  e: {
    company: "事件源 · 公共新闻",
    addr: "日本关东半导体产业区",
    capacity: "—",
    cycle: "实时监测",
    volume: "—",
    history: "已确认事实",
    alt: "—",
    stock: "—",
  },
  r: {
    company: "受影响工业园区",
    addr: "震中半径 40km",
    capacity: "区域内多家 IC 厂",
    cycle: "恢复评估中",
    volume: "—",
    history: "历史灾害 2 次 / 5 年",
    alt: "可切换第三国供应路径",
    stock: "—",
  },
  f: {
    company: "IC 制造工厂 A",
    addr: "日本 · 关东产业区",
    capacity: "部分产线暂停",
    cycle: "恢复周期待公告",
    volume: "企业间接依赖高",
    history: "既往准时交付 96%",
    alt: "同集团工厂 C（产能紧张）",
    stock: "工厂端 WIP 不明",
  },
  s: {
    company: "供应商 B",
    addr: "日本 / 国内办事处上海",
    capacity: "月供 IC-8842 约 12 万颗",
    cycle: "正常 45 天",
    volume: "年度采购额 ¥1,860万",
    history: "准时率 94% · 等级 A-",
    alt: "第二供应商 D（待准入）",
    stock: "供应商可用库存约 8 天",
  },
  m: {
    company: "物料 IC-8842",
    addr: "电子元器件 · 主控 IC",
    capacity: "单一来源风险高",
    cycle: "交期 45 天 / 替代认证 90 天",
    volume: "未来 60 天需求覆盖 5 款产品",
    history: "近 12 月无重大质量事故",
    alt: "替代料 IC-8842B（认证中）",
    stock: "企业库存 24 天 · 在途 8 天",
  },
  p: {
    company: "产品 P1 / P2 等 5 款",
    addr: "整机 / 模组",
    capacity: "排产依赖 IC-8842",
    cycle: "客户交付窗口 30～60 天",
    volume: "关联客户订单 18 笔",
    history: "历史断料 1 次（2025）",
    alt: "可降配版本评估中",
    stock: "成品安全库存 12 天",
  },
};

export const RISK_AGENTS = [
  { name: "风险感知", task: "监测全球新闻、政策、行情、灾害、物流" },
  { name: "供应链映射", task: "找出事件与企业供应链的关系" },
  { name: "影响评估", task: "计算对物料、库存、订单的影响" },
  { name: "情景模拟", task: "比较不同采购策略后果" },
  { name: "决策 / 行动", task: "生成建议、任务、询价与报告" },
];

export const RISK_STEPS: { key: RiskStep; label: string }[] = [
  { key: "cockpit", label: "驾驶舱" },
  { key: "detail", label: "事件详情" },
  { key: "map", label: "供应链穿透" },
  { key: "impact", label: "影响分析" },
  { key: "simulate", label: "策略模拟" },
  { key: "action", label: "行动中心" },
];
