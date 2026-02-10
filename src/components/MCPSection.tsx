'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface MCPCapability {
  text: string;
  icon: React.ReactNode;
}

const mcpCapabilities: MCPCapability[] = [
  {
    text: 'Claude puo leggere e organizzare file sul vostro computer',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    text: 'Claude accede ai vostri documenti su Drive',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    text: 'Claude legge e scrive messaggi Slack',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    text: 'Claude lavora con le vostre pagine Notion',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
        <path d="M8 15h4" />
      </svg>
    ),
  },
];

interface MCPFact {
  year: string;
  text: string;
}

const mcpFacts: MCPFact[] = [
  { year: '2024', text: 'Creato da Anthropic come standard aperto' },
  { year: '2025', text: 'Adottato da Linux Foundation' },
  { year: '2025', text: 'Adottato da OpenAI, Google e Microsoft' },
];

/* AI names for the N×M diagram */
const aiNames = ['ChatGPT', 'Claude', 'Gemini'];
const serviceNames = ['Gmail', 'Drive', 'Slack'];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function InfoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6" />
      <path d="M6 8h12" />
      <path d="M8 8v4a4 4 0 008 0V8" />
      <path d="M12 16v6" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  N×M Diagram sub-component                                         */
/* ------------------------------------------------------------------ */

