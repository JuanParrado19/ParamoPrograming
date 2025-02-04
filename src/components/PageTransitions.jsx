import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "../utils/AnimationContext";

const PageTransition = ({ children }) => {
  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };
  const { setIsAnimating } = useAnimation();

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 800);

    return () => clearTimeout(timeout);
  }, [setIsAnimating]);

  const nbOfColumns = 5;

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i) => ({
      top: "100%",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i) => ({
      height: "100%",
      transition: {
        duration: 0.3,
        delay: 0.05 * i,
      },
    }),
  };

  const overlay = {
    initial: {
      opacity: 0.5,
    },
    enter: {
      opacity: 0,
    },
    exit: {
      opacity: 0.5,
    },
  };

  return (
    <div className="stairs">
      <motion.div {...anim(overlay)} className="backanimation"></motion.div>
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div {...anim(expand, nbOfColumns - i)} key={i} />;
        })}
      </div>
      {children}
    </div>
  );
};

export default PageTransition;
