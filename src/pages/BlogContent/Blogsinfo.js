import React from "react";
import styled from "styled-components";
import { MainQuote } from "../../styles/commonStyle";
import { useParams } from "react-router-dom";
import createClient from "./client.js";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";

const Blogsinfo = () => {
  const TextLong = (desc) => {
    if (desc?.length > 100) {
      let x = desc.slice(0, 100) + "...";
      return x;
    }
    return desc;
  };

  const { slug } = useParams();
  const builder = imageUrlBuilder({
    projectId: "7uht2i9s",
    dataset: "production",
  });

  function urlFor(source) {
    return builder.image(source);
  }
  // params  => userId which is slug passed in app.js
  // value => 1, 2, 3 ,4 ,5

  const [allPostsData, setAllPosts] = useState();

  useEffect(() => {
    createClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
          author,
          publishedAt,
          description,
          content,
          authorImage{
            alt,
            asset->{
              url,
            }
          },
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
  }, [slug]);
  // if(allPostsData){
  //   return
  // }else {
  //   return
  // }
  console.log(allPostsData);
  return (
    <>
      {allPostsData && (
        <>
          <BlogWrapper>
            <BlogHeader>
              <Header>This is Blog</Header>
              <HeaderContext>this is the details for blogs</HeaderContext>
            </BlogHeader>
            <BlogBody>
              <section>
                <img src={urlFor(allPostsData[0].mainImage).url()} alt="" />
                <div>
                  <TimeDate>{allPostsData[0].publishedAt}</TimeDate>
                  <Bodyheader>{allPostsData[0].title}</Bodyheader>
                  <Summary>{TextLong(allPostsData[0].description)}</Summary>
                  <BlogFooter>
                    {allPostsData[0].authorImage && (
                      <img
                        src={urlFor(allPostsData[0].authorImage).url()}
                        alt=""
                      />
                    )}
                    <BlogName>By : {allPostsData[0].author}</BlogName>
                  </BlogFooter>
                </div>
              </section>
              <Context>
                <BlockContent blocks={allPostsData[0].content} />
              </Context>
            </BlogBody>
          </BlogWrapper>
        </>
      )}
    </>
  );
};

export default Blogsinfo;

const BlogWrapper = styled.section`
  background-color: #1b1b1b;
  color: white;
  border-bottom: 1px solid white;
`;

const BlogHeader = styled.header`
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
`;
const Header = styled(MainQuote)``;
const HeaderContext = styled.header`
  font-size: 20px;
  letter-spacing: 5px;
  padding-top: 50px;
`;
const BlogBody = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding-top: 100px;

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    background: linear-gradient(145deg, #181818, #1d1d1d);
    box-shadow: 7px 7px 27px #111111, -7px -7px 27px #252525;
  }
  div {
    display: flex;
    padding: 30px;
    flex-direction: column;
    padding-left: 50px;
  }
`;
const Bodyheader = styled.header`
  font-size: 70px;
  padding: 0px;
  font-family: "Abril Fatface";
`;
const TimeDate = styled.time``;
const Summary = styled.summary`
  font-size: 15px;
  width: 70%;
  padding-top: 50px;
`;
const Context = styled.article`
  font-size: 18px;
  padding-top: 50px;
  margin-bottom: 100px;
  line-height: 30px;
`;
const BlogFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 40px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const BlogName = styled.div``;
