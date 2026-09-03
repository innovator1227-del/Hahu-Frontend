import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/store/authStore.jsx";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </AuthProvider>
  );
};
export default AppProvider;
