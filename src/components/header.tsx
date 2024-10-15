'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import logoDelfin from '@/assets/logo-delfin.png';

import ShimmerButton from './ui/shimmer-button';

export function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header?.classList.add('backdrop-blur-md');
      } else {
        header?.classList.remove('backdrop-blur-md');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="w-full py-6 fixed top-0 bg-transparent flex items-center justify-center z-10 transition-all duration-300">
      <div className="max-w-[1120px] w-full flex items-center justify-between px-4">
        <Image src={logoDelfin} alt="Delfin Agencia" className="w-28" />
        <nav className="flex space-x-4 items-center ml-auto">
          <a href="#about" className="text-lg">
            Sobre Nós
          </a>
          <a href="#services" className="text-lg">
            Serviços
          </a>
          <a href="#clients" className="text-lg">
            Clientes
          </a>
          <ShimmerButton
            borderRadius="16px"
            background="#9945E8"
            className="shadow-md"
          >
            Entre em contato
          </ShimmerButton>
        </nav>
      </div>
    </header>
  );
}
