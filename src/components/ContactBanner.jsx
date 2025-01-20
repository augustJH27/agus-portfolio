import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;


export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>have a project in mind?</PText>
          <h3 className="contactBanner__heading">Fret not!</h3>
          <Button btnText="Click this button!" btnLink="/contact" />
          {/* <a href='https://today.line.me/id/v2/article/Contoh+CV+dan+Cara+Membuatnya+yang+Mudah+Menarik+dan+Kreatif-22Jz18?utm_source=timeline&utm_medium=post&utm_campaign=timeline_a&openExternalBrowser=1' target="_blank" rel="noopener noreferrer">Klik di sini</a> */}
        </div>
      </div>
    </ContactBannerStyles>
  );
}