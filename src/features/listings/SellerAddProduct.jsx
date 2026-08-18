import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/store/productStore";
import useListingForm from "./hooks/useListingForm";
import ListingBasicInfo from "./components/ListingBasicInfo";
import ListingImageUpload from "./components/image-upload/ListingImageUpload";
import ListingDetails from "./components/ListingDetails";
import ListingDropdown from "./components/ListingDropdown";

const SellerAddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const { form, updateField, resetForm } = useListingForm();

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      ...form,
      price: Number(form.price),
    });

    setMessage(
      "Product submitted successfully. Waiting for Hahu admin approval.",
    );

    resetForm();

    setTimeout(() => {
      navigate("/app/my-listings");
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome To Hahu Create your Listing
        </h1>

        <p className="mt-2 text-slate-500">
          Add your second-hand product and provide accurate details for buyers.
        </p>
      </div>

      {message && (
        <div className="mb-6 rounded-xl bg-green-100 px-4 py-3 text-green-700">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <ListingDropdown
          title="Basic information About Your Product"
          description="Add Main Information About Yor Product."
        >
          <ListingBasicInfo form={form} updateField={updateField} />
        </ListingDropdown>

        <ListingDropdown
          title="Your Product Photo"
          description="Add clear photos of your product. The first image will be used as the cover image. You can add maximum 8 images"
        >
          <ListingImageUpload form={form} updateField={updateField} />
        </ListingDropdown>

        <ListingDetails form={form} updatedField={updateField} />
        <button
          type="submit"
          className="w-48 rounded-2xl bg-green-300 py-3 font-semibold text-slate-600 transition hover:bg-green-400"
        >
          Submin Product
        </button>
      </form>
    </div>
  );
};

export default SellerAddProduct;
