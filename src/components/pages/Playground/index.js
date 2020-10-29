import React, { Fragment } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { FlexBox } from "../../styled-elements";
import { Grid } from "@material-ui/core";
import { theme } from "../../../global-theme";

function PlaygroundPage() {
	const unityContext = new UnityContext({
		codeUrl: "/build/Build.wasm",
		frameworkUrl: "/build/Build.framework.js",
		dataUrl: "/build/Build.data",
		loaderUrl: "/build/Build.loader.js",
	});
	return (
		<Fragment>
			<Grid container style={{ height: "100vh" }}>
				<Grid
					item={true}
					lg={3}
					style={{ backgroundColor: theme.context.dark_gray }}
				></Grid>
				<Grid
					item={true}
					lg={9}
					md={12}
					style={{ backgroundColor: theme.context.dark }}
				>
					<FlexBox
						style={{ height: "100%" }}
						justify="center"
						direction="column"
					>
						<Unity unityContext={unityContext} />
					</FlexBox>
				</Grid>
			</Grid>
		</Fragment>
	);
}

export default PlaygroundPage;
