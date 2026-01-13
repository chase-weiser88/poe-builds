import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-poe-dark">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e1e1e',
            color: '#f5f5f5',
            border: '1px solid rgba(197, 154, 109, 0.2)'
          },
          success: {
            iconTheme: {
              primary: '#af6025',
              secondary: '#f5f5f5'
            }
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#f5f5f5'
            }
          }
        }}
      />
    </div>
  );
};

export default Layout;
