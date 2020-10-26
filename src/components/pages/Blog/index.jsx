import React, { useContext } from "react";
import * as CSS from "./styles/blog.style.js";
import {
	Typography,
	Divider,
	useTheme,
	useMediaQuery,
} from "@material-ui/core";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import * as BREAK from "../../../constants/breakpoint";
import MostPopularSection from "../../containers/blog/mostPopularSection";
import LatestUpdateSection from "../../containers/blog/latestUpdateSection";
import AllPostSection from "../../containers/blog/allPostSection";
import { useFetch } from "../../hooks/useFetch";

function BlogPage() {
	const { breakPoint, apiDomain } = useContext(UtilityContext);
	const theme = useTheme();
	const fetchedPosts = useFetch(`${apiDomain}/posts`);
	console.table(fetchedPosts);

	return (
		<div
			style={{
				...CSS.main(),
				padding: `30px ${breakPoint >= BREAK.tablet_md ? "150px" : "30px"}`,
			}}
		>
			{useMediaQuery(theme.breakpoints.up("sm")) && (
				<React.Fragment>
					<Typography variant="h5" style={CSS.main().header}>
						Good Evening, Tin Quan Chung
					</Typography>
					<Divider style={CSS.main().divider} />
				</React.Fragment>
			)}
			<MostPopularSection />
			<Divider style={{ ...CSS.main().divider, marginTop: "30px" }} />
			<LatestUpdateSection />
			<Divider style={{ ...CSS.main().divider, marginTop: "30px" }} />
			<AllPostSection />
		</div>
	);
}

export default BlogPage;
