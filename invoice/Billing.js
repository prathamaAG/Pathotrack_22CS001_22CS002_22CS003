import React, { useState } from 'react';
import easyinvoice from 'easyinvoice';
import './Billing.css';

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    clientAddress: '',
    clientZip: '',
    clientCountry: '',
    tests: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pdfBase64, setPdfBase64] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox'
        ? checked
          ? [...prevData.tests, value]
          : prevData.tests.filter(test => test !== value)
        : value
    }));
  };

  const createInvoiceData = (data) => {
    return {
      images: { logo: "https://via.placeholder.com/150" },
      client: {
        company: "Client",
        address: data.clientAddress,
        zip: data.clientZip,
        country: data.clientCountry
      },
      information: {
        number: '2023.0001',
        date: new Date().toISOString().split('T')[0],
        'due-date': new Date(new Date().setDate(new Date().getDate() + 15)).toISOString().split('T')[0]
      },
      products: data.tests.map(test => {
        const [description, price] = test.split('|');
        return { quantity: 1, description, 'tax-rate': 0, price: parseFloat(price) };
      }),
      bottomNotice: `Patient Name: ${data.patientName}\nEmail Address: ${data.patientEmail}`,
      settings: {
        currency: "INR",
        locale: "en-IN",
        marginTop: 25,
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 25,
        format: "A4",
        height: "1000px",
        width: "500px",
        orientation: "portrait"
      }
    };
  };

  const handleSendInvoice = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = createInvoiceData(formData);
      const result = await easyinvoice.createInvoice(data);

      if (result.error) {
        console.error("Error creating invoice:", result.error);
        setError('Error creating invoice.');
        setLoading(false);
        return;
      }

      const pdfBase64 = result.pdf; // Get the PDF as base64 string
      if (!pdfBase64) {
        throw new Error('PDF base64 not found in the result.');
      }

      setPdfBase64(pdfBase64); // Set the pdfBase64 state

      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.patientEmail, pdfBase64 })
      });

      const responseData = await response.json();

      if (responseData.success) {
        alert('Invoice sent successfully!');
      } else {
        alert('Failed to send invoice.');
      }
    } catch (error) {
      console.error('Error sending invoice:', error);
      setError('An error occurred while sending the invoice.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadInvoice = () => {
    if (pdfBase64) {
      const link = document.createElement('a');
      link.href = `data:application/pdf;base64,${pdfBase64}`;
      link.download = 'invoice.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('No invoice to download.');
    }
  };

  return (
    <div className="invoice-form">
      <h2>Invoice Form</h2>
      <form id="invoiceForm">
        {/* Form Fields */}
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
          />
        </label><br />
        <label>
          Email Address:
          <input
            type="email"
            name="patientEmail"
            value={formData.patientEmail}
            onChange={handleChange}
          />
        </label><br />
        <label>
          Address:
          <input
            type="text"
            name="clientAddress"
            value={formData.clientAddress}
            onChange={handleChange}
          />
        </label><br />
        <label>
          Zip:
          <input
            type="text"
            name="clientZip"
            value={formData.clientZip}
            onChange={handleChange}
          />
        </label><br />
        <label>
          Country:
          <input
            type="text"
            name="clientCountry"
            value={formData.clientCountry}
            onChange={handleChange}
          />
        </label><br />

        {/* Test Options */}
        <label>
          <input
            type="checkbox"
            name="tests"
            value="Blood Test|500"
            checked={formData.tests.includes("Blood Test|500")}
            onChange={handleChange}
          /> Blood Test - ₹500
        </label><br />
        <label>
          <input
            type="checkbox"
            name="tests"
            value="X-Ray|1500"
            checked={formData.tests.includes("X-Ray|1500")}
            onChange={handleChange}
          /> X-Ray - ₹1500
        </label><br />
        <label>
          <input
            type="checkbox"
            name="tests"
            value="Ultrasound|2000"
            checked={formData.tests.includes("Ultrasound|2000")}
            onChange={handleChange}
          /> Ultrasound - ₹2000
        </label><br />
        <label>
          <input
            type="checkbox"
            name="tests"
            value="ECG|2500"
            checked={formData.tests.includes("ECG|2500")}
            onChange={handleChange}
          /> ECG - ₹2500
        </label><br />

        <button type="button" onClick={handleSendInvoice} disabled={loading}>
          {loading ? 'Sending...' : 'Send Invoice'}
        </button>

        <button type="button" onClick={handleDownloadInvoice} disabled={!pdfBase64}>
          Download Invoice
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default InvoiceForm;
