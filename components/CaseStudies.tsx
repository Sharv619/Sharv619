
import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../constants';

const CaseStudies: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="stories" className="py-24 bg-gray-900/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
          Core Stories: Impact & Leadership
        </h2>

        <div className="relative">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-in-out ${
              isExpanded ? 'max-h-[200rem]' : 'max-h-[42rem] overflow-hidden'
            }`}
          >
            {CASE_STUDIES_DATA.map((study) => (
              // FIX: Use a stable `id` for the key instead of the loop index.
              <div key={study.id} className="bg-gray-800 rounded-lg p-6 flex flex-col items-start shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-cyan-400 bg-gray-700 p-3 rounded-full">
                      {/* Fix: Cast study.icon to a ReactElement that accepts a className prop to resolve the overload error with React.cloneElement. */}
                      {React.cloneElement(study.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">{study.title}</h3>
                      <p className="text-sm text-cyan-400">{study.subtitle}</p>
                    </div>
                  </div>
                
                <div className="text-sm text-gray-400 space-y-3">
                  <p><strong className="text-gray-300">Situation:</strong> {study.situation}</p>
                  <p><strong className="text-gray-300">Task:</strong> {study.task}</p>
                  <div>
                    <strong className="text-gray-300">Action:</strong>
                    <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
                      {study.action.map((act, i) => <li key={i}>{act}</li>)}
                    </ul>
                  </div>
                  <p><strong className="text-gray-300">Result:</strong> {study.result}</p>
                </div>
              </div>
            ))}
          </div>

          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-3 bg-gray-700 text-gray-200 font-semibold rounded-md hover:bg-gray-600 transition-all transform hover:scale-105"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show Less' : 'View More Stories'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
