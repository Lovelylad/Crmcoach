import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'Crmcoach';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/blog',
      label: 'blog',
    },
  ];

  const faqs = [
    {
      question: 'How do I get started with ${projectName}?',
      answer:
        'To get started, simply sign up on our website and follow the onboarding process. Our team is available to assist you with any setup questions.',
    },
    {
      question: 'What support options are available?',
      answer:
        '${projectName} offers 24/7 customer support via email and chat. Our team is dedicated to helping you resolve any issues quickly.',
    },
    {
      question: 'Can I customize the CRM to fit my needs?',
      answer:
        'Yes, ${projectName} is highly customizable. You can tailor the features and interface to suit your specific coaching business requirements.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, we offer a 14-day free trial for new users to explore all the features of ${projectName} without any commitment.',
    },
    {
      question: 'How secure is my data with ${projectName}?',
      answer:
        'We prioritize your data security with advanced encryption and regular backups, ensuring your information is safe and protected.',
    },
    {
      question: 'Can I integrate ${projectName} with other tools?',
      answer:
        'Absolutely! ${projectName} supports integration with various third-party tools like email marketing platforms, calendars, and payment gateways.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with ${projectName}`}</title>
        <meta
          name='description'
          content={`Reach out to the ${projectName} team for any inquiries or support. We're here to help you make the most of our CRM solution.`}
        />
      </Head>
      <WebSiteHeader projectName={'Crmcoach'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'Crmcoach'}
          image={['Customer support and communication']}
          mainText={`Connect with ${projectName} Today`}
          subTitle={`Have questions or need assistance? The ${projectName} team is here to help. Reach out to us for support or inquiries about our CRM solution.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Contact Us`}
        />

        <FaqSection
          projectName={'Crmcoach'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'Crmcoach'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Email communication illustration']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`We're here to assist you with any questions or support needs. Contact us anytime, and we'll respond promptly to ensure you get the help you need.`}
        />
      </main>
      <WebSiteFooter projectName={'Crmcoach'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
