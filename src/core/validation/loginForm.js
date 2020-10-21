import * as Yup from "yup";

const validRuleSet = {
	email: Yup.string()
		.required("This field is required")
		.email("Invalid email address")
		.min(4, "Email must be at least 4 characters"),
	password: Yup.string()
		.required("This field is required")
		.min(4, "Password must be at least 4 characters"),
	username: Yup.string()
		.required("This field is required")
		.matches(/^[a-zA-Z]+$/, "Username must not contain any special characters")
		.min(4, "Username must be at least 4 characters"),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Password is not matched with confirm password"
	),
};

export { validRuleSet };
