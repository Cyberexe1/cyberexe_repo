import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SplitText from './SplitText';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import Lightning from './Lightning';
import ProfileImg from '../../Profile.png';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Lightning background */}
      <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 p-1 animate-pulse-slow hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300 overflow-hidden">
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <SplitText
            text="Vikas Tiwari"
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-white"
            delay={100}
            duration={0.6}
            ease="easeOut"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 h-[60px]"
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full Stack Developer',
                2000,
                'Problem Solver',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Building impactful tech for education & productivity
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Projects
            </motion.button>
            
            <motion.a
              href="/Vikas_Tiwari_Resume.pdf"
              download="Vikas_Tiwari_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-primary-500 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Cyberexe1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/vikas-tiwari-37b069326"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:Vikastiwari1045@gmail.com"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer"
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;