import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, User, ChevronRight, Facebook, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Hide nav/footer on dashboard
  const isDashboard = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Are', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  if (isDashboard) {
    return <>{children}</>;
  }

  // Determine Logo Variant based on background state
  const isHome = location.pathname === '/';
  const logoVariant = (isHome && !isScrolled && !isMobileMenuOpen) ? 'light' : 'light'; 
  // Note: Since the scrolled header is dark navy, and non-scrolled home is transparent (dark bg), light logo works best for both text contrast.
  // However, if we scroll and background becomes white, we need dark logo?
  // Current design: Scrolled header is bg-omega-dark/95 (Navy), so 'light' logo (White text) is correct.
  // Mobile menu is also Navy, so 'light' is correct.

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-omega-dark/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <Logo variant="light" className="scale-90 md:scale-100" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase hover:text-omega-yellow transition-colors ${
                  isScrolled || location.pathname !== '/' ? 'text-gray-200' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => navigate('/login')}
              className="flex items-center gap-2 px-6 py-2.5 bg-omega-yellow text-omega-dark font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-omega-blue transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
            >
              <User size={16} />
              Client Portal
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-omega-dark border-t border-slate-800 shadow-xl flex flex-col p-6 space-y-4">
             {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-lg font-display uppercase tracking-wider hover:text-omega-yellow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
               onClick={() => {
                 navigate('/login');
                 setIsMobileMenuOpen(false);
               }}
               className="w-full py-3 bg-omega-yellow text-omega-dark font-bold uppercase rounded-full"
            >
              Client Login
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-omega-dark text-white pt-20 pb-10 border-t-4 border-omega-yellow">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Logo variant="light" className="mb-6 scale-90 origin-left" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering excellence in petroleum and construction services since 2019. We ensure safety, quality, and reliability in every project.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-omega-yellow"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-omega-yellow"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-omega-yellow"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-omega-yellow"/> Who We Are</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-omega-yellow"/> Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-omega-yellow"/> Request Inspection</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors flex items-center gap-2"><ChevronRight size={14} className="text-omega-yellow"/> Client Login</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display uppercase tracking-widest">Core Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Rope Access</li>
              <li>Lifting Inspection</li>
              <li>NDT Services</li>
              <li>Hull Gauging</li>
              <li>Sandblasting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start gap-3">
                <span className="text-omega-yellow mt-1">📍</span>
                <span className="text-xs">{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-omega-yellow" />
                {COMPANY_INFO.phone}
              </p>
              <p className="flex items-center gap-3">
                <span className="text-omega-yellow">✉️</span>
                {COMPANY_INFO.email}
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-xs text-gray-500 flex justify-between items-center flex-col md:flex-row">
          <p>© {new Date().getFullYear()} OMEGA Petroleum Services. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;