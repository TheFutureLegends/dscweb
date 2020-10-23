import styled from "styled-components";
import FlexBox from "../../FlexBox";
import { TextField, Button as MUIButton } from "@material-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ASSETS from "../../../../constants/asset";

export const Container = styled(FlexBox)`
	height: calc(100vh - 75px);
	background-color: ${({ theme: { context } }) => context.dark};
	background-image: url(${ASSETS.RMIT_WALLPAPER});
	background-size: cover;
	background-position: center;
`;

export const Inner = styled(FlexBox)`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: white;
	z-index: 10;
	border-radius: 6px;
	box-shadow: 1px 1px 5px rgb(188, 188, 188);
`;

export const Header = styled.h2`
	font-size: 29px;
	margin-bottom: 8px;
`;

export const Body = styled.p`
	width: 250px;
	text-align: center;
`;

export const Base = styled.form`
	width: 100%;
	margin-top: 30px;
	padding: 10px 40px;
`;

export const InputField = styled(TextField)`
	&& {
		margin-bottom: 13px;
	}
`;

export const Button = styled(MUIButton)`
	&& {
		margin-top: 30px;
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
