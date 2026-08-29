import slogan from "@/assets/slogan.png";
import photo from "@/assets/Item.jpg";
import { scaleIn, slideRight, slideUp } from "@/utils/animate";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  Truck,
  Check,
  ShoppingBasket,
} from "lucide-react";
import ThemeBackground from "@/components/ThemeBackground";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroPart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <ThemeBackground>
      <section className="flex flex-col lg:flex-row rounded-2xl border-l-0 md:p-6 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:translate-x-1 min-w-0 px-6 w-full h-full mt-0 mb-0 items-center justify-between gap-6 p-5">
        {/* LEFT CONTENT */}
        <div className="w-full self-start lg:w-1/2">
          <div className="pt-4 md:pt-8">
            <motion.h3
              variants={slideRight(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold text-green-800 md:text-5xl lg:text-6xl py-10"
            >
              HAHU-Market
            </motion.h3>

            <motion.p
              variants={slideRight(0.15)}
              initial="hidden"
              animate="visible"
              className="mt-3 text-sm font-medium text-amber-500 md:text-base"
            >
              Buy smart, sell easy — find it on HAHU.
            </motion.p>
          </div>

          <motion.p
            variants={slideRight(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl lg:text-sm leading-6 opacity-70 md:text-base"
          >
            HAHU is a trusted second-hand marketplace that connects buyers and
            sellers in a secure and convenient environment.
          </motion.p>

          <motion.div
            variants={slideRight(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-10 space-y-5"
          >
            <p className="flex flex-1 gap-2">
              <Check size={28} className="text-green-500" /> Trusted Deals.
              Better Prices. Smarter Shopping
            </p>
            <p className="flex flex-1 gap-2">
              <Check size={28} className="text-green-500" /> Trusted Deals. Buy
              Second-Hand. Sell with Confidence.
            </p>
            <p className="flex flex-1 gap-2">
              <Check size={28} className="text-green-500" /> Trusted Deals. Find
              It. Negotiate It, Own It
            </p>
            <p className="flex flex-1 gap-2">
              <Check size={28} className="text-green-500" /> Trusted Deals. Buy
              Second-Hand. Sell with Confidence.
            </p>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex w-full flex-col items-center lg:w-1/2 min-h-[500px]">
          {/* IMAGE */}
          <div className="w-full">
            <Slider {...settings}>
              <motion.div
                variants={scaleIn(0)}
                initial="hidden"
                animate="visible"
                className="flex justify-center"
              >
                <img
                  src={slogan}
                  alt="HAHU Marketplace"
                  className="h-auto w-52 object-contain sm:w-60 md:w-64 lg:w-96"
                />
              </motion.div>

              <div className="flex justify-center">
                <img
                  src={photo}
                  alt="HAHU Marketplace"
                  className="h-auto w-52 object-contain sm:w-60 md:w-64 lg:w-96"
                />
              </div>
            </Slider>
          </div>

          {/* QUICK ACTIONS */}
          <motion.div
            variants={slideUp(0)}
            initial="hidden"
            animate="visible"
            className="mt-auto grid w-full max-w-md grid-cols-4 gap-6"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <ShoppingBasket size={28} className="h-5 w-5 text-purple-500" />
              <span className="text-[10px] font-medium sm:text-xs">
                Quality Second Hand Product
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <ShieldCheck size={28} className="h-5 w-5 text-purple-500" />
              <span className="text-[10px] font-medium sm:text-xs">
                Secure Transaction
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-center">
              <Wallet size={28} className="h-5 w-5 text-purple-500" />
              <span className="text-[10px] font-medium sm:text-xs">
                Secure Wallet
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-center">
              <Truck size={28} className="h-5 w-5 text-purple-500" />
              <span className="text-[10px] font-medium sm:text-xs">
                Delivery Available
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </ThemeBackground>
  );
};

export default HeroPart;
