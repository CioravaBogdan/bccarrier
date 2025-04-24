import React from 'react';
import { useTranslation } from 'react-i18next';
import { Truck, Package, FileCheck, ArrowRight, Linkedin, MapPin, Clock, Shield, Weight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FLEET_IMAGES } from '../constants/images';
import ImageGallery from '../components/ImageGallery';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}: { 
  icon: any, 
  title: string, 
  description: string,
  features: { icon: any, text: string }[]
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <Icon className="h-8 w-8 text-blue-600" />
      <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4 pt-4 border-t border-gray-100">
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <feature.icon className="h-4 w-4 text-blue-500 mr-2" />
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${FLEET_IMAGES.hero}")`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl mb-8">{t('hero.subtitle')}</p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </div>

      {/* Fleet Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">{t('fleet.title')}</h2>
        <p className="text-gray-600 text-center mb-12">{t('fleet.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img src={FLEET_IMAGES.premium} alt="BC Carrier DAF truck" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold">{t('fleet.premium.title')}</h3>
              <p className="text-gray-200 text-sm">{t('fleet.premium.description')}</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img src={FLEET_IMAGES.international} alt="BC Carrier truck with trailer" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold">{t('fleet.international.title')}</h3>
              <p className="text-gray-200 text-sm">{t('fleet.international.description')}</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group lg:col-span-1 md:col-span-2 lg:col-span-1">
            <img src={FLEET_IMAGES.fleet} alt="BC Carrier truck fleet" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold">{t('fleet.extensive.title')}</h3>
              <p className="text-gray-200 text-sm">{t('fleet.extensive.description')}</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('fleet.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">{t('services.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Route Network Overview */}
          <div className="lg:col-span-4 mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold mb-4">{t('services.network.title')}</h3>
                  <p className="mb-6 opacity-90">{t('services.network.subtitle')}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{t('services.network.delivery')}</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{t('services.network.coverage')}</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      <span>{t('services.network.routes')}</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-2 relative">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Europe Map showing Romania and Turkey"
                    className="rounded-lg shadow-xl w-full object-cover h-[300px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
                      <span className="font-semibold text-blue-900">România</span>
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-900">Turcia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ServiceCard
            icon={Truck}
            title={t('services.prelata')}
            description={t('services.description.prelata')}
            features={[
              { icon: Weight, text: `${t('services.features.capacity')}: 24t` },
              { icon: MapPin, text: t('services.features.tracking') },
              { icon: Shield, text: t('services.features.insurance') },
              { icon: Clock, text: t('services.network.delivery') }
            ]}
          />
          <ServiceCard
            icon={Package}
            title={t('services.ltl')}
            description={t('services.description.ltl')}
            features={[
              { icon: Weight, text: `${t('services.features.capacity')}: 3-10t` },
              { icon: MapPin, text: t('services.features.consolidation') },
              { icon: Shield, text: t('services.features.tracking') },
              { icon: Clock, text: t('services.features.insurance') }
            ]}
          />
          <ServiceCard
            icon={Package}
            title={t('services.flatbed')}
            description={t('services.description.flatbed')}
            features={[
              { icon: Weight, text: `${t('services.features.capacity')}: 40t` },
              { icon: MapPin, text: t('services.features.tracking') },
              { icon: Shield, text: t('services.features.insurance') },
              { icon: Clock, text: t('services.features.adr') }
            ]}
          />
          <ServiceCard
            icon={FileCheck}
            title={t('services.vamal')}
            description={t('services.description.vamal')}
            features={[
              { icon: FileCheck, text: t('services.features.customs') },
              { icon: Clock, text: t('services.features.tracking') },
              { icon: Shield, text: t('services.features.insurance') },
              { icon: MapPin, text: t('services.features.adr') }
            ]}
          />
        </div>
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('services.customSolution.title')}</h3>
            <p className="text-blue-700 mb-6">{t('services.customSolution.description')}</p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('services.customSolution.contact')}
              </Link>
              <Link
                to="/services"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors border border-blue-200"
              >
                {t('services.customSolution.viewAll')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Feed Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('social.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('social.subtitle')}</p>
          </div>
          <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">{t('social.linkedin.title')}</h3>
            <div className="flex flex-col items-center">
              <div className="elfsight-app-3c022a9f-0173-4605-8989-da18716c87d3 mb-8" data-elfsight-app-lazy></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">{t('social.linkedin.industry')}</h4>
                  <p className="text-gray-600">{t('social.linkedin.industryValue')}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">{t('social.linkedin.size')}</h4>
                  <p className="text-gray-600">{t('social.linkedin.sizeValue')}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">{t('social.linkedin.headquarters')}</h4>
                  <p className="text-gray-600">{t('social.linkedin.headquartersValue')}</p>
                </div>
              </div>
              <a 
                href="https://www.linkedin.com/company/102417629/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0A66C2] text-white px-8 py-3 rounded-lg hover:bg-[#004182] transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                {t('social.linkedin.follow')}
              </a>
            </div>
            <p className="mt-6 text-gray-600 max-w-xl mx-auto">{t('social.linkedin.description')}</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8">{t('cta.subtitle')}</p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('cta.button')}
          </Link>
        </div>
      </div>
    </div>
  );
}