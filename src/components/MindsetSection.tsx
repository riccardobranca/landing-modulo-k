'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface FlowStep {
  label: string;
  subtitle: string;
  icon: React.ReactNode;
}

const flowSteps: FlowStep[] = [
  {
    label: 'Trigger',
    subtitle: 'Quando succede qualcosa',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: 'Condizione',
    subtitle: 'Se vale questa regola',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v6" />
        <path d="M6 15l6-6 6 6" />
        <path d="M3 21h18" />
        <circle cx="6" cy="21" r="0" />
        <path d="M6 15v6" />
        <path d="M18 15v6" />
      </svg>
    ),
  },
  {
    label: 'Azione',
    subtitle: 'Fai questa cosa',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
];

interface FlowExample {
  trigger: string;
  condition: string;
  action: string;
}

const flowExamples: FlowExample[] = [
  {
    trigger: 'Email con allegato',
    condition: 'Da un cliente?',
    action: 'Salva in cartella Clienti',
  },
  {
    trigger: 'Nuovo ordine e-commerce',
    condition: 'Importo > 100\u20AC?',
    action: 'Invia email di ringraziamento VIP',
  },
  {
    trigger: 'Messaggio su Slack',
    condition: 'Contiene "urgente"?',
    action: 'Notifica push + sposta in coda prioritaria',
  },
];

interface DoItem {
  text: string;
}

const automateYes: DoItem[] = [
  { text: 'Ripetitivo e prevedibile' },
  { text: 'Basato su regole chiare' },
  { text: 'Non richiede giudizio complesso' },
  { text: 'Vi fa perdere tempo ogni settimana' },
  { text: 'Soggetto a errori umani frequenti' },
];

const automateNo: DoItem[] = [
  { text: 'Succede raramente (1-2 volte/anno)' },
  { text: 'Richiede decisioni caso per caso' },
  { text: 'Il setup costerebbe piu del risparmio' },
  { text: 'La situazione cambia continuamente' },
  { text: 'Coinvolge relazioni delicate (es. licenziamenti)' },
];

interface StatCard {
  value: string;
  label: string;
  source: string;
}

const stats: StatCard[] = [
  { value: '60-95%', label: 'risparmio tempo su task ripetitivi', source: 'McKinsey' },
  { value: '46.000$', label: 'risparmio medio annuo per azienda', source: 'Gartner' },
  { value: '3x', label: 'piu veloce il completamento dei task', source: 'Forrester' },
  { value: '78%', label: 'dei manager vuole piu automazione', source: 'Deloitte' },
];

const practicalRule = [
  'Piu di 30 minuti a settimana sullo stesso task',
  'Lo fate piu di 10 volte al mese',
  'Gli errori manuali sono probabili o costosi',
];

interface CaseStudy {
  sector: string;
  stat: string;
  description: string;
  icon: React.ReactNode;
}

