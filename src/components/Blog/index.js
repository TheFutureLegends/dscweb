import React, { Fragment } from "react";
import * as Style from "./styles/Blog";

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
			<Style.Picture src={src} />
		</Style.PictureWrapper>
	);
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

Blog.SubHeader = function BlogSubHeader({ text, children, ...restProps }) {
	return (
		<Style.SubHeader {...restProps}>
			{text.length > 100 ? `${text.substring(0, 100)}....` : text}
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
