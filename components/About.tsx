
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 scroll-mt-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
            <div className="space-y-4 text-gray-400">
                <p>
                Hello! I'm Himanshu, a software engineer with a background in cloud and frontend development. My focus is on building practical, end-to-end applications, from architecture to deployment.
                </p>
                <p>
                Over the past 15 months, I've undertaken intensive self-directed learning in AI/ML engineering, RAG architectures, and modern DevOps practices. This period has been dedicated to building a portfolio of production-ready applications, deepening my expertise in state management, CI/CD pipelines, and offline-first PWA architectures. I am seeking a role where I can apply this comprehensive skill set.
                </p>
            </div>
        </div>
        <div className="md:w-1/2">
            <div className="relative border-4 border-cyan-500/50 rounded-lg group">
                <img src="https://picsum.photos/seed/himanshu/600/600" alt="Himanshu Lade" className="rounded-md relative z-10 w-full transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gray-800 rounded-lg transform translate-x-4 translate-y-4 transition-transform duration-300"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;