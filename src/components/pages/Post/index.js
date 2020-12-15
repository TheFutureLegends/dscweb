import React, { useContext } from "react";
import { UtilityContext } from "../../../contexts/index";
import ReactHtmlParser from "react-html-parser";
import { useFetch } from "../../hooks/useFetch";
// Components
import { FlexBox } from "../../styled-elements";
import { Typography, Divider, Avatar, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import Lazyload from "react-lazyload";
import SmallBlogContainer from "../../containers/blog/small";
// Constants
import * as ROUTES from "../../../constants/route";
import * as __style__ from "./styles/post.style";

function SinglePostPage(...props) {
  const slug = props[0].match.params.slug;
  const res = useFetch(`/posts/${slug}`);
  const post = res.response && res.response.data.post;
  const { history } = useContext(UtilityContext);

  return (
    <React.Fragment>
      {post && (
        <React.Fragment>
          <FlexBox direction="column" style={{ padding: "50px 30px" }}>
            <FlexBox
              justify="flex-start"
              direction="column"
              style={__style__.content_container("800px")}
            >
              <Typography
                variant="h4"
                style={__style__.content_container().title}
              >
                {post.title}
              </Typography>
              <FlexBox
                justify="space-between"
                style={__style__.content_container().meta}
              >
                <FlexBox>
                  <Avatar
                    style={__style__.content_container().avatar}
                    alt={post.author.username}
                    src={post.author.avatar}
                  />
                  <FlexBox direction="column" style={{ marginLeft: "15px" }}>
                    <div style={__style__.content_container().author}>
                      {post.author.username}
                    </div>
                    <div style={__style__.content_container().date}>
                      {post.createdAt}
                    </div>
                  </FlexBox>
                </FlexBox>
                <div style={{ fontStyle: "italic" }}>
                  <span> Views: &nbsp;</span>
                  <CountUp end={post.visit} separator="," duration={3} />
                </div>
              </FlexBox>
              <Lazyload throttle={1000} height={500}>
                <img
                  style={__style__.content_container().image}
                  src={post.image}
                  alt={post.image}
                />
              </Lazyload>
              <div style={{ width: "100%", color: "white" }}>
                {ReactHtmlParser(post.description)}
              </div>
              <Divider style={__style__.content_container().separator} />
              <div style={__style__.footer}>
                <h5 style={__style__.footer.header}>
                  More About {post.category.title}
                </h5>
                <Grid container spacing={3} style={{ marginTop: "15px" }}>
                  {Array(4)
                    .fill(
                      <Grid item xs={12} sm={6}>
                        <SmallBlogContainer
                          key={post._id}
                          author={post.author.username}
                          category={post.category.title}
                          title={post.title}
                          date={post.createdAt}
                          src={post.image}
                          avatar={post.author.avatar}
                          onClick={() =>
                            history.push(`${ROUTES.POST}/${post.slug}`)
                          }
                        />
                      </Grid>
                    )
                    .map((post) => post)}
                </Grid>
              </div>
            </FlexBox>
          </FlexBox>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default SinglePostPage;
