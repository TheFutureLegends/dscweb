import React, { Fragment } from "react";
import { SignupContainer } from "../../containers";

// -- Animations --
import { default as LoginAnimation } from "../../animations/login";
import { AnimatePresence } from "framer-motion";

function Login() {
  return (
    <AnimatePresence exitBeforeEnter>
      <LoginAnimation
        render={(ele) => <SignupContainer animatedElement={ele} />}
      />
    </AnimatePresence>
  );
}

export default Login;
