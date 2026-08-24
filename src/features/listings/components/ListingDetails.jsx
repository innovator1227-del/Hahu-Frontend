import useThemeStore from "@/store/themeStore";

const ListingDetails = ({ form, updateField }) => {
  const { theme } = useThemeStore();
  const conditions = [
    {
      value: "New",
      label: "New",
      description: "Unused and in original condition",
    },
    {
      value: "Like New",
      label: "Like New",
      description: "Almost unused with minimal signs of use",
    },
    {
      value: "Good",
      label: "Good",
      description: "Used but well maintained",
    },
    {
      value: "Fair",
      label: "Fair",
      description: "Visible signs of use but still functional",
    },
    {
      value: "Poor",
      label: "Poor",
      description: "Obsolete or requires repair",
    },
  ];

  return (
    <section
      className={`rounded-2xl p-6 shadow-sm ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"} `}
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Product details</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Brand */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Brand</label>

          <input
            type="text"
            value={form.brand}
            onChange={(e) => updateField("brand", e.target.value)}
            placeholder="Example: Apple"
            className="w-full rounded-xl border border-slate-400 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-0 focus:ring-blue-100"
          />
        </div>

        {/* Model */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Model</label>

          <input
            type="text"
            value={form.model}
            onChange={(e) => updateField("model", e.target.value)}
            placeholder="Example: iPhone 13 Pro"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-0 focus:ring-blue-100"
          />
        </div>

        {/* Age */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            How old is Your Product?
          </label>

          <div className="flex">
            <input
              type="number"
              min="0"
              value={form.age}
              onChange={(e) => updateField("age", e.target.value)}
              placeholder="Example: 2"
              className="w-full rounded-l-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-0 focus:ring-blue-100"
            />

            <span className="flex items-center rounded-r-xl border border-l-0 border-slate-300 px-4 text-sm">
              years
            </span>
          </div>
        </div>
      </div>

      {/* Condition */}
      <div className="mt-7">
        <div className="mb-3">
          <label className="text-sm font-semibold">Product condition</label>

          <p className="mt-1 text-xs">
            Be honest about the condition to build buyer trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => {
            const selected = form.condition === condition.value;

            return (
              <button
                key={condition.value}
                type="button"
                onClick={() => updateField("condition", condition.value)}
                className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                  selected
                    ? "border-green-500 ring-0 ring-green-100"
                    : "border-slate-200 hover:border-slate-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-semibold ${
                      selected ? "text-green-700" : ""
                    }`}
                  >
                    {condition.label}
                  </span>

                  <span
                    className={`h-4 w-4 rounded-full border-2 ${
                      selected
                        ? "border-green-500 bg-green-500"
                        : "border-slate-300"
                    }`}
                  />
                </div>

                <p className="mt-2 text-xs leading-5">
                  {condition.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListingDetails;
