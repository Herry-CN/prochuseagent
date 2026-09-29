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
    title: "台湾花莲地震 · PHY 断供风险",
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

export type PerfGrade = "A" | "B" | "C" | "D";

/** 绩效分级规则：分数直接对应管理动作（示例规则，需写入制度后强制执行） */
export const PERF_GRADE_RULES: Record<
  PerfGrade,
  {
    label: string;
    range: string;
    share: string;
    treatment: string;
    improve: string;
    strategy: string;
    actions: { who: string; text: string }[];
  }
> = {
  A: {
    label: "卓越",
    range: "≥ 90 分",
    share: "份额上调；优先获取新业务提名（推荐比例建议 ≤ 20%）",
    treatment: "优先付款档；联合创新；可参与年度优秀供应商评选",
    improve: "保持优势，输出最佳实践",
    strategy: "份额上调 · 优先新业务",
    actions: [
      { who: "品类经理", text: "发起份额上调申请，并评估新项目优先提名资格。" },
      { who: "财务 / 应付", text: "将该供应商纳入优先付款档，更新付款策略。" },
      { who: "研发 / 采购", text: "启动联合创新议题，沉淀可复制最佳实践。" },
      { who: "SRM 运营", text: "加入年度优秀供应商候选池。" },
    ],
  },
  B: {
    label: "良好",
    range: "80 – 89 分",
    share: "份额维持不变",
    treatment: "正常合作条款与账期",
    improve: "针对弱项制定自改进计划",
    strategy: "份额维持 · 弱项自改进",
    actions: [
      { who: "品类经理", text: "确认本周期份额维持，不额外倾斜新业务。" },
      { who: "SQE / 采购", text: "针对最低分维度输出自改进计划与跟进节点。" },
      { who: "供应商接口人", text: "确认改进计划回执，纳入下月绩效复核。" },
      { who: "SRM 运营", text: "标记为供应主力池，持续监测交期与质量波动。" },
    ],
  },
  C: {
    label: "待改进",
    range: "70 – 79 分",
    share: "份额下调 10%～30%（示例规则）",
    treatment: "限制承接新业务、新项目",
    improve: "90 天限期整改；SQE 驻场 / 辅导",
    strategy: "份额下调 · 90 天整改",
    actions: [
      { who: "品类经理", text: "按规则下调份额 10%～30%，同步备份供应商承接转移量。" },
      { who: "寻源 / 组合", text: "限制新业务与新项目提名，更新供应商组合策略。" },
      { who: "SQE", text: "启动 90 天限期整改，制定驻场辅导计划与周报。" },
      { who: "采购经理", text: "约谈供应商管理层，签署整改承诺书。" },
    ],
  },
  D: {
    label: "不合格",
    range: "< 70 分",
    share: "冻结现有份额；启动替代资源",
    treatment: "冻结全部新业务；高层约谈",
    improve: "6 个月观察期；不达标退出",
    strategy: "冻结份额 · 启动替代",
    actions: [
      { who: "品类经理", text: "立即冻结现有份额增量，启动替代供应商导入。" },
      { who: "寻源任务", text: "创建 / 加速替代资源寻源与认证。" },
      { who: "高层 / 采购总监", text: "组织高层约谈，明确 6 个月观察与退出条件。" },
      { who: "合规 / SRM", text: "冻结新业务权限，观察期满未达标则启动退出流程。" },
    ],
  },
};

export function derivePerfGrade(total: number): PerfGrade {
  if (total >= 90) return "A";
  if (total >= 80) return "B";
  if (total >= 70) return "C";
  return "D";
}

export function gradeTone(grade: PerfGrade): "ok" | "info" | "warn" | "bad" {
  if (grade === "A") return "ok";
  if (grade === "B") return "info";
  if (grade === "C") return "warn";
  return "bad";
}

type PerfRowBase = {
  name: string;
  category: string;
  ontimeRaw: string;
  qualityRaw: string;
  ontime: number;
  quality: number;
  cost: number;
  rd: number;
  afterSales: number;
  total: number;
  note: string;
};

