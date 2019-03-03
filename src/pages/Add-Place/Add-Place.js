import React, { useState } from "react";

import "./add-Place.scss";

import { InputsWrapper } from "../../components/InputsWrapper/InputsWrapper";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

import axios from "../../axios";

export const AddPlace = props => {
  const sendPlace = e => {
    e.preventDefault();
    console.log("object");
  };

  return (
    <div className="addPlace">
      <form onSubmit={sendPlace}>
        <InputsWrapper>
          <div className="addPlace__inputWrapper--wide">
            <Input
              type="text"
              placeholder="podaj nazwę"
              description="Dodaj nazwę lokalizacji"
              error="zbyt mało liter"
            />
          </div>
        </InputsWrapper>
        <InputsWrapper>
          <div className="addPlace__inputWrapper--tight">
            <Input
              type="text"
              placeholder="nazwa miasta"
              description="Nazwa Miasta"
              error={null}
            />
          </div>
          <div className="addPlace__inputWrapper--tight">
            <Input
              type="text"
              placeholder="nazwa miasta"
              description="Nazwa Miasta"
              error={null}
            />
          </div>
          <div className="addPlace__inputWrapper--tight">
            <Input
              type="text"
              placeholder="nazwa miasta"
              description="Nazwa Miasta"
              error={null}
            />
          </div>
        </InputsWrapper>
        <InputsWrapper>
          <Input
            type="text"
            placeholder="nazwa miasta"
            description="Nazwa Miasta"
            error={null}
          />
        </InputsWrapper>
        <Button label="Wyślij od bazy" type="submit" />
      </form>
    </div>
  );
};
