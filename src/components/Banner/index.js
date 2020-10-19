import React from "react";
import * as Style from "./styles/Banner";

function Banner({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

Banner.Image = function BannerImage({ src, children, ...restProps }) {
	return <Style.Image src={src} />;
};

export default Banner;
