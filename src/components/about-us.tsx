'use client';

import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

export function AboutUs() {
  return (
    <section id="about" className="w-full py-24">
      <div className="mx-auto flex h-full max-w-[1120px] flex-col items-center justify-center">
        <h2 className="mb-6 text-4xl text-white">Quem Somos</h2>
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {/* Texto - Superior Esquerda */}
          <div className="flex items-center justify-center">
            <h3 className="text-center text-xl md:text-start md:text-2xl">
              Convertemos ideias em cases de sucesso através de estratégia
              inteligente, criatividade e autenticidade. Nossa missão é
              transformar marcas em agentes relevantes e influentes,
              impulsionando negócios com intencionalidade.
            </h3>
          </div>

          {/* Carousel - Superior Direita */}
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="hidden max-w-lg md:block"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center overflow-hidden rounded-lg p-0">
                      <img
                        alt="imagem"
                        src="https://images.unsplash.com/photo-1729008014126-c0eb5498663b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel - Inferior Esquerda */}
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="hidden max-w-lg md:block"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center overflow-hidden rounded-lg p-0">
                      <img
                        alt="teste"
                        src="https://images.unsplash.com/photo-1729008014126-c0eb5498663b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="size-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Texto - Inferior Direita */}
          <div className="flex items-center justify-center">
            <h3 className="text-center text-xl md:text-start md:text-2xl">
              Com uma equipe dedicada ao planejamento estratégico e à geração de
              resultados, estamos sempre alinhados às tendências e inovações das
              redes sociais, garantindo que nossos clientes estejam à frente em
              um cenário competitivo.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
