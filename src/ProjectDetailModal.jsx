import React from 'react';
import './css/scrollbar.css';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[5000] flex items-center justify-center p-0 sm:p-4 md:p-8">
      {/* Backdrop with heavy blur */}
      <div 
        className="absolute inset-0 bg-[#05050a]/90 backdrop-blur-2xl transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-6xl h-full sm:h-auto max-h-[100vh] sm:max-h-[90vh] bg-[#0a0a16] sm:rounded-[40px] border-none sm:border sm:border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Visual Side (Sticky-like on desktop) */}
        <div className={`w-full md:w-[55%] h-[40vh] md:h-auto bg-gradient-to-br ${project.color} flex items-center justify-center p-8 relative`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <img 
            src={project.img} 
            alt={project.title} 
            className="relative z-10 w-full h-full object-contain  transform hover:scale-105 transition-transform duration-200" 
          />
          
          {/* Mobile Close Button */}
          <button 
            onClick={onClose}
            className="md:hidden absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center bg-black/40 text-white rounded-full backdrop-blur-xl border border-white/10"
          >
            ✕
          </button>
        </div>

        {/* Right: Content Side */}
        <div className="flex-1 p-8 md:p-16 overflow-y-auto project-detail-modal-scrollbar flex flex-col">
          {/* Desktop Close Button */}
          <button 
            onClick={onClose}
            className="hidden md:flex absolute top-10 right-10 w-12 h-12 items-center justify-center bg-white/5 text-white rounded-full hover:bg-white/10 transition-all border border-white/10"
          >
            ✕
          </button>

          <header className="mb-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest">
                Project
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                {project.title.split(',')[0]} {/* First tech tag */}
              </span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter italic">
              {project.title}
            </h3>
          </header>

          <div className="space-y-8 flex-1">
            {/* Project Specs Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Stack</p>
                <p className="text-sm text-slate-200 font-mono">{project.tech}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Role</p>
                <p className="text-sm text-slate-200">Lead Frontend</p>
              </div>
            </div>

            <section>
              <h4 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-4">Overview</h4>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.description || "A cutting-edge digital solution designed to streamline complex workflows. Focuses on high-performance interactions, custom-built components, and a mobile-first philosophy."}
              </p>
            </section>

            {project.features && (
            <section>
              <h4 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-4">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
            )}
           
          </div>

          {/* Action Footer */}
          <footer className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
            <a 
              href={project.liveLink || "#"} 
              target="_blank" 
              className="group flex-1 flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-purple-500 hover:text-white transition-all active:scale-95"
            >
              Launch Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href={project.github || "#"} 
              target="_blank" 
              className="flex-1 flex items-center justify-center bg-[#111122] text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] border border-white/10 hover:bg-white/5 transition-all active:scale-95"
            >
              Codebase
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;