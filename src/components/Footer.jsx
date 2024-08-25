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
    max-width: 400px;
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
            Contact me through email or WhatsApp for business inquiry.
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
                title: 'Blog',
                path: 'https://joyagustian.vercel.app',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '(+62)88801383281',
                path: 'https://wa.link/0nrqr9',
              },
              {
                title: 'aguszohari@gmail.com',
                path: 'mailto:aguszohari@gmail.com',
              },
              {
                title: 'Kalibata, South Jakarta, Indonesia',
                path: 'https://www.google.com/maps/place/Green+Palace+Kalibata+City+Tower+Raffles/@-6.257272,106.8483586,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3b2d1892b39:0x93095bc521a994a0!8m2!3d-6.2572773!4d106.8509335!16s%2Fg%2F11c5s9nyyz?hl=id&entry=ttu',
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
