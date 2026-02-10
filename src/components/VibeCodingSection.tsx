'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface PromiseReality {
  title: string;
  items: string[];
  color: string;
  bgColor: string;
  borderColor: string;
}

const promiseReality: PromiseReality[] = [
  {
    title: 'La promessa',
    items: [
      'Chiunque puo creare software',
      'Niente piu barriere tecniche',
      'Da idea a prodotto in minuti',
    ],
    color: 'var(--color-success)',
    bgColor: 'rgba(34, 197, 94, 0.06)',
    borderColor: 'rgba(34, 197, 94, 0.15)',
  },
  {
    title: 'La realta',
    items: [
      'Funziona bene per prototipi e tool interni',
      'Progetti complessi richiedono ancora competenze',
      'Il debug resta la parte piu difficile',
    ],
    color: 'var(--color-warning)',
    bgColor: 'rgba(234, 179, 8, 0.06)',
    borderColor: 'rgba(234, 179, 8, 0.15)',
  },
];

interface Level {
  number: number;
  title: string;
  badgeText: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  tools: string;
  description: string;
}

const levels: Level[] = [
  {
    number: 1,
    title: 'Non ho mai scritto codice',
    badgeText: 'INIZIATE QUI',
    badgeColor: 'var(--color-success)',
    badgeBg: 'rgba(34, 197, 94, 0.1)',
    badgeBorder: 'rgba(34, 197, 94, 0.25)',
    tools: 'Claude Artifacts + Lovable',
    description: 'In 30 secondi avete un\'app funzionante. Non dovete installare nulla.',
  },
  {
    number: 2,
    title: 'Voglio fare qualcosa di vero',
    badgeText: 'INTERMEDIO',
    badgeColor: 'var(--accent-primary)',
    badgeBg: 'rgba(249, 115, 22, 0.1)',
    badgeBorder: 'rgba(249, 115, 22, 0.25)',
    tools: 'Replit Agent + Bolt.new',
    description: 'App complete con URL pubblico. Portfolio, tracker, siti web.',
  },
  {
    number: 3,
    title: 'Sono curioso del codice',
    badgeText: 'AVANZATO',
    badgeColor: 'var(--text-muted)',
    badgeBg: 'rgba(128, 128, 128, 0.08)',
    badgeBorder: 'rgba(128, 128, 128, 0.2)',
    tools: 'Cursor + Windsurf + Antigravity',
    description: 'Vedete e modificate il codice. Il ponte verso competenze tecniche.',
  },
];

interface ToolCard {
  name: string;
  description: string;
  idealFor: string;
  price: string;
  priceColor: string;
}

const tools: ToolCard[] = [
  {
    name: 'Replit Agent',
    description: 'App complete, deploy incluso',
    idealFor: 'Prototipi e app reali',
    price: '$25/mese Core',
    priceColor: 'var(--accent-primary)',
  },
  {
    name: 'Cursor',
    description: 'IDE + AI, codebase esistenti',
    idealFor: 'Chi vuole imparare il codice',
    price: '$20/mese Pro',
    priceColor: 'var(--accent-primary)',
  },
  {
    name: 'v0',
    description: 'UI React e componenti web',
    idealFor: 'Designer e frontend',
    price: '$20/mese',
    priceColor: 'var(--accent-primary)',
  },
  {
    name: 'Bolt.new',
    description: 'Prototipi velocissimi, open source',
    idealFor: 'Sperimentazione rapida',
    price: 'Free tier',
    priceColor: 'var(--color-success)',
  },
  {
    name: 'Lovable',
    description: 'Conversazionale per non-tecnici',
    idealFor: 'Principianti assoluti',
    price: '$100M ARR in 8 mesi',
    priceColor: 'var(--text-muted)',
  },
  {
    name: 'Windsurf',
    description: 'IDE AI-native (acquisito da Google)',
    idealFor: 'Sviluppatori AI-first',
    price: '$15/mese Pro',
    priceColor: 'var(--accent-primary)',
  },
  {
    name: 'Google Antigravity',
    description: 'IDE agentico con Gemini 3',
    idealFor: 'Ecosistema Google',
    price: 'Preview gratuita',
    priceColor: 'var(--color-success)',
  },
  {
    name: 'Claude Artifacts',
    description: 'Mini-app nella chat, nessuna installazione',
    idealFor: 'Tutti, subito',
    price: 'Gratuito',
    priceColor: 'var(--color-success)',
  },
];

