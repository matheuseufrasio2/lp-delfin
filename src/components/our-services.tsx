'use client';

import { Camera, Megaphone, Share2 } from 'lucide-react';

import BlurFade from './ui/blur-fade';

export function OurServices() {
  return (
    <section id="about" className="w-full py-24">
      <div className="mx-auto flex h-full max-w-[1120px] flex-col items-center justify-center">
        <h2 className="mb-12 text-4xl text-white">Nossos Serviços</h2>
        <h3 className="mb-32 text-center text-3xl text-white">
          Queremos que sua marca tenha cada vez{' '}
          <b className="text-purple-400">mais visibilidade e relevância</b> para
          ocupar o lugar certo na mente do seu público.
        </h3>
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-3">
          {/* Texto - Superior Esquerda */}
          <BlurFade delay={0.4} inView>
            <div className="flex flex-col items-center justify-center md:items-start">
              <div className="flex size-16 items-center justify-center rounded-full bg-purple-200">
                <Share2 size={32} className="text-purple-600" />
              </div>
              <h3 className="mt-4 text-center text-xl md:text-start md:text-2xl">
                Gestão de Redes Sociais
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus voluptas, magni quos quaerat laboriosam, ducimus quasi,
                mollitia veniam itaque nam voluptates asperiores architecto
                maiores incidunt? Et pariatur deleniti nemo dicta.
              </p>
            </div>
          </BlurFade>

          {/* Carousel - Superior Direita */}
          <BlurFade delay={0.8} inView>
            <div className="flex flex-col items-center justify-center md:items-start">
              <div className="flex size-16 items-center justify-center rounded-full bg-purple-200">
                <Megaphone size={32} className="text-purple-600" />
              </div>
              <h3 className="mt-4 text-center text-xl md:text-start md:text-2xl">
                Campanhas Estratégicas de Conteúdo
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus voluptas, magni quos quaerat laboriosam, ducimus quasi,
                mollitia veniam itaque nam voluptates asperiores architecto
                maiores incidunt? Et pariatur deleniti nemo dicta.
              </p>
            </div>
          </BlurFade>

          {/* Carousel - Inferior Esquerda */}
          <BlurFade delay={1.2} inView>
            <div className="flex flex-col items-center justify-center md:items-start">
              <div className="flex size-16 items-center justify-center rounded-full bg-purple-200">
                <Camera size={32} className="text-purple-600" />
              </div>
              <h3 className="mt-4 text-center text-xl md:text-start md:text-2xl">
                Captação Audiovisual
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus voluptas, magni quos quaerat laboriosam, ducimus quasi,
                mollitia veniam itaque nam voluptates asperiores architecto
                maiores incidunt? Et pariatur deleniti nemo dicta.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
