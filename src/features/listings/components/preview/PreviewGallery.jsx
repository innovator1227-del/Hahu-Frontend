import { Image as ImageIcon } from "lucide-react";

const PreviewGallery = ({ images = [], title = "" }) => {
  const coverImage = images[0];

  if (!images.length) {
    return (
      <div className="flex aspect-square min-h-[280px] items-center justify-center rounded-2xl border border-slate-400">
        <div className="text-center">
          <ImageIcon className="mx-auto h-10 w-10" />

          <p className="mt-3 text-sm font-medium">No product photos yet</p>

          <p className="mt-1 text-xs">
            Upload photos to see your listing preview.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 cursor-pointer">
      {/* Main image */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 cursor-pointer">
        {coverImage && (
          <img
            src={coverImage.preview}
            alt={title || "Product preview"}
            className="aspect-square w-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default PreviewGallery;
