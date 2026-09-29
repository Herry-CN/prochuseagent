export type RiskTone = "high" | "mid" | "low";
export type RiskStep = "cockpit" | "detail" | "map" | "impact" | "simulate" | "action" | "copper";

/**
 * 演示企业设定（虚构采购主体，供应链节点采用真实公开事件与真实器件品类）：
 * 「华远智造」— 工业物联网网关 / 边缘控制器整机厂，深圳。
 * 主料：以太网 PHY（瑞昱 RTL8211F，台积电代工链路常见）、铜排/铜线束、电源模块。
 */

export const RISK_EVENTS = [
  {
    id: "quake",
    title: "台湾花莲 7.2 级地震（台积电厂区受影响）",
    type: "突发事件",
    link: "3家供应商",
    level: "高" as const,
    tone: "high" as RiskTone,
  },
  {
    id: "tariff",
    title: "美国对华半导体关税提至 50%",
    type: "政策",
    link: "12家供应商",
    level: "高" as const,
    tone: "high" as RiskTone,
  },
  {
    id: "flood",
    title: "超强台风「摩羯」冲击华南供应链",
    type: "自然灾害",
    link: "2家供应商",
    level: "中" as const,
    tone: "mid" as RiskTone,
  },
  {
    id: "copper",
    title: "LME 铜价创新高 + 精矿加工费塌陷",
    type: "行情",
    link: "18种物料",
    level: "中" as const,
    tone: "mid" as RiskTone,
  },
  {
    id: "port",
    title: "红海危机致亚欧航线绕行 · 宁波港船期延误",
    type: "物流",
    link: "7笔采购订单",
    level: "中" as const,
    tone: "mid" as RiskTone,
  },
];

export const RISK_QUAKE = {
  title: "2024-04-03 台湾花莲海域 7.2 级地震",
  time: "2024-04-03 07:58 CST",
  place: "台湾花莲外海（台湾本岛多地有感）",
  area: "新竹 / 台中 / 台南科学园区震度达 4～5 级",
  companies: "台积电（TSMC）公开声明：厂区人员撤离后复工，部分在制晶圆报废",
  notice: "台积电：10 小时内设备恢复率超 70%，第 3 日全面恢复；预估损失约新台币 30 亿元",
  sources: "台积电官网声明 / 路透社 / 台湾证券交易所公告",
  status: "厂区已恢复，下游交期仍有短期扰动",
  facts: [
    "2024 年 4 月 3 日台湾发生约 25 年来最强地震（花莲海域，公开报道约 7.2 级）。",
    "台积电声明：新竹、龙潭、竹南等园区震度较高；无断电、无建筑结构损毁，EUV 等关键设备未受损。",
    "部分在制晶圆报废；公司称多数产能损失可于 2024Q2 追回，毛利率影响约 50 个基点。",
  ],
  inferences: [
    "华远智造主供以太网 PHY「RTL8211F-CG」由瑞昱设计、台积电代工，地震后分销渠道交期可能拉长 1～3 周。",
    "主分销商「世强先进」与备选「文晔科技」库存告急时，将传导至工业网关 GW-300 / 边缘控制器 EC-200 排产。",
    "企业现货库存约 24 天，正常交期 45 天；若追单窗口错过，存在局部断料风险。",
  ],
  chain: [
    { id: "e", label: "花莲地震", sub: "2024-04-03 · 7.2 级", detail: "已确认事实 · 公开新闻与交易所公告" },
    { id: "r", label: "新竹科学园区", sub: "台积电主要厂区震度约 5", detail: "人员撤离 / 设备点检 / 在制晶圆损失" },
    { id: "f", label: "台积电 Fab", sub: "3 日内全面恢复", detail: "公开：报废晶圆 + Q2 毛利影响约 50bp" },
    { id: "s", label: "世强先进（分销）", sub: "主供 RTL8211F-CG", detail: "年度采购额约 ¥1,860 万 · 交期敏感" },
    { id: "m", label: "RTL8211F-CG", sub: "千兆以太网 PHY", detail: "瑞昱设计 / 台积电代工链路 · 交期 45 天" },
    { id: "p", label: "GW-300 / EC-200", sub: "共 5 款联网产品", detail: "客户交付窗口 30～60 天" },
  ],
  impacts: [
    { label: "受影响供应商", value: "3家" },
    { label: "受影响工厂", value: "2处园区（新竹/台中相关）" },
    { label: "受影响物料", value: "14种（PHY/配套阻容）" },
    { label: "受影响产品", value: "5款网关与控制器" },
    { label: "未来60天采购金额", value: "¥2,800万" },
    { label: "当前库存覆盖", value: "24天" },
    { label: "正常供应周期", value: "45天" },
    { label: "替代供应周期", value: "60～90天（换料认证）" },
    { label: "潜在断供风险", value: "高", warn: true },
  ],
  sims: [
    { name: "不行动", cost: "低", stock: "低", shortage: "高", delivery: "高", pick: false },
    { name: "向世强/文晔追加现货", cost: "中", stock: "中", shortage: "中", delivery: "中", pick: false },
    { name: "启动备选 PHY（RTL8201）并行认证", cost: "中高", stock: "中", shortage: "低", delivery: "低", pick: true },
  ],
  options: ["主分销追加现货", "备选渠道锁货", "替代料并行认证", "上调安全库存", "战略客户优先排产", "临时降配保交付"],
  optionSims: {
    主分销追加现货: { cost: "中", stock: "中", shortage: "中", delivery: "中", pick: true },
    备选渠道锁货: { cost: "中", stock: "中", shortage: "中", delivery: "中", pick: false },
    替代料并行认证: { cost: "中高", stock: "中", shortage: "低", delivery: "低", pick: true },
    上调安全库存: { cost: "中", stock: "高", shortage: "低", delivery: "低", pick: false },
    战略客户优先排产: { cost: "低", stock: "低", shortage: "中", delivery: "中", pick: false },
    临时降配保交付: { cost: "低", stock: "低", shortage: "低", delivery: "中", pick: false },
  },
  defaultOptions: ["主分销追加现货", "替代料并行认证"],
  advice: "建议：立即确认分销库存与交期，追加现货，并并行启动 RTL8201 等替代认证。",
  actions: [
    { who: "世强先进", text: "确认 RTL8211F-CG 可交库存、在途批次、未来 30 天分配额度与加急交期。" },
    { who: "文晔科技", text: "启动备选渠道询价，锁定可交付窗口与批次号。" },
    { who: "研发", text: "评估 RTL8201FL / 国产千兆 PHY 替代认证周期（原理图/EMC）。" },
    { who: "计划部门", text: "重排 GW-300、EC-200 未来 60 天产线，优先保障战略客户订单。" },
    { who: "采购经理", text: "上调 PHY 安全库存至 35 天，形成周例会风险议题。" },
  ],
};

