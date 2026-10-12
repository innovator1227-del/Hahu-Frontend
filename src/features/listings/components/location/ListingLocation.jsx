import React from "react";
import GoogleMapPicker from "./GoogleMapPicker";
import { MapPin } from "lucide-react";
import useThemeStore from "@/store/themeStore";
import Input from "@/components/ui/Input";

const ListingLocation = ({ form, updateField }) => {
  const theme = useThemeStore((state) => state.theme);

  const location = form.location || {
    address: "",
    city: "",
    latitude: null,
    longitude: null,
  };

  const handleLocationChange = (field, value) => {
    updateField("location", {
      ...location,
      [field]: value,
    });
  };

  return (
    <section
      className={`rounded-2xl p-6 shadow-lg ${
        theme === "dark" ? "bg-slate-800" : "bg-slate-100"
      }`}
    >
      {/* Address */}
      <div>
        <label className="text-lg font-bold mb-2 block">Product location</label>

        <Input
          type="text"
          value={location.address}
          onChange={(e) => handleLocationChange("address", e.target.value)}
          placeholder="Example: Bole, Addis Ababa"
        />
      </div>

      {/* City */}
      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium">City</label>

        <Input
          type="text"
          value={location.city}
          onChange={(e) => handleLocationChange("city", e.target.value)}
          placeholder="Example: Bahir Dar"
        />
      </div>

      {/* Map */}
      <div className="mt-4 pt-3">
        <GoogleMapPicker
          value={location}
          onChange={(newLocation) => updateField("location", newLocation)}
        />
      </div>

      {/* Selected location */}
      <div
        className={`rounded-2xl p-4 mt-3 ${theme === "dark" ? "border border-slate-600" : "border border-slate-300"} `}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
              <MapPin />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium">Selected location</p>

              <p className="truncate font-semibold">
                {location.city || "No location selected"}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="shrink-0 text-sm font-medium text-green-600 hover:text-green-700"
          >
            Change
          </button>
        </div>
      </div>

      {/* Delivery options */}
      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold">Delivery options</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Pickup */}
          <label
            className={`flex flex-1 cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
              form.pickupAvailable ? "border-green-500" : ""
            } ${theme === "dark" ? "border border-slate-600" : "border border-slate-300"} `}
          >
            <div>
              <p className="font-semibold">Pickup</p>

              <p className="text-sm">
                Buyer can collect the item from the seller.
              </p>
            </div>

            <input
              type="checkbox"
              checked={form.pickupAvailable}
              onChange={(e) => updateField("pickupAvailable", e.target.checked)}
              className="h-5 w-5 cursor-pointer accent-green-600"
            />
          </label>

          {/* Delivery */}
          <label
            className={`flex flex-1 cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
              form.deliveryAvailable
                ? "border-green-500"
                : "hover:border-slate-300"
            } ${theme === "dark" ? "border border-slate-600" : "border border-slate-300"} `}
          >
            <div>
              <p className="font-semibold">Delivery</p>

              <p className="text-sm">
                Seller delivers the product to the buyer.
              </p>
            </div>

            <input
              type="checkbox"
              checked={form.deliveryAvailable}
              onChange={(e) =>
                updateField("deliveryAvailable", e.target.checked)
              }
              className="h-5 w-5 cursor-pointer accent-green-600"
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default ListingLocation;
