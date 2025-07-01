import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SASS/SCSS'],
  Frameworks: ['React.js', 'Next.js', 'Redux', 'Context API', 'Angular', 'Vue.js'],
  'UI/UX': ['Tailwind CSS', 'Material UI', 'Styled Components', 'Framer Motion', 'Bootstrap'],
  Testing: ['Jest', 'React Testing Library', 'Cypress', 'Enzyme'],
  Tools: ['Git', 'GitHub Actions', 'Jira', 'Figma', 'Adobe XD', 'VS Code', 'Chrome DevTools'],
  Backend: ['RESTful APIs', 'GraphQL', 'SPARQL', 'Firebase', 'AWS']
};


const experiences = [
  {
    company: 'Seismic Consults, Abuja, Nigeria',
    role: 'Frontend Developer',
    duration: '04/2024 - Present',
   responsibilities: [
  'Spearheaded development of a comprehensive healthcare application, implementing real-time appointment scheduling and secure patient portals, which increased user retention by 37%.',
  'Led a team of 5 developers for a digital wellness platform, architecting the front-end infrastructure using React and TypeScript, while ensuring secure data handling protocols were followed.',
  'Completely rebuilt the company’s corporate website from scratch, resulting in a 128% increase in lead generation and a 45% improvement in user engagement metrics.',
  'Collaborated with international stakeholders on World Bank–funded projects, building interactive data visualization dashboards that track economic development initiatives across Nigerian states.',
  'Developed a budget tracking and visualization system for the Nigerian Ministry of Budget and Fiscal Planning, enabling transparent monitoring of expenditures and resource allocations across departments.',
  'Established comprehensive component libraries and documentation, reducing onboarding time for new developers by 60%.',
  'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time from hours to under 15 minutes.',
  'Participated in bi-weekly code reviews and mentoring sessions, improving overall code quality and team productivity by 42%.'
]

  },
  {
    company: 'Feedbank, Remote (USA)',
    role: 'Frontend Developer',
    duration: '02/2023 - 02/2024',
   responsibilities: [
  'Engineered critical features for a sophisticated job search platform using React.js, improving search accuracy by 53% and reducing bounce rates by 27%.',
  'Implemented advanced filtering and sorting algorithms, enabling users to navigate thousands of job listings using 15+ customizable parameters.',
  'Architected state management solutions using Redux and Context API, ensuring consistent data flow across 35+ components while maintaining optimal performance.',
  'Collaborated with UX/UI designers to implement creative, responsive designs, leading to a 41% increase in mobile user engagement.',
  'Integrated RESTful APIs with optimized caching strategies, reducing API calls by 60% and improving page load times by 2.3 seconds.',
  'Enhanced security protocols by implementing JWT authentication, role-based access controls, and client-side validation for a secure and efficient platform.',
  'Participated in daily stand-ups and bi-weekly sprint planning, consistently delivering features ahead of schedule with 95% test coverage.'
]

  },
  {
    company: 'Astren, Remote (Canada)',
    role: 'Software Development Intern',
    duration: '07/2022 - 02/2023',
    responsibilities: [
  'Developed key e-commerce functionalities including product filtering, shopping cart integration, and a seamless checkout process, resulting in an 18% increase in conversion rates.',
  'Optimized web performance by implementing lazy loading and code splitting, improving Lighthouse performance scores from 67 to 94.',
  'Collaborated with back-end developers to integrate secure payment gateways and user authentication systems using JWT tokens.',
  'Implemented responsive designs with full cross-browser compatibility across Chrome, Firefox, Safari, and Edge.',
  'Utilized Git for version control, managing feature branches and participating in code reviews, which enhanced overall code quality.',
  'Created engaging UI animations and micro-interactions using CSS transitions and Framer Motion, increasing user engagement metrics by 23%.',
  'Documented front-end architecture and component usage guidelines to facilitate knowledge sharing and streamline onboarding within the development team.'
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
    <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6 text-center">Technical Skills</h3>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-3">{category}</h4>
          <ul className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <motion.li
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
</div>

{/* Open Source Contributions */}
<div className="mt-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-700/10"
  >
    <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-6 text-center">
      Open Source Contributions
    </h3>

    {/* Wikimedia Projects */}
    <div className="mb-6">
      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Wikimedia Projects</h4>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
        <li>Actively contributed to multiple Wikimedia Foundation projects, implementing accessibility improvements that benefited millions of users.</li>
        <li>Developed and merged new features for content management and user interaction, receiving commendation from core maintainers.</li>
        <li>Fixed critical UI bugs affecting mobile responsiveness across different language versions.</li>
        <li>Created documentation for new contributors, lowering the barrier to entry for community participation.</li>
        <li>Participated in code reviews and technical discussions, helping shape project direction and best practices.</li>
      </ul>
    </div>

    {/* Fedora Project */}
    <div className="mb-6">
      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Fedora Project</h4>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
        <li>Contributed to Fedora's web infrastructure, improving UI components and the documentation portal.</li>
        <li>Implemented responsive design improvements for community websites, enhancing mobile user experience.</li>
        <li>Collaborated with the design team to modernize UI elements while maintaining brand consistency.</li>
        <li>Fixed accessibility issues to ensure WCAG compliance across project websites.</li>
        <li>Participated in community discussions and provided technical guidance to new contributors.</li>
      </ul>
    </div>

    {/* React UI Component Library */}
    <div>
      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">React UI Component Library</h4>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
        <li>Contributed to a popular React component library with 5K+ GitHub stars.</li>
        <li>Developed reusable, accessible UI components that improved developer experience and performance.</li>
        <li>Implemented comprehensive documentation and examples, increasing library adoption.</li>
        <li>Addressed complex edge cases and browser compatibility issues to improve reliability.</li>
        <li>Participated in the library’s migration to TypeScript, enhancing type safety and developer experience.</li>
      </ul>
    </div>
  </motion.div>
</div>

      </div>
    </section>
  );
}
