import React from 'react';

export default function SearchDocumentation() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Search API</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">Overview</h2>
        <p className="mb-4">
          The Search API provides unified search functionality across patients, bookings, and tests,
          enabling healthcare providers to quickly locate relevant records.
        </p>
        <p className="mb-4">
          This API supports:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cross-entity searching with a single query</li>
          <li>Flexible filtering by organization</li>
          <li>Different search scopes for targeted results</li>
        </ul>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">GET /search-handler</h2>
        <p className="mb-4">
          Performs a unified search across the healthcare system. This endpoint allows searching across
          multiple entity types with flexible filtering options.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Parameters</h3>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Parameter</th>
                <th className="text-left py-2">Type</th>
                <th className="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">flag</td>
                <td className="py-2">string</td>
                <td className="py-2">Search flag for query processing (e.g., "sh")</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">org_id</td>
                <td className="py-2">integer</td>
                <td className="py-2">Organization ID for filtering</td>
              </tr>
              <tr>
                <td className="py-2">scope</td>
                <td className="py-2">string</td>
                <td className="py-2">Search scope (patient, booking, or test)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-2">Example URLs</h3>
        <div className="bg-gray-100 p-4 rounded">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">URL</th>
                <th className="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-mono">/search-handler?flag=sh&org_id=0&scope=patient</td>
                <td className="py-2">Search for patients</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-mono">/search-handler?flag=sh&org_id=0&scope=booking</td>
                <td className="py-2">Search for bookings</td>
              </tr>
              <tr>
                <td className="py-2 font-mono">/search-handler?flag=sh&org_id=0&scope=test</td>
                <td className="py-2">Search for tests</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}