import React from 'react';
import { achievements } from '../../constants/data';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Achievements</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Recognition and accomplishments I've received throughout my journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-purple-200"></div>
            
            {/* Achievement Items */}
            <div className="space-y-12">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-start">
                  <div className="relative flex items-center justify-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center z-10">
                      <Trophy className="text-purple-600" size={20} />
                    </div>
                  </div>
                  
                  <div className="ml-6 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                      <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                        {achievement.date}
                      </span>
                    </div>
                    
                    {achievement.description && (
                      <p className="text-gray-600">{achievement.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;