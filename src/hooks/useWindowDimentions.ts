import { useState, useEffect } from "react";

function getWindowDimentions() {
  if (typeof window !== "undefined") {
    // const { innerWidth: width, innerHeight: height } = window;
    const width = window.visualViewport!.width;
    const height = window.visualViewport!.height;

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
