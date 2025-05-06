import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

export default function Documentation() {
  const [copiedEndpoint, setCopiedEndpoint] = useState(null);
  const [activeTab, setActiveTab] = useState('booking');
  const [loadingStates, setLoadingStates] = useState({});
  const [apiResponses, setApiResponses] = useState({});

  const copyToClipboard = (text, endpointId) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpointId);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const getMockResponse = (endpointId, method, path) => {
    const baseResponse = {
      success: true,
      status: 200,
      statusText: 'OK',
      timestamp: new Date().toISOString()
    };

    // Booking Endpoints
    if (path.includes('/bookings/register-booking')) {
      if (method === 'POST') {
        return {
          ...baseResponse,
          data: {
            bookingId: Math.floor(Math.random() * 1000) + 1000,
            status: 'Created',
            message: 'Booking successfully created',
            services: [
              {
                serviceId: Math.floor(Math.random() * 100) + 10,
                status: 'Registered'
              }
            ]
          }
        };
      } else if (method === 'PUT') {
        return {
          ...baseResponse,
          data: {
            bookingId: 95,
            status: 'Updated',
            message: 'Booking successfully updated'
          }
        };
      } else if (method === 'GET') {
        return {
          ...baseResponse,
          data: {
            bookingId: 95,
            bookingDate: "2024-04-08",
            status: "Confirmed",
            patientName: "John Doe",
            tests: ["Mean Platelet Volume"],
            paymentStatus: "Paid"
          }
        };
      } else if (method === 'DELETE') {
        return {
          ...baseResponse,
          data: {
            bookingId: 5,
            status: 'Deleted',
            message: 'Booking successfully deleted'
          }
        };
      }
    } else if (path.includes('/bookings/list-bookings')) {
      return {
        ...baseResponse,
        data: {
          bookings: [
            {
              bookingId: 95,
              bookingDate: "2024-04-08",
              patientName: "John Doe",
              tests: ["Mean Platelet Volume"],
              status: "Completed"
            },
            {
              bookingId: 96,
              bookingDate: "2024-04-09",
              patientName: "Jane Smith",
              tests: ["Complete Blood Count"],
              status: "In-Progress"
            }
          ],
          total: 2
        }
      };
    } else if (path.includes('/bookings/list-overall-bookings')) {
      return {
        ...baseResponse,
        data: {
          summary: {
            totalBookings: 15,
            completed: 10,
            inProgress: 3,
            pending: 2
          },
          details: [
            {
              date: "2024-03-18",
              count: 3
            },
            {
              date: "2024-03-19",
              count: 5
            }
          ]
        }
      };
    }

    // Patient Endpoints
    else if (path.includes('/registration/patient')) {
      if (method === 'POST') {
        return {
          ...baseResponse,
          data: {
            patientId: Math.floor(Math.random() * 1000) + 1000,
            status: 'Registered',
            message: 'Patient registration successful'
          }
        };
      } else if (method === 'PUT') {
        return {
          ...baseResponse,
          data: {
            patientId: 46,
            status: 'Updated',
            message: 'Patient details successfully updated'
          }
        };
      } else if (method === 'GET') {
        return {
          ...baseResponse,
          data: {
            patientId: 225,
            fullName: "Rehan",
            emailAddress: "Rehan@gmail.com",
            contactNumber: "8767711033",
            registrationDate: "2024-01-28"
          }
        };
      }
    } else if (path.includes('/registration/list-registration')) {
      return {
        ...baseResponse,
        data: {
          patients: [
            {
              patientId: 225,
              fullName: "Rehan",
              registrationDate: "2024-01-28"
            },
            {
              patientId: 226,
              fullName: "Shoaib",
              registrationDate: "2024-01-28"
            }
          ],
          total: 2
        }
      };
    }

    // Process Endpoints
    else if (path.includes('/process/register-process')) {
      return {
        ...baseResponse,
        data: {
          bookingId: 1200,
          status: "ProcessUpdated",
          message: "Test results successfully updated",
          updatedParameters: 2
        }
      };
    }

    // Default response for any unhandled endpoints
    return {
      ...baseResponse,
      data: {
        message: `${method} request to ${path} would be successful`,
        simulated: true
      }
    };
  };

  const handleTryItOut = (endpointId, path, method) => {
    setLoadingStates(prev => ({ ...prev, [endpointId]: true }));
    setApiResponses(prev => ({ ...prev, [endpointId]: null }));

    // Simulate API call delay (1 second)
    setTimeout(() => {
      const mockResponse = getMockResponse(endpointId, method, path);
      setApiResponses(prev => ({
        ...prev,
        [endpointId]: {
          success: true,
          data: JSON.stringify(mockResponse.data, null, 2),
          status: mockResponse.status,
          statusText: mockResponse.statusText
        }
      }));
      setLoadingStates(prev => ({ ...prev, [endpointId]: false }));
    }, 1000);
  };

  const apiEndpoints = {
    booking: [
      {
        name: 'Add Booking',
        method: 'POST',
        path: '/bookings/register-booking',
        sampleRequest: JSON.stringify({
          bookingDate: "2024-04-08",
          doctorReference: "Dr. xyz",
          amount: 100.0,
          transactionId: "123456",
          paymentDate: "2024-02-24",
          notes: "test",
          collectionWay: "In-person",
          paymentMode: "Card",
          organizationId: "1",
          createdBy: "test",
          user_id: "1",
          discountBy: "",
          discountGiven: "",
          labPartner: "1",
          discountReason: "ABC",
          services: [
            {
              patientId: "196",
              testId: "20",
              testName: "Mean Platelet Volume",
              price: 100,
              discount: 0,
              discountFormat: true,
              quantity: 1,
              doctorReference: "Dr. xyz",
              collectionWay: "In-person",
              testCategory: "Sample",
              organizationId: "HNH",
              createdBy: "test",
              updatedBy: "test",
              referencePatientId: 1,
              serviceCategory: "Service 1",
              btobrate: "250"
            }
          ]
        }, null, 2)
      },
      {
        name: 'Update Booking',
        method: 'PUT',
        path: '/bookings/register-booking',
        sampleRequest: JSON.stringify({
          bookingId: 95,
          bookingDate: "08-04-2024",
          doctorReference: "TEST",
          amount: 100.0,
          transactionId: "123456",
          paymentDate: "2024-02-24",
          paymentStatus: "Paid",
          notes: "test",
          bookingStatus: "In-Collection",
          collectionWay: "In-person",
          paymentMode: "Card",
          organizationId: "HNH",
          createdBy: "test",
          updatedBy: "test",
          user_id: "1",
          services: [
            {
              patientId: "196",
              testId: "20",
              testName: "Mean Platelet Volume",
              price: 100,
              discount: 0,
              discountFormat: true,
              quantity: 1,
              doctorReference: "Dr. xyz",
              collectionWay: "In-person",
              testCategory: "Sample",
              organizationId: "HNH",
              createdBy: "test",
              updatedBy: "test",
              referencePatientId: 1,
              serviceCategory: "Service 1"
            }
          ]
        }, null, 2)
      },
      {
        name: 'Get Booking',
        method: 'GET',
        path: '/bookings/register-booking?id=95',
        sampleRequest: ''
      },
      {
        name: 'List Bookings',
        method: 'POST',
        path: '/bookings/list-bookings',
        sampleRequest: JSON.stringify({
          from_date: "01-12-2024",
          to_date: "06-12-2024",
          tab_name: "Report",
          org_id: "0"
        }, null, 2)
      },
      {
        name: 'Delete Booking',
        method: 'DELETE',
        path: '/bookings/register-booking?id=5',
        sampleRequest: ''
      },
      {
        name: 'List Overall Bookings',
        method: 'POST',
        path: '/bookings/list-overall-bookings',
        sampleRequest: JSON.stringify({
          from_date: "18-03-2025",
          to_date: "22-03-2025",
          tabName: "patientWise",
          org_id: "37"
        }, null, 2)
      }
    ],
    patient: [
      {
        name: 'Add Registration',
        method: 'POST',
        path: '/registration/patient',
        sampleRequest: JSON.stringify({
          fullName: "Rehan",
          emailAddress: "Rehan@gmail.com",
          gender: 1,
          age: 24,
          contactNumber: "8767711033",
          address: "Pune City",
          organizationId: 0,
          designation: "Mr.",
          parent_child_relation: 3,
          is_parent: true,
          linking_id: 18,
          city: "Pune City",
          state: "Maharashtra",
          country: "India",
          pincode: "412207",
          createdBy: 0
        }, null, 2)
      },
      {
        name: 'List Registration',
        method: 'POST',
        path: '/registration/list-registration',
        sampleRequest: JSON.stringify({
          from_date: "28-01-2025",
          to_date: "28-01-2025",
          org_id: "37"
        }, null, 2)
      },
      {
        name: 'Get Registration',
        method: 'GET',
        path: '/registration/patient?id=225',
        sampleRequest: ''
      },
      {
        name: 'Update Registration',
        method: 'PUT',
        path: '/registration/patient',
        sampleRequest: JSON.stringify({
          id: "46",
          fullName: "Shoaib",
          emailAddress: "shoaib@gmail.com",
          gender: "1",
          age: 24,
          contactNumber: "8787878787",
          address: "Pune City",
          designation: "Mr.",
          parent_child_relation: 3,
          city: "Pune City",
          state: "Maharashtra",
          country: "India",
          pincode: "412207",
          updatedBy: "0"
        }, null, 2)
      }
    ],
    process: [
      {
        name: 'Update Process',
        method: 'PUT',
        path: '/process/register-process',
        sampleRequest: JSON.stringify({
          bookingId: 1200,
          password: "123456",
          checkPassKey: true,
          checkInReview: false,
          Reexamine: false,
          parametersWithRunValue: [
            {
              processingId: 7513,
              runValue: "-",
              doctorComment: null,
              highlight: false
            },
            {
              processingId: 7514,
              runValue: "Positive",
              doctorComment: "this is test comment",
              highlight: true
            }
          ],
          parametersWithComment: []
        }, null, 2)
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">API Documentation</h1>
      
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          {Object.keys(apiEndpoints).map((category) => (
            <button
              key={category}
              className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                activeTab === category
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} APIs
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {apiEndpoints[activeTab].map((endpoint, index) => {
          const endpointId = `${activeTab}-${index}`;
          const response = apiResponses[endpointId];
          
          return (
            <div key={endpointId} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{endpoint.name}</h3>
                    <div className="mt-2 flex items-center">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <span className="ml-2 font-mono text-sm text-gray-600">{endpoint.path}</span>
                      <button
                        onClick={() => copyToClipboard(endpoint.path, endpointId)}
                        className="ml-2 text-gray-400 hover:text-gray-600"
                        title="Copy URL"
                      >
                        {copiedEndpoint === endpointId ? <FiCheck className="text-green-500" /> : <FiCopy />}
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleTryItOut(endpointId, endpoint.path, endpoint.method)}
                    className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${
                      loadingStates[endpointId] 
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    disabled={loadingStates[endpointId]}
                  >
                    {loadingStates[endpointId] ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Loading...
                      </span>
                    ) : 'Try it out'}
                  </button>
                </div>

                {endpoint.sampleRequest && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Request Body</h4>
                    <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm">
                      <code>{endpoint.sampleRequest}</code>
                    </pre>
                  </div>
                )}

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">API Response</h4>
                  {loadingStates[endpointId] ? (
                    <div className="flex justify-center py-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  ) : response ? (
                    <div className="bg-green-50 p-4 rounded-md overflow-x-auto text-sm">
                      <pre className="text-green-800">
                        <code>{response.data}</code>
                      </pre>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-500">
                      Click "Try it out" to see a simulated response
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}