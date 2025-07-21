import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Search,
  Shield,
  AlertTriangle,
  Info,
  Zap,
} from "lucide-react";
import { scanUrl } from "../api/scan.api.js";

const AccessibilityScanner = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("summary");

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError("");
    setResults(null);

    try {
      const data = await scanUrl(url);

      console.log("data",data);
      
      if (data.success) {
        setResults(data);
        setActiveTab("summary");
      } else {
        setError(data.error || "Scanning failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getImpactIcon = (impact) => {
    const iconProps = { className: "w-5 h-5" };
    switch (impact) {
      case "critical":
        return <AlertCircle {...iconProps} className="w-5 h-5 text-red-500" />;
      case "serious":
        return (
          <AlertTriangle {...iconProps} className="w-5 h-5 text-orange-500" />
        );
      case "moderate":
        return <Info {...iconProps} className="w-5 h-5 text-yellow-500" />;
      case "minor":
        return <Shield {...iconProps} className="w-5 h-5 text-blue-500" />;
      default:
        return <Info {...iconProps} />;
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "serious":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "minor":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <Shield className="w-10 h-10 text-indigo-600" />
            Web Accessibility Scanner
          </h1>
          <p className="text-gray-600 text-lg">
            Analyze your website for accessibility issues with axe-core
          </p>
        </div>

        {/* Scan Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL (e.g., https://example.com)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={loading}
                onKeyPress={(e) => e.key === "Enter" && handleScan(e)}
              />
            </div>
            <button
              onClick={handleScan}
              disabled={loading || !url.trim()}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Scanning...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Scan Website
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}
        </div>

        {/* Results */}
        {results && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Results Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Scan Results</h2>
                  <p className="opacity-90">{results.url}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    {formatTimestamp(results.timestamp)}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: "summary", name: "Summary", icon: Shield },
                  { id: "urgent", name: "Urgent Issues", icon: AlertCircle },
                  { id: "top", name: "Top Issues", icon: Zap },
                  {
                    id: "actionable",
                    name: "Action Items",
                    icon: CheckCircle2,
                  },
                ].map(({ id, name, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                      activeTab === id
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Summary Tab */}
              {activeTab === "summary" && (
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Accessibility Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {results.summary.totalViolations}
                      </div>
                      <div className="text-sm text-gray-600">Total Issues</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600">
                        {results.summary.criticalCount}
                      </div>
                      <div className="text-sm text-red-600">Critical</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {results.summary.seriousCount}
                      </div>
                      <div className="text-sm text-orange-600">Serious</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-600">
                        {results.summary.moderateCount}
                      </div>
                      <div className="text-sm text-yellow-600">Moderate</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {results.summary.minorCount}
                      </div>
                      <div className="text-sm text-blue-600">Minor</div>
                    </div>
                  </div>

                  {results.summary.totalViolations === 0 && (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-700">
                        Great Job!
                      </h3>
                      <p className="text-green-600">
                        No accessibility violations found.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Urgent Issues Tab */}
              {activeTab === "urgent" && (
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Critical & Serious Issues
                  </h3>
                  {results.urgentIssues.length === 0 ? (
                    <div className="text-center py-8">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-700">
                        No Urgent Issues!
                      </h3>
                      <p className="text-green-600">
                        All critical and serious accessibility issues have been
                        resolved.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {results.urgentIssues.map((violation, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-6"
                        >
                          <div className="flex items-start gap-4">
                            {getImpactIcon(violation.impact)}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-gray-900">
                                  {violation.description}
                                </h4>
                                <span
                                  className={`px-2 py-1 rounded text-xs font-medium border ${getImpactColor(
                                    violation.impact
                                  )}`}
                                >
                                  {violation.impact.toUpperCase()}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-3">
                                {violation.help}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>
                                  {violation.nodeCount} element(s) affected
                                </span>
                                <a
                                  href={violation.helpUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
                                >
                                  Learn more{" "}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Top Issues Tab */}
              {activeTab === "top" && (
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Most Frequent Issues
                  </h3>
                  <div className="space-y-3">
                    {results.topIssues.map((issue, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          {getImpactIcon(issue.impact)}
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {issue.description}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Rule: {issue.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(
                              issue.impact
                            )}`}
                          >
                            {issue.count} instances
                          </span>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium border ${getImpactColor(
                              issue.impact
                            )}`}
                          >
                            {issue.impact.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Items Tab */}
              {activeTab === "actionable" && (
                <div>
                  <h3 className="text-xl font-bold mb-6">Actionable Items</h3>
                  <div className="space-y-4">
                    {results.actionableItems.map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`px-2 py-1 rounded text-xs font-medium border ${getImpactColor(
                                  item.priority
                                )}`}
                              >
                                {item.priority.toUpperCase()}
                              </span>
                              <span className="text-sm text-gray-500">
                                {item.elementsAffected} element(s)
                              </span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {item.issue}
                            </h4>
                            <p className="text-gray-600 text-sm mb-2">
                              {item.solution}
                            </p>
                            <a
                              href={item.helpUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm"
                            >
                              View documentation{" "}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessibilityScanner;
