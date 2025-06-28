import { Helmet } from "react-helmet";
import React from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';

export default function Contact() {
  return (
    <>
    <Helmet>
            <title>Agus Zohari | Contact</title>
            <meta
              name="description"
              content="Get in touch with Agus Zohari for web development, design collaborations, or project inquiries."
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://aguszohari.com/contact" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Agus Zohari | Contact" />
            <meta property="og:description" content="Get in touch with Agus Zohari for web development, design collaborations, or project inquiries." />
            <meta property="og:url" content="https://aguszohari.com/contact" />
          </Helmet>
      <ContactSection />
      <Map />
    </>
  );
}
