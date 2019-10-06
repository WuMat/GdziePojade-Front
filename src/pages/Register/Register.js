import React, { useState } from "react";

import "./Register.scss";

import { InputsWrapper } from "../../components/InputsWrapper/InputsWrapper";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { Spinner } from "../../components/Spinner/Spinner";
import { InfoErroSuccesIcon } from "../../components/InfoErroSuccesIcon/InfoErroSuccesIcon";
import axios from "../../axios";

import { validationInput } from "../../utils/validationInput";
import { from } from "rxjs";

export const Register = props => {
  const [registerValues, setRegisterValues] = useState({
    email: { validation: { valid: false } },
    name: { validation: { valid: false } },
    password: { validation: { valid: false } },
    passwordSecond: { validation: { valid: false } }
  });
  const [showError, setShowError] = useState(false);
  const [showSucces, setShowSucces] = useState(false);

  const inputHandler = e => {
    const value = e.target.value;
    const name = e.target.name;
    const validation = validationInput(
      name,
      value,
      registerValues.password.password
    );
    setRegisterValues({
      ...registerValues,
      [name]: { [name]: value, validation }
    });
  };

  const registerHandler = e => {
    e.preventDefault();

    let valid = true;
    for (const name in registerValues) {
      valid = registerValues[name].validation.valid && valid;
    }
    console.log(valid);

    if (valid) {
      axios
        .post("/api/user/signup", registerValues)
        .then(response => {
          setShowError(false);

          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="register">
      <InputsWrapper label="Rejestracja" />
      <div className="register__wrapper">
        <form onSubmit={registerHandler}>
          <Input
            type="email"
            name="email"
            placeholder="podaj mail"
            size="sm"
            width="tight"
            description="Adres email (Twój login w portalu)"
            error={
              registerValues.email.validation.valid
                ? null
                : registerValues.email.validation.message
            }
            onChange={inputHandler}
          />
          <Input
            type="text"
            name="name"
            placeholder="podaj imie"
            size="sm"
            width="tight"
            description="imię"
            error={
              registerValues.name.validation.valid
                ? null
                : registerValues.name.validation.message
            }
            onChange={inputHandler}
          />
          <Input
            type="text"
            name="password"
            placeholder="podaj haslo"
            size="sm"
            width="tight"
            description="Hasło"
            error={
              registerValues.password.validation.valid
                ? null
                : registerValues.password.validation.message
            }
            onChange={inputHandler}
          />
          <Input
            type="text"
            name="passwordSecond"
            placeholder="Powtórz hasło"
            size="sm"
            width="tight"
            description="Powtórz hasło"
            error={
              registerValues.passwordSecond.validation.valid
                ? null
                : registerValues.passwordSecond.validation.message
            }
            onChange={inputHandler}
          />
          <Button label="Zarejestuj się" type="submit" size="bg" color="red" />
        </form>
        {showError && showErrorUnValidValues()}
        {showSucces && showSuccesRegistration()}
        <InfoErroSuccesIcon
          icon="fas fa-exclamation-triangle"
          description="Wprowadz poprawne dane !"
          color="succes"
        />
      </div>
    </div>
  );
};

const showErrorUnValidValues = () => {
  return (
    <div className="register__error">
      <div className="error__icon">
        <i class="fas fa-exclamation-triangle" />
      </div>
      <p className="error__description">Wprowadz poprawne dane !</p>
    </div>
  );
};

const showSuccesRegistration = () => {
  return (
    <div className="register__error">
      <div className="succes__icon">
        <i class="fas fa-check" />
      </div>
      <p className="succes__description">Teraz możesz sie zalogować</p>
    </div>
  );
};
