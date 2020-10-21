import React from "react";
import { Header } from "../styled-elements";
import * as ASSETS from "../../constants/asset";

function AuthHeaderContainer() {
	return (
		<Header>
			<Header.Background src={ASSETS.BLOG_PICTURE_2} />
		</Header>
	);
}

export default AuthHeaderContainer;
