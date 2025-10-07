import React from 'react';

const About: React.FC = () => {
    const whatIDo = [
        { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', title: 'Full Stack Development', description: 'End-to-end web application development' },
        { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3', title: 'Cloud Architecture', description: 'Scalable cloud-native solutions' },
        { icon: 'M4 7v10m16-10v10M4 14h16M4 7h16M7 4h10M7 20h10', title: 'Database Design', description: 'Efficient data modeling and optimization' },
        { icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm6-8a2 2 0 100-4 2 2 0 000 4zm-12 0a2 2 0 100-4 2 2 0 000 4z', title: 'Problem Solving', description: 'Complex technical challenges' },
    ];

    const stats = [
        { value: "5+", label: "Years Experience" },
        { value: "50+", label: "Projects Completed" },
    ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Full Stack Developer with 5+ years of experience building scalable web applications. I specialize in modern technologies and love creating efficient, user-friendly solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Started my career as a Java developer and evolved into a full-stack engineer with expertise in modern web technologies. I'm passionate about writing clean, maintainable code and building applications that solve real-world problems.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest industry trends. My experience spans from enterprise applications to modern cloud-native solutions.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects, mentoring junior developers, and exploring new technologies that can improve development workflows.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What I Do</h3>
            <div className="space-y-4">
              {whatIDo.map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-100 dark:bg-white/10 dark:backdrop-blur-sm rounded-lg shadow-md transition-transform hover:scale-105">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
                <div key={index} className="p-8 bg-gray-100 dark:bg-white/10 dark:backdrop-blur-sm rounded-lg shadow-lg text-center">
                    <h3 className="text-5xl font-extrabold text-primary">{stat.value}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
