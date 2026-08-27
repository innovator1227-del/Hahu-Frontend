import { useProducts } from "@/store/productStore";
import useThemeStore from "@/store/themeStore";
import React from "react";
import { Link } from "react-router-dom";

const RelatedProduct = ({ product }) => {
  const { theme } = useThemeStore();
  const { products } = useProducts();
  return (
    <div className="mt-10 md:mt-14 px-2 md:px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Related Products</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            More products you might like
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-5">
        {products
          .filter((p) => p.category === product.category && p.id !== product.id)
          .map((item) => (
            <Link
              key={item.id}
              to={`/app/product/${item.id}`}
              className={`rounded-xl overflow-hidden
                border transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl shadow-2xl
                ${
                  theme === "dark"
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                }
              `}
            >
              <img
                src={Array.isArray(item.images) ? item.images[0] : item.images}
                alt={item.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-blue-600 font-bold mt-2">{item.price} ETB</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
