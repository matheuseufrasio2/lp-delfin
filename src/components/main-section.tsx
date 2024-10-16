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
            <h1 className="text-start text-4xl font-bold">
              Sua estratégia de marketing começa na escolha da agência certa.
            </h1>
            <TypingAnimation
              className="w-full text-left"
              text="Prazer, Delfin"
            />
            <span className="text-center text-2xl">
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
