import useThemeStore from "@/store/themeStore";
import productStore from "@/store/productStore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideUp } from "@/utils/animate";

const Categories = () => {
  const theme = useThemeStore((state) => state.theme);
  const products = productStore((state) => state.products);

  const categories = [
    { name: "Phones", fallback: "" },
    { name: "Electronics", fallback: "" },
    { name: "Furniture", fallback: "" },
    { name: "Vehicles", fallback: "" },
  ];

  const categoryItems = categories.map((category) => {
    const product = products.find(
      (item) =>
        item.category?.toLowerCase() === category.name.toLowerCase() &&
        item.images?.[1],
    );

    return {
      ...category,
      image: product?.images?.[0] || category.fallback,
    };
  });

  return (
    <section
      className={`py-8 ${theme === "dark" ? "bg-slate-950" : "bg-slate-100"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-xl font-semibold">Explore Categories</h2>

        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 md:grid-cols-4"
        >
          {categoryItems.map((category) => (
            <Link
              key={category.name}
              to={`/app/browse=${encodeURIComponent(category.name)}`}
              className={`group overflow-hidden rounded-xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${theme === "dark" ? "bg-slate-900" : "bg-slate-200"} `}
            >
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-36 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-36 items-center justify-center">
                  Image unavailable
                </div>
              )}

              <div className="p-3 text-center font-medium">{category.name}</div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
