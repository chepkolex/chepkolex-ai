import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-brand-accent p-1.5 rounded-lg">
            <Cpu className="text-brand-dark" size={24} />
          </div>
          <span className="text-white font-bold text-xl tracking-tighter">CHEPKOLEX <span className="text-brand-accent">AI</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-brand-accent' : 'text-slate-300 hover:text-white'}`}>
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-brand-accent hover:bg-green-500 text-brand-dark px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-navy border-t border-slate-800 p-6 flex flex-col space-y-4 md:hidden animate-fade-in-up">
          {links.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium border-b border-slate-800 pb-2">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-brand-accent font-bold pt-2">Contact Us →</Link>
        </div>
      )}
    </nav>
  );
}