import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AuthDocumentation() {
  const authFlowDiagram = `
    graph TD
      A[User] -->|Signup Request| S[/auth/signup]
      A -->|Login Request| B[/auth/login]
      B --> C{JWT Token}
      S --> C
      C -->|User Access| D[Authorization Header]
      C -->|Generate Key| E[/api-keys/generate]
      E --> F[API Key]
      F -->|Service Access| G[x-api-key Header]
  `;

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
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Authentication API</h1>
      
      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">Authentication Flow</h2>
        <div className="bg-white p-4 rounded border">
          <pre className="whitespace-pre-wrap">{authFlowDiagram}</pre>
        </div>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">POST /auth/signup</h2>
        <p className="mb-4">Register a new user and receive a JWT token.</p>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {signupExample}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-4 mb-2">Response Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {signupResponse}
        </SyntaxHighlighter>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">POST /auth/login</h2>
        <p className="mb-4">Authenticate a user and receive a JWT token.</p>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {`{
  "username": "admin",
  "password": "admin123"
}`}
        </SyntaxHighlighter>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">API Key Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <h3 className="text-lg font-semibold">POST /api-keys/generate</h3>
            <p>Generate a new API key</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-lg font-semibold">GET /api-keys/list</h3>
            <p>List all active API keys</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-lg font-semibold">PUT /api-keys/revoke</h3>
            <p>Revoke an API key</p>
          </div>
        </div>
      </div>
    </div>
  );
}