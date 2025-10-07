import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Check out some of my latest projects showcasing full-stack development, cloud architecture, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((project, index) => (
            <div key={index} className="bg-white dark:bg-white/10 dark:backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full">+{project.tags.length - 4} more</span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a href={project.liveLink || '#'} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary transition-colors duration-300">
                    View Project
                  </a>
                  <a href={project.codeLink || '#'} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-transparent text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
