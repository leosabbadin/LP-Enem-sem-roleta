
import { Check, Target } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Highlight } from './highlight';

export function OfferSummarySection() {
  return (
    <section
      id="offer-summary"
      className="section mx-auto max-w-4xl px-6 pb-16 pt-0"
    >
      <div className="rounded-3xl bg-gradient-to-br from-[#2c1d62]/80 to-[#1a1338]/80 p-6 text-center shadow-[0_20px_80px_rgba(150,80,255,.35)] ring-1 ring-inset ring-white/10 backdrop-blur-md md:p-10">
        <h2 className="font-headline text-2xl font-extrabold text-white drop-shadow-lg md:text-4xl">
          Resumo de Tudo que Você Leva Hoje:
        </h2>

        <ul className="mx-auto mt-6 flex max-w-xl flex-col items-start gap-3 text-left">
          <li className="flex items-center gap-3">
            <Check className="size-5 flex-shrink-0 text-green-400" />
            <span className="text-base text-white/90 md:text-lg">
              Acesso Completo ao Método{' '}
              <span className="font-bold"> (no valor de R$ 89,90)</span>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="size-5 flex-shrink-0 text-green-400" />
            <span className="text-base text-white/90 md:text-lg">
              + Todos os 9 Bônus Exclusivos{' '}
              <span className="font-bold">(no valor de R$ 293,00)</span>
            </span>
          </li>
        </ul>

        <div className="mt-6 border-t border-dashed border-white/20 pt-6">
          <p className="text-lg text-white/80">
            VALOR TOTAL QUE VOCÊ DEVERIA PAGAR:
          </p>
          <p className="text-3xl font-bold text-red-400 line-through">
            R$ 382,90
          </p>
          <p className="mt-4 text-lg text-white/80">MAS HOJE, POR APENAS:</p>
          <div
            className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
            style={{ textShadow: '0 8px 25px rgba(252, 211, 77, 0.4)' }}
          >
            <Highlight>
              <span className="text-3xl sm:text-4xl md:text-5xl">R$</span>22,00
            </Highlight>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-green-500/10 p-4 ring-1 ring-inset ring-green-500/20">
          <p className="font-bold text-white">
            Isso mesmo, você economiza{' '}
            <span className="text-green-300">R$ 360,90</span> (mais de 94% de
            desconto) levando tudo hoje!
          </p>
        </div>

        <div className="mt-8">
          <CtaButton href="https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85">
            <Target /> QUERO MEU ACESSO POR APENAS R$ 22,00!
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
