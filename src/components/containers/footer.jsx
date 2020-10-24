import React, { useContext } from "react";
import { Footer } from "../styled-elements";
import * as ROUTES from "../../constants/route.js";
import * as ASSETS from "../../constants/asset.js";
import { UtilityContext } from "../../contexts/UtilityContext";

export default function FooterContainer() {
	const { breakPoint } = useContext(UtilityContext);
	return (
		<Footer>
			<Footer.Title>Questions? Contact us.</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Link to="#">
						<span>FAQ </span>
					</Footer.Link>
					<Footer.Link to="#">
						<span>Investor Relations</span>
					</Footer.Link>
					<Footer.Link to={ROUTES.BLOG}>
						<span>Blog Platform</span>
					</Footer.Link>
					<Footer.Link to={ROUTES.ABOUT}>
						<span>Contact Us</span>
					</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link to="#">
						<span> Help Center</span>
					</Footer.Link>
					<Footer.Link to={"#"}>
						<span>Developer Hub</span>
					</Footer.Link>
					<Footer.Link to="#">
						<span> Cookie Preferences</span>
					</Footer.Link>
					<Footer.Link to={ROUTES.EVENT}>
						<span>Upcoming Events</span>
					</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link to="#">
						<span> Account</span>
					</Footer.Link>
					<Footer.Link to="#">
						<span>Ways to Watch</span>
					</Footer.Link>
					<Footer.Link to="#">
						<span> Corporate Information</span>
					</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<img
						src={ASSETS.LOGO_RMIT_VN_FULL}
						alt="RMIT logo"
						style={{
							borderRadius: "10px",
							width: breakPoint > 1000 ? "100%" : "150px",
						}}
					/>
				</Footer.Column>
			</Footer.Row>
			<Footer.Break />
			<Footer.Text>RMIT Vietnam Developer Student Club</Footer.Text>
		</Footer>
	);
}
