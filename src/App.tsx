import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    document.title = "Shreya Saini | Portfolio";
  }, []);

  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
    </Layout>
  );
}

export default App;