export const RISK_COPPER = {
  level: "中高",
  conclusion: "精矿紧张 + LME 铜价高位，未来 30～60 天铜材采购成本上行风险偏高。",
  confidence: "中",
  uncertainty: "美联储利率路径、国内电网投资节奏、智利/刚果矿山扰动。",
  factors: [
    { name: "LME 铜价", now: "2024～2025 多次刷新阶段高点", dir: "↑" },
    { name: "精矿加工费 TC/RC", now: "现货一度跌至零附近/负值（公开市场信号）", dir: "↑" },
    { name: "矿山供应", now: "智利等主产地扰动，精矿增量受限", dir: "↑" },
    { name: "国内冶炼", now: "中国冶炼产能扩张，争夺精矿加剧", dir: "↑" },
    { name: "电网 / 新能源需求", now: "整体仍具支撑", dir: "→" },
    { name: "专家策略", now: "偏多 · 建议锁价", dir: "↑" },
    { name: "AI模型", now: "偏多 · 成本上行", dir: "↑" },
  ],
  need: "1,000吨",
  stock: "300吨",
  strategies: [
    { name: "不行动", qty: "700吨", cash: "低", price: "高", shortage: "中", pick: false },
    { name: "提前采购20%", qty: "840吨", cash: "中", price: "中", shortage: "低", pick: true },
    { name: "提前采购40%", qty: "980吨", cash: "高", price: "低", shortage: "低", pick: false },
  ],
  advice: "铜排、漆包线、接地铜排等物料建议在库存安全边界内提前锁定 20%～30% 需求。",
  backtest: [
    { date: "2024-05", judge: "上涨风险高", actual: "铜价阶段性走强", ok: true },
    { date: "2024-08", judge: "供应扰动抬升", actual: "矿山扰动消息升温", ok: true },
    { date: "2024-11", judge: "风险回落", actual: "价格高位震荡", ok: true },
    { date: "2025-02", judge: "短线回调", actual: "随后再冲高", ok: false },
  ],
};

