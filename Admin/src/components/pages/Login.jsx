import AuthForm from "@/features/auth/AuthForm";
import useThemeStore from "@/stores/ThemeStore";

const Login = () => {
  const { theme } = useThemeStore();
  return (
    <div
      className={`min-h-screen flex-col lg:flex-row flex items-center justify-center gap-6 p-4
        ${
          theme === "darkblue" || theme === "black"
            ? "bg-slate-900"
            : "bg-slate-300"
        }
    `}
    >
      {/* Left Side */}
      <div className="lg:flex flex-1 flex-col justify-center px-20">
        <h1 className="text-2xl md:text-3xl   lg:text-5xl font-extrabold">
          HAHU <span className="text-blue-500">MARKET</span>
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold">
          Admin Management Portal
        </h2>

        <p className="mt-6 max-w-lg leading-7">
          Trustly and Securely manage products, orders, customers, categories,
          inventory, analytics, and business operations from one place.
        </p>

        <div className="mt-10 space-y-4 font-normal text-sm md:text-base lg:text-lg">
          <p>✅ Product Management</p>
          <p>✅ Order Tracking</p>
          <p>✅ Customer Management</p>
          <p>✅ Sales Analytics</p>
          <p>✅ Role-Based Access Control</p>
          <p>✅ Transaction Track Management</p>
          <p>✅ Payment and negotiation Management</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center p-4">
        <AuthForm
          title="Admin Login"
          description="Sign in to the HAHU Market Admin Dashboard"
          submitLabel="Login"
          role="superAdmin"
        />
      </div>
    </div>
  );
};

export default Login;
