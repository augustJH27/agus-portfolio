import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import client from "../components/contentfulClient";

const BlogContainer = styled.div`
  padding: 10rem 0;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 36px;
  margin-top: 40px;
`;

const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BlogCard = styled.div`
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
  }
`;

const BlogImage = styled.img`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: transparent;
  border-radius: 8px;
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const BlogTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  font-family: "Montserrat SemiBold", sans-serif;
`;

const BlogSubTitle = styled.p`
  font-size: 12px;
  line-height: 2;
  font-family: "Poppins Regular", sans-serif;
`;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "post",
        order: "-fields.date",
      })
      .then((response) => setBlogs(response.items))
      .catch(console.error);
  }, []);

  return (
    <>
      <Helmet>
        <title>Agus Zohari | Blog</title>
        <meta
          name="description"
          content="Read articles and inner thoughts on design trends, stories, poetry, and creative art by Agus Zohari."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aguszohari.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agus Zohari | Blog" />
        <meta
          property="og:description"
          content="Read articles and inner thoughts on design trends, stories, poetry, and creative art by Agus Zohari."
        />
        <meta property="og:url" content="https://aguszohari.com/blog" />
      </Helmet>
      <BlogContainer>
        <SectionTitle
          heading="Blog"
          subheading="welcome to my inner thoughts"
        />
        <BlogWrapper>
          {blogs.map((blog) => (
            <Link
              key={blog.sys.id}
              to={`/article/${blog.fields.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <BlogCard>
                <BlogImage
                  src={blog.fields.coverImage.fields.file.url}
                  alt={blog.fields.title}
                />
                <CardContent>
                  <BlogTitle>
                    {blog.fields.title.length > 28
                      ? blog.fields.title.substr(0, 25) + "..."
                      : blog.fields.title}
                  </BlogTitle>
                  <BlogSubTitle>
                    {blog.fields.subTitle.length > 90
                      ? blog.fields.subTitle.substr(0, 80) + "..."
                      : blog.fields.subTitle}
                  </BlogSubTitle>
                </CardContent>
              </BlogCard>
            </Link>
          ))}
        </BlogWrapper>
      </BlogContainer>
    </>
  );
};

export default Blog;