import { DEMO_CARDS } from "../data";
import { IconBox, IconCart, IconClip, IconDoc, IconLink, IconList, IconSearch } from "./Icons";

const QUICK = [
  { key: "采购需求", icon: <IconDoc /> },
  { key: "采购清单", icon: <IconList /> },
  { key: "查询品类", icon: <IconSearch /> },
  { key: "自动下单", icon: <IconBox /> },
  { key: "订单查询", icon: <IconCart /> },
];

export function Home({
  prompt,
  onPrompt,
  onSend,
  onQuick,
  onCard,
}: {
  prompt: string;
  onPrompt: (v: string) => void;
  onSend: () => void;
  onQuick: (key: string) => void;
  onCard: (id: string) => void;
}) {
  return (
    <div className="content">
      <div className="hello">
        <h1>你好，我是AI采购智能体</h1>
        <p>有什么可以帮您的吗？</p>
      </div>
      <div className="quick">
        {QUICK.map((q) => (
          <button key={q.key} className="quick-btn" onClick={() => onQuick(q.key)}>
            {q.icon}
            {q.key}
          </button>
        ))}
      </div>
      <div className="composer">
        <textarea
          value={prompt}
          onChange={(e) => onPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />
        <div className="composer-bar">
          <div className="icon-btns">
            <button className="icon-btn" title="附件">
              <IconClip />
            </button>
            <button className="icon-btn" title="链接">
              <IconLink />
            </button>
          </div>
          <button className="send-btn" onClick={onSend}>
            发送
          </button>
        </div>
      </div>
      <div className="hint">按 Enter 发送，Shift + Enter 换行</div>
      <div className="demo-wrap">
        <div className="demo-head">
          <b>售前演示主线</b>
          <span>一条线讲清楚：需求到付款，规则全程约束</span>
        </div>
        <div className="demo-grid">
          {DEMO_CARDS.map((c) => (
            <button key={c.id} className="demo-card" onClick={() => onCard(c.id)}>
              <div className="no">{c.id}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
