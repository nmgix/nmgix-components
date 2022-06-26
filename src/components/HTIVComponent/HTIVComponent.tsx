// HighlightTextInViewComponent
import "./_htiv.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Hint, HintProps, HintsWrapper } from "../HintComponentsGroup";

type HtivProps = {
  optionState: boolean;
  children: React.ReactNode;
  hints?: HintProps[];
};

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "-47% 0px -50% 0px",
  threshold: 0.05,
};

/**
 * Highlight TextBox with Focus Component.
 * That component acts as wrapper for a text article (p-tag siblings for example).
 * Needs tags as children to append 'active' className on elements in actual focus.
 * @param optionState responsible for actually highlighting text, can be changed in context(settings).
 * @param children any tags except plain text
 * @param hints will render hints in their fixed or absolute position, for fixed - element (where the hint is going to be) and hint have to
 have same id, for example 'hint3' * @returns {React.FC<HtivProps>} Functional Component
 */
export const HTIV: React.FC<HtivProps> = ({ children, optionState, hints }) => {
  const [currentHints, setHints] = useState<HintProps[] | undefined>(hints);
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
    var targetParent = document.querySelector(".htiv-children");
    if (targetParent) {
      if (optionState === false) {
        for (var i = 0; i < targetParent.children.length; i++) {
          targetParent.children[i].classList.remove("active");
        }
      }
      // else {
      //    window.scrollBy(0, 10);
      // }
    }
  }, [optionState]);

  useEffect(() => {
    if (HTIVref.current) {
      if (currentHints) {
        setHints(
          currentHints.map((hint, i) => {
            for (var i = 0; i < HTIVref.current!.children.length; i++) {
              if (HTIVref.current!.children[i].id === hint.id) {
                var side = `${HTIVref.current!.offsetWidth + HTIVref.current!.offsetLeft}px`;
                var top = `${(HTIVref.current!.children[i] as HTMLDivElement).offsetTop}px`;
                hint.styles =
                  i % 2 == 0
                    ? {
                        position: "absolute",
                        left: side,
                        top: top,
                      }
                    : {
                        position: "absolute",
                        right: side,
                        top: top,
                      };
              }
            }
            return hint;
          })
        );
      }

      if ("IntersectionObserver" in window) {
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
    <div className='htiv-wrapper'>
      {optionState ? (
        <div className='htiv-children' ref={HTIVref}>
          {children}
        </div>
      ) : (
        <div className='htiv-children'>{children}</div>
      )}
      {hints ? <HintsWrapper hints={hints} /> : <></>}
      {currentHints ? currentHints.filter((hint) => hint.type === "fixed").map((hint) => <Hint {...hint} />) : <></>}
    </div>
  );
};
