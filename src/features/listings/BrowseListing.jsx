import { useProducts } from "@/store/productStore";
import useThemeStore from "@/store/themeStore";
import { categories } from "@/components/common/header/Categories";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const BrowseListing = () => {
  const { theme } = useThemeStore();
  const [open, setOpen] = useState(false);
  const { products } = useProducts();
  const [searchParams] = useSearchParams();
  const [condition, setCondition] = useState("");

  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const selectedCategory = categories.find(
    (item) => item.value === category
  );

  const categoryTitle = selectedCategory?.name || "All Listings";
  const filteredProducts = products.filter((product) => {
    const isApproved = product.status === "APPROVED";

    const matchesCategory = !category || product.category === category;

    const matchesSearch =
      !search ||
      product.title.toLowerCase().includes(search.toLowerCase());

    const matchesCondition =
      !condition || product.condition === condition;

    return isApproved && matchesCategory && matchesSearch && matchesCondition;
  });

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div
      className={`pr-12 p-6 w-full mx-auto ml-6 transition-all duration-500 ease-in-out ${open ? "opacity-100 translate-y-2" : "opacity-0 translate-y-6"
        }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        {category ? `${categoryTitle} Listings` : "All Listings"}
      </h1>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900"
        >
          <option value="">All Conditions</option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/app/product/${product.id}`}
            className="rounded-2xl overflow-hidden
   border-gray-200 dark:border dark:border-slate-800
  shadow-lg hover:shadow-xl
  transition-all duration-300
  hover:-translate-y-1"
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg truncate">
                {product.title}
              </h2>

              <p className="text-blue-600 font-bold text-lg mt-1">
                {product.price.toLocaleString()} ETB
              </p>

              <div className="flex items-center gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400">
                {product.condition && <span>{product.condition}</span>}

                {product.condition && product.location?.city && <span>•</span>}

                {product.location?.city && <span>{product.location.city}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default BrowseListing;
