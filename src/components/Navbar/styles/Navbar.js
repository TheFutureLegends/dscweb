import styled from "styled-components";
import { FlexBox } from "../../index";
import { AppBar, Typography, InputBase } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled(FlexBox)`
	* {
		user-select: none;
	}
	box-shadow: unset;
	height: 65px;
	padding: 0px 20px;
	background-color: ${({ theme: { context } }) => context.dark};
`;

export const Inner = styled(FlexBox)`
	width: 100%;
	height: 100%;
`;

export const Header = styled(Typography)`
	&& {
		color: white;
		font-size: 18px;
		font-family: "Poppins", sans-serif;
		font-weight: bold;
		width: fit-content;
		white-space: nowrap;
		margin-right: 20px;
	}
`;

export const SearchBar = styled(FlexBox)`
	padding: 1px 10px;
	font-size: 14px;
	border-radius: 4px;
	background-color: ${({ theme: { colors } }) =>
		colors.dark.__background_interactive_gray};
`;

export const Input = styled(InputBase)`
	&& {
		transition: width 0.3s;
		font-size: 12px;
		width: ${({ active }) => (active === true ? "300px" : "150px")};
		color: white;
		&:focus {
			display: none;
		}
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	&.__search {
		color: white;
		cursor: pointer;
	}
`;

export const Logo = styled.img`
	width: 50px;
	margin-right: 20px;
	border-radius: 50%;
`;

export const Link = styled(ReactRouterLink)`
	transition: all 0.1s ease-in-out;
	text-decoration: none;
	color: white;
	font-weight: 700;
	font-family: "Poppins", sans-serif;
	margin: 0px 20px;
	&:hover {
		color: ${({ theme: { colors } }) => colors.primary};
		border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
	}
`;

export const IconButton = styled(Icon)``;
