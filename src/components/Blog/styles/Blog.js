import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";
import { FlexBox } from "../..";

export const Picture = styled.img``;

export const PictureWrapper = styled(FlexBox)`
	&.__meta_picture {
		&& {
			height: 100%;
			width: 40px;
			object-fit: cover;
			justify-content: center;
			border-radius: 5px;
		}
	}
`;

export const Header = styled(Typography)`
	margin-bottom: 10px;
`;

export const Meta = styled(FlexBox)`
	margin-top: 10px;
	font-size: 12px;
	div {
		font-family: "Poppins", sans-serif;
		font-weight: bold;
		color: ${({ theme: { colors } }) => colors.primary};
		span {
			font-family: "Raleway", sans-serif;
			font-weight: bold;
			color: ${({ theme: { context } }) => context.dark};
			&:nth-child(2) {
				margin-left: 2px;
			}
			&:nth-child(1) {
				margin-right: 2px;
			}
		}
	}
`;

export const SmallContainer = styled.div`
	background-color: red;
	width: 100%;
`;

export const Container = styled.div`
	${PictureWrapper} {
		height: 290px;
		overflow: hidden;
		object-fit: cover;
	}
	${Header} {
		font-weight: bold;
		font-size: 18px;
		font-family: "Poppins", sans-serif;
		margin-top: 10px;
	}
	${Picture} {
		width: 100%;
	}
`;

export const SubHeader = styled(Header)`
	&& {
		font-weight: normal;
		font-family: "Raleway", sans-serif;
		font-size: 14px;
	}
`;

export const Text = styled.p`
	font-size: 12px;
`;

export const Link = styled(ReactRouterLink)`
	text-decoration: none;
	color: black;
	font-size: 12px;
	font-weight: bold;
	color: ${({ theme: { colors } }) => colors.primary};
`;