export const RISK_TARIFF = {
  title: "美国对华半导体关税由 25% 提至 50%（2024-05-14 白宫公布）",
  time: "2024-05-14",
  place: "美国 · 白宫贸易政策公告",
  area: "对原产于中国的半导体等商品加征关税",
  companies: "华远智造销美工业网关供应链（国内模组/结构件）",
  notice: "白宫公布：半导体关税由 25% 提至 50%，分阶段落地",
  sources: "白宫 Fact Sheet / USTR 公开材料 / 商务新闻汇总",
  status: "政策已公布，企业评估成本与转嫁路径",
  chainText: "白宫关税清单 → HS 8542 集成电路 → 出口美国的模组/整机 → 国内代工厂与元器件采购成本 → 重新议价",
  impact:
    "华远智造销美工业网关涉及 12 家国内模组/结构件供应商、37 种料号；若无法转嫁，预计年度采购与出口综合成本增加约 ¥620 万。",
  options: ["国内替代供应商", "第三国供应商", "贸易路径调整", "提前进口", "重新议价", "成本转嫁"],
  optionSims: {
    国内替代供应商: { cost: "中", stock: "中", shortage: "中", delivery: "中", pick: false },
    第三国供应商: { cost: "中", stock: "中", shortage: "低", delivery: "中", pick: true },
    贸易路径调整: { cost: "中", stock: "低", shortage: "低", delivery: "中", pick: false },
    提前进口: { cost: "高", stock: "高", shortage: "低", delivery: "低", pick: false },
    重新议价: { cost: "中", stock: "低", shortage: "低", delivery: "低", pick: true },
    成本转嫁: { cost: "低", stock: "低", shortage: "低", delivery: "中", pick: false },
  },
  baselineSim: { name: "不行动（自担关税）", cost: "高", stock: "低", shortage: "低", delivery: "低", pick: false },
  defaultOptions: ["重新议价", "第三国供应商"],
  facts: [
    "2024 年 5 月 14 日白宫公布对华加征关税清单，半导体税率由 25% 提高至 50%。",
    "覆盖 HS 8542 等集成电路及相关品类（以公开清单为准）。",
    "华远智造 GW-300 销美版本含中国原产主控模组与电源模组。",
  ],
  inferences: [
    "若关税落地且无法完全转嫁客户，单台出口成本显著上升。",
    "电源模组供应商「深圳明纬系渠道」、结构件「中山精工注塑」等 12 家将进入成本重谈。",
    "可评估越南/马来组装路径，或拆分 HS 编码与原产地认定。",
  ],
  chain: [
    { id: "e", label: "白宫关税公告", sub: "2024-05-14 · 50%", detail: "已确认事实 · 政策文本" },
    { id: "r", label: "HS 8542", sub: "集成电路税则号", detail: "销美申报与原产地认定关键" },
    { id: "f", label: "深圳组装厂", sub: "GW-300 销美版本", detail: "主控模组 + 电源模组中国原产" },
    { id: "s", label: "明纬渠道 / 精工注塑", sub: "12 家受影响供应商", detail: "成本重谈与交期锁定" },
    { id: "m", label: "电源模组 · 结构件", sub: "37 种料号", detail: "关税敏感 BOM" },
    { id: "p", label: "GW-300 销美版", sub: "出口订单", detail: "年出口约 ¥4,200 万" },
  ],
  nodes: {
    e: { company: "美国白宫 / USTR", addr: "华盛顿", capacity: "—", cycle: "政策已公布", volume: "—", history: "2024-05-14 Fact Sheet", alt: "—", stock: "—" },
    r: { company: "税则 HS 8542", addr: "海关归类", capacity: "半导体相关", cycle: "报关审核", volume: "—", history: "既有 25% 税率", alt: "拆分归类评估", stock: "—" },
    f: { company: "华远智造深圳工厂", addr: "深圳宝安", capacity: "销美线月产能 8 千台", cycle: "排产 30 天", volume: "出口占比 35%", history: "既往关税按 25% 测算", alt: "海外 CKD 组装", stock: "成品 18 天" },
    s: { company: "电源/结构件供应商群", addr: "珠三角", capacity: "12 家合格供方", cycle: "议价 2～4 周", volume: "年采购 ¥2,100 万", history: "协议价到期临近", alt: "越南结构件样品", stock: "原料 20 天" },
    m: { company: "关税敏感物料包", addr: "BOM 37 料号", capacity: "可国产替代约 60%", cycle: "认证 30～60 天", volume: "单台成本占比 22%", history: "无重大质量问题", alt: "第三国贴牌模组", stock: "按料号差异大" },
    p: { company: "GW-300 北美渠道", addr: "出口美国", capacity: "年出口约 ¥4,200 万", cycle: "船期 28～40 天", volume: "18 家北美经销商", history: "毛利承压", alt: "提价 / 规格降配", stock: "海外仓 25 天" },
  },
  impacts: [
    { label: "受影响供应商", value: "12家" },
    { label: "受影响物料", value: "37种" },
    { label: "受影响产品", value: "GW-300 销美版等 3 款" },
    { label: "预计年增成本", value: "约 ¥620 万", warn: true },
    { label: "出口收入敞口", value: "¥4,200万" },
    { label: "可转嫁比例（估算）", value: "40%～60%" },
    { label: "第三国切换周期", value: "90～180天" },
    { label: "潜在毛利冲击", value: "高", warn: true },
  ],
  judgment: "关税落地后若仅靠提价，可能损失部分北美订单；建议并行「议价 + 第三国路径评估」。",
  sims: [
    { name: "不行动（自担关税）", cost: "高", stock: "低", shortage: "低", delivery: "低", pick: false },
    { name: "向客户转嫁 50%", cost: "中", stock: "低", shortage: "低", delivery: "中", pick: false },
    { name: "议价 + 评估越南组装", cost: "中", stock: "中", shortage: "低", delivery: "中", pick: true },
  ],
  advice: "建议：立即与北美渠道沟通提价空间，同时对电源模组与结构件启动第三国样品与原产地路径评估。",
  actions: [
    { who: "北美销售", text: "测算 GW-300 提价幅度与客户接受度，锁定可转嫁比例。" },
    { who: "电源模组供应商", text: "重新议价，并询价越南/马来组装可行性。" },
    { who: "关务", text: "复核 HS 归类与原产地证明，评估 CKD/SKD 路径。" },
    { who: "采购经理", text: "对 12 家关税敏感供应商发出成本重谈函。" },
    { who: "财务", text: "按 50% 税率重算出口毛利与库存减值风险。" },
  ],
};

