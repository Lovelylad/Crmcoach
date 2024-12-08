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
  GalleryPortfolioDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import GalleryPortfolioSection from '../../components/WebPageComponents/GalleryPortfolioComponent';

import { getMultiplePexelsImages } from '../../helpers/pexels';

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

  const [images, setImages] = useState([]);
  const pexelsQueriesWebSite = [
    'Coaching session in progress',
    'Team brainstorming ideas',
    'Digital marketing strategy planning',
    'Client success celebration',
    'Innovative CRM dashboard',
    'Networking and collaboration event',
  ];
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getMultiplePexelsImages(pexelsQueriesWebSite);
        const formattedImages = images.map((image) => ({
          src: image.src || undefined,
          photographer: image.photographer || undefined,
          photographer_url: image.photographer_url || undefined,
        }));
        setImages(formattedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const faqs = [
    {
      question: 'How often is the blog updated?',
      answer:
        'The ${projectName} blog is updated weekly with fresh content, including insights, tips, and industry news to keep you informed and inspired.',
    },
    {
      question: 'Can I contribute to the blog?',
      answer:
        'Yes, we welcome guest contributions! If you have valuable insights or stories to share, please contact us to discuss potential collaboration.',
    },
    {
      question: 'How can I subscribe to the blog?',
      answer:
        "You can subscribe to our blog by entering your email address in the subscription box on the blog page. You'll receive updates directly to your inbox.",
    },
    {
      question: 'Are there categories for different topics?',
      answer:
        'Yes, our blog is organized into categories such as coaching tips, CRM insights, and industry trends, making it easy to find content relevant to your interests.',
    },
    {
      question: 'Can I share blog posts on social media?',
      answer:
        'Absolutely! Each blog post includes social media sharing buttons, allowing you to easily share content with your network on platforms like Facebook, Twitter, and LinkedIn.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Insights and Updates from ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the latest articles, insights, and updates from ${projectName}. Stay informed and inspired with our expert content.`}
        />
      </Head>
      <WebSiteHeader projectName={'Crmcoach'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'Crmcoach'}
          image={['Blogging and insights illustration']}
          mainText={`Explore Insights with ${projectName} Blog`}
          subTitle={`Dive into the latest trends, tips, and insights from the world of coaching and consulting. Stay updated with expert articles from ${projectName}.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Read Our Blog`}
        />

        <GalleryPortfolioSection
          projectName={'Crmcoach'}
          images={images}
          mainText={`Visual Stories from ${projectName} Blog`}
          design={GalleryPortfolioDesigns.HORIZONTAL_WITH_BUTTONS || ''}
        />

        <FaqSection
          projectName={'Crmcoach'}
          design={FaqDesigns.SPLIT_LIST || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} Blog `}
        />
      </main>
      <WebSiteFooter projectName={'Crmcoach'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
