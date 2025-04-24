import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_pa3qxv9',
        'template_mj70yqv',
        formRef.current,
        'oaP54jrTiV1VcpGYR'
      );
      console.log('Email sent successfully');
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/40750492985', '_blank');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl opacity-90">
            Suntem aici să vă ajutăm cu orice întrebare despre serviciile noastre de transport
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Trimite-ne un mesaj</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Se trimite...' : t('contact.send')}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {t('contact.whatsapp')}
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="text-green-600">Mesajul a fost trimis cu succes!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600">A apărut o eroare. Vă rugăm încercați din nou.</p>
              )}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Informații de Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span>+40 750 492 985</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span>office@bccarrier.ro</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Podu Turcului, Bacău, România • CUI: RO37786080</span>
                </div>
              </div>
            </div>

            {/* Location Image */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
              <img
                src="https://i.imgur.com/ROyqs6i.jpg"
                alt="BC Carrier Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
