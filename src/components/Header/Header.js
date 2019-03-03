import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";
import { SearchingToolbar } from "../SearchingToolbar/SearchingToolbar";
import "./header.scss";

export const Header = props => {
  return (
    <div className="header">
      <div className="header__topMenu">
        <div className="header__menuWrapper">
          <div className="header__logo">
            <Link to="/home">
              <div className="logo" />
            </Link>
          </div>
          <div className="header__button">
            <Link to="/addPlace">
              <Button
                label="Zaproponuj nową lokalizację"
                color="red"
                icon="fas fa-map-marker-alt"
                size="bg"
                arrow={true}
              />
            </Link>
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
            <Link to="/login">
              <Button label="Twoje Konto" color="red" size="sm" />
            </Link>
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
  );
};
