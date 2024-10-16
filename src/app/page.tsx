import { Header } from '@/components/header';
import { MainSection } from '@/components/main-section';

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <Header />

      <main className="flex w-full flex-col items-center">
        <MainSection />

        <section
          id="about"
          className="flex h-[calc(100vh-72px)] w-full items-center justify-center bg-red-900"
        >
          <h2 className="text-3xl text-white">Sobre Nós</h2>
        </section>

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
    </div>
  );
}
