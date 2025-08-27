import React, { useState, useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
import Loader from "../components/Loader";
import { useTheme } from "../context/ThemeContext";
import { FaAlignLeft } from "react-icons/fa";

function CodeExplanation() {
  const { isDark } = useTheme();
  const [loading, setLoading] = useState(true);
  const URL = `${import.meta.env.VITE_BACKEND_URL}/ai/explain-code`;
  const defaultPrompt = `// Paste your code here to get a clear explanation\nfunction greet(name){\n  return 'Hello, ' + name;\n}`;

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
        <Loader fullscreen size="xl" color="purple" text="Loading Code Explanation Tool..." />
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <FaAlignLeft className="text-purple-400 text-2xl mr-2" />
            <h1 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              OMEX Code Explanation
            </h1>
          </div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Paste any code to get a structured explanation: overview, how it works, and key details.
          </p>
        </div>

        {/* Code Editor (reused UI) */}
        <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden">
          <CodeEditor
            URL={URL}
            prompt={defaultPrompt}
            actionLabel="Explain"
            panelTitle="Explanation"
            emptyStateMessage='Enter your code and click "Explain" to get a structured explanation'
          />
        </div>
      </div>
    </div>
  );
}

export default CodeExplanation;


