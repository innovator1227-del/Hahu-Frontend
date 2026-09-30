import useThemeStore from '@/store/themeStore';
import { slideRight } from '@/utils/animate';
import { motion } from 'framer-motion';
import { ArrowRight, Asterisk, Blocks, CircleCheckBig } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllInOne = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <motion.div
      variants={slideRight(0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        theme === 'dark' ? 'bg-slate-900' : 'bg-slate-100'
      }`}
    >
      <div
        className={`flex items-center gap-4 p-4 ${
          theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
        }`}
      >
        <Blocks size={30} className="shrink-0 rounded-xl bg-blue-300 p-2 text-green-600" />

        <h2 className="min-w-0 text-lg font-semibold leading-snug sm:text-xl">
          All in one platform to post and compare products
        </h2>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex gap-2">
          <Asterisk size={18} className="mt-1 shrink-0 text-green-600" />

          <p className={`text-sm leading-6 ${isDark ? 'text-slate-500' : 'text-slate-400'} `}>
            We provide a verified all-in-one platform to post and explore items without endless
            scrolling.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />
            <p className="text-sm leading-5">Buy smart, save more, use again</p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />
            <p className="text-sm leading-5">Everything you need, all in one place</p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />
            <p className="text-sm leading-5">One platform, endless possibilities</p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />
            <p className="text-sm leading-5">A marketplace built for everyone</p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig size={18} className="mt-0.5 shrink-0 text-green-500" />
            <p className="text-sm leading-5">Discover products that match your style</p>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <Link
            to="/app/services/all-in-one"
            className="group/btn inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
          >
            Learn more
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

export default AllInOne;
