import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./login.scss";

import { InputsWrapper } from "../../components/InputsWrapper/InputsWrapper";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Spinner } from "../../components/Spinner/Spinner";
import axios from "../../axios";

export const Login = props => {
  const [registerValues, setRegisterValues] = useState({});

  const inputHandler = e => {
    const value = e.target.value;
    const name = e.target.name;
    setRegisterValues({ ...registerValues, [name]: value });
  };

  const loginHandler = e => {
    e.preventDefault();
    console.log("zaloguj");
  };

  return (
    <div className="Login">
      <InputsWrapper label="Zaloguj się" />
      <div className="RegisterLogin__Login">
        <div className="Login__inputs">
          <form onSubmit={loginHandler}>
            <Input
              type="text"
              name="login"
              placeholder="Login"
              description="Login"
              onChange={inputHandler}
              color="red"
            />
            <br />
            <Input
              type="text"
              name="Password"
              placeholder="Password"
              description="Password"
              onChange={inputHandler}
              color="red"
            />
            <p className="inputs__reminder">Nie pamietam hasła</p>
            <div className="inputs__btn">
              <Button label="zaloguj" type="submit" size="bg" color="red" />
            </div>
          </form>
        </div>
        <div className="RegisterLogin__registerButton">
          <p>Nie masz jeszcze konta?</p>
          <Link to="/register">
            <Button label="Załóż darmowe konto teraz" color="red" size="bg" />
          </Link>
        </div>
      </div>
    </div>
  );
};
