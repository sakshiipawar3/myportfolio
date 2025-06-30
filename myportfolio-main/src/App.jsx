import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans bg-[#0f172a] text-white flex">
      <Sidebar />

      {/* Main Content shifted by sidebar width */}
      <main className="ml-48 w-full px-4">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
