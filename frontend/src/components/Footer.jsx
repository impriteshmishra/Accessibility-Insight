import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
    const handleNavigate = () => {
    navigate("/");
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="flex items-center cursor-pointer" onClick={handleNavigate}>
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="p-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md shadow-lg">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h1 className="flex items-center gap-2 text-xl md:text-xl font-bold text-white pointer-cursor">
              Accessibility
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Insight
              </span>
            </h1>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/documentation" className="hover:text-white">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              X
            </a>
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 space-y-1">
        <p>
          © {new Date().getFullYear()} Accessbility Insight. All rights
          reserved.
        </p>
        <p>
          Developed with ❤️ by{" "}
          <a
            href="https://github.com/impriteshmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white underline"
          >
            Pritesh Mishra
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
