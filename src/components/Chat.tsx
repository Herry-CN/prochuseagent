import { PAPER_CHAT } from "../data";

export function Chat({ extra }: { extra?: { role: "user" | "ai"; text: string }[] }) {
  const msgs = extra ? [...PAPER_CHAT, ...extra] : PAPER_CHAT;
  return (
    <div className="content">
      <div className="chat">
        {msgs.map((m, i) => (
          <div key={i} className={`bubble ${m.role}`}>
            {m.text}
          </div>
        ))}
        <div className="ok-pill">需求澄清完成，已生成结构化采购需求单</div>
        <div className="srm-card">
          <div className="need-tag">需寻源</div>
          <h4>供应商资源池匹配</h4>
          <p>
            供应商资源池中暂无匹配「打印纸」的合格供应商，建议进入供应商寻源流程（SRM）。
          </p>
          <div className="links">
            <button data-act="source">发起寻源任务 →</button>
            <button data-act="cat">查看相似品类 →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GenericChat({ title }: { title: string }) {
  return (
    <div className="content">
      <div className="chat">
        <div className="bubble user">{title}</div>
        <div className="bubble ai">
          好的，收到您的采购需求。我先按品类、数量、交期和质量标准帮您澄清，整理成可执行的需求单。
        </div>
      </div>
    </div>
  );
}
