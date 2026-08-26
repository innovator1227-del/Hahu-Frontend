import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProductGallery = ({product}) => {
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
  }, [product]);

  return (
    <>
      <div className="flex gap-4 rounded-2xl flex-1">
        <div className="flex flex-col gap-2">

          {/* Thumbnails */}
          <div className="flex flex-col sm:flex-row gap-4 p-3">
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden border-2 cursor-pointer ${
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
                  className="w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-2xl object-contain cursor-zoom-in"
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
