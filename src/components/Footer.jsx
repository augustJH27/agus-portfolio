import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    /* flex: 2; */
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Agus Zohari</h1>
          <PText>
            I am a Junior Front End Developer from Indonesia. I mostly create
            website, mini game, but sometimes I also design logo and vector.
            Feel free to contact me at your convenience.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '(+62)81274413945',
                path: 'tel:(+62)81274413945',
              },
              {
                title: 'aguszohari@gmail.com',
                path: 'mailto:aguszohari@gmail.com',
              },
              {
                title: 'Bandung, West Java, Indonesia',
                path: 'https://www.google.com/maps/place/Jl.+Jend.+Sudirman+No.199,+Cibadak,+Kec.+Astanaanyar,+Kota+Bandung,+Jawa+Barat+40241/@-6.9202143,107.5951835,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e61870e8b4f7:0x7a815b1ca33a507a!8m2!3d-6.9202196!4d107.5973722?hl=id',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
        </div>
      </div>
    </FooterStyle>
  );
}