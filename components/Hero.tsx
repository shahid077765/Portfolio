
import React, { useState, useEffect } from 'react';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 30 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      <span className="inline-block w-1 h-5 ml-1 bg-indigo-500 animate-pulse align-middle"></span>
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-white/10 text-sm font-medium tracking-wide text-indigo-300 animate-float">
          Aspiring Full Stack Engineer & CS Student
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
          Building My <span className="text-gradient">Digital</span><br />
          Journey
        </h1>
        
        <div className="max-w-3xl mx-auto min-h-[5rem] md:min-h-[4rem]">
          <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
            <TypewriterText 
              text="I'm Shahid Ahmed, a first-year Computer Science student at RJIT Tekanpur. I'm passionate about learning new technologies and building cool things for the web." 
              delay={25}
            />
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 w-full sm:w-auto">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 glass hover:bg-white/10 rounded-xl font-bold transition-all w-full sm:w-auto">
            Let's Talk
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2 group-hover:border-indigo-500 transition-colors">
          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full group-hover:bg-indigo-400"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;