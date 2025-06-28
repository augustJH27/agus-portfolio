import { Helmet } from "react-helmet";
import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
    <Helmet>
            <title>Agus Zohari | Web Developer & Designer, Product Manager, Author, Entrepreneur</title>
            <meta
              name="description"
              content="Web Developer and Designer creating modern websites, web apps, and creative projects. Discover my work and connect with me."
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://aguszohari.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Agus Zohari | Web Developer & Designer, Product Manager, Author, Entrepreneur" />
            <meta property="og:description" content="Web Developer and Designer creating modern websites, web apps, and creative projects. Discover my work and connect with me." />
            <meta property="og:url" content="https://aguszohari.com/" />
          </Helmet>
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  </>
  );
}
