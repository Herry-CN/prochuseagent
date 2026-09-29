import type { ReactNode } from "react";
import { HISTORY, type NavKey, type ViewKey } from "../data";
import {
  IconBack,
  IconBoard,
  IconBox,
  IconCart,
  IconList,
  IconRisk,
  IconSearch,
  IconSpark,
  IconUsers,
} from "./Icons";

const NAV: { key: NavKey; view: ViewKey; icon: ReactNode }[] = [
  { key: "助手", view: "home", icon: <IconSpark /> },
  { key: "需求", view: "demand", icon: <IconBox /> },
  { key: "品类", view: "category", icon: <IconList /> },
  { key: "供应商", view: "srm", icon: <IconUsers /> },
  { key: "采购", view: "purchase", icon: <IconCart /> },
  { key: "风险", view: "risk", icon: <IconRisk /> },
  { key: "看板", view: "board", icon: <IconBoard /> },
];

export function Layout({
  nav,
  historyId,
  search,
  crumb,
  showBack,
  children,
  overlay,
  toast,
  onNav,
  onHistory,
  onSearch,
  onNewChat,
  onBack,
}: {
  nav: NavKey;
  historyId: string;
  search: string;
  crumb: string[];
  showBack: boolean;
  children: ReactNode;
  overlay?: ReactNode;
  toast?: ReactNode;
  onNav: (key: NavKey, view: ViewKey) => void;
  onHistory: (id: string, view: ViewKey) => void;
  onSearch: (v: string) => void;
  onNewChat: () => void;
  onBack: () => void;
}) {
  const list = HISTORY.filter(
    (h) => !search || h.title.includes(search) || h.meta.includes(search)
  );

  return (
    <div className="app">
      <aside className="rail">
        <div className="rail-logo">
          <IconSpark />
        </div>
        {NAV.map((item) => (
          <button
            key={item.key}
            className={`rail-item${nav === item.key ? " active" : ""}`}
            onClick={() => onNav(item.key, item.view)}
          >
            {item.icon}
            {item.key}
          </button>
        ))}
      </aside>
      <aside className="sidebar">
        <div className="side-head">
          <div className="side-title">采购需求</div>
          <button className="btn-new" onClick={onNewChat}>
            新对话
          </button>
        </div>
        <label className="side-search">
          <IconSearch />
          <input
            value={search}
            placeholder="搜索历史需求"
            onChange={(e) => onSearch(e.target.value)}
          />
        </label>
        <div className="history">
          {list.map((h) => (
            <button
              key={h.id}
              className={`hist-item${historyId === h.id ? " active" : ""}`}
              onClick={() => onHistory(h.id, h.view)}
            >
              <div className="hist-title">{h.title}</div>
              <div className="hist-meta">
                {h.meta ? `${h.meta}  ${h.time}` : h.time}
              </div>
            </button>
          ))}
        </div>
      </aside>
      <section className="main">
        <header className="topbar">
          <div className="crumb">
            {showBack && (
              <button className="back-btn" onClick={onBack}>
                <IconBack />
              </button>
            )}
            {crumb.map((c, i) => (
              <span key={c}>
                {i > 0 && " / "}
                {i === crumb.length - 1 ? <b>{c}</b> : c}
              </span>
            ))}
          </div>
        </header>
        {children}
        {overlay}
        {toast}
      </section>
    </div>
  );
}
