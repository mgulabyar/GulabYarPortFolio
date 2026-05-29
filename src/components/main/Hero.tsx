import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Code,
  Cpu,
  ShieldCheck,
  Zap,
  Award,
  Users,
  Activity,
  Sparkles,
} from "lucide-react";
import profileImg from "../../assets/profile.png";
import Footer from "../Footer/Footer";

export default function Hero() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setProfile(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const defaultProfile = {
    name: "Muhammad Gulab Yar",
    title: "Full-Stack Web Developer & Automation Expert",
    bio: "I am a professional Full-Stack Developer with 4 years of solid industry experience specializing in the MERN stack, Python, ASP.NET Core, and Angular. My core expertise lies in designing highly scalable custom web architectures, complex MS Office Add-ins built with Office.js, Google Workspace Add-ons, and dynamic VBA/Macros. I specialize in bridging the gap between secure cloud databases and automated workflows, integrating smart AI APIs, and delivering fast, automated business ecosystems.",
    email: "mgulabyaarmgulabyaar@gmail.com",
    resumeUrl: "https://example.com/assets/gulab-yar-resume.pdf",
    contactUrl: "/contact",
  };

  const data = profile || defaultProfile;
  const techStack = [
    "ASP.NET Core",
    "React",
    "Google Workspace Add-ons",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Python",
    "VBA Macros",
    "Office.js",
    "Apps Script",
    "OpenAI API",
    "PostgreSQL",
    "Next.js",
    "Tailwind CSS",
    "Azure",
    "GitHub CI/CD",
  ];

  const easeOutExpo = [0.16, 1, 0.3, 1] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2 
      },
    },
  };

  const slowSlideLeft: Variants = {
    hidden: { opacity: 0, x: -35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.8, ease: easeOutExpo },
    },
  };

  const slowSlideRight: Variants = {
    hidden: { opacity: 0, x: 35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.8, ease: easeOutExpo },
    },
  };

  const slowSlideUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: easeOutExpo },
    },
  };

  const cardContainerVariants: Variants = {
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
      transition: { duration: 1.4, ease: easeOutExpo },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2, ease: easeOutExpo } },
  };

  return (
    <section
      id="home"
      className="pt-20 pb-8 sm:pt-30 sm:pb-12 lg:pt-30 lg:pb-16 flex flex-col justify-between select-none overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full"
      >
        <motion.div
          variants={slowSlideLeft}
          className="lg:col-span-5 flex justify-center relative group"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-brand-orange/15 to-brand-amber/5 rounded-2xl blur-3xl -z-10"></div>
          <div className="relative w-full max-w-80 md:max-w-86 rounded-2xl overflow-hidden border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_30px_rgba(255,85,0,0.1)] transition-[border-color,box-shadow,filter] duration-700 ease-out p-1 bg-slate-900/40">
            <img
              src={data.avatarUrl || profileImg}
              alt={data.name}
              className="w-full h-auto object-cover rounded-xl filter brightness-[0.95] group-hover:brightness-100 transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.01]"
              onError={(e) => {
                e.currentTarget.src = profileImg;
              }}
            />
          </div>
        </motion.div>

        <div className="lg:col-span-7 px-6 md:px-12 flex flex-col gap-4">
          <motion.h1
            variants={slowSlideRight}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight"
          >
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-orange via-brand-orange to-brand-amber">
              {data.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={slowSlideRight}
            className="text-lg sm:text-xl font-bold text-slate-200 tracking-wide"
          >
            {data.title}
          </motion.h2>

          <motion.p
            variants={slowSlideUp}
            className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed font-light"
          >
            {data.bio}
          </motion.p>

          <motion.div
            variants={slowSlideUp}
            className="flex flex-wrap items-center gap-4 mt-3"
          >
            <Link
              to={data.contactUrl || "/contact"}
              className="relative overflow-hidden px-5 py-2.5 rounded-lg border border-brand-orange text-white font-bold text-sm tracking-wide transition-[border-color,box-shadow] duration-500 flex items-center gap-2 group cursor-pointer hover:shadow-[0_0_20px_rgba(255,85,0,0.25)]"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 -translate-x-full group-hover:translate-x-0 ease-out"></span>
              <span className="z-10">Hire Me Today</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </Link>

            <a
              href="https://wa.me/923468016921?text=Hi%20Gulab%20Yar,%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="relative overflow-hidden px-5 py-2.5 rounded-lg border border-white/10 text-white font-bold text-sm tracking-wide transition-[border-color,box-shadow] duration-500 flex items-center gap-2 group cursor-pointer hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-brand-orange/20 to-brand-amber/20 -z-10 transition-transform duration-500 translate-x-full group-hover:translate-x-0 ease-out"></span>
              <span className="z-10">Schedule Call</span>
              <ArrowUpRight className="h-4 w-4 z-10 group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="px-6 md:px-12 flex flex-col items-center gap-2"
      >
        <motion.h3
          variants={cardItemVariants}
          className="text-2xl sm:text-5xl font-bold text-white text-center tracking-tight"
        >
          Delivering Measured Business Impact
        </motion.h3>

        <motion.p
          variants={cardItemVariants}
          className="text-xs sm:text-lg text-slate-400 text-center max-w-lg mx-auto leading-relaxed mb-4 font-light tracking-wide"
        >
          Proven performance metrics reflecting years of specialized automation and scalable full-stack development.
        </motion.p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 w-full mt-4">
          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,85,0,0.12)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center gap-2 text-center group cursor-pointer"
          >
            <Award className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-white tracking-wide">04+ Years</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Tech Journey</span>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,85,0,0.12)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center gap-2 text-center group cursor-pointer"
          >
            <Code className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-white tracking-wide">50+ Apps</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Built Worldwide</span>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,85,0,0.12)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center gap-2 text-center group cursor-pointer"
          >
            <Cpu className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-white tracking-wide">10k+ Hours</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Manual Work Saved</span>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,85,0,0.12)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center gap-2 text-center group cursor-pointer"
          >
            <Users className="h-8 w-8 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black text-white tracking-wide">99% Client</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Satisfaction & Trust</span>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="px-6 md:px-12 flex flex-col items-center gap-2"
      >
        <motion.h3
          variants={cardItemVariants}
          className="text-2xl sm:text-5xl font-bold text-white text-center tracking-tight"
        >
          Specialized Engineering Solutions
        </motion.h3>

        <motion.p
          variants={cardItemVariants}
          className="text-xs sm:text-lg text-slate-400 text-center max-w-lg mx-auto leading-relaxed mb-4 font-light tracking-wide"
        >
          Customized technical execution focused on workflow acceleration and system scalability.
        </motion.p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 w-full mt-4">
          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_25px_rgba(255,85,0,0.1)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center text-center gap-3 group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Code className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-white group-hover:text-brand-orange transition-colors duration-300 tracking-wide">
              Full-Stack MERN Architectures
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-xs">
              Designing robust, highly responsive, and database-secured custom web portals utilizing modern server side models.
            </p>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_25px_rgba(255,85,0,0.1)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center text-center gap-3 group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Cpu className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-white group-hover:text-brand-orange transition-colors duration-300 tracking-wide">
              Office & Workspace Add-ins
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-xs">
              Building tailored enterprise tools with Office.js for Outlook, Word, Excel, and dynamic Google Apps Script add-ons.
            </p>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_25px_rgba(255,85,0,0.1)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col items-center text-center gap-3 group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="text-base font-extrabold text-white group-hover:text-brand-orange transition-colors duration-300 tracking-wide">
              Intelligent AI & VBA Automations
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-xs">
              Eliminating manual business operations by connecting advanced OpenAI/GPT APIs with complex background script engines.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="w-full h-px bg-linear-to-r via-white/10 to-transparent my-16"></div>

      <motion.div
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="px-6 md:px-12 flex flex-col items-center gap-2"
      >
        <motion.h3
          variants={cardItemVariants}
          className="text-2xl sm:text-5xl font-bold text-white text-center tracking-tight"
        >
          The Enterprise Advantage
        </motion.h3>

        <motion.p
          variants={cardItemVariants}
          className="text-xs sm:text-lg text-slate-400 text-center max-w-lg mx-auto leading-relaxed mb-4 font-light tracking-wide"
        >
          Why global clients and companies trust our automated development blueprints.
        </motion.p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 w-full mt-4">
          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,85,0,0.1)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col gap-2 text-center items-center group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Activity className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mt-2 tracking-wide">
              Strict SLA Timelines
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-xs">
              Every single development roadmap is strictly aligned with pre-planned sprint cycles to guarantee standard delivery.
            </p>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,85,0,0.1)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col gap-2 text-center items-center group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mt-2 tracking-wide">
              Elite System Security
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-xs">
              Implementing strict NoSQL query filters, HPP guards, rate limits, and SSL API routing protection protocols.
            </p>
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            className="p-6 rounded-xl bg-slate-900/40 border border-white/5 hover:border-brand-orange/30 hover:shadow-[0_0_20px_rgba(255,85,0,0.1)] transition-[border-color,box-shadow,background-color] duration-500 ease-out flex flex-col gap-2 text-center items-center group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-brand-orange transition-colors duration-300 mt-2 tracking-wide">
              Dynamic Control Hub
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-xs">
              Configured with global dynamic CMS models allowing fast data switching without requiring raw code recompilation.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-12 mt-24 border-t border-b border-white/5 py-4 overflow-hidden relative"
      >
        <div className="absolute left-0 top-0 h-full w-20 bg-linear-to-r from-brand-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-brand-dark to-transparent z-10"></div>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap gap-12 w-max"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-brand-orange filter drop-shadow-[0_0_4px_#FF5500]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 select-none">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </section>
  );
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
