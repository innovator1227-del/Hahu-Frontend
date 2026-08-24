import useThemeStore from "@/store/themeStore";
import { Pointer } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeSection = ({ title, products }) => {
  const { theme } = useThemeStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);
  if (products.length === 0) return null;

  return (
    <section
      className={`mb-10 transition-all duration-500 ease-in-out ${
        open ? "opacity-100 translate-y-2" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">{title}</h2>

        <Link to={`/app/browse?category=${title}`} className="text-blue-600">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <Link
            key={product.id}
            to={`/app/product/${product.id}`}
            className={`transition-all duration-300 ease-in-out rounded-lg overflow-hidden shadow-2xl hover:shadow-lg hover:scale-105 opacity-100 ${theme === "dark" ? "bg-slate-900/80" : "bg-slate-50"}`}
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">{product.title}</h3>

              <p className="text-blue-600 font-bold">{product.price} ETB</p>

              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
            <div className="mt-2 flex flex-1 gap-3  shadow-lg p-2 m-1 rounded-lg items-center w-full md:w-72 text-sm font-medium">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-green-600">
                <Pointer className="h-5 w-5" />
              </div>
              click image to see detail
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
