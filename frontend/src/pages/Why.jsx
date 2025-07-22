import React from "react";
import {
  Heart,
  Users,
  Scale,
  TrendingUp,
  Globe,
  Eye,
  Ear,
  Hand,
  Brain,
  DollarSign,
  Award,
  ShieldCheck,
} from "lucide-react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const Why = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Web Accessibility Matters
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building accessible websites isn't just about compliance—it's
              about creating inclusive experiences that benefit everyone and
              unlock the full potential of the web.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              The Numbers Don't Lie
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  1.3B
                </div>
                <div className="text-gray-600">
                  People worldwide live with disabilities
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">
                  $13T
                </div>
                <div className="text-gray-600">
                  Annual disposable income of people with disabilities
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">71%</div>
                <div className="text-gray-600">
                  Of users with disabilities will leave an inaccessible website
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">2x</div>
                <div className="text-gray-600">
                  More likely to have a positive brand perception
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Invest in Accessibility?
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Legal Compliance */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Scale className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Legal Compliance
                </h3>
                <p className="text-gray-600 mb-6">
                  Avoid costly lawsuits and ensure compliance with ADA, Section
                  508, AODA, and other accessibility regulations worldwide.
                </p>
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-800 mb-2">
                    Did You Know?
                  </div>
                  <div className="text-red-700 text-sm">
                    Web accessibility lawsuits increased by 320% between
                    2018-2021, with over 4,000 cases filed in 2021 alone.
                  </div>
                </div>
              </div>

              {/* Business Growth */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Business Growth
                </h3>
                <p className="text-gray-600 mb-6">
                  Reach a broader audience, improve SEO rankings, and increase
                  customer loyalty by creating inclusive digital experiences.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-green-800 mb-2">
                    Market Opportunity
                  </div>
                  <div className="text-green-700 text-sm">
                    The global disability market represents over $13 trillion in
                    annual disposable income— larger than China's entire
                    economy.
                  </div>
                </div>
              </div>

              {/* Better UX for Everyone */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Better UX for Everyone
                </h3>
                <p className="text-gray-600 mb-6">
                  Accessibility improvements benefit all users, including mobile
                  users, older adults, and those in challenging environments.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-blue-800 mb-2">
                    Universal Benefits
                  </div>
                  <div className="text-blue-700 text-sm">
                    Captions help in noisy environments, high contrast aids
                    outdoor viewing, and keyboard navigation speeds up power
                    user workflows.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who Benefits Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Who Benefits from Accessible Design?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Visual Impairments</h3>
                <p className="text-purple-100 text-sm">
                  Blindness, low vision, color blindness—285 million people
                  worldwide
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Ear className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Hearing Impairments</h3>
                <p className="text-purple-100 text-sm">
                  Deafness, hard of hearing—466 million people with disabling
                  hearing loss
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Hand className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Motor Impairments</h3>
                <p className="text-purple-100 text-sm">
                  Limited dexterity, paralysis—affecting millions who rely on
                  alternative input methods
                </p>
              </div>

              <div className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Cognitive Differences</h3>
                <p className="text-purple-100 text-sm">
                  Dyslexia, ADHD, autism—diverse cognitive needs requiring
                  clear, simple design
                </p>
              </div>
            </div>
          </div>

          {/* ROI Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              The Return on Investment
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Financial Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Increased Revenue
                      </div>
                      <div className="text-gray-600 text-sm">
                        Target's accessibility improvements led to $13 million
                        in additional revenue within 2 years
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Risk Mitigation
                      </div>
                      <div className="text-gray-600 text-sm">
                        Avoid legal costs averaging $300K+ per accessibility
                        lawsuit settlement
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Market Expansion
                      </div>
                      <div className="text-gray-600 text-sm">
                        Access to 1.3 billion potential customers with
                        disposable income of $13 trillion
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Operational Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Brand Reputation
                      </div>
                      <div className="text-gray-600 text-sm">
                        73% of consumers are more likely to do business with
                        accessible companies
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Better SEO
                      </div>
                      <div className="text-gray-600 text-sm">
                        Semantic markup and alt text improve search engine
                        rankings and discoverability
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-pink-600 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Employee Satisfaction
                      </div>
                      <div className="text-gray-600 text-sm">
                        Teams feel proud working on inclusive products that make
                        a positive social impact
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Myths */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Common Myths About Accessibility
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  ❌ Myth: "It's too expensive"
                </h3>
                <p className="text-gray-300">
                  <span className="text-green-400 font-semibold">Reality:</span>{" "}
                  Building accessibility from the start costs 6x less than
                  retrofitting. The ROI includes legal protection, broader
                  market reach, and improved SEO.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  ❌ Myth: "Only a small percentage of users need it"
                </h3>
                <p className="text-gray-300">
                  <span className="text-green-400 font-semibold">Reality:</span>{" "}
                  26% of adults have some form of disability. Plus,
                  accessibility features benefit everyone—captions help in noisy
                  environments, keyboard navigation speeds workflows.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  ❌ Myth: "It will make my site look ugly"
                </h3>
                <p className="text-gray-300">
                  <span className="text-green-400 font-semibold">Reality:</span>{" "}
                  Good accessibility enhances design through better contrast,
                  clearer navigation, and thoughtful typography. Many
                  award-winning sites are fully accessible.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  ❌ Myth: "It's just about screen readers"
                </h3>
                <p className="text-gray-300">
                  <span className="text-green-400 font-semibold">Reality:</span>{" "}
                  Accessibility includes keyboard navigation, color contrast,
                  cognitive accessibility, motor impairments, and temporary
                  disabilities like broken arms.
                </p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Make Your Website Accessible?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your accessibility journey today. Every improvement makes
              the web more inclusive and unlocks new opportunities for your
              business.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Quick Start Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-sm font-semibold">
                        1
                      </span>
                    </div>
                    <span className="text-gray-700">
                      Run an accessibility audit with our scanner
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-sm font-semibold">
                        2
                      </span>
                    </div>
                    <span className="text-gray-700">
                      Add alt text to all images
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-sm font-semibold">
                        3
                      </span>
                    </div>
                    <span className="text-gray-700">
                      Ensure proper color contrast ratios
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-sm font-semibold">
                        4
                      </span>
                    </div>
                    <span className="text-gray-700">
                      Test keyboard navigation
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-sm font-semibold">
                        5
                      </span>
                    </div>
                    <span className="text-gray-700">
                      Use semantic HTML elements
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-sm font-semibold">
                        6
                      </span>
                    </div>
                    <span className="text-gray-700">
                      Provide focus indicators
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-sm font-semibold">
                        7
                      </span>
                    </div>
                    <span className="text-gray-700">
                      Add skip navigation links
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 text-sm font-semibold">
                        8
                      </span>
                    </div>
                    <span className="text-gray-700">Test with real users</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-x-4">
             
              <a href="https://dequeuniversity.com/rules/axe">
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Learn More
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Why;
