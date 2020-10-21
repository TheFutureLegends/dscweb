import React from "react";
import axios from "axios";
import { Form, FlexBox } from "../../styled-elements";
import { Formik, Field } from "formik";
import { validRuleSet } from "../../../core/validation/loginForm";
import * as Yup from "yup";

const validationSchema = Yup.object({
	email: validRuleSet.email,
	password: validRuleSet.password,
});

const LoginContainer = () => {
	const handleCurrentUser = () => {
		axios
			.get("https://club-platform-api.herokuapp.com/api/auth/current")
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Formik
			initialValues={{ email: "Hey", password: "" }}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting = true;

				axios
					.post(
						"https://club-platform-api.herokuapp.com/api/auth/login",
						values
					)
					.then((res) => {
						console.log(res);
					})
					.catch((err) => {
						console.log(err);
					});

				setSubmitting = false;
			}}
			validateOnBlur={false}
			validateOnChange={false}
			validationSchema={validationSchema}
		>
			{({ values, errors, handleSubmit, isSubmitting }) => (
				<Form width="400px" height="600px" direction="column">
					<Form.Header>Chào mừng bạn!</Form.Header>
					<Form.Body>Chúng tôi rất vui vì sự có mặt của bạn ở đây</Form.Body>
					<Form.Base onSubmit={handleSubmit}>
						<FlexBox direction="column">
							<Field
								id="outlined-search"
								label="Địa chỉ email"
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
								label="Mật khẩu"
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
							Đăng nhập
						</Form.Button>

						<Form.Button
							variant="contained"
							fullWidth
							disableElevation
							size="large"
							onClick={() => {
								handleCurrentUser();
							}}
							disabled={isSubmitting === true}
						>
							Test current user
						</Form.Button>
						<Form.Text>
							Đã có tài khoản?<Form.Link to="#">&nbsp;Đăng nhập ngay</Form.Link>
						</Form.Text>
					</Form.Base>
				</Form>
			)}
		</Formik>
	);
};

export default LoginContainer;
