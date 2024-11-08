'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function TalkToUs() {
  return (
    <section id="talk-to-us" className="w-full py-24">
      <div className="mx-auto flex h-full max-w-[1120px] flex-col items-center justify-center">
        <h2 className="mb-12 text-4xl text-white">Fale conosco!</h2>
        <h3 className="mb-10 text-center text-3xl text-white">
          Quer receber uma{' '}
          <b className="text-purple-400">consultoria gratuita</b> com nosso
          estrategista?
        </h3>
        <div className="flex w-full items-start gap-8">
          <div className="w-1/2 space-y-3">
            <h4 className="text-xl text-white">
              Preencha o formulário com suas informações, e entraremos em
              contato para marcar o melhor horário.
            </h4>
            <div className="w-full">
              <Label htmlFor="name" className="text-white">
                Nome
              </Label>
              <Input id="name" placeholder="Nome" />
            </div>
            <div className="w-full">
              <Label htmlFor="email" className="text-white">
                E-mail
              </Label>
              <Input className="w-full" id="email" type="email" />
            </div>
            <div className="w-full">
              <Label htmlFor="phone" className="text-white">
                Telefone
              </Label>
              <Input id="phone" />
            </div>
            <div className="w-full">
              <Label htmlFor="company" className="text-white">
                Nome da sua empresa:
              </Label>
              <Input id="company" />
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-2">
              <Button className="w-full bg-purple-600 px-8 py-4 text-lg hover:bg-purple-700">
                Quero uma consultoria
              </Button>
            </div>
          </div>
          <div className="w-1/2 space-y-3 text-white">
            <div className="min-h-14">
              <h4 className="text-xl">
                Ou fale conosco diretamente pelos nossos contatos:
              </h4>
            </div>
            <p className="mb-4">
              <b>WhatsApp:</b> 23432423
            </p>
            <p>
              <b>Telefone:</b> 2343242342
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
