export function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l1.4 5.2L18 9.6l-4.6 2.4L12 17l-1.4-5-4.6-2.4 4.6-1.4L12 3z" />
      <path d="M18.5 14.5l.6 2.2 2.1.6-2.1 1 .6 2.2-1.6-1.4-1.7 1.3.6-2.1-1.9-1 2.2-.6.6-2.2z" />
    </svg>
  );
}
export function IconList() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 7h12M8 12h12M8 17h12" />
      <circle cx="4.5" cy="7" r="1" fill="currentColor" />
      <circle cx="4.5" cy="12" r="1" fill="currentColor" />
      <circle cx="4.5" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}
export function IconBox() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 8l8-4 8 4-8 4-8-4z" />
      <path d="M4 8v8l8 4 8-4V8" />
      <path d="M12 12v8" />
    </svg>
  );
}
export function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <path d="M4 19c.4-3 2.4-4.5 5-4.5S13.6 16 14 19" />
      <circle cx="16.5" cy="8.5" r="2.3" />
      <path d="M16 14.6c2.3.2 4 1.6 4.4 4.4" />
    </svg>
  );
}
export function IconCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h2l1.4 9.2a2 2 0 0 0 2 1.8h7.8a2 2 0 0 0 2-1.6L21 9H8" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
    </svg>
  );
}
export function IconBoard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M8 9v7M12 12v4M16 8v8" />
    </svg>
  );
}
export function IconRisk() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3.5l8.5 15.5H3.5L12 3.5z" />
      <path d="M12 10v4.5" />
      <circle cx="12" cy="17.2" r="0.9" fill="currentColor" />
    </svg>
  );
}
export function IconSearch() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4 4" />
    </svg>
  );
}
export function IconClip() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 12.5l6.2-6.2a3 3 0 1 1 4.2 4.3L10.4 18.6a4.2 4.2 0 0 1-6-6l8.3-8.2" />
    </svg>
  );
}
export function IconLink() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 13a5 5 0 0 0 7.5.4l1.6-1.6a5 5 0 0 0-7.1-7.1L10.8 6" />
      <path d="M14 11a5 5 0 0 0-7.5-.4L4.9 12.2a5 5 0 0 0 7.1 7.1L13.2 18" />
    </svg>
  );
}
export function IconDoc() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5z" />
      <path d="M14 3.5V9h5.5" />
    </svg>
  );
}
export function IconBack() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function MotorThumb() {
  return (
    <svg width="52" height="52" viewBox="0 0 64 64">
      <ellipse cx="32" cy="50" rx="16" ry="3" fill="#dbe4ef" />
      <rect x="14" y="22" width="28" height="22" rx="4" fill="#cfd8e6" />
      <rect x="17" y="25" width="22" height="16" rx="3" fill="#5fd0c0" />
      <rect x="40" y="28" width="12" height="10" rx="2" fill="#94a3b8" />
      <circle cx="28" cy="33" r="4.5" fill="#1e3a5f" />
      <circle cx="28" cy="33" r="1.6" fill="#93c5fd" />
      <rect x="20" y="17" width="6" height="6" rx="1" fill="#64748b" />
      <rect x="30" y="17" width="6" height="6" rx="1" fill="#64748b" />
      <path d="M18 22h20l-2-4H20l-2 4z" fill="#e2e8f0" />
    </svg>
  );
}

export function Ring({ value, size = 92, stroke = 8 }: { value: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg width={size} height={size} className="circle-svg">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e8edf5" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#2563eb"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}
