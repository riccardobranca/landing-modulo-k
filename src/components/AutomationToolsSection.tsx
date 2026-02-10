'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface AutomationPlatform {
  name: string;
  tagline: string;
  icon: React.ReactNode;
  features: string[];
  freeTier: string;
  idealFor: string;
}

const platforms: AutomationPlatform[] = [
  {
    name: 'Zapier',
    tagline: 'Collega le tue app in pochi clic',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
        <path d="M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
    features: [
      'Semplice e lineare: se succede X, fai Y',
      '7.000+ app collegate (praticamente tutte)',
      'Template pronti per i flussi piu comuni',
    ],
    freeTier: '100 task/mese gratis',
    idealFor: 'Automazioni semplici e veloci, principianti',
  },
  {
    name: 'Make',
    tagline: 'Visual workflow builder potente',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M9 12h3l3-6" />
        <path d="M12 12l3 6" />
      </svg>
    ),
    features: [
      'Editor visuale drag-and-drop con diramazioni',
      'Piu potente e flessibile di Zapier',
      'Gestione errori e condizioni avanzate',
    ],
    freeTier: '1.000 operazioni/mese gratis',
    idealFor: 'Automazioni complesse con logica condizionale',
  },
  {
    name: 'Power Automate',
    tagline: 'Integrato nell\'ecosistema Microsoft',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
      </svg>
    ),
    features: [
      'Integrazione nativa con Microsoft 365',
      'Automazioni desktop (RPA) incluse',
      'Connettori premium per Dynamics, SAP, etc.',
    ],
    freeTier: 'Nessun costo extra con licenza M365',
    idealFor: 'Chi gia usa l\'ecosistema Microsoft',
  },
  {
    name: 'n8n',
    tagline: 'Open source e self-hostable',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h3a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z" />
        <path d="M17 7h3a1 1 0 011 1v8a1 1 0 01-1 1h-3a1 1 0 01-1-1V8a1 1 0 011-1z" />
        <path d="M8 12h8" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    features: [
      'Codice sorgente aperto e ispezionabile',
      'Self-hosted: i dati restano sul vostro server',
      'Nessun limite se installato in autonomia',
    ],
    freeTier: 'Illimitato se self-hosted',
    idealFor: 'Privacy, controllo totale, profili tecnici',
  },
];

interface ShortcutExample {
  trigger: string;
  action: string;
}

const shortcutExamples: ShortcutExample[] = [
  { trigger: 'Arrivo in ufficio', action: 'Silenzioso + Calendario' },
  { trigger: 'Connetto AirPods', action: 'Spotify' },
  { trigger: 'Ogni mattina 7:30', action: 'Meteo + Appuntamenti' },
  { trigger: 'Screenshot', action: 'Salva su Drive' },
];

interface NativeAutomation {
  app: string;
  features: string[];
  icon: React.ReactNode;
}

const nativeAutomations: NativeAutomation[] = [
  {
    app: 'Gmail',
    features: ['Filtri automatici per etichette', 'Risposte automatiche programmabili', 'Inoltro condizionale'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    app: 'Outlook',
    features: ['Regole su mittente/oggetto/contenuto', 'Quick Steps per azioni multiple', 'Risposte automatiche (OOF)'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 8l10 6 10-6" />
        <path d="M2 16l6-4" />
        <path d="M22 16l-6-4" />
      </svg>
    ),
  },
  {
    app: 'Google Sheets',
    features: ['Apps Script per macro personalizzate', 'Notifiche automatiche su modifica'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18" />
      </svg>
    ),
  },
  {
    app: 'Notion',
    features: ['Database automations (se stato cambia...)', 'Notifiche e assegnazioni automatiche'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8v8" />
        <path d="M8 8l8 8" />
        <path d="M16 8v8" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function SmartphoneGearIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M12 6v1.5M12 12.5V14M8.5 10H10M14 10h1.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AutomationToolsSection() {
  return (
    <div className="space-y-12">
      {/* -------------------------------------------------------- */}
      {/*  1. Platform cards                                        */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.1}>
        <h3
          className="heading-subsection text-center mb-8"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
        >
          Piattaforme di automazione
        </h3>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {platforms.map((platform) => (
          <StaggerItem key={platform.name}>
            <div className="glass-card p-6 h-full flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(249, 115, 22, 0.08)',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(249, 115, 22, 0.15)',
                  }}
                >
                  {platform.icon}
                </span>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                    {platform.name}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {platform.tagline}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 flex-1">
                {platform.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }}>
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Free tier badge */}
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    color: 'var(--color-success)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                  }}
                >
                  {platform.freeTier}
                </span>
              </div>

              {/* Ideal for */}
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>
                  Ideale per:{' '}
                </span>
                {platform.idealFor}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* -------------------------------------------------------- */}
      {/*  2. Apple Shortcuts callout                               */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.2}>
        <div className="max-w-4xl mx-auto">
          <div className="success-card">
            <div className="flex items-start gap-4">
              <span
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(34, 197, 94, 0.12)',
                  color: 'var(--color-success)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                }}
              >
                <SmartphoneGearIcon />
              </span>
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                    iPhone: Comandi Rapidi (Shortcuts)
                  </h4>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    L&apos;automazione piu accessibile che avete: e gia sul vostro telefono.
                    Comandi Rapidi vi permette di creare automazioni basate su posizione, orario, connessioni e molto altro.
                  </p>
                </div>

                {/* Example pills */}
                <div className="flex flex-wrap gap-2">
                  {shortcutExamples.map((example, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span style={{ color: 'var(--text-primary)' }}>{example.trigger}</span>
                      <span style={{ color: 'var(--accent-primary)' }}>
                        <ArrowRightIcon />
                      </span>
                      <span>{example.action}</span>
                    </div>
                  ))}
                </div>

                {/* Tip */}
                <div
                  className="rounded-lg p-3"
                  style={{
                    background: 'rgba(34, 197, 94, 0.06)',
                    border: '1px solid rgba(34, 197, 94, 0.15)',
                  }}
                >
                  <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--color-success)' }}>
                    Consiglio
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Se non avete mai aperto Comandi Rapidi, fatelo. La sezione <strong>Galleria</strong> ha automazioni pronte
                    da attivare con un tocco: nessuna configurazione necessaria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* -------------------------------------------------------- */}
      {/*  3. Native automations                                    */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.3}>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span style={{ color: 'var(--accent-primary)' }}>
                <ToolsIcon />
              </span>
              <h3
                className="heading-subsection"
                style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
              >
                Automazioni native
              </h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Prima di usare tool esterni, controllate le automazioni native delle app che gia usate.
              Spesso risolvono il problema senza aggiungere complessita.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nativeAutomations.map((auto) => (
              <StaggerItem key={auto.app}>
                <div className="glass-card p-5 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'var(--bg-elevated)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {auto.icon}
                    </span>
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {auto.app}
                    </h4>
                  </div>
                  <ul className="space-y-1.5">
                    {auto.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="shrink-0" style={{ color: 'var(--accent-primary)' }}>--</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </div>
  );
}
