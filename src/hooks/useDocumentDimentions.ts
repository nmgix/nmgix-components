import { useState, useEffect } from "react";

function getDocumentDimentions() {
  if (typeof document !== "undefined") {
    // const { innerWidth: width, innerHeight: height } = window;
    const width = document.body.scrollWidth;
    const height = document.body.scrollHeight;

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

export default function useDocumentDimentions() {
  const [documentDimentions, setDocumentDimentions] = useState(() => getDocumentDimentions());

  useEffect(() => {
    function handleResize(defined?: { width: number; height: number }) {
      setDocumentDimentions(defined ?? getDocumentDimentions);
    }

    const resizeObserver = new ResizeObserver((entries) =>
      handleResize({ width: entries[0].target.scrollWidth, height: entries[0].target.scrollHeight })
    );
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.unobserve(document.body);
    };
  }, []);

  return documentDimentions;
}