const PERF_ROW_BASE: PerfRowBase[] = [
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
    note: "A 档卓越供应商：五维均衡，可作为品类标杆输出最佳实践。",
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
    total: 91,
    note: "A 档：办公品类无在研项目，研发分取协作基线；综合分 ≥90 触发份额上调与优先付款。",
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
    note: "B 档供应主力：交期偏弱，份额维持，需针对交期制定自改进计划。",
  },
  {
    name: "华南连接器",
    category: "精密连接器",
    ontimeRaw: "86%",
    qualityRaw: "88%",
    ontime: 86,
    quality: 88,
    cost: 84,
    rd: 80,
    afterSales: 83,
    total: 85,
    note: "B 档：质量与交期尚可，成本议价一般，保持正常合作并跟进弱项改进。",
  },
  {
    name: "中原钣金配套",
    category: "结构件",
    ontimeRaw: "78%",
    qualityRaw: "80%",
    ontime: 78,
    quality: 80,
    cost: 76,
    rd: 72,
    afterSales: 74,
    total: 76,
    note: "C 档待改进：交期与研发协同不足，按规则下调份额并启动 90 天整改。",
  },
  {
    name: "沿海线束厂",
    category: "线束线缆",
    ontimeRaw: "74%",
    qualityRaw: "77%",
    ontime: 74,
    quality: 77,
    cost: 79,
    rd: 70,
    afterSales: 71,
    total: 74,
    note: "C 档：质量波动与售后响应偏慢，限制新项目并安排 SQE 辅导。",
  },
  {
    name: "北方铸造件",
    category: "金属铸件",
    ontimeRaw: "68%",
    qualityRaw: "70%",
    ontime: 68,
    quality: 70,
    cost: 72,
    rd: 65,
    afterSales: 66,
    total: 68,
    note: "D 档不合格：多项维度不达标，冻结份额并启动替代资源与高层约谈。",
  },
  {
    name: "西南包装耗材",
    category: "包装耗材",
    ontimeRaw: "62%",
    qualityRaw: "65%",
    ontime: 62,
    quality: 65,
    cost: 70,
    rd: 58,
    afterSales: 60,
    total: 63,
    note: "D 档：交期与质量严重偏离，冻结新业务，观察期不达标则退出。",
  },
];

export const PERF_ROWS = PERF_ROW_BASE.map((r) => {
  const grade = derivePerfGrade(r.total);
  const rule = PERF_GRADE_RULES[grade];
  return {
    ...r,
    grade,
    gradeLabel: rule.label,
    strategy: rule.strategy,
    share: rule.share,
    treatment: rule.treatment,
    improve: rule.improve,
    actions: rule.actions,
  };
});

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
      { id: "ontime-po", system: "采购订单 / SRM", field: "承诺交期、PO 要求到货日", cap: "系统" },
      { id: "ontime-wms", system: "WMS 到货签收", field: "实际签收时间、逾期天数", cap: "系统" },
      { id: "ontime-tms", system: "TMS 物流单据 OCR", field: "发运单号、节点时间、异常章戳", cap: "OCR" },
      { id: "ontime-mail", system: "催货邮件 NLP", field: "平均回复时长、改期承诺兑现率", cap: "NLP" },
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
      { id: "quality-iqc", system: "IQC 来料检验", field: "抽检合格批次 / 送检批次", cap: "系统" },
      { id: "quality-vision", system: "质检照片 图像识别", field: "外观缺陷、缺件、铭牌参数", cap: "图像识别" },
      { id: "quality-ocr", system: "物流 / 验收单据 OCR", field: "品名数量与 PO 一致性", cap: "OCR" },
      { id: "quality-return", system: "退换货单", field: "退货率、让步接收次数", cap: "系统" },
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
      { id: "cost-contract", system: "合同文本 NLP", field: "单价、阶梯价、账期、违约金条款", cap: "NLP" },
      { id: "cost-rfq", system: "询比价单 / PO", field: "报价、成交价、历史协议价", cap: "系统" },
      { id: "cost-market", system: "行业公开行情", field: "品类价格指数、波动区间", cap: "外部数据" },
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
      { id: "rd-plm", system: "PLM / 项目管理", field: "里程碑按时完成率、变更次数", cap: "系统" },
      { id: "rd-mail", system: "邮件沟通 NLP", field: "平均回复时长、技术答疑配合度", cap: "NLP" },
      { id: "rd-inspect", system: "巡检报告 NLP", field: "问题条目、整改闭环率", cap: "NLP" },
      { id: "rd-cert", system: "样品 / 资质证书 OCR", field: "参数符合率、证书有效期", cap: "OCR" },
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
      { id: "as-ticket", system: "工单投诉 NLP", field: "平均回复时长、投诉闭环率", cap: "NLP" },
      { id: "as-cs", system: "客服记录 NLP", field: "沟通配合度、情绪与升级次数", cap: "NLP" },
      { id: "as-claim", system: "退换货 / 索赔单", field: "闭环时长、一次解决率", cap: "系统" },
      { id: "as-crm", system: "CRM 回访", field: "现场支持满意度、复购意愿", cap: "系统" },
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
      { id: "comp-cert", system: "资质证书 OCR", field: "营业执照、ISO、授权有效期", cap: "OCR" },
      { id: "comp-legal", system: "司法 / 行政处罚公开数据", field: "涉诉、失信、处罚记录", cap: "外部数据" },
      { id: "comp-news", system: "环保与行业舆情", field: "负面舆情、供给中断风险", cap: "外部数据" },
    ],
  },
];

