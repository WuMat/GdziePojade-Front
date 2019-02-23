import React from "react";

import { Button } from "../Button/Button";
import { SearchingToolbar } from "../SearchingToolbar/SearchingToolbar";
import "./header.scss";

export const Header = props => {
  return (
    <div className="layout">
      <div className="layout__header">
        <div className="header__topMenu">
          <div className="header__menuWrapper">
            <div className="header__logo">
              <div className="logo" />
            </div>
            <div className="header__button">
              <Button
                label="Zaproponuj nową lokalizację"
                color="red"
                icon="fas fa-map-marker-alt"
                size="bg"
                arrow={true}
              />
            </div>
            <div className="header__menu">
              <ul>
                <li>O nas</li>
                <li>Najnowsze lokalizację</li>
                <li>Najlpiej oceniane miejsca</li>
                <li>Wszystkie lokalizację</li>
                <li>Kontakt</li>
              </ul>
            </div>
            <div className="header__userPanel">
              <div className="header__statsUser">Do odwiedzenia (23)</div>
              <Button label="Moje konto" color="red" size="sm" />
            </div>
          </div>
        </div>
        <div className="header__categories">
          <div className="header__menuWrapper">
            <div className="categories__list">
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
        <div className="header__searchingToolbar">
          <div className="searchingToolbar__wrapper">
            <SearchingToolbar />
          </div>
        </div>
        <div className="header__photos">
          <div className="photos__first">
            <div className="photos__frame" />
          </div>
          <div className="photos__second">
            <div className="photos__frame" />
          </div>
          <div className="photos__third">
            <div className="photos__frame" />
          </div>
        </div>
      </div>
    </div>
  );
};
