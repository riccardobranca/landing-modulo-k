'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface MetaphorCard {
  role: string;
  label: string;
  icon: React.ReactNode;
}

const metaphorCards: MetaphorCard[] = [
  {
    role: 'Cliente',
    label: 'Voi / La vostra App',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    role: 'Cameriere',
    label: 'API',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    role: 'Cucina',
    label: 'Il Servizio',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

interface EverydayAPIRow {
  action: string;
  behindTheScenes: string;
}

const everydayAPIs: EverydayAPIRow[] = [
  {
    action: 'Guardate il meteo sul telefono',
    behindTheScenes: 'L\'app chiede i dati a un servizio meteorologico via API',
  },
  {
    action: 'Pagate con carta online',
    behindTheScenes: 'Il sito parla con la vostra banca tramite API di pagamento',
  },
  {
    action: 'Vedete una mappa dentro un\'app',
    behindTheScenes: 'L\'app usa le API di Google Maps o Apple Maps',
  },
  {
    action: 'Spotify suggerisce una playlist',
    behindTheScenes: 'Algoritmi + API del catalogo musicale lavorano insieme',
  },
  {
    action: 'Uber mostra le auto vicine',
    behindTheScenes: 'API di geolocalizzazione in tempo reale',
  },
];

interface LoginStep {
  number: number;
  text: string;
  highlight?: string;
}

const loginSteps: LoginStep[] = [
  {
    number: 1,
    text: 'Il sito dice all\'API di Google:',
    highlight: '"Chi e questo utente?"',
  },
  {
    number: 2,
    text: 'Google vi mostra la schermata',
    highlight: '"Scegli account"',
  },
  {
    number: 3,
    text: 'Voi cliccate e',
    highlight: 'autorizzate',
  },
  {
    number: 4,
    text: 'Google risponde al sito:',
    highlight: '"Si chiama Mario Rossi, email mario@gmail.com"',
  },
  {
    number: 5,
    text: 'Il sito vi riconosce e',
    highlight: 'vi fa entrare',
  },
];

interface InsightPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const insightPoints: InsightPoint[] = [
  {
    title: 'Capire cosa si puo automatizzare',
    description: 'Se un servizio ha API aperte, potete collegarlo ad altri strumenti e automatizzare i flussi.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Capire perche costa',
    description: 'Molti servizi AI fatturano per chiamata API, non con abbonamento fisso. Ogni richiesta ha un costo.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: 'Capire i limiti',
    description: 'Non tutto e automatizzabile. Alcune piattaforme (es. LinkedIn) bloccano i bot. Rispettate sempre i termini di servizio.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function ArrowRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function DoubleArrowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 5l7 7-7 7" />
      <path d="M6 5l7 7-7 7" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function APISection() {
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
              J.2
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Le API spiegate semplice
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Non dovete diventare programmatori. Ma capire come i software parlano tra loro
              vi aiutera a capire cosa potete automatizzare.
            </p>
          </div>
        </AnimatedSection>

        {/* ---- 1. Restaurant Metaphor ---- */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16">
            <h3
              className="text-xl font-semibold mb-8 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              La metafora del ristorante
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-8">
              {metaphorCards.map((card, idx) => (
                <div key={card.role} className="flex items-center gap-2 md:gap-4">
                  <div
                    className="glass-card flex flex-col items-center text-center px-8 py-6 min-w-[170px]"
                    style={{
                      borderColor: idx === 1 ? 'var(--accent-primary)' : 'var(--border-subtle)',
                      borderWidth: idx === 1 ? '2px' : '1px',
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                      style={{
                        background: idx === 1
                          ? 'rgba(249, 115, 22, 0.15)'
                          : 'var(--bg-surface)',
                        color: idx === 1
                          ? 'var(--accent-primary)'
                          : 'var(--text-secondary)',
                      }}
                    >
                      {card.icon}
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{
                        color: idx === 1 ? 'var(--accent-primary)' : 'var(--text-muted)',
                      }}
                    >
                      {card.role}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {card.label}
                    </span>
                  </div>
                  {idx < metaphorCards.length - 1 && (
                    <div
                      className="hidden md:block"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      <DoubleArrowIcon />
                    </div>
                  )}
                  {idx < metaphorCards.length - 1 && (
                    <div
                      className="block md:hidden rotate-90"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      <DoubleArrowIcon />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div
              className="quote-block max-w-3xl mx-auto p-5 rounded-2xl text-center"
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Voi (il <strong>cliente</strong>) non entrate in cucina. Dite al <strong>cameriere</strong> (l&apos;API)
                cosa volete, lui porta l&apos;ordine alla <strong>cucina</strong> (il servizio) e vi riporta il piatto.
                Non dovete sapere come cucinare: basta saper ordinare.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 2. Everyday APIs Table ---- */}
        <AnimatedSection delay={0.15}>
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span style={{ color: 'var(--accent-primary)' }}>
                <GlobeIcon />
              </span>
              <h3
                className="text-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Le API nella vostra vita quotidiana
              </h3>
            </div>

            <div className="glass-card overflow-hidden max-w-4xl mx-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: 'var(--bg-surface)' }}>
                    <th
                      className="text-left text-xs font-bold uppercase tracking-wider px-5 py-3"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      Quando voi...
                    </th>
                    <th
                      className="text-left text-xs font-bold uppercase tracking-wider px-5 py-3"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Dietro le quinte
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {everydayAPIs.map((row, idx) => (
                    <tr
                      key={row.action}
                      style={{
                        borderTop: idx > 0 ? '1px solid var(--border-subtle)' : undefined,
                      }}
                    >
                      <td
                        className="px-5 py-4 text-sm font-medium"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        {row.action}
                      </td>
                      <td
                        className="px-5 py-4 text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {row.behindTheScenes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 3. Login con Google Walkthrough ---- */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span style={{ color: 'var(--accent-primary)' }}>
                <KeyIcon />
              </span>
              <h3
                className="text-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Esempio: &quot;Login con Google&quot;
              </h3>
            </div>

            <div className="max-w-2xl mx-auto relative">
              {/* Vertical connecting line */}
              <div
                className="absolute left-[23px] top-[32px] w-[2px] hidden sm:block"
                style={{
                  background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
                  height: 'calc(100% - 64px)',
                  opacity: 0.3,
                }}
              />

              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {loginSteps.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="flex items-start gap-4">
                      {/* Step number */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold relative z-10"
                        style={{
                          background: 'var(--accent-primary)',
                          color: '#fff',
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Step content */}
                      <div
                        className="glass-card px-5 py-4 flex-1"
                      >
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {step.text}{' '}
                          {step.highlight && (
                            <span
                              className="font-semibold"
                              style={{ color: 'var(--accent-primary)' }}
                            >
                              {step.highlight}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 4. Cosa significa per voi ---- */}
        <AnimatedSection delay={0.25}>
          <div className="mb-4">
            <h3
              className="text-xl font-semibold mb-8 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Cosa significa per voi
            </h3>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {insightPoints.map((point) => (
                <StaggerItem key={point.title}>
                  <div className="glass-card p-6 h-full flex flex-col">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: 'rgba(249, 115, 22, 0.1)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {point.icon}
                    </div>
                    <h4
                      className="font-bold text-sm mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {point.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {point.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
