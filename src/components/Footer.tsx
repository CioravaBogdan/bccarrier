import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BC CARRIER</h3>
            <p className="text-gray-400">
              Transport internațional România-Turcia cu 10 ani de experiență
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bccarrier" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><Facebook /></a>
              <a href="https://www.instagram.com/bccarrier.ro/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><Instagram /></a>
              <a href="https://www.linkedin.com/company/102417629/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><Linkedin /></a>
              <a href="https://www.youtube.com/@bccarrier-ro" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><Youtube /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: office@bccarrier.com<br />
              Tel: +40 735 576 219
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © {new Date().getFullYear()} BC CARRIER. All rights reserved.
        </div>
      </div>
    </footer>
  );
}