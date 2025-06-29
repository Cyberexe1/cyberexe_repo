import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Smartphone, Brain, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
    { name: 'React', icon: <Globe className="w-6 h-6" />, color: 'text-blue-500' },
    { name: 'Django', icon: <Code className="w-6 h-6" />, color: 'text-green-600' },
    { name: 'MySQL', icon: <Database className="w-6 h-6" />, color: 'text-orange-500' },
    { name: 'Python', icon: <Brain className="w-6 h-6" />, color: 'text-yellow-500' },
    { name: 'Firebase', icon: <Zap className="w-6 h-6" />, color: 'text-red-500' },
    { name: 'Node.js', icon: <Smartphone className="w-6 h-6" />, color: 'text-green-500' },
    { name: 'Java', icon: <Code className="w-6 h-6" />, color: 'text-orange-700' },
    { name: 'C++', icon: <Code className="w-6 h-6" />, color: 'text-blue-700' },
    { name: 'HTML', icon: <Code className="w-6 h-6" />, color: 'text-orange-600' },
    { name: 'CSS', icon: <Code className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'JavaScript', icon: <Code className="w-6 h-6" />, color: 'text-yellow-400' },
    { name: 'Google API', icon: <Globe className="w-6 h-6" />, color: 'text-green-700' },
    { name: 'TypeScript', icon: <Code className="w-6 h-6" />, color: 'text-blue-600' },
    { name: 'Bootstrap', icon: <Code className="w-6 h-6" />, color: 'text-purple-600' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a second-year B.Tech Computer Engineering student at Thakur College of Engineering and Technology, 
                passionate about full-stack development, AI, and solving real-world problems through technology.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My journey in tech is driven by curiosity and the desire to create impactful solutions that make a difference 
                in education and productivity. I love exploring new technologies and building projects that solve real problems.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Let's Connect
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Tech Stack
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <div className={tech.color}>
                      {tech.icon}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;