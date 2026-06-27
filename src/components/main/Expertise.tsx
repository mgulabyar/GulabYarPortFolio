import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Layers, Sparkles, ArrowUpRight } from "lucide-react";
import expertiseImg from "../../assets/expertise.png";
import officeGif from "../../assets/microsoft-365.png";
import googleGif from "../../assets/google-workspace.png";
import webEngineeringImg from "../../assets/web-development.png";
import wordIcon from "../../assets/word.png";
import excelIcon from "../../assets/excel.png";
import pptIcon from "../../assets/powerpoint.png";
import outlookIcon from "../../assets/outlook.png";
import officeIcon from "../../assets/office.png";
import gmailIcon from "../../assets/gmail.png";
import sheetsIcon from "../../assets/google-sheets.png";
import docsIcon from "../../assets/google-docs.png";
import slidesIcon from "../../assets/slides.png";
import calendarIcon from "../../assets/google-calendar.png";
import reactIcon from "../../assets/python.png";
import nextjsIcon from "../../assets/nextjs.png";
import nodejsIcon from "../../assets/node.png";
import tsIcon from "../../assets/react.png";
import aspnetIcon from "../../assets/.net.png";
import Footer from "../Footer/Footer";
export default function Expertise() {
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

  const slowSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  // asdfand
  return (
    <section
      id="expertise"
      className="pt-20 pb-8 sm:pt-30 sm:pb-12 lg:pt-30 lg:pb-16 flex flex-col justify-between select-none border-t border-white/5"
    >
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full px-6 md:px-12"
      >
        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.h2
            variants={slowSlideLeft}
            className="text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight"
          >
            My Technical <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange via-brand-orange to-brand-amber">
              Expertise & Core Skills
            </span>
          </motion.h2>

          <motion.p
            variants={slowSlideLeft}
            className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-light"
          >
            With over 4 years of dedicated industry experience, I specialize in
            architecting highly scalable full-stack web platforms and
            engineering secure workspace extensions. I design advanced MS Office
            Add-ins, Google Workspace add-ons, and dynamic background VBA/Macros
            that directly optimize enterprise workflows and eliminate thousands
            of lost manual work hours.
          </motion.p>

          <motion.div
            variants={slowSlideLeft}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          >
            <div className="pt-4 transition-all duration-300 flex items-center gap-3 group cursor-pointer">
              <Code2 className="h-5 w-5 text-brand-orange group-hover:scale-110 transition-transform duration-300 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Full Stack Web Dev
              </span>
            </div>

            <div className="pt-4 transition-all duration-300 flex items-center gap-3 group cursor-pointer">
              <Cpu className="h-5 w-5 text-brand-orange group-hover:scale-110 transition-transform duration-300 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Office Add-ins
              </span>
            </div>

            <div className="pt-4 transition-all duration-300 flex items-center gap-3 group cursor-pointer">
              <Layers className="h-5 w-5 text-brand-orange group-hover:scale-110 transition-transform duration-300 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Google Automation
              </span>
            </div>

            <div className="pt-4 transition-all duration-300 flex items-center gap-3 group cursor-pointer">
              <Zap className="h-5 w-5 text-brand-orange group-hover:scale-110 transition-transform duration-300 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                AI API Integrations
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <img
            src={expertiseImg}
            alt="Expertise and Skills"
            className="w-full h-auto max-h-110 object-contain brightness-[0.95]"
            onError={(e) => {
              e.currentTarget.src =
                "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTV6ajZqYml2ajIxdXpqdjEydzhwOHp3dHYzajZpOXMxbzh0bXZ4cyZjdD1n/dhovVfEDgq864Tq9O0/giphy.gif";
            }}
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full px-6 md:px-12"
      >
        <div className="lg:col-span-7 flex flex-col gap-5">
          <motion.div
            variants={slowSlideLeft}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold max-w-max"
          >
            <Sparkles className="h-5 w-5" />
            Microsoft 365 Integration
          </motion.div>

          <motion.h3
            variants={slowSlideLeft}
            className="text-2xl sm:text-5xl font-bold text-white leading-tight tracking-tight"
          >
            MS Office 365 <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
              Add-ins Engineering
            </span>
          </motion.h3>

          <motion.p
            variants={slowSlideLeft}
            className="text-base text-slate-400 leading-relaxed max-w-2xl font-light"
          >
            I design and build secure, high-fidelity office add-ins built with
            JavaScript (Office.js) that directly compile web applications inside
            standard Office platforms. This allows you to supercharge Word,
            Excel, Outlook, and PowerPoint, connecting them natively with cloud
            databases and external third-party APIs.
          </motion.p>

          <motion.div variants={slowSlideLeft} className="mt-2">
            <Link
              to="/contact"
              className="relative overflow-hidden px-5 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer max-w-max"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-center ease-out"></span>
              <span className="z-10">Discuss Office Project</span>
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
            src={officeGif}
            alt="Office Add-ins Development"
            className="w-full h-auto max-h-88 object-contain brightness-[0.95]"
            onError={(e) => {
              e.currentTarget.src =
                "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p0eDZzMHZscjM4eTdqYzNhdjMyZXpxczVqdndpcTV5aGFzMHlzNSZjdD1n/qgQUggAC3PfvGTJVPQ/giphy.gif";
            }}
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center gap-2 px-6 md:px-12"
      >
        <motion.h3
          variants={slowSlideUp}
          className="text-xl sm:text-2xl font-extrabold text-white tracking-widest uppercase text-center sm:text-left w-full mb-4"
        >
          Supported Office Modules
        </motion.h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 w-full mt-4">
          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={excelIcon}
              alt="Excel Add-in Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Excel Add-ins
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Automate reports, import data, create dashboards and streamline
              complex spreadsheet tasks.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Excel Add-in Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={wordIcon}
              alt="Word Add-in Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Word Add-ins
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Generate documents, automate formatting and integrate with your
              business systems.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Word Add-in Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={pptIcon}
              alt="PowerPoint Add-in Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              PowerPoint Add-ins
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Create stunning presentations, automate slides and save hours of
              manual work.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              PPT Add-in Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={outlookIcon}
              alt="Outlook Add-in Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282019%E2%80%93present%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Outlook Add-ins
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Enhance email productivity with CRM integration, templates,
              automation and more.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Outlook Add-in Development{" "}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={officeIcon}
              alt="Office Add-in Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/1/11/Microsoft_Office_logo_%282013%E2%80%932019%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Office 365 Suite
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Custom multi-platform solutions connecting Word, Excel,
              PowerPoint, and Outlook to secure APIs.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Office Add-in Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full px-6 md:px-12"
      >
        <motion.div
          variants={slowSlideLeft}
          className="lg:col-span-5 flex justify-center items-center relative lg:order-1"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <img
            src={googleGif}
            alt="Google Workspace Extensions"
            className="w-full h-auto max-h-90 object-contain brightness-[0.95]"
            onError={(e) => {
              e.currentTarget.src =
                "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p0eDZzMHZscjM4eTdqYzNhdjMyZXpxczVqdndpcTV5aGFzMHlzNSZjdD1n/qgQUggAC3PfvGTJVPQ/giphy.gif";
            }}
          />
        </motion.div>

        <div className="lg:col-span-7 flex flex-col gap-5 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold max-w-max">
            <Sparkles className="h-5 w-5" />
            Google Workspace Integration
          </div>

          <h3 className="text-2xl sm:text-5xl font-bold text-white">
            Google Workspace <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
              Add-ons & Scripts
            </span>
          </h3>

          <p className="text-base text-slate-400 leading-relaxed max-w-2xl font-light">
            I build enterprise-grade add-ons for the entire Google Suite,
            deploying modern custom Apps Script architectures. My solutions
            natively integrate Gmail, Google Sheets, Google Docs, and Google
            Forms with server-side REST APIs, secure cloud databases, and
            advanced automated workflow triggers.
          </p>

          <div className="mt-2">
            <Link
              to="/contact"
              className="relative overflow-hidden px-5 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer max-w-max"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-center ease-out"></span>
              <span className="z-10">Discuss Google Project</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center gap-2 px-6 md:px-12"
      >
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-widest uppercase text-center sm:text-left w-full mb-4">
          Supported Google Workspace Modules
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 w-full mt-4">
          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={gmailIcon}
              alt="Gmail Add-on Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_Icon_%282020%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Gmail Add-ons
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Build custom sidebars, automate draft creation, and integrate
              seamlessly with external CRM platforms.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Gmail Add-on Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={sheetsIcon}
              alt="Google Sheets Add-on Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Sheets Add-ons
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Automate workflows, build complex custom formulas, and sync data
              smoothly with cloud databases.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Sheets Add-on Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={docsIcon}
              alt="Google Docs Add-on Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Docs Add-ons
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Generate automatic reports, apply templates dynamically, and
              streamline collaborative writing.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Docs Add-on Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={slidesIcon}
              alt="Google Slides Add-on Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/f/fe/Google_Slides_logo_%282014-2020%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Slides Add-ons
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Automate presentation builds, populate slides with dynamic server
              data, and auto-format layouts.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Slides Add-on Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={calendarIcon}
              alt="Google Calendar Add-on Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              Calendar Add-ons
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Sync external schedules, manage client bookings dynamically, and
              automate meeting notifications.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Cal Add-on Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full px-6 md:px-12"
      >
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold max-w-max">
            <Sparkles className="h-5 w-5" />
            Full-Stack Web Architectures
          </div>

          <h3 className="text-2xl sm:text-5xl font-bold text-white leading-tight">
            High-Performance <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange to-brand-amber">
              Web Engineering
            </span>
          </h3>

          <p className="text-base text-slate-400 leading-relaxed max-w-2xl font-light">
            I build highly interactive frontends coupled with secure backends. I
            engineer scalable single-page apps and server-side systems with
            absolute focus on logic safety, speed benchmarks, and user journey
            flows.
          </p>

          <div className="mt-2">
            <Link
              to="/contact"
              className="relative overflow-hidden px-5 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 group cursor-pointer max-w-max"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-center ease-out"></span>
              <span className="z-10">Discuss Web Project</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <motion.div
          variants={slowSlideRight}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-brand-orange/5 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
          <img
            src={webEngineeringImg}
            alt="Web Engineering"
            className="w-full h-auto max-h-110 object-contain brightness-[0.95]"
            onError={(e) => {
              e.currentTarget.src =
                "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3p0eDZzMHZscjM4eTdqYzNhdjMyZXpxczVqdndpcTV5aGFzMHlzNSZjdD1n/qgQUggAC3PfvGTJVPQ/giphy.gif";
            }}
          />
        </motion.div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center gap-2 px-6 md:px-12"
      >
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-widest uppercase text-center sm:text-left w-full mb-4">
          Supported Web Frameworks
        </h3>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 w-full mt-4">
          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={reactIcon}
              alt="React App Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">Python</span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Build high-performance backends, automate complex data parsing,
              and integrate AI APIs smoothly.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Python Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={nextjsIcon}
              alt="Next.js App Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">Next.js</span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Develop lightning-fast, SEO-optimized, server-side rendered modern
              web applications.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Next.js Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={nodejsIcon}
              alt="Node.js App Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">Node.js</span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Design lightweight, highly scalable, and secure asynchronous
              backend event architectures.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              Node.js Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={tsIcon}
              alt="TypeScript App Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">React</span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Engineer dynamic, highly responsive user interfaces with modular
              component structures.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              React Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-glow-soft transition-all duration-500 flex flex-col items-start text-left group cursor-pointer"
          >
            <img
              src={aspnetIcon}
              alt="ASP.NET Core App Development"
              className="h-12 w-12 object-contain mb-4 filter brightness-[0.95] group-hover:scale-105 transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg";
              }}
            />
            <span className="text-lg font-bold text-white mb-2">
              ASP.NET Core
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
              Deliver secure, robust, and highly optimized enterprise web APIs
              and enterprise backends.
            </p>
            <span className="text-xs font-semibold text-brand-orange/90 hover:text-brand-orange mt-auto transition-colors duration-300 flex items-center gap-1">
              ASP.NET Core Development <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </section>
  );
}
