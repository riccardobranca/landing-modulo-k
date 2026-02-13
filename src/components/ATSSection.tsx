'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import DemoCard from '@/components/DemoCard';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface FlowStep {
  number: number;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const atsFlow: FlowStep[] = [
  {
    number: 1,
    label: 'Invio CV',
    description: 'Caricate il vostro CV sul portale aziendale',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: 2,
    label: 'Parsing ATS',
    description: 'Il software estrae automaticamente testo, date, competenze',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    number: 3,
    label: 'Keyword Matching',
    description: 'Confronta le vostre parole chiave con quelle richieste',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: 4,
    label: 'Scoring',
    description: 'Assegna un punteggio di compatibilità (es. 75/100)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    number: 5,
    label: 'Filtro Umano',
    description: 'Solo i CV con punteggio alto arrivano al recruiter',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
];

interface ChecklistItem {
  text: string;
  priority: 'critical' | 'important' | 'nice';
}

const optimizationChecklist: ChecklistItem[] = [
  { text: 'Usate le STESSE parole chiave dell\'annuncio (es. "Python" non "linguaggi di programmazione")', priority: 'critical' },
  { text: 'Formato semplice: no tabelle, no colonne, no header/footer grafici', priority: 'critical' },
  { text: 'File .docx o PDF testo (no PDF scansionati/immagine)', priority: 'critical' },
  { text: 'Sezioni con titoli standard: "Esperienza", "Formazione", "Competenze"', priority: 'important' },
  { text: 'Date in formato chiaro: "Gennaio 2022 - Dicembre 2023"', priority: 'important' },
  { text: 'Font leggibile (Arial, Calibri, Times) - no font decorativi', priority: 'important' },
  { text: 'Elenchi puntati semplici, no simboli speciali strani', priority: 'nice' },
  { text: 'No acronimi senza spiegarli almeno una volta', priority: 'nice' },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ATSSection() {
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
              K.3
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Capire e Battere gli ATS
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Il 75% delle aziende usa software ATS (Applicant Tracking System) per scremare i CV.
              Se il vostro CV non è ottimizzato, un umano potrebbe non vederlo mai.
            </p>
          </div>
        </AnimatedSection>

        {/* What is ATS */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(249, 115, 22, 0.12)',
                  color: 'var(--accent-primary)',
                }}
              >
                <AlertIcon />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Cos&apos;è un ATS?
              </h3>
            </div>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Un <strong>Applicant Tracking System</strong> è un software che le aziende usano per gestire centinaia o migliaia di candidature.
              Scansiona automaticamente i CV, estrae le informazioni e assegna un punteggio di compatibilità con l&apos;offerta.
            </p>
            <p
              className="text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              Esempi famosi: Workday, Greenhouse, Lever, Taleo, BambooHR
            </p>
          </div>
        </AnimatedSection>

        {/* Flow Diagram */}
        <AnimatedSection delay={0.15}>
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Come funziona il processo
          </h3>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-3 mb-16 max-w-5xl mx-auto">
            {atsFlow.map((step, idx) => (
              <div key={step.number} className="flex items-start gap-3 flex-1 w-full lg:w-auto">
                <div className="glass-card p-5 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{
                        background: 'var(--accent-primary)',
                        color: '#fff',
                      }}
                    >
                      {step.number}
                    </div>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'rgba(249, 115, 22, 0.1)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <h4
                    className="text-sm font-bold mb-1.5"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {step.label}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {step.description}
                  </p>
                </div>
                {idx < atsFlow.length - 1 && (
                  <div
                    className="hidden lg:block mt-8 flex-shrink-0"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <ArrowRightIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Optimization Checklist */}
        <AnimatedSection delay={0.2}>
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Checklist di ottimizzazione
          </h3>

          <div className="glass-card p-8 max-w-4xl mx-auto mb-12">
            <div className="space-y-4">
              {optimizationChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 pb-4"
                  style={{
                    borderBottom: idx < optimizationChecklist.length - 1 ? '1px solid var(--border-subtle)' : undefined,
                  }}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span
                      style={{ color: 'var(--color-success)' }}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <CheckIcon />
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.text}
                    </span>
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{
                      background: item.priority === 'critical'
                        ? 'rgba(239, 68, 68, 0.1)'
                        : item.priority === 'important'
                        ? 'rgba(249, 115, 22, 0.1)'
                        : 'rgba(163, 163, 163, 0.1)',
                      color: item.priority === 'critical'
                        ? 'var(--color-error)'
                        : item.priority === 'important'
                        ? 'var(--accent-primary)'
                        : 'var(--text-muted)',
                    }}
                  >
                    {item.priority === 'critical' ? 'Critico' : item.priority === 'important' ? 'Importante' : 'Utile'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Demo Tools */}
        <AnimatedSection delay={0.25}>
          <h3
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Tool per testare il vostro CV
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <DemoCard
            title="Teal Resume Builder"
            description="Analizza gratuitamente il vostro CV rispetto a un annuncio specifico. Vi dice quali keyword mancano e come migliorare il match."
            link={{ url: 'https://www.tealhq.com', label: 'Prova Teal' }}
          />
          <DemoCard
            title="Jobscan"
            description="Confronta il vostro CV con job description reali e vi dà un punteggio ATS. 5 scansioni gratuite al mese."
            link={{ url: 'https://www.jobscan.co', label: 'Prova Jobscan' }}
          />
        </div>
      </div>
    </section>
  );
}
