
'use client';

import { CircleDollarSign, Flame, TicketPercent } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Highlight } from './highlight';
import { SectionTitle } from './section-title';
import { useState, useEffect } from 'react';
import { RoulettePopup } from './roulette-popup';

const COUNTDOWN_SECONDS = 5 * 60; // 5 minutes

export function InvestmentSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section
      id="investimento"
      className="section relative isolate overflow-hidden bg-background py-16"
    >
      <div
        className="absolute inset-x-0 -z-10 top-1/2 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a855f7] to-[#ff80b5] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] md:w-[48.125rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#2c1d62]/80 to-[#1a1338]/80 p-6 text-center shadow-[0_20px_80px_rgba(150,80,255,.35)] ring-1 ring-inset ring-white/10 backdrop-blur-md md:p-10">
        <SectionTitle>
          <div className="flex items-center justify-center gap-3">
            <CircleDollarSign className="size-8 text-primary" /> Investimento
          </div>
        </SectionTitle>
        <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl border border-amber-400/50 bg-amber-400/10 p-4">
          <div className="flex items-center gap-2 font-bold text-amber-300">
            <Flame className="size-5" />
            <span>Oferta Especial Liberada!</span>
          </div>
          <p className="text-center text-white/90">
            Aproveite mais de 75% de desconto por tempo limitado.
          </p>
        </div>

        <p className="mt-4 text-xl text-white/70">
          De{' '}
          <span className="font-bold text-red-400 line-through">R$ 89,90</span>{' '}
          por
        </p>

        <div
          className="font-headline text-[60px] font-extrabold tracking-tight sm:text-[72px] md:text-[88px]"
          style={{ textShadow: '0 10px 30px rgba(252, 211, 77, 0.4)' }}
        >
          <Highlight>
            <span className="text-4xl sm:text-5xl md:text-6xl">R$</span>22,00
          </Highlight>
        </div>
        
        <div className="mt-4 rounded-lg bg-red-600/20 px-4 py-3 text-sm font-bold shadow-lg">
           <p className="font-bold text-red-300">A OFERTA ACABA EM</p>
          <p className="font-mono text-2xl tracking-widest text-white">
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <CtaButton href="https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85">
            Garantir o Acesso Vitálicio!
          </CtaButton>
        </div>
      </div>
      <RoulettePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </section>
  );
}
