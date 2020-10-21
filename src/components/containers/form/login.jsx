import React from "react";
import { Form, FlexBox } from "../../styled-elements";
import { Formik, Field } from "formik";
import * as ASSETS from "../../../constants/asset";

function LoginContainer() {
	return (
		<Formik
			initialValues={{ email: "Hey", password: "" }}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting = true;
				console.table(values);
				setSubmitting = false;
			}}
		>
			{({ values, errors, handleSubmit, isSubmitting }) => (
				<Form width="400px" height="600px" direction="column">
					{/* <img
						src={ASSETS.LOGIN_JUMBOTRON}
						alt="Connect with world"
						style={{
							width: "110px",
							marginBottom: "10px",
						}}
					/> */}
					<Form.Header>Chào mừng bạn!</Form.Header>
					<Form.Body>Chúng tôi rất vui vì sự có mặt của bạn ở đây</Form.Body>
					<Form.Base onSubmit={handleSubmit}>
						<FlexBox direction="column">
							<Field
								id="outlined-search"
								label="Địa chỉ email"
								type="search"
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
								type="search"
								variant="outlined"
								size="medium"
								name="password"
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
							// disabled={isSubmitting === true}
						>
							Đăng nhập
						</Form.Button>
						<Form.Text>
							Đã có tài khoản?<Form.Link to="#">&nbsp;Đăng nhập ngay</Form.Link>
						</Form.Text>
					</Form.Base>
				</Form>
			)}
		</Formik>
	);
}

export default LoginContainer;
