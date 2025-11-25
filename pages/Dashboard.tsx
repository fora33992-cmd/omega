import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileCheck, 
  AlertTriangle, 
  LogOut, 
  Download, 
  Search,
  Bell,
  Activity
} from 'lucide-react';
import { MOCK_CERTIFICATES, MOCK_PROJECTS } from '../constants';
import Logo from '../components/Logo';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'certificates'>('overview');

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-omega-dark text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <Logo variant="light" className="scale-75 origin-left" />
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-4 ml-1">Client Portal</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors ${
              activeTab === 'overview' ? 'bg-omega-blue text-white' : 'text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard size={18} />
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('certificates')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors ${
              activeTab === 'certificates' ? 'bg-omega-blue text-white' : 'text-gray-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileCheck size={18} />
            Certificates
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-slate-800 rounded text-sm font-medium transition-colors"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
             <h2 className="text-xl font-bold text-gray-800">
               {activeTab === 'overview' ? 'Dashboard Overview' : 'Inspection Certificates'}
             </h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-omega-blue relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-8 bg-omega-yellow rounded-full flex items-center justify-center font-bold text-omega-dark">
              CP
            </div>
            <div className="text-sm hidden sm:block">
              <p className="font-bold text-gray-800">Client Partner</p>
              <p className="text-xs text-gray-500">PetroCorp Intl.</p>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto p-6">
          
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Valid Certificates</p>
                      <h3 className="text-3xl font-bold text-gray-800 mt-2">12</h3>
                    </div>
                    <FileCheck className="text-green-500 opacity-20" size={32} />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Expiring Soon</p>
                      <h3 className="text-3xl font-bold text-gray-800 mt-2">2</h3>
                    </div>
                    <AlertTriangle className="text-yellow-500 opacity-20" size={32} />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Active Projects</p>
                      <h3 className="text-3xl font-bold text-gray-800 mt-2">3</h3>
                    </div>
                    <Activity className="text-blue-500 opacity-20" size={32} />
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Live Project Progress</h3>
                <div className="grid gap-4">
                  {MOCK_PROJECTS.map(project => (
                    <div key={project.id} className="bg-white p-5 rounded-lg shadow-sm">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-bold text-gray-700">{project.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded font-bold ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-omega-yellow h-2.5 rounded-full transition-all duration-1000" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Progress: {project.progress}%</span>
                        <span>Updated: {project.lastUpdated}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search equipment..." 
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-omega-blue w-64"
                  />
                </div>
                <button className="bg-omega-blue text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors">
                  Request Renewal
                </button>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                    <th className="p-4 font-bold border-b border-gray-100">Equipment Name</th>
                    <th className="p-4 font-bold border-b border-gray-100">Serial No.</th>
                    <th className="p-4 font-bold border-b border-gray-100">Inspection Date</th>
                    <th className="p-4 font-bold border-b border-gray-100">Expiry Date</th>
                    <th className="p-4 font-bold border-b border-gray-100">Status</th>
                    <th className="p-4 font-bold border-b border-gray-100">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {MOCK_CERTIFICATES.map((cert) => (
                    <tr key={cert.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 border-b border-gray-100 font-bold">{cert.equipmentName}</td>
                      <td className="p-4 border-b border-gray-100 font-mono text-xs">{cert.serialNumber}</td>
                      <td className="p-4 border-b border-gray-100">{cert.inspectionDate}</td>
                      <td className="p-4 border-b border-gray-100">{cert.expiryDate}</td>
                      <td className="p-4 border-b border-gray-100">
                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                          cert.status === 'valid' ? 'bg-green-100 text-green-700' : 
                          cert.status === 'expiring' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {cert.status}
                        </span>
                      </td>
                      <td className="p-4 border-b border-gray-100">
                        <button className="text-omega-blue hover:text-omega-yellow transition-colors flex items-center gap-1">
                          <Download size={14} /> PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;