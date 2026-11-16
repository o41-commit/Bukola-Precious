import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Works';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => (
  <MainLayout>
    <Hero />
    <About />
    <Work />
    <Skills />
    <Testimonials />
    <Education />
    <Contact />
  </MainLayout>
);

export default Index;
