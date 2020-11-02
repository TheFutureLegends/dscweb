import React, { useContext } from "react";
import { Form, FlexBox } from "../../styled-elements";
import { Formik, Field } from "formik";
import { validRuleSet } from "../../../core/validation";
import * as Yup from "yup";
import * as BREAK from "../../../constants/breakpoint";
import * as ASSETS from "../../../constants/asset.js";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { connect } from "react-redux";
import { loginUser } from "../../../core/redux/actions/user.action.js";

const validationSchema = Yup.object({
	email: validRuleSet.email,
	password: validRuleSet.password,
});

const LoginContainer = ({ animatedElement, ...props }) => {
	const { breakPoint, history } = useContext(UtilityContext);
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={async (values) => {
				props.loginUser(values, history);
			}}
			validateOnBlur={false}
			validateOnChange={false}
			validationSchema={validationSchema}
		>
			{({ values, errors, handleSubmit }) => (
				<Form height="calc(100vh - 75px)" src={ASSETS.RMIT_WALLPAPER}>
					<Form.Inner
						width={breakPoint > BREAK.smartphone_md ? "400px" : "100vw"}
						height={breakPoint > BREAK.smartphone_md ? "fit-content" : "100vh"}
						direction="column"
						variants={breakPoint > BREAK.smartphone_md && animatedElement.Inner}
						exit="exit"
						initial="initial"
						animate="open"
						transition="transition"
					>
						<Form.Header>Welcome to the club!</Form.Header>
						<Form.Body>
							Login to contribute to the developer community
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
									error={
										errors.email ||
										(props.ui.errors !== null && props.ui.errors.login)
											? true
											: false
									}
									helperText={
										errors.email ||
										(props.ui.errors !== null && props.ui.errors.login)
									}
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
									error={
										errors.password ||
										(props.ui.errors !== null && props.ui.errors.login)
											? true
											: false
									}
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
								disabled={props.ui.loading}
								style={{ marginTop: "30px" }}
							>
								Login
							</Form.Button>
							<Form.Text>
								Not a member yet?&nbsp;
								<a
									className="__custom_a"
									href="https://l.facebook.com/l.php?u=https%3A%2F%2Fs3695656.typeform.com%2Fto%2FffdQm92r%3Ffbclid%3DIwAR1z2bCN-nXbYErEj-UHJsAf0Jz9t77w3aJBSr6F8UpqrNl0FXGf9qHKV5g&h=AT3t0S56lzuChK7rWq665uc0doIwY013piNjo80iTxn7nw-YOh5CxzrqMBPukldCvTBsVa8KqNvTY9elb7OdJViQKM0evY2lv3qx71glearZfOCmz8huzBvjukJ7kiI7whctuA"
								>
									Register here
								</a>
							</Form.Text>
						</Form.Base>
					</Form.Inner>
				</Form>
			)}
		</Formik>
	);
};

const mapStateToProps = (state) => ({
	ui: state.ui,
});

const mapDispatchToProps = {
	loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
