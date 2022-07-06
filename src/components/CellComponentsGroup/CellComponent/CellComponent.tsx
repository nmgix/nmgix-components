import React from "react";
import { Cell } from "../types";
import "./_cell.scss";

export type CellProps = {
  type: Cell;
  children: React.ReactNode;
};

export const CellComponent: React.FC<CellProps> = ({ type, children }) => {
  return <div>{children}</div>;
};
