import { hover } from "framer-motion";

export const themes = {
  darkblue: {
    background: "bg-gradient-to-br from-[#1E3A8A] via-[#0B1220] to-[#020817]",
    sidebar: "bg-gradient-to-b from-[#1E3A8A] via-[#0F172A] to-[#020617]",
    header: "bg-gradient-to-br from-[#1E3A8A] via-[#0B1230] to-[#020817]",
    dropdown: "bg-slate-800",
    text: "text-white",
    dropdownText: "text-white",
  },
  white: {
    background: "bg-white",
    text: "text-black",

    sidebar: "bg-gray-100",
    sidebarText: "text-black",

    header: "bg-white",
    headerText: "text-black",

    dropdown: "bg-slate-400",
    dropdownText: "text-slate-900",
  },

  black: {
    background: "bg-black",
    text: "text-white",

    sidebar: "bg-neutral-900",
    sidebarText: "text-white",

    header: "bg-neutral-800",
    headerText: "text-white",

    dropdown: "bg-slate-800",
    dropdownText: "text-white",
  },
};
