import React from 'react';
import Link from 'next/link';
import { Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full 

   bg-gradient-to-b from-black from-60% to-blue-950
    
    text-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and social icons */}
        <div className="flex justify-between items-center border-b border-gray-800 pb-6">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-medium text-gray-400">{"{"}</span>
            <img src="/main/igebraIcon.png" className="w-8 h-8" alt="Logo" />
            <span className="text-xl md:text-2xl font-medium text-gray-400">igebra.ai {"}"}</span>
          </div>
          
          <div className="flex space-x-4">
            <Link href="https://twitter.com" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-300 transition-colors">
              <Twitter size={20} className="text-white" />
            </Link>
            <Link href="https://github.com" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-300 transition-colors">
              <Github size={20} className="text-white" />
            </Link>
          </div>
        </div>
        
        {/* Middle section with navigation links */}
        <div className="my-8">
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <Link href="/products" className="text-gray-300 hover:text-cyan-500 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-500 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-500 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        
        {/* Secondary navigation links */}
        <div className="my-8">
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <Link href="/privacy" className="text-gray-500 hover:text-cyan-500 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-cyan-500 transition-colors">
              Terms
            </Link>
          </nav>
        </div>
        
        {/* Copyright section */}
        <div className="pt-4 text-gray-500">
          <p>© 2025 igebra.ai</p>
          <p>All rights reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;