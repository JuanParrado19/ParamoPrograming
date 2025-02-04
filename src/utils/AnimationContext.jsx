import { createContext, useContext, useState } from "react";

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <AnimationContext.Provider value={{ isAnimating, setIsAnimating }}>
      {children}
    </AnimationContext.Provider>
  );
};
