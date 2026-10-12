import useThemeStore from "@/store/themeStore";
import React from "react";

import { categories } from "@/components/common/header/Categories";
import Input from "@/components/ui/Input";

const ListingBasicInfo = ({ form, updateField }) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <section
      className={`rounded-2xl p-6 shadow-lg ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"} `}
    >
      <div className="space-y-5">
        {/* Product title */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Product title
          </label>

          <Input
            type="text"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Example: iPhone 13 Pro"
          />
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-medium">Price</label>

          <div className="flex">
            <span
              className={`flex items-center rounded-xl px-4 text-sm ${theme === "dark" ? "border border-slate-600 border-r-0" : "border border-slate-300 border-r-0"} `}
            >
              ETB
            </span>

            <Input
              type="number"
              value={form.price}
              onChange={(e) => updateField("price", e.target.value)}
              placeholder="50000"
              className="border border-l-0"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium">Category</label>
          {/* Later we will add different option here */}
          <select
            value={form.category}
            onChange={(e) => updateField("category", e.target.value)}
            className={`w-full rounded-xl border border-slate-400 px-4 py-3 outline-none transition focus:border-blue-500
              ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}
          >
            {categories.map((category) => {
              return (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ListingBasicInfo;
