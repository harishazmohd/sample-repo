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

function App() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 md:px-12 md:py-16">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
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
          <h2 className="text-xs uppercase tracking-widePlus text-white/50">Core Stack</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="rounded-full border border-white/40 px-4 py-2 text-sm text-white/90"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <section id="projects" className="space-y-6">
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
