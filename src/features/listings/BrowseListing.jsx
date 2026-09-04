import { memo, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import useProductStore from "@/store/productStore";
import useThemeStore from "@/store/themeStore";

import { categories } from "@/components/common/header/Categories";

const BrowseListing = () => {
  const theme = useThemeStore((state) => state.theme);
  const products = useProductStore((state) => state.products);

  const [searchParams] = useSearchParams();
  const [condition, setCondition] = useState("");

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const selectedCategory = useMemo(
    () => categories.find((item) => item.value === category),
    [category],
  );

  const categoryTitle = selectedCategory?.name || "All Listings";

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search?.trim().toLowerCase();

    return products.filter((product) => {
      // Only approved products
      if (product.status !== "APPROVED") {
        return false;
      }

      // Category filter
      if (category && product.category !== category) {
        return false;
      }

      // Search filter
      if (
        normalizedSearch &&
        !product.title?.toLowerCase().includes(normalizedSearch)
      ) {
        return false;
      }

      // Condition filter
      if (condition && product.condition !== condition) {
        return false;
      }

      return true;
    });
  }, [products, category, search, condition]);

  return (
    <div className="w-full mx-auto ml-6 p-6 pr-12">
      <h1 className="mb-6 text-3xl font-bold">
        {category ? `${categoryTitle} Listings` : "All Listings"}
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Conditions</option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-gray-500">No products found.</p>
      )}
    </div>
  );
};

const ProductCard = memo(({ product }) => {
  return (
    <Link
      to={`/app/product/${product.id}`}
      className="rounded-2xl overflow-hidden border-gray-200 dark:border dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        loading="lazy"
        decoding="async"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg truncate">{product.title}</h2>

        <p className="text-blue-600 font-bold text-lg mt-1">
          {Number(product.price).toLocaleString()} ETB
        </p>

        <div className="flex items-center gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400">
          {product.condition && <span>{product.condition}</span>}

          {product.condition && product.location?.city && <span>•</span>}

          {product.location?.city && <span>{product.location.city}</span>}
        </div>
      </div>
    </Link>
  );
});

export default BrowseListing;
