import { Camera } from "lucide-react";
import React, { useRef } from "react";

const UploadArea = ({ onFilesSelected, canAddMore, error }) => {
  const fileInputRef = useRef(null);

  return (
    <div>
      {canAddMore && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            hidden
            onChange={onFilesSelected}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="group flex min-h-[180px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition-all duration-300 hover:border-green-400 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 "
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:text-green-600">
              <Camera className="h-7 w-7" />
            </div>

            <span className="text-base font-semibold text-slate-800">
              Add product photos
            </span>

            <span className="mt-1 text-sm text-slate-500">
              Click to browse from your device
            </span>

            <span className="mt-3 text-xs text-slate-400">
              JPG, PNG or WEBP • Max 5 MB each • Up to 8 photos
            </span>
          </button>
        </>
      )}
      {/* Error */}
      {error && (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <div className="flex-1">{error}</div>

          <button
            type="button"
            onClick={() => setError("")}
            className="shrink-0 text-red-500 transition hover:text-red-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadArea;
