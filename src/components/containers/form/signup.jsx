import React, { useContext } from "react";
import { Form, FlexBox } from "../../styled-elements";
import { Formik, Field } from "formik";
import { validRuleSet } from "../../../core/validation";
import * as Yup from "yup";
import * as BREAK from "../../../constants/breakpoint";
import * as ASSETS from "../../../constants/asset.js";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { connect } from "react-redux";
import { signupUser } from "../../../core/redux/actions/user.action.js";

const validationSchema = Yup.object({
  username: validRuleSet.username,
  email: validRuleSet.email,
  password: validRuleSet.password,
  confirmPassword: validRuleSet.confirmPassword,
});

const SignupContainer = ({ animatedElement, ...props }) => {
  const { breakPoint, history } = useContext(UtilityContext);
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={async (values) => {
        props.signupUser(values, history);
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
            <Form.Body>Register to begin your path!</Form.Body>
            <Form.Base onSubmit={handleSubmit}>
              <FlexBox direction="column">
                <Field
                  id="outlined-search"
                  label="Username"
                  type="input"
                  variant="outlined"
                  size="medium"
                  name="username"
                  fullWidth
                  error={
                    errors.username ||
                    (props.ui.errors !== null && props.ui.errors.login)
                      ? true
                      : false
                  }
                  helperText={
                    errors.username ||
                    (props.ui.errors !== null && props.ui.errors.login)
                  }
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
                <Field
                  id="outlined-search"
                  label="Confirm Password"
                  variant="outlined"
                  size="medium"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  error={
                    errors.confirmPassword ||
                    (props.ui.errors !== null && props.ui.errors.login)
                      ? true
                      : false
                  }
                  helperText={errors.confirmPassword}
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
                Register
              </Form.Button>
              <Form.Text>
                Already have account?&nbsp;
                <a
                  className="__custom_a"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Login here
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
  signupUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
