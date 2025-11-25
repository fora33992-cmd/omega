import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';
import { Target, Eye, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80" 
            alt="Industrial Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-omega-dark/80"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-display font-bold text-white mb-4"
          >
            WHO WE ARE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-omega-yellow font-medium"
          >
            Established in 2019 • Cairo, Egypt
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Text Content */}
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-display font-bold text-omega-dark mb-6">
                  OMEGA for Petroleum & Construction Services
                </h2>
                <div className="h-1 w-20 bg-omega-yellow mb-8"></div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  OMEGA is an Egyptian shareholding company headquartered in Cairo. We are recognized globally as a leading provider of fully integrated engineering, procurement, construction supervision, and project management services in the petroleum sector.
                </p>
                <div className="bg-gray-50 p-6 border-l-4 border-omega-yellow rounded-r-lg shadow-sm">
                  <p className="text-omega-dark font-medium italic">
                    "{COMPANY_INFO.slogan}"
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats / Graphic */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <motion.img 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 src="https://images.unsplash.com/photo-1565514020176-db99446f2249?auto=format&fit=crop&q=80" 
                 className="rounded shadow-lg w-full h-64 object-cover"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-omega-dark p-8 rounded shadow-lg flex flex-col justify-center items-center text-center text-white"
              >
                 <Award size={48} className="text-omega-yellow mb-4" />
                 <h3 className="text-4xl font-display font-bold">5+</h3>
                 <p className="text-sm uppercase tracking-widest text-gray-400">Years of Excellence</p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             
             {/* Mission */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-omega-blue"
             >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-omega-blue" size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-omega-dark mb-4">OUR MISSION</h3>
                <p className="text-gray-600 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
             </motion.div>

             {/* Vision */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-omega-yellow"
             >
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="text-omega-yellow" size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-omega-dark mb-4">OUR VISION</h3>
                <p className="text-gray-600 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
             </motion.div>

           </div>
        </div>
      </section>

      {/* Core Values / Features */}
      <section className="py-20 bg-omega-dark text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold">CORE OBJECTIVES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="p-6">
               <div className="mb-4 flex justify-center"><Clock size={40} className="text-omega-yellow"/></div>
               <h4 className="text-xl font-bold mb-2">Efficiency</h4>
               <p className="text-gray-400">Optimal cost efficiency through well-trained labor.</p>
             </div>
             <div className="p-6">
               <div className="mb-4 flex justify-center"><Award size={40} className="text-omega-yellow"/></div>
               <h4 className="text-xl font-bold mb-2">Innovation</h4>
               <p className="text-gray-400">Value-added services and continuous expansion into specialized activities.</p>
             </div>
             <div className="p-6">
               <div className="mb-4 flex justify-center"><Target size={40} className="text-omega-yellow"/></div>
               <h4 className="text-xl font-bold mb-2">Expansion</h4>
               <p className="text-gray-400">Supporting drilling operations, marine transport, and heavy equipment maintenance.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;