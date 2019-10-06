import validator from "email-validator";

export const validationInput = (name, value, checkValue) => {
  const falseNull = { valid: false, message: null };
  const trueNull = { valid: true, message: null };

  let valid = false;
  let message = "";

  switch (name) {
    case "name":
      if (value.length === 0) {
        return falseNull;
      }
      if (value.length <= 3) {
        return { valid: false, message: "podaj przynajmniej 4 znaków" };
      }
      if (value.length > 4) {
        return trueNull;
      }
      break;
    case "email":
      const validation = validator.validate(value);
      if (value.length === 0) {
        return falseNull;
      }
      if (!validation) {
        return { valid: false, message: "wprowadz poprawny e-mail" };
      }
      if (validation) {
        return trueNull;
      }
      break;

    case "password":
      if (value.length === 0) {
        return falseNull;
      }
      if (value.length <= 6) {
        return { valid: false, message: "podaj przynajmniej 7 znaków" };
      }
      if (value.length > 6) {
        return trueNull;
      }
      break;

    case "passwordSecond":
      if (value.length === 0) {
        return falseNull;
      }
      if (value !== checkValue) {
        return { valid: false, message: "podaj dwa razy to samo hasło" };
      }
      if (value === checkValue) {
        return trueNull;
      }

      break;

    default:
      break;
  }
  return valid, message;
};
