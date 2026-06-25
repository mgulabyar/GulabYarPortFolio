import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Layers, Shield, Cpu } from "lucide-react";
import aboutImg from "../../assets/about.png";
import webGif from "../../assets/web-development-amico.png";
import aiGif from "../../assets/artificial-intelligence-amico.png";
import cloudGif from "../../assets/cloud-hosting-amico.png";
import Footer from "../Footer/Footer";
// asfand footer cloudGif
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const slowSlideLeft = {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: [0.25, 0.8, 0.25, 1] as const },
    },
  };

  const slowSlideRight = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: [0.25, 0.8, 0.25, 1] as const },
    },
  };

  return (
    <section id="about" className="py-20 select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 md:px-12"
      >
        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.h2
            variants={slowSlideLeft}
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight"
          >
            Architecting Web Ecosystems <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
              & Software Automation
            </span>
          </motion.h2>

          <motion.p
            variants={slowSlideLeft}
            className="text-base text-slate-400 max-w-2xl leading-relaxed"
          >
            My development philosophy is focused on eliminating manual business
            bottlenecks. I engineer high-performance web applications integrated
            seamlessly with custom Office/Google macros, automated database
            pipelines, and smart AI interfaces.
          </motion.p>

          <motion.div
            variants={slowSlideLeft}
            className="flex flex-col gap-3 mt-2"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
              <span className="text-sm font-medium text-slate-200">
                Web-Powered MS Office Add-ins (Office.js) & Legacy VBA Macros
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
              <span className="text-sm font-medium text-slate-200">
                Custom Google Workspace Add-ons & Automated Apps Script
                Workflows
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
              <span className="text-sm font-medium text-slate-200">
                Full-Stack Web Architectures Integrated with OpenAI/ChatGPT APIs
              </span>
            </div>
          </motion.div>

          <motion.div variants={slowSlideLeft} className="mt-2">
            <Link
              to="/contact"
              className="relative overflow-hidden px-5 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer max-w-max"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-b from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 -translate-y-full group-hover:translate-y-0 ease-out"></span>
              <span className="z-10">Optimize Your Workflow</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <img
            src={aboutImg}
            alt="Automation Workflow"
            className="w-full h-auto max-h-105 object-contain brightness-[0.95]"
            onError={(e) => {
              e.currentTarget.src =
                "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p0eDZzMHZscjM4eTdqYzNhdjMyZXpxczVqdndpcTV5aGFzMHlzNSZjdD1n/qgQUggAC3PfvGTJVPQ/giphy.gif";
            }}
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-1 bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 md:px-12"
      >
        <motion.div
          variants={slowSlideLeft}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <img
            src={webGif}
            alt="Web Engineering"
            className="w-full h-auto max-h-98 object-contain"
          />
        </motion.div>

        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.div
            variants={slowSlideRight}
            className="flex items-center gap-2 select-none"
          >
            <Layers className="h-5 w-5 text-brand-orange filter drop-shadow-[0_0_4px_#FF5500]" />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              Core Frameworks
            </span>
          </motion.div>

          <motion.h3
            variants={slowSlideRight}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            High-Performance{" "}
            <span className="text-brand-orange">Web Engineering</span>
          </motion.h3>

          <motion.p
            variants={slowSlideRight}
            className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-light"
          >
            I engineer highly responsive single-page web portals using modern
            React-Vite and Next.js framework engines. My custom frontends are
            coupled with optimized server-side Node.js and ASP.NET Core
            environments, ensuring absolute data safety, lightning-fast
            rendering speeds, and buttery-smooth user transitions. By deploying
            optimized state management and structured RESTful APIs, I translate
            complex enterprise designs into fluid, modern production-grade web
            systems.
          </motion.p>

          <motion.div
            variants={slowSlideRight}
            className="flex flex-wrap gap-2 mt-2"
          >
            {[
              "React",
              "Next.js",
              "Angular",
              "Node.js",
              "TypeScript",
              "ASP.NET Core",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800/80 hover:border-brand-orange/40 hover:bg-brand-orange/5 hover:text-brand-orange hover:scale-105 px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer select-none"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full h-1 bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 md:px-12"
      >
        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.div
            variants={slowSlideLeft}
            className="flex items-center gap-2 select-none"
          >
            <Cpu className="h-5 w-5 text-brand-orange filter drop-shadow-[0_0_4px_#FF5500]" />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              Workflow Systems
            </span>
          </motion.div>

          <motion.h3
            variants={slowSlideLeft}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            Smart Automation{" "}
            <span className="text-brand-orange">& AI Integration</span>
          </motion.h3>

          <motion.p
            variants={slowSlideLeft}
            className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-light"
          >
            By connecting custom-built background script engines with advanced
            OpenAI/ChatGPT models, I build intelligent systems that dynamically
            automate repetitive manual tasks. My workflows supercharge everyday
            operations by connecting Word, Excel, Outlook, and Google assets
            into synchronized cloud triggers. I design custom GPT-driven
            workflows that auto-draft emails, parse complex spreadsheets, and
            automate calculations, eliminating thousands of lost manual hours.
          </motion.p>

          <motion.div
            variants={slowSlideLeft}
            className="flex flex-wrap gap-2 mt-2"
          >
            {[
              "Google Apps Script",
              "Office.js",
              "VBA Macros",
              "OpenAI API",
              "Python Flask",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800/80 hover:border-brand-orange/40 hover:bg-brand-orange/5 hover:text-brand-orange hover:scale-105 px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer select-none"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-2xl animate-pulse"></div>
          <img
            src={aiGif}
            alt="Automation Systems"
            className="w-full h-auto max-h-90 object-contain brightness-[0.95]"
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-1 bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 md:px-12"
      >
        <motion.div
          variants={slowSlideLeft}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <img
            src={cloudGif}
            alt="Cloud Architecture"
            className="w-full h-auto max-h-98 object-contain brightness-[0.95]"
          />
        </motion.div>

        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.div
            variants={slowSlideRight}
            className="flex items-center gap-2 select-none"
          >
            <Shield className="h-5 w-5 text-brand-orange filter drop-shadow-[0_0_4px_#FF5500]" />
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              Cloud Pipelines
            </span>
          </motion.div>

          <motion.h3
            variants={slowSlideRight}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            Database Architecture{" "}
            <span className="text-brand-orange">& DevOps Cloud</span>
          </motion.h3>

          <motion.p
            variants={slowSlideRight}
            className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-light"
          >
            I design highly secure, normalized relational maps (SQL Server,
            PostgreSQL) and dynamic document models (MongoDB) built on secure
            cloud infrastructures like Microsoft Azure and Vercel. I establish
            completely automated, serverless DevOps pipelines that safely carry
            source datasets into live target systems with zero network
            interruptions. By integrating secure environment variables, strict
            CORS configurations, and automated GitHub Actions, I guarantee
            absolute data protection.
          </motion.p>

          <motion.div
            variants={slowSlideRight}
            className="flex flex-wrap gap-2 mt-2"
          >
            {[
              "PostgreSQL",
              "MongoDB",
              "SQL Server",
              "Azure Cloud",
              "Firebase",
              "GitHub Actions",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800/80 hover:border-brand-orange/40 hover:bg-brand-orange/5 hover:text-brand-orange hover:scale-105 px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer select-none"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
}
