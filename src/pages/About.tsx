import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Users, Globe, Award, TrendingUp, Truck, Clock, Heart, Briefcase, Building } from 'lucide-react';

const Statistic = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
    <Icon className="w-8 h-8 text-blue-600 mb-3" />
    <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const Value = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-white">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">BC CARRIER</h1>
            <p className="text-xl">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Statistic icon={Truck} value="10+" label={t('about.stats.experience')} />
            <Statistic icon={Globe} value="RO, TR, UK, EU" label={t('about.stats.countries')} />
            <Statistic icon={Users} value="1000+" label={t('about.stats.clients')} />
            <Statistic icon={TrendingUp} value="7500+" label={t('about.stats.deliveries')} />
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.values.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Value 
              icon={Shield}
              title={t('about.values.safety.title')}
              description={t('about.values.safety.description')}
            />
            <Value 
              icon={Clock}
              title={t('about.values.punctuality.title')}
              description={t('about.values.punctuality.description')}
            />
            <Value 
              icon={Heart}
              title={t('about.values.dedication.title')}
              description={t('about.values.dedication.description')}
            />
            <Value 
              icon={Briefcase}
              title={t('about.values.expertise.title')}
              description={t('about.values.expertise.description')}
            />
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.clients.title')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('about.clients.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
              <img src="https://imgur.com/2fWIjks.png" alt="Talay Logistics Logo" className="h-16 object-contain mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('about.clients.talay.title')}</h3>
              <p className="text-gray-600">{t('about.clients.talay.description')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
              <img src="https://imgur.com/kTpmAQD.png" alt="UMB Group Logo" className="h-16 object-contain mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('about.clients.umb.title')}</h3>
              <p className="text-gray-600">{t('about.clients.umb.description')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
              <img src="https://imgur.com/nFdey0t.png" alt="Kaufland Romania Logo" className="h-16 object-contain mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('about.clients.kaufland.title')}</h3>
              <p className="text-gray-600">{t('about.clients.kaufland.description')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
          <p className="text-xl mb-8">{t('about.cta.subtitle')}</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="tel:+40735576219"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('about.cta.call')}
            </a>
            <a 
              href="mailto:office@bccarrier.ro"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('about.cta.email')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}