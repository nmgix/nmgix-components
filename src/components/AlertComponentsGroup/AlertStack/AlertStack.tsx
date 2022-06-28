import React from "react";
import { AlertProps } from "../Alert/Alert";

/**
 * Alert Stack component.
 * Responsible for stacking fixed-type alerts in vertical stack with option to delete each node after timeout.
 * @param {AlertProps[]} alerts alerts props to be rendered.
 * @param {number} timeout after a period of time (in ms) last node will be removed from stack.
 * @returns {React.FC<AlertProps>} Functional Component.
 */
export const AlertStack: React.FC<{ alerts: AlertProps[]; timeout: number }> = ({ alerts }) => {
  return <div>AlertStack</div>;
};
