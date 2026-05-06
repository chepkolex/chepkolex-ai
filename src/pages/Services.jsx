import { useState } from 'react';
import { FileText, Cpu, MessageSquare, BarChart3, Share2, Activity, Globe, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { id: "automation", title: "AI Report Automation", icon: <FileText className="text-brand-accent" />, desc: "Transform messy logistics or retail data into structured, professional reports automatically.", benefits: ["90% faster turnaround", "Zero manual entry error", "Custom PDF/Excel exports"] },
  { id: "automation", title: "Process Automation", icon: <Cpu className="text-brand-accent" />, desc: "Connect your business tools and let AI handle repetitive daily workflows autonomously.", benefits: ["Reduce labor costs", "24/7 autonomous operations", "Seamless app integration"] },
  { id: "content", title: "Chatbot Development", icon: <MessageSquare className="text-brand-accent" />, desc: "Advanced NLP bots for WhatsApp and Web that actually understand customer intent.", benefits: ["Instant customer support", "Multi-language support", "Lead generation on autopilot"] },
  { id: "website", title: "Data Dashboards", icon: <BarChart3 className="text-brand-accent" />, desc: "Real-time visualization of your business metrics with AI forecasting for inventory and sales.", benefits: ["Identify trends early", "Interactive visual data", "Data-driven decisions"] },
  { id: "marketing", title: "Social Media AI", icon: <Share2 className="text-brand-accent" />, desc: "Automated high-quality content generation and engagement strategies for digital growth.", benefits: ["Consistent posting", "AI-written captions", "Sentiment analysis"] },
  { id: "website", title: "E-commerce AI", icon: <Globe className="text-brand-accent" />, desc: "Inject AI into your online storefront to provide personalized shopping and dynamic pricing.", benefits: ["Increased conversion", "Smart product tagging", "Inventory prediction"] }
];

export default function Services() {
  const [loading, setLoading] = useState(false);
  const [executionData, setExecutionData] = useState(null);
  const [error, setError] = useState(null);

  // UPDATE THIS URL AFTER DEPLOYING BACKEND TO VERCEL
  const API_URL = "https://chepkolex-web.vercel.app/api/request-service";

  const handleRequest = async (service) => {
    setLoading(true);
    setError(null);
    setExecutionData(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: service.id || "custom",
          userId: "denis_kipkoech",
          input: `Execute ${service.title} specialized for current Business DNA.`
        }),
      });

      if (!response.ok) throw new Error("Operator offline. Check backend connection.");
      
      const data = await response.json();
      setExecutionData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-brand-accent">Solutions</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Intelligent execution systems localized for the Nairobi market.
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

            <button 
              onClick={() => handleRequest(s)}
              disabled={loading}
              className="w-full py-3 rounded-xl border border-brand-accent text-brand-accent font-bold hover:bg-brand-accent hover:text-brand-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : "Request Service"}
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {(executionData || error) && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="fixed bottom-0 left-0 w-full bg-brand-navy border-t border-brand-accent p-6 z-50 shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="text-green-500" /> Digital Operator Output
                </h2>
                <button onClick={() => setExecutionData(null)} className="text-slate-400 hover:text-white">Close</button>
              </div>

              {error && <p className="text-red-500 bg-red-500/10 p-4 rounded-lg">{error}</p>}

              {executionData && (
                <div className="space-y-6 text-slate-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {executionData.plan.map((step, idx) => (
                      <div key={idx} className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-xs italic">
                        <span className="text-brand-accent mr-2">Step {idx + 1}:</span> {step}
                      </div>
                    ))}
                  </div>
                  <div className="bg-black p-6 rounded-xl border border-slate-800 font-mono text-sm whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {executionData.result}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
