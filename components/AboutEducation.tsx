
import React from 'react';
import { EDUCATION, EXPERIENCES } from '../constants';

const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Journey */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">The <span className="text-cyan-400">Journey</span></h2>
            <div className="space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></div>
                  <span className="text-sm font-bold text-indigo-400 mb-1 block">{exp.period}</span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-slate-300 font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-slate-400 text-sm flex gap-3 italic">
                        <span className="text-indigo-500 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Roots & Education */}
          <div className="flex flex-col justify-center">
            <div className="glass p-10 rounded-[2.5rem] border-white/5 relative">
              <div className="absolute top-0 right-0 p-8 text-6xl text-white/5 font-black opacity-10 select-none">ROOTS</div>
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{EDUCATION.college}</h3>
                  <p className="text-indigo-400 font-medium mb-2">{EDUCATION.location}</p>
                  <p className="text-slate-400 text-sm">{EDUCATION.degree}</p>
                  <span className="text-xs text-slate-500 mt-2 block font-mono">{EDUCATION.period}</span>
                </div>
              </div>
              
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  "I'm excited to be starting my computer science journey at RJIT. I can't wait to learn, grow, and build amazing things over the next four years in Gwalior."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;