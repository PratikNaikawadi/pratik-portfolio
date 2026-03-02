import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Resume } from './components/Resume/Resume';
import { ClientsCarousel } from './components/Clients/ClientsCarousel';
import { Projects } from './components/Projects/Projects';
import { SampleDocs } from './components/SampleDocs/SampleDocs';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './styles/global.css';
import './components/common/Button.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <ClientsCarousel />
        <Projects />
        <SampleDocs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
