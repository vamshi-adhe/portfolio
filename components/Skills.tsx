import React from 'react';
import { SKILL_DATA } from '../constants';
import type { Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center">
        <span className={`mr-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-primary group-hover:animate-${skill.animation || 'pulse'}-once`}>
            {skill.icon}
        </span>
        <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
        <span className="ml-2 text-xs font-bold text-pink-700 dark:text-pink-500 bg-pink-100 dark:bg-pink-900/50 px-2 py-0.5 rounded-full">🔥 Trending</span>
      </div>
      <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{skill.percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-white/20 rounded-full h-2.5">
      <div 
        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" 
        style={{ width: `${skill.percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Professional Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical expertise across different domains of software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {SKILL_DATA.map((category) => (
            <div key={category.title} className="bg-white dark:bg-white/10 dark:backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
