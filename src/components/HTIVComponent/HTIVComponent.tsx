// HighlightTextInViewComponent
import React, { useEffect } from "react";

type HtivProps = {
  children: React.ReactElement;
};

export const HTIV: React.FC<HtivProps> = ({ children }) => {
  const observerOptions = {
    root: document.querySelector(".htiv-observer"),
    rootMargin: "0px",
    threshold: 0.7,
  };
  const observerCallback = (entries: any) => {
    console.log(entries);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    React.Children.map(children, (child) => observer.observe(child as unknown as Element));

    return () => {};
  }, []);

  return (
    <div className='htiv-wrapper'>
      {children}
      <div className='htiv-observer' />
    </div>
  );
};
