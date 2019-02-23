import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./button.scss";

export const Button = ({ type, onClick, label, color, icon, size, arrow }) => {
  const baseClass = "btn";
  const classes = classNames(baseClass, {
    [`${baseClass}--color-${color}`]: !!color,
    [`${baseClass}--size-${size}`]: !!size
  });
  return (
    <button className={classes} type={type} onClick={onClick}>
      {icon ? (
        <span className="btn__icon">
          <i className={icon} />
        </span>
      ) : null}
      <p>{label}</p>
      {arrow ? (
        <div className="arrow">
          <i className="fas fa-angle-right" />
        </div>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  arrow: PropTypes.bool
};

Button.defaultProps = {
  label: "input some text"
};
