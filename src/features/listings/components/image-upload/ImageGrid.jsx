import { Check, ImagePlus, Star, Trash2 } from "lucide-react";

const ImageGrid = ({
  images = [],
  onRemoveImage,
  onSetCoverImage,
  onClearAllImage,
}) => {
  return (
    <div>
      {/* Image Grid */}
      {images.length > 0 && (
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Uploaded photos
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                The first photo is your cover image.
              </p>
            </div>

            <button
              type="button"
              onClick={onClearAllImage}
              className="text-xs font-medium text-red-500 transition hover:text-red-700"
            >
              Remove all
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => {
              const isCover = index === 0;

              return (
                <div
                  key={image.id}
                  className=" group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                >
                  <img
                    src={image.preview}
                    alt={`Product preview ${index + 1}`}
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/25" />

                  {/* Cover Badge */}
                  {isCover && (
                    <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-green-600 px-2.5 py-1 text-xs font-semibold text-white shadow">
                      <Star className="h-3 w-3 fill-current" />
                      Cover
                    </div>
                  )}

                  {/* Image number */}
                  <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {index + 1}
                  </div>

                  {/* Action buttons */}
                  <div className="absolute right-2 top-2 flex translate-y-1 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {!isCover && (
                      <button
                        type="button"
                        onClick={() => onSetCoverImage(image.id)}
                        title="Set as cover"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-green-50 hover:text-green-600"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => onRemoveImage(image.id)}
                      title="Delete image"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 shadow-lg transition hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
