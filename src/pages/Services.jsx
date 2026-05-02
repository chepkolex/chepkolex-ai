import { FileText, Cpu, MessageSquare, BarChart3, Share2, Activity, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "AI Report Automation",
    icon: <FileText className="text-brand-accent" />,
    desc: "Transform messy logistics or retail data into structured, professional reports automatically.",
    benefits: ["90% faster turnaround", "Zero manual entry error", "Custom PDF/Excel exports"]
  },
  {
    title: "Process Automation",
    icon: <Cpu className="text-brand-accent" />,
    desc: "Connect your business tools and let AI handle repetitive daily workflows autonomously.",
    benefits: ["Reduce labor costs", "24/7 autonomous operations", "Seamless app integration"]
  },
  {
    title: "Chatbot Development",
    icon: <MessageSquare className="text-brand-accent" />,
    desc: "Advanced NLP bots for WhatsApp and Web that actually understand customer intent.",
    benefits: ["Instant customer support", "Multi-language support", "Lead generation on autopilot"]
  },
  {
    title: "Data Dashboards",
    icon: <BarChart3 className="text-brand-accent" />,
    desc: "Real-time visualization of your business metrics with AI forecasting for inventory and sales.",
    benefits: ["Identify trends early", "Interactive visual data", "Data-driven decisions"]
  },
  {
    title: "Social Media AI",
    icon: <Share2 className="text-brand-accent" />,
    desc: "Automated high-quality content generation and engagement strategies for digital growth.",
    benefits: ["Consistent posting", "AI-written captions", "Sentiment analysis"]
  },
  {
    title: "E-commerce AI",
    icon: <Globe className="text-brand-accent" />,
    desc: "Inject AI into your online storefront to provide personalized shopping and dynamic pricing.",
    benefits: ["Increased conversion", "Smart product tagging", "Inventory prediction"]
  }
];

export default function Services() {
  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-brand-accent">Solutions</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          We don't just provide software; we provide intelligent systems that evolve with your business.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-brand-navy p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-brand-accent/40 transition-all group">
            <div>
              <div className="mb-6 p-3 bg-slate-900 w-fit rounded-2xl group-hover:bg-brand-accent/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic group-hover:text-brand-accent transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-center text-xs text-slate-300">
                    <Activity size={14} className="mr-2 text-brand-accent" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* THE FIX: Passing 'state' allows the Contact page to know which button was clicked */}
            <Link 
              to="/contact" 
              state={{ selectedService: s.title }}
              className="w-full text-center py-3 rounded-xl border border-brand-accent text-brand-accent font-bold hover:bg-brand-accent hover:text-brand-dark transition-all"
            >
              Request Service
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}