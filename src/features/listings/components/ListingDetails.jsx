import Input from "@/components/ui/Input";
import useThemeStore from "@/store/themeStore";

const ListingDetails = ({ form, updateField }) => {
  const theme = useThemeStore((state) => state.theme);
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

          <Input
            type="text"
            value={form.brand}
            onChange={(e) => updateField("brand", e.target.value)}
            placeholder="Example: Apple"
          />
        </div>

        {/* Model */}
        <div>
          <label className="mb-2 block text-sm font-semibold">Model</label>

          <Input
            type="text"
            value={form.model}
            onChange={(e) => updateField("model", e.target.value)}
            placeholder="Example: iPhone 13 Pro"
          />
        </div>

        {/* Age */}
        <div>
          <label className="mb-2 block text-sm font-semibold">
            How old is Your Product?
          </label>

          <div className="flex">
            <Input
              type="number"
              min="0"
              value={form.age}
              onChange={(e) => updateField("age", e.target.value)}
              placeholder="Example: 2"
              className="border border-r-0"
            />

            <span
              className={`flex items-center rounded-r-xl px-4 text-sm ${theme === "dark" ? "border border-slate-700 border-l-0" : "border border-slate-300 border-l-0"} `}
            >
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
                  selected ? "border-green-500 ring-0 ring-green-100" : ""
                } ${theme === "dark" ? "border border-slate-600" : "border border-slate-300"} `}
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
