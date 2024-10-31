import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { icons } from "@/constants";

const Footer = () => {
  return (
    <footer className="w-full bg-rich-black text-baby-powder py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={icons.Whitelogo} alt="atndy" width={100} />
          <p className="text-sm text-gray-300 text-center md:text-left">
            Empowering students with efficient attendance tracking solutions.
          </p>
        </div>

        
        {/* Right Section - Social Links */}
        <div className="flex space-x-4">
          <a href="https://github.com/umairniaziofficial/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-baby-powder">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nizzypedia/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-baby-powder">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.youtube.com/@Nizzyverse" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-baby-powder">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-sm text-gray-400 mt-12">
        &copy; {new Date().getFullYear()} atndy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
