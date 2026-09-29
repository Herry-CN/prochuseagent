import { useMemo, useState } from "react";
import {
  RISK_AGENTS,
  RISK_COPPER,
  RISK_EVENTS,
  RISK_EXPERT,
  RISK_LIGHT,
  RISK_NODE_DETAIL,
  RISK_QUAKE,
  RISK_STEPS,
  RISK_TARIFF,
  type RiskStep,
} from "../riskData";

function LevelPill({ level, tone }: { level: string; tone: "high" | "mid" | "low" }) {
  return <span className={`pill ${tone === "high" ? "bad" : tone === "mid" ? "warn" : "ok"}`}>{level}</span>;
}

export function RiskPage({ onToast }: { onToast: (title: string, desc: string) => void }) {
  const [eventId, setEventId] = useState("quake");
  const [step, setStep] = useState<RiskStep>("cockpit");
  const [nodeId, setNodeId] = useState(RISK_QUAKE.chain[0].id);
  const [analyzing, setAnalyzing] = useState(false);

  const selected = useMemo(() => RISK_EVENTS.find((e) => e.id === eventId) || RISK_EVENTS[0], [eventId]);
  const node = RISK_QUAKE.chain.find((n) => n.id === nodeId) || RISK_QUAKE.chain[0];
  const stepIndex = RISK_STEPS.findIndex((s) => s.key === step);

  const goAnalyze = () => {
    if (eventId === "copper") {
      setStep("copper");
      onToast("行情风险", "已切换铜价趋势分析：行情 + 库存 + 专家策略 + 情景模拟。");
      return;
    }
    if (eventId === "tariff") {
      setStep("detail");
      onToast("政策风险", "已映射关税 → HS Code → 供应商 → 采购订单成本变化。");
      return;
    }
    if (eventId === "flood" || eventId === "port") {
      setStep("detail");
      onToast("风险感知", "已记录事件事实与 AI 推断；完整穿透演示请走场景 A（地震）。");
      return;
    }
    setAnalyzing(true);
    onToast("供应链映射", "AI 正在把外部事件映射到企业供应商、物料、BOM 与库存。");
    setTimeout(() => {
      setAnalyzing(false);
      setStep("detail");
      onToast("关联完成", "发现 3 家供应商、2 家工厂、14 种物料、5 款产品受潜在影响。");
    }, 900);
  };

  const next = () => {
    const order: RiskStep[] = ["detail", "map", "impact", "simulate", "action"];
    const i = order.indexOf(step);
    if (i >= 0 && i < order.length - 1) setStep(order[i + 1]);
  };

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h2>AI采购风险情报与决策</h2>
          <p>
            不是预测世界会发生什么，而是告诉企业：世界变化之后，对你的供应链意味着什么，以及现在应该做什么。
          </p>
        </div>
        <div className="head-actions">
          <button className="ghost" onClick={() => { setStep("cockpit"); setEventId("quake"); }}>
            返回驾驶舱
          </button>
          <button className="primary" onClick={goAnalyze}>
            分析与我的供应链关系
          </button>
        </div>
      </div>

      <div className="ai-calls">
        {RISK_AGENTS.map((a) => (
          <div className="ai-call" key={a.name}>
            <span className="ai-badge">AI Agent</span>
            <div>
              <b>{a.name}</b>
              <p>{a.task}</p>
            </div>
          </div>
        ))}
      </div>

      {step !== "cockpit" && step !== "copper" && (
        <div className="risk-steps">
          {RISK_STEPS.filter((s) => s.key !== "cockpit").map((s, i) => (
            <button
              key={s.key}
              className={`risk-step${step === s.key ? " on" : ""}${i < stepIndex - 1 ? " done" : ""}`}
              onClick={() => setStep(s.key)}
            >
              <em>{i + 1}</em>
              {s.label}
            </button>
          ))}
        </div>
      )}

      {analyzing && (
        <div className="risk-analyzing">
          <span className="ai-badge">AI 调用</span>
          风险感知 → 事件识别 → 供应链映射 → 影响评估…
        </div>
      )}

      {step === "cockpit" && (
        <div className="panel">
          <div className="panel-head">
            <h3>全球采购风险驾驶舱 · 今日风险</h3>
            <span className="ai-inline">AI 调用 · 风险感知</span>
          </div>
          <table className="data">
            <thead>
              <tr>
                <th>风险事件</th>
                <th>类型</th>
                <th>企业关联</th>
                <th>风险等级</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {RISK_EVENTS.map((e) => (
                <tr key={e.id} className={eventId === e.id ? "row-on" : ""}>
                  <td>{e.title}</td>
                  <td>{e.type}</td>
                  <td>{e.link}</td>
                  <td><LevelPill level={e.level} tone={e.tone} /></td>
                  <td>
                    <button
                      className="linkish"
                      onClick={() => {
                        setEventId(e.id);
                        if (e.id === "copper") setStep("copper");
                        else {
                          setStep("detail");
                          onToast("事件选中", `已进入「${e.title}」详情，可继续分析供应链关系。`);
                        }
                      }}
                    >
                      查看 →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            核心闭环：全球风险感知 → 企业供应链映射 → 风险传导分析 → 影响量化 → 情景模拟 → 采购决策 → 执行动作 → 结果回测。
            请选择事件后点击「分析与我的供应链关系」。当前选中：<b>{selected.title}</b>
          </div>
          <div className="risk-scene-cards">
            <button className="risk-scene" onClick={() => { setEventId("quake"); setStep("detail"); }}>
              <span className="ai-badge">场景 A</span>
              <b>突发事件 · IC 工厂地震</b>
              <p>新闻 → 工厂 → 供应商 → IC → BOM → 产品 → 库存 → 断供风险</p>
            </button>
            <button className="risk-scene" onClick={() => { setEventId("tariff"); setStep("detail"); }}>
              <span className="ai-badge">场景 B</span>
              <b>政策变化 · 关税上调</b>
              <p>政策 → HS Code → 供应商 → 采购订单 → 成本 → 替代策略</p>
            </button>
            <button className="risk-scene" onClick={() => { setEventId("copper"); setStep("copper"); }}>
              <span className="ai-badge">场景 C</span>
              <b>原材料行情 · 铜价上涨</b>
              <p>行情 → AI/专家 → 需求库存 → 情景模拟 → 提前采购建议</p>
            </button>
          </div>
        </div>
      )}

      {step === "detail" && eventId !== "copper" && (
        <div className="panel">
          <div className="panel-head">
            <h3>
              风险事件详情 ·{" "}
              {eventId === "tariff"
                ? RISK_TARIFF.title
                : eventId === "flood" || eventId === "port"
                  ? RISK_LIGHT[eventId].title
                  : RISK_QUAKE.title}
            </h3>
            <span className="ai-inline">事实 / AI 推断分开标注</span>
          </div>
          {eventId === "tariff" ? (
            <>
              <div className="source-map">{RISK_TARIFF.chain}</div>
              <p className="source-desc">{RISK_TARIFF.impact}</p>
              <div className="metric-row">
                {RISK_TARIFF.options.map((o) => (
                  <span className="metric-chip" key={o}>{o}</span>
                ))}
              </div>
              <div className="note">建议继续进入供应链穿透与策略模拟，比较替代供应商与提前进口方案。</div>
              <div className="bar-right" style={{ marginTop: 12, justifyContent: "flex-end", display: "flex" }}>
                <button className="primary" onClick={() => setStep("map")}>进入供应链穿透 →</button>
              </div>
            </>
          ) : eventId === "flood" || eventId === "port" ? (
            <>
              <div className="fact-grid">
                <div className="fact-card">
                  <div className="source-label">已确认事实</div>
                  <ul className="check-list">
                    {RISK_LIGHT[eventId].facts.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div className="fact-card ai">
                  <div className="source-label"><span className="ai-badge">AI 推断</span></div>
                  <ul className="check-list">
                    {RISK_LIGHT[eventId].inferences.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="note">{RISK_LIGHT[eventId].impact}</div>
              <div className="bar-right" style={{ marginTop: 12, justifyContent: "flex-end", display: "flex", gap: 8 }}>
                <button className="ghost" onClick={() => { setEventId("quake"); setStep("detail"); }}>切到场景 A 完整演示</button>
                <button className="primary" onClick={() => setStep("cockpit")}>返回驾驶舱</button>
              </div>
            </>
          ) : (
            <>
              <div className="risk-meta">
                <div><span>事件时间</span><b>{RISK_QUAKE.time}</b></div>
                <div><span>发生地点</span><b>{RISK_QUAKE.place}</b></div>
                <div><span>受影响地区</span><b>{RISK_QUAKE.area}</b></div>
                <div><span>相关企业</span><b>{RISK_QUAKE.companies}</b></div>
                <div><span>企业公告</span><b>{RISK_QUAKE.notice}</b></div>
                <div><span>新闻来源</span><b>{RISK_QUAKE.sources}</b></div>
                <div><span>当前状态</span><b>{RISK_QUAKE.status}</b></div>
              </div>
              <div className="fact-grid">
                <div className="fact-card">
                  <div className="source-label">已确认事实</div>
                  <ul className="check-list">
                    {RISK_QUAKE.facts.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div className="fact-card ai">
                  <div className="source-label">
                    <span className="ai-badge">AI 推断</span>
                  </div>
                  <ul className="check-list">
                    {RISK_QUAKE.inferences.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="bar-right" style={{ marginTop: 12, justifyContent: "flex-end", display: "flex" }}>
                <button className="primary" onClick={() => setStep("map")}>进入供应链穿透 →</button>
              </div>
            </>
          )}
        </div>
      )}

      {step === "map" && (
        <div className="panel">
          <div className="panel-head">
            <h3>供应链影响地图</h3>
            <span className="ai-inline">AI 调用 · 供应链映射</span>
          </div>
          <p className="source-desc">把外部事件穿透到企业自己的供应链：事件 → 地区 → 工厂 → 供应商 → 物料 → BOM → 产品 → 订单。</p>
          <div className="risk-chain">
            {RISK_QUAKE.chain.map((n, i) => (
              <button
                key={n.id}
                className={`risk-node${nodeId === n.id ? " on" : ""}`}
                onClick={() => setNodeId(n.id)}
              >
                <em>{String(i + 1).padStart(2, "0")}</em>
                <b>{n.label}</b>
                <span>{n.sub}</span>
              </button>
            ))}
          </div>
          <div className="node-detail">
            <h4>{node.label}</h4>
            <p>{node.detail}</p>
            {RISK_NODE_DETAIL[node.id] && (
              <div className="risk-meta" style={{ marginTop: 8 }}>
                <div><span>公司</span><b>{RISK_NODE_DETAIL[node.id].company}</b></div>
                <div><span>地址</span><b>{RISK_NODE_DETAIL[node.id].addr}</b></div>
                <div><span>产能</span><b>{RISK_NODE_DETAIL[node.id].capacity}</b></div>
                <div><span>生产 / 交付周期</span><b>{RISK_NODE_DETAIL[node.id].cycle}</b></div>
                <div><span>企业采购量</span><b>{RISK_NODE_DETAIL[node.id].volume}</b></div>
                <div><span>历史交付</span><b>{RISK_NODE_DETAIL[node.id].history}</b></div>
                <div><span>替代供应商 / 料</span><b>{RISK_NODE_DETAIL[node.id].alt}</b></div>
                <div><span>当前 / 在途库存</span><b>{RISK_NODE_DETAIL[node.id].stock}</b></div>
              </div>
            )}
          </div>
          <div className="bar-right" style={{ marginTop: 12, justifyContent: "flex-end", display: "flex", gap: 8 }}>
            <button className="ghost" onClick={() => setStep("detail")}>上一步</button>
            <button className="primary" onClick={next}>企业采购影响分析 →</button>
          </div>
        </div>
      )}

      {step === "impact" && (
        <div className="panel">
          <div className="panel-head">
            <h3>企业采购影响分析</h3>
            <span className="ai-inline">AI 调用 · 影响评估</span>
          </div>
          <div className="kpis risk-kpis">
            {RISK_QUAKE.impacts.slice(0, 4).map((x) => (
              <div className="kpi" key={x.label}><span>{x.label}</span><b>{x.value}</b></div>
            ))}
          </div>
          <table className="data">
            <thead>
              <tr><th>指标</th><th>结果</th></tr>
            </thead>
            <tbody>
              {RISK_QUAKE.impacts.map((x) => (
                <tr key={x.label}>
                  <td>{x.label}</td>
                  <td className={x.warn ? "risk-warn" : ""}>{x.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            <span className="ai-badge">AI 判断</span>
            &nbsp;库存 24 天 &lt; 正常供应 45 天，替代认证 60～90 天，存在实际断供风险。AI 不是在讲新闻，而是在回答「这件新闻和企业有什么关系」。
          </div>
          <div className="bar-right" style={{ marginTop: 12, justifyContent: "flex-end", display: "flex", gap: 8 }}>
            <button className="ghost" onClick={() => setStep("map")}>上一步</button>
            <button className="primary" onClick={next}>策略情景模拟 →</button>
          </div>
        </div>
      )}

      {step === "simulate" && (
        <div className="panel">
          <div className="panel-head">
            <h3>采购策略情景模拟</h3>
            <span className="ai-inline">AI 调用 · 情景模拟</span>
          </div>
          <p className="source-desc">比较不行动 / 增加采购 / 启动替代供应商在成本、库存、缺货与交付风险上的差异。AI 不直接命令「必须采购 40%」，而是给出可比较的方案。</p>
          <table className="data">
            <thead>
              <tr>
                <th>策略</th><th>资金占用</th><th>库存压力</th><th>缺货风险</th><th>交付风险</th><th>建议</th>
              </tr>
            </thead>
            <tbody>
              {RISK_QUAKE.sims.map((s) => (
                <tr key={s.name} className={s.pick ? "row-on" : ""}>
                  <td>{s.name}</td>
                  <td>{s.cost}</td>
                  <td>{s.stock}</td>
                  <td>{s.shortage}</td>
                  <td>{s.delivery}</td>
                  <td>{s.pick ? <PillOk /> : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            <span className="ai-badge">决策建议</span>
            &nbsp;建议：立即确认恢复时间，增加现有供应商采购量，并并行启动第二供应商与替代料认证。
          </div>
          <div className="bar-right" style={{ marginTop: 12, justifyContent: "flex-end", display: "flex", gap: 8 }}>
            <button className="ghost" onClick={() => setStep("impact")}>上一步</button>
            <button className="primary" onClick={() => { next(); onToast("行动中心", "已生成供应商确认、替代询价、研发与计划任务。"); }}>
              进入行动中心 →
            </button>
          </div>
        </div>
      )}

      {step === "action" && (
        <div className="panel">
          <div className="panel-head">
            <h3>采购行动中心</h3>
            <span className="ai-inline">AI 调用 · 行动生成</span>
          </div>
          <div className="action-list">
            {RISK_QUAKE.actions.map((a, i) => (
              <div className="action-item" key={a.who}>
                <em>行动 {i + 1}</em>
                <b>{a.who}</b>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <div className="metric-row" style={{ marginTop: 10 }}>
            <span className="metric-chip">自动生成供应商询价邮件</span>
            <span className="metric-chip">自动生成内部任务</span>
            <span className="metric-chip">自动生成风险报告</span>
            <span className="metric-chip">形成采购会议议题</span>
          </div>
          <div className="check-card" style={{ marginTop: 14 }}>
            <div className="panel-head">
              <h3>成功标准核对</h3>
              <span>说明文档 §24</span>
            </div>
            <ul className="check-list">
              <li>① AI 能发现风险 — 驾驶舱已展示地震 / 关税 / 铜价等事件</li>
              <li>② AI 能判断是否与企业有关 — 映射到 3 家供应商</li>
              <li>③ AI 能沿供应链找到影响节点 — 工厂 → IC → BOM → 产品</li>
              <li>④ AI 能量化不同决策后果 — 情景模拟表</li>
              <li>⑤ AI 能形成可执行采购行动 — 行动中心 5 项任务</li>
            </ul>
          </div>
          <div className="bar-right" style={{ marginTop: 12, justifyContent: "flex-end", display: "flex", gap: 8 }}>
            <button className="ghost" onClick={() => setStep("copper")}>切换铜价场景</button>
            <button className="primary" onClick={() => setStep("cockpit")}>回到驾驶舱</button>
          </div>
        </div>
      )}

      {step === "copper" && (
        <div className="panel">
          <div className="panel-head">
            <h3>趋势型行情分析 · 铜材采购风险 {RISK_COPPER.level}</h3>
            <span className="ai-inline">AI 调用 · 行情 + 专家策略</span>
          </div>
          <div className="diff-box">
            <div className="diff-trad">传统误区：把 Demo 做成「AI 精准预测铜价」。市场预测 ≠ 企业采购决策 ≠ 金融投资。</div>
            <div className="diff-ai">
              <span className="ai-badge">综合结论</span> {RISK_COPPER.conclusion}
              置信度：{RISK_COPPER.confidence}。主要不确定因素：{RISK_COPPER.uncertainty}
            </div>
          </div>
          <div className="panel-head" style={{ marginTop: 8 }}>
            <h3>预测依据</h3>
            <span>数据来源 → 模型判断 → 专家策略 → 综合结论</span>
          </div>
          <table className="data">
            <thead>
              <tr><th>风险因素</th><th>当前情况</th><th>方向</th></tr>
            </thead>
            <tbody>
              {RISK_COPPER.factors.map((f) => (
                <tr key={f.name}>
                  <td>{f.name}</td>
                  <td>{f.now}</td>
                  <td className="score-num">{f.dir}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            未来 60 天需求 {RISK_COPPER.need}，当前库存 {RISK_COPPER.stock}。{RISK_EXPERT.name}：
            {RISK_EXPERT.rules.join(" + ")} → {RISK_EXPERT.result}
          </div>
          <div className="panel-head" style={{ marginTop: 12 }}>
            <h3>专家策略回测与策略对比</h3>
            <span className="ai-inline">AI 调用 · 回测 Agent</span>
          </div>
          <div className="kpis risk-kpis">
            {RISK_EXPERT.hist.map((h) => (
              <div className="kpi" key={h.label}><span>{h.label}</span><b>{h.value}</b></div>
            ))}
          </div>
          <table className="data">
            <thead>
              <tr>
                <th>策略</th><th>历史命中</th><th>平均成本变化</th><th>库存资金变化</th><th>说明</th>
              </tr>
            </thead>
            <tbody>
              {RISK_EXPERT.compare.map((c) => (
                <tr key={c.name} className={c.name === "AI + 专家" ? "row-on" : ""}>
                  <td>{c.name}</td>
                  <td>{c.hit}</td>
                  <td>{c.cost}</td>
                  <td>{c.stock}</td>
                  <td>{c.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="panel-head" style={{ marginTop: 12 }}>
            <h3>采购策略情景模拟</h3>
            <span className="ai-inline">可验证决策</span>
          </div>
          <table className="data">
            <thead>
              <tr>
                <th>策略</th><th>采购量</th><th>资金占用</th><th>价格风险</th><th>缺货风险</th><th>建议</th>
              </tr>
            </thead>
            <tbody>
              {RISK_COPPER.strategies.map((s) => (
                <tr key={s.name} className={s.pick ? "row-on" : ""}>
                  <td>{s.name}</td>
                  <td>{s.qty}</td>
                  <td>{s.cash}</td>
                  <td>{s.price}</td>
                  <td>{s.shortage}</td>
                  <td>{s.pick ? <PillOk /> : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            <span className="ai-badge">决策建议</span> {RISK_COPPER.advice}
          </div>
          <div className="panel-head" style={{ marginTop: 12 }}>
            <h3>预测与决策回测</h3>
            <span>预测 → 决策 → 执行 → 结果 → 学习</span>
          </div>
          <table className="data">
            <thead>
              <tr><th>日期</th><th>风险判断</th><th>实际结果</th><th>策略表现</th></tr>
            </thead>
            <tbody>
              {RISK_COPPER.backtest.map((b) => (
                <tr key={b.date}>
                  <td>{b.date}</td>
                  <td>{b.judge}</td>
                  <td>{b.actual}</td>
                  <td className={b.ok ? "spec-ok" : "risk-warn"}>{b.ok ? "✓" : "✕"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">AI 不追求永远正确，而追求让采购更早看到风险、更快理解风险、更有依据地行动。</div>
          <div className="bar-right" style={{ marginTop: 12, justifyContent: "flex-end", display: "flex", gap: 8 }}>
            <button className="ghost" onClick={() => { setEventId("quake"); setStep("detail"); }}>切回地震场景</button>
            <button className="primary" onClick={() => setStep("cockpit")}>回到驾驶舱</button>
          </div>
        </div>
      )}
    </div>
  );
}

function PillOk() {
  return <span className="pill ok">AI 建议</span>;
}
