import React from "react";
import { Blog, FlexBox } from "../../styled-elements";

function DefaultBlogContainer({
  src,
  title,
  body,
  date,
  author,
  category,
  avatar,
  ...restProps
}) {
  return (
    <Blog {...restProps}>
      <Blog.Meta
        style={{ padding: "10px 10px 8px" }}
        src={avatar}
        author={author}
        category={category}
      />
      {/* {src && <Blog.Picture src={src} />} */}

      {src && <img src={src} width="100%" />}
      <div style={{ padding: "10px" }}>
        <Blog.Header variant="h2">{title}</Blog.Header>
        <Blog.SubHeader variant="subtitle1" limit={120} text={body} />
        <FlexBox justify="space-between" style={{ marginTop: "30px" }}>
          <Blog.Text>Publish Date: {date}</Blog.Text>
        </FlexBox>
      </div>
    </Blog>
  );
}

export default DefaultBlogContainer;
