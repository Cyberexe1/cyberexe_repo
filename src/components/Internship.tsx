import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ExternalLink, Calendar, MapPin } from 'lucide-react';
import ParticleBackgroundSection from './ParticleBackgroundSection';

const Internship: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const techStack = ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'Full Stack'];

  return (
    <ParticleBackgroundSection className="py-20" style={{ minHeight: 'auto' }}>
      <div id="internship" className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl ml-0 mr-auto -translate-x-24"
        >
          {/* Section Header */}
          <div className=" mb-14 ml-[400px]">
            <h2 className="text-5xl   md:text-6xl font-bold mb-4 gradient-text">
              Experience
            </h2>
     
          </div>

          {/* Timeline Entry */}
          <div className="relative pl-8 border-l-2 border-primary-500/30">
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-2 border-primary-500 bg-gray-900 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-primary-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-base text-gray-500 dark:text-gray-400 font-mono mb-2">
                <Calendar size={14} />
                <span>Nov 2025 – Jan 2026</span>
              </div>

              {/* Role */}
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                Full Stack Developer Intern
              </h3>

              {/* Company */}
              <div className="flex items-center gap-4 mb-4">
                <a
                  href="https://geargains.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary-500 hover:text-primary-400 font-semibold text-lg transition-colors duration-200"
                >
                  @ Navrasa IT Solutions
                  <ExternalLink size={16} />
                </a>
                <span className="flex items-center gap-1 text-base text-gray-500 dark:text-gray-400">
                  <MapPin size={13} />
                  geargains.in
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 font-mono text-base" style={{ maxWidth: 'calc(42rem + 350px)' }}>
                During my internship at <span className="text-primary-400 font-semibold">Navrasa IT Solutions</span> from
                November 2025 to January 2026, I contributed to the live project{' '}
                <span className="text-primary-400 font-semibold">Gear Gains</span> (geargains.in) as a
                Full Stack Developer Intern. I was responsible for developing and integrating both frontend
                and backend features, working with technologies like HTML, CSS, JavaScript, and APIs to build
                dynamic and responsive functionalities. Operating in a fast-paced, deadline-driven environment
                helped me strengthen my problem-solving, debugging, and optimization skills while ensuring
                timely delivery of production-ready modules. This experience gave me practical exposure to
                real-world development workflows, team collaboration, and handling live application challenges effectively.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1 text-base font-medium rounded-md bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 border border-primary-200 dark:border-primary-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </ParticleBackgroundSection>
  );
};

export default Internship;
