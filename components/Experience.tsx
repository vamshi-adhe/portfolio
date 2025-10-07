import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';
import type { ExperienceItem, EducationItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="relative pl-12 pb-12">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <div className="absolute left-[-9px] top-1 w-5 h-5 bg-gray-50 dark:bg-dark-bg border-2 border-primary rounded-full"></div>

        <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role} @ {item.company}</h3>
            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${item.status === 'Current' ? 'bg-green-100 text-green-700' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
                {item.status}
            </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.period} | {item.location}</p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
            {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    </div>
);

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
    <div className="bg-white dark:bg-white/10 dark:backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h4 className="text-lg font-bold text-primary">{item.degree}</h4>
        <p className="text-gray-800 dark:text-gray-200">{item.university}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.year}</p>
    </div>
);

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 lg:py-32 bg-gray-50 dark:bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Over 5 years of professional experience building scalable applications and leading technical initiatives.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-16">
                    <div className="lg:col-span-3">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-primary pb-2">Work Experience</h3>
                        <div className="relative">
                            {EXPERIENCE_DATA.map((item, index) => (
                                <ExperienceCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-primary pb-2">Education</h3>
                         <div className="space-y-6">
                            {EDUCATION_DATA.map((item, index) => (
                                <EducationCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
