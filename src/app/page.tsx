import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

import logoDelfin from '@/assets/logo-delfin-white.png';
import { AboutUs } from '@/components/about-us';
import { Clients } from '@/components/clients';
import { Header } from '@/components/header';
import { MainSection } from '@/components/main-section';
import { OurServices } from '@/components/our-services';
import { TalkToUs } from '@/components/talk-to-us';

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Header />

      <main className="flex w-full flex-col items-center px-4 md:px-0">
        <MainSection />

        <AboutUs />
        <OurServices />

        <Clients />

        <TalkToUs />
      </main>

      <footer className="h-28 w-full bg-purple-600 px-4 md:px-0">
        <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between">
          <div className="flex flex-col gap-1 md:flex-row">
            <p className="text-sm">
              © {new Date().getFullYear() + 1} Delfin Agência.
            </p>
            <p className="text-sm">Todos os direitos reservados</p>
          </div>
          <Image src={logoDelfin} alt="Delfin Agencia" className="w-24" />
        </div>
      </footer>

      <a
        href="https://wa.me/5511940262630"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 flex size-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600 md:bottom-5 md:right-5"
      >
        <FaWhatsapp className="size-6" />
      </a>
    </div>
  );
}
