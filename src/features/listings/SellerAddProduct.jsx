import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productStore from "@/store/productStore";
import useListingForm from "./hooks/useListingForm";
import ListingBasicInfo from "./components/ListingBasicInfo";
import ListingImageUpload from "./components/image-upload/ListingImageUpload";
import ListingDetails from "./components/ListingDetails";
import ListingDropdown from "./components/ListingDropdown";
import ListingLocation from "./components/location/ListingLocation";
import ListingPreview from "./components/preview/ListingPreview";
import useThemeStore from "@/store/themeStore";
import { useAuth } from "@/store/authStore";

const SellerAddProduct = () => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();
  const { addProduct } = productStore();
  const { user } = useAuth();

  const { form, updateField, resetForm } = useListingForm();

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.price ||
      !form.category ||
      form.images.length === 0 ||
      !form.condition
    ) {
      setMessage("Please complete all required fields before submitting.");
      return;
    }

    addProduct({
      ...form,
      price: Number(form.price),
      sellerId: user.id,
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
    <>
      <div className="mb-8 flex flex-col gap-3">
        <h1 className="text-3xl font-bold">
          Welcome To Hahu Add Your Product TO Hahu-Market
        </h1>

        <p className="mt-2 text-lg font-stretch-semi-condensed">
          Add your second-hand product and provide accurate details for buyers.
        </p>
      </div>
      <div
        className={`max-w-5xl mx-auto rounded-2xl ${theme === "dark" ? "bg-slate-950" : ""}`}
      >


        <form onSubmit={handleSubmit} className="space-y-6">
          <ListingDropdown
            title="Basic information About Your Product"
            description="Add Basic Information About Yor Product."
          >
            <ListingBasicInfo form={form} updateField={updateField} />
          </ListingDropdown>

          <ListingDropdown
            title="Your Product Photo"
            description="Add clear photos of your product. The first image will be used as the cover image. You can add maximum 8 images"
          >
            <ListingImageUpload form={form} updateField={updateField} />
          </ListingDropdown>

          <ListingDropdown
            title="Add Detail information About Your Product"
            description=" Announce and Give Detail Information to Buyer What You Sell, Including Every Required Information Provided In The Grid Below"
          >
            <ListingDetails form={form} updateField={updateField} />
          </ListingDropdown>

          <ListingDropdown
            title="location and delivery of product"
            description=" Tell buyers where the product is located and how they can receive it."
          >
            <ListingLocation form={form} updateField={updateField} />
          </ListingDropdown>

          <ListingDropdown
            title="Preview your product"
            description="Check how buyers will see your product before Submitting"
            defaultOpen={true}
          >
            <ListingPreview form={form} />
          </ListingDropdown>

          {message && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {message}
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-48 rounded-2xl bg-green-700 py-3 font-semibold text-slate-800 transition-all duration-500 ease-in-out hover:bg-green-500 cursor-pointer hover:scale-[1.02]"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>


    </>
  );
};

export default SellerAddProduct;
