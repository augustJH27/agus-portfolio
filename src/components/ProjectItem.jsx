import React from "react";
import styled from "styled-components";
import ProjectImg from "../assets/images/projectImg.png";

const ProjectItemStyles = styled.div`
  background: #fff;
  border-radius: 20px;
  border: 1px solid;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 24px;
  padding-right: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .projectItem__img {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .projectItem__info {
    flex: 1;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
  }

  .projectItem__title {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--green-dark, #05645e);
    margin-bottom: 0.75rem;
  }

  .projectItem__tags {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  .projectItem__tag {
    background: var(--green-light, #e5f6f5);
    color: var(--green-dark, #05645e);
    font-size: 1.2rem;
    padding: 0.3rem 0.8rem;
    border-radius: 6px;
    font-weight: 500;
  }

    .projectItem__desc {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  .projectItem__cta {
    display: block;
    width: 100%;
    text-align: center;
    background: var(--green, #05645e);
    color: #fff;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0.9rem;
    border-radius: 8px;
    transition: background 0.3s ease;
    text-decoration: none;
  }

  .projectItem__cta:hover {
    background: var(--green-dark, #03423e);
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  link = "",
  category = "",
}) {
  const isExternal = typeof link === "string" && /^https?:\/\//i.test(link);

  const categories = Array.isArray(category)
    ? category
    : category
    ? [category]
    : [];

  return (
    <ProjectItemStyles>
      <div className="projectItem__img">
        <img src={img} alt={title} />
      </div>
      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>
        {categories.length > 0 && (
          <div className="projectItem__tags">
            {categories.map((cat, i) => (
              <span key={i} className="projectItem__tag">
                {cat}
              </span>
            ))}
          </div>
        )}
        <div className="projectItem__desc">{desc}</div>
        {link ? (
          isExternal ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectItem__cta"
            >
              Explore Project →
            </a>
          ) : (
            <a href={link} className="projectItem__cta">
              Explore Project →
            </a>
          )
        ) : null}
      </div>
    </ProjectItemStyles>
  );
}