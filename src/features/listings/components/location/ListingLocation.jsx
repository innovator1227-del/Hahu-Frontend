import React, { useState } from "react";
import GoogleMapPicker from "./GoogleMapPicker";
import { MapPin } from "lucide-react";

const ListingLocation = ({ form, updateField }) => {
  const [pickupAvailable, setPickupAvailable] = useState(false);

  const [deliverAvailable, setdeliveryAvailable] = useState(false);
  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg">
      <div>
        <label className="text-lg font-bold mb-2 pb-2.5 block">
          Search product location
        </label>

        <input
          type="text"
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
          placeholder="search Bahirdar, Addis Ababa"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* We will Add google Map picker API from Backend */}
      <div className="mt-4 pt-3 block">
        <GoogleMapPicker
          value={form.location}
          onChange={(location) => updateField("location", location)}
        />
      </div>
      {/* Selected location */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 mt-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
              <MapPin />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-500">
                Selected location
              </p>

              <p className="truncate font-semibold text-slate-800">
                Bahir Dar, Ethiopia
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
        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Delivery options
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Pickup card */}
          <label
            className={`flex flex-1 cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
              pickupAvailable
                ? "border-slate-300 bg-green-50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div>
              <p className="font-semibold text-slate-800">Pickup</p>

              <p className="text-sm text-slate-500">
                Buyer can collect the item go to vendor
              </p>
            </div>

            <input
              type="checkbox"
              checked={pickupAvailable}
              onChange={(e) => setPickupAvailable(e.target.checked)}
              className="h-5 w-5 accent-green-600 cursor-pointer"
            />
          </label>
          {/* Delivery card */}
          <label
            className={`flex flex-1 cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
              deliverAvailable
                ? "border-slate-300 bg-green-50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div>
              <p className="font-semibold text-slate-800">Delivery</p>

              <p className="text-sm text-slate-500">
                Seller Brings product directly to buyer location
              </p>
            </div>

            <input
              type="checkbox"
              checked={deliverAvailable}
              onChange={(e) => setdeliveryAvailable(e.target.checked)}
              className="h-5 w-5 accent-green-600 cursor-pointer"
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default ListingLocation;
