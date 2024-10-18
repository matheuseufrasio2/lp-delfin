import { FaWhatsapp } from 'react-icons/fa';

import { AboutUs } from '@/components/about-us';
import { Header } from '@/components/header';
import { MainSection } from '@/components/main-section';

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-center">
      <Header />

      <main className="flex w-full flex-col items-center px-4 md:px-0">
        <MainSection />

        <AboutUs />

        <section
          id="services"
          className="flex h-[calc(100vh-72px)] w-full items-center justify-center"
        >
          <h2 className="text-3xl text-white">Serviços</h2>
        </section>

        <section
          id="clients"
          className="flex h-[calc(100vh-72px)] w-full items-center justify-center"
        >
          <h2 className="text-3xl text-white">Clientes</h2>
        </section>
      </main>

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
