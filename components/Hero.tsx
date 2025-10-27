
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center -mt-16">
      <div className="max-w-4xl">
        <p className="text-lg text-blue-400 font-medium mb-2">Hi, my name is</p>
        <h1 className="text-gray-900 dark:text-gray-100 text-5xl md:text-7xl font-extrabold tracking-tight">
          Himanshu Lade.
        </h1>
        <h2 className="text-gray-700 dark:text-gray-400 text-4xl md:text-6xl font-extrabold tracking-tight mt-2">
          I build full-stack applications.
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-6 text-lg max-w-2xl">
          Software Engineer with experience building and deploying full-stack applications. Skilled in React, Next.js, and AWS, with a focus on CI/CD, automation, and integrating AI/ML technologies to create production-ready solutions.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 px-6 py-3 font-semibold rounded-md transition-all"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
