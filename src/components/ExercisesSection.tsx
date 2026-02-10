'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

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

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      <circle cx="12" cy="14" r="2" />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
      <line x1="10" y1="6" x2="18" y2="6" />
      <line x1="10" y1="10" x2="18" y2="10" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function TipIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface WorkflowStep {
  number: number;
  label: string;
}

interface ToolRow {
  need: string;
  tool: string;
}

interface Exercise {
  id: string;
  title: string;
  difficulty: string;
  difficultyColor: string;
  time: string;
  icon: React.ReactNode;
  description: string;
  workflow: WorkflowStep[];
}

const exercises: Exercise[] = [
  {
    id: 'J.9',
    title: 'Creare un progetto con vibe coding',
    difficulty: 'Intermedio',
    difficultyColor: 'var(--color-warning)',
    time: '30-60 min',
    icon: <CodeIcon />,
    description:
      'Scegliete cosa costruire (landing page, timer, convertitore, checklist), scegliete lo strumento (Replit/Claude Artifacts), descrivete, iterate, deployate.',
    workflow: [
      { number: 1, label: 'Descrivi' },
      { number: 2, label: 'Genera' },
      { number: 3, label: 'Itera' },
      { number: 4, label: 'Deploy' },
    ],
  },
  {
    id: 'J.10',
    title: 'Automatizzare Job Alerts',
    difficulty: 'Intermedio-Avanzato',
    difficultyColor: 'var(--color-error)',
    time: '45-60 min',
    icon: <BriefcaseIcon />,
    description:
      'Creare un\'automazione su Make che raccoglie annunci da job board (via RSS), li filtra con AI per rilevanza al vostro profilo, e vi manda un digest.',
    workflow: [
      { number: 1, label: 'RSS Feed' },
      { number: 2, label: 'Aggrega' },
      { number: 3, label: 'AI Filtra' },
      { number: 4, label: 'Notifica' },
    ],
  },
  {
    id: 'J.11',
    title: 'Newsletter AI Automatica',
    difficulty: 'Intermedio-Avanzato',
    difficultyColor: 'var(--color-error)',
    time: '45-90 min',
    icon: <NewspaperIcon />,
    description:
      'L\'esercizio piu completo: un\'automazione che ogni lunedi raccoglie notizie AI da feed RSS, le elabora con AI per creare un digest in italiano, e lo salva/invia.',
    workflow: [
      { number: 1, label: 'Schedule (lun 8:00)' },
      { number: 2, label: 'RSS' },
      { number: 3, label: 'AI elabora' },
      { number: 4, label: 'Output' },
    ],
  },
];

const toolTable: ToolRow[] = [
  { need: 'Online subito', tool: 'Replit Agent' },
  { need: 'Solo interfaccia', tool: 'v0' },
  { need: 'Zero tecnicismo', tool: 'Lovable' },
  { need: 'Senza installare', tool: 'Claude Artifacts' },
];

const vibeCodingPrompt = `Crea una pagina web con:
- Un titolo "Il mio convertitore di temperatura"
- Un campo di input per un numero
- Due bottoni: "Celsius → Fahrenheit" e viceversa
- Un'area per il risultato
- Design semplice e pulito`;

const jobAlertPrompt = `Analizza questo annuncio di lavoro e rispondi con un JSON:
{
  "rilevante": true/false,
  "motivo": "breve spiegazione",
  "match_score": 1-10
}

Profilo candidato: [descrizione del vostro profilo]
Annuncio: {{annuncio}}`;

const aiOptions = [
  { label: 'OpenAI Simple Text', note: 'facile' },
  { label: 'OpenAI API', note: 'piu controllo' },
  { label: 'Claude API', note: 'tecnico' },
  { label: 'Make AI', note: 'senza account esterni' },
];

const outputOptions = [
  { label: 'Google Docs' },
  { label: 'Notion' },
  { label: 'Telegram Bot' },
  { label: 'Gmail' },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function WorkflowBar({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3 my-5">
      {steps.map((step, idx) => (
        <div key={step.number} className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background: 'var(--accent-primary)',
                color: '#fff',
              }}
            >
              {step.number}
            </span>
            <span
              className="text-sm font-medium whitespace-nowrap"
              style={{ color: 'var(--text-primary)' }}
            >
              {step.label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <span style={{ color: 'var(--text-muted)' }}>
              <ArrowRightIcon />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div
      className="rounded-xl p-4 my-4 overflow-x-auto"
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-subtle)',
      }}
    >
      <pre
        className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap"
        style={{
          color: 'var(--text-secondary)',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
        }}
      >
        {code}
      </pre>
    </div>
  );
}

