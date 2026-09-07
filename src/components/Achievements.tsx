import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Medal, Award, ExternalLink, Github } from 'lucide-react';
import ParticleBackgroundSection from './ParticleBackgroundSection';

interface AchievementLink {
  label: string;
  url: string;
  type: 'live' | 'github';
}

interface Achievement {
  id: number;
  competition: string;
  rank: string;
  project: string;
  projectFullName?: string;
  prize: string;
  prizeLabel: string;
  description: string;
  contribution: string;
  accent: string;
  badgeGradient: string;
  icon: React.ReactNode;
  links?: AchievementLink[];
}

const achievements: Achievement[] = [
  {
    id: 1,
    competition: 'AWS AI Ideas',
    rank: 'Global Champion',
    project: 'ASET',
    projectFullName: 'Academic Safety Evidencing Truth',
    prize: '$25,000',
    prizeLabel: 'Prize Pool',
    description:
      'ASET is an AI-powered solution that helps students and educators verify the credibility of academic information. It focuses on evidence-based answers, letting users validate claims instead of blindly trusting AI-generated output.',
    contribution:
      'We built ASET to tackle the growing problem of misinformation and unreliable academic content — using AI to make information more trustworthy, transparent, and easier to verify.',
    accent: 'amber',
    badgeGradient: 'from-amber-400 via-yellow-500 to-orange-500',
    icon: <Trophy size={26} />,
    links: [
      { label: 'Live Site', url: 'https://www.aset-ai.tech/', type: 'live' },
      { label: 'GitHub', url: 'https://github.com/Cyberexe1/aset', type: 'github' },
    ],
  },
  {
    id: 2,
    competition: 'KnowCode 3.0 Hackathon',
    rank: '1st Place',
    project: 'SEVE',
    prize: '₹50,000',
    prizeLabel: 'Prize Won',
    description:
      'At KnowCode 3.0 our team built SEVE, a technology solution designed to address a real-world problem through an innovative and practical approach.',
    contribution:
      'We worked collaboratively under a strict hackathon deadline — taking the project from idea and planning through development, integration, testing, and final presentation. I contributed to the development and integration of the solution, working closely with the team to build and refine the final product.',
    accent: 'sky',
    badgeGradient: 'from-sky-400 via-primary-500 to-secondary-500',
    icon: <Medal size={26} />,
  },
];

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <ParticleBackgroundSection className="py-20" style={{ minHeight: 'auto' }}>
      <div id="achievements" className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Global Champion at AWS AI Ideas and 1st Place at KnowCode 3.0 — building
            award-winning products under real competition deadlines.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-14">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${item.badgeGradient}`} />

              <div className="p-7">
                {/* Rank badge */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.badgeGradient} text-white shadow-md`}
                  >
                    {item.icon}
                    <span className="font-bold text-sm md:text-base whitespace-nowrap">
                      {item.rank}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                      {item.prize}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {item.prizeLabel}
                    </div>
                  </div>
                </div>

                {/* Competition */}
                <div className="flex items-center gap-2 mb-2 text-primary-500 dark:text-primary-400 font-semibold">
                  <Award size={16} />
                  <span>{item.competition}</span>
                </div>

                {/* Project name */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {item.project}
                </h3>
                {item.projectFullName && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">
                    {item.projectFullName}
                  </p>
                )}
                {!item.projectFullName && <div className="mb-4" />}

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                  {item.contribution}
                </p>

                {/* Links */}
                {item.links && (
                  <div className="flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.project} ${link.label}`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 border border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-900/70 transition-colors duration-200"
                      >
                        {link.type === 'github' ? <Github size={16} /> : <ExternalLink size={16} />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">
                Summary of hackathon and competition achievements
              </caption>
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700/60">
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Achievement
                  </th>
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Recognition
                  </th>
                </tr>
              </thead>
              <tbody>
                {achievements.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/40 transition-colors duration-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-100 whitespace-nowrap"
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="text-primary-500 dark:text-primary-400">{item.icon}</span>
                        {item.competition}
                      </span>
                    </th>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">{item.project}</span>
                      {item.projectFullName && (
                        <span className="text-gray-500 dark:text-gray-400">
                          {' '}– {item.projectFullName}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">{item.rank}</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {' '}— {item.prize} {item.prizeLabel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </ParticleBackgroundSection>
  );
};

export default Achievements;
