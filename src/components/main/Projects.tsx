import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "../data/projectsData";
import Footer from "../Footer/Footer";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All Portfolio");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const filterItems: string[] = [
    "All Portfolio",
    "Office Add-ins",
    "Google Add-ons",
    "Web Development",
    "Word Add-ins",
    "Excel Add-ins",
    "PowerPoint Add-ins",
    "Outlook Add-ins",
    "Gmail Add-ons",
    "Google Sheet Add-ons",
    "Google Docs Add-ons",
    "Google Form Add-ons",
  ];

  const filteredProjects =
    selectedFilter === "All Portfolio"
      ? projects
      : projects.filter(
          (p) => p.category === selectedFilter || p.subType === selectedFilter,
        );

  const nextImage = () =>
    activeProject &&
    setCarouselIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1,
    );

  const prevImage = () =>
    activeProject &&
    setCarouselIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1,
    );

  const easeOutExpo = [0.16, 1, 0.3, 1] as const;

  const headerStaggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const headerItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: easeOutExpo },
    },
  };

  const filterContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.25, 
      },
    },
  };

  const filterItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.92, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOutExpo },
    },
  };

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOutExpo },
    },
  };

  return (
    <section
      id="projects"
      className="pt-32 pb-20 bg-brand-dark min-h-screen border-t border-white/5 relative select-none overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 max-w-350 mx-auto">
        
        <motion.div
          variants={headerStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mb-16 text-center"
        >
          <motion.h2 
            variants={headerItemVariants}
            className="text-3xl md:text-5xl font-black text-white"
          >
            My <span className="text-brand-orange">Portfolio</span>
          </motion.h2>
          <motion.p 
            variants={headerItemVariants}
            className="max-w-2xl text-slate-400 text-sm md:text-base font-medium leading-relaxed"
          >
            From custom Office add-ins and Google add-ons to high-performance
            web ecosystems built with Python, Next.js, and the MERN stack.
            Explore how I transform complex ideas into scalable, automated
            digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={filterContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-16 py-8 border-y border-white/5"
        >
          {filterItems.map((filter) => (
            <motion.button
              key={filter}
              variants={filterItemVariants}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-[12px] font-black uppercase tracking-wider transition-[background-color,border-color,color,box-shadow] duration-300 ease-out cursor-pointer border ${
                selectedFilter === filter
                  ? "bg-brand-orange border-brand-orange text-white shadow-[0_0_15px_rgba(255,85,0,0.35)]"
                  : "bg-transparent border-white/10 text-slate-400 hover:border-brand-orange/40 hover:text-brand-orange"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                variants={cardVariants}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
                className="group rounded-3xl border border-white/5 bg-slate-900/20 hover:border-brand-orange/30 overflow-hidden transition-[border-color,box-shadow,background-color] duration-500 ease-out shadow-2xl flex flex-col"
              >
                <div className="relative aspect-16/10 bg-black/40 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-contain filter brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  
                  <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-[opacity,backdrop-filter] duration-500 ease-out flex items-center justify-center gap-4 z-20">
                    <button
                      onClick={() => {
                        setActiveProject(project);
                        setCarouselIndex(0);
                      }}
                      className="px-4 py-2 rounded-md border border-white/20 text-white font-bold text-[12px] uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors duration-300 cursor-pointer"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => {
                        setActiveProject(project);
                        setCarouselIndex(0);
                      }}
                      className="px-4 py-2 rounded-md bg-brand-orange text-white border border-white/20 font-bold text-[12px] uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors duration-300 cursor-pointer"
                    >
                      Open Tab
                    </button>
                  </div>
                </div>

                <div className="p-8 bg-slate-950/40 text-center border-t border-white/5">
                  <h3 className="text-xl font-black text-white group-hover:text-brand-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-[0.2em]">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-200 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="bg-brand-dark border border-white/10 rounded-3xl w-full max-w-7xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                  {activeProject.title}
                </h3>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-slate-400 hover:text-brand-orange transition-colors duration-300 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row overflow-y-auto">
                <div className="lg:w-1/2 p-8 md:p-10 order-2 lg:order-1">
                  <h4 className="text-xl font-bold text-white mb-6">
                    {activeProject.tagline}
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light mb-8">
                    {activeProject.description}
                  </p>

                  <div className="pt-8 border-t border-white/5">
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-4">
                      Skills and deliverables
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-bold text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full transition-colors duration-300 hover:border-brand-orange/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-black/40 p-6 flex items-center justify-center relative order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5 min-h-87.5">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={carouselIndex}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -25 }}
                      transition={{ duration: 0.5, ease: easeOutExpo }}
                      src={activeProject.images[carouselIndex]}
                      alt={`${activeProject.title} slide ${carouselIndex + 1}`}
                      className="w-full h-full object-contain drop-shadow-3xl"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-x-4 flex justify-between">
                    <button
                      onClick={prevImage}
                      aria-label="Previous slide"
                      className="p-2.5 rounded-full bg-brand-orange/90 text-white shadow-[0_0_10px_rgba(255,85,0,0.3)] cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 ease-out"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next slide"
                      className="p-2.5 rounded-full bg-brand-orange/90 text-white shadow-[0_0_10px_rgba(255,85,0,0.3)] cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 ease-out"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </section>
  );
} 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
