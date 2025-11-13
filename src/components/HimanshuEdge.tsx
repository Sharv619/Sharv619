"use client";

import { motion } from "framer-motion";

const edges = [
  {
    title: "Full-Stack Agility",
    description: "From architecture to deployment, I build robust, production-ready applications end-to-end.",
    icon: "🏗️"
  },
  {
    title: "AI/ML Integration",
    description: "Expertise in RAG architectures and Gemini API to embed intelligent solutions into your products.",
    icon: "🤖"
  },
  {
    title: "DevOps & Performance Mastery",
    description: "Engineered CI/CD pipelines, secured infrastructure, and delivered 88% performance gains.",
    icon: "⚡"
  },
  {
    title: "Mission-Critical Resilience",
    description: "Proven ability to lead disaster recovery and restore 100% application services with zero data loss.",
    icon: "🛡️"
  }
];

export default function HimanshuEdge() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Himanshu Edge
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{edge.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edge.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
