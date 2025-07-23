import SearchBar from "../components/SearchBar";
import NavBar from "../components/Navbar";

import {
  Search,
  Eye,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import TrustedBy from "../components/TrustedBy";
import Footer from "../components/Footer";
import CountUp from "../helper/CountUp";

const Home = () => {
  const features = [
    {
      icon: Eye,
      title: "Comprehensive Scanning",
      description:
        "Powered by axe-core, the industry standard for accessibility testing",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get detailed accessibility reports in seconds.",
    },
    {
      icon: CheckCircle2,
      title: "Actionable Insights",
      description: "Prioritized recommendations with clear steps to fix issues",
    },
    {
      icon: AlertTriangle,
      title: "WCAG Compliance",
      description:
        "Test against WCAG 2.1 AA standards and accessibility best practices",
    },
  ];

  const stats = [
    { icon: Globe, value: 10, indication: "M+", label: "Websites Scanned" },
    { icon: Users, value: 50, indication: "K+", label: "Developers Helped" },
    { icon: Award, value: 99.9, indication: "%", label: "Accuracy Rate" },
    {
      icon: TrendingUp,
      value: 24,
      indication: "Hours",
      label: "Always Available",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden diagonal-bottom rounded-b-[80px] bg-gradient-to-br from-purple-100 via-white to-indigo-100 p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex sm:items-center gap-2 justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg">
                  <Eye className="w-12 h-12 text-white" />
                </div>
                <h1 className="flex items-center gap-2 text-xl md:text-6xl font-bold text-gray-900 ">
                  Accessibility
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Insight
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ensure your website is accessible to everyone. Scan for WCAG
                compliance issues and get detailed reports with actionable
                recommendations.
              </p>
            </div>

            {/* Search Section */}

            <SearchBar />

            <div className="mt-6 text-center">
              <p className="text-lg text-gray-500">
                ✨ Free to use & 🚀 Instant results
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Enter URL</h4>
              <p className="text-gray-600 text-sm">
                Simply paste your website URL in the search box above
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Analysis</h4>
              <p className="text-gray-600 text-sm">
                Our system scans your site using advanced accessibility
                algorithms
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Get Results</h4>
              <p className="text-gray-600 text-sm">
                Receive detailed reports with prioritized action items
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br  from-white to-indigo-100 p-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                >
                  <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg w-fit mb-4 group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div>
            <TrustedBy />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Trusted by Developers Worldwide
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      <CountUp end={stat.value}/> {stat.indication}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
