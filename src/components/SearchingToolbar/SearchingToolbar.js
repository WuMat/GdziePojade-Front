import React from "react";

import "./searchingToolbar.scss";

export const SearchingToolbar = props => {
  return (
    <div className="searchingToolbar">
      <div className="searchingToolbar__textInput">
        <input type="text" value="jakis przykladowy value" />
      </div>
      <div className="searchingToolbar__categoriesInput">
        <select name="categories">
          <option value="Kategoria">Kategoria</option>
          <option value="Jezioro">Jezioro</option>
          <option value="Zabytki">Zabytki</option>
          <option value="Park">Park</option>
          <option value="Basen">Basen</option>
          <option value="Krajobraz">Krajobraz</option>
          <option value="Ciekawe miejsce">Ciekawe miejsce</option>
        </select>
      </div>
      <div className="searchingToolbar__provinceInput">
        <select name="province">
          <option value="Województwo">Województwo</option>
          <option value="Mazowsze">Mazowsze</option>
          <option value="Pomorskie">Pomorskie</option>
          <option value="Zadupie">Zadupie</option>
        </select>
      </div>
      <div className="searchingToolbar__findButton">
        <button type="submit">SZUKAJ</button>
      </div>
    </div>
  );
};
