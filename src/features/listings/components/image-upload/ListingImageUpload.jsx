import { ImagePlus } from "lucide-react";
import UploadArea from "./UploadArea";
import ImageGrid from "./ImageGrid";
import useImageUpload from "./useImageUpload";
import useThemeStore from "@/store/themeStore";

const MAX_IMAGES = 8;

const ListingImageUpload = ({ form, updateField }) => {
  const { theme } = useThemeStore();
  const images = form?.images ?? [];

  const {
    error,
    canAddMore,
    handleImageChange,
    removeImage,
    setCoverImage,
    clearAllImages,
  } = useImageUpload({
    images,
    onChange: (newImages) => updateField("images", newImages),
  });

  return (
    <section
      className={`rounded-2xl p-4 shadow-lg sm:p-6 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"} `}
    >
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <ImagePlus className="h-5 w-5 text-green-600" />

            <h2 className="text-xl font-semibold">Product Photos</h2>
          </div>

          <p className="mt-1 text-sm leading-6">
            Upload clear photos of your product Here.
          </p>
        </div>

        <div className="rounded-full px-3 py-1.5 text-sm font-medium">
          {images.length}/{MAX_IMAGES} photos
        </div>
      </div>

      <UploadArea
        onFilesSelected={handleImageChange}
        canAddMore={canAddMore}
        error={error}
      />

      <ImageGrid
        images={form.images}
        onRemoveImage={removeImage}
        onSetCoverImage={setCoverImage}
        onClearAllImage={clearAllImages}
      />

      {/* Empty state helper */}
      {images.length === 0 && (
        <div className="mt-5 rounded-xl px-4 py-3 text-sm text-amber-700">
          <strong>Tip:</strong> Add at least 3 clear photos from different
          angles. Good photos help buyers trust your listing.
        </div>
      )}
    </section>
  );
};

export default ListingImageUpload;
