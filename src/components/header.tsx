'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import logoDelfin from '@/assets/logo-delfin.png';

import ShimmerButton from './ui/shimmer-button';

export function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const inicioLink = document.querySelector('#inicio-link');
      if (window.scrollY > 0) {
        header?.classList.add(
          'backdrop-blur-sm',
          'border-b-2',
          'border-[#664796]',
          'bg-black',
          'bg-opacity-50',
        );
        inicioLink?.classList.remove('opacity-0');
        inicioLink?.classList.add('opacity-100');
      } else {
        header?.classList.remove(
          'backdrop-blur-sm',
          'border-b-2',
          'border-[#664796]',
          'bg-black',
          'bg-opacity-50',
        );
        inicioLink?.classList.remove('opacity-100');
        inicioLink?.classList.add('opacity-0');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (href: string) =>
    activeSection === href.replace('#', '') && activeSection !== null
      ? 'text-lg text-[#9945E8] font-bold underline'
      : 'text-lg';

  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-center bg-transparent py-2 transition-all duration-300 md:py-6">
      <div className="flex w-full max-w-[1120px] items-center justify-between px-4">
        <Image src={logoDelfin} alt="Delfin Agencia" className="w-24" />
        <div className="flex items-center justify-center gap-4">
          <nav className="ml-auto hidden items-center justify-center space-x-4 md:flex">
            <a
              id="inicio-link"
              href="#top"
              className="text-lg opacity-0 transition-opacity duration-500"
            >
              Início
            </a>
            <a href="#about" className={getLinkClasses('#about')}>
              Sobre Nós
            </a>
            <a href="#services" className={getLinkClasses('#services')}>
              Serviços
            </a>
            <a href="#clients" className={getLinkClasses('#clients')}>
              Clientes
            </a>
          </nav>
          <a href="#talk-to-us">
            <ShimmerButton
              borderRadius="16px"
              background="#9945E8"
              className="p-1.5 shadow-md"
            >
              Entre em contato
            </ShimmerButton>
          </a>
        </div>
      </div>
    </header>
  );
}
