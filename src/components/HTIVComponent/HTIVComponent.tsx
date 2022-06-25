// HighlightTextInViewComponent
import "./_htiv.scss";
import React, { useEffect, useRef } from "react";

type HtivProps = {
  children: React.ReactNode;
};

export const HTIV: React.FC<HtivProps> = ({ children }) => {
  const HTIVref = useRef<HTMLDivElement>(null);
  const observerCallback: IntersectionObserverCallback = (entries, observer) => {
    var activeArray = entries.splice(
      Math.ceil(entries.length / 2) - 1,
      entries.length % 2 == 0 ? entries.length / 2 : 1
    );
    activeArray.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        if (entry.target.classList.contains("active")) {
          entry.target.classList.remove("active");
        }
      }
    });
  };

  useEffect(() => {
    if ("IntersectionObserver" in window) {
      if (HTIVref.current) {
        const observerOptions = {
          root: HTIVref.current,
          rootMargin: "0px",
          threshold: 0.1,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        for (var i = 0; i < HTIVref.current.children.length; i++) {
          observer.observe(HTIVref.current.children[i]);
        }
        return () => {
          observer.disconnect();
        };
      }
    }
  }, [HTIVref.current]);

  return (
    <div className='htiv-wrapper' ref={HTIVref}>
      {children}
    </div>
  );
};
