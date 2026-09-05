import productStore from "@/store/productStore";
import useThemeStore from "@/store/themeStore";
import { Link } from "react-router-dom";
import { useAuth } from "@/store/authStore";

const MyListings = () => {
  const { theme } = useThemeStore();
  const { products } = productStore();
  const { user } = useAuth();

  const myProducts = products.filter(
    (product) => product.sellerId === user.id
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Listings</h1>

        <Link
          to="/app/create-listing"
          className="bg-green-700 text-white px-5 py-2 rounded-lg shadow-2xl transition-all duration-500 ease-in-out hover:translate-x-1"
        >
          + Create Listing
        </Link>
      </div>

      {myProducts.length === 0 ? (
        <div className="p-6 rounded-xl shadow">
          <p>You have no listings yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {myProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl shadow-2xl overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer ${
                theme === "dark" ? "bg-slate-900/80" : "bg-slate-50"
              }`}
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-lg">{product.title}</h2>

                <p className="text-blue-600 font-bold mt-2">
                  {product.price} ETB
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {product.category}
                </p>

                <div className="mt-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${
                        product.status === "APPROVED"
                          ? "text-green-700"
                          : product.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListings;