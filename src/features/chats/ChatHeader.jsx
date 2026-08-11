import react from "react";
import { useNavigate, useParams } from "react-router-dom";
const ChatHeader = ({ selectedChat }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/app/product/${selectedChat.productId}`);
  };

  const goToSellerDetail = () => {
    navigate("/app/sellerdetail");
  };

  return (
    <header className="h-20 px-6 border-b border-slate-300  bg-slate-200 flex items-center justify-between">
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
          <p className="text-xs text-slate-500">{selectedChat.location}</p>
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
