import React from "react";
import "./_cellGrid.scss";

type CellGridProps = {
  children: React.ReactNode;
};

export const CellGrid: React.FC<CellGridProps> = ({ children }) => {
  return <div>{children}</div>;
};