function ConnectionDiagram() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* LEFT — Before MCP */}
      <div className="flex flex-col items-center">
        <div
          className="text-sm font-bold uppercase tracking-wider mb-6 px-3 py-1 rounded-full"
          style={{
            color: 'var(--color-error)',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
          }}
        >
          Prima di MCP
        </div>

        <div className="relative w-full max-w-[320px]" style={{ minHeight: 220 }}>
          {/* SVG lines — messy tangle */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 220"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* 9 lines: each AI to each service */}
            {[0, 1, 2].map((ai) =>
              [0, 1, 2].map((svc) => (
                <line
                  key={`${ai}-${svc}`}
                  x1={60}
                  y1={40 + ai * 70}
                  x2={260}
                  y2={40 + svc * 70}
                  stroke="var(--accent-primary)"
                  strokeWidth="1.5"
                  strokeOpacity={0.35}
                  strokeDasharray={ai === svc ? '0' : '4 3'}
                />
              ))
            )}
          </svg>

          {/* AI labels */}
          {aiNames.map((name, i) => (
            <div
              key={name}
              className="absolute left-0 flex items-center justify-center text-xs font-semibold rounded-lg px-2 py-1.5"
              style={{
                top: 28 + i * 70,
                width: 80,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                zIndex: 2,
              }}
            >
              {name}
            </div>
          ))}

          {/* Service labels */}
          {serviceNames.map((name, i) => (
            <div
              key={name}
              className="absolute right-0 flex items-center justify-center text-xs font-semibold rounded-lg px-2 py-1.5"
              style={{
                top: 28 + i * 70,
                width: 80,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                zIndex: 2,
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <p
          className="text-sm mt-4 text-center font-medium"
          style={{ color: 'var(--color-error)' }}
        >
          9 connessioni diverse (N x M)
        </p>
      </div>

      {/* RIGHT — With MCP */}
      <div className="flex flex-col items-center">
        <div
          className="text-sm font-bold uppercase tracking-wider mb-6 px-3 py-1 rounded-full"
          style={{
            color: 'var(--color-success)',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
          }}
        >
          Con MCP
        </div>

        <div className="relative w-full max-w-[320px]" style={{ minHeight: 220 }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 220"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* 3 lines AI → hub */}
            {[0, 1, 2].map((ai) => (
              <line
                key={`ai-${ai}`}
                x1={80}
                y1={40 + ai * 70}
                x2={148}
                y2={110}
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeOpacity={0.7}
              />
            ))}
            {/* 3 lines hub → service */}
            {[0, 1, 2].map((svc) => (
              <line
                key={`svc-${svc}`}
                x1={172}
                y1={110}
                x2={240}
                y2={40 + svc * 70}
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeOpacity={0.7}
              />
            ))}
          </svg>

          {/* AI labels */}
          {aiNames.map((name, i) => (
            <div
              key={name}
              className="absolute left-0 flex items-center justify-center text-xs font-semibold rounded-lg px-2 py-1.5"
              style={{
                top: 28 + i * 70,
                width: 80,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                zIndex: 2,
              }}
            >
              {name}
            </div>
          ))}

          {/* MCP hub */}
          <div
            className="absolute flex items-center justify-center text-xs font-black rounded-full"
            style={{
              top: 90,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 44,
              height: 44,
              background: 'var(--accent-primary)',
              color: '#fff',
              zIndex: 3,
              boxShadow: '0 0 24px rgba(249, 115, 22, 0.35)',
            }}
          >
            MCP
          </div>

          {/* Service labels */}
          {serviceNames.map((name, i) => (
            <div
              key={name}
              className="absolute right-0 flex items-center justify-center text-xs font-semibold rounded-lg px-2 py-1.5"
              style={{
                top: 28 + i * 70,
                width: 80,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                zIndex: 2,
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <p
          className="text-sm mt-4 text-center font-medium"
          style={{ color: 'var(--color-success)' }}
        >
          6 connessioni pulite (N + M)
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MCPSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                color: 'var(--accent-primary)',
                background: 'rgba(249, 115, 22, 0.1)',
                border: '1px solid rgba(249, 115, 22, 0.2)',
              }}
            >
              J.6
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              GPT Actions &amp; MCP
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Come l&apos;AI si connette al mondo esterno: API personalizzate e lo standard MCP.
            </p>
          </div>
        </AnimatedSection>

        {/* ---- 1. Advanced Section Banner ---- */}
        <AnimatedSection delay={0.1}>
          <div
            className="mb-14 max-w-3xl mx-auto flex items-start gap-4 px-5 py-4 rounded-2xl"
            style={{
              background: 'rgba(99, 133, 182, 0.08)',
              border: '1px solid rgba(99, 133, 182, 0.2)',
            }}
          >
            <span
              className="flex-shrink-0 mt-0.5"
              style={{ color: 'rgba(130, 160, 210, 0.85)' }}
            >
              <InfoIcon />
            </span>
            <div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                Sezione avanzata
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Questa sezione e piu tecnica. L&apos;obiettivo e sapere che queste cose esistono, non capirne ogni dettaglio.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 2. GPT Actions ---- */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card p-8 mb-14 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(249, 115, 22, 0.1)',
                  color: 'var(--accent-primary)',
                }}
              >
                <BoltIcon />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                GPT Actions
              </h3>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              GPT personalizzati che possono chiamare API esterne. Ad esempio: un GPT meteo che interroga un servizio meteorologico reale e vi restituisce le previsioni aggiornate, oppure un GPT che controlla lo stato di un ordine su un e-commerce.
            </p>
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm"
              style={{
                background: 'rgba(99, 133, 182, 0.06)',
                border: '1px solid rgba(99, 133, 182, 0.12)',
                color: 'var(--text-muted)',
              }}
            >
              <span className="flex-shrink-0 mt-0.5">
                <ShieldIcon />
              </span>
              <span>
                Richiede competenze tecniche. Non per principianti, ma utile sapere che esiste.
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 3. MCP — The Star ---- */}
        <AnimatedSection delay={0.2}>
          <div className="mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span style={{ color: 'var(--accent-primary)' }}>
                <PlugIcon />
              </span>
              <h3
                className="text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                MCP: lo &ldquo;USB-C&rdquo; dell&apos;AI
              </h3>
            </div>
            <p
              className="text-sm text-center max-w-2xl mx-auto mb-10"
              style={{ color: 'var(--text-secondary)' }}
            >
              Model Context Protocol: uno standard unico per collegare qualsiasi AI a qualsiasi strumento.
            </p>

            {/* Visual N×M vs N+M */}
            <div className="glass-card p-8 mb-8">
              <ConnectionDiagram />
            </div>

            {/* USB-C analogy */}
            <div className="quote-block max-w-3xl mx-auto p-6 rounded-2xl mb-8">
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Come USB-C ha sostituito decine di cavi diversi con uno standard universale, MCP standardizza le connessioni tra AI e strumenti. Un protocollo, infinite possibilita.
              </p>
            </div>

            {/* Key facts timeline */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {mcpFacts.map((fact, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-black px-2.5 py-1 rounded-full"
                      style={{
                        background: 'var(--accent-primary)',
                        color: '#fff',
                      }}
                    >
                      {fact.year}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {fact.text}
                    </span>
                  </div>
                  {idx < mcpFacts.length - 1 && (
                    <span
                      className="hidden sm:block"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ---- 4. What MCP means for you ---- */}
        <AnimatedSection delay={0.25}>
          <div className="mb-4">
            <h3
              className="text-xl font-semibold mb-8 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Cosa significa per voi, in pratica
            </h3>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8" staggerDelay={0.08}>
              {mcpCapabilities.map((cap) => (
                <StaggerItem key={cap.text}>
                  <div className="glass-card p-5 flex items-start gap-4 h-full">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(249, 115, 22, 0.1)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {cap.icon}
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {cap.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div
              className="text-center text-sm px-5 py-4 rounded-2xl max-w-2xl mx-auto"
              style={{
                background: 'rgba(99, 133, 182, 0.06)',
                border: '1px solid rgba(99, 133, 182, 0.12)',
                color: 'var(--text-muted)',
              }}
            >
              Non dovete installarne nessuno ora. E sufficiente sapere che questa possibilita esiste.
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
