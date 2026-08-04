import { useParams } from "react-router-dom";
import products from "@/data/products";
import SellerDetail from "./SellerDetail";
import QuickButton from "./QuickButton";
import RelatedProduct from "./RelatedProduct";
import Description from "./Description";
import { useState } from "react";

const ProductDetail = () => {
  //const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const { id } = useParams();
  // Find product
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

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
            <Description />

            <QuickButton />
          </div>
        </div>
        <div className="lg:col-span-1  p-6 top-6">
          <SellerDetail />
        </div>
      </div>

      {/* Related Products */}

      <RelatedProduct />
    </div>
  );
};

export default ProductDetail;
