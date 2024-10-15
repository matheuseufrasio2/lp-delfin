import { Header } from '@/components/header';
import { MainSection } from '@/components/main-section';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      <main className="w-full flex flex-col items-center">
        <MainSection />

        <section
          id="about"
          className="w-full h-[calc(100vh-72px)] flex items-center justify-center"
        >
          <h2 className="text-3xl text-white">Sobre Nós</h2>
        </section>

        <section
          id="services"
          className="w-full h-[calc(100vh-72px)] flex items-center justify-center"
        >
          <h2 className="text-3xl text-white">Serviços</h2>
        </section>

        <section
          id="clients"
          className="w-full h-[calc(100vh-72px)] flex items-center justify-center"
        >
          <h2 className="text-3xl text-white">Clientes</h2>
        </section>
      </main>
    </div>
  );
}
