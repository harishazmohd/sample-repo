import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

const skills = ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD', 'GitHub Actions', 'Monitoring', 'Linux'];
import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import './index.css';

const skills = [
  'AWS',
  'Terraform',
  'Kubernetes',
  'Docker',
  'CI/CD',
  'GitHub Actions',
  'Monitoring',
  'Linux',
];

const projects = [
  {
    title: 'Cloud Cost Radar',
    description:
      'Built a cross-account AWS analytics dashboard that reduced monthly cloud spend by 24% using automation and rightsizing recommendations.',
    stack: 'React · Lambda · Athena · Terraform',
  },
  {
    title: 'Zero-Downtime Delivery Platform',
    description:
      'Designed progressive delivery workflows with canary deployments and automated rollback controls for mission-critical services.',
    stack: 'Kubernetes · ArgoCD · Prometheus · Grafana',
  },
  {
    title: 'Secure CI Blueprint',
    description:
      'Implemented hardened CI pipelines with signed artifacts, policy checks, and secrets rotation for enterprise engineering teams.',
    stack: 'GitHub Actions · OPA · Vault · SAST/DAST',
  },
];

const glitter = [
  { top: '12%', left: '10%', delay: 0, duration: 2.4 },
  { top: '22%', left: '78%', delay: 0.2, duration: 2.8 },
  { top: '34%', left: '52%', delay: 0.6, duration: 2.2 },
  { top: '48%', left: '16%', delay: 0.9, duration: 3.1 },
  { top: '58%', left: '86%', delay: 0.4, duration: 2.6 },
  { top: '74%', left: '40%', delay: 1.1, duration: 2.9 },
];

function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-full border px-4 py-2 text-xs uppercase tracking-widePlus transition-colors dark:border-white/35 dark:text-white/80 dark:hover:border-white dark:hover:text-white border-black/30 text-black/80 hover:border-black hover:text-black"
      aria-label="Toggle color theme"
    >
      {isDark ? 'Switch to Light' : 'Switch to Dark'}
    </motion.button>
  );
}

function App() {
  const prefersDark = useMemo(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
    []
  );

  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      return stored === 'dark';
    }
    return prefersDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-black antialiased transition-colors duration-500 dark:bg-black dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          animate={{ x: [0, 20, -10, 0], y: [0, -15, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-black/5 blur-3xl dark:bg-white/10"
        />
        <motion.div
          animate={{ x: [0, -15, 10, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 bottom-12 h-64 w-64 rounded-full bg-black/10 blur-3xl dark:bg-white/5"
        />

        {glitter.map((spark, index) => (
          <motion.span
            key={spark.top + spark.left}
            className="absolute h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/70"
            style={{ top: spark.top, left: spark.left }}
            animate={{ opacity: [0.1, 1, 0.2], scale: [0.7, 1.35, 0.8] }}
            transition={{
              duration: spark.duration,
              delay: spark.delay,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-8 py-10 md:px-20 lg:px-28 md:py-16">
function App() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 md:px-12 md:py-16">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6 border-b border-black/20 pb-10 dark:border-white/20"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-widePlus text-black/60 dark:text-white/60">Cloud & DevOps Engineer</p>
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark((prev) => !prev)} />
          </div>
          <motion.h1
            className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            Building resilient cloud systems with clean automation.
          </motion.h1>
          <p className="max-w-2xl text-base text-black/70 md:text-lg dark:text-white/70">
            I design infrastructure, CI/CD workflows, and observability systems that help product teams ship faster with confidence.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-black px-5 py-2 transition dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            >
              View Projects
            </motion.a>
            <motion.a
              href="mailto:you@example.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-black/40 px-5 py-2 text-black/80 transition hover:border-black hover:text-black dark:border-white/40 dark:text-white/80 dark:hover:border-white dark:hover:text-white"
            >
              Contact
            </motion.a>
          className="space-y-6 border-b border-white/20 pb-10"
        >
          <p className="text-xs uppercase tracking-widePlus text-white/60">Cloud & DevOps Engineer</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Building resilient cloud systems with clean automation.
          </h1>
          <p className="max-w-2xl text-base text-white/70 md:text-lg">
            I design infrastructure, CI/CD workflows, and observability systems that help product teams ship faster with confidence.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm">
            <a href="#projects" className="rounded-full border border-white px-5 py-2 transition hover:bg-white hover:text-black">
              View Projects
            </a>
            <a href="mailto:you@example.com" className="rounded-full border border-white/40 px-5 py-2 text-white/80 transition hover:border-white hover:text-white">
              Contact
            </a>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xs uppercase tracking-widePlus text-black/50 dark:text-white/50">Core Stack</h2>
          <h2 className="text-xs uppercase tracking-widePlus text-white/50">Core Stack</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                whileHover={{ y: -2, scale: 1.03 }}
                className="rounded-full border border-black/40 px-4 py-2 text-sm text-black/90 dark:border-white/40 dark:text-white/90"
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="rounded-full border border-white/40 px-4 py-2 text-sm text-white/90"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <section id="projects" className="space-y-6">
          <h2 className="text-xs uppercase tracking-widePlus text-black/50 dark:text-white/50">Selected Work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group flex h-full flex-col justify-between gap-5 border border-black/15 bg-white/50 p-5 transition hover:border-black/45 dark:border-white/15 dark:bg-black/40 dark:hover:border-white/45"
                >
                  <div className="space-y-3">
                    <motion.h3 className="text-xl font-medium" whileHover={{ x: 2 }}>
                      {project.title}
                    </motion.h3>
                    <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">{project.description}</p>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-black/50 dark:text-white/50">{project.stack}</p>
                </motion.article>
              ))}
            </AnimatePresence>
          <h2 className="text-xs uppercase tracking-widePlus text-white/50">Selected Work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group flex h-full flex-col justify-between gap-5 border border-white/15 p-5 transition hover:border-white/45"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{project.description}</p>
                </div>
                <p className="text-xs uppercase tracking-widest text-white/50">{project.stack}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-black/20 pt-8 text-sm text-black/60 dark:border-white/20 dark:text-white/60"
          className="border-t border-white/20 pt-8 text-sm text-white/60"
        >
          <p>Available for remote opportunities • 2026</p>
        </motion.footer>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
