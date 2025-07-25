import React, { useState } from "react";
import { scanUrl } from "../api/scan.api.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setScanData } from "@/redux/slice/scanSlice.js";
import { AlertTriangle, Search } from "lucide-react";
import { ImNotification } from "react-icons/im";

const SearchBar = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [results, setResults] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError("");
    // setResults(null);

    try {
      const data = await scanUrl(url);

      // console.log("data", data);

      if (data.success) {
        dispatch(setScanData(data));
        // setResults(data);
        // optional
        navigate("/insights");
      } else {
        setError(data.error || "Scanning failed");
      }
    } catch (error) {
      setError(error.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-xl py-4 px-6 border border-gray-100">
          <div className="text-center mb-4">
            <h2 className="sm:text-2xl font-bold text-gray-700 mb-2">
              Start Your Accessibility Audit
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="w-full sm:flex-1">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your website URL to begin scanning"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                disabled={loading}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleScan(e);
                }}
              />
            </div>

            <button
              onClick={handleScan}
              disabled={loading || !url.trim()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg cursor-pointer"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Scanning...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                  Scan Now
                </>
              )}
            </button>
          </div>
          {loading && (
            <p className="flex items-center justify-center gap-2 text-lg text-gray-600 mt-2">
              <span className="text-yellow-600 mb-1">
                <ImNotification />
              </span>{" "}
              Scanning duration varies based on your website’s structure. Thank you for your patience!
            </p>
          )}
        </div>
      </div>
      {error && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span className="text-red-700">{error}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
