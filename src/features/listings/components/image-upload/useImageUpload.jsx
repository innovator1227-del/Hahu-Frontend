import { useState } from "react";

const MAX_IMAGES = 8;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const useImageUpload = ({ images = [], onChange }) => {
  const [error, setError] = useState("");

  const canAddMore = images.length < MAX_IMAGES;

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    setError("");

    const availableSlots = MAX_IMAGES - images.length;

    if (availableSlots <= 0) {
      setError(`You can upload a maximum of ${MAX_IMAGES} images.`);
      e.target.value = "";
      return;
    }

    const selectedFiles = files.slice(0, availableSlots);

    const invalidTypeFiles = selectedFiles.filter(
      (file) => !ALLOWED_TYPES.includes(file.type),
    );

    if (invalidTypeFiles.length > 0) {
      setError("Only JPG, PNG, and WEBP images are allowed.");
      e.target.value = "";
      return;
    }

    const oversizedFiles = selectedFiles.filter(
      (file) => file.size > MAX_FILE_SIZE,
    );

    if (oversizedFiles.length > 0) {
      setError("Each image must be smaller than 5 MB.");
      e.target.value = "";
      return;
    }

    const newImages = selectedFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
    }));

    onChange([...images, ...newImages]);

    // Allows selecting the same file again later.
    e.target.value = "";
  };

  const removeImage = (imageId) => {
    const imageToRemove = images.find((image) => image.id === imageId);

    if (imageToRemove?.preview) {
      URL.revokeObjectURL(imageToRemove.preview);
    }

    const updatedImages = images.filter((image) => image.id !== imageId);

    onChange(updatedImages);
  };

  const setCoverImage = (imageId) => {
    const selectedImage = images.find((image) => image.id === imageId);

    if (!selectedImage) return;

    const remainingImages = images.filter((image) => image.id !== imageId);

    onChange([selectedImage, ...remainingImages]);
  };

  const clearAllImages = () => {
    images.forEach((image) => {
      if (image.preview) {
        URL.revokeObjectURL(image.preview);
      }
    });

    onChange([]);
  };

  return {
    error,
    canAddMore,
    handleImageChange,
    removeImage,
    setCoverImage,
    clearAllImages,
  };
};

export default useImageUpload;
