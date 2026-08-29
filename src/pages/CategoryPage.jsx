import useThemeStore from "@/store/themeStore";
import { useParams, Link } from "react-router-dom";

const CategoryPage = () => {
  const { theme } = useThemeStore();
  const { category } = useParams();
  const title =
    category
      ?.split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ") || "Category";

  return (
    <div
      className={`max-w-5xl mx-auto p-6 rounded-2xl shadow-2xl ${theme === "dark" ? "bg-slate-900" : ""} `}
    >
      <div className="rounded-3xl p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-2">Browse top deals in the {title} category.</p>
          </div>
          <Link to={`/app/browse?category=${category}`}
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium  text-green-700 cursor-pointer transition"
          >
            View All Listings
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold mb-2">Featured {title}</h2>
            <p className="text-sm ">
              Discover the latest items, best prices, and popular offers in{" "}
              {title}.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold mb-2">Popular filters</h2>
            <ul className="text-sm space-y-2">
              <li>New arrivals</li>
              <li>Price low to high</li>
              <li>Verified sellers</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="font-semibold mb-2">Need help?</h2>
            <p className="text-sm">
              Contact support or update your search terms for a more precise
              result.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
