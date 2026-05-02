import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Inspection Report Automator",
    client: "Logistics Sector",
    desc: "An AI system that processes field photos and notes into formal safety inspection reports.",
    impact: "Saved 15 hours of paperwork per week."
  },
  {
    title: "Financial Generator Pro",
    client: "Retail Management",
    desc: "Automated aggregation of daily sales from 12 branches into a single executive dashboard.",
    impact: "100% accuracy in financial auditing."
  },
  {
    title: "WhatsApp Sales Bot",
    client: "E-commerce",
    desc: "Intelligent assistant capable of taking orders and checking stock via WhatsApp.",
    impact: "Increased sales conversion by 25%."
  },
  {
    title: "Admin Decision Support",
    client: "Gov / Admin",
    desc: "Predictive analytics dashboard to manage resource allocation for public services.",
    impact: "Optimized budget allocation by 18%."
  }
];

export default function Portfolio() {
  return (
    <div className="bg-brand-dark pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Project <span className="text-brand-accent">Showcase</span></h1>
        <p className="text-slate-400">Proven results delivered through tailored AI implementations.</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative overflow-hidden bg-brand-navy rounded-3xl border border-slate-800 p-8 hover:bg-slate-900/50 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-brand-accent text-xs font-bold uppercase tracking-widest">{p.client}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{p.title}</h3>
              </div>
              <div className="p-2 bg-slate-800 rounded-full text-slate-400 group-hover:text-brand-accent transition-colors">
                <ExternalLink size={18} />
              </div>
            </div>
            <p className="text-slate-400 mb-8">{p.desc}</p>
            <div className="pt-6 border-t border-slate-800">
              <span className="text-slate-500 text-xs uppercase font-bold">Key Impact:</span>
              <p className="text-brand-accent font-semibold text-lg">{p.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}