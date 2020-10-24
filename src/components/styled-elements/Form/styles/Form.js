import styled from "styled-components";
import FlexBox from "../../FlexBox";
import { TextField, Button as MUIButton } from "@material-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled(FlexBox)`
	height: ${({ height }) => height};
	background-color: ${({ theme: { context } }) => context.dark};
	background-image: url(${({ src }) => src});
	background-size: cover;
	background-position: center;
`;

export const Inner = styled(motion.div)`
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	padding: 50px 0px;
	background-color: white;
	z-index: 10;
	border-radius: 6px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h2`
	font-size: 29px;
	margin-bottom: 8px;
`;

export const Body = styled.p`
	width: 250px;
	text-align: center;
	margin-bottom: 10px;
`;

export const Base = styled.form`
	width: 100%;
	padding: 10px 40px;
`;

export const InputField = styled(TextField)`
	&& {
		margin-bottom: 13px;
	}
`;

export const Button = styled(MUIButton)`
	&& {
		background-color: ${({ theme: { colors } }) => colors.primary};
		color: white;
		font-weight: bold;
		&:hover {
			background-color: ${({ theme: { colors } }) => colors.secondary};
		}
	}
`;

export const Text = styled.p`
	margin-top: 10px;
`;

export const Link = styled(ReactRouterLink)`
	color: ${({ theme: { colors } }) => colors.secondary};
	text-decoration: none;
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;
