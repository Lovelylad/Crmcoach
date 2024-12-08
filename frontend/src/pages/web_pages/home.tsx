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
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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

  const features_points = [
    {
      name: 'Unified Dashboard',
      description:
        'Access all your coaching data in one place. Monitor client progress, track leads, and manage sessions effortlessly.',
      icon: 'mdiViewDashboard',
    },
    {
      name: 'Lead Management',
      description:
        'Efficiently track and categorize leads. Enhance conversion rates with organized lead statuses and follow-up actions.',
      icon: 'mdiAccountMultiple',
    },
    {
      name: 'Automated Reminders',
      description:
        'Never miss a session or follow-up. Automated reminders keep you and your clients on track and engaged.',
      icon: 'mdiBell',
    },
  ];

  const testimonials = [
    {
      text: 'Using ${projectName} has revolutionized our coaching process. The seamless integration between departments has boosted our efficiency tremendously.',
      company: 'Inspire Coaching Group',
      user_name: 'Alex Johnson, CEO',
    },
    {
      text: "The lead management feature is a game-changer. We've seen a significant increase in client conversions since adopting ${projectName}.",
      company: 'Growth Path Consulting',
      user_name: 'Emily Carter, Sales Director',
    },
    {
      text: 'Automated reminders have reduced our no-show rates drastically. Our clients appreciate the timely notifications.',
      company: 'Wellness Journey',
      user_name: 'Michael Lee, Life Coach',
    },
    {
      text: 'The user-friendly interface of ${projectName} makes it easy for our team to stay organized and focused on client success.',
      company: 'Thrive Coaching Solutions',
      user_name: 'Sarah Kim, Operations Manager',
    },
    {
      text: 'The ability to track client progress and manage sessions in one place has streamlined our workflow significantly.',
      company: 'Empowerment Hub',
      user_name: 'David Brown, Head Coach',
    },
    {
      text: 'Our marketing campaigns have never been more effective. ${projectName} provides the insights we need to optimize our strategies.',
      company: 'Visionary Coaching',
      user_name: 'Jessica Taylor, Marketing Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Welcome to Our Coaching CRM - Connect, Organize, and Grow`}</title>
        <meta
          name='description'
          content={`Discover our CRM solution designed for coaching and consulting companies. Connect departments, track leads, and manage client relationships effectively.`}
        />
      </Head>
      <WebSiteHeader projectName={'Crmcoach'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'Crmcoach'}
          image={['Coaching team collaboration']}
          mainText={`Empower Your Coaching with ${projectName}`}
          subTitle={`Streamline your coaching business with our CRM. Connect departments, track leads, and enhance client relationships effortlessly.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <AboutUsSection
          projectName={'Crmcoach'}
          image={['Team collaboration and success']}
          mainText={`Transform Coaching with ${projectName}`}
          subTitle={`At ${projectName}, we bridge the gap between departments, enhancing collaboration and efficiency. Our CRM is tailored for coaching businesses, ensuring seamless operations and client satisfaction.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More`}
        />

        <FeaturesSection
          projectName={'Crmcoach'}
          image={['CRM dashboard overview']}
          withBg={0}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Explore how ${projectName} can transform your coaching business with its powerful features.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'Crmcoach'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'Crmcoach'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
