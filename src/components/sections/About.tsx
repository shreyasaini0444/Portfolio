import React from 'react';
import { MapPin, Mail, Phone, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo } from '../../constants/data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4 text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-700">Location</h4>
                    <p className="text-gray-600">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <p className="text-gray-600">
                      <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-600 transition-colors">
                        {personalInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-700">Phone</h4>
                    <p className="text-gray-600">
                      <a href={`tel:${personalInfo.phone}`} className="hover:text-purple-600 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <GraduationCap className="mr-4 text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-700">Education</h4>
                    <p className="text-gray-600">B.Tech in Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="mr-4 text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-700">Experience</h4>
                    <p className="text-gray-600">Fresher with strong project experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm h-full">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Career Objective</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              
              <h3 className="text-xl font-semibold mb-6 text-gray-800">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Web Development</h4>
                  <p className="text-gray-600 text-sm">Creating responsive and user-friendly websites using HTML and CSS.</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Programming</h4>
                  <p className="text-gray-600 text-sm">Developing applications in C++, Java, C, and Python.</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Database Management</h4>
                  <p className="text-gray-600 text-sm">Working with MySQL and Oracle databases.</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Testing</h4>
                  <p className="text-gray-600 text-sm">Performing testing using Selenium IDE, Postman, and Appium.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;