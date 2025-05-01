import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../../constants/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Shreya Saini</h3>
            <p className="text-gray-400 leading-relaxed">
              {personalInfo.about}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2 text-purple-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2 text-purple-400" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-2 mt-1 text-purple-400" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Social</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Linkedin size={18} className="mr-2 text-purple-400" />
                <a 
                  href={`https://${personalInfo.socialLinks.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Github size={18} className="mr-2 text-purple-400" />
                <a 
                  href={`https://${personalInfo.socialLinks.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Shreya Saini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;