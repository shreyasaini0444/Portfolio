import React from 'react';
import { Github, Linkedin, Mail, ArrowDownCircle, FileDown } from 'lucide-react';
import { personalInfo } from '../../constants/data';

const Home: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-b from-purple-50 to-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-100 rounded-full opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-100 rounded-full opacity-30 transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 py-24 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p className="text-purple-600 font-semibold mb-2 tracking-wider">HELLO, I'M</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              Shreya Saini
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
              {personalInfo.about}
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href={`https://${personalInfo.socialLinks.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={`https://${personalInfo.socialLinks.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors duration-300 font-medium"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-md transition-colors duration-300 font-medium"
              >
                View Projects
              </a>
              <a 
                href={personalInfo.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors duration-300 font-medium flex items-center"
              >
                <FileDown className="mr-2" size={18} />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-teal-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-purple-400 to-teal-300 rounded-full opacity-30"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-purple-300 to-teal-200 rounded-full opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-purple-700">S</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
          <button onClick={scrollToAbout} aria-label="Scroll down">
            <ArrowDownCircle size={36} className="text-purple-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;