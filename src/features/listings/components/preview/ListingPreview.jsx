import { MapPin, Truck, Store, ShieldCheck, Pointer } from "lucide-react";
import PreviewGallery from "./PreviewGallery";
import PreviewInfo from "./PreviewInfo";
import useThemeStore from "@/store/themeStore";

const ListingPreview = ({ form }) => {
  const { theme } = useThemeStore();
  const images = form?.images ?? [];

  const locationText =
    form?.location?.address || form?.location?.city || "Location not selected";

  const formatPrice = (price) => {
    if (!price) return "Price not set";

    return `${Number(price).toLocaleString()} ETB`;
  };

  return (
    <section
      className={`overflow-hidden rounded-2xl shadow-2xl ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"} `}
    >
      {/* Preview label */}
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Listing Preview</h2>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Main preview */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Gallery */}
          <PreviewGallery images={images} title={form?.title} />

          {/* Information  */}
          <PreviewInfo
            title={form?.title}
            price={formatPrice(form?.price)}
            category={form?.category}
            condition={form?.condition}
            brand={form?.brand}
            model={form?.model}
            age={form?.age}
            description={form?.description}
          />
        </div>

        {/* Location + delivery */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <MapPin className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide">
                  Location
                </p>

                <p className="mt-1 break-words font-medium">{locationText}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Truck className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide">
                  Delivery options
                </p>

                <div className="mt-2 flex flex-wrap gap-2">
                  {form?.pickupAvailable && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      <Store className="h-3.5 w-3.5" />
                      Pickup
                    </span>
                  )}

                  {form?.deliveryAvailable && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      <Truck className="h-3.5 w-3.5" />
                      Delivery
                    </span>
                  )}

                  {!form?.pickupAvailable && !form?.deliveryAvailable && (
                    <span className="text-sm">No delivery option selected</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingPreview;
