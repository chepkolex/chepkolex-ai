import { Link } from 'react-router-dom';
import { Cpu, Globe, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <Cpu className="text-brand-accent" size={24} />
            <span className="text-white font-bold text-xl tracking-tighter uppercase">Chepkolex AI</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Revolutionizing business efficiency through custom AI agents and intelligent automation.
          </p>
        </div>

        {/* Solutions Column */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Solutions</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">Report Automation</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">AI Chatbots</Link></li>
            <li><Link to="/services" className="hover:text-brand-accent transition-colors">Data Analysis</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact/Utility Icons (No Socials) */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Inquiries</h4>
          <div className="flex space-x-4">
            {/* Website/Global Icon */}
            <div className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-brand-accent transition-all cursor-pointer" title="Our Network">
              <Globe size={20} />
            </div>
            {/* Email Icon */}
            <a href="mailto:info@chepkolex.ai" className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-brand-accent transition-all" title="Email Us">
              <Mail size={20} />
            </a>
            {/* Consultation/Chat Icon */}
            <Link to="/contact" className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-brand-accent transition-all" title="Book a Consultation">
              <MessageSquare size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs">© {currentYear} Chepkolex AI. Empowering businesses through AI.</p>
        <div className="flex space-x-6 text-xs text-slate-500">
          <Link to="/" className="hover:text-slate-300">Privacy Policy</Link>
          <Link to="/" className="hover:text-slate-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}