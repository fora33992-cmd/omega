import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Trophy, Users, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES, INDUSTRIES, WHY_CHOOSE_US } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Animated Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center">
        {/* Background Parallax Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" 
              alt="Offshore Rig" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-slate-900/70 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <div className="inline-block px-4 py-1 bg-omega-yellow text-omega-dark font-bold text-sm tracking-widest uppercase mb-6 rounded-full">
               Established 2019 • Cairo
             </div>
             <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-tight mb-6 drop-shadow-2xl">
               ALWAYS DELIVER <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-omega-yellow to-yellow-200">MORE THAN EXPECTED</span>
             </h1>
             <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
               Your trusted partner for Inspection, NDT, Rope Access, and Construction Services in the Oil & Gas sector.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link 
                 to="/contact" 
                 className="px-10 py-4 bg-omega-yellow text-omega-dark font-bold uppercase tracking-wide hover:bg-white hover:text-omega-blue transition-all duration-300 rounded-full shadow-lg hover:shadow-omega-yellow/50"
               >
                 Request Inspection
               </Link>
               <Link 
                 to="/login" 
                 className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-wide hover:bg-white hover:text-omega-dark transition-all duration-300 rounded-full backdrop-blur-sm"
               >
                 Client Login
               </Link>
             </div>
           </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest opacity-70">Scroll Down</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-omega-yellow to-transparent"></div>
        </motion.div>
      </section>

      {/* Modern Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-omega-yellow font-bold uppercase tracking-widest text-sm mb-2 block">Our Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-omega-dark">
                WORLD-CLASS <br/>INDUSTRIAL SOLUTIONS
              </h2>
              <div className="h-1.5 w-24 bg-omega-yellow mt-6 rounded-full"></div>
            </div>
            <Link 
              to="/services" 
              className="group hidden md:flex items-center gap-2 text-omega-blue font-bold uppercase tracking-wider hover:text-omega-dark transition-colors"
            >
              View All 12 Services 
              <span className="bg-omega-blue text-white rounded-full p-1 transition-transform group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link to="/services" className="inline-block px-8 py-3 bg-omega-dark text-white font-bold uppercase rounded-full hover:bg-omega-blue transition-colors">
              View Full Service List
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-omega-dark text-white relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-omega-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">INDUSTRIES WE SERVE</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
              Delivering strategic solutions across vital sectors involving high-cost infrastructure and complex operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind, idx) => (
              <motion.div 
                key={ind.id}
                whileHover={{ y: -10 }}
                className="relative h-96 group overflow-hidden rounded-xl cursor-pointer shadow-2xl"
              >
                <img src={ind.image} alt={ind.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="w-10 h-1 bg-omega-yellow mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 leading-none">{ind.title}</h3>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500">
                    <p className="text-sm text-gray-300 mt-2 leading-snug">
                      {ind.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2">
              <span className="text-omega-blue font-bold uppercase tracking-widest text-sm mb-2 block">Our Promise</span>
              <h2 className="text-5xl font-display font-bold text-omega-dark mb-10">
                WHY CHOOSE <span className="text-omega-yellow">OMEGA</span>?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="shrink-0 mt-1 p-2 bg-gray-50 rounded-lg group-hover:bg-omega-yellow group-hover:text-omega-dark transition-colors text-omega-blue">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2 font-display uppercase tracking-wide">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="relative z-10"
               >
                 <img 
                   src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
                   alt="Rope Access Worker" 
                   className="rounded-2xl shadow-2xl"
                 />
                 
                 {/* Floating Stat Card */}
                 <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-2xl border-l-8 border-omega-yellow hidden md:block">
                   <div className="flex items-center gap-4 mb-2">
                     <Shield size={32} className="text-omega-blue" />
                     <span className="text-4xl font-bold font-display text-omega-dark">100%</span>
                   </div>
                   <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Safety Compliance Record</p>
                 </div>
               </motion.div>
               {/* Decoration Dots */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/dots.png')] opacity-30"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Animated Stats Bar */}
      <div className="bg-omega-yellow py-16">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-omega-dark/10">
              {[
                { label: "Completed Projects", val: "150+" },
                { label: "Certified Staff", val: "50+" },
                { label: "Years Experience", val: "5+" },
                { label: "Clients Served", val: "40+" }
              ].map((s, i) => (
                <div key={i} className="px-4">
                  <h3 className="text-5xl font-display font-bold text-omega-dark mb-2">{s.val}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-omega-dark/80">{s.label}</p>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 bg-omega-blue text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            GOT A TOUGH LOCATION?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light">
            OMEGA gets the job done where others can't reach. Contact us today for a consultation.
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-omega-yellow text-omega-dark font-bold text-lg uppercase tracking-wide hover:bg-white hover:scale-105 transition-all shadow-xl rounded-full">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;