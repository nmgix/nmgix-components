// HighlightTextInViewComponent
import "./_htiv.scss";
import React, { useContext, useEffect, useRef } from "react";

type HtivProps = {
  children: React.ReactNode;
};

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "-47% 0px -50% 0px",
  threshold: 0.1,
};

/**
 * Highlight TextBox with Focus Component.
 * That component acts as wrapper for a text article (p-tag siblings for example).
 * Needs tags as children to append 'active' className on elements in actual focus.
 * @param optionState responsible for actually highlighting text, can be changed in context(settings).
 * @param children any tags except plain text
 * @returns {React.FC<HtivProps>} Functional Component
 */
export const HTIV: React.FC<HtivProps> = ({ children }) => {
  // const {optionState} = useContext(null)
  const HTIVref = useRef<HTMLDivElement>(null);
  const observerCallback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
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
      if (/*optionState && */ HTIVref.current) {
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
