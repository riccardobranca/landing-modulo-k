'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ModuleCard {
  module: string;
  title: string;
  bullets: string[];
  icon: React.ReactNode;
}

const modules: ModuleCard[] = [
  {
    module: 'A',
    title: 'Cos\'è l\'AI',
    bullets: [
      'AI generativa vs tradizionale (crea vs classifica)',
      'LLM = predittore di parole (T9 avanzato)',
      'Pappagallo stocastico: ripete pattern, non capisce',
      'Allucinazioni: l\'AI inventa fatti con sicurezza',
      'Il momento ChatGPT: 100M utenti in 2 mesi',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    module: 'B',
    title: 'Modello → Prodotto',
    bullets: [
      'Architettura a 3 strati: Modello → Orchestrazione → Interfaccia',
      'GPT-5 (motore) vs ChatGPT (auto completa)',
      'Orchestrazione aggiunge: memoria, tool, web, sicurezza',
      'Cloud vs on-device (privacy vs potenza)',
      'Stesso modello, prodotti diversi',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    module: 'C',
    title: 'I Prodotti',
    bullets: [
      'ChatGPT: il più usato (900M/settimana)',
      'Claude: migliore per documenti e coding',
      'Gemini: integrazione Google Workspace nativa',
      'Copilot: gratis in Windows, $$$ in Office',
      'Piani: $0 limitato → $20 sbloccato → $200 illimitato',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    module: 'D',
    title: 'Prompt Engineering',
    bullets: [
      'Struttura: Contesto + Istruzione + Formato',
      'Specificità è fondamentale (no prompt vaghi)',
      'Ruolo, esempi, vincoli migliorano risposte',
      'Non esistono "prompt magici" - conta la chiarezza',
      'Iterazione: affinate chiedendo modifiche',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    module: 'E',
    title: 'Privacy e Responsabilità',
    bullets: [
      'Training vs Inference (addestrare vs elaborare)',
      'Impostazioni privacy per ogni servizio',
      'USO PERSONALE vs LAVORATIVO: distinzione cruciale',
      'Regola d\'oro: se il dato non è vostro, non caricatelo',
      'GDPR + AI Act: minimizzazione, trasparenza, consenso',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    module: 'F',
    title: 'Scrittura',
    bullets: [
      'Workflow: Idea → Scaletta → Bozza AI → Revisione → Finale',
      'Verifica sempre: l\'AI può allucinare',
      'Un CV per ogni lavoro (personalizza con keyword)',
      '6 prompt fondamentali: brainstorming, bozza, editing, riassunto',
      'Perplexity (ricerca) + NotebookLM (analisi documenti)',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    module: 'G',
    title: 'Voce e Audio',
    bullets: [
      'Trascrizioni automatiche meeting/video (minuti, non ore)',
      'Voice mode: conversazioni naturali senza scrivere',
      'Text-to-speech: voci naturali per contenuti accessibili',
      'Accessibilità: sottotitoli, screen reader, sintesi vocale',
      'Privacy audio: no conversazioni riservate su cloud',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    module: 'H',
    title: 'Visual (Immagini e Video)',
    bullets: [
      'I 3 livelli: Modello (FLUX, Kling) → Interfaccia (Leonardo) → Aggregatori (Krea)',
      'Stesso modello su piattaforme diverse = risultati diversi',
      'Prompt efficaci: soggetto + azione + ambiente + luce + stile + formato',
      'Foto profilo: migliorate reali (remove.bg), non fake AI',
      'Tool gratuiti: Microsoft Designer, Leonardo.ai (150 crediti/giorno), Pika',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    module: 'I',
    title: 'Excel e Dati',
    bullets: [
      'Paradigma nuovo: descrivete cosa volete, AI scrive la formula',
      'Gemini in Sheets, Copilot in Excel - AI già integrata',
      'Garbage in → garbage out: dati sporchi = analisi sbagliata',
      'Flash Fill (Ctrl+E): mostrate esempio, Excel replica il pattern',
      'Code Interpreter: carica Excel, l\'AI analizza, pulisce, crea grafici',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    module: 'J',
    title: 'Automazioni e Agenti',
    bullets: [
      'API = camerieri tra servizi (portano ordini, non cucinano)',
      'Connettori: AI accede quando chiedete. Automazioni: lavorano da sole',
      'Trigger → Azione (quando X, fai Y). Es: email → salva in Drive',
      'ROI: automatizzare solo se tempo risparmiato > tempo setup',
      'Agenti vs Chatbot: agente pianifica e agisce, chatbot solo risponde',
      'Vibe coding: descrivete app, AI la crea (Lovable, v0, Artifacts)',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RecapSection() {
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
              K.0
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Riassunto dei Moduli
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Ripasso veloce dei concetti chiave prima di chiudere il corso
            </p>
          </div>
        </AnimatedSection>

        {/* Module cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {modules.map((mod) => (
            <StaggerItem key={mod.module}>
              <div className="glass-card p-6 h-full flex flex-col">
                {/* Header with icon and module name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(249, 115, 22, 0.12)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {mod.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Modulo {mod.module}
                    </div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {mod.title}
                    </h3>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 flex-1">
                  {mod.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 flex-shrink-0"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Concetti Trasversali */}
        <AnimatedSection delay={0.25}>
          <div className="mt-16 mb-12">
            <h3
              className="text-xl font-semibold mb-8 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              I 4 principi trasversali (tutti i moduli)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="glass-card p-6">
                <h4
                  className="font-bold text-base mb-3 flex items-center gap-2"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <span>1.</span>
                  <span>Verificate sempre</span>
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Scrittura: mai pubblicare senza rileggere</li>
                  <li>• Ricerca: controllate i fatti, l&apos;AI può inventare</li>
                  <li>• Immagini: usate foto vere migliorate, non fake</li>
                  <li>• Dati: testate formule su casi semplici prima</li>
                  <li>• Automazioni: test prima di attivare su dati reali</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h4
                  className="font-bold text-base mb-3 flex items-center gap-2"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <span>2.</span>
                  <span>Partite dal semplice</span>
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Tool gratuiti prima dei costosi</li>
                  <li>• Funzionalità base prima delle avanzate</li>
                  <li>• Casi d&apos;uso a basso rischio prima di quelli critici</li>
                  <li>• Analisi prima di decisioni importanti</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h4
                  className="font-bold text-base mb-3 flex items-center gap-2"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <span>3.</span>
                  <span>Privacy sempre</span>
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li>• No dati sensibili su AI cloud pubblici</li>
                  <li>• Anonimizzate prima di analizzare</li>
                  <li>• Capite cosa i connettori possono vedere</li>
                  <li>• Per aziende: piani enterprise con garanzie</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h4
                  className="font-bold text-base mb-3 flex items-center gap-2"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <span>4.</span>
                  <span>L&apos;AI assiste, voi decidete</span>
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li>• L&apos;AI è uno strumento, non un sostituto</li>
                  <li>• Voi conoscete il contesto, l&apos;AI no</li>
                  <li>• Le decisioni importanti restano vostre</li>
                  <li>• Se qualcosa va storto, rispondete voi</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom callout */}
        <AnimatedSection delay={0.3}>
          <div
            className="quote-block max-w-3xl mx-auto mt-12 p-6 rounded-2xl"
          >
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              Questi 10 moduli vi hanno dato le competenze per lavorare con l&apos;AI — dai fondamenti alle applicazioni pratiche.
              <br />
              Ora è il momento di capire <strong style={{ color: 'var(--accent-primary)' }}>come presentare queste competenze</strong> sul mercato del lavoro.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