const caseStudies: CaseStudy[] = [
  {
    sector: 'Amministrazione',
    stat: '35-75h/mese',
    description: 'Risparmiate su fatturazione, riconciliazione bancaria e gestione documenti',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    sector: 'HR & Recruiting',
    stat: '-30%',
    description: 'Riduzione costi di assunzione con screening automatico CV e scheduling colloqui',
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
    sector: 'Marketing',
    stat: '15-20h/sett',
    description: 'Risparmiate su social scheduling, email marketing e report analytics',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    sector: 'Vendite',
    stat: '5-10h/sett',
    description: 'Risparmiate su follow-up, aggiornamento CRM e qualificazione lead',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8l-8 8" />
        <path d="M8.5 8H8v.5" />
        <path d="M16 15.5v.5h-.5" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    sector: 'Customer Service',
    stat: '80%',
    description: 'Delle richieste di primo livello gestite automaticamente con chatbot AI',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
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

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function RuleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MindsetSection() {
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
              J.1
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Il Mindset dell&apos;Automazione
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Prima degli strumenti, serve il modo di pensare giusto.
              Ogni automazione segue uno schema semplice.
            </p>
          </div>
        </AnimatedSection>

        {/* ---- 1. Trigger → Condizione → Azione Flow ---- */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16">
            <h3
              className="text-xl font-semibold mb-8 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Lo schema di ogni automazione
            </h3>

            {/* Flow diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-10">
              {flowSteps.map((step, idx) => (
                <div key={step.label} className="flex items-center gap-2 md:gap-4">
                  <div
                    className="glass-card flex flex-col items-center text-center px-6 py-5 min-w-[180px]"
                    style={{ borderColor: 'var(--accent-primary)', borderWidth: '1px' }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{
                        background: 'rgba(249, 115, 22, 0.12)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="text-sm font-bold uppercase tracking-wide mb-1"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {step.label}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {step.subtitle}
                    </span>
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <div
                      className="hidden md:block"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      <ArrowRightIcon />
                    </div>
                  )}
                  {idx < flowSteps.length - 1 && (
                    <div
                      className="block md:hidden rotate-90"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      <ArrowRightIcon />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Practical examples */}
            <div className="flex flex-col gap-3 max-w-3xl mx-auto">
              {flowExamples.map((ex) => (
                <div
                  key={ex.trigger}
                  className="glass-card flex flex-wrap items-center gap-2 px-4 py-3 text-sm"
                >
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(249, 115, 22, 0.1)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {ex.trigger}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>
                    <ArrowRightIcon />
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(249, 115, 22, 0.06)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {ex.condition}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>
                    <ArrowRightIcon />
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      color: 'var(--color-success)',
                    }}
                  >
                    {ex.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 2. Do / Don't ---- */}
        <AnimatedSection delay={0.15}>
          <div className="mb-16">
            <h3
              className="text-xl font-semibold mb-8 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Quando automatizzare (e quando no)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Yes column */}
              <div className="success-card p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <CheckIcon />
                  <span
                    className="font-bold text-base"
                    style={{ color: 'var(--color-success)' }}
                  >
                    Automatizzate se...
                  </span>
                </div>
                <ul className="space-y-3">
                  {automateYes.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0">
                        <CheckIcon />
                      </span>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* No column */}
              <div className="warning-card p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <XIcon />
                  <span
                    className="font-bold text-base"
                    style={{ color: 'var(--color-warning)' }}
                  >
                    Non automatizzate se...
                  </span>
                </div>
                <ul className="space-y-3">
                  {automateNo.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0">
                        <XIcon />
                      </span>
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 3. ROI Stats ---- */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span style={{ color: 'var(--accent-primary)' }}>
                <ChartIcon />
              </span>
              <h3
                className="text-xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Il ROI dell&apos;automazione
              </h3>
            </div>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="glass-card p-5 text-center h-full">
                    <div
                      className="text-2xl sm:text-3xl font-black mb-2"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-sm mb-2 leading-snug"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-xs font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {stat.source}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Practical rule callout */}
            <div
              className="quote-block max-w-3xl mx-auto p-6 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: 'var(--accent-primary)' }}>
                  <BulbIcon />
                </span>
                <span
                  className="font-bold text-base"
                  style={{ color: 'var(--text-primary)' }}
                >
                  La regola pratica
                </span>
              </div>
              <p
                className="text-sm mb-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                Vale la pena automatizzare quando si verifica almeno una di queste condizioni:
              </p>
              <ul className="space-y-2">
                {practicalRule.map((rule) => (
                  <li key={rule} className="flex items-center gap-3">
                    <span style={{ color: 'var(--accent-primary)' }}>
                      <RuleIcon />
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 4. Case Studies by Sector ---- */}
        <AnimatedSection delay={0.25}>
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Impatto per settore
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.sector}>
              <div className="glass-card p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(249, 115, 22, 0.1)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {cs.icon}
                  </div>
                  <span
                    className="font-semibold text-sm"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {cs.sector}
                  </span>
                </div>
                <div
                  className="text-2xl font-black mb-2"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {cs.stat}
                </div>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {cs.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
