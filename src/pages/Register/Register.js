import React, { useState } from "react";

import "./Register.scss";

import { InputsWrapper } from "../../components/InputsWrapper/InputsWrapper";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export const Register = props => {
  const [registerValues, setRegisterValues] = useState({});

  const inputHandler = e => {
    const value = e.target.value;
    const name = e.target.name;
    setRegisterValues({ ...registerValues, [name]: value });
  };
  const registerHandler = e => {
    e.preventDefault();
    console.log("zarejestruj");
    // axios
    //   .post("/api/user/signup", registerValues)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="register">
      <InputsWrapper label="Rejestracja" />
      <form onSubmit={registerHandler}>
        <Input
          type="email"
          name="email"
          placeholder="podaj mail"
          size="sm"
          width="tight"
          description="Adres email (Twój login w portalu)"
          onChange={inputHandler}
        />
        <Input
          type="text"
          name="name"
          placeholder="podaj imie"
          size="sm"
          width="tight"
          description="imię"
          onChange={inputHandler}
        />
        <Input
          type="text"
          name="password"
          placeholder="podaj haslo"
          size="sm"
          width="tight"
          description="Hasło"
          onChange={inputHandler}
        />
        <Input
          type="text"
          name="password"
          placeholder="podaj haslo"
          size="sm"
          width="tight"
          description="Powtórz hasło"
          onChange={inputHandler}
        />
        <Button label="Zarejestuj się" type="submit" size="bg" color="red" />
      </form>
    </div>
  );
};
