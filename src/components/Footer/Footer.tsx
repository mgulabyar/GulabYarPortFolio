import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={footerVariants}
      className="w-full border-t border-white/5 bg-brand-dark/95 py-12 px-6 md:px-12 mt-16 select-none"
    >
      <div className="max-w-350 mx-auto flex flex-wrap gap-8 justify-between pb-8">
        
        <div className="flex-1 min-w-70 max-w-sm flex flex-col gap-4">
          <div className="flex items-center gap-2 select-none group">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-orange filter drop-shadow-[0_0_6px_#FF5500] transition-transform duration-700 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-black tracking-wider text-white">
              Gulab<span className="text-brand-orange">Yar</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Specializing in developing custom Office add-ins, Google add-ons, and full-stack MERN solutions to empower businesses, enhance productivity and streamline workflows.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="https://www.linkedin.com/in/m-gulab-yar-508742378/" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-glow-orange hover:scale-110">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="https://github.com/mgulabyar" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-glow-orange hover:scale-110">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://x.com/GulabYaar239" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-glow-orange hover:scale-110">
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="min-w-40 flex-1 flex flex-col gap-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Office 365 Add-ins</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Outlook add-ins</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Word add-ins</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Excel add-ins</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Powerpoint add-ins</li>
          </ul>
        </div>

        <div className="min-w-40 flex-1 flex flex-col gap-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Google add ons</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Gmail Add ons</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Google Docs Add on</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Google Sheets Add on</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Google forms Addons</li>
          </ul>
        </div>

        <div className="min-w-40 flex-1 flex flex-col gap-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Integrations</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">OpenAI / ChatGPT</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">MERN Stack APIs</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Vercel & Azure</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">CI/CD Workflows</li>
          </ul>
        </div>

        <div className="min-w-40 flex-1 flex flex-col gap-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Business</h4>
          <ul className="flex flex-col gap-2 text-sm text-slate-400">
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Microsoft Cloud</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Microsoft Security</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">Database Pipelines</li>
            <li className="hover:text-brand-orange transition-colors duration-200 cursor-pointer">VBA Macros Logic</li>
          </ul>
        </div>

      </div>

      <div className="max-w-350 mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          Copyright &copy; 2026. All rights reserved by Gulab Yar.
        </p>
        <button 
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-brand-orange/30 text-slate-400 hover:bg-brand-orange hover:text-white transition-all duration-300 cursor-pointer shadow-glow-soft hover:scale-105"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </motion.footer>
  );
}