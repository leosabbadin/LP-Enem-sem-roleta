
'use client';

import { Gift, Target, Check, Clock } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Pill } from './pill';
import { SectionTitle } from './section-title';
import { Highlight } from './highlight';
import { useState, useEffect } from 'react';

const COUNTDOWN_SECONDS = 5 * 60; // 5 minutes

export function BonusSection() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const bonuses = [
    { text: '📚 Banco Aristocrata de Temas (100 prováveis para 2025)', value: 47 },
    { text: '🧠 50 Frases de Filosofia e Sociologia', value: 27 },
    { text: '🛠️ Guia de Propostas de Intervenção', value: 37 },
    { text: '🗺️ Mapa Mental Estrutura Nota 1000', value: 27 },
    { text: '📘 E-book: Erros que Zeram a Redação', value: 37 },
    { text: '🔗 Banco de Conectores e Variações Linguísticas', value: 27 },
    { text: '✅ Checklist de Revisão Rápida', value: 17 },
    { text: '📝 Simulado Aristocrata 2025 (3 propostas inéditas)', value: 47 },
    { text: '⚡ Mini-Aula Motivacional Pré-Prova', value: 27 },
  ];

  return (
    <section
      id="bonus"
      className="section mx-auto max-w-7xl rounded-[2rem] bg-white/5 px-6 py-16"
    >
      <SectionTitle>
        <div className="flex items-center gap-3">
          <Gift className="size-8 text-primary" />
          <h2>Bônus Exclusivos</h2>
        </div>
      </SectionTitle>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {bonuses.map((bonus, index) => (
          <li key={index}>
            <Pill className="h-full shine-effect flex flex-col p-4">
              <span>{bonus.text}</span>
              <span className="mt-1 text-sm italic text-white/60">
                (Valor: R$ {bonus.value.toFixed(2).replace('.', ',')})
              </span>
            </Pill>
          </li>
        ))}
      </ul>

      <div
        id="offer-summary"
        className="mx-auto mt-12 max-w-4xl rounded-3xl bg-gradient-to-br from-[#2c1d62]/80 to-[#1a1338]/80 p-4 text-center shadow-[0_20px_80px_rgba(150,80,255,.35)] ring-1 ring-inset ring-white/10 backdrop-blur-md md:p-6"
      >
        <h2 className="font-headline text-xl font-extrabold text-white drop-shadow-lg md:text-3xl">
          Resumo de Tudo que Você Leva Hoje:
        </h2>

        <ul className="mx-auto mt-4 flex max-w-xl flex-col items-start gap-2 text-left">
          <li className="flex items-center gap-3">
            <Check className="size-5 flex-shrink-0 text-green-400" />
            <span className="text-sm text-white/90 md:text-base">
              Acesso Completo ao Método{' '}
              <span className="font-bold"> (no valor de R$ 89,90)</span>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Check className="size-5 flex-shrink-0 text-green-400" />
            <span className="text-sm text-white/90 md:text-base">
              + Todos os 9 Bônus Exclusivos{' '}
              <span className="font-bold">(no valor de R$ 293,00)</span>
            </span>
          </li>
        </ul>

        <div className="mt-4 border-t border-dashed border-white/20 pt-4 md:mt-6 md:pt-6">
          <p className="text-sm text-white/80 md:text-base">
            VALOR TOTAL QUE VOCÊ DEVERIA PAGAR:
          </p>
          <p className="text-lg md:text-xl font-bold text-red-400 line-through">
            R$ 382,90
          </p>
          <p className="mt-2 text-sm text-white/80 md:mt-4 md:text-base">MAS HOJE, POR APENAS:</p>
          <div
            className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl"
            style={{ textShadow: '0 8px 25px rgba(252, 211, 77, 0.4)' }}
          >
            <Highlight>
              <span className="text-3xl sm:text-4xl">R$</span>19,50
            </Highlight>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-green-500/10 p-2 ring-1 ring-inset ring-green-500/20 md:p-3">
          <p className="font-bold text-white text-xs md:text-sm">
            Isso mesmo, você economiza{' '}
            <span className="text-green-300">R$ 360,90</span> (mais de 94% de
            desconto) levando tudo hoje!
          </p>
        </div>

        <div className="my-4 rounded-lg bg-red-600/20 px-4 py-3 text-sm font-bold shadow-lg md:my-6">
          <div className="flex items-center justify-center gap-2">
            <Clock className="size-5 text-red-300" />
            <p className="font-bold text-red-300">A OFERTA ACABA EM</p>
          </div>
          <p className="font-mono text-2xl tracking-widest text-white">
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <CtaButton href="https://pay.kirvano.com/a321493b-b7f4-4bc1-aee7-76ddd61e2c85" className="px-6 py-3 text-base md:px-8 md:py-4 md:text-lg">
            <Target /> QUERO MEU ACESSO POR APENAS R$ 19,50!
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
