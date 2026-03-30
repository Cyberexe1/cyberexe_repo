import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackgroundSection from './ParticleBackgroundSection';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'SDE_PREP',
      description: 'Platform for pre-placement MCQ practice with chapter-wise, mark-wise tests.',
      longDescription: 'A comprehensive platform designed to help students prepare for software development engineer interviews through structured MCQ practice sessions.',
      techStack: ['React', 'Firebase', 'MySQL', 'Node.js'],
      githubUrl: 'https://github.com/Cyberexe1',
      image: '/Sde_Prep.png',
      features: [
        'Institute login system',
        'Chapter-wise test organization',
        'PDF generation for tests',
        'Student dashboard with progress tracking',
        'Mark-wise filtering system',
      ],
      liveUrl: 'https://sde-prep.vercel.app/',
    },
    {
      id: 2,
      title: 'EventManagement Platform',
      description: 'College event planning frontend built with tight deadlines.',
      longDescription: 'A responsive frontend application for managing college events, built under tight deadlines with focus on user experience and functionality.',
      techStack: ['React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Cyberexe1',
      image: '/Event_Management.jpeg',
      features: [
        'Event creation and management',
        'Responsive design',
        'User-friendly interface',
        'Real-time updates',
        'Mobile-optimized experience',
      ],
      liveUrl: 'https://event-management-gules-kappa.vercel.app/',
    },
    {
      id: 3,
      title: 'Personal Diary App',
      description: 'React + Django REST API-based diary storing private notes securely in MySQL.',
      longDescription: 'A secure personal diary application that allows users to store and manage their private thoughts and notes with full-stack implementation.',
      techStack: ['React', 'Django', 'MySQL', 'REST API'],
      githubUrl: 'https://github.com/Cyberexe1',
      image: '/Diary.png',
      features: [
        'Secure user authentication',
        'Private note storage',
        'Rich text editor',
        'Search functionality',
        'Data encryption',
      ],
      liveUrl: 'https://edu-pulse-sage.vercel.app/',
    },
    {
      id: 4,
      title: 'EduPulse',
      description: 'AI-powered attentiveness detection system for online lectures using facial and eye tracking.',
      longDescription: 'An innovative AI system that monitors student attention during online lectures using computer vision and machine learning techniques.',
      techStack: ['React', 'Firebase', 'OpenCV', 'Django', 'AI/ML'],
      githubUrl: 'https://github.com/Cyberexe1',
      image: '/EduPulse.png',
      features: [
        'Real-time facial recognition',
        'Eye tracking technology',
        'Attention analytics',
        'Teacher dashboard',
        'Student engagement reports',
      ],
      liveUrl: 'https://edu-pulse-sage.vercel.app/',
    },
  ];

  return (
    <ParticleBackgroundSection className="py-24" style={{ minHeight: 'auto' }}>
      <div id="projects" className="container mx-auto px-6" style={{ marginTop: '100px' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-mono mb-5">
            <Sparkles size={14} />
            <span>selected work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            A curated set of projects showcasing full-stack development, AI integration, and real-world problem solving.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-gray-900/60 backdrop-blur-sm shadow-xl hover:shadow-primary-500/20 hover:shadow-2xl transition-all duration-500"
              style={{
                boxShadow: hoveredId === project.id
                  ? '0 0 40px rgba(99,102,241,0.15), 0 20px 60px rgba(0,0,0,0.4)'
                  : '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              {/* Number badge */}
              <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-primary-500/50 flex items-center justify-center text-primary-400 text-xs font-mono font-bold backdrop-blur-sm">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                {/* Hover action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0, y: hoveredId === project.id ? 0 : 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-4 right-4 flex gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-black/70 border border-white/10 text-white hover:bg-primary-600 hover:border-primary-500 transition-all duration-200 backdrop-blur-sm"
                  >
                    <Github size={16} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/70 border border-white/10 text-white hover:bg-primary-600 hover:border-primary-500 transition-all duration-200 backdrop-blur-sm"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        <ExternalLink size={15} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-gray-600 font-mono group-hover:text-primary-500 transition-colors duration-300">
                    view details →
                  </span>
                </div>
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-primary-500/0 group-hover:border-primary-500/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Link
            to="/all-projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
          >
            See All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[1200] flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative bg-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 border border-white/10 text-white rounded-full hover:bg-primary-600 transition-all duration-200 backdrop-blur-sm"
                  >
                    <X size={18} />
                  </button>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 leading-relaxed mb-6">{selectedProject.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-mono text-primary-400 uppercase tracking-widest mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-500 hover:to-secondary-500 transition-all duration-200 text-sm font-medium shadow-lg"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ParticleBackgroundSection>
  );
};

export default Projects;
