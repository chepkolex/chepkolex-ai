import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    /* --- OPTION A: SEND TO EMAIL (Web3Forms) --- */
    /* Register at web3forms.com to get a free Access Key */
    const emailData = {
      ...data,
      access_key: "c049453a-2579-4aaa-9596-015954e7eb44", // Replace with your real key
      subject: `New Inquiry from ${data.name} - Chepkolex AI`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        /* --- OPTION B: TRIGGER WHATSAPP AS WELL --- */
        const message = `*New Inquiry - Chepkolex AI*%0A%0A` +
                        `*Name:* ${data.name}%0A` +
                        `*Service:* ${data.service}%0A` +
                        `*Message:* ${data.message}`;
        
        const whatsappUrl = `https://wa.me/254723721304?text=${message}`;
        
        setLoading(false);
        setSubmitted(true);

        // Open WhatsApp in a new tab after a brief delay
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1000);
      }
    } catch (error) {
      console.error("Submission failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Contact Info Column */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's build the <br />
            <span className="text-brand-accent">future together.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-12">
            Reach out via the form, or message us directly on WhatsApp for a faster response.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-white">
              <div className="p-3 bg-slate-800 rounded-lg"><Mail className="text-brand-accent" /></div>
              <span>solutions@chepkolex.ai</span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <div className="p-3 bg-slate-800 rounded-lg"><Phone className="text-brand-accent" /></div>
              <span>+254 723 721 304</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-brand-navy p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          {submitted ? (
            <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
              <CheckCircle size={60} className="text-brand-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Request Sent!</h2>
              <p className="text-slate-400">Opening WhatsApp for instant chat...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="from_name" value="Chepkolex AI Web" />
              
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Full Name</label>
                <input required name="name" type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-accent outline-none" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                  <input required name="email" type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-accent outline-none" />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Service</label>
                  <select name="service" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-accent outline-none">
                    <option>AI Report Automation</option>
                    <option>Chatbot Development</option>
                    <option>Process Automation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">How can we help?</label>
                <textarea name="message" required rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-brand-accent outline-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-accent text-brand-dark font-bold py-4 rounded-xl hover:bg-green-500 transition-all flex justify-center items-center gap-2"
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