function Badge({ label, note, color }: { label: string; note?: string; color?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
      style={{
        background: color ? `${color}15` : 'rgba(249, 115, 22, 0.1)',
        color: color || 'var(--accent-primary)',
        border: `1px solid ${color ? `${color}30` : 'rgba(249, 115, 22, 0.2)'}`,
      }}
    >
      {label}
      {note && (
        <span
          className="text-[10px] opacity-70"
          style={{ color: color || 'var(--accent-primary)' }}
        >
          ({note})
        </span>
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Exercise Cards                                                     */
/* ------------------------------------------------------------------ */

function ExerciseHeader({ exercise }: { exercise: Exercise }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: 'rgba(249, 115, 22, 0.12)',
            color: 'var(--accent-primary)',
          }}
        >
          {exercise.icon}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-xs font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
              style={{
                color: 'var(--accent-primary)',
                background: 'rgba(249, 115, 22, 0.1)',
                border: '1px solid rgba(249, 115, 22, 0.2)',
              }}
            >
              {exercise.id}
            </span>
            <span
              className="text-xs font-bold px-2.5 py-0.5 rounded-full"
              style={{
                color: exercise.difficultyColor,
                background: `color-mix(in srgb, ${exercise.difficultyColor} 12%, transparent)`,
                border: `1px solid color-mix(in srgb, ${exercise.difficultyColor} 25%, transparent)`,
              }}
            >
              {exercise.difficulty}
            </span>
          </div>
          <h3
            className="text-lg font-bold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {exercise.title}
          </h3>
        </div>
      </div>
      <div
        className="flex items-center gap-1.5 sm:ml-auto text-xs font-medium flex-shrink-0"
        style={{ color: 'var(--text-muted)' }}
      >
        <ClockIcon />
        {exercise.time}
      </div>
    </div>
  );
}

function Exercise1Card() {
  const ex = exercises[0];
  return (
    <div className="glass-card p-6 sm:p-8">
      <ExerciseHeader exercise={ex} />

      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {ex.description}
      </p>

      <WorkflowBar steps={ex.workflow} />

      {/* Tool recommendation table */}
      <div className="mb-5">
        <h4
          className="text-sm font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          Quale strumento scegliere
        </h4>
        <div
          className="rounded-xl overflow-hidden"
          style={{
            border: '1px solid var(--border-subtle)',
          }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr
                style={{
                  background: 'var(--bg-elevated)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <th
                  className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Se volete...
                </th>
                <th
                  className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wide"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Usate...
                </th>
              </tr>
            </thead>
            <tbody>
              {toolTable.map((row, idx) => (
                <tr
                  key={row.tool}
                  style={{
                    background: idx % 2 === 0 ? 'transparent' : 'var(--bg-surface)',
                    borderBottom: idx < toolTable.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  }}
                >
                  <td
                    className="px-4 py-2.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {row.need}
                  </td>
                  <td
                    className="px-4 py-2.5 font-medium"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {row.tool}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Prompt example */}
      <h4
        className="text-sm font-semibold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        Esempio di prompt
      </h4>
      <CodeBlock code={vibeCodingPrompt} />
    </div>
  );
}

function Exercise2Card() {
  const ex = exercises[1];
  return (
    <div className="glass-card p-6 sm:p-8">
      <ExerciseHeader exercise={ex} />

      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {ex.description}
      </p>

      <WorkflowBar steps={ex.workflow} />

      {/* Key info */}
      <div className="flex flex-wrap gap-2 mb-5">
        <Badge label="Make.com free" note="1000 op/mese" />
        <Badge label="Indeed RSS" />
        <Badge label="Stack Overflow Jobs" />
        <Badge label="Remotive" />
      </div>

      {/* Warning */}
      <div className="warning-card p-4 rounded-xl mb-5 flex items-start gap-3">
        <span
          className="flex-shrink-0 mt-0.5"
          style={{ color: 'var(--color-warning)' }}
        >
          <WarningIcon />
        </span>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          <strong style={{ color: 'var(--color-warning)' }}>Attenzione:</strong>{' '}
          LinkedIn NON ha API pubbliche -- non automatizzabile direttamente.
        </p>
      </div>

      {/* Prompt for AI filter step */}
      <h4
        className="text-sm font-semibold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        Prompt per il filtro AI
      </h4>
      <CodeBlock code={jobAlertPrompt} />
    </div>
  );
}

function Exercise3Card() {
  const ex = exercises[2];
  return (
    <div className="glass-card p-6 sm:p-8">
      <ExerciseHeader exercise={ex} />

      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {ex.description}
      </p>

      <WorkflowBar steps={ex.workflow} />

      {/* AI options */}
      <div className="mb-5">
        <h4
          className="text-sm font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          Opzioni AI per elaborare le notizie
        </h4>
        <div className="flex flex-wrap gap-2">
          {aiOptions.map((opt) => (
            <Badge key={opt.label} label={opt.label} note={opt.note} />
          ))}
        </div>
      </div>

      {/* Output options */}
      <div className="mb-5">
        <h4
          className="text-sm font-semibold mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          Opzioni di output
        </h4>
        <div className="flex flex-wrap gap-2">
          {outputOptions.map((opt) => (
            <Badge key={opt.label} label={opt.label} color="var(--color-success)" />
          ))}
        </div>
      </div>

      {/* Troubleshooting tip */}
      <div className="success-card p-4 rounded-xl flex items-start gap-3">
        <span
          className="flex-shrink-0 mt-0.5"
          style={{ color: 'var(--color-success)' }}
        >
          <TipIcon />
        </span>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          <strong style={{ color: 'var(--color-success)' }}>Tip:</strong>{' '}
          Se vi bloccate, copiate l&apos;errore e chiedetelo a ChatGPT.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function ExercisesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
              J.9 - J.11
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Esercizi Pratici
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Tre progetti hands-on per mettere in pratica tutto cio che avete imparato.
              Dal vibe coding alle automazioni complete.
            </p>
          </div>
        </AnimatedSection>

        {/* Exercise Cards */}
        <StaggerContainer className="flex flex-col gap-8" staggerDelay={0.15}>
          <StaggerItem>
            <Exercise1Card />
          </StaggerItem>
          <StaggerItem>
            <Exercise2Card />
          </StaggerItem>
          <StaggerItem>
            <Exercise3Card />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
