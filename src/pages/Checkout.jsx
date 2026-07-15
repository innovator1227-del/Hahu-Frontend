import { useCart } from "../store/cartStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";


const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    alert("Order placed successfully!");
    setCartItems([]);
    // later we will send to backend
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* LEFT - FORM */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
        <h2 className="text-xl text-slate-900 font-bold mb-6">Shipping Details</h2>

        <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-slate-700">
          Full Name
        </label>

          <input
         placeholder="Name"
         className="w-full h-12 rounded-xl border border-slate-300 bg-white px-4 focus:outline-none focus:ring-0.5 focus:ring-gray-500 focus:border-gray-500 transition"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input 
          placeholder="09...."
          className="w-full h-12 rounded-xl border border-slate-300 bg-white px-4 focus:outline-none focus:ring-o.5 focus:ring-gray-500 focus:border-gray-500 transition"/>
         </div>
        
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Enter your Adress
          </label>
         <textarea
          placeholder="Address"
         onChange={handleChange}
         className="w-full h-12 rounded-xl border border-slate-300 bg-white px-4 focus:outline-none focus:ring-0.5 focus:ring-gray-300 focus:border-gray-500 focus:to-black transition"
        />
        </div>
        

        <Button
          onClick={placeOrder}
          variant="primary"
          size="lg"
        >
          Place Order
        </Button>
      </div>

      {/* RIGHT - ORDER SUMMARY */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.title} × {item.quantity || 1}
            </span>
            <span>
              {item.price * (item.quantity || 1)} ETB
            </span>
          </div>
        ))}

        <hr className="my-3" />

        <h3 className="text-lg font-bold">
          Total: {total} ETB
        </h3>
      </div>

    </div>
    </div>
  );
};

export default Checkout;