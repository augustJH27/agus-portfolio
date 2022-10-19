import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="how to reach me" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a href='tel:(+62)81274413945'>
              <ContactInfoItem icon={<MdLocalPhone />} text="(+62)81274413945" />
            </a>
            <a href='mailto:aguszohari@gmail.com'>
              <ContactInfoItem icon={<MdEmail />} text="aguszohari@gmail.com" />
            </a>
            <a target='_blank' href='https://www.google.com/maps/place/Jl.+Jend.+Sudirman+No.199,+Cibadak,+Kec.+Astanaanyar,+Kota+Bandung,+Jawa+Barat+40241/@-6.9202143,107.5951835,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e61870e8b4f7:0x7a815b1ca33a507a!8m2!3d-6.9202196!4d107.5973722?hl=id'>
              <ContactInfoItem text="Bandung, West Java, Indonesia" />
            </a>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
