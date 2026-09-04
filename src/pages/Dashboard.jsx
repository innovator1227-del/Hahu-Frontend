import { Link } from "react-router-dom";
import productStore from "@/store/productStore";
import whishlistStore from "@/store/wishlistStore";
import orderStore from "@/store/orderStore";
import useThemeStore from "@/store/themeStore";

const Dashboard = () => {
  const { theme } = useThemeStore();
  const { products } = productStore();

  const { wishlist } = whishlistStore();

  const { orders } = orderStore();
  const myListings = products.filter((product) => product.status === "PENDING");

  return (
    <div className="space-y-8">
      {/* Welcome */}

      <div>
        <h1 className="text-3xl font-bold">Welcome to Hahu Market</h1>

        <p className="mt-2">Manage your marketplace activity from here.</p>
      </div>

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ease-in-out shadow-2xl hover:scale-105 ${theme === "dark" ? "bg-slate-900" : ""}`}
        >
          <h3 className="text-gray-500">My Listings</h3>

          <p className="text-3xl font-bold mt-2">{myListings.length}</p>
        </div>

        <div
          className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ease-in-out shadow-2xl hover:scale-105 ${theme === "dark" ? "bg-slate-900" : ""} `}
        >
          <h3 className="text-gray-500">Wishlist</h3>

          <p className="text-3xl font-bold mt-2">{wishlist.length}</p>
        </div>

        <div
          className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ease-in-out shadow-2xl hover:scale-105 ${theme === "dark" ? "bg-slate-900" : ""} `}
        >
          <h3 className="text-gray-500">Orders</h3>

          <p className="text-3xl font-bold mt-2">{orders.length}</p>
        </div>

        <div
          className={`p-6 rounded-xl cursor-pointer transition-all duration-500 ease-in-out shadow-2xl hover:scale-105 ${theme === "dark" ? "bg-slate-900" : ""} `}
        >
          <h3 className="text-gray-500">Messages</h3>

          <p className="text-3xl font-bold mt-2">2</p>
        </div>
      </div>

      {/* Quick Actions */}

      <div
        className={`rounded-xl shadow-xl p-6 ${theme === "dark" ? "bg-slate-900" : ""}`}
      >
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-4">
          <div className="hover:scale-[1.01] transition-all duration-700 ease-in-out px-5 py-2 shadow-2xl">
            <Link
              to="/app/create-listing"
              className="bg-green-700 rounded-lg hover:bg-green-600 p-2.5"
            >
              + Create Listing
            </Link>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out shadow-2xl rounded-2xl p-2.5 hover:scale-[1.02] ${theme === "dark" ? "bg-slate-800" : ""}`}
          >
            <Link to="/app/browse">Browse Products</Link>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out shadow-2xl rounded-2xl p-2.5 hover:scale-[1.02] ${theme === "dark" ? "bg-slate-800" : ""}`}
          >
            <Link to="/app/orders">View Orders</Link>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out shadow-2xl rounded-2xl p-2.5 hover:scale-[1.02] ${theme === "dark" ? "bg-slate-800" : ""}`}
          >
            <Link to="/app/wishlist">My Wishlist</Link>
          </div>
        </div>
      </div>

      {/* Recent Activity */}

      <div
        className={`rounded-xl shadow-xl p-6 ${theme === "dark" ? "bg-slate-900" : ""}`}
      >
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          orders.slice(0, 3).map((order) => (
            <div key={order.id} className=" py-3 flex justify-between">
              <span>Order #{order.id}</span>

              <span className="text-yellow-600">{order.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
