const Validation = (values) => {
  let errors = {};
  if (!values.fullname) {
    errors.fullname = "Name is required";
  }
  if (!values.userEmail) {
    errors.userEmail = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.userEmail)) {
    errors.userEmail = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "password is requried!";
  }
  if (!values.repassword) {
    errors.repassword = "password is requried!";
  }
  return errors;
};
export default Validation;
