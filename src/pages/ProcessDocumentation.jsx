import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ProcessDocumentation() {
  const updateProcessExample = `{
  "bookingId": 1200,
  "password": "123456",
  "checkPassKey": true,
  "checkInReview": false,
  "Reexamine": false,
  "parametersWithRunValue": [
    {
      "processingId": 7513,
      "runValue": "-",
      "doctorComment": null,
      "highlight": false
    },
    {
      "processingId": 7514,
      "runValue": "Positive",
      "doctorComment": "this is test comment",
      "highlight": true
    }
  ],
  "parametersWithComment": []
}`;

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Process Management API</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">Overview</h2>
        <p className="mb-4">
          The Process Management API handles the laboratory testing workflow, allowing for the recording
          and updating of test results, quality control checks, and diagnostic interpretations.
        </p>
        <p className="mb-4">
          This API is critical for:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Recording test results from laboratory equipment</li>
          <li>Flagging abnormal results for physician review</li>
          <li>Adding diagnostic comments and interpretations</li>
          <li>Managing quality control processes</li>
        </ul>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">PUT /process/register-process</h2>
        <p className="mb-4">
          Updates processing details for laboratory tests. This endpoint is used by laboratory technicians
          and pathologists to record test results, add comments, and manage the testing workflow.
        </p>
        <p className="mb-4 font-medium">
          Key features include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Recording quantitative and qualitative test results</li>
          <li>Flagging abnormal results for attention</li>
          <li>Adding physician comments and interpretations</li>
          <li>Quality control verification steps</li>
          <li>Re-examination requests for questionable results</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {updateProcessExample}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-4 mb-2">Response Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {`{
  "success": true,
  "message": "Processing details updated successfully"
}`}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-4 mb-2">Field Descriptions</h3>
        <div className="bg-gray-100 p-4 rounded">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Field</th>
                <th className="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium">checkPassKey</td>
                <td className="py-2">Indicates if quality control checks passed</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">checkInReview</td>
                <td className="py-2">Marks results as under physician review</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Reexamine</td>
                <td className="py-2">Requests re-testing of the sample</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">parametersWithRunValue</td>
                <td className="py-2">Actual test results with optional comments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}