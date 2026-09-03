import Button from "@/components/ui/Button";
import cartStore from "@/store/cartStore";
import whishlistStore from "@/store/wishlistStore";
import { Eye, Heart, Send, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickButton = ({ product }) => {
  const { addToCart } = cartStore();
  const navigate = useNavigate();
  const { addToWishlist, wishlist } = whishlistStore();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const goToChat = () => {
    navigate("/app/chat");
  };

  const goToSeller = () => {
    navigate("/app/sellerdetail");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full p-3">
      <Button
        variant="primary"
        size="sm"
        onClick={() => addToCart(product)}
        className="w-full"
      >
        <ShoppingCart className="mr-2 size-5" />
        Add to Cart
      </Button>

      <Button
        variant="primary"
        size="sm"
        onClick={() => addToWishlist(product)}
        disabled={isWishlisted}
        className={`w-full ${
          isWishlisted
            ? "bg-red-100 text-red-600 cursor-not-allowed"
            : "hover:bg-green-700"
        }`}
      >
        <Heart
          size={18}
          className={`mr-2 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
        />
        {isWishlisted ? "Saved" : "Add to Wishlist"}
      </Button>

      <Button variant="primary" size="sm" onClick={goToChat} className="w-full">
        <Send size={18} className="mr-2" />
        Chat with Seller
      </Button>

      <Button
        onClick={goToSeller}
        variant="primary"
        size="sm"
        className="w-full"
      >
        <Eye size={18} className="mr-2" />
        Seller Detail
      </Button>
    </div>
  );
};

export default QuickButton;
