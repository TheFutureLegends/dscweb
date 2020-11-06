import styled from "styled-components";
import { Typography, Grid } from "@material-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";
import { FlexBox } from "../..";

export const Picture = styled.img`
	width: 100%;
	border-radius: 5px;
`;

export const PictureWrapper = styled(FlexBox)`
	object-fit: contain;
	&.__small_blog_picture {
		&& {
			width: 100%;
			height: 100%;
		}
	}
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
	transition: 0.2s linear;
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.dark.fb.__fb_primary_text};
`;

export const Meta = styled(FlexBox)`
	font-size: 12px;
	div {
		font-family: "Poppins", sans-serif;
		font-weight: bold;
		color: ${({ theme: { colors } }) => colors.primary};
		span {
			font-family: "Raleway", sans-serif;
			font-weight: bold;
			color: ${({ theme: { colors } }) => colors.dark.fb.__fb_primary_text};
			&:nth-child(2) {
				margin-left: 2px;
			}
			&:nth-child(1) {
				margin-right: 2px;
			}
		}
	}
`;

export const SubHeader = styled(Typography)`
	&& {
		font-weight: normal;
		font-family: "Raleway", sans-serif;
		font-size: 14px;
		color: white;
	}
`;

export const SmallContainer = styled(Grid)`
	&& {
		cursor: pointer;
		margin-bottom: 10px;
		background-color: ${({ theme: { context } }) => context.dark};
		border-radius: 7px;
		&:hover {
			${Header} {
				transition: 0.2s linear;
				color: ${({ theme: { colors } }) => colors.secondary};
			}
		}
	}
	${PictureWrapper} {
		overflow: hidden;
		object-fit: cover;
	}
	${Header} {
		font-weight: bold;
		font-size: 12px;
		font-family: "Poppins", sans-serif;
		margin-top: 10px;
	}
	${Picture} {
		height: 100%;
	}
	${Meta} {
		font-size: 10px;
	}
`;

export const Container = styled.div`
	cursor: pointer;
	background-color: ${({ theme: { context } }) => context.dark};
	border-radius: 7px;
	&:hover {
		${Header} {
			transition: 0.2s linear;
			color: ${({ theme: { colors } }) => colors.secondary};
		}
	}
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
		height: 100%;
	}
`;

export const Text = styled.p`
	font-size: 12px;
	color: ${({ theme: { colors } }) => colors.dark.fb.__fb_secondary_text};
`;

export const Link = styled(ReactRouterLink)`
	text-decoration: none;
	color: black;
	font-size: 12px;
	font-weight: bold;
	color: ${({ theme: { colors } }) => colors.primary};
`;
