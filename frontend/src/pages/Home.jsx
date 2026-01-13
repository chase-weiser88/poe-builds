import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiZap, FiShield } from 'react-icons/fi';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const Home = () => {
  const features = [
    {
      icon: <FiZap className="h-8 w-8" />,
      title: 'Build Calculator',
      description: 'Plan and optimize your Path of Exile builds with our comprehensive calculator.'
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: 'Build Browser',
      description: 'Browse thousands of community builds, filter by class, budget, and playstyle.'
    },
    {
      icon: <FiShield className="h-8 w-8" />,
      title: 'Compare Builds',
      description: 'Side-by-side comparison of multiple builds to find the perfect one for you.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-poe-dark via-poe-secondary to-poe-dark border-b border-poe-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-poe-accent mb-6">
            Path of Exile Builds
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create, share, and optimize your Path of Exile builds with our comprehensive build planner and community showcase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/builds">
              <Button variant="primary" size="lg">
                Browse Builds
              </Button>
            </Link>
            <Link to="/calculator">
              <Button variant="secondary" size="lg">
                Build Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-poe-light text-center mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center" hover>
              <div className="flex justify-center text-poe-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-poe-light mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-poe-secondary border-y border-poe-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-poe-accent mb-2">1000+</div>
              <div className="text-gray-400">Community Builds</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-poe-accent mb-2">50+</div>
              <div className="text-gray-400">Active Contributors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-poe-accent mb-2">7</div>
              <div className="text-gray-400">Character Classes</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-poe-light mb-4">
          Ready to Start Building?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our community of Path of Exile players and share your builds with the world.
        </p>
        <Link to="/signup">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
