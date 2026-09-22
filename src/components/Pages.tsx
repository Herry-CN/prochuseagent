import {
  BOARD_COLUMNS,
  CATEGORY_ROWS,
  CERT_ROWS,
  DEMAND_ROWS,
  PERF_ROWS,
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
  return (
    <div className="content">
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
            {tab === "绩效评价" && "绩效评价与反馈"}
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
        {tab === "绩效评价" && (
          <>
            <table className="data">
              <thead>
                <tr>
                  <th>供应商</th><th>准时率</th><th>质量合格率</th><th>等级</th><th>策略</th>
                </tr>
              </thead>
              <tbody>
                {PERF_ROWS.map((r) => (
                  <tr key={r.name}>
                    <td>{r.name}</td><td>{r.ontime}</td><td>{r.quality}</td>
                    <td><Pill tone={r.grade.startsWith("A") ? "ok" : "warn"}>{r.grade}</Pill></td>
                    <td>{r.strategy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="note">履约结果会回写供应商等级，并影响下次推荐顺序。准时率低于 90% 自动降级。</div>
            <div className="panel-head" style={{ marginTop: 16 }}>
              <h3>绩效标准</h3>
              <span>准时、质量、价格与配合度共同决定推荐权重</span>
            </div>
            <div className="trio">
              <div className="mini">
                <h4>交期<em>准时率 / 响应速度</em></h4>
                <p>准时率低于 90% 降级，紧急单优先分配给 A 级供应商。</p>
              </div>
              <div className="mini">
                <h4>质量<em>验收通过率 / 退换货</em></h4>
                <p>质量合格率与退换货次数直接进入下次推荐排序。</p>
              </div>
              <div className="mini">
                <h4>商务<em>价格波动 / 账期配合</em></h4>
                <p>价格异常波动或账期不配合会限制协议续签。</p>
              </div>
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
