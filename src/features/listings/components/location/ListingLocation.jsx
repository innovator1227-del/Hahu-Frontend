import React from "react";
import GoogleMapPicker from "./GoogleMapPicker";

const ListingLocation = ({ form, updateField }) => {
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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="block shadow-lg transition-all duration-500 ease-in-out w-full md:w-72 rounded-2xl border-t border-slate-200 mt-3.5">
          <h1 className="text-lg font-medium p-5">
            Selected Location: Bahirdar
          </h1>
        </div>

        <div className="block shadow-lg transition-all duration-500 ease-in-out  w-full md:w-72 rounded-2xl mt-3.5 border-t border-slate-200">
          <button className="text-lg font-medium p-5 cursor-pointer">
            Pick-Up Available
          </button>
        </div>
        <div className="block shadow-lg transition-all duration-500 ease-in-out  w-full md:w-72 rounded-2xl mt-3.5 border-t border-slate-200">
          <button className="text-lg font-medium p-5 cursor-pointer">
            Delivery Available
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListingLocation;
