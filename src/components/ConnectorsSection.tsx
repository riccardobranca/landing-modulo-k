'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface PlatformConnector {
  name: string;
  services: string[];
  setup: string;
  note: string;
  icon: React.ReactNode;
}

const platformConnectors: PlatformConnector[] = [
  {
    name: 'ChatGPT',
    services: ['Gmail', 'Calendar', 'Drive', 'OneDrive', 'Slack', 'Notion'],
    setup: 'Impostazioni → Connessioni → Attiva servizi',
    note: 'L\'ecosistema piu ampio di connettori. Ogni nuovo servizio richiede autorizzazione esplicita.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 7.38 16.75" />
        <path d="M12 2a10 10 0 0 0-7.38 16.75" />
        <path d="M12 2v10l6 3.5" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'Gemini',
    services: ['Gmail', 'Drive', 'Calendar', 'Docs', 'Sheets', 'Maps'],
    setup: 'Automatico con account Google (usa @Gmail, @Drive, @Calendar)',
    note: 'Integrazione nativa con Google Workspace. Non serve configurare nulla se usate gia un account Google.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L3 8v8l9 5 9-5V8l-9-5z" />
        <path d="M12 8v8" />
        <path d="M8 10l4 2 4-2" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    services: ['Documenti caricati', 'Projects con contesto fisso'],
    setup: 'Create Project → Upload docs',
    note: 'Approccio piu controllato: sapete esattamente cosa l\'AI vede. Nessun accesso esterno automatico.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    ),
  },
];

interface ComparisonRow {
  label: string;
  connettore: string;
  automazione: string;
}

const comparisonRows: ComparisonRow[] = [
  { label: 'Quando funziona', connettore: 'Quando VOI lo chiedete', automazione: 'DA SOLA, senza intervento' },
  { label: 'Presenza richiesta', connettore: 'Richiede la vostra presenza', automazione: 'Lavora mentre dormite' },
  { label: 'Flessibilita', connettore: 'Piu flessibile, risposte diverse', automazione: 'Piu rigida ma costante' },
  { label: 'Setup', connettore: 'Setup immediato', automazione: 'Richiede configurazione' },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

const KeyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);

const PlugIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-5" />
    <path d="M9 8V2" />
    <path d="M15 8V2" />
    <path d="M18 8v5a6 6 0 0 1-12 0V8h12z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ConnectorsSection() {
  return (
    <div className="space-y-16">

      {/* 1. Keys Metaphor */}
      <AnimatedSection>
        <div className="quote-block py-6">
          <div className="flex items-start gap-3 mb-4">
            <span style={{ color: 'var(--accent-primary)' }}>
              <KeyIcon />
            </span>
            <p className="text-lg font-medium" style={{ color: 'var(--text-primary)', fontStyle: 'normal' }}>
              Pensate a dare le chiavi di casa a qualcuno...
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6 ml-0 sm:ml-8">
            <div className="glass-card p-5">
              <p className="text-sm font-mono mb-2" style={{ color: 'var(--accent-primary)' }}>
                AUTOMAZIONE
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                &ldquo;Entra quando vuoi e sistema tutto.&rdquo;
              </p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
                Agisce da sola, senza che voi siate presenti.
              </p>
            </div>
            <div className="glass-card p-5" style={{ borderColor: 'var(--accent-primary)' }}>
              <p className="text-sm font-mono mb-2" style={{ color: 'var(--accent-primary)' }}>
                CONNETTORE
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                &ldquo;Tieni le chiavi, cosi quando ti chiamo puoi entrare.&rdquo;
              </p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
                Accede solo su vostra richiesta, durante la conversazione.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 2. Before/After Conversation */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Prima e dopo i connettori
        </h3>
        <div className="glass-card p-0 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* BEFORE */}
            <div className="p-6" style={{ borderRight: '1px solid var(--border-subtle)' }}>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(239, 68, 68, 0.15)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-error)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-error)' }}>
                  Senza connettore
                </span>
              </div>
              <div
                className="rounded-xl p-4 text-sm"
                style={{
                  background: 'rgba(239, 68, 68, 0.05)',
                  borderLeft: '3px solid var(--color-error)',
                  color: 'var(--text-secondary)',
                }}
              >
                <p className="mb-2" style={{ color: 'var(--text-muted)' }}>Voi scrivete:</p>
                <p>&ldquo;Ecco il testo del contratto che ho ricevuto: <span style={{ color: 'var(--text-muted)' }}>[incollate 5 pagine di testo]</span>. Puoi riassumerlo?&rdquo;</p>
              </div>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                Dovete trovare il file, aprirlo, copiare tutto, incollare nella chat...
              </p>
            </div>

            {/* AFTER */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(34, 197, 94, 0.15)' }}
                >
                  <CheckIcon />
                </span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-success)' }}>
                  Con connettore
                </span>
              </div>
              <div
                className="rounded-xl p-4 text-sm"
                style={{
                  background: 'rgba(34, 197, 94, 0.05)',
                  borderLeft: '3px solid var(--color-success)',
                  color: 'var(--text-secondary)',
                }}
              >
                <p className="mb-2" style={{ color: 'var(--text-muted)' }}>Voi scrivete:</p>
                <p>&ldquo;Cerca nel mio Drive il contratto con Fornitore ABC e riassumilo.&rdquo;</p>
              </div>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                Una frase. L&apos;AI cerca, trova, legge, riassume.
              </p>
            </div>
          </div>

          {/* Bottom highlight */}
          <div
            className="px-6 py-4 text-center text-sm font-medium"
            style={{
              background: 'var(--bg-elevated)',
              borderTop: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
            <span style={{ color: 'var(--accent-primary)' }}>
              <ArrowRightIcon />
            </span>{' '}
            L&apos;AI cerca, trova, legge, riassume. Tutto in una singola richiesta.
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Platform Connector Cards */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Connettori nelle piattaforme principali
        </h3>
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {platformConnectors.map((platform) => (
            <StaggerItem key={platform.name}>
              <div className="glass-card p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                  >
                    {platform.icon}
                  </span>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                    {platform.name}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {platform.services.map((service) => (
                    <span
                      key={service}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: 'var(--bg-elevated)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div
                  className="rounded-lg p-3 text-xs mb-3"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
                >
                  <span className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Setup:</span>{' '}
                  {platform.setup}
                </div>

                <p className="text-sm mt-auto" style={{ color: 'var(--text-muted)' }}>
                  {platform.note}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* 4. Connettori vs Automazioni */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Connettori vs Automazioni
        </h3>
        <div className="glass-card overflow-hidden">
          {/* Table header */}
          <div
            className="grid grid-cols-3 gap-4 px-6 py-4 text-sm font-semibold"
            style={{
              background: 'var(--bg-elevated)',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ color: 'var(--text-muted)' }}></div>
            <div className="flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
              <PlugIcon />
              Connettore
            </div>
            <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              Automazione
            </div>
          </div>

          {/* Table rows */}
          {comparisonRows.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-3 gap-4 px-6 py-4 text-sm"
              style={{
                borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                background: i % 2 === 0 ? 'var(--bg-surface)' : 'rgba(0,0,0,0.01)',
              }}
            >
              <div className="font-medium" style={{ color: 'var(--text-muted)' }}>{row.label}</div>
              <div style={{ color: 'var(--accent-primary)' }}>{row.connettore}</div>
              <div style={{ color: 'var(--text-secondary)' }}>{row.automazione}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 5. Privacy Callout */}
      <AnimatedSection>
        <div className="warning-card">
          <div className="flex items-start gap-4">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(249, 115, 22, 0.15)', color: 'var(--color-warning)' }}
            >
              <ShieldIcon />
            </span>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Privacy: cosa state davvero condividendo
              </h4>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Quando connettete un servizio, state dando accesso ai vostri dati a un&apos;azienda esterna.
                L&apos;AI puo leggere le vostre email, i vostri documenti, il vostro calendario.
                Non e un problema in se, ma dovete esserne consapevoli.
              </p>
              <div
                className="rounded-xl p-4"
                style={{
                  background: 'rgba(249, 115, 22, 0.06)',
                  borderLeft: '3px solid var(--color-warning)',
                }}
              >
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  La regola pratica:
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  Connettete solo quello che sareste a vostro agio a condividere con un assistente umano
                  molto efficiente ma che lavora per un&apos;azienda esterna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
