import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
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
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'SDE_PREP',
    description: 'Platform for pre-placement MCQ practice with chapter-wise, mark-wise tests.',
    longDescription: 'A comprehensive platform designed to help students prepare for software development engineer interviews through structured MCQ practice sessions.',
    techStack: ['React', 'Firebase', 'MySQL', 'Node.js'],
    githubUrl: 'https://github.com/Cyberexe1',
    liveUrl: 'https://sde-prep.vercel.app/',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Institute login system',
      'Chapter-wise test organization',
      'PDF generation for tests',
      'Student dashboard with progress tracking',
      'Mark-wise filtering system'
    ]
  },
  {
    id: 2,
    title: 'EventManagement Platform',
    description: 'College event planning frontend built with tight deadlines.',
    longDescription: 'A responsive frontend application for managing college events, built under tight deadlines with focus on user experience and functionality.',
    techStack: ['React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Cyberexe1',
    liveUrl: 'https://event-management-gules-kappa.vercel.app/',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Event creation and management',
      'Responsive design',
      'User-friendly interface',
      'Real-time updates',
      'Mobile-optimized experience'
    ]
  },
  {
    id: 3,
    title: 'EduPulse',
    description: 'AI-powered attentiveness detection system for online lectures using facial and eye tracking.',
    longDescription: 'An innovative AI system that monitors student attention during online lectures using computer vision and machine learning techniques.',
    techStack: ['React', 'Firebase', 'OpenCV', 'Django', 'AI/ML'],
    githubUrl: 'https://github.com/Cyberexe1',
    liveUrl: 'https://edu-pulse-sage.vercel.app/',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Real-time facial recognition',
      'Eye tracking technology',
      'Attention analytics',
      'Teacher dashboard',
      'Student engagement reports'
    ]
  },
  {
    id: 4,
    title: 'Grocery Website',
    description: 'Modern e-commerce platform for grocery shopping with real-time inventory.',
    longDescription: 'A full-featured grocery shopping website with inventory management, shopping cart, and order tracking capabilities.',
    techStack: ['Html', 'Css', 'JavaScript'],
    githubUrl: 'https://github.com/Cyberexe1',
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Real-time inventory tracking',
      'Shopping cart functionality',
      'Order management system',
      'User authentication',
      'Responsive design'
    ]
  },
  {
    id: 5,
    title: 'AC Repair Website',
    description: 'Service booking platform for AC repair and maintenance.',
    longDescription: 'A comprehensive platform for booking AC repair and maintenance services with real-time technician tracking.',
    techStack: ['Html', 'Css', 'JavaScript'],
    githubUrl: 'https://github.com/Cyberexe1',
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Service booking system',
      'Technician tracking',
      'Review system',
      'Service history',
      'Payment integration'
    ]
  },
  {
    id: 6,
    title: 'Om Shree Ganesh Plywood',
    description: 'E-commerce platform for plywood and laminate products.',
    longDescription: 'An online store for plywood and laminate products with detailed product categorization and comparison features.',
    techStack: ['React','Typescript', 'Node.js'],
    githubUrl: 'https://github.com/Cyberexe1',
    image: 'https://images.pexels.com/photos/6431298/pexels-photo-6431298.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Product catalog',
      'Price comparison',
      'Product filtering',
      'Customer reviews'
    ]
  },
  {
    id: 7,
    title: 'Smart City Dashboard',
    description: 'Real-time monitoring dashboard for smart city infrastructure.',
    longDescription: 'A comprehensive dashboard for monitoring and managing smart city infrastructure with real-time data visualization.',
    techStack: ['Django','Html','css','javascript','Google Maps API','Twilio'],
    githubUrl: 'https://github.com/Cyberexe1',
    image: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Real-time monitoring',
      'Data visualization',
      'Infrastructure management',
      'Alert system',
      'Analytics dashboard'
    ]
  }
];

const AllProjects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Link 
            to="/"
            className="inline-block mb-8 text-primary-500 hover:text-primary-600 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            All Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my complete portfolio of projects, showcasing various technologies and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects; 