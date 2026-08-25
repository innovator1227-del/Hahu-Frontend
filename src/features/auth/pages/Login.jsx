import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "@/store/authStore.jsx";
import Input from "@/components/ui/Input";

import useThemeStore from "@/store/themeStore";
import { motion } from "framer-motion";
import { fadeIn, scaleIn, slideRight } from "@/utils/animate";

const Login = () => {
  const { theme } = useThemeStore();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const { login, authError, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(formData);
    if (user) {
      navigate("/app/browse");
    }
  };

  return (
    <motion.div
      variants={scaleIn(0)}
      initial="hidden"
      animate="visible"
      className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6"
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-2">
            Sign in to continue to HAHU MARKET, Ethiopia's trusted second-hand
            marketplace.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`rounded-3xl p-8 sm:p-10 shadow-2xl ${theme === "dark" ? "bg-slate-900/90 text-slate-200" : "bg-slate-50/100"}`}
        >
          {authError && (
            <p className="mb-4 rounded-lg px-4 py-3 text-sm">{authError}</p>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5" />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="your email"
                className="pl-11"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5" />
              </div>
              <Input
                className="pl-11"
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-sm">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-medium transition-all duration-500 ease-in-out disabled:cursor-not-allowed disabled:bg-red-300 bg-green-700 cursor-pointer hover:scale-95"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          <div className="mt-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4 transition-all duration-500 ease-in-out shadow-2xl hover:scale-105 border border-slate-400 rounded-2xl cursor-pointer"
            >
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-2 px-4  hover:scale-105 border border-slate-400 transition-all duration-500 ease-in-out rounded-4xl cursor-pointer"
            >
              GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Rgister for verification
            </Link>
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
