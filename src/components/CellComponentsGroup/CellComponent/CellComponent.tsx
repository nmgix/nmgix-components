import React from "react";
import { CellTypes } from "../types";
import "./_cell.scss";

export type CellProps = {
  type: CellTypes;
  children: React.ReactNode;
};

export const Cell: React.FC<CellProps> = ({ type, children }) => {
  return <div>{children}</div>;
};