export type RiskFlow = {
  title: string;
  time: string;
  place: string;
  area: string;
  companies: string;
  notice: string;
  sources: string;
  status: string;
  facts: string[];
  inferences: string[];
  chain: { id: string; label: string; sub: string; detail: string }[];
  nodes: Record<string, { company: string; addr: string; capacity: string; cycle: string; volume: string; history: string; alt: string; stock: string }>;
  impacts: { label: string; value: string; warn?: boolean }[];
  judgment: string;
  sims: { name: string; cost: string; stock: string; shortage: string; delivery: string; pick: boolean }[];
  advice: string;
  actions: { who: string; text: string }[];
  options?: string[];
  optionSims?: Record<string, { cost: string; stock: string; shortage: string; delivery: string; pick: boolean }>;
  baselineSim?: { name: string; cost: string; stock: string; shortage: string; delivery: string; pick: boolean };
  defaultOptions?: string[];
  chainText?: string;
  impactText?: string;
};

export const RISK_FLOOD: RiskFlow = {
  title: "2024-09 超强台风「摩羯」冲击华南供应链",
  time: "2024-09-06 前后",
  place: "海南、广东沿海及珠三角",
  area: "停工停运、物流中断、部分厂房进水风险",
  companies: "东莞联创线缆（线束）/ 中山精工注塑（外壳）",
  notice: "珠三角多家电子制造与仓储临时停工，高速与港口作业受限（公开报道）",
  sources: "中央气象台 / 地方应急通报 / 航运与制造业新闻",
  status: "风雨影响减弱后陆续复工，交付仍有积压",
  facts: [
    "「摩羯」为近年登陆华南的强台风之一，海南、广东多地停工停运。",
    "珠三角部分电子制造、仓储与城配物流出现 3～7 天中断。",
    "华远智造线束与外壳供应商位于东莞、中山，属风雨影响带。",
  ],
  inferences: [
    "线束「RJ45 座子线束」、网关外壳交付可能延误，拖慢 GW-300 组装节拍。",
    "不直接冲击台湾晶圆与 RTL8211F，但会造成整机齐套缺料。",
    "建议提高线束/外壳安全库存，并启用备选注塑模厂。",
  ],
  chain: [
    { id: "e", label: "台风摩羯", sub: "2024-09 · 华南", detail: "已确认事实 · 气象与应急通报" },
    { id: "r", label: "珠三角风雨带", sub: "东莞 / 中山", detail: "停工停运 / 物流受阻" },
    { id: "f", label: "东莞联创线缆", sub: "线束车间", detail: "临时停工 3～5 天" },
    { id: "s", label: "中山精工注塑", sub: "外壳供应", detail: "模具与仓储备选评估" },
    { id: "m", label: "线束 / 外壳", sub: "组装齐套件", detail: "缺一不可 · 短周期物料" },
    { id: "p", label: "GW-300 组装", sub: "深圳整机线", detail: "齐套延误 → 出货推迟" },
  ],
  nodes: {
    e: { company: "气象 / 应急公开信息", addr: "华南沿海", capacity: "—", cycle: "已过境 · 复工跟踪", volume: "—", history: "2024-09", alt: "—", stock: "—" },
    r: { company: "珠三角制造带", addr: "东莞 / 中山", capacity: "电子配套集中", cycle: "复工爬坡 3～7 天", volume: "—", history: "台风季常规扰动", alt: "向江西/湖南备选厂分流", stock: "—" },
    f: { company: "东莞联创线缆", addr: "东莞清溪", capacity: "月供线束 15 万套", cycle: "正常 10 天", volume: "年采购 ¥420 万", history: "准时率 96%", alt: "惠州备选线束厂", stock: "厂内成品 4 天" },
    s: { company: "中山精工注塑", addr: "中山小榄", capacity: "外壳月产能充足", cycle: "正常 12 天", volume: "年采购 ¥380 万", history: "准时率 93%", alt: "东莞第二注塑厂", stock: "色母与原料 15 天" },
    m: { company: "RJ45 线束 + ABS 外壳", addr: "组装齐套", capacity: "随整机排产", cycle: "缺料即停线", volume: "单台必用", history: "无重大质量事故", alt: "临时用旧模具库存", stock: "企业库存 9 天" },
    p: { company: "GW-300 整机组装", addr: "深圳", capacity: "日产能约 400 台", cycle: "齐套后 2 天下线", volume: "在制 1,200 台", history: "曾因外壳色差停线", alt: "优先保战略客户", stock: "成品 12 天" },
  },
  impacts: [
    { label: "受影响供应商", value: "2家" },
    { label: "受影响工厂", value: "2家（东莞/中山）" },
    { label: "受影响物料", value: "线束 + 外壳等 6 种" },
    { label: "受影响产品", value: "GW-300 / EC-200" },
    { label: "预计延误", value: "3～7天" },
    { label: "当前齐套库存", value: "9天" },
    { label: "停线风险", value: "中", warn: true },
    { label: "客户交付风险", value: "中" },
  ],
  judgment: "台风冲击的是华南组装齐套，不是晶圆；关键是在 9 天齐套库存耗尽前打通线束/外壳交付。",
  sims: [
    { name: "等待原厂复工", cost: "低", stock: "低", shortage: "高", delivery: "高", pick: false },
    { name: "空运加急 + 加班赶工", cost: "中", stock: "中", shortage: "中", delivery: "中", pick: false },
    { name: "启用备选线束/注塑厂", cost: "中", stock: "中", shortage: "低", delivery: "低", pick: true },
  ],
  options: ["等待原厂复工", "空运加急赶工", "启用备选线束厂", "启用第二注塑厂", "上调齐套库存", "战略客户插单"],
  optionSims: {
    等待原厂复工: { cost: "低", stock: "低", shortage: "高", delivery: "高", pick: false },
    空运加急赶工: { cost: "高", stock: "中", shortage: "中", delivery: "中", pick: false },
    启用备选线束厂: { cost: "中", stock: "中", shortage: "低", delivery: "低", pick: true },
    启用第二注塑厂: { cost: "中", stock: "中", shortage: "低", delivery: "低", pick: true },
    上调齐套库存: { cost: "中", stock: "高", shortage: "低", delivery: "低", pick: false },
    战略客户插单: { cost: "低", stock: "低", shortage: "中", delivery: "中", pick: false },
  },
  baselineSim: { name: "不行动（坐等复工）", cost: "低", stock: "低", shortage: "高", delivery: "高", pick: false },
  defaultOptions: ["启用备选线束厂", "启用第二注塑厂"],
  advice: "建议：当周启用惠州备选线束与东莞第二注塑，并给战略客户订单插单保护。",
  actions: [
    { who: "东莞联创线缆", text: "确认复工日期、积压订单与可加急批次。" },
    { who: "惠州备选线束厂", text: "启动小批量打样与本周交付承诺。" },
    { who: "中山精工注塑", text: "确认模具是否损坏，评估外发至第二注塑厂。" },
    { who: "计划部门", text: "按齐套缺口重排 GW-300 产线，避免半成品积压。" },
    { who: "采购经理", text: "将线束/外壳安全库存上调至 20 天。" },
  ],
};

