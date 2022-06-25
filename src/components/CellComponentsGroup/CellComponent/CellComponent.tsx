import React from "react";
import "./_cell.scss";

export type CellProps = {
  children: React.ReactNode;
};

export const Cell: React.FC<CellProps> = ({ children }) => {
  return <div>{children}</div>;
};
