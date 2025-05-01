import React from 'react';
import { skills } from '../../constants/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I've developed expertise in various programming languages, tools, and platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-3 border-gray-200">
                {skillCategory.category}
              </h3>
              
              <div className="space-y-5">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600 text-sm">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-teal-400"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
            Technologies & Tools
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "C++", color: "bg-blue-100 text-blue-800" },
              { name: "Java", color: "bg-orange-100 text-orange-800" },
              { name: "Python", color: "bg-yellow-100 text-yellow-800" },
              { name: "C", color: "bg-purple-100 text-purple-800" },
              { name: "HTML", color: "bg-red-100 text-red-800" },
              { name: "CSS", color: "bg-indigo-100 text-indigo-800" },
              { name: "MySQL", color: "bg-blue-100 text-blue-800" },
              { name: "Oracle", color: "bg-red-100 text-red-800" },
              { name: "Selenium", color: "bg-green-100 text-green-800" },
              { name: "Postman", color: "bg-orange-100 text-orange-800" },
              { name: "Eclipse", color: "bg-purple-100 text-purple-800" },
              { name: "AWS", color: "bg-yellow-100 text-yellow-800" },
            ].map((tech, index) => (
              <div 
                key={index}
                className={`${tech.color} px-4 py-2 rounded-full text-center font-medium`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;