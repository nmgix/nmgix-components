import React from "react";
import "./_link.scss";

type inputProps = {
  content: string;
  link: string;
};

export const Link: React.FC<inputProps> = ({ content, link }) => {
  return (
    <a href={link}>{content}</a>
    // <Link href={link}>{content}</Link> из Next, пока хз
  );
};
