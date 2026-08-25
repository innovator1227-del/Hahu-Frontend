import ThemeBackground from "@/components/ThemeBackground";
import useThemeStore from "@/store/themeStore";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({ selectedChat }) => {
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
      className={`h-20 px-6 flex items-center justify-between rounded-xl ${theme === "dark" ? "bg-slate-900/80" : "bg-slate-100"}`}
    >
      <div className="flex items-center gap-4 cursor-pointer">
        <img
          onClick={goToSellerDetail}
          src={selectedChat.avatar}
          alt={selectedChat.seller}
          className="w-12 h-12 rounded-full hover:translate-y-1 transition-all duration-500 ease-in-out"
        />
        <div>
          <h2 className="font-bold">{selectedChat.seller}</h2>
          <p
            className={`text-sm ${selectedChat.online ? "text-green-500" : "text-gray-500"}`}
          >
            {selectedChat.online ? "Online" : "Offline"}
          </p>
          <p className="text-xs">{selectedChat.location}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          onClick={goToProduct}
          src={selectedChat.productImage}
          alt={selectedChat.product}
          className="w-14 h-14 rounded-xl cursor-pointer transition-all duration-700 ease-in-out hover:translate-y-1"
        />
        <div>
          <h3 className="font-semibold">{selectedChat.product}</h3>

          <p className="text-blue-600 font-bold">{selectedChat.price} ETB</p>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
