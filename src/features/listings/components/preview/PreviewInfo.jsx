import { Tag } from "lucide-react";

const PreviewInfo = ({ title, price, category, brand, age, description }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-2">
        {category && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {category}
          </span>
        )}
      </div>

      <h1 className="mt-4 break-words text-2xl font-bold text-slate-900 sm:text-3xl">
        {title || "Product Name"}
      </h1>

      <div className="mt-3 flex items-center gap-2">
        <Tag className="h-5 w-5 text-green-600" />

        <p className="text-2xl font-bold text-green-600 sm:text-3xl">{price}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {brand && (
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">Brand</p>
            <p className="mt-1 font-medium text-slate-800">{brand}</p>
          </div>
        )}

        {age !== "" && age != null && (
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs text-slate-400">Age</p>
            <p className="mt-1 font-medium text-slate-800">
              {age} {Number(age) === 1 ? "year" : "years"}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 p-4">
        <h3 className="text-sm font-semibold text-slate-900">
          Product summary
        </h3>

        <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-slate-600">
          {description?.trim() ||
            "Add a description to tell buyers more about this product."}
        </p>
      </div>
    </div>
  );
};

export default PreviewInfo;
