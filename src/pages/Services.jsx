import { useState } from 'react';
import { 
  FileText, Cpu, MessageSquare, BarChart3, Share2, 
  Activity, Globe, Loader2, CheckCircle2, X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { 
    id: "report-automation", 
    title: "AI Report Automation", 
    icon: <FileText className="text-brand-accent" />, 
    desc: "Transform messy logistics or retail data into structured, professional reports automatically.", 
    benefits: ["90% faster turnaround", "Zero manual entry error", "Custom PDF/Excel exports"] 
  },
  { 
    id: "process-automation", 
    title: "Process Automation", 
    icon: <Cpu className="text-brand-accent" />, 
    desc: "Connect your business tools and let AI handle repetitive daily workflows autonomously.", 
    benefits: ["Reduce labor costs", "24/7 autonomous operations", "Seamless app integration"] 
  },
  { 
    id: "chatbot-development", 
    title: "Chatbot Development", 
    icon: <MessageSquare className="text-brand-accent" />, 
    desc: "Advanced NLP bots for WhatsApp and Web that actually understand customer intent.", 
    benefits: ["Instant customer support", "Multi-language support", "Lead generation on autopilot"] 
  },
  { 
    id: "data-dashboards", 
    title: "Data Dashboards", 
    icon: <BarChart3 className="text-brand-accent" />, 
    desc: "Real-time visualization of your business metrics with AI forecasting for inventory and sales.", 
    benefits: ["Identify trends early", "Interactive visual data", "Data-driven decisions"] 
  },
  { 
    id: "social-media-ai", 
    title: "Social Media AI", 
    icon: <Share2 className="text-brand-accent" />, 
    desc: "Automated high-quality content generation and engagement strategies for digital growth.", 
    benefits: ["Consistent posting", "AI-written captions", "Sentiment analysis"] 
  },
  { 
    id: "ecommerce-ai", 
    title: "E-commerce AI", 
    icon: <Globe className="text-brand-accent" />, 
    desc: "Inject AI into your online storefront to provide personalized shopping and dynamic pricing.", 
    benefits: ["Increased conversion", "Smart product tagging", "Inventory prediction"] 
  }
];

export default function Services() {
  const [loading, setLoading] = useState(false);
  const [executionData, setExecutionData] = useState(null);
  const [error, setError] = useState(null);

  // Connection to the Next.js Backend (Chepkolex-Web)
  const API_URL = "https://chepkolex-web.vercel.app/api/request-service";

  const handleRequest = async (service) => {
    setLoading(true);
    setError(null);
    setExecutionData(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          service: service.id,
          userId: "denis_kipkoech", // Authenticated user context
          input: `Strategic Execution: ${service.title}. Focus on local Nairobi market efficiency.`
        }),
      });

      if (!response.ok) {
        throw new Error("Chepkolex Operator is currently offline or busy. Verify backend deployment.");
      }
      
      const data = await response.json();
      setExecutionData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-20 px-6 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Our <span className="text-brand-accent">Solutions</span>
        </motion.h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Intelligent execution systems localized for the Nairobi market. Optimized for real-time business growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={s.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-brand-navy p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-brand-accent/40 transition-all group"
          >
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
              className="w-full py-3 rounded-xl border border-brand-accent text-brand-accent font-bold hover:bg-brand-accent hover:text-brand-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : "Execute Service"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Digital Operator Result Drawer */}
      <AnimatePresence>
        {(executionData || error) && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: "100%" }}
            className="fixed bottom-0 left-0 w-full bg-[#0a0a0a] border-t border-brand-accent/50 p-6 z-[100] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] max-h-[85vh] overflow-y-auto"
          >
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2 uppercase tracking-widest text-sm">
                    {error ? "System Error" : "Digital Operator Output"}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Request processed via Chepkolex Execution Engine V1
                  </p>
                </div>
                <button 
                  onClick={() => { setExecutionData(null); setError(null); }} 
                  className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-2xl text-red-400 text-sm italic">
                  Critical Error: {error}
                </div>
              )}

              {executionData && (
                <div className="space-y-8 pb-10">
                  {/* Step Visualization */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {executionData.plan.map((step, idx) => (
                      <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                        <div className="text-brand-accent text-[10px] font-bold uppercase mb-2">Phase 0{idx + 1}</div>
                        <p className="text-slate-300 text-xs leading-tight font-medium">{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Main Result Output */}
                  <div className="relative group">
                    <div className="absolute -top-3 left-6 bg-brand-accent text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      Final Result
                    </div>
                    <div className="bg-zinc-950 p-8 rounded-2xl border border-slate-800 font-mono text-sm whitespace-pre-wrap leading-relaxed text-slate-300 shadow-inner">
                      {executionData.result}
                    </div>
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