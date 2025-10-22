
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center scroll-mt-16">
      <h2 className="text-4xl font-bold text-gray-100 mb-4">Get In Touch</h2>
      <p className="max-w-xl mx-auto text-gray-400 mb-8">
        I am currently seeking new opportunities. For questions, potential roles, or to connect, please feel free to reach out.
      </p>
      <a
        href="mailto:himanshu.lade@email.com"
        className="inline-block px-8 py-4 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition-all transform hover:scale-105"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;