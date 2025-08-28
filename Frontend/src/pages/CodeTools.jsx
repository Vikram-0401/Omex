import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import {
  FaTools,
  FaVial,
  FaMagic,
  FaBug,
  FaTachometerAlt,
  FaArrowRight,
  FaFileAlt,FaShieldAlt,
  FaAlignLeft
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

// Tool Card Component
const ToolCard = ({ icon, title, description, link, isDark = true }) => {
  return (
    <Link
      to={link}
      className={`block p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl ${
        isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100 border border-gray-200'
      }`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${
          isDark ? 'bg-blue-500 bg-opacity-20' : 'bg-blue-100'
        }`}>
          {icon}
        </div>
        <h3 className={`ml-4 text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
      </div>
      <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
      <div className="flex items-center text-blue-400 font-medium">
        Try it now <FaArrowRight className="ml-2" />
      </div>
    </Link>
  );
};

function CodeTools() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
    if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <Loader fullscreen size="xl" color="purple" text="Loading Tools..." />
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block p-3 rounded-full bg-blue-500 bg-opacity-20 mb-4">
            <FaTools className="text-blue-400 text-3xl" />
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            OMEX Code Tools
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Powerful tools to enhance your coding experience and improve code quality
          </p>

        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ToolCard
            icon={<FaVial className="text-blue-400 text-2xl" />}
            title="Test Case Generator"
            description="Automatically generate comprehensive test cases for your code to ensure it works correctly in all scenarios."
            link="/test-case-generator"
            isDark={isDark}
          />
          <ToolCard
            icon={<FaMagic className="text-purple-400 text-2xl" />}
            title="Code Beautifier"
            description="Transform messy, inconsistent code into clean, well-structured code that follows best practices."
            link="/code-beautifier"
            isDark={isDark}
          />
          <ToolCard
            icon={<FaBug className="text-red-400 text-2xl" />}
            title="Error Debugger"
            description="Identify and fix bugs, syntax errors, and logical issues in your code with detailed explanations."
            link="/error-debugger"
            isDark={isDark}
          />
          <ToolCard
            icon={<FaTachometerAlt className="text-green-400 text-2xl" />}
            title="Performance Analyzer"
            description="Analyze execution time and memory usage of your code and get optimization recommendations."
            link="/performance-analyzer"
            isDark={isDark}
          />
          <ToolCard
            icon={<FaFileAlt className="text-orange-400 text-2xl" />}
            title="Content Summarizer"
            description="Upload media files (images, PDFs, videos, text) and get AI-generated summaries of their content."
            link="/content-summarizer"
            isDark={isDark}
          />

          <ToolCard
            icon={<FaAlignLeft className="text-cyan-400 text-2xl" />}
            title="Code Explanation"
            description="Paste code to get a clear, structured explanation: overview, flow, and key details."
            link="/code-explanation"
            isDark={isDark}
          />

          <ToolCard
            icon={<FaShieldAlt className="text-red-500 text-2xl" />}
            title="Security Vulnerability Scanner"
            description="Scan your code for security flaws like SQL injection, XSS, and hardcoded secrets with remediation suggestions."
            link="/security-scanner"
            isDark={isDark}
          />

        </div>

        {/* Coming Soon Section */}
        <div className={`p-8 rounded-lg mb-12 ${isDark ? 'bg-gray-700' : 'bg-white border border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            More Tools Coming Soon
          </h2>
          <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            We're constantly working on new tools to help you write better code. Stay tuned for these upcoming features:
          </p>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">•</span> Code Refactoring Tool
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">•</span> Design Pattern Suggestions
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">•</span> Security Vulnerability Scanner
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">•</span> Code Documentation Generator
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">•</span> Unit Test Generator
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">•</span> API Documentation Generator
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">•</span> Code Explanation Tool
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-400">•</span> Algorithm Visualizer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CodeTools;
