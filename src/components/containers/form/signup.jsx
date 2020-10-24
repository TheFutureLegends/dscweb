import React, { useContext } from "react";
import axios from "axios";
import { Form, FlexBox } from "../../styled-elements";
import { Formik, Field } from "formik";
import { validRuleSet } from "../../../core/validation";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import * as Yup from "yup";
import * as BREAK from "../../../constants/breakpoint";
import * as ROUTES from "../../../constants/route";
import * as ASSETS from "../../../constants/asset.js";

const validationSchema = Yup.object({
	email: validRuleSet.email,
	password: validRuleSet.password,
	confirmPassword: validRuleSet.confirmPassword,
	name: validRuleSet.name,
});

const SignupContainer = () => {
	const { breakPoint } = useContext(UtilityContext);
	return (
		<Formik
			initialValues={{ email: "", password: "", confirmPassword: "", name: "" }}
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
				<Form height="calc(100vh - 75px)" src={ASSETS.RMIT_WALLPAPER}>
					<Form.Inner
						width={breakPoint > BREAK.smartphone_md ? "400px" : "100vw"}
						height={
							breakPoint > BREAK.smartphone_md
								? "fit-content"
								: "calc(100vh - 75px)"
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
									label="Name"
									type="input"
									variant="outlined"
									size="medium"
									name="name"
									fullWidth
									error={errors.email ? true : false}
									helperText={errors.email}
									as={Form.InputField}
								/>
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
								<Field
									id="outlined-search"
									label="Confirm Password"
									variant="outlined"
									size="medium"
									name="confirmPassword"
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
								Sign Up
							</Form.Button>
							<Form.Text>
								Already a member?
								<Form.Link to={ROUTES.LOG_IN}>&nbsp;Register here</Form.Link>
							</Form.Text>
						</Form.Base>
					</Form.Inner>
				</Form>
			)}
		</Formik>
	);
};

export default SignupContainer;
