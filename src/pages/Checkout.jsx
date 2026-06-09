import { useCart } from "../store/cartStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    <div className="min-h-screen bg-gray-100 py-10">
         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* LEFT - FORM */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Address"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <button
          onClick={placeOrder}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Place Order
        </button>
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