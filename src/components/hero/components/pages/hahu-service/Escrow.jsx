import useThemeStore from '@/store/themeStore';
import { slideLeft } from '@/utils/animate';
import { motion } from 'framer-motion';
import { ArrowRight, Asterisk, CircleCheckBig, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const Escrow = () => {
  const theme = useThemeStore((state) => state.theme);

  const isDark = theme === 'dark';

  return (
    <motion.div
      variants={slideLeft(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        isDark ? 'bg-slate-900' : 'bg-slate-100'
      }`}
    >
      {/* Header */}
      <div className={`flex items-center gap-4 p-4 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
        <Wallet size={30} className="shrink-0 rounded-xl bg-blue-300 p-2 text-green-600" />

        <h2
          className={`min-w-0 text-lg font-semibold leading-snug sm:text-xl ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Secure transactions through our escrow system
        </h2>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Intro */}
        <div className="flex gap-2">
          <Asterisk size={18} className="mt-1 shrink-0 text-green-600" />

          <p
            className={`text-sm font-medium leading-6 ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            Secure Escrow Protection keeps your payment protected while the transaction is
            completed.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Feature 1 */}
          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />

            <p className={`text-sm leading-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Pay securely, receive safely with confidence.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />

            <p className={`text-sm leading-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Secure, protected, and trusted transaction flow.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />

            <p className={`text-sm leading-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Negotiate prices and complete deals through the platform.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />

            <p className={`text-sm leading-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Safer transactions between buyers and sellers.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />

            <p className={`text-sm leading-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Reduce the risk of scams by keeping transactions within HAHU.
            </p>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <Link
            to="/app/services/escrow"
            className="group/btn inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
          >
            Learn about escrow
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Escrow;
