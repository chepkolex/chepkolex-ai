import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          About <span className="text-brand-accent">Chepkolex AI</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Founded by a young innovator, Chepkolex AI was built to help businesses 
              navigate the complex world of Artificial Intelligence. We don't just 
              build tools; we transform workflows.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-brand-accent/10 rounded-lg">
                  <Target className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Our Mission</h3>
                  <p className="text-slate-400 text-sm">To democratize high-level automation for businesses of all sizes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-4 text-white">Why Work With Us?</h2>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-2">
                <Zap size={16} className="text-brand-accent" />
                <span>Custom AI Agent Development</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap size={16} className="text-brand-accent" />
                <span>Seamless Workflow Integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap size={16} className="text-brand-accent" />
                <span>Data-Driven Decision Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// CRITICAL: This is the line that was likely missing!
export default About;