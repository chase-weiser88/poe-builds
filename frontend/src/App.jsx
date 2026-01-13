import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BuildBrowser from './pages/BuildBrowser';
import BuildDetails from './pages/BuildDetails';
import BuildCalculatorPage from './pages/BuildCalculatorPage';
import BuildComparison from './pages/BuildComparison';
import MyBuilds from './pages/MyBuilds';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/builds" element={<BuildBrowser />} />
            <Route path="/builds/:id" element={<BuildDetails />} />
            <Route path="/calculator" element={<BuildCalculatorPage />} />
            <Route path="/comparison" element={<BuildComparison />} />
            <Route path="/profile/:id" element={<UserProfile />} />
            
            {/* Protected Routes */}
            <Route
              path="/my-builds"
              element={
                <ProtectedRoute>
                  <MyBuilds />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
