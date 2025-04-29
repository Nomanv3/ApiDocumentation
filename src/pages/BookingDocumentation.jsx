import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BookingDocumentation() {
  const newBookingExample = `{
  "bookingDate": "2024-04-08",
  "doctorReference": "Dr. xyz",
  "amount": 100.0,
  "transactionId": "123456",
  "paymentDate": "2024-02-24",
  "notes": "test",
  "collectionWay": "In-person",
  "paymentMode": "Card",
  "organizationId": "1",
  "createdBy": "test",
  "user_id": "1",
  "discountBy": "",
  "discountGiven": "",
  "labPartner": "1",
  "discountReason": "ABC",
  "services": [
    {
      "patientId": "196",
      "testId": "20",
      "testName": "Mean Platelet Volume",
      "price": 100,
      "discount": 0,
      "discountFormat": true,
      "quantity": 1,
      "doctorReference": "Dr. xyz",
      "collectionWay": "In-person",
      "testCategory": "Sample",
      "organizationId": "HNH",
      "createdBy": "test",
      "updatedBy": "test",
      "referencePatientId": 1,
      "serviceCategory": "Service 1",
      "btobrate": "250"
    }
  ]
}`;

  const updateBookingExample = `{
  "bookingId": 95,
  "bookingDate": "08-04-2024",
  "doctorReference": "TEST",
  "amount": 100.0,
  "transactionId": "123456",
  "paymentDate": "2024-02-24",
  "paymentStatus": "Paid",
  "notes": "test",
  "bookingStatus": "In-Collection",
  "collectionWay": "In-person",
  "paymentMode": "Card",
  "organizationId": "HNH",
  "createdBy": "test",
  "updatedBy": "test",
  "user_id": "1",
  "services": [
    {
      "patientId": "196",
      "testId": "20",
      "testName": "Mean Platelet Volume",
      "price": 100,
      "discount": 0,
      "discountFormat": true,
      "quantity": 1,
      "doctorReference": "Dr. xyz",
      "collectionWay": "In-person",
      "testCategory": "Sample",
      "organizationId": "HNH",
      "createdBy": "test",
      "updatedBy": "test",
      "referencePatientId": 1,
      "serviceCategory": "Service 1"
    }
  ]
}`;

  const listBookingsExample = `{
  "from_date": "01-12-2024",
  "to_date": "06-12-2024",
  "tab_name": "Report",
  "org_id": "0"
}`;

  const overallBookingsExample = `{
  "from_date": "18-03-2025",
  "to_date": "22-03-2025",
  "tabName": "patientWise",
  "org_id": "37"
}`;

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Booking Management API</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">Overview</h2>
        <p className="mb-4">
          The Booking Management API provides comprehensive functionality for managing laboratory test bookings,
          including creation, updates, retrieval, and reporting. This API is essential for healthcare providers
          to schedule and track diagnostic tests for patients.
        </p>
        <p className="mb-4">
          Key features include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Creation of new lab test bookings with multiple services</li>
          <li>Tracking booking status through the testing workflow</li>
          <li>Detailed reporting capabilities with multiple view options</li>
          <li>Integration with patient records and test catalogs</li>
        </ul>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">POST /bookings/register-booking</h2>
        <p className="mb-4">
          Creates a new laboratory test booking. This endpoint allows healthcare providers to schedule one or more
          diagnostic tests for a patient, specifying details like test type, collection method, and payment information.
        </p>
        <p className="mb-4 font-medium">
          The booking system supports complex scenarios including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Multiple tests in a single booking</li>
          <li>Different collection methods (in-person, home collection)</li>
          <li>Discounts and special pricing arrangements</li>
          <li>Integration with lab partner systems</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {newBookingExample}
        </SyntaxHighlighter>

        <h3 className="text-xl font-semibold mt-4 mb-2">Response Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {`{
  "bookingId": 123,
  "status": "created"
}`}
        </SyntaxHighlighter>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">PUT /bookings/register-booking</h2>
        <p className="mb-4">
          Updates an existing laboratory booking. This endpoint allows modifications to booking details,
          including test services, status changes, and payment information.
        </p>
        <p className="mb-4">
          Important considerations:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Only certain fields can be modified after initial creation</li>
          <li>Status changes may trigger workflow events</li>
          <li>Service modifications may affect pricing</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {updateBookingExample}
        </SyntaxHighlighter>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">GET /bookings/register-booking</h2>
        <p className="mb-4">
          Retrieves detailed information about a specific booking. This endpoint supports filtering by booking status
          to help healthcare providers track tests through different stages of the workflow.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Endpoint Variations</h3>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">URL</th>
                <th className="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-mono">/bookings/register-booking?id=95</td>
                <td className="py-2">Get basic booking details</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-mono">/bookings/register-booking?id=333&screen_type=Completed</td>
                <td className="py-2">Get completed bookings</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-mono">/bookings/register-booking?id=333&screen_type=Collection</td>
                <td className="py-2">Get bookings in collection phase</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-mono">/bookings/register-booking?id=333&screen_type=Processing</td>
                <td className="py-2">Get bookings being processed</td>
              </tr>
              <tr>
                <td className="py-2 font-mono">/bookings/register-booking?id=333&screen_type=All</td>
                <td className="py-2">Get all bookings regardless of status</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">POST /bookings/list-bookings</h2>
        <p className="mb-4">
          Retrieves a list of bookings within a specified date range. This endpoint is designed for reporting
          and provides filtered views of booking data.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {listBookingsExample}
        </SyntaxHighlighter>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">POST /bookings/list-overall-bookings</h2>
        <p className="mb-4">
          Generates comprehensive booking reports with multiple view options. This powerful endpoint supports
          different analytical perspectives on booking data.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Report Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border p-4 rounded">
            <h4 className="font-semibold">patientWise</h4>
            <p>Organizes data by patient with all their bookings</p>
          </div>
          <div className="border p-4 rounded">
            <h4 className="font-semibold">bookingWise</h4>
            <p>Shows individual booking records</p>
          </div>
          <div className="border p-4 rounded">
            <h4 className="font-semibold">testWise</h4>
            <p>Aggregates data by test type across all bookings</p>
          </div>
          <div className="border p-4 rounded">
            <h4 className="font-semibold">sampleWise</h4>
            <p>Organizes data by sample collection details</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Request Example</h3>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded">
          {overallBookingsExample}
        </SyntaxHighlighter>
      </div>

      <div className="api-endpoint">
        <h2 className="text-2xl font-semibold text-healthcare-dark mb-4">DELETE /bookings/register-booking</h2>
        <p className="mb-4">
          Cancels and removes a specified booking. This endpoint should be used carefully as it permanently
          removes booking records from the system.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Parameters</h3>
        <div className="bg-gray-100 p-4 rounded">
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
                <td className="py-2">Unique booking ID to delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}