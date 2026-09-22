import { useEffect, useMemo, useState } from "react";
import { Chat, GenericChat } from "./components/Chat";
import { CasePage } from "./components/CasePage";
import { Home } from "./components/Home";
import { Ring } from "./components/Icons";
import { Layout } from "./components/Layout";
import { Board, Category, Demand, Purchase, SRM } from "./components/Pages";
import {
  DEFAULT_PROMPT,
  HISTORY,
  LOADING_STAGES,
  PRODUCTS,
  TOASTS,
  type NavKey,
  type SrmTab,
  type ViewKey,
} from "./data";

const CRUMBS: Record<ViewKey, string[]> = {
  home: ["AI采购智能体"],
  chat: ["AI需求助手"],
  demand: ["采购需求管理"],
  category: ["品类与物料库"],
  srm: ["SRM 供应商管理"],
  purchase: ["采购执行"],
  board: ["采购看板"],
  case: ["采购需求", "研发测试电机采购"],
};

const NAV_FROM_VIEW: Record<ViewKey, NavKey> = {
  home: "助手",
  chat: "助手",
  case: "助手",
  demand: "需求",
  category: "品类",
  srm: "供应商",
  purchase: "采购",
  board: "看板",
};

function viewFromHash(): ViewKey {
  const key = (location.hash.replace(/^#\/?/, "") || "home") as ViewKey;
  return key in NAV_FROM_VIEW ? key : "home";
}

export default function App() {
  const initial = viewFromHash();
  const [view, setView] = useState<ViewKey>(initial);
  const [nav, setNav] = useState<NavKey>(NAV_FROM_VIEW[initial]);
  const [historyId, setHistoryId] = useState(initial === "case" ? "h5" : "h1");
  const [search, setSearch] = useState("");
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [srmTab, setSrmTab] = useState<SrmTab>("寻源任务");
  const [catHi, setCatHi] = useState<"验收" | "规则" | null>(null);
  const [demandHi, setDemandHi] = useState(false);
  const [purchaseHi, setPurchaseHi] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadPct, setLoadPct] = useState(0);
  const [loadText, setLoadText] = useState("");
  const [toast, setToast] = useState<{ title: string; desc: string } | null>(null);
  const [detailId, setDetailId] = useState<string | null>(null);
  const [genericTitle, setGenericTitle] = useState("");
  const [customChat, setCustomChat] = useState<string | null>(null);

  const showToast = (title: string, desc: string) => {
    setToast({ title, desc });
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    const fromHash = () => {
      const key = (location.hash.replace(/^#\/?/, "") || "home") as ViewKey;
      if (key in NAV_FROM_VIEW) {
        setView(key);
        setNav(NAV_FROM_VIEW[key]);
        if (key === "case") setHistoryId("h5");
        if (key === "chat" || key === "home") setHistoryId("h1");
      }
    };
    window.addEventListener("hashchange", fromHash);
    fromHash();
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const go = (next: ViewKey, n?: NavKey, hid?: string) => {
    setView(next);
    if (n) setNav(n);
    if (hid) setHistoryId(hid);
    const h = next === "home" ? "#/" : `#/${next}`;
    if (location.hash !== h) history.pushState(null, "", h);
  };

  const runCase = () => {
    setLoading(true);
    setLoadPct(0);
    setLoadText(LOADING_STAGES[0].text);
    let i = 0;
    const tick = () => {
      const stage = LOADING_STAGES[i];
      if (!stage) {
        setLoading(false);
        go("case", "助手", "h5");
        showToast(TOASTS["10"].title, TOASTS["10"].desc);
        return;
      }
      setLoadPct(stage.pct);
      setLoadText(stage.text);
      i += 1;
      setTimeout(tick, 700);
    };
    tick();
  };

  const onCard = (id: string) => {
    const t = TOASTS[id];
    if (t && id !== "10") showToast(t.title, t.desc);
    if (id === "01") go("chat", "助手", "h1");
    if (id === "02") {
      setDemandHi(true);
      go("demand", "需求");
    }
    if (id === "03") {
      setCatHi("规则");
      go("category", "品类");
    }
    if (id === "04") {
      setCatHi("验收");
      go("category", "品类");
    }
    if (id === "05") {
      setSrmTab("寻源任务");
      go("srm", "供应商");
    }
    if (id === "06") {
      setSrmTab("供应商认证");
      go("srm", "供应商");
    }
    if (id === "07") {
      setPurchaseHi(false);
      go("purchase", "采购");
    }
    if (id === "08") {
      setPurchaseHi(true);
      go("purchase", "采购");
    }
    if (id === "09") {
      setSrmTab("绩效评价");
      go("srm", "供应商");
    }
    if (id === "10") runCase();
  };

  const onQuick = (key: string) => {
    if (key === "采购需求") go("demand", "需求");
    if (key === "采购清单") go("purchase", "采购");
    if (key === "查询品类") go("category", "品类");
    if (key === "自动下单") runCase();
    if (key === "订单查询") go("purchase", "采购");
  };

  const onSendHome = () => {
    if (!prompt.trim()) return;
    if (prompt.includes("测试电机") || prompt.includes("防水")) runCase();
    else {
      setCustomChat(prompt);
      go("chat", "助手");
    }
  };

  const detail = useMemo(
    () => PRODUCTS.find((p) => p.id === detailId),
    [detailId]
  );

  const page = (() => {
    if (view === "home")
      return (
        <Home
          prompt={prompt}
          onPrompt={setPrompt}
          onSend={onSendHome}
          onQuick={onQuick}
          onCard={onCard}
        />
      );
    if (view === "chat") {
      if (customChat) return <GenericChat title={customChat} />;
      if (genericTitle && historyId !== "h1") return <GenericChat title={genericTitle} />;
      return (
        <div
          onClick={(e) => {
            const act = (e.target as HTMLElement).closest("button")?.getAttribute("data-act");
            if (act === "source") {
              setSrmTab("寻源任务");
              go("srm", "供应商");
            }
            if (act === "cat") go("category", "品类");
          }}
        >
          <Chat />
        </div>
      );
    }
    if (view === "demand") return <Demand highlight={demandHi} />;
    if (view === "category") return <Category highlight={catHi} onHome={() => go("home", "助手", "h1")} />;
    if (view === "srm") return <SRM tab={srmTab} onTab={setSrmTab} />;
    if (view === "purchase") return <Purchase highlight={purchaseHi} />;
    if (view === "board") return <Board />;
    return (
      <CasePage
        onToast={showToast}
        onDetail={(id) => setDetailId(id)}
      />
    );
  })();

  return (
    <Layout
      nav={nav}
      historyId={historyId}
      search={search}
      crumb={CRUMBS[view]}
      showBack={view !== "home"}
      onNav={(key, v) => {
        setCatHi(null);
        setDemandHi(false);
        setPurchaseHi(false);
        go(v, key, key === "助手" ? "h1" : historyId);
        if (key === "助手") setView("home");
      }}
      onHistory={(id, v) => {
        const item = HISTORY.find((h) => h.id === id);
        setHistoryId(id);
        setCustomChat(null);
        setGenericTitle(item?.title || "");
        if (v === "case") go("case", "助手", id);
        else if (id === "h1") go("chat", "助手", id);
        else {
          setView("chat");
          setNav("助手");
        }
      }}
      onSearch={setSearch}
      onNewChat={() => {
        setPrompt(DEFAULT_PROMPT);
        setCustomChat(null);
        go("home", "助手", "h1");
      }}
      onBack={() => go("home", "助手", "h1")}
      overlay={
        loading ? (
          <div className="overlay">
            <div className="load-card">
              <div className="circle">
                <Ring value={loadPct} />
                <span>{loadPct}%</span>
              </div>
              <p>{loadText}</p>
            </div>
          </div>
        ) : undefined
      }
      toast={
        toast ? (
          <div className="toast">
            <b>{toast.title}</b>
            <p>{toast.desc}</p>
          </div>
        ) : undefined
      }
    >
      {page}
      {detail && (
        <div className="drawer">
          <button className="close" onClick={() => setDetailId(null)}>
            ✕
          </button>
          <h3>{detail.name}</h3>
          <p>
            {detail.sku} · {detail.city}
          </p>
          <p>{detail.tags}</p>
          <p>{detail.desc}</p>
          <p>单价 ¥{detail.price.toLocaleString()} × {detail.qty} 台</p>
        </div>
      )}
    </Layout>
  );
}
