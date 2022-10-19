import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;


export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Bonjour! My name is <span>Agus Zohari</span>
              </p>
              <h2 className="about__heading">Junior Front End Developer</h2>
              <div className="about__info">
                <PText>
                  I live in Jakarta, Indonesia, the city where everyone lives
                  in one building — they say. Since I was a kid, I knew that
                  art has been my very first love. I started loving art by
                  reading a book, writing poems, drawing and sketching. By the
                  time I was teen, I found that tech stuff has pulled me to
                  learn more about it.
                  <br /> <br />
                  I began learning coding in March 2021. It was the moment when
                  I was watching a video on YouTube, since then I felt the urged
                  to learn how to build my own website. Following this, I joined
                  an online coding Bootcamp named Binar x Glints Academy. I chose
                  Front End Class since I had found it really interesting and I
                  wanted to enjoy the process of learning something new.
                  <br />
                  <br />
                  Every now and then I have become interested in web development. 
                  I realised that coding is a piece of art. In the next future, I 
                  want to become a talented Web Developer and make something greater
                  than things ever exist. 
                </PText>
              </div>
              <Button btnText="Want to talk?" btnLink='/contact' />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Bootcamp"
                items={['Front End Developer Class at Binar Academy']}
              />
              <AboutInfoItem
                title="University"
                items={['Indonesia Open University']}
              />
              <AboutInfoItem
                title="High School"
                items={['Multimedia and Graphic Design']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Front End"
                items={['HTML', 'CSS', 'JavaScript', 'ReactJS']}
              />
              <AboutInfoItem 
              title="Tools" 
              items={['Figma', 'Trello', 'Jira']} />
              <AboutInfoItem
                title="Graphic"
                items={['PhotoShop', 'Illustrator', 'Lightroom']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021-present"
                items={['Junior Front End Developer']}
              />
              <AboutInfoItem
                title="2018-2021"
                items={['Freelance Content & Copy Writer']}
              />
              <AboutInfoItem
                title="2014-2019"
                items={['Personal Financial Assistant']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}