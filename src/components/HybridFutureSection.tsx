'use client';

import { AnimatedSection } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ComparisonItem {
  text: string;
}

const aiExcels: ComparisonItem[] = [
  { text: 'Velocità pura su task ripetitivi' },
  { text: 'Memoria perfetta di dati e pattern' },
  { text: 'Analisi di grandi volumi di informazioni' },
  { text: 'Lavoro 24/7 senza pause' },
  { text: 'Coerenza: stesso output per stesso input' },
  { text: 'Seguire regole complesse alla perfezione' },
];

const humansExcel: ComparisonItem[] = [
  { text: 'Giudizio etico e contesto sociale' },
  { text: 'Creatività vera (non ricombinazione)' },
  { text: 'Empatia e intelligenza emotiva' },
  { text: 'Adattamento a situazioni mai viste' },
  { text: 'Intuizione e "gut feeling"' },
  { text: 'Negoziazione e persuasione complessa' },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <circle cx="9" cy="16" r="1" />
      <circle cx="15" cy="16" r="1" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HybridFutureSection() {
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
              K.5
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Il Futuro è Ibrido
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Non è una gara tra umani e macchine. Il vero vantaggio competitivo
              è saper <strong>lavorare insieme</strong>.
            </p>
          </div>
        </AnimatedSection>

        {/* AI vs Humans Comparison */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* AI Column */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(249, 115, 22, 0.12)',
                    color: 'var(--accent-primary)',
                  }}
                >
                  <RobotIcon />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  L&apos;AI eccelle in...
                </h3>
              </div>
              <ul className="space-y-3">
                {aiExcels.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Humans Column */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(34, 197, 94, 0.12)',
                    color: 'var(--color-success)',
                  }}
                >
                  <UserIcon />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Gli umani eccellono in...
                </h3>
              </div>
              <ul className="space-y-3">
                {humansExcel.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Quote */}
        <AnimatedSection delay={0.15}>
          <div
            className="quote-block max-w-4xl mx-auto p-8 rounded-2xl mb-12"
            style={{
              background: 'rgba(34, 197, 94, 0.05)',
              borderLeft: '4px solid var(--color-success)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(34, 197, 94, 0.15)',
                  color: 'var(--color-success)',
                }}
              >
                <HeartIcon />
              </div>
              <p
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)', fontStyle: 'normal' }}
              >
                Umani <span style={{ color: 'var(--accent-primary)' }}>CON</span> macchine,<br />non <span style={{ color: 'var(--text-muted)' }}>contro</span> macchine.
              </p>
            </div>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              I lavori che spariranno sono quelli <strong>puramente meccanici</strong>.
              I lavori che cresceranno sono quelli che richiedono <strong>supervisione umana + automazione AI</strong>.
            </p>
          </div>
        </AnimatedSection>

        {/* Real-world examples */}
        <AnimatedSection delay={0.2}>
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Esempi concreti di lavoro ibrido
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <div className="glass-card p-6">
              <div
                className="text-sm font-bold uppercase tracking-wider mb-2"
                style={{ color: 'var(--accent-primary)' }}
              >
                Customer Service
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <strong>AI:</strong> Gestisce il 70% delle richieste semplici (tracking ordini, FAQ, password).
                <br />
                <strong>Umano:</strong> Interviene sui casi complessi, lamentele delicate, situazioni che richiedono empatia.
              </p>
            </div>

            <div className="glass-card p-6">
              <div
                className="text-sm font-bold uppercase tracking-wider mb-2"
                style={{ color: 'var(--accent-primary)' }}
              >
                Marketing
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <strong>AI:</strong> Genera 10 varianti di copy in 30 secondi, analizza performance dati.
                <br />
                <strong>Umano:</strong> Sceglie la strategia, valida il tono, decide cosa pubblicare, costruisce relazioni.
              </p>
            </div>

            <div className="glass-card p-6">
              <div
                className="text-sm font-bold uppercase tracking-wider mb-2"
                style={{ color: 'var(--accent-primary)' }}
              >
                Sviluppo Software
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <strong>AI:</strong> Scrive codice boilerplate, trova bug, suggerisce ottimizzazioni.
                <br />
                <strong>Umano:</strong> Progetta architettura, prende decisioni di design, risolve problemi complessi.
              </p>
            </div>

            <div className="glass-card p-6">
              <div
                className="text-sm font-bold uppercase tracking-wider mb-2"
                style={{ color: 'var(--accent-primary)' }}
              >
                Recruiting
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                <strong>AI:</strong> Screena CV, fa primo matching, schedula colloqui, invia email di follow-up.
                <br />
                <strong>Umano:</strong> Valuta soft skill, decide chi assumere, negozia offerte, costruisce team culture.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom message */}
        <AnimatedSection delay={0.25}>
          <div
            className="success-card max-w-3xl mx-auto mt-12 p-6 rounded-2xl"
          >
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)' }}
            >
              <strong style={{ color: 'var(--color-success)' }}>Il vostro vantaggio competitivo</strong>:
              non è saper usare l&apos;AI meglio di tutti, è saper <strong>decidere quando usarla</strong>,
              <strong> quando non usarla</strong>, e <strong>come validare</strong> quello che produce.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