export const RISK_PORT: RiskFlow = {
  title: "红海危机致亚欧航线绕行 · 宁波港船期延误",
  time: "2023 末～2024 持续",
  place: "红海 / 苏伊士航线 → 绕行好望角",
  area: "亚欧航线航程增加，运价上升，宁波舟山港欧洲线 ETA 后移",
  companies: "欧洲原厂连接器/精密阻容进口订单（经宁波港）",
  notice: "多家船公司公开宣布绕行好望角，亚欧航线普遍延误 1～3 周",
  sources: "航运公会通报 / 宁波舟山港动态 / 国际航运新闻",
  status: "绕行仍在持续，需滚动更新 ETA",
  facts: [
    "红海安全风险导致多家班轮公司绕行好望角，亚欧航线时效拉长。",
    "宁波舟山港相关欧洲线到港延误常见 1～3 周（公开航运信息）。",
    "华远智造有 7 笔进口连接器/阻容订单依赖该航线。",
  ],
  inferences: [
    "TE Connectivity / Molex 类连接器到货推迟，可能挤压 EC-200 安全库存。",
    "可评估空运加急、近洋枢纽中转，或提高关键料号安全库存。",
    "与台风不同：冲击点在进口物流，不在华南工厂停工。",
  ],
  chain: [
    { id: "e", label: "红海绕行", sub: "亚欧航线", detail: "已确认事实 · 航运公告" },
    { id: "r", label: "好望角航线", sub: "航程 +10～14 天", detail: "运价与船期双升" },
    { id: "f", label: "宁波舟山港", sub: "欧洲线到港", detail: "ETA 后移 1～3 周" },
    { id: "s", label: "进口代理 / 原厂", sub: "连接器订单", detail: "7 笔在途 PO" },
    { id: "m", label: "精密连接器", sub: "EC-200 关键料", detail: "国产替代需认证" },
    { id: "p", label: "EC-200", sub: "边缘控制器", detail: "缺连接器无法齐套" },
  ],
  nodes: {
    e: { company: "班轮公司公告", addr: "红海航线", capacity: "—", cycle: "绕行持续中", volume: "—", history: "2023 末起", alt: "—", stock: "—" },
    r: { company: "好望角绕行路径", addr: "亚欧远洋", capacity: "舱位紧张", cycle: "+10～14 天航程", volume: "运价上行", history: "苏伊士常态替代", alt: "空运 / 中欧班列（部分）", stock: "—" },
    f: { company: "宁波舟山港", addr: "浙江宁波", capacity: "欧洲线枢纽", cycle: "清关 2～4 天", volume: "—", history: "拥堵偶发", alt: "上海港分流", stock: "—" },
    s: { company: "进口代理 + 欧洲原厂", addr: "德/意出口港 → 宁波", capacity: "7 笔在途", cycle: "原 35 天 → 现 45～55 天", volume: "年进口 ¥860 万", history: "既往准点率高", alt: "香港拆单空运", stock: "在途约 8 天用量" },
    m: { company: "板对板连接器等", addr: "EC-200 BOM", capacity: "国产替代认证中", cycle: "认证 60 天", volume: "单台 6～8 个", history: "质量要求高", alt: "国内二三线品牌送样", stock: "企业库存 16 天" },
    p: { company: "EC-200 边缘控制器", addr: "深圳组装", capacity: "日产约 180 台", cycle: "齐套敏感", volume: "在手订单 46 天", history: "曾空运救急一次", alt: "调整选配减少连接器用量", stock: "成品 10 天" },
  },
  impacts: [
    { label: "受影响采购订单", value: "7笔" },
    { label: "受影响供应商", value: "3家（原厂/代理）" },
    { label: "受影响物料", value: "连接器等 9 种" },
    { label: "受影响产品", value: "EC-200 为主" },
    { label: "船期延误", value: "1～3周" },
    { label: "当前库存覆盖", value: "16天" },
    { label: "空运救急成本", value: "约 +¥28万" },
    { label: "缺料风险", value: "中高", warn: true },
  ],
  judgment: "红海绕行拉长进口交期；若库存降至 10 天以下，应立即启动空运救急与国产连接器并行认证。",
  sims: [
    { name: "继续等船", cost: "低", stock: "低", shortage: "高", delivery: "高", pick: false },
    { name: "部分空运救急", cost: "高", stock: "中", shortage: "中", delivery: "中", pick: true },
    { name: "全面切换国产连接器", cost: "中", stock: "中", shortage: "低", delivery: "中", pick: false },
  ],
  options: ["继续等船到港", "关键料号空运", "亚太仓调货", "国产连接器认证", "上调安全库存", "调整选配降用量"],
  optionSims: {
    继续等船到港: { cost: "低", stock: "低", shortage: "高", delivery: "高", pick: false },
    关键料号空运: { cost: "高", stock: "中", shortage: "中", delivery: "中", pick: true },
    亚太仓调货: { cost: "中", stock: "中", shortage: "中", delivery: "中", pick: false },
    国产连接器认证: { cost: "中", stock: "中", shortage: "低", delivery: "中", pick: true },
    上调安全库存: { cost: "中", stock: "高", shortage: "低", delivery: "低", pick: false },
    调整选配降用量: { cost: "低", stock: "低", shortage: "中", delivery: "中", pick: false },
  },
  baselineSim: { name: "不行动（继续等船）", cost: "低", stock: "低", shortage: "高", delivery: "高", pick: false },
  defaultOptions: ["关键料号空运", "国产连接器认证"],
  advice: "建议：对缺口最大的 3 个料号空运救急，同时加快国产连接器认证，避免反复高成本空运。",
  actions: [
    { who: "货运代理", text: "更新 7 笔订单 ETA，并报价空运救急方案。" },
    { who: "欧洲原厂 / 代理", text: "确认是否可从亚太仓调货缩短路径。" },
    { who: "研发", text: "加速国产板对板连接器兼容性与可靠性测试。" },
    { who: "计划部门", text: "按连接器齐套情况调整 EC-200 周计划。" },
    { who: "采购经理", text: "将关键进口连接器安全库存上调至 30 天。" },
  ],
};

