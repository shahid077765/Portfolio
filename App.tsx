
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LiveAssistant from './components/LiveAssistant';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
      <Background3D />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <AboutEducation />
        <Skills />
        <Projects />
        
        {/* Contact CTA Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-600/10 pointer-events-none"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to start your<br/><span className="text-gradient">Next Project?</span></h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">
              Whether you have a fully-fledged concept or just the spark of an idea, 
              I'm here to help you turn it into a digital reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:shahid@example.com" 
                className="px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
              >
                Send an Email
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="px-10 py-5 glass hover:bg-white/10 rounded-2xl font-bold text-lg transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* AI Assistants */}
      <LiveAssistant />
    </div>
  );
};

export default App;