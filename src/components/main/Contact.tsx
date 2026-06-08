import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, ShieldCheck, Clock, Building, Calendar } from 'lucide-react';
import contactImg from '../../assets/Voice chat-amico.png';
import Footer from '../Footer/Footer';

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Contact() {
  const easeOutExpo = [0.16, 1, 0.3, 1] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2 
      }
    }
  };

  const slowSlideLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: easeOutExpo },
    },
  };

  const slowSlideRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: easeOutExpo },
    },
  };

  const slowSlideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.4, ease: easeOutExpo },
    },
  };

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: easeOutExpo },
    },
  };

  return (
    <section id="contact" className="pt-20 px-4 md:12 border-t border-white/5 select-none overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col gap-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-6 md:px-12">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <motion.h2 
              variants={slowSlideLeft}
              className="text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight"
            >
              Let's talk about <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
                everything!
              </span>
            </motion.h2>
            <motion.p 
              variants={slowSlideLeft}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-light"
            >
              Have questions or need assistance with your digital transformation? I am here to help you design, build, and deploy automated software solutions tailored perfectly to your requirements. Feel free to connect directly through WhatsApp, Email, or visit our headquarters.
            </motion.p>
          </div>

          <motion.div 
            variants={slowSlideRight}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
            <img
              src={contactImg}
              alt="GulabYar Support Workflow"
              className="w-full h-auto max-h-92 object-contain brightness-[0.95]"
              onError={(e) => {
                e.currentTarget.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJuYzJ1Z3h6dXVzcnlhMzk5M2xjdjV0dHF0OHdtOWx1eG91cmRndCZjdD1n/6ozwFj8tCdxpG7gA5D/giphy.gif";
              }}
            />
          </motion.div>
        </div>

        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="w-full flex flex-col items-center gap-2 px-6 md:px-12">
          <motion.h3 
            variants={slowSlideUp}
            className="text-2xl sm:text-4xl font-bold text-white text-center tracking-tight"
          >
            Get in Touch Directly
          </motion.h3>
          
          <motion.p 
            variants={slowSlideUp}
            className="text-xs sm:text-sm text-slate-400 text-center max-w-lg mx-auto leading-relaxed mb-6 font-light"
          >
            Connect through my verified channels for direct enterprise consultations, project estimations, or workspace automation support.
          </motion.p>

          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 w-full mt-4"
          >
            <motion.div
              variants={cardItemVariants}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center gap-3 text-center group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">
                Direct Connect
              </span>
              <a
                href="mailto:mgulabyaarmgulabyaar@gmail.com"
                className="text-sm font-bold text-white hover:text-brand-orange transition-colors duration-200"
              >
                mgulabyaarmgulabyaar@gmail.com
              </a>
              <a
                href="https://wa.me/923468016921"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-slate-300 hover:text-brand-orange transition-colors duration-200 flex items-center gap-1.5 justify-center"
              >
                <WhatsappIcon className="h-4 w-4 text-green-500 filter drop-shadow-[0_0_4px_#22C55E]" />
                <span className="text-xs text-slate-400 font-semibold">
                  WhatsApp
                </span>
                +92 346 8016921
              </a>
            </motion.div>

            <motion.div
              variants={cardItemVariants}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center gap-3 text-center group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <Building className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">
                Headquarters
              </span>
              <span className="text-sm font-bold text-white">
                Moazzam Abad, Sargodha
              </span>
              <span className="text-xs text-slate-400 font-semibold flex items-center gap-1 justify-center">
                Automation Engineer at Addin Expert
              </span>
            </motion.div>

            <motion.div
              variants={cardItemVariants}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center gap-3 text-center group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">
                Response SLA
              </span>
              <span className="text-sm font-bold text-white">
                Within 24 Hours
              </span>
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1 justify-center">
                <ShieldCheck className="h-4 w-4 text-brand-orange" />
                Direct Developer Guaranteed Review
              </span>
            </motion.div>

            <motion.div
              variants={cardItemVariants}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center gap-3 text-center group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">
                Active Booking
              </span>
              <span className="text-sm font-bold text-white">
                Mon - Fri: 9AM - 6PM
              </span>
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1 justify-center">
                <Clock className="h-4 w-4 text-brand-orange" />
                Standby Emergency Support Active
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <Footer/>
    </section>
  );
} 
 
 
 
 
 
 
