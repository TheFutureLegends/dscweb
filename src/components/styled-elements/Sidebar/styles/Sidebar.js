import styled from "styled-components";
import { FlexBox } from "../../index";
import { Divider as MUIDivider } from "@material-ui/core";

export const Container = styled.div`
	padding: 10px 10px 0px;
	height: 100%;
	width: 100%;
`;

export const Inner = styled(FlexBox)`
	width: 100%;
`;

export const Item = styled(FlexBox)`
	padding: 10px;
	cursor: pointer;
	border-radius: 5px;
	margin-bottom: 5px;
	width: 100%;
	&:hover {
		background-color: ${({ theme: { colors } }) =>
			colors.dark.fb.__fb_light_gray};
	}
`;

export const Picture = styled.div`
	margin-right: 15px;
	&.__avatar {
		border-radius: 50%;
		height: 40px;
		width: 40px;
	}
	&.__icon {
		height: 25px;
		width: 25px;
		margin-left: 7px;
		margin-right: 25px;
	}

	background-image: url(${({ src }) => src});
	background-size: contain;
`;

export const Header = styled.h4`
	color: white;
	font-family: "Raleway", sans-serif;
	font-weight: 500;
`;

export const Divider = styled(MUIDivider)`
	&& {
		height: 2px;
		width: 100%;
		background-color: ${({ theme: { colors } }) =>
			colors.dark.fb.__fb_light_gray};
		margin: 20px auto;
		margin-top: 10px;
	}
`;

export const Title = styled.h4`
	width: 100%;
	color: white;
	margin-left: 20px;
	margin-bottom: 20px;
	font-family: "Poppins", sans-serif;
`;
