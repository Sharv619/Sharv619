import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import type { CaseStudy } from '../types';
import Modal from './Modal';

const Experience: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudies, setSelectedCaseStudies] = useState<CaseStudy[]>([]);
  const [modalTitle, setModalTitle] = useState('');

  const closeCaseStudiesModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudies([]);
    setModalTitle('');
  };

  return (
    <>
      <section id="experience" className="py-24 scroll-mt-16">
        <h2 className="text-gray-900 dark:text-gray-100 text-4xl font-bold text-center mb-16">
          Experience & Development
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-gray-300 dark:bg-gray-700 absolute left-7 w-0.5 h-full -translate-x-1/2"></div>
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={index} className="relative pl-20 mb-12">
              <div className="absolute left-7 top-1 -translate-x-1/2">
                  {item.logo && React.cloneElement(item.logo as React.ReactElement<{ className?: string }>, { 
                      className: 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 w-14 h-14 p-1 border-2 rounded-full' 
                  })}
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex items-start md:items-center gap-4 flex-col md:flex-row mb-4">
                      <div className="flex-grow">
                          <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold">{item.company}</h3>
                          <p className="text-blue-400 font-semibold">{item.role}</p>
                      </div>
                      <div className="text-gray-700 dark:text-gray-400 text-sm md:text-right flex-shrink-0">
                          <p>{item.duration}</p>
                          <p>{item.location}</p>
                      </div>
                  </div>
                {item.points.map((point, pIndex) => (
                  <div key={pIndex} className="mt-4">
                    <h4 className="text-gray-800 dark:text-gray-200 font-semibold">{point.title}</h4>
                    <p className="text-gray-700 dark:text-gray-400 text-sm">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Modal isOpen={isModalOpen} onClose={closeCaseStudiesModal} title={modalTitle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedCaseStudies.map((study) => (
            <div key={study.id} className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-6 flex flex-col items-start shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gray-200 dark:bg-gray-900/50 text-blue-400 p-3 rounded-full">
                    {React.cloneElement(study.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' })}
                  </span>
                  <div>
                    <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold">{study.title}</h3>
                  </div>
                </div>
              <div className="text-gray-700 dark:text-gray-400 text-sm space-y-3">
                <p><strong className="text-gray-800 dark:text-gray-300">Situation:</strong> {study.situation}</p>
                <p><strong className="text-gray-800 dark:text-gray-300">Task:</strong> {study.task}</p>
                <div>
                  <strong className="text-gray-800 dark:text-gray-300">Action:</strong>
                  <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
                    {study.action.map((act, i) => <li key={i}>{act}</li>)}
                  </ul>
                </div>
                <p><strong className="text-gray-800 dark:text-gray-300">Result:</strong> {study.result}</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Experience;
