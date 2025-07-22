import React, { useState, useEffect } from 'react';

const Score = ({ score = 75 }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  // Animate score on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);
  
  // Determine color and label based on score
  const getScoreInfo = (score) => {
    if (score >= 90) return { color: '#10B981', label: 'Excellent', bgColor: '#ECFDF5' };
    if (score >= 70) return { color: '#F59E0B', label: 'Good', bgColor: '#FFFBEB' };
    if (score >= 50) return { color: '#EF4444', label: 'Moderate', bgColor: '#FEF2F2' };
    return { color: '#DC2626', label: 'Poor', bgColor: '#FEF2F2' };
  };
  
  const scoreInfo = getScoreInfo(animatedScore);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center p-8">
      <div className="relative w-32 h-32 mb-4">
        {/* Background circle */}
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={scoreInfo.color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 1.5s ease-in-out',
            }}
          />
        </svg>
        
        {/* Score text in center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{Math.round(animatedScore)}</span>
          <span className="text-sm text-gray-500">/ 100</span>
        </div>
      </div>
      
      {/* Score label */}
      <div 
        className="px-4 py-2 rounded-full text-sm font-medium"
        style={{ 
          backgroundColor: scoreInfo.bgColor, 
          color: scoreInfo.color 
        }}
      >
        {scoreInfo.label}
      </div>
    </div>
  );
};

// Demo component with different scores
const AccessibilityScoreDemo = () => {
  const [currentScore, setCurrentScore] = useState(75);
  
  const sampleScores = [25, 45, 75, 95];
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Accessibility Score Display
        </h1>
        
        {/* Current Score Display */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Current Accessibility Score
          </h2>
          <div className="flex justify-center">
            <AccessibilityScoreCircle score={currentScore} />
          </div>
        </div>
        
        {/* Score Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Test Different Scores</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {sampleScores.map(score => (
              <button
                key={score}
                onClick={() => setCurrentScore(score)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentScore === score
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {score} - {score >= 90 ? 'Excellent' : score >= 70 ? 'Good' : score >= 50 ? 'Moderate' : 'Poor'}
              </button>
            ))}
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Score: {currentScore}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={currentScore}
              onChange={(e) => setCurrentScore(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        {/* All Scores Display */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
            Score Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <AccessibilityScoreCircle score={25} />
              <p className="text-sm text-gray-600 mt-2">Poor (0-49)</p>
            </div>
            <div className="text-center">
              <AccessibilityScoreCircle score={60} />
              <p className="text-sm text-gray-600 mt-2">Moderate (50-69)</p>
            </div>
            <div className="text-center">
              <AccessibilityScoreCircle score={80} />
              <p className="text-sm text-gray-600 mt-2">Good (70-89)</p>
            </div>
            <div className="text-center">
              <AccessibilityScoreCircle score={95} />
              <p className="text-sm text-gray-600 mt-2">Excellent (90-100)</p>
            </div>
          </div>
        </div>
        
        {/* Usage Example */}
        <div className="bg-gray-900 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Usage Example</h3>
          <pre className="text-sm text-green-400 overflow-x-auto">
{`// Use with your accessibility data
const accessibilityData = {
  score: 75, // Your calculated score from 0-100
  // ... other data
};

<AccessibilityScoreCircle score={accessibilityData.score} />`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Score;