export const RISK_EXPERT = {
  name: "专家策略 V1.2",
  rules: [
    "铜价 20 日涨幅 > 5%",
    "库存 < 30 天",
    "未来 60 天采购需求较高",
    "精矿 TC/RC 持续偏弱（供应紧张信号）",
  ],
  result: "采购风险 = 高 → 建议提前锁定部分铜材需求",
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
  ],
};

export const RISK_LIGHT: Record<string, { title: string; facts: string[]; inferences: string[]; impact: string }> = {
  flood: {
    title: "2024-09 超强台风「摩羯」冲击华南",
    facts: [
      "「摩羯」为近年登陆华南的强台风之一，海南、广东多地停工停运（公开报道）。",
      "珠三角部分电子制造与仓储物流临时中断。",
    ],
    inferences: [
      "华远智造线束供应商「东莞联创线缆」、结构件供应商「中山精工注塑」可能出现 3～7 天交付延误。",
      "影响物料：网关外壳、RJ45 座子线束，不直接冲击 RTL8211F 晶圆，但影响整机组装节拍。",
    ],
    impact: "完整穿透演示请走场景 A（台湾地震 → 台积电 → PHY）；本事件展示自然灾害对华南组装链的扰动。",
  },
  port: {
    title: "红海危机（2023 末～2024）致亚欧航线绕行好望角",
    facts: [
      "多家船公司因红海安全风险绕行好望角，亚欧航线航程与运价上升（公开航运报道）。",
      "宁波舟山港相关欧洲线船期普遍延误 1～3 周。",
    ],
    inferences: [
      "华远智造 7 笔进口阻容/连接器订单（欧洲原厂 → 宁波港）ETA 后移。",
      "可评估改走空运加急、近洋枢纽中转或提高安全库存。",
    ],
    impact: "完整决策演示请走场景 A / C；本事件展示物流风险入口。",
  },
};

