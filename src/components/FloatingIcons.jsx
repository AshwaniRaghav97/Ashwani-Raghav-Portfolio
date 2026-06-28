import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

const icons = [
  {
    icon: <FaJava />,
    top: "5%",
    left: "15%",
    color: "text-orange-500",
  },
  {
    icon: <FaReact />,
    top: "20%",
    right: "0%",
    color: "text-cyan-400",
  },
  {
    icon: <FaNodeJs />,
    bottom: "18%",
    right: "10%",
    color: "text-green-500",
  },
  {
    icon: <SiMongodb />,
    bottom: "5%",
    left: "10%",
    color: "text-green-400",
  },
  {
    icon: <FaGithub />,
    top: "50%",
    left: "-5%",
    color: "text-white",
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className={`absolute text-4xl ${item.color}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
}