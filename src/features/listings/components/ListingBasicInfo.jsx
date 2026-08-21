import React from "react";

const ListingBasicInfo = ({ form, updateField }) => {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="space-y-5">
        {/* Product title */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Product title
          </label>

          <input
            type="text"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Example: iPhone 13 Pro"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block text-sm font-medium">Price</label>

          <div className="flex">
            <span className="flex items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 px-4 text-sm text-slate-500">
              ETB
            </span>

            <input
              type="number"
              value={form.price}
              onChange={(e) => updateField("price", e.target.value)}
              placeholder="50000"
              className="w-full rounded-r-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
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
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
          >
            <option value="Phones">Phones</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Clothes">Clothes</option>
            <option value="Vehicles">Vehicles</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ListingBasicInfo;
