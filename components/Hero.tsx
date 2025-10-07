import React from 'react';
import { HERO_IMAGE_URL } from '../constants';

const FloatingBubble: React.FC<{ children: React.ReactNode; className: string; animationDelay: string }> = ({ children, className, animationDelay }) => {
    return (
        <div 
            className={`absolute flex items-center justify-center p-2 rounded-full shadow-lg text-white dark:text-white text-sm font-semibold bg-gradient-to-br from-purple-500 to-pink-500 animate-float ${className}`}
            style={{ animationDelay }}
        >
            {children}
        </div>
    );
};

const Hero: React.FC = () => {
    const handleScrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-gray-800 dark:text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-100 to-gray-50 dark:from-indigo-900/80 dark:via-purple-900/80 dark:to-dark-bg/90"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-6 z-10 text-center flex flex-col items-center justify-center py-24 md:py-32">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-8 text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Vamshi Adhe</span>
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-5xl mb-12">
                    {/* Left Role Text - Order 2 on mobile, 1 on desktop */}
                    <div className="relative md:order-1 order-2 text-center md:text-right transition-transform duration-300 ease-in-out hover:scale-105">
                        <FloatingBubble className="w-32 h-32 md:w-40 md:h-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-20" animationDelay="0s">5+ Years</FloatingBubble>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-300">Full Stack</h2>
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">Developer</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-[200px] mx-auto md:ml-auto">Building scalable web applications with modern technologies</p>
                        </div>
                    </div>

                    {/* Central Image Container - Order 1 on mobile, 2 on desktop */}
                    <div className="relative order-1 md:order-2 shrink-0">
                        {/* Central Image with Gradient Border */}
                        <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-br from-purple-500 to-pink-500 animate-float shadow-xl shadow-purple-500/30 dark:shadow-purple-500/40 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-purple-500/60">
                            <div className="bg-gray-100 dark:bg-dark-bg rounded-full w-full h-full p-2">
                                <img
                                    src={HERO_IMAGE_URL}
                                    alt="Vamshi Adhe"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Role Text - Order 3 on both */}
                    <div className="relative md:order-3 order-3 text-center md:text-left transition-transform duration-300 ease-in-out hover:scale-105">
                        <FloatingBubble className="w-32 h-32 md:w-40 md:h-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-20" animationDelay="-2s">Java</FloatingBubble>
                         <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-300">Solution</h2>
                            <h2 className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-300 mb-2">Architect</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-[200px] mx-auto md:mr-auto">Designing robust systems and technical solutions</p>
                        </div>
                    </div>
                </div>

                <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-10 text-base md:text-lg">
                    Crafting robust, scalable applications with 5+ years of expertise in Java, React, and cloud technologies. Passionate about clean code, innovative solutions, and delivering exceptional user experiences.
                </p>
            </div>

            {/* Button on the right corner */}
            <div className="absolute bottom-10 right-6 md:right-12 z-20">
                <button
                    onClick={() => handleScrollTo('contact')}
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-in-out overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                >
                    <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    Get In Touch
                </button>
            </div>
            
            {/* Scroller in the middle */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <button
                    onClick={() => handleScrollTo('about')}
                    aria-label="Scroll down"
                    className="group"
                >
                    <div className="w-8 h-14 border-2 border-gray-600/70 dark:border-white/70 group-hover:border-gray-800 dark:group-hover:border-white rounded-full transition-colors duration-300">
                        <div className="w-2 h-2 bg-gray-600/70 dark:bg-white/70 group-hover:bg-gray-800 dark:group-hover:bg-white rounded-full mx-auto mt-2 animate-scroll"></div>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Hero;
