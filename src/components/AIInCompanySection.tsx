'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface CompanyTool {
  name: string;
  company: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
  color: string;
}

const companyTools: CompanyTool[] = [
  {
    name: 'Microsoft Copilot',
    company: 'Microsoft 365',
    description: 'Integrato in Word, Excel, PowerPoint, Teams, Outlook',
    capabilities: [
      'Riassunto email e thread Teams',
      'Creazione presentazioni da prompt',
      'Analisi dati Excel avanzata',
      'Bozze documenti professionali',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    color: '#0078D4',
  },
  {
    name: 'Google Gemini',
    company: 'Google Workspace',
    description: 'Integrato in Gmail, Docs, Sheets, Slides, Meet',
    capabilities: [
      'Aiuto scrittura email e documenti',
      'Generazione immagini in Slides',
      'Analisi dati in Sheets',
      'Riassunti meeting automatici',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: '#4285F4',
  },
];

interface InterviewQA {
  question: string;
  badAnswer: string;
  goodAnswer: string;
}

const interviewExamples: InterviewQA[] = [
  {
    question: 'Come usi l\'AI nel tuo lavoro?',
    badAnswer: 'Uso ChatGPT per scrivere cose.',
    goodAnswer: 'Uso ChatGPT per creare bozze di report che poi personalizzo, riducendo il tempo di creazione del 60%. Ho anche automatizzato la generazione di riassunti settimanali da dati Excel, risparmiando 3 ore/settimana al team.',
  },
  {
    question: 'Sei preoccupato che l\'AI ti sostituisca?',
    badAnswer: 'No, credo che l\'AI non sia ancora abbastanza brava.',
    goodAnswer: 'No, perché l\'AI eccelle nei task ripetitivi ma richiede supervisione umana per contesto e giudizio. Io mi concentro su diventare bravo a usarla come strumento, così sono più produttivo dei colleghi che la ignorano.',
  },
  {
    question: 'Quali limiti ha l\'AI secondo te?',
    badAnswer: 'A volte sbaglia.',
    goodAnswer: 'L\'AI può allucinare informazioni, non ha giudizio etico proprio, e va malissimo su dati che non ha mai visto. Per questo verifico sempre gli output, specialmente su numeri, date e fatti. È ottima per accelerare, pessima per sostituire completamente il pensiero critico.',
  },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-error)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}

function MessageSquareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AIInCompanySection() {
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
              K.6
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              AI Sul Lavoro: Cosa Troverete in Azienda
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Le grandi aziende hanno già adottato AI integrate. Sapere cosa aspettarsi
              vi darà un vantaggio nei colloqui.
            </p>
          </div>
        </AnimatedSection>

        {/* Company Tools */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span style={{ color: 'var(--accent-primary)' }}>
              <BriefcaseIcon />
            </span>
            <h3
              className="text-xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Tool AI aziendali più comuni
            </h3>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" staggerDelay={0.1}>
          {companyTools.map((tool) => (
            <StaggerItem key={tool.name}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${tool.color}15`,
                      color: tool.color,
                    }}
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {tool.name}
                    </h4>
                    <p
                      className="text-xs"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {tool.company}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {tool.description}
                </p>
                <div className="space-y-2">
                  {tool.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex-shrink-0">
                        <CheckIcon />
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* How to talk about it */}
        <AnimatedSection delay={0.15}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span style={{ color: 'var(--accent-primary)' }}>
              <MessageSquareIcon />
            </span>
            <h3
              className="text-xl font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Come parlarne nei colloqui
            </h3>
          </div>

          <div
            className="quote-block max-w-4xl mx-auto mb-10 p-6 rounded-2xl"
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              Quando vi chiedono dell&apos;AI nei colloqui, stanno testando:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent-primary)' }}>1.</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}>
                  <strong>Sapete usarla davvero</strong> o avete solo sentito parlarne?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent-primary)' }}>2.</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}>
                  <strong>Capite i limiti</strong> o pensate che l&apos;AI sia magia?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent-primary)' }}>3.</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}>
                  <strong>Siete proattivi</strong> o vi dovranno spiegare tutto da zero?
                </span>
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Interview Q&A Examples */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-6 max-w-4xl mx-auto">
            {interviewExamples.map((qa, idx) => (
              <div key={idx} className="glass-card p-6">
                <h4
                  className="text-base font-bold mb-5 flex items-center gap-2"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: 'var(--accent-primary)',
                      color: '#fff',
                    }}
                  >
                    Q
                  </span>
                  {qa.question}
                </h4>

                {/* Bad Answer */}
                <div className="mb-4 pb-4" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <XIcon />
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: 'var(--color-error)' }}
                    >
                      Risposta debole
                    </span>
                  </div>
                  <p
                    className="text-sm italic pl-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    &quot;{qa.badAnswer}&quot;
                  </p>
                </div>

                {/* Good Answer */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckIcon />
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: 'var(--color-success)' }}
                    >
                      Risposta forte
                    </span>
                  </div>
                  <p
                    className="text-sm pl-6"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    &quot;{qa.goodAnswer}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Final tip */}
        <AnimatedSection delay={0.25}>
          <div
            className="success-card max-w-3xl mx-auto mt-12 p-6 rounded-2xl"
          >
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)' }}
            >
              <strong style={{ color: 'var(--color-success)' }}>Consiglio finale</strong>:
              Se l&apos;azienda usa Microsoft 365 o Google Workspace (lo vedrete dall&apos;email),
              menzionate che conoscete Copilot o Gemini. Anche se non li avete usati tantissimo,
              dimostra che <strong>siete consapevoli degli strumenti moderni</strong>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
