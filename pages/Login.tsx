import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';
import Logo from '../components/Logo';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
      </div>

      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md relative z-10 border-t-4 border-omega-yellow">
        <div className="flex justify-center mb-8">
           <Logo variant="dark" />
        </div>
        <div className="text-center mb-6">
           <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Client Access Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Client ID / Email</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-omega-yellow transition-colors"
                placeholder="Enter your ID"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="password" 
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-omega-yellow transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-omega-yellow text-omega-dark py-3 rounded-full font-bold uppercase tracking-wide hover:bg-yellow-400 transition-colors flex justify-center items-center shadow-md hover:shadow-lg"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-omega-dark border-t-transparent rounded-full animate-spin"></span>
            ) : (
              'Secure Login'
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          <p>Restricted Access. Authorized personnel only.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;