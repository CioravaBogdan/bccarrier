import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Truck } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  return (
    <div className="flex gap-2">
      {['ro', 'en', 'tr'].map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`px-2 py-1 rounded ${
            i18n.language === lang ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Truck className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BC CARRIER</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">{t('nav.home')}</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">{t('nav.services')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">{t('nav.about')}</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">{t('nav.contact')}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}