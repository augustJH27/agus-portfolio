import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialMediaStyle = styled.div`
  background-color: white;
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: black;
    margin-bottom: 1rem;
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 2rem;

    a {
      color: green;
      font-size: 2.5rem;
      transition: color 0.3s;

      &:hover {
        color: darkgreen;
      }
    }
  }

  @media (max-width: 768px) {
    .icons {
      gap: 1.5rem;

      a {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 480px) {
    .icons {
      flex-direction: column;
      gap: 1rem;

      a {
        font-size: 2.5rem;
      }
    }
  }
`;

const SocialMedia = () => {
  return (
    <SocialMediaStyle>
      <div className="icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </SocialMediaStyle>
  );
};

export default SocialMedia;