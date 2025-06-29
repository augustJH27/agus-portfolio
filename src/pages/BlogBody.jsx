import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import client from "../components/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const Container = styled.div`
  padding: 10rem 0;
  margin: 0 auto;
  max-width: 900px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
`;

const BlogTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Montserrat SemiBold', sans-serif;
`;

const BlogSubTitle = styled.p`
  font-size: 12px;
  line-height: 2;
  font-family: 'Poppins Regular', sans-serif;
`;

const Meta = styled.div`
  text-align: center;
  font-size: 14px;
  color: #888;
  margin-top: 1rem;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 8px;
    vertical-align: middle;
  }

  span {
    vertical-align: middle;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin: 2rem 0;
`;

const Content = styled.div`
  margin-top: 2rem;

  p {
    line-height: 1.8;
    font-size: 16px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 2rem 0 1rem;
    font-family: 'Montserrat SemiBold', sans-serif;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 1.75rem 0 1rem;
    font-family: 'Montserrat SemiBold', sans-serif;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
  }

  h5 {
    font-size: 16px;
    font-weight: 600;
    margin: 1.25rem 0 0.75rem;
  }

  h6 {
    font-size: 14px;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
    text-transform: uppercase;
    color: #666;
  }

  blockquote {
    border-left: 4px solid #ccc;
    padding: 0.5rem 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    background-color: #f9f9f9;
  }

  ul, ol {
    padding-left: 2rem;
    margin: 1rem 0;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 1.5rem 0;
  }

  @media only screen and (max-width: 768px) {
    p {
      margin-bottom: 1.25rem;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  font-size: 12px;
  margin-top: 40px;
  margin-bottom: 1rem;
  color: var(--gray-1);
  text-decoration: none;
`;

const SectionHeading = styled.h3`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 4rem 0 4rem;
  border-bottom: 2px solid rgb(208, 208, 208);
  padding-bottom: 0.5rem;
`;

const RecentGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RecentCard = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  color: inherit;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }
`;

const RecentImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const RecentInfo = styled.div`
  padding: 1rem;

  span {
    display: block;
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: #888;
  }
`;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      const url = file.url;
      return (
        <img
          src={url}
          alt={title || "Embedded Asset"}
        />
      );
    }
  }
};

const BlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [morePosts, setMorePosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "post", include: 2 })
      .then((response) => {
        const allPosts = response.items;
        const currentPost = allPosts.find(
          (item) =>
            item.fields.title.replace(/\s+/g, "-").toLowerCase() === slug
        );
        setBlog(currentPost);

        const recentOthers = allPosts
          .filter((item) => item.sys.id !== currentPost?.sys?.id)
          .sort(
            (a, b) =>
              new Date(b.fields.date).getTime() - new Date(a.fields.date).getTime()
          )
          .slice(0, 3);
        setMorePosts(recentOthers);
      })
      .catch(console.error);
  }, [slug]);

  if (!blog) return <Container>Loading...</Container>;

  const { title, content, author, coverImage, date } = blog.fields;
  const authorName = author?.fields?.name;
  const authorImage = author?.fields?.image?.fields?.file?.url;
  const coverImageUrl = coverImage?.fields?.file?.url;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Container>
      <BackLink to="/blog">← Back to Main</BackLink>
      <Title>{title}</Title>
      <Meta>
        {authorImage && <img src={authorImage} alt={authorName} />}
        <span>
          {authorName} &nbsp;|&nbsp; {formattedDate}
        </span>
      </Meta>
      {coverImageUrl && <CoverImage src={coverImageUrl} alt={title} />}
      <Content>{documentToReactComponents(content, options)}</Content>

      {morePosts.length > 0 && (
        <>
          <SectionHeading>- Recent Entries -</SectionHeading>
          <RecentGrid>
            {morePosts.map(({ fields, sys }) => {
              const slug = fields.title.replace(/\s+/g, "-").toLowerCase();
              const cover = fields.coverImage?.fields?.file?.url;
              const sub = fields.subTitle;
              const postDate = new Date(fields.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <RecentCard key={sys.id} to={`/article/${slug}`}>
                  {cover && <RecentImage src={cover} alt={fields.title} />}
                  <RecentInfo>
                    <BlogTitle>{fields.title.length > 28 ? fields.title.slice(0, 25) + "..." : fields.title}</BlogTitle>
                    <BlogSubTitle>{sub.length > 90 ? sub.slice(0, 80) + "..." : sub}</BlogSubTitle>
                  </RecentInfo>
                </RecentCard>
              );
            })}
          </RecentGrid>
        </>
      )}
    </Container>
  );
};

export default BlogPage;