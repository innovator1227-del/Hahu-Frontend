import { motion } from "framer-motion";
import heroBg from "@/assets/Used.png";

const HeroPart = () => {
  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden">
        <motion.img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        <div className="rounded-b-2xl rounded-2xl border-l-0 p-6 shadow-lg hover:shadow-lg transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] min-w-0">
          <div className="w-80">
            <h1>Buy Smart. Sell Easy. Find It on HAHU.</h1>
          </div>
        </div>
      </section>
      <h1>hero</h1>
    </>
  );
};

export default HeroPart;
