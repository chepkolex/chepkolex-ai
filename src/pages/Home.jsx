import { ArrowRight, CheckCircle2, Shield, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-brand-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
              Next-Gen Automation
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Automate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-green-300">Business with AI</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl">
              We help you save time, reduce costs, and scale faster using smart automation tailored for your unique workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-brand-accent hover:bg-green-500 text-brand-dark font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="px-8 py-4 border border-slate-700 hover:border-brand-accent text-white font-bold rounded-xl flex items-center justify-center transition-all">
                View Services
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="p-8 bg-brand-navy border border-slate-800 rounded-3xl shadow-2xl animate-pulse">
                <div className="h-4 w-1/2 bg-slate-800 rounded mb-4" />
                <div className="h-4 w-3/4 bg-brand-accent/20 rounded mb-4" />
                <div className="h-32 w-full bg-slate-900 rounded mb-4 border border-slate-800 flex items-center justify-center">
                    <span className="text-brand-accent text-xs font-mono">Running AI Analysis...</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-slate-800 rounded" />
                    <div className="h-8 bg-slate-800 rounded" />
                    <div className="h-8 bg-brand-accent/40 rounded" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: <Shield />, title: "Analyze", text: "We deep-dive into your existing processes to find manual bottlenecks." },
              { step: "02", icon: <Zap />, title: "Automate", text: "We deploy custom AI agents and integrations built for your stack." },
              { step: "03", icon: <TrendingUp />, title: "Scale", text: "Achieve higher output with fewer resources and zero errors." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-brand-navy border border-slate-800 rounded-2xl hover:border-brand-accent/50 transition-all group">
                <div className="text-brand-accent mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-slate-500 font-mono text-sm mb-2 block">{item.step}</span>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-brand-accent to-green-600 rounded-[2rem] p-12 text-center shadow-2xl shadow-brand-accent/20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">Ready to lead with AI?</h2>
          <p className="text-brand-dark/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Join the forward-thinking companies transforming their operations with Chepkolex AI.
          </p>
          <Link to="/contact" className="bg-brand-dark text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-900 transition-all inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}