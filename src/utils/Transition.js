import React from "react";
import { motion } from "framer-motion";

const Transition = ({ children }) => {
  const exitAnimation = {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.5 },
  };

  const enterAnimation = {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: 800 }}
      animate={enterAnimation}
      exit={exitAnimation}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
