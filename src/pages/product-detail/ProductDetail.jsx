import { useParams, Link, useNavigate } from "react-router-dom";
import products from "@/data/products";
import { useCart } from "@/store/cartStore";
import { useWishlist } from "@/store/wishlistStore";
import Button from "@/components/ui/Button";
import {
  BadgeCheck,
  Clock3,
  Heart,
  MapPin,
  PackageCheck,
  RotateCcw,
  Send,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import SellerDetail from "./SellerDetail";

const ProductDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const goToChat = () => {
    navigate("/app/chat");
  };

  const { addToCart } = useCart();

  const { addToWishlist, wishlist } = useWishlist();

  // Find product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="grid grid-cols-1 h-full p-8 mx-12">
      {/* Product Main Section */}

      <div className="lg:col-span-2 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-8">
        <div className="flex flex-cols-2 lg:flex-cols-2">
          {/* Image */}

          <div>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-162.5 rounded-2xl object-contain"
            />
          </div>

          {/* Details */}

          <div className="flex flex-col flex-1 p-10">
            <span className="text-blue-600 font-medium">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold mt-2">{product.title}</h1>

            <p className="text-4xl font-bold text-blue-600 mt-5">
              {product.price} ETB
            </p>

            {/* Description */}

            <div className="mt-8 pt-6">
              <h className="text-xl font-bold mb-3">Description</h>

              <p className="leading-8 text-slate-600">{product.description}</p>
            </div>

            {/* Product Highlights */}

            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-600" size={20} />
                <span>Excellent Condition</span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-green-600" size={20} />
                <span>Original Product</span>
              </div>

              <div className="flex items-center gap-3">
                <PackageCheck className="text-green-600" size={20} />
                <span>Fast Delivery</span>
              </div>

              <div className="flex items-center gap-3">
                <RotateCcw className="text-green-600" size={20} />
                <span>7-Day Return</span>
              </div>
            </div>

            {/* Location */}

            <div className="flex items-center gap-3 mt-8 text-slate-600">
              <MapPin size={20} />
              {product.place}
            </div>

            {/* Time */}

            <div className="flex items-center gap-3 mt-3 text-slate-600">
              <Clock3 size={20} />
              {product.time_served}
            </div>

            <div className="mt-8 mb-0 flex flex-4 gap-4 w-2xl">
              <Button
                variant="primary"
                size="lg"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart className="pr-3 size-8" /> Add to Cart
              </Button>

              <Button
                variant="primary"
                size="lg"
                onClick={() => addToWishlist(product)}
                disabled={isWishlisted}
                className={`w-2xl  ${
                  isWishlisted
                    ? "bg-red-100 text-red-600 cursor-not-allowed"
                    : "hover:bg-gray-600"
                }`}
              >
                <Heart
                  size={18}
                  className={`pr-3 size-8 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
                />

                {isWishlisted ? "Saved" : "Add to Wishlist"}
              </Button>

              <Button
                variant="primary"
                size="lg"
                className="w-2xl "
                onClick={goToChat}
              >
                <Send size={18} className="pr-3 size-8" /> chat with seller
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1  p-6 top-6">
          <SellerDetail />
        </div>
      </div>

      {/* Related Products */}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter(
              (p) => p.category === product.category && p.id !== product.id,
            )
            .map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-40
                    w-full
                    object-cover
                  "
                />

                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="text-blue-600 font-bold mt-2">
                    {item.price} ETB
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
