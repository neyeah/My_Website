import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'RESTful APIs',
  'D3.js',
  'Bootstrap',
  'UI/UX Best Practices',
  'Redux',
  'Git',
  'VS Code',
  'Figma',
  'HTML5',
  'CSS3',
  'Vercel',
  'SASS',
  'JavaScript',
  'Web Performance Optimization'
];

const experiences = [
  {
    company: 'Seismic Consults, Abuja, Nigeria',
    role: 'Frontend Developer',
    duration: '04/2024 - Present',
    responsibilities: [
      'Collaborated in the design and development of Management Information Systems (MIS) and Monitoring & Evaluation (M&E) systems, focusing on creating intuitive and responsive front-end interfaces. Utilize React.js and other front-end technologies to build user-centric platforms that enhance data accessibility and streamline reporting processes.',
      'I led the rebranding of the company website, enhancing user experience by aligning the design with the updated brand identity. I collaborated with design and marketing teams to implement modern, responsive web design resulting in a 40% increase in user engagement and a 60% boost in mobile traffic. My role also involved ensuring cross-browser compatibility and optimizing the site for mobile devices.',
      'Collaborate closely with back-end developers to integrate APIs and endpoints, ensuring seamless data flow and functionality across the systems. Contribute to the overall architecture by providing input on front-end best practices, performance optimization, and user experience improvements.'
    ]
  },
  {
    company: 'Feedbank, Remote (USA)',
    role: 'Frontend Developer',
    duration: '02/2023 - 02/2024',
    responsibilities: [
      'Collaborated on the front-end development of a sophisticated job search platform, utilizing React.js to build highly responsive andintuitive user interfaces. Contributed to the implementation of complex search and filtering functionalities, enabling users to efficiently explore job listings based on various criteria such as location, experience level, and industry.',
'Worked alongside senior developers to manage state using Redux, ensuring seamless data flow and real-time updates across the application. Assisted in integrating RESTful APIs to dynamically fetch and display job postings, company profiles, and application statuses, while optimizing load times and minimizing server requests.',
'Partnered with UX/UI designers to deliver a user-centric experience, focusing on accessibility and mobile-first design principles.',
'Contributed to enhancing security features by implementing client-side validation, user authentication, and session management, ensuring a secure and efficient platform.'
    ]
  },
  {
    company: 'Astren, Remote (Canada)',
    role: 'Software Development Intern',
    duration: '07/2022 - 02/2023',
    responsibilities: [
      'Contributed to the development of a robust e-commerce website, enhancing user experience with features such as product filtering, shopping cart integration, and seamless checkout processes. Worked closely with the back-end team to ensure smooth data flow and user authentication, delivering a high-performing and user-friendly platform.',
'Optimized web performance by following best practices and ensured cross-browser compatibility. Integrated RESTful APIs for seamless data fetching, leveraging tools like Axios and Fetch API to manage asynchronous operations efficiently.',
'Utilized Git version control system to manage and track changes in codebase, ensuring seamless teamwork and code synchronization, and Implemented UI animations and transitions to create visually engaging and intuitive interfaces, enhancing user engagement.'
    ]
  }
];

export default function SkillsAndExperience() {
  return (
    <section id="skills-experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Skills & Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here’s an overview of my professional experience and technical skills in front-end development and software engineering.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-700/10">
                <h3 className="text-lg font-bold dark:text-white">{experience.company}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{experience.role} ({experience.duration})</p>
                <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                  {experience.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-700/10"
          >
            <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
