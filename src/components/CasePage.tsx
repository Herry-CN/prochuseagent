import { useMemo, useState } from "react";
import { DEFAULT_PROMPT, PRODUCTS } from "../data";
import { MotorThumb, Ring } from "./Icons";

const money = (n: number) =>
  `¥${n.toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export function CasePage({
  onToast,
  onDetail,
}: {
  onToast: (title: string, desc: string) => void;
  onDetail: (id: string) => void;
}) {
  const [focus, setFocus] = useState("hd");
  const [cart, setCart] = useState<string[]>(["hd"]);
  const [hidden, setHidden] = useState<string[]>([]);
  const [follow, setFollow] = useState("继续追问：为什么不选更便宜的供应商？");
  const [answered, setAnswered] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [approve, setApprove] = useState(false);

  const items = PRODUCTS.filter((p) => !hidden.includes(p.id));
  const selected = items.filter((p) => cart.includes(p.id) && !p.removed);
  const total = selected.reduce((s, p) => s + p.price * p.qty, 0);
  const focused = items.find((p) => p.id === focus) || items[0];

  const allSelectable = useMemo(
    () => items.filter((p) => !p.removed).map((p) => p.id),
    [items]
  );

  const toggleCart = (id: string, removed?: boolean) => {
    if (removed) {
      setHidden((h) => [...h, id]);
      setCart((c) => c.filter((x) => x !== id));
      if (focus === id) setFocus("hd");
      return;
    }
    setCart((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  };

  const selectAll = () => {
    const allOn = allSelectable.every((id) => cart.includes(id));
    setCart(allOn ? ["hd"] : allSelectable);
  };

  return (
    <div className="case-page">
    <div className="content wide">
      <div className="case-head">
        <div>
          <h2>研发测试电机采购</h2>
          <p>对话流会持续追加需求识别、商品推荐、订单确认和审批进度。</p>
        </div>
        <button className="primary" onClick={() => onToast("AI类目属性推荐", "已按伺服电机 / IP67 / 合格供应商库重新排序。")}>
          AI类目属性推荐
        </button>
      </div>

      <div className="me-card">
        <div className="who">我 采购需求</div>
        <p>{DEFAULT_PROMPT}</p>
      </div>

      <div className="ai-card">
        <div className="who">
          <span className="badge-ai">智</span> 需求识别与字段补齐
        </div>
        <p>
          已识别为研发非标物料采购。系统发现标准文档《底盘防水测试设备需求说明-V2.docx》，并结合补充反馈补齐数量、交期、质量验收和供应商要求。
        </p>
        <div className="fields">
          <div className="field"><span>采购对象</span><b>IP67 防水伺服电机</b></div>
          <div className="field"><span>采购数量</span><b>5 台</b></div>
          <div className="field"><span>交期要求</span><b>2026-05-07 前</b></div>
          <div className="field"><span>优先策略</span><b>合格供应商库</b></div>
        </div>
      </div>

      <div className="rec-card">
        <div className="rec-head">
          <h3>为您的采购需求做了以下智能推荐</h3>
          <span>需求编号 PR-2026-0430-001</span>
        </div>
        <p>
          采购对象：IP67 防水伺服电机，数量 5 台，要求 2026-05-07 前到货；质量验收包含通电测试、IP67 证明、12 个月质保。系统优先从合格供应商库召回，再对新供应商做真实性验证。
        </p>
        <div className="chips">
          <span className="chip">使用水类规则</span>
          <span className="chip">伺服电机</span>
          <span className="chip">记录用品</span>
          <span className="chip">便签贴</span>
        </div>
        {items.map((p) => (
          <div key={p.id} className={`product${focus === p.id ? " focus" : ""}${p.removed ? " gone" : ""}`}>
            <button
              className={`radio${cart.includes(p.id) ? " checked" : focus === p.id ? " on" : ""}`}
              onClick={() => {
                setFocus(p.id);
                onToast(p.name, p.tags);
              }}
            >
              {cart.includes(p.id) ? "✓" : focus === p.id ? <span /> : null}
            </button>
            <div className="thumb">
              <MotorThumb />
            </div>
            <div>
              <div className="sku">
                <b>SKU</b> {p.sku}　{p.city}
              </div>
              <div className="pname">
                <strong>{p.name}</strong>
                <span className={p.removed ? "risk" : "t"}>{p.tags}</span>
              </div>
              <p className="pdesc">{p.desc}</p>
            </div>
            <div className="price-box">
              <div className="price">{money(p.price)}</div>
              <div className="qty">数量 {p.qty}</div>
            </div>
            <div className="p-actions">
              <button className="detail-btn" onClick={() => onDetail(p.id)}>
                详情
              </button>
              <button
                className="primary"
                onClick={() => toggleCart(p.id, p.removed)}
              >
                {p.removed ? "删除" : cart.includes(p.id) ? "已选" : "加入"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bar">
        <div className="bar-left">
          <label className="check">
            <input
              type="checkbox"
              checked={allSelectable.every((id) => cart.includes(id))}
              onChange={selectAll}
            />
            全选
          </label>
          <span>
            已选 <span className="n">{selected.length} 件</span>
          </span>
          <span>
            合计 <span className="sum">{money(total)}</span>
          </span>
        </div>
        <div className="bar-right">
          <button className="ghost" onClick={() => onToast("已加入备选池", "已选供应商已写入备选池，可继续比价或提交采购。")}>
            加入备选池
          </button>
          <button
            className="primary"
            onClick={() => {
              setConfirm(true);
              onToast("采购清单已生成", "系统已把首选供应商、用途、交期、质量标准带入确认单。");
              setTimeout(() => {
                document.getElementById("confirm-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }, 50);
            }}
          >
            提交采购
          </button>
        </div>
      </div>

      {focused && (
        <div className="verify-card">
          <div className="ring-wrap">
            <Ring value={focused.score} size={54} stroke={5} />
            <span>{focused.score}</span>
          </div>
          <h3 style={{ margin: "0 0 4px" }}>供应商验证结果</h3>
          <p style={{ margin: 0, color: "#6b7280", fontSize: 13 }}>
            {focused.code} / {focused.name}
          </p>
          {focused.checks.map((c) => (
            <div className="check-row" key={c.title}>
              <h4>
                <span className={c.ok ? "dot-ok" : "dot-warn"}>{c.ok ? "✓" : "!"}</span>
                {c.title}
              </h4>
              <p>{c.text}</p>
            </div>
          ))}
          <div className="db-box">
            <h4>数据库沉淀</h4>
            <ul>
              <li><span className="db-dot" />需求结构化已保存：procurement_requirements / PR-2026-0430-001</li>
              <li><span className="db-dot" />推荐结果已保存：supplier_match_results / MATCH-2026-0430-001</li>
              <li><span className="db-dot" />验证快照已保存：supplier_verification_logs / VER-2026-0430-001</li>
            </ul>
          </div>
        </div>
      )}

      {confirm && (
        <div className="confirm-card" id="confirm-card">
          <h3>
            确认采购清单
            <span className="order-no">订单号 20260430110800027204</span>
          </h3>
          <table className="confirm-table">
            <thead>
              <tr>
                <th>物料</th><th>供应商</th><th>数量</th><th>单价</th><th>小计</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IP67 防水伺服电机</td>
                <td>华东工业备件</td>
                <td>5 台</td>
                <td>¥3,680.00</td>
                <td>¥18,400.00</td>
              </tr>
            </tbody>
          </table>
          <div className="grid2">
            <div className="mini"><span>用途</span><b>研发二部 / 底盘防水测试</b></div>
            <div className="mini"><span>收货要求</span><b>2026-05-07 前到货</b></div>
            <div className="mini"><span>质量验收</span><b>通电测试 + IP67 证明 + 12个月质保</b></div>
            <div className="mini"><span>审批路径</span><b>研发负责人 &gt; 采购经理 &gt; 财务预算</b></div>
          </div>
          <div className="confirm-foot">
            <div>
              合计 <span className="sum">¥18,400.00</span>
            </div>
            <button
              className="primary"
              onClick={() => {
                setApprove(true);
                onToast("智能按规则审批", "订单已进入研发负责人 > 采购经理 > 财务预算审批链路。");
              }}
            >
              确认并触发审批
            </button>
          </div>
        </div>
      )}

      {approve && (
        <div className="approve-card">
          <h3>
            订单已自动触发审批
            <span className="order-no">订单号 20260430110800027204</span>
          </h3>
          <div className="steps">
            <div className="step done"><div className="n">1</div><b>提交订单</b><span>已提交</span></div>
            <div className="step done"><div className="n">2</div><b>智能审核</b><span>规则通过</span></div>
            <div className="step"><div className="n">3</div><b>供应商确认</b><span>待回传</span></div>
            <div className="step"><div className="n">4</div><b>归档入库</b><span>自动保存</span></div>
          </div>
        </div>
      )}

      {answered && (
        <div className="explain">
          更便宜的供应商没有进入首选，是因为规则不允许只看单价：
          {"\n"}• 速达机电贸易单价最低，但联系方式验证失败、资质过期，已按高风险剔除。
          {"\n"}• 长三角工控便宜约 ¥230/台，但无现货、交期 9 天、IP67 证明待补充、质保仅 6 个月，不满足 5 月 7 日前到货和 12 个月质保。
          {"\n"}• 华南精密电机价格略低，但仍属新 sourcing，待准入，不能作为紧急采购首选。
          {"\n"}华东工业备件虽单价更高，但是合格库、现货 8 台、5 天可交付，联系方式和资质均已验证，因此被规则选为本次首选。
        </div>
      )}
    </div>
      <div className="follow">
        <input
          value={follow}
          onChange={(e) => setFollow(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setAnswered(true);
            }
          }}
        />
        <button className="send-btn" onClick={() => setAnswered(true)}>
          发送
        </button>
      </div>
    </div>
  );
}
