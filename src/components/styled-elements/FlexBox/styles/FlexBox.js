import styled from "styled-components";

export const Container = styled.div`
	justify-content: ${({ justify }) => (justify ? justify : "center")};
	display: flex;
	flex-direction: ${({ direction }) => (direction ? direction : "row")};
	align-items: center;
`;

export const Break = styled.div`
	flex-basis: ${({ width }) => width};
`;
