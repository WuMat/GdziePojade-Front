import React from "react";

import "./footer.scss";

import { Button } from "../Button/Button";

export const Footer = props => {
  return (
    <div className="footer">
      <div className="footer__categories">
        <div className="footer__wrapper">
          <div className="footer__listCategories">
            <ul>
              <li>Góry</li>
              <li>Jezrioro</li>
              <li>Zabytki</li>
              <li>Park</li>
              <li>Krajobraz</li>
              <li>Basen</li>
              <li>Ciekawe miejsce</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <div className="footer__wrapper">
          <div className="footer__logo" />
          <div className="footer__contact">
            <ul>
              <li>O nas</li>
              <li>Wszystkie lokalizacje</li>
              <li>Kontakt</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__btn">
        <div className="footer__wrapper">
          <Button
            label="Zaproponuj nową lokalizację"
            color="red"
            icon="fas fa-map-marker-alt"
            size="bg"
            arrow={true}
          />
        </div>
      </div>
    </div>
  );
};
