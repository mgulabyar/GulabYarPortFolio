import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { projects, type Project } from '../data/projectsData';
import Footer from '../Footer/Footer';
export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const project: Project | undefined = projects.find(p => p._id === id);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) return <div className="h-screen flex items-center justify-center text-white">PROJECT NOT FOUND</div>;

  const nextImage = () => setCarouselIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCarouselIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <div className="grow pt-30 pb-20 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors mb-12 uppercase text-[10px] font-black tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Showcase
          </Link>
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-black uppercase mb-4">{project.title}</h1>
            <p className="text-brand-orange text-lg md:text-xl font-bold italic opacity-80">{project.tagline}</p>
          </div>

          <div className="bg-slate-900/30 border border-white/10 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-8 md:p-8 flex flex-col justify-center order-2 lg:order-1">
               <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{project.category}</h3>
               <p className="text-slate-400 text-lg leading-relaxed font-light mb-10">{project.description}</p>
               
               <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-4">Skills and deliverables</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs font-bold text-slate-300 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-black/40 relative flex items-center justify-center p-10 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={carouselIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                    src={project.images[carouselIndex]} className="w-full h-full object-contain drop-shadow-3xl min-h-75" 
                  />
                </AnimatePresence>
                <div className="absolute inset-x-6 flex justify-between">
                   <button onClick={prevImage} className="p-2 rounded-full bg-brand-orange/90 text-white shadow-glow-orange cursor-pointer border border-white/10"><ChevronLeft size={24}/></button>
                   <button onClick={nextImage} className="p-2 rounded-full bg-brand-orange/90 text-white shadow-glow-orange cursor-pointer border border-white/10"><ChevronRight size={24}/></button>
                </div>
            </div>
          </div>
        </div>
        {/* dir */}
      </div>
      <Footer />
    </div>
  );
}