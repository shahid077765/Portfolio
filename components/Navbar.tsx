
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
  ];
  
  const rightItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ease-in-out ${scrolled ? 'max-w-4xl' : 'max-w-full'}`}>
        <div 
          className={`
            relative flex items-center justify-between transition-all duration-700 ease-in-out
            ${scrolled 
              ? 'glass px-8 py-3 rounded-full border-white/20 shadow-2xl shadow-indigo-500/10' 
              : 'px-0 py-0 border-transparent bg-transparent'
            }
          `}
        >
          {/* LEFT SECTION - Group 1 */}
          <div className={`hidden lg:flex items-center gap-8 transition-all duration-700 ${scrolled ? 'translate-x-0' : '-translate-x-4'}`}>
            {leftItems.map(item => (
              <a 
                key={item.name} 
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                  scrolled ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CENTER SECTION - Brand Logo */}
          <div className={`lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-4 transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-110'}`}>
            <a href="#home" className="text-2xl font-black tracking-tighter text-white group flex items-center">
              <span className="transition-transform duration-500 group-hover:-rotate-12">S</span>
              <span className="transition-transform duration-500 group-hover:rotate-12">A</span>
              <span className="text-indigo-500 transition-all duration-500 group-hover:scale-150">.</span>
            </a>
            {scrolled && (
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                <span className="text-[8px] font-black uppercase tracking-tighter text-indigo-400">Live</span>
              </div>
            )}
          </div>

          {/* RIGHT SECTION - Group 2 + CTA */}
          <div className={`flex items-center gap-8 transition-all duration-700 ${scrolled ? 'translate-x-0' : 'translate-x-4'}`}>
            <div className="hidden lg:flex items-center gap-8">
              {rightItems.map(item => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                    scrolled ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className={`
                transition-all duration-500 font-bold text-sm transform hover:scale-105 active:scale-95
                ${scrolled 
                  ? 'px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 shadow-lg shadow-indigo-600/20' 
                  : 'px-6 py-2.5 bg-white text-slate-950 rounded-full hover:bg-slate-200'
                }
              `}
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-slate-400 hover:text-white transition-transform hover:scale-110">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;