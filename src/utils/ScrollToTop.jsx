import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAnimation } from "../utils/AnimationContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { isAnimating } = useAnimation();

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [pathname, isAnimating]);

  return null;
}
