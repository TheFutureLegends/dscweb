import React from "react";
import * as Style from "./styles/Form";
function Form({ children, width, height, direction, ...restProps }) {
	return (
		<Style.Container {...restProps}>
			<Style.Inner width={width} height={height} direction={direction}>
				{children}
			</Style.Inner>
		</Style.Container>
	);
}

Form.Header = function FormHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

Form.Body = function FormBody({ children, ...restProps }) {
	return <Style.Body {...restProps}>{children}</Style.Body>;
};

Form.Base = function FormBase({ children, ...restProps }) {
	return <Style.Base {...restProps}>{children}</Style.Base>;
};

Form.InputField = function FormInputField({ children, ...restProps }) {
	return <Style.InputField {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
	return <Style.Button {...restProps}>{children}</Style.Button>;
};

Form.Text = function FormText({ children, ...restProps }) {
	return <Style.Text {...restProps}>{children}</Style.Text>;
};

Form.Link = function FormLink({ children, ...restProps }) {
	return <Style.Link {...restProps}>{children}</Style.Link>;
};

export default Form;
