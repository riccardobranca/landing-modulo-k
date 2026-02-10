'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface UseCase {
  title: string;
  icon: React.ReactNode;
  description: string;
  prompt: string;
  applications: string[];
  warning?: string;
}

const useCases: UseCase[] = [
  {
    title: 'Classificazione',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        <path d="M12 11v6M9 14h6" />
      </svg>
    ),
    description: 'L\'AI legge un testo e lo assegna a una categoria predefinita. Non cerca parole chiave: capisce il significato.',
    prompt: 'Analizza questo testo e classificalo in UNA delle seguenti categorie: richiesta_informazioni, reclamo, spam. Rispondi solo con la categoria.',
    applications: [
      'Email: richiesta / reclamo / spam',
      'Feedback: positivo / neutro / negativo',
      'Documenti: fattura / contratto / preventivo',
    ],
  },
  {
    title: 'Estrazione',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15h6M9 11h6" />
      </svg>
    ),
    description: 'L\'AI legge un documento (email, fattura, form) e ne estrae i dati strutturati in formato utilizzabile.',
    prompt: 'Estrai in formato JSON i seguenti campi: numero_fattura, data, importo_totale, partita_iva, fornitore. Se un campo non e presente, usa null.',
    applications: [
      'Da fatture: numero, data, importo, P.IVA',
      'Da email: mittente, azienda, richiesta, urgenza',
    ],
  },
  {
    title: 'Generazione',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    description: 'L\'AI genera testo nuovo basandosi su un input: risposte personalizzate, riassunti, traduzioni, riscritture di tono.',
    prompt: 'Scrivi una risposta professionale a questa email di reclamo. Tono: empatico ma risolutivo. Massimo 5 righe. Includi scuse e proposta di soluzione.',
    applications: [
      'Risposte personalizzate a email',
      'Riassunti automatici di documenti lunghi',
      'Traduzioni e riscritture di tono',
    ],
    warning: 'La generazione automatica va usata con cautela: verificate sempre il risultato prima dell\'invio, specialmente per comunicazioni esterne.',
  },
];

interface PracticalExample {
  title: string;
  steps: PracticalStep[];
}

interface PracticalStep {
  label: string;
  icon: React.ReactNode;
  isAI?: boolean;
}

