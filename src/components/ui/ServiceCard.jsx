import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * ServiceCard Component
 * @param {Object} icon - Lucide icon component
 * @param {string} title - Service name
 * @param {string} description - Brief overview
 * @param {Array} benefits - List of key value-adds
 */
const ServiceCard = ({ icon, title, description, benefits = [] }) => {
  return (
    <div className="group relative bg-brand-navy border border-slate-800 rounded-3xl p-8 hover:border-brand-accent/50 transition-all duration-300 flex flex-col h-full shadow-2xl hover:shadow-brand-accent/5">
      
      {/* Decorative Glow on Hover */}
      <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Icon & Title */}
        <div className="mb-6 flex justify-between items-start">
          <div className="p-4 bg-slate-900 rounded-2xl text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
            {icon}
          </div>
          <Link 
            to="/contact" 
            className="text-slate-500 hover:text-brand-accent transition-colors"
            title="Inquire about this service"
          >
            <ArrowUpRight size={24} />
          </Link>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
          {title}
        </h3>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          {description}
        </p>

        {/* Benefits List */}
        {benefits.length > 0 && (
          <div className="mt-auto pt-6 border-t border-slate-800/50">
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-4 block">
              Key Advantages
            </span>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-xs text-slate-300">
                  <CheckCircle2 size={14} className="mr-2 text-brand-accent shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button */}
        <Link 
          to="/contact"
          className="mt-8 inline-flex items-center justify-center w-full py-3 px-4 bg-transparent border border-slate-700 text-white text-sm font-bold rounded-xl group-hover:bg-brand-accent group-hover:text-brand-dark group-hover:border-brand-accent transition-all duration-300"
        >
          Request Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;