export const RISK_NODE_DETAIL: Record<
  string,
  { company: string; addr: string; capacity: string; cycle: string; volume: string; history: string; alt: string; stock: string }
> = {
  e: {
    company: "事件源 · 公开新闻 / 交易所公告",
    addr: "台湾花莲外海",
    capacity: "—",
    cycle: "已发生 · 持续跟踪复工",
    volume: "—",
    history: "已确认事实（2024-04-03）",
    alt: "—",
    stock: "—",
  },
  r: {
    company: "新竹 / 台中科学园区",
    addr: "台湾 · 科学园区带",
    capacity: "台积电等多家半导体企业聚集",
    cycle: "震后点检与复工",
    volume: "—",
    history: "台湾半导体主产区",
    alt: "产能短期由同集团其他厂区缓冲",
    stock: "—",
  },
  f: {
    company: "台积电（TSMC）",
    addr: "新竹等地 Fab",
    capacity: "公开：3 日内全面恢复",
    cycle: "在制晶圆部分报废，Q2 追产",
    volume: "全球先进制程主要代工来源",
    history: "声明：关键设备未损、损失约 NT$30 亿",
    alt: "客户可协调其他节点产能（视产品节点）",
    stock: "晶圆厂 WIP 受冲击",
  },
  s: {
    company: "世强先进（分销商）",
    addr: "中国 · 深圳 / 上海办事处",
    capacity: "月供 RTL8211F-CG 约 8～12 万颗（配额制）",
    cycle: "正常 45 天 · 紧张期 60 天+",
    volume: "华远智造年度采购额约 ¥1,860 万",
    history: "准时率 94% · 绩效 A-",
    alt: "备选分销：文晔科技",
    stock: "渠道可用库存约 8 天用量",
  },
  m: {
    company: "RTL8211F-CG",
    addr: "千兆以太网 PHY · 瑞昱设计",
    capacity: "依赖台积电代工产能节点",
    cycle: "交期 45 天 / 换料认证 60～90 天",
    volume: "覆盖 GW-300、EC-200 等 5 款产品",
    history: "近 12 月无重大质量事故",
    alt: "候选：RTL8201FL（百兆，需降配评估）",
    stock: "企业库存 24 天 · 在途 8 天",
  },
  p: {
    company: "GW-300 工业网关 / EC-200 边缘控制器",
    addr: "深圳整机组装",
    capacity: "排产强依赖以太网 PHY",
    cycle: "客户交付窗口 30～60 天",
    volume: "关联客户订单 18 笔",
    history: "2022 曾因网卡类缺料调整过一次排产",
    alt: "可评估临时降配百兆型号保交付",
    stock: "成品安全库存 12 天",
  },
};

