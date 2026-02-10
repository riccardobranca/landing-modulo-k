'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ProtoAgent {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const protoAgents: ProtoAgent[] = [
  {
    name: 'Netflix',
    description: 'Suggerisce film basandosi su cosa guardate, senza che lo chiediate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M7 2v20" />
        <path d="M17 2v20" />
        <path d="M2 12h20" />
        <path d="M2 7h5" />
        <path d="M2 17h5" />
        <path d="M17 7h5" />
        <path d="M17 17h5" />
      </svg>
    ),
  },
  {
    name: 'Google Maps',
    description: 'Vi avvisa del traffico e suggerisce percorsi alternativi, senza che lo chiediate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    description: 'Crea la vostra Discover Weekly personalizzata ogni lunedi',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" />
        <path d="M7 12s2-3 5-3 5 3 5 3" />
        <path d="M6 9s2.5-4 6-4 6 4 6 4" />
      </svg>
    ),
  },
  {
    name: 'Gmail',
    description: 'Autocompleta le vostre email: "Grazie, ci vediamo lunedi!"',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
];

interface ChatbotVsAgentRow {
  label: string;
  chatbot: string;
  agente: string;
}

const comparisonRows: ChatbotVsAgentRow[] = [
  { label: 'Obiettivo', chatbot: 'Risponde a domande', agente: 'Completa obiettivi' },
  { label: 'Interazione', chatbot: 'Una risposta per input', agente: 'Multipli passi autonomi' },
  { label: 'Strumenti', chatbot: 'Non usa strumenti esterni', agente: 'Usa browser, file, API' },
  { label: 'Controllo', chatbot: 'Voi guidate ogni passo', agente: 'Lui decide i passi' },
];

interface AgentStep {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const agentCycle: AgentStep[] = [
  {
    name: 'Obiettivo',
    description: 'Riceve il compito da completare',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    name: 'Piano',
    description: 'Scompone l\'obiettivo in passi',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
  {
    name: 'Azione',
    description: 'Esegue il passo corrente',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Osservazione',
    description: 'Analizza il risultato ottenuto',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    name: 'Riflessione',
    description: 'Valuta se serve cambiare approccio',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.5" />
      </svg>
    ),
  },
  {
    name: 'Iterazione',
    description: 'Ripete fino al completamento',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
];

interface AgentProduct {
  name: string;
  capability: string;
  example: string;
  icon: React.ReactNode;
}

const agentProducts: AgentProduct[] = [
  {
    name: 'ChatGPT',
    capability: 'Browsing + Code Interpreter + DALL-E + Connettori',
    example: '"Cerca online i prezzi medi delle case a Milano, crea un grafico e salvalo come immagine"',
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
    name: 'Claude Projects',
    capability: 'Analisi documenti + ragionamento complesso + code',
    example: '"Analizza tutti i contratti caricati e trova clausole problematiche in ciascuno"',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    ),
  },
  {
    name: 'Copilot M365',
    capability: 'Agisce dentro Word, Excel, PowerPoint, Outlook, Teams',
    example: '"Prendi i dati dal foglio Excel, crea una presentazione PowerPoint e inviala via email al team"',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h2v4H7z" />
        <path d="M11 9h2v3h-2z" />
        <path d="M15 7h2v5h-2z" />
      </svg>
    ),
  },
  {
    name: 'Gemini Deep Research',
    capability: 'Ricerca multi-step su internet con sintesi finale',
    example: '"Fai una ricerca approfondita sulle opportunita di lavoro nel settore AI in Italia nel 2025"',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L3 8v8l9 5 9-5V8l-9-5z" />
        <path d="M12 8v8" />
        <path d="M8 10l4 2 4-2" />
      </svg>
    ),
  },
];

