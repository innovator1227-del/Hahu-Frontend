export const themes = {
  light: {
    name: "light",

    page: {
      background:
        "bg-[radial-gradient(circle_at_90%_10%,rgba(20,174,166,0.18),transparent_40%),radial-gradient(circle_at_15%_85%,rgba(10,144,156,0.10),transparent_35%)]",
      text: "text-slate-800",
    },

    surface: {
      background: "bg-white",
      border: "border-slate-200",
    },

    pattern: {
      enabled: false,
    },
  },

  dark: {
    name: "dark",

    page: {
      background: "bg-slate-950",
      text: "text-slate-100",
      border: "border-slate-700",
    },

    surface: {
      background: "bg-slate-900",
      border: "border-slate-700",
    },

    pattern: {
      enabled: true,

      glow: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(20,174,166,0.18),transparent_40%),radial-gradient(circle_at_15%_85%,rgba(10,144,156,0.10),transparent_35%)]",

      gradient:
        "pointer-events-none absolute inset-0 bg-[linear-gradient(-40deg,transparent_28%,rgba(100,134,196,0.12)_40%,transparent_43%)]",

      dots: "pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.22)_1px,transparent_1px)] bg-[size:18px_18px] opacity-40",
    },
  },
};