/** 事件流主数据：穿透 / 影响 / 模拟 / 行动均按 eventId 切换 */
export const RISK_FLOWS: Record<string, RiskFlow> = {
  quake: {
    title: RISK_QUAKE.title,
    time: RISK_QUAKE.time,
    place: RISK_QUAKE.place,
    area: RISK_QUAKE.area,
    companies: RISK_QUAKE.companies,
    notice: RISK_QUAKE.notice,
    sources: RISK_QUAKE.sources,
    status: RISK_QUAKE.status,
    facts: RISK_QUAKE.facts,
    inferences: RISK_QUAKE.inferences,
    chain: RISK_QUAKE.chain,
    nodes: RISK_NODE_DETAIL,
    impacts: RISK_QUAKE.impacts,
    judgment: "库存 24 天 < 正常供应 45 天，替代认证 60～90 天，存在实际断供风险。",
    sims: RISK_QUAKE.sims,
    advice: RISK_QUAKE.advice,
    actions: RISK_QUAKE.actions,
    options: RISK_QUAKE.options,
    optionSims: RISK_QUAKE.optionSims,
    defaultOptions: RISK_QUAKE.defaultOptions,
  },
  tariff: {
    title: RISK_TARIFF.title,
    time: RISK_TARIFF.time,
    place: RISK_TARIFF.place,
    area: RISK_TARIFF.area,
    companies: RISK_TARIFF.companies,
    notice: RISK_TARIFF.notice,
    sources: RISK_TARIFF.sources,
    status: RISK_TARIFF.status,
    facts: RISK_TARIFF.facts,
    inferences: RISK_TARIFF.inferences,
    chain: RISK_TARIFF.chain,
    nodes: RISK_TARIFF.nodes,
    impacts: RISK_TARIFF.impacts,
    judgment: RISK_TARIFF.judgment,
    sims: RISK_TARIFF.sims,
    advice: RISK_TARIFF.advice,
    actions: RISK_TARIFF.actions,
    options: RISK_TARIFF.options,
    optionSims: RISK_TARIFF.optionSims,
    baselineSim: RISK_TARIFF.baselineSim,
    defaultOptions: RISK_TARIFF.defaultOptions,
    chainText: RISK_TARIFF.chainText,
    impactText: RISK_TARIFF.impact,
  },
  flood: RISK_FLOOD,
  port: RISK_PORT,
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
