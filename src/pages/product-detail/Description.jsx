import { Check, Clock3, MapPin } from "lucide-react";
import React from "react";


const Description = ({ product }) => {
  return (
    <div className="w-full">
      <span className="inline-block text-sm font-semibold text-blue-600 mb-2">
        {product.category}
      </span>

      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        {product.title}
      </h1>

      <p className="text-3xl font-bold text-blue-600 mt-4">
        {product.price.toLocaleString()} ETB
      </p>

      {/* Description */}

      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
        <h2 className="text-xl font-bold mb-3">Description</h2>
        <p className="leading-7 text-slate-600 dark:text-slate-300"></p>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Category
          </p>
          <p className="font-medium mt-1 dark:text-white">
            {product.category}
          </p>
        </div>

        <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Location
          </p>
          <p className="font-medium mt-1 dark:text-white">
            {product.place}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-3">
        <Check className="text-green-600" size={20} />
        <span>Original Product</span>
      </div>

      <div className="flex items-center gap-3">
        <Check className="text-green-600" size={20} />
        <span>Fast Delivery</span>
      </div>

      <div className="flex items-center gap-3">
        <Check className="text-green-600" size={20} />
        <span>7-Day Return</span>
      </div>
      <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <span>{product.place}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={18} />
          <span>{product.time_served}</span>
        </div>
      </div>

    </div>
  );
};

export default Description;
