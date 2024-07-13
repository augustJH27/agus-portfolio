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
            <a href='https://wa.link/0nrqr9'>
              <ContactInfoItem icon={<MdLocalPhone />} text="(+62)88801383281" />
            </a>
            <a href='mailto:aguszohari@gmail.com'>
              <ContactInfoItem icon={<MdEmail />} text="aguszohari@gmail.com" />
            </a>
            <a target='_blank' href='https://www.google.com/maps/place/Green+Palace+Kalibata+City+Tower+Raffles/@-6.257272,106.8483586,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3b2d1892b39:0x93095bc521a994a0!8m2!3d-6.2572773!4d106.8509335!16s%2Fg%2F11c5s9nyyz?hl=id&entry=ttu'>
              <ContactInfoItem text="Kalibata, South Jakarta, Indonesia" />
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
