import useThemeStore from "@/store/themeStore";
import { useParams } from "react-router-dom";
import { useProducts } from "@/store/productStore";

import QuickButton from "./QuickButton";
import RelatedProduct from "./RelatedProduct";
import Description from "./Description";
import ProductGallery from "./ProductGallery";


const ProductDetail = () => {
  const { theme } = useThemeStore();
  const { id } = useParams();
  const { products } = useProducts();

  const product = products.find(
    (p) => p.id === Number(id)
  );
  if (!product) {
    return <div className="p-6">Product not found</div>;
  }
  return (
    <div
      className={`p-2 md:p-4 ${theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
        }`}
    >
      <div
        className={`rounded-2xl overflow-hidden ${theme === "dark"
            ? "bg-slate-900"
            : "bg-white"
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8 p-4 md:p-6">
          <ProductGallery product={product} />
          <div className="flex flex-col justify-center gap-6">
            <Description product={product} />

            <div
              className={`border-t pt-5 ${theme === "dark"
                ? "border-slate-700"
                : "border-slate-200"
                }`}
            >
              <QuickButton product={product} />
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct product={product} />
    </div>
  );
};

export default ProductDetail;
