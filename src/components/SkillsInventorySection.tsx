'use client';

import { AnimatedSection } from '@/components/AnimatedSection';

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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-warning)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable                                                           */
/* ------------------------------------------------------------------ */

function Skill({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{children}</span>
    </li>
  );
}

function AreaCard({
  icon,
  number,
  title,
  skills,
  cv,
  interview,
}: {
  icon: React.ReactNode;
  number: number;
  title: string;
  skills: string[];
  cv: string;
  interview: string;
}) {
  return (
    <div className="glass-card p-6 sm:p-7">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(249, 115, 22, 0.12)', color: 'var(--accent-primary)' }}
        >
          {icon}
        </div>
        <h4 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
          {number}. {title}
        </h4>
      </div>

      {/* Key skills */}
      <ul className="space-y-1.5 mb-4">
        {skills.map((s) => (
          <Skill key={s}>{s}</Skill>
        ))}
      </ul>

      {/* CV + Colloquio boxes side by side on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div
          className="p-3.5 rounded-xl"
          style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.12)' }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--accent-primary)' }}>
            Sul CV
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {cv}
          </p>
        </div>
        <div
          className="p-3.5 rounded-xl"
          style={{ background: 'rgba(34, 197, 94, 0.04)', border: '1px solid rgba(34, 197, 94, 0.12)' }}
        >
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'var(--color-success)' }}>
            Al colloquio
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {interview}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons for areas                                                    */
/* ------------------------------------------------------------------ */

const WritingIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
  </svg>
);

const AudioIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2" />
  </svg>
);

const VisualIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const DataIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const AutomationIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SkillsInventorySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
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
              Competenze concrete, pronte per CV e colloqui.
              Saperle fare non basta &mdash; bisogna saperle <strong style={{ color: 'var(--text-primary)' }}>comunicare</strong>.
            </p>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  5 AREE                                                      */}
        {/* ============================================================ */}

        <div className="space-y-5 mb-12">
          <AnimatedSection delay={0.05}>
            <AreaCard
              icon={WritingIcon}
              number={1}
              title="Scrittura e Comunicazione con AI"
              skills={[
                'Prompt strutturati per email, report, presentazioni, CV',
                'Revisione critica e fact-checking output AI',
                'Riscrittura, traduzione, cambio tono, sintesi',
                'Workflow: Idea → Scaletta AI → Bozza → Revisione umana → Finale',
              ]}
              cv="Utilizzo strumenti di AI generativa (ChatGPT, Claude) per redazione documenti, email e report. Competenza in prompt engineering e revisione critica dei contenuti."
              interview="Uso ChatGPT ogni giorno per velocizzare la scrittura. Do istruzioni precise — tono, pubblico, lunghezza — e rivedo sempre il risultato. Ho ridotto i tempi di stesura report del 60%."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <AreaCard
              icon={AudioIcon}
              number={2}
              title="Audio e Contenuti Vocali"
              skills={[
                'Trascrizione automatica meeting con action item',
                'Sottotitolazione video',
                'Voice mode per lavoro rapido in mobilità',
                'Generazione contenuti audio (podcast, presentazioni narrate)',
              ]}
              cv="Trascrizione automatica e sintesi meeting aziendali tramite AI. Produzione di minute strutturate e action item da registrazioni audio."
              interview="Dopo ogni riunione trascrivo la registrazione con AI e genero un riassunto con punti chiave e azioni. Prima ci voleva mezz'ora, ora 2 minuti."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <AreaCard
              icon={VisualIcon}
              number={3}
              title="Visual e Design con AI"
              skills={[
                'Generazione immagini con prompt descrittivi',
                'Scelta piattaforma giusta (Leonardo, Canva AI, Designer)',
                'Editing AI: inpainting, upscaling, variazioni',
                'Video brevi con Pika e strumenti simili',
              ]}
              cv="Creazione contenuti visivi professionali (presentazioni, social, marketing) tramite AI generativa. Familiarità con piattaforme di image generation e editing AI."
              interview="Per presentazioni e social genero immagini personalizzate con AI. Descrivo stile, colori, soggetto — in pochi minuti ho l'asset pronto. Ho creato tutti i visual di una campagna con Leonardo AI."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <AreaCard
              icon={DataIcon}
              number={4}
              title="Dati e Analisi"
              skills={[
                'Formule Excel/Sheets da linguaggio naturale',
                'Analisi dataset con Code Interpreter',
                'Pulizia e trasformazione dati',
                'Validazione critica dei risultati AI',
              ]}
              cv="Analisi dati assistita da AI: formule Excel da linguaggio naturale, analisi dataset con Code Interpreter, pulizia dati. Validazione critica dei risultati."
              interview="Uso ChatGPT per le formule complesse — descrivo cosa serve in italiano, lui dà la formula. Per analisi grosse carico il file su Code Interpreter. Verifico sempre con controlli a campione."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.14}>
            <AreaCard
              icon={AutomationIcon}
              number={5}
              title="Automazione e Strumenti Avanzati"
              skills={[
                'Principio trigger → azione per automazioni',
                'Zapier / Make per collegare servizi senza codice',
                'Familiarità con agenti AI e connettori (MCP)',
                'Copilot in Office e Gemini in Google Workspace',
              ]}
              cv="Conoscenza di automazione no-code (Zapier, Make) e AI integrata in ambienti di lavoro (Microsoft Copilot, Google Gemini). Familiarità con agenti AI."
              interview="So creare workflow con Zapier — tipo salvare allegati email in Drive automaticamente. Conosco anche Copilot e Gemini integrati, quindi sono pronto a usare l'AI nei vostri strumenti aziendali."
            />
          </AnimatedSection>
        </div>

        <div className="section-divider max-w-md my-12" />

        {/* ============================================================ */}
        {/*  COME PRESENTARLE — CONFRONTO                                */}
        {/* ============================================================ */}

        <AnimatedSection delay={0.16}>
          <h3
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Presentarsi bene vs presentarsi male
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
            <div className="warning-card">
              <div className="flex items-center gap-2 mb-4">
                <XIcon />
                <span className="font-bold text-sm" style={{ color: 'var(--color-warning)' }}>
                  Cos&igrave; NO
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  '"So usare ChatGPT"',
                  '"Conosco l\'intelligenza artificiale"',
                  '"Ho fatto un corso sull\'AI"',
                  '"Sono esperto di prompt engineering"',
                ].map((ex) => (
                  <li key={ex} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex-shrink-0"><XIcon /></span>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{ex}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                Frasi vaghe, non verificabili. Un recruiter le legge e passa al prossimo.
              </p>
            </div>

            <div className="success-card">
              <div className="flex items-center gap-2 mb-4">
                <CheckIcon />
                <span className="font-bold text-sm" style={{ color: 'var(--color-success)' }}>
                  Cos&igrave; S&Igrave;
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  '"Uso ChatGPT per report settimanali, -60% tempi di stesura"',
                  '"Automatizzato data entry con Zapier, -15 ore/mese"',
                  '"Visual per social con Leonardo AI, -800€/mese in design"',
                  '"Analisi dataset con Code Interpreter, da 2 giorni a 2 ore"',
                ].map((ex) => (
                  <li key={ex} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{ex}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                Azione + strumento + risultato misurabile. Numeri credibili, non esatti.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-md my-12" />

        {/* ============================================================ */}
        {/*  LINKEDIN — 3 STEP                                           */}
        {/* ============================================================ */}

        <AnimatedSection delay={0.18}>
          <h3
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            3 aggiornamenti LinkedIn
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Headline */}
            <div className="glass-card p-5">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--accent-primary)' }}>
                1. Headline
              </p>
              <div className="space-y-2">
                <div className="p-2 rounded-lg text-xs" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.12)' }}>
                  <span className="line-through" style={{ color: 'var(--text-muted)' }}>Marketing Manager | Appassionato di innovazione</span>
                </div>
                <div className="p-2 rounded-lg text-xs" style={{ background: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.12)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Marketing Manager | AI-assisted content &amp; data analysis</span>
                </div>
              </div>
            </div>

            {/* Sommario */}
            <div className="glass-card p-5">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--accent-primary)' }}>
                2. Sommario
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Aggiungete 2-3 righe in fondo: <em>&quot;Utilizzo quotidianamente AI generativa (ChatGPT, Claude, Copilot)
                per ottimizzare i processi: redazione, analisi dati, creazione contenuti, automazione.&quot;</em>
              </p>
            </div>

            {/* Competenze */}
            <div className="glass-card p-5">
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--accent-primary)' }}>
                3. Competenze
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['AI Generativa', 'ChatGPT', 'Prompt Engineering', 'Copilot', 'Gemini', 'Analisi Dati AI'].map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-medium px-2 py-1 rounded-full"
                    style={{ background: 'rgba(249, 115, 22, 0.08)', color: 'var(--accent-primary)', border: '1px solid rgba(249, 115, 22, 0.15)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-md my-12" />

        {/* ============================================================ */}
        {/*  DOMANDE COLLOQUIO                                           */}
        {/* ============================================================ */}

        <AnimatedSection delay={0.2}>
          <h3
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Domande tipiche ai colloqui
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="glass-card p-5">
              <p className="text-xs font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                &quot;Ha esperienza con l&apos;AI?&quot;
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Rispondete con un esempio, non con un s&igrave;.</strong>{' '}
                &quot;Uso ChatGPT per [attività rilevante per il ruolo], ottenendo [risultato]. Conosco anche Claude e Gemini.&quot;
              </p>
            </div>

            <div className="glass-card p-5">
              <p className="text-xs font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                &quot;Come userebbe l&apos;AI qui?&quot;
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Collegate competenze alle mansioni dell&apos;annuncio.</strong>{' '}
                Preparate 2-3 esempi concreti legati a quel ruolo specifico prima del colloquio.
              </p>
            </div>

            <div className="glass-card p-5">
              <p className="text-xs font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                &quot;Quali sono i limiti dell&apos;AI?&quot;
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>La domanda che vi distingue.</strong>{' '}
                Allucinazioni, prompt vago = output vago, no dati sensibili. &quot;La responsabilità resta mia.&quot;
              </p>
            </div>

            <div className="glass-card p-5">
              <p className="text-xs font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                &quot;Usiamo Microsoft 365 / Google Workspace&quot;
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Parlate di Copilot/Gemini integrati.</strong>{' '}
                &quot;Ho familiarità con entrambi. Posso iniziare a usare l&apos;AI integrata nei vostri strumenti da subito.&quot;
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Regola d'oro */}
        <AnimatedSection delay={0.22}>
          <div className="quote-block max-w-3xl mx-auto p-6 rounded-2xl">
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              Ogni competenza AI va legata a un{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>risultato misurabile</strong>.
              <br />
              Non &quot;so usare l&apos;AI&quot;, ma &quot;uso [strumento] per [attività], ottenendo [risultato].&quot;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
