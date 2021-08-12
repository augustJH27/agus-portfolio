import React from 'react';
import AboutSection from '../components/About/AboutSection';
import ServicesSection from '../components/ServiceSection/ServicesSection';
import ProjectsSection from '../components/Project/ProjectsSection';
import TestimonialsSection from '../components/Testimonial/Testimonials';
import ContactBanner from '../components/Contact/ContactBanner';
import HeroSection from '../components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}