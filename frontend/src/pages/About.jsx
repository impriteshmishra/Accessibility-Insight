import React from "react";
import {
  Shield,
  Users,
  Globe,
  CheckCircle,
  Target,
  Zap,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const navigate = useNavigate();

  const handleScanNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md mb-6">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Making the Web Accessible for Everyone
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our accessibility checker empowers developers and organizations to
              build inclusive web experiences that work for all users,
              regardless of their abilities or disabilities.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We believe that the internet should be accessible to everyone.
                  Our mission is to provide developers with powerful,
                  easy-to-use tools that identify accessibility barriers and
                  provide actionable solutions to create more inclusive digital
                  experiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Built on top of the industry-standard axe-core library, our
                  platform combines automated testing with comprehensive
                  reporting to help you meet WCAG guidelines and legal
                  compliance requirements.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
                <Globe className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Global Impact</h3>
                <p className="text-blue-100">
                  Over 1 billion people worldwide live with disabilities. By
                  improving web accessibility, we're helping create a more
                  inclusive digital world for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Our Platform?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Comprehensive Testing
                </h3>
                <p className="text-gray-600">
                  Powered by axe-core, we test against WCAG 2.1 guidelines at
                  all conformance levels to ensure thorough accessibility
                  coverage.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Actionable Insights
                </h3>
                <p className="text-gray-600">
                  Get detailed reports with specific help and step-by-step
                  guidance to fix accessibility issues quickly and effectively
                  by using{" "}
                  <a
                    className="text-blue-600"
                    href="https://dequeuniversity.com/rules/axe"
                  >
                    dequeuniversity.
                  </a>
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Fast & Reliable
                </h3>
                <p className="text-gray-600">
                  Built with modern MERN stack technology for lightning-fast
                  performance and real-time accessibility scanning of your web
                  applications.
                </p>
              </div>
            </div>
          </div>

          {/* Team/Technology Section */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Built with Modern Technology
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Our platform leverages cutting-edge technologies to deliver
                fast, reliable, and scalable accessibility testing solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-500 rounded-lg p-4 mb-4 inline-block">
                  <span className="text-2xl font-bold">N</span>
                </div>
                <h4 className="font-semibold mb-2">Nodejs</h4>
                <p className="text-gray-400 text-sm">
                  Node.js is a cross-platform, open-source JavaScript runtime
                  environment{" "}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 rounded-lg p-4 mb-4 inline-block">
                  <span className="text-2xl font-bold">M</span>
                </div>
                <h4 className="font-semibold mb-2">MongoDB</h4>
                <p className="text-gray-400 text-sm">
                  Flexible data storage for scan results and user data
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-600 rounded-lg p-4 mb-4 inline-block">
                  <span className="text-2xl font-bold">E</span>
                </div>
                <h4 className="font-semibold mb-2">Express.js</h4>
                <p className="text-gray-400 text-sm">
                  Robust backend API for handling scan requests
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-lg p-4 mb-4 inline-block">
                  <span className="text-2xl font-bold">R</span>
                </div>
                <h4 className="font-semibold mb-2">React</h4>
                <p className="text-gray-400 text-sm">
                  Interactive frontend for seamless user experience
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 rounded-lg p-4 mb-4 inline-block">
                  <span className="text-2xl font-bold">A</span>
                </div>
                <h4 className="font-semibold mb-2">axe-core</h4>
                <p className="text-gray-400 text-sm">
                  Industry-leading accessibility testing engine
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Make Your Website More Accessible?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building more
              inclusive web experiences.
            </p>
            <div className="space-x-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                onClick={handleScanNavigate}
              >
                Start Testing Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
