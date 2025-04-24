import React from 'react';
import { useTranslation } from 'react-i18next';
import { Truck, Snowflake, Package, FileCheck, Shield, Clock, Globe, Weight, MapPin, FileText } from 'lucide-react';
import { FLEET_IMAGES } from '../constants/images';

const ServiceSection = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  imageUrl,
  featureIcons
}: { 
  icon: any, 
  title: string, 
  description: string, 
  features: string[], 
  imageUrl: string,
  featureIcons: any[]
}) => (
  <div className="flex flex-col lg:flex-row gap-8 py-12 border-b border-gray-200 last:border-0">
    <div className="lg:w-1/2">
      <div className="flex items-center mb-4">
        <Icon className="h-10 w-10 text-blue-600" />
        <h2 className="ml-4 text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
            {React.createElement(featureIcons[index], { className: "h-5 w-5 text-blue-500 mr-3" })}
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:w-1/2">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg shadow-lg w-full h-[300px] object-cover"
      />
    </div>
  </div>
);

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Truck,
      title: t('services.prelata'),
      description: t('services.description.prelata'),
      features: [
        `${t('services.features.capacity')}: 24t`,
        t('services.features.tracking'),
        t('services.features.insurance'),
        t('services.features.customs')
      ],
      featureIcons: [Weight, MapPin, Shield, FileText],
      imageUrl: FLEET_IMAGES.services.prelata
    },
    {
      icon: Package,
      title: t('services.ltl'),
      description: t('services.description.ltl'),
      features: [
        `${t('services.features.capacity')}: 3-10t`,
        t('services.features.consolidation'),
        t('services.features.tracking'),
        t('services.features.insurance')
      ],
      featureIcons: [Weight, Package, MapPin, Shield],
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      icon: Package,
      title: t('services.flatbed'),
      description: t('services.description.flatbed'),
      features: [
        `${t('services.features.capacity')}: 40t`,
        t('services.features.tracking'),
        t('services.features.insurance'),
        t('services.features.adr')
      ],
      featureIcons: [Weight, MapPin, Shield, FileText],
      imageUrl: FLEET_IMAGES.services.flatbed
    },
    {
      icon: FileCheck,
      title: t('services.vamal'),
      description: t('services.description.vamal'),
      features: [
        t('services.features.customs'),
        '24/7 Support',
        'RO ↔ TR',
        t('services.features.insurance')
      ],
      featureIcons: [FileText, Clock, Globe, Shield],
      imageUrl: FLEET_IMAGES.services.vamal
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{t('services.title')}</h1>
              <p className="text-xl opacity-90">
                Transport internațional de încredere între România și Turcia
              </p>
            </div>
            <div className="mt-6 lg:mt-0 flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-8 w-8 mr-2" />
                <div>
                  <div className="text-sm opacity-90">Experiență</div>
                  <div className="font-bold">10+ Ani</div>
                </div>
              </div>
              <div className="flex items-center">
                <Globe className="h-8 w-8 mr-2" />
                <div>
                  <div className="text-sm opacity-90">Rută Principală</div>
                  <div className="font-bold">RO ↔ TR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {services.map((service, index) => (
          <ServiceSection key={index} {...service} />
        ))}
      </div>
    </div>
  );
}