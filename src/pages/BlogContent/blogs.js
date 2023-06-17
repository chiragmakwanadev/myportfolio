import React, { Fragment } from "react";
import styled from "styled-components";
import { MainQuote } from "../../styles/commonStyle";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import createClient from "./client";
import imageUrlBuilder from "@sanity/image-url";

const Blogs = () => {
  const TextLong = (desc) => {
    if (desc) {
      if (desc?.length > 150) {
        let x = desc.slice(0, 150) + "...";
        return x;
      }
      return desc;
    }
    return null;
  };

  const [allPostsData, setAllPosts] = useState();

  useEffect(() => {
    const fetchPost = () => {
      createClient
        .fetch(
          `*[_type == "post"]{
            title,
            authorImage{
              alt,
              asset->{
                url,
              }
            },
            slug,
         content,
            author,
            publishedAt,
            redirect,
            mainImage{
              alt,
              asset->{
                url,
              }
            }
        }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    };
    fetchPost();
  }, []);

  const builder = imageUrlBuilder({
    projectId: "7uht2i9s",
    dataset: "production",
  });

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <Fragment>
      <BlogWrapper>
        <BlogHeader>
          <Header>Blogs</Header>
          <HeaderContext>
            "Exploring the World of Frontend Development"
          </HeaderContext>
        </BlogHeader>
        {allPostsData?.map((post, index) => {
          return (
            <Fragment key={index}>
              <BlogBody>
                <Blogleft>
                  <Blogimg src={urlFor(post.mainImage).url()} alt="" />
                </Blogleft>
                <BlogRight>
                  <BlogTime>{post.publishedAt}</BlogTime>
                  <Bloghead>{post.title}</Bloghead>
                  <BlogContext>
                    {TextLong(post.content[0]?.children[0]?.text)}
                  </BlogContext>
                  <Link to={"/blogs/" + post.slug.current}>
                    Read full blog here...
                  </Link>
                  <BlogFooter>
                    {post.authorImage && (
                      <Blogprofile
                        src={urlFor(post.authorImage).url()}
                        alt=""
                      />
                    )}
                    <BlogName>By: {post.author}</BlogName>
                  </BlogFooter>
                </BlogRight>
              </BlogBody>
            </Fragment>
          );
        })}
      </BlogWrapper>
    </Fragment>
  );
};

export default Blogs;

const BlogWrapper = styled.div`
  margin: auto;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
`;
const BlogHeader = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;
const Header = styled(MainQuote)``;
const HeaderContext = styled.div`
  font-size: 20px;
  color: white;
  padding-top: 70px;
  word-spacing: 5px;
  letter-spacing: 3px;
`;
const BlogBody = styled.div`
  display: flex;
  width: 50%;
  margin: auto;
  padding: 20px;
  border: 1px solid transparent;
  margin-top: 100px;
  flex-direction: row;
  /* border-radius: 20px; */
  overflow: hidden;
  /* background-color: rgb(21, 27, 27); */
  color: white;
  border-radius: 20px;
  background: linear-gradient(145deg, #181818, #1d1d1d);
  box-shadow: 7px 7px 27px #111111, -7px -7px 27px #252525;
`;
const Blogleft = styled.div`
  width: 40%;
  display: flex;
  margin: auto;
`;
const BlogRight = styled.div`
  width: 60%;

  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding-top: 40px;

  a {
    color: white;

    &:hover {
      color: rgb(75, 99, 101);
    }
  }
`;

// const BlogTopic = styled.div`
//   font-size: 18px;
//   font-weight: bold;
//   font-family: Georgia, "Times New Roman", Times, serif;
//   padding-bottom: 10px;
// `;
const Blogimg = styled.img`
  width: 300px;
  height: 240px;
  border-radius: 20px;
  background: linear-gradient(145deg, #181818, #1d1d1d);
  box-shadow: 7px 7px 27px #111111, -7px -7px 27px #252525;
`;
const BlogTime = styled.div`
  font-weight: bold;
  font-size: 12px;
`;
const Bloghead = styled.div`
  font-size: 15px;
  letter-spacing: 3px;
  font-weight: bold;
`;
const BlogContext = styled.div`
  font-size: 15px;
  letter-spacing: 2px;
`;
const BlogFooter = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 10px;
  align-items: center;
`;
const Blogprofile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const BlogName = styled.div`
  font-size: 12px;
`;
