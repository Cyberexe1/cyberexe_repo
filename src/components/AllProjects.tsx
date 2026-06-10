import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowLeft, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  category: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'SDE_PREP',
    description: 'Platform for pre-placement MCQ practice with chapter-wise, mark-wise tests.',
    longDescription:
      'A comprehensive platform designed to help students prepare for software development engineer interviews through structured MCQ practice sessions.',
    techStack: ['React', 'Firebase', 'MySQL', 'Node.js'],
    githubUrl: 'https://github.com/Cyberexe1',
    liveUrl: 'https://sde-prep.vercel.app/',
    image: '/Sde_Prep.png',
    category: 'Full Stack',
    features: [
      'Institute login system',
      'Chapter-wise test organization',
      'PDF generation for tests',
      'Student dashboard with progress tracking',
      'Mark-wise filtering system',
    ],
  },
  {
    id: 2,
    title: 'EventManagement Platform',
    description: 'College event planning frontend built with tight deadlines.',
    longDescription:
      'A responsive frontend application for managing college events, built under tight deadlines with focus on user experience and functionality.',
    techStack: ['React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Cyberexe1',
    liveUrl: 'https://event-management-gules-kappa.vercel.app/',
    image: '/Event_Management.jpeg',
    category: 'Frontend',
    features: [
      'Event creation and management',
      'Responsive design',
      'User-friendly interface',
      'Real-time updates',
      'Mobile-optimized experience',
    ],
  },
  {
    id: 3,
    title: 'EduPulse',
    description: 'AI-powered attentiveness detection system for online lectures using facial and eye tracking.',
    longDescription:
      'An innovative AI system that monitors student attention during online lectures using computer vision and machine learning techniques.',
    techStack: ['React', 'Firebase', 'OpenCV', 'Django', 'AI/ML'],
    githubUrl: 'https://github.com/Cyberexe1',
    liveUrl: 'https://edu-pulse-sage.vercel.app/',
    image: '/EduPulse.png',
    category: 'AI/ML',
    features: [
      'Real-time facial recognition',
      'Eye tracking technology',
      'Attention analytics',
      'Teacher dashboard',
      'Student engagement reports',
    ],
  },
  {
    id: 4,
    title: 'Grocery Website',
    description: 'Modern e-commerce platform for grocery shopping with real-time inventory.',
    longDescription:
      'A full-featured grocery shopping website with inventory management, shopping cart, and order tracking capabilities.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Cyberexe1',
    liveUrl: 'https://grocery-website-red.vercel.app/',
    image: '/Grocery_Website.png',
    category: 'Frontend',
    features: [
      'Real-time inventory tracking',
      'Shopping cart functionality',
      'Order management system',
      'User authentication',
      'Responsive design',
    ],
  },
  {
    id: 5,
    title: 'Personal Diary App',
    description: 'React + Django REST API-based diary storing private notes securely in MySQL.',
    longDescription:
      'A secure personal diary application that allows users to store and manage their private thoughts and notes with full-stack implementation.',
    techStack: ['React', 'Django', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/Cyberexe1',
    image: '/Diary.png',
    category: 'Full Stack',
    features: [
      'Secure user authentication',
      'Private note storage',
      'Rich text editor',
      'Search functionality',
      'Data encryption',
    ],
  },
  {
    id: 6,
    title: 'Om Shree Ganesh Plywood',
    description: 'E-commerce platform for plywood and laminate products.',
    longDescription:
      'An online store for plywood and laminate products with detailed product categorization and comparison features.',
    techStack: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/Cyberexe1/Om-Shree-Ganesh-Plywood-and-Laminate',
    liveUrl: 'https://om-shree-ganesh-plywood-and-laminat.vercel.app/',
    image: '/Plywood_Shop.png',
    category: 'Full Stack',
    features: [
      'Product catalog',
      'Price comparison',
      'Product filtering',
      'Customer reviews',
    ],
  },
  {
    id: 7,
    title: 'ASTRA',
    description: 'Desktop security analysis tool that automates network capture and runs 7 parallel security modules with AI-powered analysis via Gemini 2.5 Flash.',
    longDescription:
      'ASTRA automates what you\'d normally do manually in browser DevTools — but goes far deeper. Give it a URL and it captures every network request the page makes using headless Chromium, runs a full security audit across 7 parallel modules (TLS, CORS, CSP, fingerprinting, API extraction, DNS recon, vulnerability scanning), then delivers an AI-powered analysis using Gemini 2.5 Flash including executive summary, remediation plan, and follow-up chat. Runs entirely on your machine.',
    techStack: ['Electron', 'TypeScript', 'Playwright', 'Gemini 2.5 Flash', 'Node.js'],
    githubUrl: 'https://github.com/Cyberexe1/ASTRA',
    image: '/ASTRA.png',
    category: 'Security',
    features: [
      'Network capture: intercepts every HTTP request (XHR, fetch, scripts, fonts, media) via headless Chromium',
      'TLS Inspector: certificate validity, expiry, protocol version, cipher suite, HSTS — graded A+ to F',
      'CORS Analyzer: wildcard origins, credentials + wildcard combos, dangerous methods, auth header exposure',
      'CSP Analyzer: flags unsafe-inline, unsafe-eval, wildcards, missing frame-ancestors — graded A to F',
      'Technology Fingerprinter: detects frameworks, CMS, servers, CDNs, analytics, payment & auth providers',
      'API Endpoint Extractor: identifies XHR/fetch endpoints, decodes JWTs, scans for AWS keys, tokens, passwords in URLs',
      'DNS Recon: resolves A, AAAA, MX, TXT, NS, CNAME for every domain contacted by the page',
      'Vulnerability Scanner: actively probes for SQL injection, XSS, path traversal, open redirects',
      'AI Analysis: executive summary, critical findings, third-party risk, prioritized remediation + follow-up chat',
    ],
  },
  {
    id: 8,
    title: 'ASET-AI',
    description: 'Stops AI hallucinations by verifying scientific claims against 1.2M+ peer-reviewed papers in real time.',
    longDescription:
      'ASET tackles the 46% AI citation fabrication problem head-on. It verifies any scientific claim — typed, uploaded as a document, or extracted from a YouTube video — against a pre-indexed database of 1.2M+ peer-reviewed papers across 8 domains, returning a trust score and supporting evidence in under 200ms. The database self-grows by fetching from arXiv + PubMed whenever local papers are insufficient.',
    techStack: ['React', 'Node.js', 'Python', 'SQLite FTS5', 'arXiv API', 'PubMed API', 'AWS SES', 'OCR'],
    githubUrl: 'https://github.com/Cyberexe1/aset',
    liveUrl: 'https://www.aset-ai.tech/',
    image: '/ASET_AI.png',
    category: 'AI/ML',
    features: [
      'Mode 1 — Single Claim: verify any typed claim in under 200ms',
      'Mode 2 — YouTube: extract transcript and verify every claim automatically',
      'Mode 3 — Document: upload PDF, DOCX, or image (OCR) for full claim analysis',
      'Self-growing DB: fetches from arXiv + PubMed and stores results permanently',
      'Paper search across 1.2M+ papers by title, author, or keyword',
      '8 scientific domains: Space, Biology, Medicine, Chemistry, Physics, CS, Engineering & more',
      'Email OTP password reset via AWS SES + Nodemailer',
    ],
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Security'];

const AllProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-600/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-secondary-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-mono mb-5">
            <Sparkles size={14} />
            <span>complete portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">All Projects</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every project I've built — from AI systems to full-stack platforms. Each one a story of problem-solving and craft.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-14 flex-wrap"
        >
          <Filter size={16} className="text-gray-500" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-primary-500/40 hover:text-primary-400'
              }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-60">
                {cat === 'All' ? allProjects.length : allProjects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-gray-900/60 backdrop-blur-sm shadow-xl hover:shadow-primary-500/20 hover:shadow-2xl transition-all duration-500"
                style={{
                  boxShadow:
                    hoveredId === project.id
                      ? '0 0 40px rgba(99,102,241,0.15), 0 20px 60px rgba(0,0,0,0.4)'
                      : '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {/* Number badge */}
                <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-primary-500/50 flex items-center justify-center text-primary-400 text-xs font-mono font-bold backdrop-blur-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-gray-300 text-xs font-mono backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                  {/* Hover action buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      y: hoveredId === project.id ? 0 : 10,
                    }}
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
                      <Github size={15} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-black/70 border border-white/10 text-white hover:bg-primary-600 hover:border-primary-500 transition-all duration-200 backdrop-blur-sm"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary-400 transition-colors duration-200"
                      >
                        <Github size={13} />
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary-400 transition-colors duration-200"
                        >
                          <ExternalLink size={13} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-gray-600 font-mono group-hover:text-primary-500 transition-colors duration-300">
                      details →
                    </span>
                  </div>
                </div>

                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-primary-500/0 group-hover:border-primary-500/30 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">No projects in this category yet.</div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-[1200] flex items-center justify-center p-4"
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
                  <span className="text-xs font-mono text-primary-400 mb-1 block">{selectedProject.category}</span>
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
  );
};

export default AllProjects;
