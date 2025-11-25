import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-omega-dark py-20 text-center text-white">
        <h1 className="text-5xl font-display font-bold mb-4">CONTACT US</h1>
        <p className="text-gray-400 max-w-xl mx-auto">We are available for inquiries and emergency support. Reach out to our team in Cairo.</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-5/12 space-y-8">
            <h3 className="text-3xl font-display font-bold text-omega-dark mb-2">Get in Touch</h3>
            <p className="text-gray-600 mb-8">Have a project in mind? Send us a message or visit our office.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="bg-omega-yellow text-omega-dark p-4 rounded shadow-sm group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Head Office</h4>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    Shebin Hathout Tower, next to Al-Ghatmi Mall,<br/>
                    in front of Shebin Al-Koum Preparatory School,<br/>
                    Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-omega-yellow text-omega-dark p-4 rounded shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Phone Support</h4>
                  <p className="text-gray-600 mt-1">{COMPANY_INFO.phone}</p>
                  <a href={COMPANY_INFO.whatsapp} target="_blank" rel="noreferrer" className="text-green-600 font-bold text-sm mt-2 inline-flex items-center gap-1 hover:underline">
                    <MessageCircle size={14} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-omega-yellow text-omega-dark p-4 rounded shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Email</h4>
                  <p className="text-gray-600 mt-1">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-8">
              <h4 className="font-bold text-omega-dark mb-2 flex items-center gap-2"><Clock size={18}/> Business Hours</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex justify-between"><span>Sunday - Thursday:</span> <span className="font-bold">9:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Friday - Saturday:</span> <span className="font-bold">Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12">
             <form className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-omega-yellow">
               <h3 className="text-2xl font-bold text-omega-dark mb-8">Send a Request</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                   <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-omega-yellow focus:bg-white focus:outline-none transition-colors" placeholder="John Doe" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                   <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-omega-yellow focus:bg-white focus:outline-none transition-colors" placeholder="+20..." />
                 </div>
               </div>
               
               <div className="mb-6">
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                 <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-omega-yellow focus:bg-white focus:outline-none transition-colors" placeholder="name@company.com" />
               </div>
               
               <div className="mb-6">
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Service of Interest</label>
                 <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-omega-yellow focus:bg-white focus:outline-none transition-colors">
                   <option>Select a service...</option>
                   <option>Rope Access</option>
                   <option>Lifting Inspection</option>
                   <option>NDT Services</option>
                   <option>Other</option>
                 </select>
               </div>
               
               <div className="mb-8">
                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message Details</label>
                 <textarea rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-omega-yellow focus:bg-white focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
               </div>
               
               <button className="w-full bg-omega-dark text-white py-4 font-bold uppercase tracking-wide rounded-full hover:bg-omega-blue transition-all shadow-lg transform hover:-translate-y-1">
                 Submit Inquiry
               </button>
             </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 rounded-lg overflow-hidden h-80 shadow-lg relative bg-gray-200 flex items-center justify-center group">
          <div className="text-center">
             <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
             <p className="text-gray-500 font-bold">Interactive Map Component</p>
             <p className="text-xs text-gray-400">(Google Maps Embed Placeholder)</p>
          </div>
          {/* Simulate Map UI */}
          <div className="absolute top-4 left-4 bg-white p-2 shadow rounded">
             <div className="flex flex-col gap-1">
               <div className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-xl font-bold text-gray-600">+</div>
               <div className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-xl font-bold text-gray-600">-</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;