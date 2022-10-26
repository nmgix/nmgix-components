import React from "react";
import { NewsletterDataTypes } from "src/components/CellsSuffering/CellComponentsGroup/types";

type CellProps = {
  data: NewsletterDataTypes;
  index: number;
};

export const Cell: React.FC<CellProps> = ({ data, index }) => {
  return (
    // padding: "24px"
    <li style={{ border: "2px solid red", width: "100%", height: "100%" }} id={`cell-${index}`}>
      <span>Title: {data.title}</span>
      <br />
      <span>Level: {data.scheme.level[0]}</span>
      <br />
      <span>
        Size: width: {data.scheme.size!.width}, height: {data.scheme.size!.height}
      </span>
      <br />
    </li>
  );
};
