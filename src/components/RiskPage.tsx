import { useEffect, useMemo, useState } from "react";
import {
  RISK_COPPER,
  RISK_EVENTS,
  RISK_EXPERT,
  RISK_FLOWS,
  RISK_STEPS,
  type RiskStep,
} from "../riskData";

function LevelPill({ level, tone }: { level: string; tone: "high" | "mid" | "low" }) {
  return <span className={`pill ${tone === "high" ? "bad" : tone === "mid" ? "warn" : "ok"}`}>{level}</span>;
}

export function RiskPage({ onToast }: { onToast: (title: string, desc: string) => void }) {
  const [eventId, setEventId] = useState("quake");
  const [step, setStep] = useState<RiskStep>("cockpit");
  const [nodeId, setNodeId] = useState("e");
  const [strategyPicks, setStrategyPicks] = useState<string[]>([]);

  const selected = useMemo(() => RISK_EVENTS.find((e) => e.id === eventId) || RISK_EVENTS[0], [eventId]);
  const flow = RISK_FLOWS[eventId] ?? RISK_FLOWS.quake;
  const node = flow.chain.find((n) => n.id === nodeId) || flow.chain[0];
  const nodeDetail = flow.nodes[node.id];
  const stepIndex = RISK_STEPS.findIndex((s) => s.key === step);
  const hasStrategyOptions = Boolean(flow.options?.length && flow.optionSims);

  const strategySimRows = useMemo(() => {
    if (!hasStrategyOptions || !flow.optionSims) return flow.sims;
    const rows = flow.baselineSim ? [flow.baselineSim] : [];
    for (const name of strategyPicks) {
      const m = flow.optionSims[name];
      if (m) rows.push({ name, ...m });
    }
    return rows;
  }, [hasStrategyOptions, flow, strategyPicks]);

  useEffect(() => {
    if (flow?.chain?.[0]) setNodeId(flow.chain[0].id);
  }, [eventId, flow]);

  useEffect(() => {
    setStrategyPicks(flow.defaultOptions ? [...flow.defaultOptions] : []);
  }, [eventId, flow.defaultOptions]);

  const toggleStrategyOption = (name: string) => {
    setStrategyPicks((prev) => {
      if (prev.includes(name)) {
        onToast("已移除策略", `已从情景比较中删除「${name}」。`);
        return prev.filter((x) => x !== name);
      }
      onToast("已加入策略", `已将「${name}」加入情景比较。`);
      return [...prev, name];
    });
  };

  const openEvent = (id: string, toastTitle?: string, toastDesc?: string) => {
    setEventId(id);
    if (id === "copper") {
      setStep("copper");
      return;
    }
    setStep("detail");
    if (toastTitle) onToast(toastTitle, toastDesc || "");
  };

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h2>AI采购风险情报与决策</h2>
        </div>
        <div className="head-actions">
          <button className="primary risk-back-btn" onClick={() => { setStep("cockpit"); setEventId("quake"); }}>
            ← 返回驾驶舱
          </button>
        </div>
      </div>

      {step !== "cockpit" && step !== "copper" && (
        <div className="risk-steps-wrap">
          <div className="risk-steps-label">
            <span className="ai-badge">流程</span>
            <b>风险分析五步</b>
            <span className={`risk-event-now ${selected.tone === "high" ? "tone-high" : selected.tone === "mid" ? "tone-mid" : "tone-low"}`}>
              当前事件：{flow.title}
              <em className={`pill ${selected.tone === "high" ? "bad" : selected.tone === "mid" ? "warn" : "ok"}`}>
                风险{selected.level}
              </em>
            </span>
          </div>
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
                      className="table-btn"
                      onClick={() => openEvent(e.id, "事件选中", `已进入「${e.title}」详情，可继续分析供应链关系。`)}
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
            请点击「查看」进入事件详情。当前选中：<b>{selected.title}</b>
          </div>
        </div>
      )}

      {step === "detail" && eventId !== "copper" && RISK_FLOWS[eventId] && (
        <div className="panel">
          <div className="panel-head">
            <h3>风险事件详情 · {flow.title}</h3>
            <span className="ai-inline">事实 / AI 推断分开标注</span>
          </div>
          <div className="risk-meta">
            <div><span>事件时间</span><b>{flow.time}</b></div>
            <div><span>发生地点</span><b>{flow.place}</b></div>
            <div><span>受影响地区</span><b>{flow.area}</b></div>
            <div><span>相关企业</span><b>{flow.companies}</b></div>
            <div><span>企业公告 / 公开信息</span><b>{flow.notice}</b></div>
            <div><span>新闻来源</span><b>{flow.sources}</b></div>
            <div><span>当前状态</span><b>{flow.status}</b></div>
          </div>
          {eventId === "tariff" && flow.chainText && (
            <>
              <div className="source-map">{flow.chainText}</div>
              {flow.impactText && <p className="source-desc">{flow.impactText}</p>}
            </>
          )}
          <div className="fact-grid">
            <div className="fact-card">
              <div className="source-label">已确认事实</div>
              <ul className="check-list">
                {flow.facts.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="fact-card ai">
              <div className="source-label">
                <span className="ai-badge">AI 推断</span>
              </div>
              <ul className="check-list">
                {flow.inferences.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      {step === "map" && RISK_FLOWS[eventId] && (
        <div className="panel">
          <div className="panel-head">
            <h3>供应链影响地图 · {flow.title}</h3>
            <span className="ai-inline">AI 调用 · 供应链映射</span>
          </div>
          <p className="source-desc">把外部事件穿透到企业自己的供应链：事件 → 地区 → 工厂 → 供应商 → 物料 → BOM → 产品 → 订单。</p>
          <div className="risk-chain">
            {flow.chain.map((n, i) => (
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
            {nodeDetail && (
              <div className="risk-meta" style={{ marginTop: 8 }}>
                <div><span>公司</span><b>{nodeDetail.company}</b></div>
                <div><span>地址</span><b>{nodeDetail.addr}</b></div>
                <div><span>产能</span><b>{nodeDetail.capacity}</b></div>
                <div><span>生产 / 交付周期</span><b>{nodeDetail.cycle}</b></div>
                <div><span>企业采购量</span><b>{nodeDetail.volume}</b></div>
                <div><span>历史交付</span><b>{nodeDetail.history}</b></div>
                <div><span>替代供应商 / 料</span><b>{nodeDetail.alt}</b></div>
                <div><span>当前 / 在途库存</span><b>{nodeDetail.stock}</b></div>
              </div>
            )}
          </div>
        </div>
      )}

      {step === "impact" && RISK_FLOWS[eventId] && (
        <div className="panel">
          <div className="panel-head">
            <h3>企业采购影响分析 · {flow.title}</h3>
            <span className="ai-inline">AI 调用 · 影响评估</span>
          </div>
          <div className="kpis risk-kpis">
            {flow.impacts.slice(0, 4).map((x) => (
              <div className="kpi" key={x.label}><span>{x.label}</span><b>{x.value}</b></div>
            ))}
          </div>
          <table className="data">
            <thead>
              <tr><th>指标</th><th>结果</th></tr>
            </thead>
            <tbody>
              {flow.impacts.map((x) => (
                <tr key={x.label}>
                  <td>{x.label}</td>
                  <td className={x.warn ? "risk-warn" : ""}>{x.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="note">
            <span className="ai-badge">AI 判断</span>
            &nbsp;{flow.judgment}
          </div>
        </div>
      )}

      {step === "simulate" && RISK_FLOWS[eventId] && (
        <div className="panel">
          <div className="panel-head">
            <h3>采购策略情景模拟 · {flow.title}</h3>
            <span className="ai-inline">AI 调用 · 情景模拟</span>
          </div>
          <p className="source-desc">
            {hasStrategyOptions
              ? "点选下方应对方案加入比较，再次点击可删除；对比表随选择实时更新。"
              : "比较不同策略在成本、库存、缺货与交付风险上的差异。AI 给出可比较方案，而非单一指令。"}
          </p>

          {hasStrategyOptions && flow.options && (
            <div className="tariff-options">
              <div className="tariff-options-label">
                <span className="ai-badge">策略选项</span>
                <b>可选应对方案</b>
                <span>点击加入 / 再点删除 · 已选 {strategyPicks.length} 项</span>
              </div>
              <div className="tariff-option-grid">
                {flow.options.map((o, i) => {
                  const on = strategyPicks.includes(o);
                  const rec = flow.optionSims?.[o]?.pick;
                  return (
                    <button
                      type="button"
                      className={`tariff-option${on ? " on" : ""}${rec ? " ai-rec" : ""}`}
                      key={o}
                      onClick={() => toggleStrategyOption(o)}
                    >
                      <em>{on ? "✓" : String(i + 1).padStart(2, "0")}</em>
                      <b>{o}</b>
                      <span className="tariff-option-hint">
                        {rec ? "AI 建议" : "备选"}
                        {" · "}
                        {on ? "已选 · 点击删除" : "点击加入"}
                      </span>
                    </button>
                  );
                })}
              </div>
              {strategyPicks.length > 0 && (
                <div className="tariff-picked">
                  <span className="tariff-picked-label">当前比较组合</span>
                  <div className="tariff-picked-list">
                    {strategyPicks.map((name) => (
                      <button
                        type="button"
                        key={name}
                        className="tariff-chip"
                        onClick={() => toggleStrategyOption(name)}
                        title="点击删除"
                      >
                        {name}
                        <span aria-hidden>×</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <table className="data">
            <thead>
              <tr>
                <th>策略</th><th>资金占用</th><th>库存压力</th><th>缺货风险</th><th>交付风险</th><th>建议</th>
              </tr>
            </thead>
            <tbody>
              {strategySimRows.map((s) => (
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
          {hasStrategyOptions && strategyPicks.length === 0 && (
            <div className="note">尚未选择应对方案，表格仅保留「不行动」基线；请在上方点选至少一项策略。</div>
          )}
          <div className="note">
            <span className="ai-badge">决策建议</span>
            &nbsp;{hasStrategyOptions && strategyPicks.length > 0
              ? `建议组合执行：${strategyPicks.join(" + ")}。${flow.advice}`
              : flow.advice}
          </div>
        </div>
      )}

      {step === "action" && RISK_FLOWS[eventId] && (
        <div className="panel">
          <div className="panel-head">
            <h3>采购行动中心 · {flow.title}</h3>
            <span className="ai-inline">AI 调用 · 行动生成</span>
          </div>
          <div className="action-list">
            {flow.actions.map((a, i) => (
              <div className="action-item" key={`${a.who}-${i}`}>
                <em>行动 {i + 1}</em>
                <b>{a.who}</b>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <div className="action-outputs">
            <div className="action-outputs-label">
              <span className="ai-badge">AI 输出</span>
              <b>可执行产物</b>
              <span>分析完成后自动生成</span>
            </div>
            <div className="action-output-grid">
              {[
                { t: "自动生成供应商询价邮件", d: "向替代与主供发送确认与询价", toast: "询价邮件已生成" },
                { t: "自动生成内部任务", d: "拆分给采购、研发、计划责任人", toast: "内部任务已下发" },
                { t: "自动生成风险报告", d: "汇总事实、推断、影响与建议", toast: "风险报告已生成" },
                { t: "形成采购会议议题", d: "进入例会决策与跟踪闭环", toast: "会议议题已加入议程" },
              ].map((x, i) => (
                <button
                  type="button"
                  className="action-output"
                  key={x.t}
                  onClick={() => onToast(x.toast, x.d)}
                >
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <b>{x.t}</b>
                  <p>{x.d}</p>
                </button>
              ))}
            </div>
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
            <div className="diff-ai">
              <span className="ai-badge">综合结论</span> {RISK_COPPER.conclusion}
              置信度：{RISK_COPPER.confidence}。主要不确定因素：{RISK_COPPER.uncertainty}
            </div>
          </div>
          <div className="panel-head" style={{ marginTop: 8 }}>
            <h3>预测依据</h3>
            <span>数据来源 → 模型判断 → 专家策略 → 综合结论</span>
          </div>
          <table className="data factor-table">
            <thead>
              <tr><th className="factor-col">风险因素</th><th>当前情况</th><th>方向</th></tr>
            </thead>
            <tbody>
              {RISK_COPPER.factors.map((f) => (
                <tr key={f.name}>
                  <td className="factor-col">{f.name}</td>
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
                  <td>
                    <span className={`pill ${b.ok ? "ok" : "bad"}`}>
                      {b.ok ? "命中 ✓" : "偏差 ✕"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function PillOk() {
  return <span className="pill ok">AI 建议</span>;
}
