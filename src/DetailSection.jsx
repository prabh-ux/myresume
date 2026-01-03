import React from 'react'
import mypic from './myPic.jpg';

const DetailSection = () => {

  const links = [
    { name: "GitHub", link: "https://github.com/prabh-ux" },
   
  ]

  return (
    <section id="about" className="max-w-6xl mx-auto py-24 px-6">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Left: Visual/Intro */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center bg-[#16162d]">
              <img className="object-cover w-full h-full  transition duration-500" src={mypic} alt="Prahkirat Singh" />
            </div>
          </div>
          
          {/* Quick Stats - Updated for MERN focus */}
          <div className="absolute -bottom-6 -right-6 bg-[#1a1a2e]/90 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md">
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-bold text-white">MERN</p>
                <p className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">
                  Expertise
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Clean</p>
                <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">
                  Code Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Detailed Info */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h3 className="text-sm font-black text-purple-500 uppercase tracking-[0.3em] mb-4">Engineering Bio</h3>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Solving complex problems with <span className="text-slate-500">modern stacks.</span>
            </h2>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed">
            I am a Full-Stack Developer specializing in the MERN ecosystem. Beyond just writing 
            code, I focus on building <strong>efficient APIs</strong>, <strong>optimized database schemas</strong>, 
            and <strong>responsive frontends</strong>. I enjoy transforming technical requirements 
            into high-performing digital products.
          </p>

          {/* Details Grid */}
          <div className="grid sm:grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> 
                Education
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Bachelor of Computer Applications <br />
              (ongoing)
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 
                Current Role
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                MERN Stack Developer 
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> 
                Core Stack
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                MongoDB, Express, React, Node.js <br />
                Redux Toolkit & Tailwind CSS
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 
                Focus
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
  Scalable CRUD Architectures, JWT & OAuth Security,RESTful APIs <br />
  Custom Middleware, Hooks, & Cloud Media Pipelines
</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-8 pt-6">
            {links.map((link) => (
              <a key={link.name} href={link.link} target="_blank" rel="noreferrer" className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400 pb-1">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default DetailSection