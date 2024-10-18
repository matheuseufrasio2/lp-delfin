import { MainSectionSvg } from './main-marketing-svg';
import { Button } from './ui/button';
import RetroGrid from './ui/retro-grid';
import TypingAnimation from './ui/typing-animation';

export function MainSection() {
  return (
    <section className="h-screen w-full">
      <div className="mx-auto flex h-full max-w-[1120px] flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="flex-col items-center justify-center text-white">
            <h1 className="text-center text-4xl font-bold md:text-start">
              Sua estratégia de marketing começa na escolha da agência certa.
            </h1>
            <TypingAnimation
              className="w-full text-center md:text-start"
              text="Prazer, Delfin"
            />
            <p className="block text-center text-2xl">
              Impulsione sua presença digital e aumente suas vendas com o
              suporte de uma equipe criativa e antenada.
            </p>
          </div>
          <MainSectionSvg />
        </div>
        <a href="#services">
          <Button size="lg" className="m-10 w-80">
            Solicitar Orçamento
          </Button>
        </a>
        <RetroGrid className="max-h-screen" />
      </div>
    </section>
  );
}
