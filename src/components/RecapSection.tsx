'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ModuleCard {
  module: string;
  title: string;
  bullets: string[];
  icon: React.ReactNode;
}

const modules: ModuleCard[] = [
  {
    module: 'F',
    title: 'Scrittura',
    bullets: [
      'Prompting efficace: contesto, ruolo, formato',
      'Workflow bozza → revisione → validazione',
      'CV ottimizzato e lettere di presentazione',
      'Verifica sempre: l\'AI può sbagliare',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    module: 'G',
    title: 'Voce',
    bullets: [
      'Trascrizioni precise per meeting e video',
      'Voice mode per conversazioni naturali',
      'Text-to-speech per contenuti audio',
      'Accessibilità: sottotitoli e sintesi vocale',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    module: 'H',
    title: 'Visual',
    bullets: [
      'Generazione immagini con prompt efficaci',
      'Foto profilo professionale con AI',
      '3 livelli: modelli, interfacce, aggregatori',
      'Tool consigliati: Leonardo, Pika, Canva',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    module: 'I',
    title: 'Dati',
    bullets: [
      'Formule Excel/Sheets da descrizione naturale',
      'Code Interpreter per analisi complesse',
      'Flash Fill e pattern recognition',
      'Garbage in → garbage out: validare sempre',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    module: 'J',
    title: 'Automazioni',
    bullets: [
      'API = camerieri tra servizi',
      'Connettori vs automazioni complete',
      'Trigger → condizione → azione',
      'Agenti AI e vibe coding',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RecapSection() {
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
              K.0
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Riassunto dei Moduli
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Ripasso veloce dei concetti chiave prima di chiudere il corso
            </p>
          </div>
        </AnimatedSection>

        {/* Module cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {modules.map((mod) => (
            <StaggerItem key={mod.module}>
              <div className="glass-card p-6 h-full flex flex-col">
                {/* Header with icon and module name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(249, 115, 22, 0.12)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {mod.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Modulo {mod.module}
                    </div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {mod.title}
                    </h3>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 flex-1">
                  {mod.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 flex-shrink-0"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom callout */}
        <AnimatedSection delay={0.3}>
          <div
            className="quote-block max-w-3xl mx-auto mt-12 p-6 rounded-2xl"
          >
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              Questi 5 moduli vi hanno dato gli strumenti base per lavorare con l&apos;AI.
              <br />
              Ora è il momento di capire <strong style={{ color: 'var(--accent-primary)' }}>come presentare queste competenze</strong> sul mercato del lavoro.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
