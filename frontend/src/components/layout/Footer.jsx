import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-poe-secondary border-t border-poe-accent/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-poe-accent mb-4">POE Builds</h3>
            <p className="text-sm text-gray-400">
              Comprehensive build planning and analysis tools for Path of Exile. Create, share, and compare builds with the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-poe-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/builds" className="text-sm text-gray-400 hover:text-poe-accent transition-colors">
                  Browse Builds
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-sm text-gray-400 hover:text-poe-accent transition-colors">
                  Build Calculator
                </Link>
              </li>
              <li>
                <Link to="/comparison" className="text-sm text-gray-400 hover:text-poe-accent transition-colors">
                  Build Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-poe-light mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.pathofexile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-poe-accent transition-colors"
                >
                  Official POE Site
                </a>
              </li>
              <li>
                <a
                  href="https://poe.ninja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-poe-accent transition-colors"
                >
                  POE Ninja
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/PathOfBuildingCommunity/PathOfBuilding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-poe-accent transition-colors"
                >
                  Path of Building
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-poe-light mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/chase-weiser88/poe-builds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-poe-accent transition-colors"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-poe-accent transition-colors"
              >
                <FiTwitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@poebuilds.com"
                className="text-gray-400 hover:text-poe-accent transition-colors"
              >
                <FiMail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-poe-accent/20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} POE Builds. Community project, not affiliated with Grinding Gear Games.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Path of Exile is a trademark of Grinding Gear Games.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
