import { useState } from 'react';
import axios from 'axios';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { FiRotateCw, FiBook, FiCode } from 'react-icons/fi';

// Define your API URLs here (or use a config file)
const API_BASE_URL = 'https://newswaggerbackend.onrender.com';

export default function SwaggerDocs() {
  const [apiKey, setApiKey] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [spec, setSpec] = useState(null);
  const [specLoading, setSpecLoading] = useState(false);

  const validateApiKey = async () => {
    try {
      setError('');
      setLoading(true);
      
      // Validate API key first
      const validationResponse = await axios.post(
        `${API_BASE_URL}/validate-key`,
        { apiKey },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (!validationResponse.data.valid) {
        throw new Error(validationResponse.data.message || 'Invalid API key');
      }

      // Load the spec after successful validation
      setSpecLoading(true);
      const specResponse = await axios.get(
        `${API_BASE_URL}/api-docs/swagger.yaml`
      );
      
      setSpec(specResponse.data);
      setValidated(true);
      
    } catch (err) {
      console.error('API Docs Error:', err);
      setError(err.response?.data?.message || 
              err.message || 
              'Failed to load documentation. Please try again later.');
      setValidated(false);
    } finally {
      setLoading(false);
      setSpecLoading(false);
    }
  };

  if (!validated) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl shadow-lg p-6 max-w-md mx-auto my-8 border border-gray-700">
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center justify-center mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
              AQ
            </div>
            <h2 className="text-2xl font-bold text-white">AQure API V1</h2>
          </div>
          <h3 className="text-lg text-blue-200 font-medium">Documentation Portal</h3>
        </div>
        
        <p className="text-gray-300 text-center mb-4">
          To access the interactive API documentation, please enter your valid API key below.
          The key can be obtained through the API Key Generation.
        </p>
        
        <div className="mb-4">
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API key (e.g., sk_live_123abc...)"
            className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
            onKeyPress={(e) => e.key === 'Enter' && validateApiKey()}
          />
          {error && (
            <div className="mt-2 text-red-400 bg-red-900 bg-opacity-30 p-2 rounded-md text-sm">
              {error}
            </div>
          )}
        </div>
        
        <button
          onClick={validateApiKey}
          disabled={loading}
          className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2
            ${loading ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-500'}
            text-white shadow-md transition-all`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Validating...
            </>
          ) : (
            'Validate API Key'
          )}
        </button>
        
        <div className="flex justify-center gap-4 mt-6">
          {/* <a 
            href="https://aqure-docs-api-93598.web.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors px-3 py-2 rounded-md bg-white bg-opacity-0 hover:bg-opacity-10"
          >
            <FiBook className="text-blue-400" />
            User Docs
          </a> */}
          <button 
            onClick={() => setError('Please validate your API key first to access the reference')}
            className="flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors px-3 py-2 rounded-md bg-white bg-opacity-0 hover:bg-opacity-10"
          >
            <FiCode className="text-blue-400" />
            API key Generation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">API Documentation</h2>
        <button
          onClick={() => {
            setValidated(false);
            setApiKey('');
            setSpec(null);
          }}
          className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
        >
          <FiRotateCw size={14} />
          Change Key
        </button>
      </div>
      
      <div className="p-4">
        {specLoading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-2 text-gray-600">Loading API documentation...</p>
          </div>
        ) : spec ? (
          <SwaggerUI 
            spec={spec}
            requestInterceptor={(req) => {
              if (req.url.includes('newswaggerbackend.onrender.com')) {
                req.headers['x-api-key'] = apiKey;
              }
              return req;
            }}
            docExpansion="none"
            defaultModelExpandDepth={1}
            displayOperationId={false}
            onComplete={() => {
              const infoContainer = document.querySelector('.information-container');
              if (infoContainer) {
                const keyIndicator = document.createElement('div');
                keyIndicator.className = 'bg-blue-50 p-3 rounded-md border-l-4 border-blue-500 mb-4 flex justify-between items-center text-sm';
                keyIndicator.innerHTML = `
                  <div>
                    <strong class="text-blue-800">API Key Status:</strong> 
                    <span class="text-green-600 ml-1">Active</span>
                  </div>
                `;
                infoContainer.prepend(keyIndicator);
              }
            }}
          />
        ) : (
          <div className="text-center py-8 text-red-500">
            Failed to load API documentation. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}