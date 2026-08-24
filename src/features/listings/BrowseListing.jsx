import { useProducts } from "@/store/productStore";
import useThemeStore from "@/store/themeStore";
import { Pointer } from "lucide-react";

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const BrowseListing = () => {
  const { theme } = useThemeStore();
  const [open, setOpen] = useState(false);
  const { products } = useProducts();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredProducts = products.filter((product) => {
    const isApproved = product.status === "APPROVED";

    const matchesCategory = !category || product.category === category;

    return isApproved && matchesCategory;
  });

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div
      className={`pr-12 p-6 w-full mx-auto ml-6 transition-all duration-500 ease-in-out ${
        open ? "opacity-100 translate-y-2" : "opacity-0 translate-y-6"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        {category ? `${category} Listings` : "All Listings"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/app/product/${product.id}`}
            className={`rounded-lg overflow-hidden shadow-2xl hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105 ${theme === "dark" ? "bg-slate-900/80" : "bg-slate-50"}`}
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.title}</h2>

              <p className="text-blue-600 font-bold">{product.price} ETB</p>

              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
            <div className="mt-2 flex flex-1 gap-3 shadow-lg p-3 m-1.5 rounded-lg items-center w-full md:w-72 text-sm font-medium">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-green-600">
                <Pointer className="h-5 w-5" />
              </div>
              click image to see detail
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
