import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiUser, 
  FiCalendar, 
  FiKey, 
  FiSettings,
  FiChevronRight,
  FiSearch
} from 'react-icons/fi';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/authentication', icon: FiKey, label: 'Authentication' },
    { path: '/patient-management', icon: FiUser, label: 'Patient Management' },
    { path: '/booking-management', icon: FiCalendar, label: 'Booking Management' },
    { path: '/process-management', icon: FiSettings, label: 'Process Management' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {sidebarOpen && (
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
                H
              </div>
              <h1 className="text-xl font-bold text-gray-800">Healthcare API</h1>
            </div>
          )}
          <button 
            onClick={toggleSidebar} 
            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-2">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className={`
                      flex items-center p-3 rounded-lg 
                      ${location.pathname === item.path ? 
                        'bg-blue-50 text-blue-600' : 
                        'text-gray-600 hover:bg-gray-100'}
                      transition-colors duration-200
                    `}
                  >
                    <item.icon className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} flex-shrink-0`} size={20} />
                    {sidebarOpen && (
                      <>
                        <span className="flex-1">{item.label}</span>
                        {location.pathname === item.path && (
                          <FiChevronRight size={16} className="text-blue-400" />
                        )}
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Sidebar Footer */}
        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              <p>API Version: 1.0.0</p>
              <p className="mt-1">© 2023 Healthcare</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
              </h2>
            </div>
            {/* <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div> */}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}