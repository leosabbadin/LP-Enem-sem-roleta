
import { BrainCircuit, Target } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Highlight } from './highlight';
import { Pill } from './pill';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function Header() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const heroImageMobile = PlaceHolderImages.find((img) => img.id === 'hero-background-mobile');

  return (
    <header className="relative overflow-hidden">
      {heroImage && (
         <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          quality={75}
          className="hidden object-cover object-center md:block"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      {heroImageMobile && (
         <Image
          src={heroImageMobile.imageUrl}
          alt={heroImageMobile.description}
          fill
          priority
          quality={75}
          className="block object-cover object-center md:hidden"
          data-ai-hint={heroImageMobile.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#100b21]/75 via-[#100b21]/55 to-transparent" />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 pb-10 pt-10 text-center sm:pb-10 sm:pt-4 lg:py-16">
        <h1 className="font-headline text-4xl/[tight] font-extrabold drop-shadow-[0_6px_16px_rgba(0,0,0,.35)] sm:text-5xl/[tight] lg:text-6xl/[tight]">
          Transforme sua redação do ENEM em uma{' '}
          <Highlight>MÁQUINA DE NOTA 900+</Highlight> em apenas{' '}
          <span className="font-extrabold text-pink-200">15 dias</span>.
        </h1>

        <Pill className="mx-auto mt-6 max-w-4xl p-4 text-left">
          <div className="flex items-start gap-3">
            <BrainCircuit className="mt-0.5 size-5 flex-shrink-0 text-primary" />
            <p className="text-sm md:text-lg">
              <span className="font-semibold">Diferencial exclusivo:</span> Login
              único — a IA aprende seu estilo de escrita, se adapta e melhora
              seu aprendizado a cada treino.
            </p>
          </div>
        </Pill>

        <p className="mx-auto mt-6 max-w-4xl text-center text-base text-white/90 md:text-xl">
          Método completo que une IA personalizada, conteúdos prontos e 9 bônus
          exclusivos para você garantir sua nota 900+ e ser o próximo(a) a
          tirar uma foto como essa!
        </p>

        <div className="mt-8 flex justify-center">
          <CtaButton
            href="#offer-summary"
            className="text-center"
          >
            <Target /> Quero garantir minha vaga agora
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