/** 数据来源下钻明细：演示 OCR / NLP / 图像识别等 AI 自动抽取 */
export type PerfSourceDetail = {
  id: string;
  metricKey: string;
  metricTitle: string;
  system: string;
  cap: string;
  pipeline: string[];
  summary: { label: string; value: string }[];
  columns: string[];
  rows: string[][];
  note: string;
};

export const PERF_SOURCE_DETAILS: Record<string, PerfSourceDetail> = {
  "ontime-po": {
    id: "ontime-po",
    metricKey: "ontime",
    metricTitle: "交期打分",
    system: "采购订单 / SRM",
    cap: "系统",
    pipeline: ["同步 PO 主数据", "抽取承诺交期 / 要求到货日", "对齐供应商批次", "写入交期评分底表"],
    summary: [
      { label: "关联 PO", value: "128 笔" },
      { label: "承诺准时率", value: "94.2%" },
      { label: "平均提前期", value: "18 天" },
    ],
    columns: ["PO 号", "供应商", "物料", "承诺交期", "要求到货日", "状态"],
    rows: [
      ["PO-2026-0312", "华东精密", "工控电机 M3", "2026-03-18", "2026-03-20", "已承诺"],
      ["PO-2026-0298", "南方电机", "伺服驱动", "2026-03-12", "2026-03-15", "改期+2天"],
      ["PO-2026-0281", "长三角工控", "编码器套件", "2026-03-08", "2026-03-10", "已承诺"],
      ["PO-2026-0266", "华东精密", "轴承组件", "2026-03-05", "2026-03-06", "加急"],
    ],
    note: "交期打分底数来自 SRM 承诺交期与 PO 要求到货日的对齐结果。",
  },
  "ontime-wms": {
    id: "ontime-wms",
    metricKey: "ontime",
    metricTitle: "交期打分",
    system: "WMS 到货签收",
    cap: "系统",
    pipeline: ["接收到货过账", "比对承诺交期", "计算逾期天数", "回写准时率"],
    summary: [
      { label: "本周期签收", value: "96 单" },
      { label: "准时签收", value: "90 单" },
      { label: "平均逾期", value: "0.6 天" },
    ],
    columns: ["ASN", "供应商", "签收时间", "承诺交期", "逾期天", "结果"],
    rows: [
      ["ASN-88421", "华东精密", "2026-03-19 14:22", "2026-03-18", "+1", "轻微逾期"],
      ["ASN-88390", "南方电机", "2026-03-15 09:10", "2026-03-15", "0", "准时"],
      ["ASN-88355", "长三角工控", "2026-03-09 16:40", "2026-03-10", "-1", "提前"],
      ["ASN-88312", "华北机电", "2026-03-07 11:05", "2026-03-05", "+2", "逾期"],
    ],
    note: "实际签收时间与承诺交期比对后，直接进入交期打分的准时率计算。",
  },
  "ontime-tms": {
    id: "ontime-tms",
    metricKey: "ontime",
    metricTitle: "交期打分",
    system: "TMS 物流单据 OCR",
    cap: "OCR",
    pipeline: ["采集运单影像", "OCR 识别单号与节点章戳", "抽取发运/中转/到港时间", "标记在途异常"],
    summary: [
      { label: "识别单据", value: "64 张" },
      { label: "OCR 置信度", value: "96.8%" },
      { label: "在途异常", value: "5 单" },
    ],
    columns: ["影像", "运单号", "OCR 节点时间", "异常章戳", "置信度", "评分影响"],
    rows: [
      ["运单_0318.jpg", "YT31289001", "发运 03-16 08:20", "无", "98%", "正常"],
      ["运单_0315.jpg", "SF15882210", "中转延误章 03-14", "天气延误", "95%", "在途异常 -1"],
      ["签收单_0312.png", "JD7745102", "签收 03-12 19:01", "无", "97%", "正常"],
      ["运单_0308.jpg", "YT31277120", "到港 03-09 未盖章", "缺节点章", "91%", "人工复核"],
    ],
    note: "OCR 自动抽取物流节点，在途延误识别率计入交期打分扣分项。",
  },
  "ontime-mail": {
    id: "ontime-mail",
    metricKey: "ontime",
    metricTitle: "交期打分",
    system: "催货邮件 NLP",
    cap: "NLP",
    pipeline: ["抓取催货往来邮件", "NLP 识别意图与承诺日", "计算平均回复时长", "核对改期兑现率"],
    summary: [
      { label: "解析邮件", value: "214 封" },
      { label: "平均回复", value: "3.2 小时" },
      { label: "改期兑现率", value: "87%" },
    ],
    columns: ["邮件主题", "供应商", "NLP 意图", "回复时长", "改期承诺", "兑现"],
    rows: [
      ["RE: PO-0312 交期确认", "华东精密", "确认交期", "1.5h", "—", "—"],
      ["RE: 伺服驱动加急", "南方电机", "申请改期", "4.0h", "03-17", "已兑现"],
      ["RE: 编码器缺料", "长三角工控", "解释延误", "6.2h", "03-12", "未兑现"],
      ["RE: 轴承发运通知", "华东精密", "发运告知", "0.8h", "—", "—"],
    ],
    note: "NLP 输出的平均回复时长与改期兑现率，直接映射到交期打分的沟通与异常扣分。",
  },
  "quality-iqc": {
    id: "quality-iqc",
    metricKey: "quality",
    metricTitle: "质量打分",
    system: "IQC 来料检验",
    cap: "系统",
    pipeline: ["接收送检批次", "记录抽检结果", "汇总合格率", "回写质量打分"],
    summary: [
      { label: "送检批次", value: "48" },
      { label: "合格批次", value: "45" },
      { label: "合格率", value: "93.8%" },
    ],
    columns: ["批次号", "供应商", "物料", "抽检数", "不合格", "结论"],
    rows: [
      ["LOT-260318A", "华东精密", "工控电机 M3", "20", "0", "合格"],
      ["LOT-260315B", "南方电机", "伺服驱动", "16", "1", "让步接收"],
      ["LOT-260312C", "长三角工控", "编码器", "12", "2", "不合格"],
      ["LOT-260308D", "华北机电", "联轴器", "10", "0", "合格"],
    ],
    note: "质量合格率是质量打分的主映射输入。",
  },
  "quality-vision": {
    id: "quality-vision",
    metricKey: "quality",
    metricTitle: "质量打分",
    system: "质检照片 图像识别",
    cap: "图像识别",
    pipeline: ["采集质检照片", "图像识别外观/缺件/铭牌", "输出缺陷标签", "自动扣分建议"],
    summary: [
      { label: "识别照片", value: "186 张" },
      { label: "异常检出", value: "11 处" },
      { label: "模型置信度", value: "94.1%" },
    ],
    columns: ["照片", "供应商", "识别结果", "缺陷类型", "置信度", "评分影响"],
    rows: [
      ["IQC_0318_01.jpg", "华东精密", "正常", "—", "97%", "无"],
      ["IQC_0315_04.jpg", "南方电机", "异常", "外壳划痕", "93%", "图像异常 -1"],
      ["IQC_0312_02.jpg", "长三角工控", "异常", "缺件：固定螺丝", "96%", "图像异常 -2"],
      ["IQC_0309_07.jpg", "华北机电", "异常", "铭牌参数不符", "91%", "人工复核"],
    ],
    note: "图像异常检出数进入质量打分扣分，对应指标「图像异常检出数」。",
  },
  "quality-ocr": {
    id: "quality-ocr",
    metricKey: "quality",
    metricTitle: "质量打分",
    system: "物流 / 验收单据 OCR",
    cap: "OCR",
    pipeline: ["扫描验收单 / 装箱单", "OCR 抽取品名数量", "与 PO 行比对", "标记单据不一致"],
    summary: [
      { label: "识别单据", value: "72 张" },
      { label: "一致率", value: "95.8%" },
      { label: "不一致", value: "3 单" },
    ],
    columns: ["单据影像", "OCR 品名", "OCR 数量", "PO 数量", "一致性", "处理"],
    rows: [
      ["验收_0318.pdf", "工控电机 M3", "40", "40", "一致", "过账"],
      ["装箱_0315.pdf", "伺服驱动 V2", "18", "20", "不一致", "短装复核"],
      ["验收_0312.pdf", "编码器 E9", "30", "30", "一致", "过账"],
      ["送货_0308.jpg", "联轴器套件", "15", "12", "不一致", "溢装退回"],
    ],
    note: "单据一致性指标由 OCR 与 PO 比对自动生成，纳入质量打分。",
  },
  "quality-return": {
    id: "quality-return",
    metricKey: "quality",
    metricTitle: "质量打分",
    system: "退换货单",
    cap: "系统",
    pipeline: ["汇总退换货申请", "统计闭环时长", "计算退货率", "下修质量分"],
    summary: [
      { label: "退换货单", value: "9 笔" },
      { label: "退货率", value: "1.8%" },
      { label: "闭环率", value: "100%" },
    ],
    columns: ["单号", "供应商", "原因", "数量", "闭环时长", "结果"],
    rows: [
      ["RMA-2602", "长三角工控", "功能不良", "3", "4 天", "已换货"],
      ["RMA-2598", "南方电机", "外观损伤", "2", "2 天", "已退货"],
      ["RMA-2581", "华北机电", "到货不符", "5", "6 天", "已补发"],
      ["RMA-2570", "华东精密", "让步接收复检", "1", "1 天", "关闭"],
    ],
    note: "退换货闭环率与退货扣分直接进入质量打分。",
  },
  "cost-contract": {
    id: "cost-contract",
    metricKey: "cost",
    metricTitle: "成本打分",
    system: "合同文本 NLP",
    cap: "NLP",
    pipeline: ["导入合同 PDF", "NLP 抽取价格 / 账期条款", "结构化写入比价引擎", "计算协议价偏离"],
    summary: [
      { label: "解析合同", value: "17 份" },
      { label: "条款抽取成功率", value: "98%" },
      { label: "平均账期", value: "60 天" },
    ],
    columns: ["合同", "供应商", "抽取单价", "账期", "阶梯价", "置信度"],
    rows: [
      ["框架协议-华东-2025.pdf", "华东精密", "¥1,280 / 台", "60 天", "≥100 台 9.6 折", "97%"],
      ["年度合同-南方.pdf", "南方电机", "¥2,450 / 套", "45 天", "无", "95%"],
      ["补充协议-长三角.pdf", "长三角工控", "¥860 / 只", "90 天", "≥500 只 9.8 折", "96%"],
      ["报价附件-华北.docx", "华北机电", "¥320 / 件", "30 天", "现款优惠 2%", "93%"],
    ],
    note: "NLP 抽取的协议价与账期配合度是成本打分核心输入。",
  },
  "cost-rfq": {
    id: "cost-rfq",
    metricKey: "cost",
    metricTitle: "成本打分",
    system: "询比价单 / PO",
    cap: "系统",
    pipeline: ["汇总询价与成交价", "对照协议价", "计算偏离度", "写入成本分"],
    summary: [
      { label: "比价单", value: "36 份" },
      { label: "平均偏离", value: "+1.4%" },
      { label: "低于协议价", value: "12 笔" },
    ],
    columns: ["询价单", "供应商", "报价", "协议价", "偏离", "成交"],
    rows: [
      ["RFQ-0311", "华东精密", "¥1,295", "¥1,280", "+1.2%", "是"],
      ["RFQ-0308", "南方电机", "¥2,420", "¥2,450", "-1.2%", "是"],
      ["RFQ-0302", "长三角工控", "¥890", "¥860", "+3.5%", "否"],
      ["RFQ-0255", "华北机电", "¥318", "¥320", "-0.6%", "是"],
    ],
    note: "协议价偏离度由询比价与合同抽取价自动比对生成。",
  },
  "cost-market": {
    id: "cost-market",
    metricKey: "cost",
    metricTitle: "成本打分",
    system: "行业公开行情",
    cap: "外部数据",
    pipeline: ["接入品类价格指数", "识别波动区间", "评估供应商跟价弹性", "修正成本分"],
    summary: [
      { label: "跟踪品类", value: "6 个" },
      { label: "近 30 日波动", value: "+2.8%" },
      { label: "跟价滞后供应商", value: "1 家" },
    ],
    columns: ["品类", "指数", "30 日变化", "供应商跟价", "敏感度", "评分影响"],
    rows: [
      ["工控电机铜材相关", "112.4", "+3.1%", "华东精密同步", "中", "无惩罚"],
      ["伺服驱动电子料", "108.9", "+1.6%", "南方电机部分跟价", "中", "轻微惩罚"],
      ["编码器进口件", "121.0", "+4.8%", "长三角滞后", "高", "波动惩罚 -2"],
      ["标准紧固件", "101.2", "+0.4%", "华北同步", "低", "无惩罚"],
    ],
    note: "行业波动敏感度作为成本打分的外部修正项。",
  },
  "rd-plm": {
    id: "rd-plm",
    metricKey: "rd",
    metricTitle: "研发项目打分",
    system: "PLM / 项目管理",
    cap: "系统",
    pipeline: ["同步项目里程碑", "统计按时完成率", "记录变更次数", "加权入研发分"],
    summary: [
      { label: "在研项目", value: "5 个" },
      { label: "里程碑准时率", value: "86%" },
      { label: "变更次数", value: "7" },
    ],
    columns: ["项目", "供应商", "里程碑", "计划日", "实际日", "状态"],
    rows: [
      ["GW-300 电机选型", "华东精密", "样机交付", "2026-02-28", "2026-02-27", "准时"],
      ["EC-200 联调", "南方电机", "联调报告", "2026-03-10", "2026-03-14", "延期"],
      ["编码器兼容性", "长三角工控", "样品确认", "2026-03-05", "2026-03-05", "准时"],
      ["结构件试制", "华北机电", "模具验收", "2026-03-18", "—", "进行中"],
    ],
    note: "里程碑表现构成研发项目打分的项目协同主分。",
  },
  "rd-mail": {
    id: "rd-mail",
    metricKey: "rd",
    metricTitle: "研发项目打分",
    system: "邮件沟通 NLP",
    cap: "NLP",
    pipeline: ["抓取项目邮件", "NLP 识别技术答疑", "计算平均回复时长", "输出沟通配合度"],
    summary: [
      { label: "解析邮件", value: "156 封" },
      { label: "平均回复", value: "4.1 小时" },
      { label: "配合度得分", value: "88" },
    ],
    columns: ["主题", "供应商", "NLP 标签", "回复时长", "配合度", "备注"],
    rows: [
      ["RE: 样机接口确认", "华东精密", "技术答疑", "2.0h", "高", "附带图纸"],
      ["RE: 联调异常排查", "南方电机", "问题跟进", "7.5h", "中", "需二次催促"],
      ["RE: 编码器协议", "长三角工控", "资料提供", "3.2h", "高", "一次给齐"],
      ["RE: 模具尺寸复核", "华北机电", "变更沟通", "5.0h", "中", "接受变更"],
    ],
    note: "沟通配合度由 NLP 平均回复时长与答疑完整度换算，计入研发打分。",
  },
  "rd-inspect": {
    id: "rd-inspect",
    metricKey: "rd",
    metricTitle: "研发项目打分",
    system: "巡检报告 NLP",
    cap: "NLP",
    pipeline: ["导入巡检 / 问题报告", "NLP 抽取问题条目", "跟踪整改闭环", "计算闭环率"],
    summary: [
      { label: "问题条目", value: "23" },
      { label: "已闭环", value: "20" },
      { label: "闭环率", value: "87%" },
    ],
    columns: ["报告", "供应商", "NLP 问题摘要", "责任", "状态", "闭环天"],
    rows: [
      ["巡检-0310.md", "华东精密", "安装孔位偏差 0.3mm", "供应商", "已闭环", "3"],
      ["联调-0308.md", "南方电机", "噪声超标需调参", "双方", "已闭环", "5"],
      ["试制-0301.md", "长三角工控", "固件版本不一致", "供应商", "进行中", "—"],
      ["验收-0220.md", "华北机电", "表面处理色差", "供应商", "已闭环", "2"],
    ],
    note: "巡检问题闭环率体现问题解决能力，纳入研发项目打分。",
  },
  "rd-cert": {
    id: "rd-cert",
    metricKey: "rd",
    metricTitle: "研发项目打分",
    system: "样品 / 资质证书 OCR",
    cap: "OCR",
    pipeline: ["扫描样品报告与证书", "OCR 抽取参数与有效期", "与规格书比对", "输出符合率"],
    summary: [
      { label: "识别文件", value: "28 份" },
      { label: "参数符合率", value: "92%" },
      { label: "临期证书", value: "2 份" },
    ],
    columns: ["文件", "供应商", "OCR 关键参数", "规格要求", "符合", "有效期"],
    rows: [
      ["样品报告-电机.pdf", "华东精密", "额定扭矩 3.0Nm", "≥2.8Nm", "是", "—"],
      ["CE证书-南方.jpg", "南方电机", "证书编号 CE-8821", "有效", "是", "2027-01"],
      ["检测报告-编码.pdf", "长三角工控", "分辨率 2500PPR", "2500PPR", "是", "—"],
      ["材质证明-华北.png", "华北机电", "有效期 2026-04", "≥12 个月", "临期", "2026-04"],
    ],
    note: "样品参数符合率经 OCR 自动比对后计入研发项目打分。",
  },
  "as-ticket": {
    id: "as-ticket",
    metricKey: "afterSales",
    metricTitle: "售后打分",
    system: "工单投诉 NLP",
    cap: "NLP",
    pipeline: ["采集售后工单文本", "NLP 抽取诉求与情绪", "计算回复时长", "统计投诉闭环率"],
    summary: [
      { label: "工单数", value: "42" },
      { label: "平均回复", value: "2.4 小时" },
      { label: "投诉闭环率", value: "95%" },
    ],
    columns: ["工单号", "供应商", "NLP 诉求", "回复时长", "闭环", "情绪"],
    rows: [
      ["TK-8840", "华东精密", "现场调试支持", "1.2h", "已闭环", "中性"],
      ["TK-8821", "南方电机", "保修换件延迟", "5.5h", "已闭环", "负面"],
      ["TK-8799", "长三角工控", "安装说明不清", "2.0h", "已闭环", "中性"],
      ["TK-8760", "华北机电", "重复故障", "3.8h", "处理中", "负面"],
    ],
    note: "平均回复时长与投诉闭环率是售后打分的核心量化指标。",
  },
  "as-cs": {
    id: "as-cs",
    metricKey: "afterSales",
    metricTitle: "售后打分",
    system: "客服记录 NLP",
    cap: "NLP",
    pipeline: ["导入客服会话", "NLP 评估配合度", "识别升级次数", "输出沟通分"],
    summary: [
      { label: "会话数", value: "68" },
      { label: "沟通配合度", value: "90" },
      { label: "升级次数", value: "4" },
    ],
    columns: ["会话 ID", "供应商", "NLP 摘要", "配合度", "升级", "结果"],
    rows: [
      ["CS-2210", "华东精密", "主动预约上门", "高", "0", "满意"],
      ["CS-2198", "南方电机", "多次催促才答复", "中", "1", "勉强解决"],
      ["CS-2175", "长三角工控", "资料一次给齐", "高", "0", "满意"],
      ["CS-2150", "华北机电", "推诿责任", "低", "2", "升级处理"],
    ],
    note: "沟通配合度由客服 NLP 自动评分，并入售后打分。",
  },
  "as-claim": {
    id: "as-claim",
    metricKey: "afterSales",
    metricTitle: "售后打分",
    system: "退换货 / 索赔单",
    cap: "系统",
    pipeline: ["汇总索赔与退换", "统计一次解决率", "计算闭环时长", "回写售后分"],
    summary: [
      { label: "索赔单", value: "11" },
      { label: "一次解决率", value: "82%" },
      { label: "平均闭环", value: "3.6 天" },
    ],
    columns: ["单号", "供应商", "类型", "闭环天", "一次解决", "金额"],
    rows: [
      ["CL-2603", "华东精密", "换货", "2", "是", "¥0"],
      ["CL-2590", "南方电机", "索赔", "5", "否", "¥3,200"],
      ["CL-2577", "长三角工控", "退货", "3", "是", "¥1,100"],
      ["CL-2561", "华北机电", "补件", "4", "是", "¥0"],
    ],
    note: "一次解决率与闭环时长对应售后打分中的问题解决能力。",
  },
  "as-crm": {
    id: "as-crm",
    metricKey: "afterSales",
    metricTitle: "售后打分",
    system: "CRM 回访",
    cap: "系统",
    pipeline: ["发起现场回访", "采集满意度", "关联供应商服务单", "修正售后分"],
    summary: [
      { label: "回访单", value: "24" },
      { label: "满意度", value: "4.4 / 5" },
      { label: "愿复购", value: "88%" },
    ],
    columns: ["回访号", "供应商", "现场支持", "满意度", "复购意愿", "备注"],
    rows: [
      ["VF-310", "华东精密", "准时到场", "5", "高", "工程师专业"],
      ["VF-302", "南方电机", "迟到 40 分钟", "3", "中", "需改进响应"],
      ["VF-288", "长三角工控", "远程解决", "4", "高", "—"],
      ["VF-271", "华北机电", "二次上门", "4", "中", "备件不齐"],
    ],
    note: "现场支持满意度作为售后履约的辅助修正。",
  },
  "comp-cert": {
    id: "comp-cert",
    metricKey: "compliance",
    metricTitle: "合规与韧性（并入等级）",
    system: "资质证书 OCR",
    cap: "OCR",
    pipeline: ["扫描资质影像", "OCR 识别证号与有效期", "比对临期 / 过期", "触发等级修正告警"],
    summary: [
      { label: "识别证书", value: "39 份" },
      { label: "有效", value: "36" },
      { label: "临期 / 过期", value: "3" },
    ],
    columns: ["影像", "供应商", "证书类型", "OCR 有效期", "状态", "等级影响"],
    rows: [
      ["营业执照-华东.jpg", "华东精密", "营业执照", "长期", "有效", "无"],
      ["ISO9001-南方.pdf", "南方电机", "ISO9001", "2026-06-30", "临期", "告警"],
      ["授权书-长三角.png", "长三角工控", "品牌授权", "2025-12-31", "过期", "限制推荐"],
      ["环评-华北.jpg", "华北机电", "环评批复", "2028-01-01", "有效", "无"],
    ],
    note: "资质过期告警由 OCR 自动识别，用于等级修正而非五维加权。",
  },
  "comp-legal": {
    id: "comp-legal",
    metricKey: "compliance",
    metricTitle: "合规与韧性（并入等级）",
    system: "司法 / 行政处罚公开数据",
    cap: "外部数据",
    pipeline: ["对接公开司法 / 处罚库", "按供应商主体匹配", "输出命中记录", "触发等级下调"],
    summary: [
      { label: "扫描主体", value: "42 家" },
      { label: "命中记录", value: "2 条" },
      { label: "高风险", value: "1 家" },
    ],
    columns: ["供应商", "数据类型", "公开摘要", "日期", "风险", "处理"],
    rows: [
      ["长三角工控", "行政处罚", "消防备案逾期罚款", "2025-11", "中", "观察"],
      ["华北机电", "司法涉诉", "货款纠纷已调解", "2024-08", "低", "备案"],
      ["南方电机", "—", "无命中", "—", "低", "正常"],
      ["华东精密", "—", "无命中", "—", "低", "正常"],
    ],
    note: "涉诉 / 处罚命中用于合规韧性等级修正。",
  },
  "comp-news": {
    id: "comp-news",
    metricKey: "compliance",
    metricTitle: "合规与韧性（并入等级）",
    system: "环保与行业舆情",
    cap: "外部数据",
    pipeline: ["监测舆情与环保通报", "NLP 情感与事件分类", "评估供给中断风险", "写入韧性评分"],
    summary: [
      { label: "监测条目", value: "120+" },
      { label: "负面舆情", value: "3" },
      { label: "供给风险", value: "中低" },
    ],
    columns: ["时间", "供应商 / 产区", "事件摘要", "情感", "供给影响", "韧性建议"],
    rows: [
      ["2026-03-01", "华东精密产区", "园区限电传闻澄清", "中性", "低", "继续观察"],
      ["2026-02-18", "南方电机", "环保抽查通过", "正面", "无", "维持"],
      ["2026-02-02", "长三角工控上游", "关键原料涨价舆情", "负面", "中", "备选分流"],
      ["2026-01-20", "华北机电", "无重大舆情", "中性", "无", "维持"],
    ],
    note: "舆情风险等级用于供应链韧性修正，并入综合等级判断。",
  },
};

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
