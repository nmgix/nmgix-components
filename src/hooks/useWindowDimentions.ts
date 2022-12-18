import { useState, useEffect } from "react";

function getWindowDimentions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;

    // console.log({
    //   width,
    //   height,
    // });

    return {
      width,
      height,
    };
  } else {
    return {
      width: 800,
      height: 400,
    };
  }
}

export default function useWindowDimentions() {
  const [windowDimentions, setWindowDimentions] = useState(() => getWindowDimentions());

  useEffect(() => {
    function handleResize() {
      setWindowDimentions(getWindowDimentions);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimentions;
}
