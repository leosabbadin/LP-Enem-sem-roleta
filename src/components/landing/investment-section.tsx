'use client';

import { CircleDollarSign, Flame, Gift, TicketPercent } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Highlight } from './highlight';
import { SectionTitle } from './section-title';
import { useState } from 'react';
import { RoulettePopup } from './roulette-popup';

export function InvestmentSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section id="investimento" className="section relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0b2e] to-[#1a1338]" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-b from-primary/10 to-purple-500/10 p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,.45)]">
          <SectionTitle>
            <div className="flex items-center justify-center gap-3">
              <CircleDollarSign className="size-8 text-primary" /> Investimento
            </div>
          </SectionTitle>
          <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl border border-amber-400/50 bg-amber-400/10 p-4">
            <div className="flex items-center gap-2 font-bold text-amber-300">
              <Gift className="size-5" />
              <span>Gatilho Especial</span>
            </div>
            <p className="text-center text-white/90">
              Gire a roleta da sorte e ganhe até <b>80% de desconto</b> no valor
              abaixo!
            </p>
          </div>

          <p className="mt-8 text-xl text-white/70">
            De{' '}
            <span className="font-bold text-red-400 line-through">
              R$ 89,90
            </span>{' '}
            por até
          </p>

          <div
            className="font-headline text-[56px] font-extrabold tracking-tight sm:text-[72px] md:text-[88px]"
            style={{ textShadow: '0 10px 30px rgba(255,230,105,.25)' }}
          >
            <Highlight>R$ 24,99</Highlight>
          </div>
          <div className="-mt-2 text-white/80">
            à vista no pix ou cartão
          </div>
          <div className="mt-4 inline-block rounded-full bg-pink-600/85 px-4 py-1.5 text-sm font-bold shadow-lg">
            OFERTA DE LANÇAMENTO
          </div>

          <div className="mt-8 flex justify-center">
            <CtaButton asButton onClick={() => setIsPopupOpen(true)}>
              <TicketPercent /> Descubra seu desconto
            </CtaButton>
          </div>
        </div>
      </div>
      <RoulettePopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </section>
  );
}
