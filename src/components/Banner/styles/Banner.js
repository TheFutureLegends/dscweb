import styled from "styled-components";

export const Container = styled.div`
	height: 600px;
	overflow: hidden;
	${"" /* object-fit: fill; */}
	background-image: url("/assets/images/jumbotron/netcom.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Image = styled.img`
	margin: 0px auto;
	width: fit-content;
`;
