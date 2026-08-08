import QuickButton from "./QuickButton";
import RelatedProduct from "./RelatedProduct";
import Description from "./Description";
import ProductGallery from "./ProductGallery";

const ProductDetail = () => {
  return (
    <div className="grid grid-cols-1 p-8">
      <div className="shadow-lg hover:translate-1 transition-all duration-500 ease-out">
        <div className="flex gap-4 space-x-2">
          <ProductGallery />
          <QuickButton />
        </div>
        <div className="flex flex-1 m-4 p-3">
          <Description />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct />
    </div>
  );
};

export default ProductDetail;
