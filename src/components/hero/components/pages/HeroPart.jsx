import { slideRight } from "@/utils/animate";
import { motion } from "framer-motion";

const HeroPart = () => {
  return (
    <motion.div
      variants={slideRight(0)}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center"
    >
      <h1 className="text-lg font-medium ">
        Welcome To Hahu Market Hero sectio
      </h1>
    </motion.div>
  );
};

export default HeroPart;
