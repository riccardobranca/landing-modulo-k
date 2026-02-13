'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ResourceCard {
  title: string;
  description: string;
  examples: string[];
  icon: React.ReactNode;
}

const resources: ResourceCard[] = [
  {
    title: 'YouTube Italia',
    description: 'Canali in italiano che seguono l\'AI da vicino',
    examples: [
      'Marcello Ascani - tutorial pratici e novità',
      'Giacomo Freddi - AI per professionisti',
      'Francesco Caruso - automazioni no-code',
      'Cerca: "AI Italia", "ChatGPT tutorial italiano"',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    title: 'Newsletter e Blog',
    description: 'Fonti affidabili da seguire regolarmente',
    examples: [
      'The Rundown AI (inglese, sintesi quotidiana)',
      'AI News di OpenAI/Anthropic (annunci ufficiali)',
      'Blog aziendali: Google AI, Microsoft AI',
      'Newsletter italiane: cerca "AI newsletter Italia"',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: 'Community e Forum',
    description: 'Posti dove fare domande e confrontarsi',
    examples: [
      'Reddit: r/ChatGPT, r/artificial',
      'Discord di tool AI (es. Midjourney, Leonardo)',
      'Gruppi LinkedIn italiani su AI',
      'Forum di prodotto (es. community OpenAI)',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Chiedere all\'AI stessa',
    description: 'Il modo più diretto per imparare',
    examples: [
      '"Spiegami [nuovo tool AI] come se avessi 10 anni"',
      '"Quali sono le novità AI di questa settimana?"',
      '"Come posso usare [tool] per [il mio lavoro]?"',
      'L\'AI può riassumere articoli, spiegare concetti, fare tutorial',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="15" cy="10" r="1" />
        <path d="M9 14s1 1 3 1 3-1 3-1" />
      </svg>
    ),
  },
];

interface RedFlag {
  warning: string;
  why: string;
}

const redFlags: RedFlag[] = [
  {
    warning: 'Promesse di soldi facili',
    why: '"Guadagna 5.000€/mese con ChatGPT senza lavorare" → Scam. L\'AI è uno strumento, non una macchina per soldi automatica.',
  },
  {
    warning: 'Corsi costosissimi senza contenuto chiaro',
    why: 'Se non dicono esattamente cosa imparerete, è fumo. La maggior parte delle info AI è gratis online.',
  },
  {
    warning: 'Guru che vendono "il prompt segreto"',
    why: 'Non esistono prompt magici. Il prompting efficace si impara facendo, non comprando template.',
  },
  {
    warning: 'Tool "rivoluzionari" con zero recensioni',
    why: 'Se un tool è davvero buono, ci sono recensioni verificate. Diffidate di chi vende tool sconosciuti.',
  },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function AlertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function LearningSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                color: 'var(--accent-primary)',
                background: 'rgba(249, 115, 22, 0.1)',
                border: '1px solid rgba(249, 115, 22, 0.2)',
              }}
            >
              K.4
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Continuare a Imparare
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              L&apos;AI cambia ogni settimana. Non serve seguire tutto, ma serve sapere dove guardare quando vi serve qualcosa di nuovo.
            </p>
          </div>
        </AnimatedSection>

        {/* Resources Grid */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span style={{ color: 'var(--accent-primary)' }}>
              <BookIcon />
            </span>
            <h3
              className="text-xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Risorse semplici e gratuite
            </h3>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" staggerDelay={0.08}>
          {resources.map((res) => (
            <StaggerItem key={res.title}>
              <div className="glass-card p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(249, 115, 22, 0.12)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {res.icon}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-base"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {res.title}
                    </h4>
                    <p
                      className="text-xs"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {res.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 flex-1">
                  {res.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 flex-shrink-0"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        •
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Red Flags Section */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span style={{ color: 'var(--color-warning)' }}>
              <AlertIcon />
            </span>
            <h3
              className="text-xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Red flag: quando diffidare
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {redFlags.map((flag) => (
              <div
                key={flag.warning}
                className="warning-card"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(249, 115, 22, 0.15)',
                      color: 'var(--color-warning)',
                    }}
                  >
                    <AlertIcon />
                  </div>
                  <h4
                    className="font-bold text-sm pt-2"
                    style={{ color: 'var(--color-warning)' }}
                  >
                    {flag.warning}
                  </h4>
                </div>
                <p
                  className="text-sm leading-relaxed pl-[52px]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {flag.why}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom quote */}
        <AnimatedSection delay={0.25}>
          <div
            className="quote-block max-w-3xl mx-auto mt-12 p-6 rounded-2xl"
          >
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              La miglior strategia di apprendimento? <strong style={{ color: 'var(--accent-primary)' }}>Imparate quando vi serve qualcosa</strong>.
              <br />
              Non serve stare dietro a ogni novità. Quando avete un problema concreto, cercate la soluzione e imparerete strada facendo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
