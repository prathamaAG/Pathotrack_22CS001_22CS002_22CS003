import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './commoncomponents/navbar/navbar'; // Adjusted path to Navbar.js
import Homescreen from './pages/homescreen/homescreen';
import Footer from './commoncomponents/footer/footer';
import InvoiceForm from './commoncomponents/invoice/Billing';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Homescreen />
          <Footer />
        </>
      ),
    },
    {
      path: '/Billing',
      element: (
        <>
          <Navbar />
          <InvoiceForm />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
export default App;
