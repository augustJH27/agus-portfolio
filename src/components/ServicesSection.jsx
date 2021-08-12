import React from 'react';
import { MdDesktopMac, MdCode, MdContentCopy } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="what i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Graphic Design"
            desc="I do create logo and vector, along with digital imaging."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Development"
            desc="I also develop the website. I work using HTML, CSS, Javascript, and ReactJS."
          />
          <ServicesSectionItem
            icon={<MdContentCopy />}
            title="Content and Copy Writing"
            desc="Not only coding, I do love writing content and copy for ads."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
