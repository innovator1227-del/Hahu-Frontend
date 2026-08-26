import ThemeBackground from "@/components/ThemeBackground";
import useThemeStore from "@/store/themeStore";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({ selectedChat, onOPenSidebar }) => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/app/product/${selectedChat.productId}`);
  };

  const goToSellerDetail = () => {
    navigate("/app/sellerdetail");
  };

  return (
    <header
      className={`h-20 px-3 min-w-0 gap-3 flex items-center rounded-xl sm:px-4 md:px-6 border-b border-green-400 ${theme === "dark" ? "bg-slate-900/80" : "bg-slate-100"}`}
    >
      {/* Left: menu + seller */}
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onOPenSidebar}
          aria-label="Open conversations"
          className="shrink-0 rounded-lg p-2 transition hover:scale-105 lg:hidden cursor-pointer"
        >
          <Menu className="h-5 w-5" />
        </button>

        <button type="button" onClick={goToSellerDetail} className="shrink-0">
          <img
            src={selectedChat.avatar}
            alt={selectedChat.seller}
            className="h-10 w-10 rounded-full object-cover transition hover:scale-105 sm:h-12 sm:w-12 cursor-pointer"
          />
        </button>

        <div className="min-w-0">
          <h2 className="truncate text-sm font-bold sm:text-base">
            {selectedChat.seller}
          </h2>

          <p
            className={`text-xs sm:text-sm ${
              selectedChat.online ? "text-green-500" : "text-gray-500"
            }`}
          >
            {selectedChat.online ? "Online" : "Offline"}
          </p>

          <p className="hidden truncate text-xs sm:block">
            {selectedChat.location}
          </p>
        </div>
      </div>

      {/* Right: product */}
      <button
        type="button"
        onClick={goToProduct}
        className="flex min-w-0 shrink-0 items-center gap-2 rounded-lg p-1 transition cursor-pointer sm:gap-3"
      >
        <div className="min-w-0 text-right">
          <h3 className="max-w-[140px] truncate text-sm font-semibold sm:block">
            {selectedChat.product}
          </h3>

          <p className="text-xs font-bold text-blue-600 sm:block">
            {selectedChat.price} ETB
          </p>
        </div>

        <img
          src={selectedChat.productImage}
          alt={selectedChat.product}
          className="h-10 w-10 rounded-lg object-cover transition hover:scale-105 sm:h-12 sm:w-12 md:h-14 md:w-14"
        />
      </button>
    </header>
  );
};

export default ChatHeader;
