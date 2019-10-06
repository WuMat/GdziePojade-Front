import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./InfoErroSuccesIcon.scss";

export const InfoErroSuccesIcon = ({ icon, description, color }) => {
  const baseClass = "InfoErroSuccesIcon";
  const classes = classNames(baseClass, {
    [`${baseClass}--color-${color}`]: !!color
  });
  return (
    <div className={classes}>
      <div className="InfoErroSuccesIcon__icon">
        <i className={icon} />
      </div>
      <p className="InfoErroSuccesIcon__description">{description}</p>
    </div>
  );
};

InfoErroSuccesIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
