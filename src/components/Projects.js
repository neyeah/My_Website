import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce App',
    description: 'A modern e-commerce platform.',
    image: 'https://i.postimg.cc/GmNX54TD/Screenshot-2024-07-26-at-15-08-32.png',
    github: 'https://github.com/neyeah',
    demo: 'https://astren.co/'
  },
  {
    title: 'Job Search App',
    description: 'A job search application.',
    image: 'https://i.postimg.cc/MZM0mv43/Screenshot-2024-07-26-at-15-04-28.png',
    github: 'https://github.com/neyeah',
    demo: 'https://www.feedbank.ai/'
  },
  {
    title: 'Management Information System',
    description: 'A MIS for monitoring and evaluation.',
    image: 'https://i.postimg.cc/DyHn5vjT/Screenshot-2024-07-29-at-10-19-04.png',
    github: 'https://github.com/neyeah',
    demo: 'https://www.ideasmis.com/'
  },
  {
    title: 'Movie App',
    description: 'A movie database application.',
    image: 'https://i.postimg.cc/6qNHB1R2/93-E77-F1-B-29-C2-4-D9-D-8-B60-73-BF56599-CF5.jpg',
    github: 'https://github.com/neyeah/Movie-App.git',
    demo: 'https://neyes-movieapp.netlify.app/'
  },
  {
    title: 'Housing Project',
    description: 'A modern housing project.',
    image: 'https://i.postimg.cc/qRFp0fZ4/Screenshot-2024-10-21-at-10-25-59.png',
    github: 'https://github.com/neyeah/casavera.git',
    demo: 'https://casavera.vercel.app/'
  },
  {
    title: 'DEX Platform',
    description: 'A multi-chain DEX platform.',
    image: 'https://i.postimg.cc/5jdns7xf/Screenshot-2024-11-26-at-09-44-32.png',
    github: 'https://github.com/neyeah/moonex.git',
    demo: 'https://moonex-iota.vercel.app/'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in building modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/10 overflow-hidden hover:shadow-xl dark:hover:shadow-purple-500/10 transition-shadow"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white dark:bg-gray-800 rounded-full"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white dark:bg-gray-800 rounded-full"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      </div>
    </motion.div>
  );
}