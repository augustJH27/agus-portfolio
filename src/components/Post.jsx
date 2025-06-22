import styled from "styled-components";
import { Link } from 'react-router-dom';
import moment from "moment";

const StyledCard = styled.div`
  transition: all 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    box-shadow: 1px 0px 20px -1px rgba(0, 0, 0, 0.2),
                0px 0px 20px 5px rgba(0, 0, 0, 0.14),
                0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
  color: #222222;
  margin: 16px;
  cursor: pointer;
`;

const StyledCardMedia = styled.div`
  height: 0;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 1.5em;
`;

const Subtitle = styled.p`
  font-family: "Cardo";
  font-size: 18px;
  line-height: 2;
  color: black;
  font-weight: 400;
`;

export default function Post({
  title,
  subtitle,
  authorImage,
  slug,
  date,
  coverImage,
}) {
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <StyledCard>
        <StyledCardMedia image={coverImage} />
        <CardContent>
          <Title>
            {title.length > 25 ? title.substr(0, 25) + "..." : title}
          </Title>
          <Subtitle>
            {subtitle.length > 72 ? subtitle.substr(0, 72) + "..." : subtitle}
          </Subtitle>
          <p>{moment(date).format("MMMM Do YYYY")}</p>
        </CardContent>
      </StyledCard>
    </Link>
  );
}
