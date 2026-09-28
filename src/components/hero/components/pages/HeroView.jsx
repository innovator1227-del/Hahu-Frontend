import slogan from '@/assets/Hahu.jpg';
import photo from '@/assets/Social.jpg';
import useThemeStore from '@/store/themeStore';
import { scaleIn, slideLeft } from '@/utils/animate';
import { motion } from 'framer-motion';
import { Check, FastForward, HouseHeart, SmileIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const HeroView = () => {
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

  const features = ['Better prices', 'Easy negotiation', 'Trusted deals'];

  return (
    <motion.div
      variants={slideLeft(0)}
      initial="hidden"
      animate="visible"
      className={`grid h-full w-full grid-cols-1 overflow-hidden rounded-3xl border shadow-lg sm:min-h-[430px] lg:grid-cols-2 ${
        isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200'
      }`}
    >
      {/* LEFT */}
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <span className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          A better marketplace
        </span>

        <motion.h2
          variants={slideLeft(0.1)}
          className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Happy With HAHU
        </motion.h2>

        <motion.p
          variants={slideLeft(0.2)}
          className="mt-3 text-base font-semibold text-green-600 sm:text-lg"
        >
          Buy better. Sell with confidence.
        </motion.p>

        <p
          className={`mt-3 max-w-lg text-sm leading-6 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Find value, connect directly, and trade with confidence.
        </p>

        {/* Features */}
        <div className="mt-5 space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check size={16} className="shrink-0 text-green-500" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          to="/app/browse"
          className="mt-6 w-fit rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Explore HAHU
        </Link>
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
                alt="Happy with HAHU"
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

          {/* Bottom features */}
          <div
            className={`mt-3 grid grid-cols-3 gap-1 rounded-2xl p-2 ${
              isDark ? 'bg-slate-800' : 'bg-slate-50'
            }`}
          >
            <MiniFeature icon={SmileIcon} text="Shop & save" />
            <MiniFeature icon={FastForward} text="Simple & fast" />
            <MiniFeature icon={HouseHeart} text="Enjoy HAHU" />
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

export default HeroView;
