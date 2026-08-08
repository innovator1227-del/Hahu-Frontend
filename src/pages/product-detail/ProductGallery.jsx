import products from "@/data/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProductGallery = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const images = Array.isArray(product.images)
    ? product.images
    : [product.images];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [open, setOpen] = useState(false);

  const slides = images.map((image) => ({
    src: image,
  }));

  useEffect(() => {
    setSelectedImage(images[0] || null);
  }, [id]);

  return (
    <>
      <div className="flex gap-4 rounded-2xl flex-1">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">
            Welcome Back to Hahu and Enjoy WIth Brand and Chip products
          </h1>

          {/* Thumbnails */}
          <div className="flex flex-col-1 gap-6 p-3 m-3">
            <div className="flex flex-col gap-6">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`w-28 h-28 rounded-xl overflow-hidden border-2 cursor-pointer ${
                    selectedImage === image
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="rounded-2xl flex items-center justify-between">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt={product.title}
                  onClick={() => setOpen(true)}
                  className="w-full h-[650px] rounded-2xl object-contain cursor-zoom-in"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </>
  );
};

export default ProductGallery;
