import { useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";
import { SiFlipkart } from "react-icons/si";
import { BsAmazon } from "react-icons/bs";
import { SiAdobe } from "react-icons/si";
import { SiNetflix } from "react-icons/si";
import { SiIntel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const logos = [
  <FcGoogle size={100} />,
  <BsMicrosoft size={100} className="text-blue-500"/>,
  <SiFlipkart size={100} className="text-yellow-400"/>,
  <BsAmazon size={100} className="text-gray-900" />,
  <SiAdobe size={100} className="text-red-500"/>,
  <SiNetflix size={100} className="text-red-600"/>,
  <SiIntel size={100}className="text-blue-700"/>,
  <FaGithub size={100} className="text-gray-900"/>,
];

const TrustedBy = () => {
  return (
    <div className="my-16 text-center">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Trusted by leading companies
      </h2>

      <div className="overflow-hidden">
        <div className="flex space-x-20 animate-scroll whitespace-nowrap w-max">
          {[...logos, ...logos, ...logos].map((Icon, idx) => (
            <div key={idx}>
              {Icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
