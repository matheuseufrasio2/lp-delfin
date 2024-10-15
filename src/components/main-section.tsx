import { MainSectionSvg } from './main-marketing-svg';
import { Button } from './ui/button';
import RetroGrid from './ui/retro-grid';
import TypingAnimation from './ui/typing-animation';

export function MainSection() {
  return (
    <section className="w-full h-screen">
      <div className="flex items-center flex-col justify-center max-w-[1120px] mx-auto h-full">
        <div className="flex items-center justify-center">
          <div className="flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold text-start">
              Sua estratégia de marketing começa na escolha da agência certa.
            </h1>
            <TypingAnimation
              className="text-left w-full"
              text="Prazer, Delfin"
            />
            <span className="text-2xl text-center">
              Impulsione sua presença digital e aumente suas vendas com o
              suporte de uma equipe criativa e antenada.
            </span>
          </div>
          <MainSectionSvg />
        </div>
        <Button size="lg" className="w-80">
          Solicitar Orçamento
        </Button>
        <RetroGrid />
      </div>
    </section>
  );
}
