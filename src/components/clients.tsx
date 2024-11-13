'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import logoDelfin from '@/assets/logo-delfin-purple.png';

import BlurFade from './ui/blur-fade';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

// const feedbaks = [
//   {
//     name: 'Daniel Costa da More Good Foundation',
//     text: 'A Delfin é uma agência experiente e ativa. Sempre buscando novas referências de conteúdo e estratégias para trabalhar com o time da More Good Foundation. Usam de suas habilidades, ferramentas e conhecimentos para ajudar e trazer resultados reais. Com certeza uma agência de alta performance e de grandes resultados.',
//   },
//   {
//     name: 'Daniel Costa da More Good Foundation',
//     text: 'Uma agência responsável, comprometida e muito profissional, sempre com ideias e um time disposto a dar mais de si para alcançar o sucesso. Destaco o entusiasmo que sempre demonstraram perante novos desafios e admiro a capacidade de procurarem soluções.',
//   },
// ];

const studyCases = [
  {
    name: 'Tudo sobre Cachorros',
    paragraphs: [
      'O time do Tudo Sobre Cachorros nos procurou com uma preocupação genuína: o crescimento do perfil estava estagnado há alguns meses e isso estava impactando diretamente no engajamento e venda dos infoprodutos.',
      'Montamos uma estratégia focada em explorar novos formatos de conteúdo sem perder a essência e personalidade da marca. Automatizamos alguns processos para também aumentar as visualizações nos vídeos do Youtube, que contava com mais de 1 milhão de inscritos.',
      'Em 8 meses crescemos 60 mil seguidores, alcançando a marca de 430 mil pessoas acompanhando o perfil. Algumas publicações tiveram um alcance de mais de 2 milhões e o engajamento da conta triplicou.',
    ],
  },
  {
    name: 'Missionary Delivery',
    paragraphs: [
      'O Missionary Delivery é uma empresa chilena que nos apresentou um desafio: Trazer o ECommerce para o Brasil e implementar uma estratégia de marketing eficaz para divulgação.',
      'Usamos nossa expertise em conteúdo para redes sociais para criar uma comunidade engajada que começou a divulgar o MD de forma orgânica em suas redes. Também documentamos o backstage da operação e isso ajudou a ganhar a confiança do consumidor final.',
      'Nossas estratégias orgânicas colaboraram com a redução do CAC e fidelização dos clientes.',
    ],
  },
  {
    name: 'Plataforma Fitness Melhor Versão',
    paragraphs: [
      'A Renata Concha do Melhor Versão procurou nossos serviços para alcançar o público-alvo para a plataforma fitness que ela estava desenvolvendo.',
      'Estudamos a fundo o público e desenvolvemos uma estratégia orgânica para atrair e engajar essa audiência através de conteúdos informativos e interativos, que trouxeram um ar mais profissional e acolhedor para o perfil.',
      'Em 12 meses o perfil cresceu 80 mil seguidores e a plataforma atingiu a marca de 7 mil assinantes.',
    ],
  },
];

export function Clients() {
  return (
    <section id="about" className="w-full py-24">
      <div className="mx-auto flex h-full max-w-[1120px] flex-col items-center justify-center">
        <h2 className="mb-12 text-4xl text-white">Nossos Clientes</h2>
        <BlurFade delay={0.5} inView className="w-full">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {studyCases.map((study) => (
                <CarouselItem key={study.name}>
                  <Card>
                    <CardContent className="w-full p-6">
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="text-2xl text-white">{study.name}</h3>
                        <Image
                          src={logoDelfin}
                          alt="Delfin Agencia"
                          className="w-24"
                        />
                      </div>
                      {study.paragraphs.map((paragraph, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <p key={index} className="mb-4 text-white">
                          {paragraph}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </BlurFade>
      </div>
    </section>
  );
}
