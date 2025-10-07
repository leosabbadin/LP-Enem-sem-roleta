
import { Gift, Target } from 'lucide-react';
import { CtaButton } from './cta-button';
import { Pill } from './pill';
import { SectionTitle } from './section-title';

export function BonusSection() {
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
      <p className="mt-6 text-white/85">
        👉 Esses bônus multiplicam sua preparação e aceleram sua evolução.
      </p>
      <div className="mt-10 flex justify-center">
        <CtaButton href="#investimento">
          <Target /> Garantir meus bônus exclusivos AGORA!
        </CtaButton>
      </div>
    </section>
  );
}
