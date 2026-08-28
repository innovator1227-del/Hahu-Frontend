import slogan from "@/assets/Hahu.jpg";
import photo from "@/assets/Social.jpg";
import { scaleIn, slideLeft, slideRight, slideUp } from "@/utils/animate";
import { motion } from "framer-motion";
import { Check, FastForward, HouseHeart, SmileIcon } from "lucide-react";
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
              variants={slideLeft(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold text-green-800 md:text-5xl lg:text-6xl py-10"
            >
              Happy With HAHU
            </motion.h3>

            <motion.p
              variants={slideLeft(0.15)}
              initial="hidden"
              animate="visible"
              className="mt-3 text-sm font-medium text-amber-500 md:text-base"
            >
              A Smarter Way to Buy and Sell Second-Hand.
            </motion.p>
          </div>

          <motion.p
            variants={slideLeft(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl lg:text-sm leading-6 opacity-70 md:text-base"
          >
            HAHU makes every deal worth smiling about — better prices, trusted
            users, secure payments, and convenient delivery, all in one place.
          </motion.p>

          <motion.div
            variants={slideLeft(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-10 space-y-2"
          >
            <p className="flex flex-1 gap-2">
              <Check size={28} className="text-green-500" />
              Where Trust Meets Better Deals.
            </p>
            <p className="flex flex-1 gap-2">
              <Check size={28} className="text-green-500" />
              Your Marketplace. Your Price. Your Choice.
            </p>
            <p className="flex flex-1 gap-2">
              <Check size={28} className="text-green-500" />
              Trade with Trust, Buy with Confidence.
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
                  className="h-auto w-52 object-contain sm:w-60 md:w-64 lg:w-72"
                />
              </motion.div>

              <div className="flex justify-center">
                <img
                  src={photo}
                  alt="HAHU Marketplace"
                  className="h-auto w-52 object-contain sm:w-60 md:w-64 lg:w-72"
                />
              </div>
            </Slider>
          </div>

          {/* QUICK ACTIONS */}
          <motion.div
            variants={slideUp(0)}
            initial="hidden"
            animate="visible"
            className="mt-auto grid w-full max-w-md grid-cols-3 gap-6"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <SmileIcon size={28} className="h-5 w-5 text-purple-500" />
              <span className="text-[10px] font-medium sm:text-xs">
                Shop. Save. Smile.
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <FastForward size={28} className="h-5 w-5 text-purple-500" />
              <span className="text-[10px] font-medium sm:text-xs">
                Get your in Fast
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-center">
              <HouseHeart size={28} className="h-5 w-5 text-purple-500" />
              <span className="text-[10px] font-medium sm:text-xs">
                Come In Hahu And Enjoy Product
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </ThemeBackground>
  );
};

export default HeroPart;
