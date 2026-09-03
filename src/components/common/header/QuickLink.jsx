import cartStore from "@/store/cartStore";
import { Bell, Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const QuickLink = () => {
  const { cartItems, message } = cartStore();

  return (
    <div className="flex flex-1 items-center gap-8">
      {message && (
        <div className="fixed top-24 right-4 border border-slate-700 px-4 py-2.5 rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          {message}
        </div>
      )}
      <Link
        to="/app/notifications"
        className="relative w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 shadow-lg transition-all duration-500"
      >
        <Bell size={19} />
        <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
      </Link>
      <Link
        to="/app/wishlist"
        className="relative w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-500 shadow-lg"
      >
        <Heart size={19} />
        <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-[10px] font-bold text-white rounded-full w-4.5 h-4.5 flex items-center justify-center">
          n
        </span>
      </Link>
      <Link
        to="/app/cart"
        className="relative w-9 h-9 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-500 shadow-lg"
      >
        <ShoppingCart size={19} />
        {cartItems.length > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-[10px] font-bold text-white rounded-full w-4.5 h-4.5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default QuickLink;