const practicalExamples: PracticalExample[] = [
  {
    title: 'Gestione fatture',
    steps: [
      { label: 'Email con allegato', icon: <MailIcon /> },
      { label: 'AI estrae dati', icon: <BrainIcon />, isAI: true },
      { label: 'Aggiorna Sheets', icon: <TableIcon /> },
      { label: 'Salva su Drive', icon: <FolderIcon /> },
      { label: 'Notifica Slack', icon: <BellIcon /> },
    ],
  },
  {
    title: 'Lead qualification',
    steps: [
      { label: 'Form compilato', icon: <FormIcon /> },
      { label: 'AI assegna punteggio', icon: <BrainIcon />, isAI: true },
      { label: 'Se alto: notifica + follow-up', icon: <StarIcon /> },
      { label: 'Se basso: nurturing email', icon: <MailIcon /> },
    ],
  },
  {
    title: 'Content repurposing',
    steps: [
      { label: 'Articolo pubblicato', icon: <DocIcon /> },
      { label: 'AI genera 5 varianti social', icon: <BrainIcon />, isAI: true },
      { label: 'Schedula pubblicazione', icon: <CalendarIcon /> },
      { label: 'Notifica per review', icon: <BellIcon /> },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Workflow flow steps                                                */
/* ------------------------------------------------------------------ */

interface FlowStep {
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  isAI?: boolean;
}

const workflowSteps: FlowStep[] = [
  {
    label: 'Email in arrivo',
    icon: <MailIcon />,
  },
  {
    label: 'Classifica',
    sublabel: 'richiesta / reclamo / spam',
    icon: <BrainIcon />,
    isAI: true,
  },
  {
    label: 'Smista',
    icon: <RouterIcon />,
  },
];

interface FlowDestination {
  label: string;
  color: string;
}

const workflowDestinations: FlowDestination[] = [
  { label: 'Commerciale', color: 'var(--color-success)' },
  { label: 'Supporto', color: 'var(--accent-primary)' },
  { label: 'Cestino', color: 'var(--text-muted)' },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2a3.5 3.5 0 00-3.3 4.7A3.5 3.5 0 004 10a3.5 3.5 0 002.1 3.2A3.5 3.5 0 009.5 18" />
      <path d="M14.5 2a3.5 3.5 0 013.3 4.7A3.5 3.5 0 0120 10a3.5 3.5 0 01-2.1 3.2 3.5 3.5 0 01-3.4 4.8" />
      <path d="M12 2v16" />
    </svg>
  );
}

function RouterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6M12 8l-6 6M12 8l6 6M12 8v6" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ArrowFlowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function AlertTriangleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AIAutomationSection() {
  return (
    <div className="space-y-12">
      {/* -------------------------------------------------------- */}
      {/*  1. AI Workflow visualization                              */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.1}>
        <div className="max-w-5xl mx-auto">
          <h3
            className="heading-subsection text-center mb-8"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
          >
            Come l&apos;AI potenzia un&apos;automazione
          </h3>

          <div className="glass-card p-6 md:p-8">
            {/* Horizontal flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2">
              {/* Steps */}
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-2">
                  <div
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
                    style={{
                      background: step.isAI
                        ? 'rgba(249, 115, 22, 0.1)'
                        : 'var(--bg-elevated)',
                      border: step.isAI
                        ? '1px solid rgba(249, 115, 22, 0.3)'
                        : '1px solid var(--border-subtle)',
                      color: step.isAI
                        ? 'var(--accent-primary)'
                        : 'var(--text-primary)',
                    }}
                  >
                    <span className="shrink-0" style={{ color: step.isAI ? 'var(--accent-primary)' : 'var(--text-muted)' }}>
                      {step.icon}
                    </span>
                    <div>
                      <span className="block">{step.label}</span>
                      {step.sublabel && (
                        <span className="block text-xs opacity-70">{step.sublabel}</span>
                      )}
                    </div>
                  </div>
                  {idx < workflowSteps.length - 1 && (
                    <span className="hidden md:block" style={{ color: 'var(--accent-primary)' }}>
                      <ArrowFlowIcon />
                    </span>
                  )}
                  {idx < workflowSteps.length - 1 && (
                    <span className="block md:hidden rotate-90" style={{ color: 'var(--accent-primary)' }}>
                      <ArrowFlowIcon />
                    </span>
                  )}
                </div>
              ))}

              {/* Arrow to destinations */}
              <span className="hidden md:block" style={{ color: 'var(--accent-primary)' }}>
                <ArrowFlowIcon />
              </span>
              <span className="block md:hidden rotate-90" style={{ color: 'var(--accent-primary)' }}>
                <ArrowFlowIcon />
              </span>

              {/* Destinations */}
              <div className="flex flex-col gap-1.5">
                {workflowDestinations.map((dest) => (
                  <span
                    key={dest.label}
                    className="px-3 py-1 rounded-lg text-xs font-semibold text-center"
                    style={{
                      background: `color-mix(in srgb, ${dest.color} 10%, transparent)`,
                      color: dest.color,
                      border: `1px solid color-mix(in srgb, ${dest.color} 25%, transparent)`,
                    }}
                  >
                    {dest.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Explanation */}
            <div
              className="mt-6 pt-5 text-center"
              style={{ borderTop: '1px solid var(--border-subtle)' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                L&apos;AI <strong>capisce l&apos;intento</strong>, non solo le parole chiave.
                &quot;Sono deluso dal servizio&quot; viene classificato come reclamo anche senza la parola &quot;reclamo&quot;.
                Un filtro tradizionale non potrebbe farlo.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* -------------------------------------------------------- */}
      {/*  2. Three use cases                                       */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.15}>
        <h3
          className="heading-subsection text-center mb-8"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
        >
          Tre usi dell&apos;AI nelle automazioni
        </h3>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {useCases.map((useCase) => (
          <StaggerItem key={useCase.title}>
            <div className="glass-card p-6 h-full flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center gap-3">
                <span
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(249, 115, 22, 0.08)',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(249, 115, 22, 0.15)',
                  }}
                >
                  {useCase.icon}
                </span>
                <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                  {useCase.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {useCase.description}
              </p>

              {/* Prompt example */}
              <div className="code-block text-xs leading-relaxed">
                {useCase.prompt}
              </div>

              {/* Applications */}
              <ul className="space-y-1.5 flex-1">
                {useCase.applications.map((app, idx) => (
                  <li key={idx} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <span className="shrink-0" style={{ color: 'var(--accent-primary)' }}>--</span>
                    {app}
                  </li>
                ))}
              </ul>

              {/* Warning if present */}
              {useCase.warning && (
                <div className="warning-card flex items-start gap-2">
                  <span className="shrink-0 mt-0.5" style={{ color: 'var(--color-warning)' }}>
                    <AlertTriangleIcon />
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {useCase.warning}
                  </p>
                </div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* -------------------------------------------------------- */}
      {/*  3. Practical examples                                    */}
      {/* -------------------------------------------------------- */}
      <AnimatedSection delay={0.25}>
        <h3
          className="heading-subsection text-center mb-8"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}
        >
          Tre esempi pratici
        </h3>
      </AnimatedSection>

      <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
        {practicalExamples.map((example, exIdx) => (
          <StaggerItem key={example.title}>
            <div className="glass-card p-6">
              {/* Title with number */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold"
                  style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                >
                  {exIdx + 1}
                </span>
                <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {example.title}
                </h4>
              </div>

              {/* Flow steps */}
              <div className="flex flex-wrap items-center gap-2">
                {example.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-center gap-2">
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
                      style={{
                        background: step.isAI
                          ? 'rgba(249, 115, 22, 0.1)'
                          : 'var(--bg-elevated)',
                        border: step.isAI
                          ? '1px solid rgba(249, 115, 22, 0.3)'
                          : '1px solid var(--border-subtle)',
                        color: step.isAI
                          ? 'var(--accent-primary)'
                          : 'var(--text-secondary)',
                      }}
                    >
                      <span
                        className="shrink-0"
                        style={{ color: step.isAI ? 'var(--accent-primary)' : 'var(--text-muted)' }}
                      >
                        {step.icon}
                      </span>
                      <span>{step.label}</span>
                    </div>
                    {stepIdx < example.steps.length - 1 && (
                      <span className="shrink-0" style={{ color: 'var(--accent-primary)' }}>
                        <ArrowFlowIcon />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Note */}
      <AnimatedSection delay={0.35}>
        <div className="max-w-3xl mx-auto">
          <div className="quote-block">
            Tutti questi flussi si costruiscono senza scrivere codice, usando Zapier, Make o n8n con un nodo AI
            (ChatGPT, Claude, Gemini). Il costo e tipicamente pochi centesimi per esecuzione.
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
