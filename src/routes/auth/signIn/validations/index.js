import validator from "validator";
import isEmpty from "../../../../util/isEmpty";
const validateLogin = data => {
  console.log(data);
  let errors = {};

  if (validator.isEmpty(data.email)) {
    errors.email = "User Name is Requierd *";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is Requierd";
  } else if (!validator.isLength(data.password, { min: 5, max: 20 })) {
    errors.password = "Password must be Between 5 and 20 characters *";
  }

  const feedback = {
    haserror: !isEmpty(errors),
    errors,
  };
  return feedback;
};
export default validateLogin;
