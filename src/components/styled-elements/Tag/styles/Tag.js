import styled from "styled-components";
import { FlexBox } from "../../index";

export const Item = styled.div`
	font-family: "Raleway", sans-serif;
	flex-wrap: wrap;
	flex-shrink: 0;
	text-transform: capitalize;
	background-color: ${({ theme: { colors } }) =>
		colors.dark.fb.__fb_light_gray};
	color: white;
	padding: 5px 10px;
	margin: 5px 5px;
	font-size: 11px;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme: { colors } }) => colors.primary};
		box-shadow: ${({ theme: { colors } }) => colors.dark.__elevation_medium};
	}
`;

export const Container = styled(FlexBox)`
	height: fit-content;
	overflow: auto;
	flex-wrap: wrap;
	width: fit-content;
	margin: 0px auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
`;
