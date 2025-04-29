import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiKey, FiUser, FiCalendar, FiSettings, FiArrowRight, FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';

export default function Home() {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const apiEndpoints = {
    authentication: [
      { name: 'User Signup', method: 'POST', path: '/auth/signup' },
      { name: 'User Login', method: 'POST', path: '/auth/login' },
      { name: 'Generate API Key', method: 'POST', path: '/api-keys/generate' },
      { name: 'List API Keys', method: 'GET', path: '/api-keys/list' },
      { name: 'Revoke API Key', method: 'PUT', path: '/api-keys/revoke' }
    ],
    patient: [
      { name: 'Register Patient', method: 'POST', path: '/registration/patient' },
      { name: 'Get Patient', method: 'GET', path: '/registration/patient' },
      { name: 'Update Patient', method: 'PUT', path: '/registration/patient' },
      { name: 'List Patients', method: 'POST', path: '/registration/list-registration' }
    ],
    booking: [
      { name: 'Create Booking', method: 'POST', path: '/bookings/register-booking' },
      { name: 'Update Booking', method: 'PUT', path: '/bookings/register-booking' },
      { name: 'Get Booking', method: 'GET', path: '/bookings/register-booking' },
      { name: 'List Bookings', method: 'POST', path: '/bookings/list-bookings' },
      { name: 'Overall Bookings', method: 'POST', path: '/bookings/list-overall-bookings' },
      { name: 'Delete Booking', method: 'DELETE', path: '/bookings/register-booking' }
    ],
    process: [
      { name: 'Update Process', method: 'PUT', path: '/process/register-process' }
    ]
  };

  const featureCards = [
    {
      title: "Authentication",
      description: "Secure JWT and API key based authentication flows",
      icon: <FiKey className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      textColor: "text-blue-800",
      route: "/authentication",
      key: "authentication"
    },
    {
      title: "Patient Management",
      description: "Complete patient registration and management",
      icon: <FiUser className="text-green-600" size={24} />,
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      textColor: "text-green-800",
      route: "/patient-management",
      key: "patient"
    },
    {
      title: "Booking Management",
      description: "Lab test booking creation and management",
      icon: <FiCalendar className="text-purple-600" size={24} />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      textColor: "text-purple-800",
      route: "/booking-management",
      key: "booking"
    },
    {
      title: "Process Management",
      description: "Test processing and results management",
      icon: <FiSettings className="text-indigo-600" size={24} />,
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-100",
      textColor: "text-indigo-800",
      route: "/process-management",
      key: "process"
    }
  ];

  // Filter endpoints based on search query
  const filteredEndpoints = useMemo(() => {
    if (!searchQuery) return apiEndpoints;
    
    const result = {};
    Object.keys(apiEndpoints).forEach(key => {
      const filtered = apiEndpoints[key].filter(endpoint => 
        endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        endpoint.method.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length > 0) {
        result[key] = filtered;
      }
    });
    return result;
  }, [searchQuery, apiEndpoints]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Healthcare API Documentation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive guide for integrating with our Healthcare Authentication and Management API
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search APIs by name, path or method..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* API Summary Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">API Endpoints Summary</h2>
          <p className="text-gray-600 mt-2">
            {searchQuery ? (
              `Showing results for "${searchQuery}"`
            ) : (
              'Quick overview of all available API endpoints. Click to expand each section.'
            )}
          </p>
        </div>
        
        {Object.keys(filteredEndpoints).length > 0 ? (
          featureCards
            .filter(card => filteredEndpoints[card.key])
            .map((card) => (
              <div key={card.key} className="border-b last:border-b-0">
                <button
                  onClick={() => toggleSection(card.key)}
                  className="w-full flex justify-between items-center p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-md ${card.bgColor} flex items-center justify-center mr-4`}>
                      {card.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
                      <p className="text-sm text-gray-500">{filteredEndpoints[card.key].length} endpoints</p>
                    </div>
                  </div>
                  {expandedSection === card.key ? (
                    <FiChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <FiChevronDown className="text-gray-500" size={20} />
                  )}
                </button>
                
                {expandedSection === card.key && (
                  <div className="px-6 pb-6">
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Endpoint
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Method
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Path
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredEndpoints[card.key].map((endpoint, index) => (
                            <tr 
                              key={index} 
                              className="hover:bg-blue-50 cursor-pointer"
                              onClick={() => navigate(card.route)}
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {endpoint.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                  ${endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                                    endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-red-100 text-red-800'}`}>
                                  {endpoint.method}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                                {endpoint.path}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => navigate(card.route)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        View Full Documentation <FiArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">No API endpoints found matching your search.</p>
          </div>
        )}
      </div>

      {/* Feature Cards */}
      {!searchQuery && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Explore API Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <div 
                key={index}
                onClick={() => navigate(card.route)}
                className={`${card.bgColor} border ${card.borderColor} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 group`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-3">
                      {card.icon}
                    </div>
                    <h3 className={`${card.textColor} text-lg font-semibold mb-2`}>{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                  <div className="mt-auto flex items-center text-sm font-medium group-hover:text-blue-600 transition-colors duration-200">
                    <span className="mr-1">Explore</span>
                    <FiArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}