const demoPrompt = `Crea una calcolatrice funzionante con un design moderno.
Deve avere: numeri, operazioni base (+, -, \u00d7, \u00f7),
un display, e un bottone C per cancellare.
Colori: sfondo scuro, bottoni arrotondati, numeri grandi.`;

const iterationPrompt = `Aggiungi la cronologia delle operazioni
sul lato destro e un bottone per copiare il risultato.`;

const otherIdeas: string[] = [
  'Timer Pomodoro con statistiche',
  'Convertitore valute in tempo reale',
  'Flashcard per studiare',
  'Generatore di password sicure',
  'Quiz game a tema personalizzato',
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Level icons                                                        */
/* ------------------------------------------------------------------ */

const levelIcons: React.ReactNode[] = [
  <SparkleIcon key="sparkle" />,
  <RocketIcon key="rocket" />,
  <TerminalIcon key="terminal" />,
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VibeCodingSection() {
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
              J.7 &mdash; J.8
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Vibe Coding: programmare senza codice
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Descrivete quello che volete. L&apos;AI scrive il codice per voi.
            </p>
          </div>
        </AnimatedSection>

        {/* ---- 1. Cos'e il vibe coding — Quote ---- */}
        <AnimatedSection delay={0.1}>
          <div className="quote-block max-w-3xl mx-auto p-6 rounded-2xl mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span style={{ color: 'var(--accent-primary)' }}>
                <CodeIcon />
              </span>
              <span
                className="font-bold text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                Cos&apos;e il vibe coding
              </span>
            </div>
            <p
              className="text-base leading-relaxed italic"
              style={{ color: 'var(--text-secondary)' }}
            >
              &ldquo;Descrivete cosa volete, l&apos;AI scrive il codice. Non e magia &mdash; ma per molti scopi pratici, funziona.&rdquo;
            </p>
          </div>
        </AnimatedSection>

        {/* Promise vs Reality */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {promiseReality.map((col) => (
              <div
                key={col.title}
                className="p-6 rounded-2xl"
                style={{
                  background: col.bgColor,
                  border: `1px solid ${col.borderColor}`,
                }}
              >
                <h4
                  className="font-bold text-base mb-4"
                  style={{ color: col.color }}
                >
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="flex-shrink-0 mt-1" style={{ color: col.color }}>
                        <ArrowIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ---- 2. Progression Map ---- */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <h3
              className="text-xl font-semibold mb-8 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Tre livelli, un solo principio: descrivete e create
            </h3>

            <StaggerContainer className="flex flex-col gap-5 max-w-3xl mx-auto" staggerDelay={0.1}>
              {levels.map((level, idx) => (
                <StaggerItem key={level.number}>
                  <div
                    className="glass-card p-6 relative overflow-hidden"
                    style={{
                      borderLeft: `4px solid ${level.badgeColor}`,
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {/* Level icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: level.badgeBg,
                          color: level.badgeColor,
                        }}
                      >
                        {levelIcons[idx]}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="text-lg font-bold"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            Livello {level.number}
                          </span>
                          <span
                            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                            style={{
                              color: level.badgeColor,
                              background: level.badgeBg,
                              border: `1px solid ${level.badgeBorder}`,
                            }}
                          >
                            {level.badgeText}
                          </span>
                        </div>
                        <p
                          className="text-sm mt-0.5"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          &ldquo;{level.title}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div
                      className="text-sm font-semibold mb-2"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {level.tools}
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {level.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <p
              className="text-sm text-center mt-6 max-w-xl mx-auto"
              style={{ color: 'var(--text-muted)' }}
            >
              Non dovete scalare tutti i livelli. La maggior parte delle persone restera al livello 1-2, e va benissimo.
            </p>
          </div>
        </AnimatedSection>

        {/* ---- 3. Tool Grid ---- */}
        <AnimatedSection delay={0.25}>
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span style={{ color: 'var(--accent-primary)' }}>
                <GridIcon />
              </span>
              <h3
                className="text-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Gli strumenti del vibe coding
              </h3>
            </div>

            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              staggerDelay={0.06}
            >
              {tools.map((tool) => (
                <StaggerItem key={tool.name}>
                  <div className="glass-card p-5 h-full flex flex-col">
                    <h4
                      className="font-bold text-sm mb-1.5"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {tool.name}
                    </h4>
                    <p
                      className="text-xs leading-relaxed mb-3 flex-1"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {tool.description}
                    </p>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span style={{ color: 'var(--accent-primary)' }}>
                        <TagIcon />
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {tool.idealFor}
                      </span>
                    </div>
                    <div
                      className="text-xs font-bold px-2.5 py-1 rounded-full inline-block self-start"
                      style={{
                        color: tool.priceColor,
                        background:
                          tool.priceColor === 'var(--color-success)'
                            ? 'rgba(34, 197, 94, 0.1)'
                            : tool.priceColor === 'var(--text-muted)'
                              ? 'rgba(128, 128, 128, 0.08)'
                              : 'rgba(249, 115, 22, 0.1)',
                        border: `1px solid ${
                          tool.priceColor === 'var(--color-success)'
                            ? 'rgba(34, 197, 94, 0.2)'
                            : tool.priceColor === 'var(--text-muted)'
                              ? 'rgba(128, 128, 128, 0.15)'
                              : 'rgba(249, 115, 22, 0.2)'
                        }`,
                      }}
                    >
                      {tool.price}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>

        {/* ---- 4. Demo da 2 minuti ---- */}
        <AnimatedSection delay={0.3}>
          <div
            className="glass-card p-8 max-w-3xl mx-auto"
            style={{
              borderColor: 'var(--accent-primary)',
              borderWidth: '2px',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(249, 115, 22, 0.15)',
                  color: 'var(--accent-primary)',
                }}
              >
                <PlayIcon />
              </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Provatelo ora: la demo da 2 minuti
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Con Claude Artifacts &mdash; gratuito, nessuna installazione
                </p>
              </div>
            </div>

            {/* Step 1 — Prompt */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: 'var(--accent-primary)',
                    color: '#fff',
                  }}
                >
                  1
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Copiate questo prompt su Claude
                </span>
              </div>
              <pre
                className="text-sm leading-relaxed p-4 rounded-xl overflow-x-auto"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {demoPrompt}
              </pre>
            </div>

            {/* Step 2 — Iteration */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: 'var(--accent-primary)',
                    color: '#fff',
                  }}
                >
                  2
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Poi migliorate con un&apos;iterazione
                </span>
              </div>
              <pre
                className="text-sm leading-relaxed p-4 rounded-xl overflow-x-auto"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {iterationPrompt}
              </pre>
            </div>

            {/* Other ideas */}
            <div className="mb-6">
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                Altre cose che potete creare cosi:
              </p>
              <div className="flex flex-wrap gap-2">
                {otherIdeas.map((idea) => (
                  <span
                    key={idea}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(249, 115, 22, 0.08)',
                      border: '1px solid rgba(249, 115, 22, 0.15)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <CheckCircleIcon />
                    {idea}
                  </span>
                ))}
              </div>
            </div>

            {/* Closing statement */}
            <div
              className="text-center px-5 py-4 rounded-xl"
              style={{
                background: 'rgba(34, 197, 94, 0.06)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
              }}
            >
              <p
                className="text-sm font-semibold"
                style={{ color: 'var(--color-success)' }}
              >
                Avete appena &ldquo;programmato&rdquo; un&apos;applicazione senza scrivere una riga di codice.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
