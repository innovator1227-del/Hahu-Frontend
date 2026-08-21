import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const PreviewGallery = ({ images = [], title = "" }) => {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const selectedImage =
    images.find((image) => image.id === selectedImageId) || images[0];

  if (!images.length) {
    return (
      <div className="flex aspect-square min-h-[280px] items-center justify-center rounded-2xl border-2 border border-slate-300 bg-slate-50">
        <div className="text-center">
          <ImageIcon className="mx-auto h-10 w-10 text-slate-400" />

          <p className="mt-3 text-sm font-medium text-slate-600">
            No product photos yet
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Upload photos to see your listing preview.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 cursor-pointer">
      {/* Main image */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 cursor-pointer">
        {selectedImage && (
          <img
            src={selectedImage.preview}
            alt={title || "Product preview"}
            className="aspect-square w-full object-contain"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedImageId(image.id)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              selectedImage?.id === image.id
                ? "border-green-500"
                : "border-transparent"
            }`}
          >
            <img
              src={image.preview}
              alt={`${title || "Product"} ${index + 1}`}
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreviewGallery;
