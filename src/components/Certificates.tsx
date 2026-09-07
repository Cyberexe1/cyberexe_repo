import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X } from 'lucide-react';
import ParticleBackgroundSection from './ParticleBackgroundSection';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
  description: string;
  certId?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Applied Linear Algebra in AI and ML',
    issuer: 'NPTEL',
    date: '2025',
    image: '/NPTEL_Certficate.png',
    description: 'Mastered linear algebra concepts and their applications in Artificial Intelligence and Machine Learning.',
    certId: 'NPTEL-2023-JAVA-001',
  },
  {
    id: 2,
    title: 'JavaScript Complete Course',
    issuer: 'Udemy',
    date: '2023',
    image: '/JavaScript_Udemy.jpg',
    description: 'Mastered modern JavaScript including ES6+, async programming, and web APIs.',
    certId: 'UC-JS-2023-456',
  },
  {
    id: 3,
    title: '160 Days Coding Challenge',
    issuer: 'GeeksforGeeks',
    date: '2025',
    image: '/GFG_160days.png',
    description: 'Successfully completed 160 days of consistent coding practice and problem-solving.',
    certId: 'GFG-160D-2023',
  }
];

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <ParticleBackgroundSection className="py-20" style={{ minHeight: 'auto' }}>
      <div id="certificates" className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Verified credentials from NPTEL, Udemy, and GeeksforGeeks — covering AI/ML, JavaScript, and competitive programming.
          </p>
        </motion.div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 relative z-20 hover:z-30"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="relative overflow-hidden aspect-[4/3] cursor-pointer p-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-medium">Click to view details</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <span className="text-primary-500 dark:text-primary-400 font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-8"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-5xl w-full max-h-[85vh] overflow-y-auto relative z-[110]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-4 right-4 z-[120]">
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center p-8">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto max-h-[70vh] object-contain shadow-lg rounded-lg"
                  />
                  
                  <div className="mt-6 text-center w-full max-w-2xl">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                      {selectedCertificate.title}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <span className="font-medium">
                        {selectedCertificate.issuer}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span>
                        {selectedCertificate.date}
                      </span>
                    </div>

                    {selectedCertificate.certId && (
                      <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg inline-block">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Certificate ID: <span className="font-mono">{selectedCertificate.certId}</span>
                        </p>
                      </div>
                    )}
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedCertificate.description}
                    </p>
                    
                    {selectedCertificate.link && (
                      <div className="flex justify-center">
                        <a
                          href={selectedCertificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          Verify Certificate
                        </a>
                      </div>
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

export default Certificates; 