'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Scrittura e Comunicazione',
    skills: [
      'Prompt engineering per output professionali',
      'Revisione e fact-checking contenuti AI',
      'Creazione CV e cover letter ottimizzati',
      'Redazione email e documenti aziendali',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
      </svg>
    ),
  },
  {
    category: 'Audio e Multimedia',
    skills: [
      'Trascrizione e sintesi meeting',
      'Creazione contenuti vocali professionali',
      'Sottotitolazione automatica',
      'Voice mode per assistenza rapida',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
      </svg>
    ),
  },
  {
    category: 'Visual e Design',
    skills: [
      'Generazione asset visivi con prompt',
      'Ottimizzazione immagini profilo/branding',
      'Creazione mockup e presentazioni',
      'Conoscenza piattaforme multi-modello',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    category: 'Dati e Analisi',
    skills: [
      'Creazione formule complesse da linguaggio naturale',
      'Analisi dati con Code Interpreter',
      'Pulizia e trasformazione dataset',
      'Validazione e quality check dati AI',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    category: 'Automazione e Integrazione',
    skills: [
      'Setup workflow automatizzati',
      'Connessione servizi tramite API',
      'Configurazione agenti AI',
      'No-code development con vibe coding',
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
];

interface ComparisonExample {
  type: 'good' | 'bad';
  title: string;
  examples: string[];
}

const presentationExamples: ComparisonExample[] = [
  {
    type: 'good',
    title: 'Come presentarle bene',
    examples: [
      'Ho ottimizzato il processo di creazione report usando ChatGPT per l\'analisi dati, riducendo il tempo da 4 ore a 1 ora',
      'Ho implementato un workflow automatizzato con Zapier che ha eliminato 15 ore/mese di data entry manuale',
      'Ho creato asset visivi per 3 campagne marketing usando Leonardo AI, risparmiando 800€ in costi di design',
      'Ho sviluppato un sistema di trascrizione automatica meeting che ha migliorato la condivisione conoscenze in team',
    ],
  },
  {
    type: 'bad',
    title: 'Come NON presentarle',
    examples: [
      'So usare ChatGPT',
      'Conosco l\'AI',
      'Ho fatto un corso sull\'intelligenza artificiale',
      'Sono bravo con i computer e la tecnologia',
    ],
  },
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

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SkillsInventorySection() {
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
              K.1
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Cosa Sapete Fare Ora
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              L&apos;inventario delle vostre nuove competenze AI, pronte per CV e colloqui
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection delay={0.1}>
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Competenze tecniche acquisite
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16" staggerDelay={0.08}>
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.category}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(249, 115, 22, 0.12)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h4
                    className="font-bold text-sm"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {cat.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex-shrink-0">
                        <CheckIcon />
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Good vs Bad Examples */}
        <AnimatedSection delay={0.2}>
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Come presentare le competenze
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {presentationExamples.map((ex) => (
              <div
                key={ex.type}
                className={ex.type === 'good' ? 'success-card' : 'warning-card'}
              >
                <div className="flex items-center gap-2 mb-5">
                  {ex.type === 'good' ? <CheckIcon /> : <XIcon />}
                  <span
                    className="font-bold text-base"
                    style={{ color: ex.type === 'good' ? 'var(--color-success)' : 'var(--color-warning)' }}
                  >
                    {ex.title}
                  </span>
                </div>
                <ul className="space-y-3">
                  {ex.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0">
                        {ex.type === 'good' ? <CheckIcon /> : <XIcon />}
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Quantification Callout */}
        <AnimatedSection delay={0.25}>
          <div
            className="quote-block max-w-3xl mx-auto p-6 rounded-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span style={{ color: 'var(--accent-primary)' }}>
                <TargetIcon />
              </span>
              <span
                className="font-bold text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                La regola d&apos;oro
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              Ogni competenza AI dev&apos;essere legata a un <strong>risultato misurabile</strong>:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent-primary)' }}>•</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}>
                  Quanto tempo avete risparmiato?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent-primary)' }}>•</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}>
                  Quanti soldi avete fatto risparmiare all&apos;azienda?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--accent-primary)' }}>•</span>
                <span className="text-sm" style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}>
                  Quale processo avete migliorato e di quanto?
                </span>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
