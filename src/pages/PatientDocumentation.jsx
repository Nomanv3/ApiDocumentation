import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function PatientDocumentation() {
  const patientRegistrationExample = `{
  "fullName": "Rehan",
  "emailAddress": "Rehan@gmail.com",
  "gender": 1,
  "age": 24,
  "contactNumber": "8767711033",
  "address": "Pune City",
  "organizationId": 0,
  "designation": "Mr.",
  "parent_child_relation": 3,
  "is_parent": true,
  "linking_id": 18,
  "city": "Pune City",
  "state": "Maharashtra",
  "country": "India",
  "pincode": "412207",
  "createdBy": 0
}`;

  const updatePatientExample = `{
  "id": "46",
  "fullName": "Shoaib",
  "emailAddress": "shoaib@gmail.com",
  "gender": "1",
  "age": 24,
  "contactNumber": "8787878787",
  "address": "Pune City",
  "designation": "Mr.",
  "parent_child_relation": 3,
  "city": "Pune City",
  "state": "Maharashtra",
  "country": "India",
  "pincode": "412207",
  "updatedBy": "0"
}`;

  const listPatientsExample = `{
  "from_date": "28-01-2025",
  "to_date": "28-01-2025",
  "org_id": "37"
}`;

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Patient Management API</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">Overview</h2>
        <p className="mb-4">
          The Patient Management API provides comprehensive functionality for managing patient records,
          including registration, updates, and retrieval. This API forms the foundation of the healthcare
          system by maintaining accurate patient demographic and contact information.
        </p>
        <p className="mb-4">
          Key features include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Complete patient registration with demographic details</li>
          <li>Family relationship tracking through parent-child linkages</li>
          <li>Geographical information storage for regional healthcare analysis</li>
          <li>Audit trails for all patient record modifications</li>
        </ul>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">POST /registration/patient</h2>
        <p className="mb-4">
          Registers a new patient in the healthcare system. This endpoint captures comprehensive demographic,
          contact, and family relationship information essential for healthcare delivery and reporting.
        </p>
        <p className="mb-4 font-medium">
          The registration process supports:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Family linkage through parent-child relationships</li>
          <li>Multiple contact methods and addresses</li>
          <li>Organization-specific patient identifiers</li>
          <li>Detailed geographical information for public health reporting</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {patientRegistrationExample}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-4 mb-2">Response Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {`{
  "success": true,
  "message": "Patient registered successfully",
  "data": {
    "patientId": "123"
  }
}`}
        </SyntaxHighlighter>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">GET /registration/patient</h2>
        <p className="mb-4">
          Retrieves detailed information about a specific patient. This endpoint provides complete patient
          records including demographic details, contact information, and family relationships.
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
              <tr>
                <td className="py-2">id</td>
                <td className="py-2">integer</td>
                <td className="py-2">Unique patient ID</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">PUT /registration/patient</h2>
        <p className="mb-4">
          Updates an existing patient's information. This endpoint allows modifications to patient records
          while maintaining an audit trail of changes through the updatedBy field.
        </p>
        <p className="mb-4">
          Important considerations:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Certain fields like patient ID cannot be modified</li>
          <li>Family relationships can be updated as needed</li>
          <li>All changes are logged with the modifying user's ID</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {updatePatientExample}
        </SyntaxHighlighter>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">POST /registration/list-registration</h2>
        <p className="mb-4">
          Retrieves a list of patients registered within a specified date range. This endpoint is designed
          for reporting and analysis of patient demographics.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {listPatientsExample}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}