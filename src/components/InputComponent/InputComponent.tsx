import React, { useState } from "react";
import "./_input.scss";

type InputProps = {
  label: React.ReactNode;
};

export const Input: React.FC<InputProps> = ({ label }) => {
  const [state, setState] = useState<string>("");
  const handleChange = (e: React.ChangeEvent) => {
    //
  };
  return (
    <div>
      <label>{label}</label>
      <input value={state} onChange={handleChange} />
    </div>
  );
};