interface AgentLimit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const agentLimits: AgentLimit[] = [
  {
    title: 'Giudizio umano complesso',
    description: 'Decisioni che richiedono etica, empatia o contesto culturale restano nostre.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Operazioni irreversibili',
    description: 'Inviare email, cancellare file, fare acquisti: azioni che non si possono annullare.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Contesto mancante',
    description: 'L\'agente non sa quello che voi non gli dite. Puo prendere decisioni sbagliate per mancanza di informazioni.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.5" />
      </svg>
    ),
  },
  {
    title: 'Non 100% affidabili',
    description: 'Possono sbagliare, inventare dati (allucinazioni), o interpretare male le istruzioni.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Costi che si accumulano',
    description: 'Ogni passo dell\'agente consuma token/crediti. Task complessi possono costare molto piu di una singola domanda.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AgentsSection() {
  return (
    <div className="space-y-16">

      {/* 1. Proto-Agents You Already Know */}
      <AnimatedSection>
        <p className="body-large mb-6" style={{ color: 'var(--text-secondary)' }}>
          Prima di parlare di &ldquo;agenti AI&rdquo;, pensate a quelli che gia usate ogni giorno.
          Questi sono <strong style={{ color: 'var(--text-primary)' }}>proto-agenti</strong>: osservano, capiscono, agiscono di propria iniziativa.
        </p>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {protoAgents.map((agent) => (
            <StaggerItem key={agent.name}>
              <div className="glass-card p-5 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                  >
                    {agent.icon}
                  </span>
                  <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {agent.name}
                  </h4>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {agent.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* 2. Chatbot vs Agent Comparison */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Chatbot vs Agente: qual e la differenza?
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
            <div style={{ color: 'var(--text-muted)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5 -mt-0.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
              </svg>
              Chatbot
            </div>
            <div style={{ color: 'var(--accent-primary)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5 -mt-0.5">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              Agente
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
              <div style={{ color: 'var(--text-secondary)' }}>{row.chatbot}</div>
              <div className="font-medium" style={{ color: 'var(--accent-primary)' }}>{row.agente}</div>
            </div>
          ))}

          {/* Concrete examples */}
          <div
            className="px-6 py-5"
            style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-subtle)' }}
          >
            <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Esempio concreto:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-4"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <p className="text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>CHATBOT</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;Qual e il meteo a Roma?&rdquo;
                </p>
                <p className="text-sm mt-2 flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                  Risponde con la temperatura
                </p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{
                  background: 'rgba(249, 115, 22, 0.04)',
                  border: '1px solid rgba(249, 115, 22, 0.2)',
                }}
              >
                <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent-primary)' }}>AGENTE</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;Organizza il mio viaggio a Roma&rdquo;
                </p>
                <p className="text-sm mt-2 flex items-center gap-1.5" style={{ color: 'var(--accent-primary)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                  Cerca voli, confronta prezzi, verifica hotel, crea itinerario
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Agent Cycle */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Il ciclo di un agente
        </h3>
        <div className="glass-card p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {agentCycle.map((step, i) => (
              <div key={step.name} className="flex flex-col items-center text-center relative">
                {/* Step circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                  style={{
                    background: 'rgba(249, 115, 22, 0.1)',
                    color: 'var(--accent-primary)',
                    border: '2px solid rgba(249, 115, 22, 0.2)',
                  }}
                >
                  {step.icon}
                </div>

                {/* Step number */}
                <span
                  className="text-xs font-mono mb-1"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {i + 1}
                </span>

                {/* Step name */}
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {step.name}
                </p>

                {/* Description */}
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {step.description}
                </p>

                {/* Arrow between steps (hidden on last) */}
                {i < agentCycle.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 -right-2.5"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop indicator */}
          <div className="mt-6 pt-4 flex items-center justify-center gap-2" style={{ borderTop: '1px solid var(--border-subtle)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Il ciclo si ripete finche l&apos;obiettivo non e raggiunto (o il budget si esaurisce)
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Agents in Existing Products */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Agenti nei prodotti che gia conoscete
        </h3>
        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
          {agentProducts.map((product) => (
            <StaggerItem key={product.name}>
              <div className="glass-card p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                  >
                    {product.icon}
                  </span>
                  <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                    {product.name}
                  </h4>
                </div>
                <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {product.capability}
                </p>
                <div
                  className="rounded-lg p-3 text-sm mt-auto"
                  style={{
                    background: 'var(--bg-elevated)',
                    borderLeft: '3px solid var(--accent-primary)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {product.example}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* 5. Limits */}
      <AnimatedSection>
        <h3 className="heading-subsection mb-6" style={{ color: 'var(--text-primary)' }}>
          Limiti degli agenti: dove serve ancora il vostro giudizio
        </h3>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {agentLimits.map((limit) => (
            <StaggerItem key={limit.title}>
              <div className="warning-card h-full">
                <div className="flex items-start gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(249, 115, 22, 0.15)', color: 'var(--color-warning)' }}
                  >
                    {limit.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                      {limit.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {limit.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Golden Rule */}
        <div className="error-card mt-8">
          <div className="flex items-start gap-4">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(239, 68, 68, 0.15)', color: 'var(--color-error)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <circle cx="12" cy="16" r="0.5" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                La regola d&apos;oro: partite dal basso rischio
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Partite con task a basso rischio. Se un agente sbaglia a monitorare prezzi di voli, pazienza.
                Se sbaglia a inviare email ai clienti, e un problema serio.
              </p>
              <div
                className="rounded-lg p-3 mt-3 text-sm"
                style={{
                  background: 'rgba(239, 68, 68, 0.06)',
                  borderLeft: '3px solid var(--color-error)',
                  color: 'var(--text-secondary)',
                }}
              >
                <strong style={{ color: 'var(--text-primary)' }}>In pratica:</strong> delegate prima la ricerca e il monitoraggio,
                poi l&apos;analisi e i riassunti, e solo alla fine (con supervisione) le azioni che hanno conseguenze reali.
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
