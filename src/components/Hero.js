import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 pt-32 sm:pt-20 md:pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight dark:text-white">
              Hi, <br/> I'm Chinenye
              <span className="block text-purple-600 dark:text-purple-400">Front-End Developer</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              I develop professional applications and websites using modern web technologies, ensuring seamless user experiences and polished online presences.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <img
              src="https://i.postimg.cc/wM3b1DWC/IMG-0421.jpg"
              alt="Aroh Chinenye"
              className="rounded-lg shadow-2xl dark:shadow-purple-500/10 max-w-xs sm:max-w-sm md:max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
