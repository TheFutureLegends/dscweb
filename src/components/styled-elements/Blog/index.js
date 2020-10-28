import React, { Fragment } from "react";
import * as Style from "./styles/Blog";
import Lazyload from "react-lazyload";
function Blog({ children, size, ...restProps }) {
	return (
		<Fragment>
			{size === "small" ? (
				<Style.SmallContainer {...restProps}>{children}</Style.SmallContainer>
			) : (
				<Style.Container {...restProps}>{children}</Style.Container>
			)}
		</Fragment>
	);
}

Blog.Picture = function BlogPicture({ src, ...restProps }) {
	return (
		<Style.PictureWrapper {...restProps}>
			<Lazyload throttle={1000} height={50}>
				<Style.Picture src={src} />
			</Lazyload>
		</Style.PictureWrapper>
	);
};

Blog.PictureWrapper = function BlogPictureWrapper({ children, ...restProps }) {
	return <Style.PictureWrapper {...restProps}>{children}</Style.PictureWrapper>;
};

Blog.Header = function BlogHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

Blog.Meta = function BlogMeta({
	children,
	author,
	src,
	category,
	...restProps
}) {
	return (
		<Style.Meta justify="space-between" {...restProps}>
			<Blog.Picture className="__meta_picture" src={src} />
			<div style={{ width: "100%", marginLeft: "10px" }}>
				<span>{author}</span> in <span>{category}</span>
			</div>
		</Style.Meta>
	);
};

Blog.MetaSkeleton = function BlogMetaSkeleton({ children, src, ...restProps }) {
	return (
		<Style.Meta justify="space-between" {...restProps}>
			<Blog.PictureWrapper className="__meta_picture">
				{src}
			</Blog.PictureWrapper>
			<div style={{ width: "100%", marginLeft: "10px" }}>{children}</div>
		</Style.Meta>
	);
};

Blog.SubHeader = function BlogSubHeader({
	text,
	limit,
	children,
	...restProps
}) {
	return (
		<Style.SubHeader {...restProps}>
			{text && text.length > limit ? `${text.substring(0, limit)}....` : text}
		</Style.SubHeader>
	);
};

Blog.Text = function BlogText({ children, ...restProps }) {
	return <Style.Text {...restProps}>{children}</Style.Text>;
};

Blog.Link = function BlogLink({ to, children, ...restProps }) {
	return (
		<Style.Link to={to} {...restProps}>
			{children}
		</Style.Link>
	);
};

export default Blog;
