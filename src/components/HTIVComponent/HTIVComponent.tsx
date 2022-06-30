// HighlightTextInViewComponent
import "./_htiv.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Hint, HintProps, HintsWrapper } from "../HintComponentsGroup";

export type HTIVProps = {
  optionState: boolean;
  children: React.ReactNode;
  hints?: HintProps[];
};

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "-47% 0px -52% 0px",
  threshold: 0.00005,
};

/**
 * Highlight TextBox with Focus Component.
 * That component acts as wrapper for a text article (p-tag siblings for example).
 * Needs tags as children to append 'active' className on elements in actual focus.
 * @param optionState responsible for actually highlighting text, can be changed in context(settings).
 * @param children any tags except plain text
 * @param hints will render hints in their fixed or absolute position, for fixed - element (where the hint is going to be) and hint has to
 have same id, for example 'hint3' 
 * @returns {React.FC<HTIVProps>} Functional Component
 */
export const HTIV: React.FC<HTIVProps> = ({ children, optionState, hints }) => {
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
  const [observer] = useState<IntersectionObserver>(new IntersectionObserver(observerCallback, observerOptions));

  useEffect(() => {
    var targetParent = HTIVref.current;
    if (targetParent) {
      if ("IntersectionObserver" in window) {
        for (var i = 0; i < targetParent.children.length; i++) {
          if (optionState === false) {
            observer.disconnect();
            targetParent.children[i].classList.remove("active");
            observer.unobserve(targetParent.children[i]);
          } else {
            observer.observe(targetParent.children[i]);
          }
        }
      }
    }
  }, [optionState]);

  const correctHintsPosition = () => {
    if (HTIVref.current) {
      if (currentHints) {
        setHints(
          currentHints
            .filter((hint) => hint.type === "fixed")
            .map((hint, i) => {
              for (var j = 0; j < HTIVref.current!.children.length; j++) {
                if (HTIVref.current!.children[j].id === hint.id) {
                  var side = `${HTIVref.current!.offsetWidth - HTIVref.current!.offsetLeft}px`;
                  var top = `${
                    (HTIVref.current!.children[j] as HTMLDivElement).offsetTop + HTIVref.current!.offsetTop
                  }px`;
                  hint.styles =
                    (i + 1) % 2 == 0
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
    }
  };
  const [resizeObserver] = useState<ResizeObserver>(new ResizeObserver(correctHintsPosition));

  useEffect(() => {
    correctHintsPosition();
    resizeObserver.observe(HTIVref.current!);
  }, [HTIVref.current]);

  return (
    <div className='htiv-wrapper'>
      <div className='htiv-children' ref={HTIVref}>
        {children}
      </div>
      {hints ? <HintsWrapper hints={hints} /> : <></>}
      {currentHints ? (
        currentHints.map((hint) => <Hint {...hint} key={hint.id ? hint.id : hint.content.title} />)
      ) : (
        <></>
      )}
    </div>
  );
};
