import { useParams, Link } from "react-router-dom";
import products from "@/data/products";
import { useCart } from "@/store/cartStore";
import { useWishlist } from "@/store/wishlistStore";
import Button from "@/components/ui/Button";

const Product = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const { addToWishlist, wishlist } = useWishlist();

  // Find product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Main Section */}

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image */}

          <div>
            <img
              src={product.image}
              alt={product.title}
              className="
                w-full
                h-[450px]
                object-cover
                rounded-xl
              "
            />
          </div>

          {/* Details */}

          <div className="flex flex-col justify-center">
            <p className="text-gray-500">{product.category}</p>

            <h1 className="text-4xl font-bold mt-2">{product.title}</h1>

            <p className="text-blue-600 text-3xl font-bold mt-5">
              {product.price} ETB
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {product.description}
            </p>

            {product.place && (
              <p className="mt-5 text-gray-500">📍 {product.place}</p>
            )}

            <div className="flex gap-4 mt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => addToCart(product)}
              >
                🛒 Add to Cart
              </Button>

              <Button
                variant="primary"
                size="lg"
                onClick={() => addToWishlist(product)}
                disabled={isWishlisted}
                className={`
                  ${
                    isWishlisted
                      ? "bg-red-100 text-red-600 cursor-not-allowed"
                      : "hover:bg-gray-600"
                  }
                `}
              >
                {isWishlisted ? "❤️ Saved" : "♡ Add to Wishlist"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4
          gap-6
        "
        >
          {products
            .filter(
              (p) => p.category === product.category && p.id !== product.id,
            )
            .map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="
                  bg-white
                  rounded-xl
                  shadow
                  overflow-hidden
                  hover:shadow-lg
                  transition
                "
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

export default Product;
