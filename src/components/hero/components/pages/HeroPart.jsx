import photo from '@/assets/Item.jpg';
import slogan from '@/assets/slogan.png';
import useThemeStore from '@/store/themeStore';
import { scaleIn, slideRight } from '@/utils/animate';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, ShoppingBasket, Truck, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const HeroPart = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === 'dark';

  const imageSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const features = ['Quality finds', 'Secure deals', 'Direct chat', 'Delivery'];

  return (
    <motion.div
      variants={slideRight(0)}
      initial="hidden"
      animate="visible"
      className={`grid h-full w-full grid-cols-1 overflow-hidden rounded-3xl border shadow-lg sm:min-h-[430px] lg:grid-cols-2 ${
        isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'
      }`}
    >
      {/* LEFT */}
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Buy • Sell • Reuse
        </span>

        <motion.h1
          variants={slideRight(0.1)}
          className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          HAHU Market
        </motion.h1>

        <motion.p
          variants={slideRight(0.2)}
          className="mt-3 text-base font-semibold text-green-600 sm:text-lg"
        >
          Buy smart. Sell easy.
        </motion.p>

        <p
          className={`mt-3 max-w-lg text-sm leading-6 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Quality second-hand products, secure deals, and easy seller chat.
        </p>

        {/* Features */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check size={16} className="shrink-0 text-green-500" />
              <span className="text-xs sm:text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            to="/app/browse"
            className="rounded-xl bg-green-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Browse Listings
          </Link>

          <Link
            to="/app/sell"
            className={`rounded-xl border px-4 py-2.5 text-center text-sm font-semibold ${
              isDark
                ? 'border-slate-600 text-white hover:bg-slate-800'
                : 'border-slate-300 text-slate-800 hover:bg-slate-100'
            }`}
          >
            Sell an Item
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md">
          <Slider {...imageSettings}>
            <motion.div
              variants={scaleIn(0)}
              initial="hidden"
              animate="visible"
              className="flex h-52 items-center justify-center sm:h-60 lg:h-72"
            >
              <img
                src={slogan}
                alt="HAHU marketplace"
                className="max-h-full w-full object-contain"
              />
            </motion.div>

            <div className="flex h-52 items-center justify-center sm:h-60 lg:h-72">
              <img
                src={photo}
                alt="HAHU marketplace"
                className="max-h-full w-full object-contain"
              />
            </div>
          </Slider>

          {/* Trust items */}
          <div
            className={`mt-3 grid grid-cols-4 gap-1 rounded-2xl p-2 ${
              isDark ? 'bg-slate-800' : 'bg-slate-50'
            }`}
          >
            <MiniFeature icon={ShoppingBasket} text="Quality" />
            <MiniFeature icon={ShieldCheck} text="Secure" />
            <MiniFeature icon={Wallet} text="Protected" />
            <MiniFeature icon={Truck} text="Delivery" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MiniFeature = ({ icon: Icon, text }) => (
  <div className="flex flex-col items-center gap-1 text-center">
    <Icon size={18} className="text-green-500" />
    <span className="text-[9px] font-medium sm:text-[10px]">{text}</span>
  </div>
);

export default HeroPart;
