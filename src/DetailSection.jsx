import React from 'react'
import mypic from './myPic.jpg';
const DetailSection = () => {


const links=[
    {name:"GitHub",link:"https://github.com/prabh-ux"},
    {name:"GitHub",link:"https://github.com/prabh-ux"},
    {name:"GitHub",link:"https://github.com/prabh-ux"}

]


  return (
<section id="about" className="max-w-6xl mx-auto py-15 px-6">
  <div className="grid lg:grid-cols-12 gap-16 items-start">
    
    {/* Left: Visual/Intro */}
    <div className="lg:col-span-5 relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:opacity-100 transition duration-1000"></div>
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
        {/* Placeholder for your Photo */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#16162d]">
          <img className="text-slate-700 font-black text-4xl uppercase tracking-[0.2em] " src={mypic} alt="Your Photo" />
        </div>
      </div>
      
      {/* Quick Stats floating on image */}
      <div className="absolute -bottom-6 -right-6 bg-[#1a1a2e] border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md">
       <div className="flex gap-8">
  <div>
    <p className="text-2xl font-bold text-white">Quality</p>
    <p className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">
      Work Guaranteed
    </p>
  </div>
   <div>
    <p className="text-2xl font-bold text-white">Professional</p>
    <p className="text-[10px] uppercase tracking-widest  text-blue-400 font-bold">
      Web Solutions
    </p>
  </div>
</div>

      </div>
    </div>

    {/* Right: Detailed Info */}
    <div className="lg:col-span-7 space-y-8">
      <div>
        <h3 className="text-sm font-black text-purple-500 uppercase tracking-[0.3em] mb-4">Background</h3>
        <h2 className="text-4xl font-bold text-white leading-tight">
          Turning logic into <span className="text-slate-500">visual stories.</span>
        </h2>
      </div>

      <p className="text-slate-400 text-lg leading-relaxed">
        I am a self-driven Frontend Developer with a deep obsession for pixel-perfect 
        interfaces. My goal is to bridge the gap between complex backend logic and 
        effortless user experiences.
      </p>

      {/* Details Grid */}
      <div className="grid sm:grid-cols-2 gap-8 pt-4">
        <div>
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> 
            Education
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            Bachelor of Computer Applications/ <br />
            Self-Taught Specialist
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> 
            Location
          </h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            Available for Remote Work <br />
            
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span> 
            Experience
          </h4>
         <p className="text-slate-500 text-sm leading-relaxed">
  Professional Web Development <br />
  Modern Tools & Best Practices
</p>


        </div>
        <div>
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 
            Interests
          </h4>
<p className="text-slate-500 text-sm leading-relaxed">
  Full-Stack Web Development <br />
  UI Design & Version Control
</p>


        </div>
      </div>
      
      {/* Social Links */}
      <div className="flex gap-6 pt-6">
        {[{name:'GitHub',link:"https://github.com/prabh-ux"}].map((link) => (
          <a key={link.name} href={link.link} className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-white transition-colors">
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