import React from "react";
import "./_link.module.scss";

type InputProps = {
  content: string;
  link: string;
};

export const Link: React.FC<InputProps> = ({ content, link }) => {
  return (
    <a href={link}>{content}</a>
    // <Link href={link}>{content}</Link> из Next, пока хз
  );
};
