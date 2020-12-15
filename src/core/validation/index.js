import * as Yup from "yup";

const validRuleSet = {
  email: Yup.string()
    .required("You must enter your email")
    .email("Invalid email address")
    .min(4, "Email must be at least 4 characters"),
  password: Yup.string()
    .required("Password cannot be blank")
    .min(4, "Password must be at least 4 characters"),
  username: Yup.string()
    .required("Username cannot be blank")
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z][0-9]*)*$/,
      "Username must not contain any special characters"
    )
    .min(4, "Name must be at least 4 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password cannot be blank")
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm Password does not match with password"
    ),
};

export { validRuleSet };
