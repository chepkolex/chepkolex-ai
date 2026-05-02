import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Grab the service from navigation state or default to the first option
  const preSelectedService = location.state?.selectedService || "AI Report Automation";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 1. Email Logic (Web3Forms)
    const emailData = {
      ...data,
      access_key: "c049453a-2579-4aaa-9596-015954e7eb44", 
      subject: `New Lead: ${data.fullName} - ${data.service}`,
      from_name: "Chepkolex AI Web"
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData)
      });

      if (res.ok) {
        // 2. WhatsApp Logic (Formats the text for a professional look)
        const text = `*New Inquiry - Chepkolex AI*%0A%0A` +
                     `*Name:* ${data.fullName}%0A` +
                     `*Service:* ${data.service}%0A` +
                     `*Email:* ${data.email}%0A` +
                     `*Message:* ${data.message}`;
        
        const whatsappUrl = `https://wa.me/254723721304?text=${text}`;

        setLoading(false);
        setSubmitted(true);

        // Open WhatsApp in a new tab after the success animation starts
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      alert("Submission failed. Please check your connection and try again.");
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Contact Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's build the <br />
            <span className="text-brand-accent">future together.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-12 italic">
            Transforming businesses through intelligent automation.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-white group">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-brand-accent transition-colors">
                <Mail className="group-hover:text-brand-dark transition-colors text-brand-accent" />
              </div>
              <span>solutions@chepkolex.ai</span>
            </div>
            <div className="flex items-center space-x-4 text-white group">
              <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-brand-accent transition-colors">
                <Phone className="group-hover:text-brand-dark transition-colors text-brand-accent" />
              </div>
              <span>+254 723 721 304</span>
            </div>
          </div>

          <a href="https://wa.me/254723721304" className="mt-12 inline-flex items-center space-x-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-green-500/20">
            <MessageSquare size={20} />
            <span>Direct WhatsApp Chat</span>
          </a>
        </div>

        {/* The Form */}
        <div className="bg-brand-navy p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20 animate-in fade-in zoom-in duration-500">
              <CheckCircle size={54} className="text-brand-accent" />
              <h2 className="text-2xl font-bold text-white">Inquiry Sent Successfully!</h2>
              <p className="text-slate-400">Opening WhatsApp for instant confirmation...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Full Name</label>
                <input required name="fullName" type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all" placeholder="John Doe" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                  <input required name="email" type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Service</label>
                  <select name="service" defaultValue={preSelectedService} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all">
                    <option>AI Report Automation</option>
                    <option>Process Automation</option>
                    <option>Chatbot Development</option>
                    <option>Data Dashboards</option>
                    <option>Social Media AI</option>
                    <option>E-commerce AI</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Brief Message</label>
                <textarea name="message" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-all h-24" placeholder="How can we help?"></textarea>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className={`w-full font-bold py-4 rounded-xl transition-all mt-4 flex items-center justify-center space-x-2
                  ${loading ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-brand-accent text-brand-dark hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]'}`}
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}