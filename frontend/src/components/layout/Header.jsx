import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiLogOut, FiLogIn, FiUserPlus } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-poe-secondary border-b border-poe-accent/20 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary nav */}
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-poe-accent">POE Builds</span>
            </Link>
            
            {/* Desktop navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-4">
              <Link
                to="/builds"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-poe-light hover:text-poe-accent transition-colors"
              >
                Browse Builds
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-poe-light hover:text-poe-accent transition-colors"
              >
                Build Calculator
              </Link>
              <Link
                to="/comparison"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-poe-light hover:text-poe-accent transition-colors"
              >
                Compare
              </Link>
            </div>
          </div>

          {/* Right side nav */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/my-builds">
                  <Button variant="secondary" size="sm">
                    My Builds
                  </Button>
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-poe-light hover:text-poe-accent transition-colors">
                    <FiUser className="h-5 w-5" />
                    <span className="text-sm font-medium">{user?.username}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-poe-secondary border border-poe-accent/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link
                      to={`/profile/${user?.id}`}
                      className="block px-4 py-2 text-sm text-poe-light hover:bg-poe-accent/10"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-poe-light hover:bg-poe-accent/10 flex items-center space-x-2"
                    >
                      <FiLogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    <FiLogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">
                    <FiUserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-poe-light hover:text-poe-accent"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <Link
                to="/builds"
                className="block px-3 py-2 text-base font-medium text-poe-light hover:text-poe-accent hover:bg-poe-accent/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Builds
              </Link>
              <Link
                to="/calculator"
                className="block px-3 py-2 text-base font-medium text-poe-light hover:text-poe-accent hover:bg-poe-accent/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Build Calculator
              </Link>
              <Link
                to="/comparison"
                className="block px-3 py-2 text-base font-medium text-poe-light hover:text-poe-accent hover:bg-poe-accent/10 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compare
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link
                    to="/my-builds"
                    className="block px-3 py-2 text-base font-medium text-poe-light hover:text-poe-accent hover:bg-poe-accent/10 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Builds
                  </Link>
                  <Link
                    to={`/profile/${user?.id}`}
                    className="block px-3 py-2 text-base font-medium text-poe-light hover:text-poe-accent hover:bg-poe-accent/10 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left block px-3 py-2 text-base font-medium text-poe-light hover:text-poe-accent hover:bg-poe-accent/10 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-medium text-poe-light hover:text-poe-accent hover:bg-poe-accent/10 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2 text-base font-medium text-poe-light hover:text-poe-accent hover:bg-poe-accent/10 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
