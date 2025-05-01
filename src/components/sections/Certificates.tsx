import React, { useState } from 'react';
import { certificates } from '../../constants/data';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Certificates</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Continuous learning is key to growth. Here are some certifications I've earned.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 bg-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="p-4 text-white">
                    <div className="font-medium">{certificate.issuer}</div>
                    <div className="text-sm text-purple-200">{certificate.date}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <Award className="text-purple-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <h3 className="font-medium text-gray-800">{certificate.title}</h3>
                  </div>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors ml-2"
                      title="View Certificate"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{certificate.issuer}</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    {certificate.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;