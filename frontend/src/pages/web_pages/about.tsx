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
  AboutUsDesigns,
  TestimonialsDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our coaching business. The seamless integration and user-friendly interface have made our operations so much smoother.',
      company: 'Peak Performance Coaching',
      user_name: 'Olivia Smith, Founder',
    },
    {
      text: "Thanks to ${projectName}, our team is more connected and efficient than ever. The CRM's features are exactly what we needed to grow.",
      company: 'Success Path Consulting',
      user_name: 'Liam Johnson, Operations Manager',
    },
    {
      text: 'The automated reminders and lead management tools have significantly improved our client engagement and conversion rates.',
      company: 'Inspire Coaching Solutions',
      user_name: 'Emma Brown, Sales Lead',
    },
    {
      text: "We love how ${projectName} keeps everything organized. It's like having an extra team member dedicated to efficiency and client satisfaction.",
      company: 'Empowerment Hub',
      user_name: 'Noah Davis, Head Coach',
    },
    {
      text: "Our marketing strategies have improved dramatically with the insights provided by ${projectName}. It's an invaluable tool for our business.",
      company: 'Visionary Coaching',
      user_name: 'Sophia Wilson, Marketing Director',
    },
    {
      text: 'The support from the ${projectName} team has been outstanding. They truly understand the needs of coaching businesses.',
      company: 'Thrive Coaching Group',
      user_name: 'James Martinez, Customer Service Manager',
    },
  ];

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} offers a range of features including lead management, automated reminders, session scheduling, and client progress tracking. These tools are designed to streamline your coaching business operations.',
    },
    {
      question: 'How can ${projectName} help improve client engagement?',
      answer:
        'With automated reminders and personalized client profiles, ${projectName} ensures timely follow-ups and tailored coaching experiences, enhancing client engagement and satisfaction.',
    },
    {
      question: 'Is ${projectName} suitable for small coaching businesses?',
      answer:
        'Absolutely! ${projectName} is designed to be scalable and user-friendly, making it ideal for both small and large coaching businesses looking to improve efficiency and client management.',
    },
    {
      question: 'Can I integrate ${projectName} with other tools?',
      answer:
        'Yes, ${projectName} supports integration with various tools such as email marketing platforms, calendar apps, and payment gateways to enhance your workflow.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        'Our dedicated support team is available to assist you with any questions or issues. We offer comprehensive onboarding and ongoing support to ensure you get the most out of ${projectName}.',
    },
    {
      question: 'How secure is my data with ${projectName}?',
      answer:
        '${projectName} prioritizes data security with robust encryption and regular backups, ensuring your business and client information is safe and secure.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - Discover Our Mission and Team`}</title>
        <meta
          name='description'
          content={`Learn more about our mission, values, and the team behind ${projectName}. Discover how we empower coaching businesses with our innovative CRM solution.`}
        />
      </Head>
      <WebSiteHeader projectName={'Crmcoach'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'Crmcoach'}
          image={['Team collaboration and innovation']}
          mainText={`Meet the Visionaries Behind ${projectName}`}
          subTitle={`Discover the passion and dedication that drive ${projectName}. Our mission is to empower coaching businesses with innovative solutions and exceptional support.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Join Our Journey`}
        />

        <AboutUsSection
          projectName={'Crmcoach'}
          image={['Team values and mission']}
          mainText={`Our Mission and Values at ${projectName}`}
          subTitle={`At ${projectName}, we are committed to transforming the coaching industry. Our values of innovation, integrity, and collaboration guide us in delivering exceptional CRM solutions.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <TestimonialsSection
          projectName={'Crmcoach'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied Clients `}
        />

        <FaqSection
          projectName={'Crmcoach'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Crmcoach'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
