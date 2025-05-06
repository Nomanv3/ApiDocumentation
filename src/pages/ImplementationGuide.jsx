import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ImplementationGuide() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Healthcare API Implementation Guide</h1>
      
      {/* Getting Started Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">1. Getting Started</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">1.1 Prerequisites</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>API access credentials (contact <span className="text-blue-600">support@healthapi.com</span>)</li>
            <li>Base URLs:
              <ul className="list-disc pl-6 mt-2">
                <li>Production: <code className="bg-gray-100 px-1 rounded">https://api.healthcare.example.com/v1</code></li>
                <li>Sandbox: <code className="bg-gray-100 px-1 rounded">https://sandbox.healthcare.example.com/v1</code></li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">1.2 Authentication</h3>
          <p className="text-gray-700 mb-4">Two authentication methods are available:</p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">JWT (for user-facing apps):</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`curl -X POST https://api.healthcare.example.com/auth/login \\\n  -H "Content-Type: application/json" \\\n  -d '{"username": "your_username", "password": "your_password"}'`}
            </SyntaxHighlighter>
            <p className="text-gray-700 mt-2">Response:</p>
            <SyntaxHighlighter language="json" style={atomDark} className="rounded-md text-sm">
              {`{\n  "token": "eyJhbGciOi...",\n  "expiresIn": 3600\n}`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">API Key (for server-to-server):</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`curl -X GET https://api.healthcare.example.com/patients \\\n  -H "x-api-key: your_api_key_here"`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">2. API Endpoints Reference</h2>
        
        {/* Authentication Endpoints */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Authentication</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">User Login</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`POST /auth/login\n{\n  "username": "string",\n  "password": "string"\n}`}
            </SyntaxHighlighter>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Generate API Key</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`POST /api-keys/generate\n{\n  "name": "string",\n  "scope": ["patients:read", "bookings:write"]\n}`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">List API Keys</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`GET /api-keys/list`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Patient Management Endpoints */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Patient Management</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Register Patient</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`POST /registration/patient\n{\n  "fullName": "string",\n  "contactNumber": "string",\n  "gender": 1|2,\n  "age": number\n}`}
            </SyntaxHighlighter>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Get Patient</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`GET /registration/patient?id=123`}
            </SyntaxHighlighter>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Update Patient</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`PUT /registration/patient\n{\n  "id": "123",\n  "fullName": "string",\n  "contactNumber": "string"\n}`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">List Patients</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`POST /registration/list-registration\n{\n  "from_date": "DD-MM-YYYY",\n  "to_date": "DD-MM-YYYY"\n}`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Booking Management Endpoints */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">2.3 Booking Management</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Create Booking</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`POST /bookings/register-booking\n{\n  "patientId": "123",\n  "tests": ["test_id_1", "test_id_2"],\n  "bookingDate": "YYYY-MM-DD"\n}`}
            </SyntaxHighlighter>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Update Booking</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`PUT /bookings/register-booking\n{\n  "bookingId": 456,\n  "status": "completed",\n  "notes": "string"\n}`}
            </SyntaxHighlighter>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Get Booking</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`GET /bookings/register-booking?id=456`}
            </SyntaxHighlighter>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">List Bookings</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`POST /bookings/list-bookings\n{\n  "from_date": "DD-MM-YYYY",\n  "to_date": "DD-MM-YYYY"\n}`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Delete Booking</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`DELETE /bookings/register-booking?id=456`}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Process Management Endpoints */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">2.4 Process Management</h3>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Update Process</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`PUT /process/register-process\n{\n  "bookingId": 456,\n  "results": [\n    {\n      "testId": "test_1",\n      "values": {\n        "param1": "value1"\n      }\n    }\n  ]\n}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      {/* Common Workflows Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">3. Common Workflows</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">3.1 Patient Registration → Lab Booking</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Step 1: Register a Patient</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`curl -X POST https://api.healthcare.example.com/registration/patient \\\n  -H "Authorization: Bearer <JWT>" \\\n  -d '{\n    "fullName": "Jane Doe",\n    "contactNumber": "1234567890",\n    "gender": 2\n  }'`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Step 2: Create a Lab Booking</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`curl -X POST https://api.healthcare.example.com/bookings/register-booking \\\n  -H "x-api-key: your_api_key" \\\n  -d '{\n    "patientId": "123",\n    "tests": ["blood_count"]\n  }'`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-3">3.2 Test Results Processing</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Step 1: Get Booking Details</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`curl -X GET https://api.healthcare.example.com/bookings/register-booking?id=456 \\\n  -H "x-api-key: your_api_key"`}
            </SyntaxHighlighter>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Step 2: Update Test Results</h4>
            <SyntaxHighlighter language="bash" style={atomDark} className="rounded-md text-sm">
              {`curl -X PUT https://api.healthcare.example.com/process/register-process \\\n  -H "x-api-key: your_api_key" \\\n  -d '{\n    "bookingId": 456,\n    "results": [{\n      "testId": "blood_count",\n      "values": {\n        "wbc": 5.5\n      }\n    }]\n  }'`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">4. Best Practices</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Always cache JWT tokens client-side to avoid frequent logins</li>
            <li>Implement exponential backoff for rate-limited requests</li>
            <li>Validate all API responses for <code className="bg-gray-100 px-1 rounded">error</code> fields</li>
            <li>Use HTTPS for all production requests</li>
            <li>Store API keys securely (never in client-side code)</li>
            <li>Implement proper error handling for all API calls</li>
            <li>Use pagination for large datasets (limit/offset parameters)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}