import TypingAnimation from './ui/typing-animation';

export function MainSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 max-w-[1120px]">
      <h1 className="text-4xl font-bold text-center text-start">
        Sua estratégia de marketing começa na escolha da agência certa.
      </h1>
      <TypingAnimation className="text-left w-full" text="Prazer, Delfin" />
      <h3 className="text-2xl text-center">
        Impulsione sua presença digital e aumente suas vendas com o suporte de
        uma equipe criativa e antenada.
      </h3>
    </div>
  );
}
