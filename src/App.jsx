import { useState } from 'react';
import DetailSection from './DetailSection';
import realStateImg from './assets/realState.png';
import mediSyncImg from './assets/medisync.png';
import DreamScapesImg from './assets/DreamScapes.png';
import ECommerceImg from './assets/ECommerce.png';
import ProjectDetailModal from './ProjectDetailModal';
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "DreamScapes Web-Based Photo Editor",
      tech: "MERN · Vite · Tailwind CSS · Redux · Canvas API · JWT · bcrypt · Joi",
      color: "from-emerald-500 to-blue-500",
      description: "A browser-first, Canva-like photo editing platform that enables users and businesses to create, edit, and manage visual assets quickly without desktop software—reducing time-to-content and enabling cloud-backed project workflows, secure accounts, and exportable assets for marketing and product use.",
      features: [
        "Secure JWT-based authentication and user accounts",
        "Layer-based editor (move, resize, rotate, delete)",
        "Rich text with styling",
        "Brush/draw tools with adjustable size and color",
        "Crop, resize, and filter adjustments via Canvas API",
        "Undo/Redo history for safe iterative editing",
        "Save/load projects (CRUD) persisted in MongoDB",
        "High-performance, responsive UI optimized for desktop & mobile",
        "Export/download images and manage gallery items",
        "Search/import images and built-in asset library"
      ],
      img: DreamScapesImg,
      liveLink: "https://dream-scapes-frontend.vercel.app/",
      github: "https://github.com/prabh-ux/DreamScapesFrontend",
     
     
    },
{
  title: "Villager E‑commerce Store",
  tech: "MERN · Vite · TailwindCSS · JWT · bcrypt · Joi",
  color: "from-emerald-500 to-teal-500",
  description: "Full‑stack e‑commerce platform that increases conversion and reduces churn by providing secure authentication, persistent cart syncing, fast relevance-scored search, and a streamlined checkout flow — ready for production payment integration and email verification.",
  features: [
    "Secure JWT-based authentication with httpOnly cookie sessions (signup/login)",
    "Email OTP verification & transactional emails via Nodemailer",
    "Persistent server-side cart with optimistic UI updates and patch sync",
    "Advanced product search with keyword scoring, paging and fallbacks",
    "Product detail pages, reviews/ratings, and add-to-cart UX",
    "Address management and recent orders history",
    "Checkout flow that creates orders and clears cart (easy payment gateway integration)",
    "REST API (Express + Mongoose) with CORS configuration; backend deployed on Render"
  ],
  img: ECommerceImg,
  liveLink:"https://villagerclothing.vercel.app/" ,
  github: "https://github.com/prabh-ux/ECommerceWebsiteFrontend"
}




    // {
    //   title: "Elysian Estates",
    //   // Use professional sub-titles for tech
    //   tech: "React 18 • Tailwind CSS • Framer Motion • Figma",
    //   color: "from-emerald-500 to-teal-500",
    //   // Focus on Business Value in the description
    //   description: "A high-end real estate engine featuring a custom filtering architecture. Built to handle large property datasets with zero-latency search, interactive inquiry workflows, and a mobile-first premium aesthetic.",
    //   features: [
    //     "Smart Multi-Criteria Filtering",
    //     "Dynamic Price-Sorting Algorithms",
    //     "Lead-Capture Inquiry System",
    //     "High-Performance Image Optimization"
    //   ],
    //   img: realStateImg,
    //   liveLink: "https://elysian-real-states.vercel.app/",
    //   github: "https://github.com/prabh-ux/ELYSIAN-RealStates"
    // },
    // {
    //   title: "Medi Sync",
    //   tech: "React • Tailwind • Figma",
    //   color: "from-cyan-500 to-blue-500",
    //   // High-conversion description
    //   description: "An enterprise-grade healthcare management portal engineered for seamless patient-doctor connectivity. Features a proprietary appointment scheduling engine, secure medical record previews, and real-time department availability tracking.",
    //   features: [
    //     "Intuitive Patient Intake Flow",
    //     "Real-time Availability Engine",
    //     "Responsive Medical Dashboard",
    //     "Accessibility (A11y) Compliant"
    //   ],
    //   img: mediSyncImg,
    //   liveLink: "https://medisync-drab.vercel.app/",
    //   github: "https://github.com/prabh-ux/medisync"
    // }
    //  
  ];
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="min-h-screen bg-[#0a0a16] text-slate-300 font-sans selection:bg-purple-500/30">

      {/* --- Dynamic Background Glows (The "Cool" Factor) --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-[#0a0a16]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">DEV.</span>
          </h1>

          <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-slate-400">
            <a href="#projects" className="hover:text-purple-400 transition-colors">Work</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Stack</a>
            <a href="#talk" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full hover:scale-105 transition-all shadow-lg shadow-purple-500/20">
              LET'S TALK
            </a>
          </div>

          <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="max-w-6xl mx-auto pt-48 px-6 relative">
        <div className="flex flex-col items-start">
          {/* The Badge: Sounds more professional than just "Developer" */}
          <div className="bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            MERN Software Developer
          </div>

          {/* The Heading: Highlighting your Name + Expertise */}
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-2 leading-[0.9] flex flex-col md:flex-row">
            Prahkirat&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r pb-4 from-purple-400 via-pink-400 to-blue-400">
              Singh.
            </span>
          </h2>

          {/* Added a sub-headline: This is what interviewers look for in a MERN dev */}
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl mt-6 font-medium leading-relaxed">
            Building <span className="text-white">scalable</span> web applications with the
            <span className="text-purple-400"> MERN</span> stack. Focused on creating
            high-performance backends and seamless user experiences.
          </p>
        </div>
      </header>


      {/* --- details Sections --- */}


      <DetailSection />

      {/* --- Projects Grid --- */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-sm font-black text-purple-500 uppercase tracking-[0.3em] mb-12">Projects</h3>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div onClick={() => setSelectedProject(project)} key={index} className="group cursor-pointer">
              <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} p-[1px]`}>
                <div className="absolute inset-0 bg-[#0a0a16] rounded-[23px] m-[1px] group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="relative h-full w-full flex items-center justify-center opacity-100 transition-opacity">
                  <img src={project.img} alt="Project Preview" className="text-white font-black text-2xl tracking-widest italic uppercase" />
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-purple-500"></span>
                  <p className="text-sm font-mono text-slate-500">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Vibrant Skills Card --- */}
      <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
        <div className="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-[3rem] p-10 md:p-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">My Toolkit.</h3>
              <p className="text-slate-400 text-lg mb-10">  Tools I use to design, build, and maintain modern web applications.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  'MongoDB',
                  'Express.js',
                  'React',
                  'Node.js',
                  'JavaScript',
                  'Tailwind CSS',
                  'Figma',
                  'GitHub'
                ].map(s => (
                  <span
                    key={s}
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-white hover:bg-purple-600 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>

            </div>
            <div className="space-y-6">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer id='talk' className="py-24 text-center border-t border-white/5">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        
        <a href="mailto:prabhkiratsinghbusiness@gmail.com" className="text-xl font-bold text-purple-400 hover:text-purple-300 transition-all border-b-2 border-purple-500/20 pb-2">
          prabhkiratsinghbusiness@gmail.com
        </a>
      </footer>
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}