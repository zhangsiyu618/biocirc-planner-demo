const iconPaths = {
  leaf: [
    <path key="a" d="M18 4c-6 1-10 4.8-10 10.5 0 3 1.9 5.5 5.1 5.5 4.9 0 7.9-4.8 7.9-16Z" />,
    <path key="b" d="M7 17c2.2-1.4 4.4-3.7 6.3-6.7" />
  ],
  folder: [
    <path key="a" d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />,
    <path key="b" d="M3 7a2 2 0 0 1 2-2h4l2 2" />
  ],
  bookmark: [<path key="a" d="M7 4h10a1 1 0 0 1 1 1v15l-6-3-6 3V5a1 1 0 0 1 1-1Z" />],
  help: [
    <circle key="a" cx="12" cy="12" r="9" />,
    <path key="b" d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.8.7-1.7 1.3-1.7 2.7" />,
    <path key="c" d="M12 17h.01" />
  ],
  user: [
    <circle key="a" cx="12" cy="8" r="3.2" />,
    <path key="b" d="M5 19c1.6-3.1 4-4.7 7-4.7s5.4 1.6 7 4.7" />
  ],
  map: [
    <path key="a" d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2Z" />,
    <path key="b" d="M9 4v14" />,
    <path key="c" d="M15 6v14" />
  ],
  users: [
    <circle key="a" cx="9" cy="8" r="2.7" />,
    <circle key="b" cx="16.5" cy="9.5" r="2.2" />,
    <path key="c" d="M4.5 18c1.4-2.7 3.4-4 6.1-4 2.7 0 4.8 1.3 6.1 4" />,
    <path key="d" d="M15 14.5c2 0 3.5.9 4.5 2.9" />
  ],
  community: [
    <path key="a" d="M4 19h16" />,
    <path key="b" d="M6 19v-8l6-4 6 4v8" />,
    <path key="c" d="M10 19v-4h4v4" />
  ],
  wrench: [<path key="a" d="M15 5a4 4 0 0 0-5.5 5.5L4 16l2 2 5.5-5.5A4 4 0 0 0 17 7l-2 2-2-2Z" />],
  waste: [
    <path key="a" d="M5 7h14" />,
    <path key="b" d="M8 7V5h8v2" />,
    <path key="c" d="M7 7l1 12h8l1-12" />,
    <path key="d" d="M10 11v5" />,
    <path key="e" d="M14 11v5" />
  ],
  energy: [<path key="a" d="M13 2 5 14h5l-1 8 8-12h-5Z" />],
  sparkles: [
    <path key="a" d="m12 3 1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3Z" />,
    <path key="b" d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8Z" />
  ],
  send: [
    <path key="a" d="M3 11.5 21 3l-5.8 18-3.5-6-6-3.5Z" />,
    <path key="b" d="M9 15 21 3" />
  ],
  check: [<path key="a" d="m5 12 4 4 10-10" />],
  alert: [
    <path key="a" d="M12 4 21 20H3Z" />,
    <path key="b" d="M12 9v4" />,
    <path key="c" d="M12 17h.01" />
  ],
  chart: [
    <path key="a" d="M4 19h16" />,
    <path key="b" d="M7 16v-4" />,
    <path key="c" d="M12 16V8" />,
    <path key="d" d="M17 16v-6" />
  ],
  gear: [
    <circle key="a" cx="12" cy="12" r="3.2" />,
    <path key="b" d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.8 1.8 0 1 1-2.5 2.5l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a1.8 1.8 0 0 1-3.6 0v-.1a1 1 0 0 0-.7-.9 1 1 0 0 0-1.1.2l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a1.8 1.8 0 0 1 0-3.6h.1a1 1 0 0 0 .9-.7 1 1 0 0 0-.2-1.1l-.1-.1a1.8 1.8 0 0 1 2.5-2.5l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a1.8 1.8 0 1 1 3.6 0v.1a1 1 0 0 0 .7.9 1 1 0 0 0 1.1-.2l.1-.1a1.8 1.8 0 1 1 2.5 2.5l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.1a1.8 1.8 0 0 1 0 3.6H20a1 1 0 0 0-.6.7Z" />
  ],
  recycle: [
    <path key="a" d="m8 6 2-3 2 3" />,
    <path key="b" d="M10 3v5" />,
    <path key="c" d="m18 11 3 1-1 3" />,
    <path key="d" d="m21 12-4 2" />,
    <path key="e" d="m6 16-3 1 1 3" />,
    <path key="f" d="m3 17 4 2" />,
    <path key="g" d="M8 8h8l2 4-4 7H8l-4-7Z" />
  ],
  pin: [
    <path key="a" d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" />,
    <circle key="b" cx="12" cy="10" r="2.3" />
  ],
  factory: [
    <path key="a" d="M3 19h18" />,
    <path key="b" d="M5 19V9l5 3V9l5 3V6h4v13" />
  ],
  storage: [
    <path key="a" d="M4 8h16v4H4Z" />,
    <path key="b" d="M4 14h16v4H4Z" />
  ],
  road: [
    <path key="a" d="M10 3h4l2 18H8Z" />,
    <path key="b" d="M12 6v2" />,
    <path key="c" d="M12 11v2" />,
    <path key="d" d="M12 16v2" />
  ]
};

export function Icon({ name, className = "" }) {
  return (
    <span className={`icon ${className}`.trim()}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {iconPaths[name]}
      </svg>
    </span>
  );
}
