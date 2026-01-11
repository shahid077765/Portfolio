
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Shahid Ahmed</h3>
            <p className="text-slate-500 text-sm italic">"Designing with intent, building with passion."</p>
          </div>
          
          <div className="flex gap-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map(social => (
              <a key={social} href="#" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">
                {social}
              </a>
            ))}
          </div>
          
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Shahid Ahmed. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
