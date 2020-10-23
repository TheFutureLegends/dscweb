import React, { useContext } from "react";
import axios from "axios";
import { Form, FlexBox } from "../../styled-elements";
import { Formik, Field } from "formik";
import { validRuleSet } from "../../../core/validation/loginForm";
import * as Yup from "yup";
import * as BREAK from "../../../constants/breakpoint";
import { UtilityContext } from "../../../contexts/UtilityContext.js";

const validationSchema = Yup.object({
	email: validRuleSet.email,
	password: validRuleSet.password,
});

const LoginContainer = () => {
	const { breakPoint } = useContext(UtilityContext);
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting = true;

				try {
					let res = await axios.post(
						"https://club-platform-api.herokuapp.com/api/auth/login",
						values
					);
					console.log(res);
				} catch (error) {
					console.log(error);
				}

				setSubmitting = false;
			}}
			validateOnBlur={false}
			validateOnChange={false}
			validationSchema={validationSchema}
		>
			{({ values, errors, handleSubmit, isSubmitting }) => (
				<Form
					width={breakPoint > BREAK.smartphone_md ? "400px" : "100vw"}
					height={
						breakPoint > BREAK.smartphone_md ? "500px" : "calc(100vh - 75px)"
					}
					direction="column"
				>
					<Form.Header>Welcome to the club!</Form.Header>
					<Form.Body>
						Join our developer community by filling out the form below
					</Form.Body>
					<Form.Base onSubmit={handleSubmit}>
						<FlexBox direction="column">
							<Field
								id="outlined-search"
								label="Email Address"
								type="input"
								variant="outlined"
								size="medium"
								name="email"
								fullWidth
								error={errors.email ? true : false}
								helperText={errors.email}
								as={Form.InputField}
							/>
							<Field
								id="outlined-search"
								label="Password"
								variant="outlined"
								size="medium"
								name="password"
								type="password"
								fullWidth
								error={errors.password ? true : false}
								helperText={errors.password}
								as={Form.InputField}
							/>
						</FlexBox>
						<Form.Button
							variant="contained"
							fullWidth
							disableElevation
							size="large"
							type="submit"
							disabled={isSubmitting === true}
						>
							Login
						</Form.Button>
						<Form.Text>
							Does not have any account?
							<Form.Link to="#">&nbsp;Sign up here</Form.Link>
						</Form.Text>
					</Form.Base>
				</Form>
			)}
		</Formik>
	);
};

export default LoginContainer;
