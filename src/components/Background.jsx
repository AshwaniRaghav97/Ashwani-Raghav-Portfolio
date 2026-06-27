import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute w-[450px] h-[450px] rounded-full blur-[120px] bg-cyan-500/30 top-20 left-10"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] bg-purple-500/20 bottom-0 right-10"
      />

    </div>
  );
};

export default Background;