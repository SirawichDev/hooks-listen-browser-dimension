import { useState, useLayoutEffect } from "react";

export const useBrowserSize = () => {
  const [size, setDimension] = useState([0, 0]);
  useLayoutEffect(() => {
    const sizeListening = () => {
      setDimension([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", sizeListening);
    sizeListening();
    return () => window.removeEventListener("resize", sizeListening);
  }, []);
  return size;
};
