import React from "react";

import "./inputsWrapper.scss";

export const InputsWrapper = ({ label, children }) => {
  return (
    <div className="inputsWrapper">
      {label ? <p>{label}</p> : null}
      {children}
    </div>
  );
};
