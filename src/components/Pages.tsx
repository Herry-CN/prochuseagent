import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  BOARD_COLUMNS,
  CATEGORY_ROWS,
  CERT_ROWS,
  DEMAND_ROWS,
  PERF_CHAIN,
  PERF_GRADE_RULES,
  PERF_ROWS,
  PERF_SCORE_SOURCES,
  PERF_SOURCE_DETAILS,
  gradeTone,
  type PerfGrade,
  PO_ROWS,
  PORTFOLIO_ROWS,
  SOURCE_ROWS,
  type SrmTab,
} from "../data";

function Pill({ tone, children }: { tone?: string; children: string }) {
  return <span className={`pill ${tone || ""}`}>{children}</span>;
}

export function Demand({ highlight }: { highlight?: boolean }) {
  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h2>采购需求管理</h2>
          <p>按部门归集需求，识别缺失字段、预算口径和费用责任，再生成可寻源需求单。</p>
        </div>
        <div className="head-actions">
          <button className="ghost">AI澄清</button>
          <button className="ghost">预算校验</button>
          <button className="ghost">进入寻源</button>
          <button className="primary">保存需求单</button>
        </div>
      </div>
      <div className="kpis">
        <div className="kpi"><span>待补齐</span><b>3</b></div>
        <div className="kpi"><span>可寻源</span><b>8</b></div>
        <div className="kpi"><span>预算预占</span><b>¥18.4万</b></div>
        <div className="kpi"><span>超预算</span><b>1</b></div>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>需求单与预算控制</h3>
          <span>预算预占</span>
        </div>
        <table className="data">
          <thead>
            <tr>
              <th>需求编号</th><th>部门</th><th>采购对象</th><th>预算口径</th><th>状态</th>
            </tr>
          </thead>
          <tbody>
            {DEMAND_ROWS.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.dept}</td>
                <td>{r.item}</td>
                <td>{r.budget}</td>
                <td><Pill tone={r.tone}>{r.status}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`panel${highlight ? " pulse" : ""}`}>
        <div className="panel-head">
          <h3>预算/费用管控</h3>
          <span>AI 按品类自动选择预算口径，并在提交前预占额度</span>
        </div>
        <div className="trio">
          <div className="mini">
            <h4>办公用品<em className="orange">费用预算</em></h4>
            <p>走部门办公费额度，超 5,000 元需行政负责人确认。</p>
          </div>
          <div className="mini">
            <h4>仪器设备<em>固定资产预算</em></h4>
            <p>先校验资产预算与折旧科目，未立项不得直接下单。</p>
          </div>
          <div className="mini">
            <h4>研发/生产物料<em>采购预算</em></h4>
            <p>按项目或 BOM 预算预占，需求人对数量、规格和费用负责。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Category({
  highlight,
  onHome,
}: {
  highlight?: "验收" | "规则" | null;
  onHome?: () => void;
}) {
  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h2>品类与物料库</h2>
          <p>把口语化物品归入标准品类，维护参数、质量标准和常用供应商池。</p>
        </div>
        <div className="head-actions">
          <button className="ghost">重新归类</button>
          <button className="ghost">验收标准</button>
          <button className="ghost">品类规则</button>
          <button className="primary" onClick={onHome}>返回需求助手</button>
        </div>
      </div>
      <div className="kpis">
        <div className="kpi"><span>标准品类</span><b>126</b></div>
        <div className="kpi"><span>常用物料</span><b>482</b></div>
        <div className="kpi"><span>待清洗</span><b>18</b></div>
        <div className="kpi"><span>规则覆盖</span><b>82%</b></div>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>品类选型与标准化</h3>
          <span>办公用品 / 工控电机</span>
        </div>
        <table className="data">
          <thead>
            <tr>
              <th>品类/SKU</th><th>名称</th><th>关键参数</th><th>供应策略</th>
            </tr>
          </thead>
          <tbody>
            {CATEGORY_ROWS.map((r) => (
              <tr key={r.sku}>
                <td>{r.sku}</td>
                <td>{r.name}</td>
                <td className={r.tone === "ok" ? "spec-ok" : ""}>{r.spec}</td>
                <td><Pill tone={r.tone}>{r.strategy}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={`panel${highlight === "验收" ? " pulse" : ""}`} id="accept-sec">
        <div className="panel-head">
          <h3>验收标准模板</h3>
          <span>不同品类自动带出验收口径，避免“买到了但无法判定合格”</span>
        </div>
        <div className="trio">
          <div className="mini">
            <h4>办公用品<em>到货数量 + 外观抽检</em></h4>
            <p>核对品牌/规格/数量，破损率超 1% 触发退换货。</p>
          </div>
          <div className="mini">
            <h4>研发/生产物料<em>技术参数 + 样品测试</em></h4>
            <p>核验功率、扭矩、防护等级、认证文件，测试通过后才允许入合格物料池。</p>
          </div>
          <div className="mini">
            <h4>服务采购<em>SOW 交付物验收</em></h4>
            <p>按照片/视频、拒赔/搭建清单或服务事项验收，验收人签字后进入付款。</p>
          </div>
        </div>
      </div>
      <div className={`panel${highlight === "规则" ? " pulse" : ""}`} id="rule-sec">
        <div className="panel-head">
          <h3>品类治理规则</h3>
          <span>先做规则分类，再决定预算、验收、供应商和寻源策略</span>
        </div>
        <div className="trio">
          <div className="mini">
            <h4>品类划分<em>行政/研发/生产/服务/IT</em></h4>
            <p>AI 先分类再挂预算、验收、供应商和寻源策略规则。</p>
          </div>
          <div className="mini">
            <h4>供应商划分<em>合格库 / 候选池 / 黑名单</em></h4>
            <p>按准入、合同、绩效和风险状态决定是否可被推荐。</p>
          </div>
          <div className="mini">
            <h4>项目采购策略<em>金额 + 风险 + 交付紧急度</em></h4>
            <p>自动分流协议价、三方询价、谈判或招投标。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SRM({ tab, onTab }: { tab: SrmTab; onTab: (t: SrmTab) => void }) {
  const tabs: SrmTab[] = ["寻源任务", "供应商认证", "绩效评价", "供应商组合"];
  const [sourceDetailId, setSourceDetailId] = useState<string | null>(null);
  const [perfActionName, setPerfActionName] = useState<string | null>(null);
  const [doneActions, setDoneActions] = useState<Record<string, boolean>>({});
  const sourceDetail = sourceDetailId ? PERF_SOURCE_DETAILS[sourceDetailId] : null;
  const perfAction = PERF_ROWS.find((r) => r.name === perfActionName) || null;
  const contentRef = useRef<HTMLDivElement>(null);
  const savedScrollRef = useRef(0);

  useEffect(() => {
    if (tab !== "绩效评价") {
      setSourceDetailId(null);
      setPerfActionName(null);
    }
  }, [tab]);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (sourceDetailId || perfActionName) {
      el.scrollTop = 0;
    } else {
      el.scrollTop = savedScrollRef.current;
    }
  }, [sourceDetailId, perfActionName]);

  const rememberScroll = () => {
    if (contentRef.current) savedScrollRef.current = contentRef.current.scrollTop;
  };

  const openSourceDetail = (id: string) => {
    rememberScroll();
    setPerfActionName(null);
    setSourceDetailId(id);
  };

  const openPerfAction = (name: string) => {
    rememberScroll();
    setSourceDetailId(null);
    setDoneActions({});
    setPerfActionName(name);
  };

  const backToPerfList = () => {
    setSourceDetailId(null);
    setPerfActionName(null);
  };

  return (
    <div className="content" ref={contentRef}>
      <div className="page-head">
        <div>
          <h2>SRM 供应商管理</h2>
          <p>供应商寻源、认证、绩效评价和组合管理，支撑采购自动分支。</p>
        </div>
        <div className="head-actions">
          <button className="ghost">发起寻源</button>
          <button className="ghost">认证准入</button>
          <button className="ghost">考察清单</button>
          <button className="ghost">选择策略</button>
          <button className="ghost">绩效标准</button>
          <button className="primary">发起寻源</button>
        </div>
      </div>
      <div className="kpis">
        <div className="kpi"><span>合格供应商</span><b>42</b></div>
        <div className="kpi"><span>寻源任务</span><b>3</b></div>
        <div className="kpi"><span>待认证</span><b>11</b></div>
        <div className="kpi"><span>本月验证</span><b>19</b></div>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>
            {tab === "寻源任务" && "寻源任务与选择策略"}
            {tab === "供应商认证" && "认证与准入"}
            {tab === "绩效评价" && (sourceDetail ? "数据来源明细" : perfAction ? "绩效策略动作" : "绩效评价与反馈")}
            {tab === "供应商组合" && "供应商组合"}
          </h3>
          <span>
            {tab === "寻源任务" && "策略分流"}
            {tab === "供应商认证" && "待回访"}
            {tab === "绩效评价" && "等级回写"}
            {tab === "供应商组合" && "主备策略"}
          </span>
        </div>
        <div className="tabs">
          {tabs.map((t) => (
            <button key={t} className={`tab${tab === t ? " active" : ""}`} onClick={() => onTab(t)}>
              {t}
            </button>
          ))}
        </div>
        {tab === "寻源任务" && (
          <>
            <table className="data">
              <thead>
                <tr>
                  <th>任务编号</th><th>需求描述</th><th>品类</th><th>选择方式</th><th>进度</th>
                </tr>
              </thead>
              <tbody>
                {SOURCE_ROWS.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td><td>{r.desc}</td><td>{r.cat}</td><td>{r.method}</td>
                    <td><Pill tone={r.tone}>{r.status}</Pill></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="note">
              当前演示重点：当供应商资源池没有匹配供应商时，系统自动分支进入 sourcing，并把需求数量、交期、质量标准、供应商资质要求带入寻源任务。
            </div>
            <div className="panel-head" style={{ marginTop: 16 }}>
              <h3>采购选择策略</h3>
              <span>AI 根据品类、金额、风险和资源池状态选择处理方式</span>
            </div>
            <div className="trio">
              <div className="mini">
                <h4>协议价刷新<em>常用低风险品类</em></h4>
                <p>复印纸、文具等定期刷新价格，优先沿用合格供应商。</p>
              </div>
              <div className="mini">
                <h4>三方询价/比价<em>标准物料或可替代品</em></h4>
                <p>自动比价格、交期、质保、资质，不只按最低价推荐。</p>
              </div>
              <div className="mini">
                <h4>招投标/谈判<em>高金额或服务类项目</em></h4>
                <p>进入招投标、谈判或 SOW 评审，保留过程记录和决策依据。</p>
              </div>
            </div>
          </>
        )}
        {tab === "供应商认证" && (
          <>
            <table className="data">
              <thead>
                <tr>
                  <th>供应商</th><th>联系人</th><th>资质文件</th><th>准入结论</th><th>动作</th>
                </tr>
              </thead>
              <tbody>
                {CERT_ROWS.map((r) => (
                  <tr key={r.name}>
                    <td>{r.name}</td><td>{r.contact}</td><td>{r.cert}</td>
                    <td><Pill tone={r.tone}>{r.result}</Pill></td>
                    <td><button className="linkish">{r.action}</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="note">每一次准入都会保存联系方式、资质文件、规模能力和验证结论，避免下次重复确认联系人和联系方式。</div>
            <div className="panel-head" style={{ marginTop: 16 }}>
              <h3>供应商考察 Checklist</h3>
              <span>新供应商必须完成准入检查，合格后才能进入资源池</span>
            </div>
            <div className="trio">
              <div className="mini">
                <h4>联系人验证<em>电话、邮箱、收件地址</em></h4>
                <p>确认真实联系人和交付地址，失败则不得入池。</p>
              </div>
              <div className="mini">
                <h4>资质文件<em>营业执照、ISO、授权证明</em></h4>
                <p>按品类强制收集证照，过期或缺失自动拦截。</p>
              </div>
              <div className="mini">
                <h4>能力与风险<em>产能、账期、历史履约</em></h4>
                <p>通过后进入候选池；签约后进入合格供应商资源池。</p>
              </div>
            </div>
          </>
        )}
        {tab === "绩效评价" && sourceDetail && (
          <>
            <div className="source-detail-head">
              <button type="button" className="primary source-back-btn" onClick={backToPerfList}>
                ← 返回数据来源
              </button>
              <div className="source-detail-title">
                <span className="ai-badge">{sourceDetail.cap}</span>
                <div>
                  <h3>{sourceDetail.metricTitle} · {sourceDetail.system}</h3>
                  <p>仿真明细：演示 AI 自动抽取后回写至「{sourceDetail.metricTitle}」</p>
                </div>
              </div>
            </div>
            <div className="source-pipeline">
              {sourceDetail.pipeline.map((step, i) => (
                <div className="source-pipeline-step" key={step}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <div className="kpis risk-kpis">
              {sourceDetail.summary.map((s) => (
                <div className="kpi" key={s.label}><span>{s.label}</span><b>{s.value}</b></div>
              ))}
            </div>
            <table className="data">
              <thead>
                <tr>
                  {sourceDetail.columns.map((c) => <th key={c}>{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {sourceDetail.rows.map((row, i) => (
                  <tr key={`${sourceDetail.id}-${i}`}>
                    {row.map((cell, j) => <td key={`${i}-${j}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="note">
              <span className="ai-badge">回写指标</span>
              &nbsp;{sourceDetail.note}
            </div>
          </>
        )}
        {tab === "绩效评价" && perfAction && !sourceDetail && (
          <>
            <div className="source-detail-head">
              <button type="button" className="primary source-back-btn" onClick={backToPerfList}>
                ← 返回绩效列表
              </button>
              <div className="source-detail-title">
                <span className={`pill ${gradeTone(perfAction.grade as PerfGrade)}`}>
                  {perfAction.grade} · {perfAction.gradeLabel}
                </span>
                <div>
                  <h3>{perfAction.name} · 综合分 {perfAction.total}</h3>
                  <p>按 A/B/C/D 分级规则自动生成处理策略，并进入下一步动作</p>
                </div>
              </div>
            </div>
            <div className="perf-grade-cards">
              <div className="perf-grade-card">
                <span>份额策略</span>
                <b>{perfAction.share}</b>
              </div>
              <div className="perf-grade-card">
                <span>商务与合作待遇</span>
                <b>{perfAction.treatment}</b>
              </div>
              <div className="perf-grade-card">
                <span>改进要求</span>
                <b>{perfAction.improve}</b>
              </div>
            </div>
            <div className="note">
              <span className="ai-badge">自动策略</span>
              &nbsp;{perfAction.strategy}。{perfAction.note}
            </div>
            <div className="panel-head" style={{ marginTop: 8 }}>
              <h3>下一步动作</h3>
              <span>按策略自动拆分执行任务</span>
            </div>
            <div className="action-list">
              {perfAction.actions.map((a, i) => {
                const key = `${perfAction.name}-${i}`;
                const done = Boolean(doneActions[key]);
                return (
                  <div className="action-item" key={key}>
                    <em>动作 {i + 1}</em>
                    <b>{a.who}</b>
                    <p>{a.text}</p>
                    <button
                      type="button"
                      className={done ? "ghost" : "table-btn"}
                      style={{ marginTop: 8 }}
                      onClick={() => setDoneActions((prev) => ({ ...prev, [key]: true }))}
                    >
                      {done ? "已执行 ✓" : "执行 →"}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="note">份额调整比例与整改周期为示例规则，正式发布后写入《供应商绩效管理制度》强制执行。</div>
          </>
        )}
        {tab === "绩效评价" && !sourceDetail && !perfAction && (
          <>
            <div className="perf-grade-legend">
              {(Object.keys(PERF_GRADE_RULES) as PerfGrade[]).map((g) => {
                const rule = PERF_GRADE_RULES[g];
                return (
                  <div className={`perf-legend-item tone-${g}`} key={g}>
                    <b>{g} · {rule.label}</b>
                    <span>{rule.range}</span>
                    <p>{rule.strategy}</p>
                  </div>
                );
              })}
            </div>
            <table className="data">
              <thead>
                <tr>
                  <th>供应商</th>
                  <th>交期打分</th>
                  <th>质量打分</th>
                  <th>成本打分</th>
                  <th>研发项目打分</th>
                  <th>售后打分</th>
                  <th>综合分</th>
                  <th>等级</th>
                  <th>自动策略</th>
                  <th>下一步</th>
                </tr>
              </thead>
              <tbody>
                {PERF_ROWS.map((r) => (
                  <tr key={r.name}>
                    <td>
                      <div>{r.name}</div>
                      <div className="score-raw">{r.category}</div>
                    </td>
                    <td>
                      <span className="score-num">{r.ontime}</span>
                      <div className="score-raw">准时率 {r.ontimeRaw}</div>
                    </td>
                    <td>
                      <span className="score-num">{r.quality}</span>
                      <div className="score-raw">合格率 {r.qualityRaw}</div>
                    </td>
                    <td><span className="score-num">{r.cost}</span></td>
                    <td><span className="score-num">{r.rd}</span></td>
                    <td><span className="score-num">{r.afterSales}</span></td>
                    <td><span className="score-num">{r.total}</span></td>
                    <td>
                      <Pill tone={gradeTone(r.grade)}>{`${r.grade} · ${r.gradeLabel}`}</Pill>
                    </td>
                    <td>
                      {r.strategy}
                      <div className="score-raw">按分数自动生成</div>
                    </td>
                    <td>
                      <button type="button" className="table-btn" onClick={() => openPerfAction(r.name)}>
                        进入动作 →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="note">
              综合分按五维加权；分级规则：A ≥90 卓越，B 80–89 良好，C 70–79 待改进，D &lt;70 不合格。等级自动映射份额策略、商务待遇与改进要求，并可进入下一步动作。
            </div>

            <div className="panel-head" style={{ marginTop: 16 }}>
              <h3>绩效分级规则 · 分数直接对应管理动作</h3>
              <span>示例规则，正式发布后写入制度强制执行</span>
            </div>
            <table className="data">
              <thead>
                <tr>
                  <th>等级</th>
                  <th>分数区间</th>
                  <th>份额策略</th>
                  <th>商务与合作待遇</th>
                  <th>改进要求</th>
                </tr>
              </thead>
              <tbody>
                {(Object.keys(PERF_GRADE_RULES) as PerfGrade[]).map((g) => {
                  const rule = PERF_GRADE_RULES[g];
                  return (
                    <tr key={g}>
                      <td><Pill tone={gradeTone(g)}>{`${g} · ${rule.label}`}</Pill></td>
                      <td>{rule.range}</td>
                      <td>{rule.share}</td>
                      <td>{rule.treatment}</td>
                      <td>{rule.improve}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="note">
              份额调整比例与整改周期为示例规则，正式写入《供应商绩效管理制度》后强制执行，不因个案协商改变。
            </div>

            <div className="panel-head" style={{ marginTop: 16 }}>
              <h3>全链路动态评估</h3>
              <span className="ai-inline">换算与回写</span>
            </div>
            <div className="perf-chain">
              {PERF_CHAIN.map((c) => (
                <div className={`perf-chain-item${c.ai ? " ai" : ""}`} key={c.step}>
                  <div className="perf-chain-step">{c.step}</div>
                  <b>{c.title}</b>
                  <span>{c.metric}</span>
                  <p>{c.tip}</p>
                </div>
              ))}
            </div>

            <div className="panel-head" style={{ marginTop: 16 }}>
              <h3>数据来源与换算</h3>
              <span className="ai-inline">点击下方数据来源查看 AI 抽取明细</span>
            </div>
            <div className="source-grid">
              {PERF_SCORE_SOURCES.map((block) => (
                <div className={`source-card${block.ai ? " ai" : ""}`} key={block.key}>
                  <div className="source-card-head">
                    <h4>{block.title}</h4>
                    <span className="chip">{block.weight}</span>
                  </div>
                  <div className="cap-row">
                    {block.caps.map((c) => (
                      <span className="cap-tag" key={c}>{c}</span>
                    ))}
                  </div>
                  <p className="source-desc">{block.desc}</p>
                  <div className="source-map">{block.map}</div>
                  <div className="diff-box">
                    <div className="diff-trad">{block.traditional}</div>
                    <div className="diff-ai">{block.aiDiff}</div>
                  </div>
                  <div className="metric-row">
                    {block.metrics.map((m) => (
                      <span className="metric-chip" key={m}>{m}</span>
                    ))}
                  </div>
                  <div className="source-label">
                    {block.raw === "准时率" || block.raw === "质量合格率"
                      ? `${block.raw} 数据来源 · 可下钻`
                      : "模型建议数据来源 · 可下钻"}
                  </div>
                  <ul className="source-list">
                    {block.sources.map((s) => (
                      <li key={s.id}>
                        <button
                          type="button"
                          className="source-link"
                          onClick={() => openSourceDetail(s.id)}
                        >
                          <span className="source-link-main">
                            <b>{s.system}</b>
                            <span>{s.field}</span>
                          </span>
                          <span className="source-link-go">
                            <em className="cap-tag">{s.cap}</em>
                            明细 →
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
        {tab === "供应商组合" && (
          <>
            <table className="data">
              <thead>
                <tr>
                  <th>组合名称</th><th>主供应商</th><th>备份供应商</th><th>状态</th>
                </tr>
              </thead>
              <tbody>
                {PORTFOLIO_ROWS.map((r) => (
                  <tr key={r.name}>
                    <td>{r.name}</td><td>{r.primary}</td><td>{r.backup}</td>
                    <td><Pill tone={r.tone}>{r.status}</Pill></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="note">合格库作为主供，候选池作为备份，黑名单供应商不得进入任何组合。</div>
          </>
        )}
      </div>
    </div>
  );
}

export function Purchase({ highlight }: { highlight?: boolean }) {
  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h2>采购执行</h2>
          <p>从需求确认进入合同/PO、到货验收、付款和逆向跟踪。</p>
        </div>
        <div className="head-actions">
          <button className="ghost">三单匹配</button>
          <button className="ghost">履约跟踪</button>
          <button className="ghost">合同模板</button>
          <button className="ghost">标准 PO</button>
          <button className="primary">生成采购单</button>
        </div>
      </div>
      <div className="kpis">
        <div className="kpi"><span>待下单</span><b>4</b></div>
        <div className="kpi"><span>执行中</span><b>12</b></div>
        <div className="kpi"><span>待验收</span><b>6</b></div>
        <div className="kpi"><span>合同待审</span><b>2</b></div>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>合同与 PO 执行</h3>
          <span>标准传递</span>
        </div>
        <table className="data">
          <thead>
            <tr>
              <th>订单号</th><th>供应商</th><th>金额</th><th>合同/PO</th><th>状态</th>
            </tr>
          </thead>
          <tbody>
            {PO_ROWS.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td><td>{r.supplier}</td><td>{r.amount}</td><td>{r.type}</td>
                <td><Pill tone={r.tone}>{r.status}</Pill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>合同 / PO 标准化</h3>
          <span>供应商正式接单前，合同条款和 PO 字段必须完整传递</span>
        </div>
        <div className="trio">
          <div className="mini">
            <h4>合同模板<em>服务/设备采购先套模板</em></h4>
            <p>自动带入付款条款、交付条款、验收条款、违约条款。</p>
          </div>
          <div className="mini">
            <h4>标准 PO 字段<em>价格、送货地点、物料编码</em></h4>
            <p>PO 传递给供应商前校验物料名、数量、交期、验收人、联系方式。</p>
          </div>
          <div className="mini">
            <h4>合规归档<em>合同签订后供应商入池</em></h4>
            <p>签订合同并完成入库后，供应商和物料才进入可用资源池。</p>
          </div>
        </div>
      </div>
      <div className={`panel${highlight ? " pulse" : ""}`}>
        <div className="panel-head">
          <h3>履约跟踪与三单匹配</h3>
          <span>PO 发出后持续跟踪发货、验收、入库、发票和付款</span>
        </div>
        <div className="trio">
          <div className="mini">
            <h4>发货/到货<em>交期跟踪 + 到货签收</em></h4>
            <p>供应商确认交期后跟踪发货、物流、到货，逾期自动预警。</p>
          </div>
          <div className="mini">
            <h4>验收/入库<em>验收人确认 + 异常闭环</em></h4>
            <p>按 PO 验收人、质量标准和数量完成验收，异常进入退换货或索赔。</p>
          </div>
          <div className="mini">
            <h4>三单匹配<em>PO / 收货单 / 发票</em></h4>
            <p>金额、数量、税率一致后进入付款；不一致自动阻断。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Board() {
  return (
    <div className="content" style={{ overflowX: "auto" }}>
      <div className="page-head">
        <div>
          <h2>采购看板</h2>
          <p>从需求澄清到付款的全链路可视化，规则状态一目了然。</p>
        </div>
      </div>
      <div className="board">
        {BOARD_COLUMNS.map((col) => (
          <div className="col" key={col.title}>
            <h3>
              {col.title}
              <em>{col.cards.length}</em>
            </h3>
            {col.cards.map((c) => (
              <div className="bcard" key={c.title}>
                <b>{c.title}</b>
                <Pill tone="warn">{c.tag}</Pill>
                <div style={{ marginTop: 6 }}>
                  <span>{c.dept}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
