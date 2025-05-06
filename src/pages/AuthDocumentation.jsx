import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AuthDocumentation() {
  const signupExample = `{
  "username": "admin",
  "email": "admin@example.com",
  "password": "admin123"
}`;

  const signupResponse = `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "userId": 1,
    "username": "admin",
    "email": "admin@example.com",
    "role": "user"
  },
  "expiresIn": 3600
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Authentication API</h1>
        <p className="text-lg text-gray-600">Secure authentication flows for your healthcare application</p>
      </header>

      <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Authentication Flow</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col items-center">
            {/* Visual Flow Diagram */}
            <div className="w-full max-w-3xl space-y-8">
              {/* Row 1 */}
              <div className="flex justify-center">
                <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg font-medium">
                  User
                </div>
              </div>

              {/* Row 2 - Arrows */}
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                  <div className="text-sm text-gray-600 mt-1">Signup Request</div>
                </div>
                <div className="text-center">
                  <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                  <div className="text-sm text-gray-600 mt-1">Login Request</div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex justify-around">
                <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-lg font-mono">
                  /auth/signup
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-lg font-mono">
                  /auth/login
                </div>
              </div>

              {/* Row 4 - Arrow */}
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex justify-center">
                <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg border-2 border-green-200 text-center">
                  <div className="font-bold">JWT Token</div>
                  <div className="text-xs mt-1">(User Authentication)</div>
                </div>
              </div>

              {/* Row 6 - Arrows */}
              <div className="flex justify-around mt-6">
                <div className="text-center w-1/2">
                  <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                  <div className="text-sm text-gray-600 mt-1">User Access</div>
                </div>
                <div className="text-center w-1/2">
                  <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                  <div className="text-sm text-gray-600 mt-1">Generate Key</div>
                </div>
              </div>

              {/* Row 7 */}
              <div className="flex justify-around">
                <div className="bg-indigo-100 text-indigo-800 px-4 py-3 rounded-lg font-medium">
                  Authorization Header
                </div>
                <div className="bg-indigo-100 text-indigo-800 px-4 py-3 rounded-lg font-mono">
                  /api-keys/generate
                </div>
              </div>

              {/* Row 8 - Arrow */}
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                </div>
              </div>

              {/* Row 9 */}
              <div className="flex justify-center">
                <div className="bg-amber-100 text-amber-800 px-6 py-4 rounded-lg border-2 border-amber-200 text-center">
                  <div className="font-bold">API Key</div>
                  <div className="text-xs mt-1">(Service Authentication)</div>
                </div>
              </div>

              {/* Row 10 - Arrow */}
              <div className="flex justify-center mt-6">
                <div className="text-center">
                  <div className="h-8 w-px bg-gray-300 mx-auto"></div>
                  <div className="text-sm text-gray-600 mt-1">Service Access</div>
                </div>
              </div>

              {/* Row 11 */}
              <div className="flex justify-center">
                <div className="bg-indigo-100 text-indigo-800 px-4 py-3 rounded-lg font-medium">
                  x-api-key Header
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Signup Endpoint */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b bg-blue-50">
            <h2 className="text-xl font-semibold text-blue-800">POST /auth/signup</h2>
            <p className="text-blue-600">Register a new user</p>
          </div>
          <div className="p-6">
            <h3 className="font-medium text-gray-700 mb-2">Request</h3>
            <SyntaxHighlighter language="json" style={atomDark} className="rounded-md text-sm">
              {signupExample}
            </SyntaxHighlighter>

            <h3 className="font-medium text-gray-700 mt-4 mb-2">Response</h3>
            <SyntaxHighlighter language="json" style={atomDark} className="rounded-md text-sm">
              {signupResponse}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Login Endpoint */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b bg-green-50">
            <h2 className="text-xl font-semibold text-green-800">POST /auth/login</h2>
            <p className="text-green-600">Authenticate existing user</p>
          </div>
          <div className="p-6">
            <h3 className="font-medium text-gray-700 mb-2">Request</h3>
            <SyntaxHighlighter language="json" style={atomDark} className="rounded-md text-sm">
              {`{
  "username": "admin",
  "password": "admin123"
}`}
            </SyntaxHighlighter>

            <h3 className="font-medium text-gray-700 mt-4 mb-2">Response</h3>
            <SyntaxHighlighter language="json" style={atomDark} className="rounded-md text-sm">
              {`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600
}`}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">API Key Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Generate Key */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b bg-purple-50">
              <h3 className="text-lg font-semibold text-purple-800">POST /api-keys/generate</h3>
            </div>
            <div className="p-6">
              <SyntaxHighlighter language="json" style={atomDark} className="rounded-md text-sm">
                {`{
  "name": "mobile-app",
  "scopes": ["patients:read"]
}`}
              </SyntaxHighlighter>
              <div className="mt-4 p-3 bg-gray-50 rounded-md">
                <div className="font-mono text-sm break-all">api_key_7xnb2e9i1o5...</div>
              </div>
            </div>
          </div>

          {/* List Keys */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b bg-amber-50">
              <h3 className="text-lg font-semibold text-amber-800">GET /api-keys/list</h3>
            </div>
            <div className="p-6">
              <SyntaxHighlighter language="json" style={atomDark} className="rounded-md text-sm">
                {`[
  {
    "id": "key_123",
    "name": "mobile-app",
    "createdAt": "2023-06-15"
  }
]`}
              </SyntaxHighlighter>
            </div>
          </div>

          {/* Revoke Key */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b bg-red-50">
              <h3 className="text-lg font-semibold text-red-800">PUT /api-keys/revoke</h3>
            </div>
            <div className="p-6">
              <SyntaxHighlighter language="json" style={atomDark} className="rounded-md text-sm">
                {`{
  "keyId": "key_123"
}`}
              </SyntaxHighlighter>
              <div className="mt-4 p-3 bg-gray-100 rounded-md text-sm">
                Returns 204 No Content on success
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}