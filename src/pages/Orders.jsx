import { useOrders } from "@/store/orderStore";
import useThemeStore from "@/store/themeStore";
import { MapPin, Phone, User2 } from "lucide-react";

const Orders = () => {
  const { theme } = useThemeStore();
  const { orders } = useOrders();

  return (
    <div
      className={`max-w-5xl mx-auto p-6 shadow-2xl rounded-2xl ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="rounded-xl shadow p-8 text-center">
          <p className="text-gray-500">You have no orders yet.</p>
        </div>
      ) : (
        <div className={`space-y-6 gap-6 `}>
          {orders.map((order) => (
            <div
              className={` rounded-2xl shadow-2xl hover:scale-[1.01] transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}
            >
              <div key={order.id} className="rounded-2xl shadow p-6">
                {/* Header */}

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="font-bold text-lg">Order #{order.id}</h2>

                    <p className="text-sm text-gray-500">
                      Placed: {order.date}
                    </p>
                  </div>

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {order.status}
                  </span>
                </div>

                {/* Customer */}

                <div className="border-t border-slate-400 p-4 gap-6">
                  <h3 className="font-semibold mb-2">Shipping Details</h3>

                  <p className="flex flex-1 gap-3 p-4">
                    <User2 /> {order.customer?.name}
                  </p>

                  <p className="flex flex-1 gap-3 p-4">
                    <Phone /> {order.customer?.phone}
                  </p>

                  <p className="flex flex-1 gap-3 p-4">
                    <MapPin />
                    {order.customer?.address}
                  </p>
                </div>

                {/* Products */}

                <div className="border-t border-slate-500 mt-4 pt-4">
                  <h3 className="font-semibold mb-3">Items</h3>

                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between mb-2">
                      <span>
                        {item.title} × {item.quantity || 1}
                      </span>

                      <span className="font-semibold">
                        {item.price * (item.quantity || 1)} ETB
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total */}

                <div className="border-t border-slate-500 mt-4 pt-4">
                  <p className="text-xl font-bold">Total: {order.total} ETB</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
