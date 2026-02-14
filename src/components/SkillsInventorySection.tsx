'use client';

import { AnimatedSection } from '@/components/AnimatedSection';

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

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SkillsInventorySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
              Avete acquisito competenze concrete e spendibili. Ma saperle fare non basta &mdash;
              bisogna saperle <strong style={{ color: 'var(--text-primary)' }}>comunicare</strong>.
              Vediamo come presentarle nel CV, su LinkedIn e ai colloqui.
            </p>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  LE 5 AREE DI COMPETENZA                                     */}
        {/* ============================================================ */}

        <AnimatedSection delay={0.05}>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Le vostre 5 aree di competenza
          </h3>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Durante il corso avete sviluppato competenze in 5 aree distinte. Ognuna ha applicazioni concrete
            e va presentata con esempi specifici, non con frasi generiche. Vediamole una per una, con cosa
            scrivere sul CV e come spiegarle a un colloquio.
          </p>
        </AnimatedSection>

        {/* --- Area 1: Scrittura e Comunicazione --- */}
        <AnimatedSection delay={0.08}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(249, 115, 22, 0.12)',
                  color: 'var(--accent-primary)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                </svg>
              </div>
              <h4
                className="font-bold text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                1. Scrittura e Comunicazione con AI
              </h4>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Sapete usare ChatGPT, Claude e Gemini per produrre testi professionali &mdash; email, report, documenti,
              presentazioni. Non copiate l&apos;output: lo guidate con prompt strutturati, lo verificate,
              e lo adattate al contesto. Sapete dare istruzioni precise su tono, pubblico e formato.
              Sapete anche usare l&apos;AI per riscrivere, riassumere, tradurre e revisionare testi esistenti.
            </p>
            <div
              className="p-4 rounded-xl mb-3"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--accent-primary)' }}>
                Sul CV scrivete:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Utilizzo strumenti di AI generativa (ChatGPT, Claude) per la redazione di documenti aziendali,
                email professionali e report. Competenza in prompt engineering per output mirati e revisione critica dei contenuti generati.&quot;
              </p>
            </div>
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(34, 197, 94, 0.04)', border: '1px solid rgba(34, 197, 94, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-success)' }}>
                Al colloquio dite:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Uso ChatGPT quotidianamente per velocizzare la scrittura di email e documenti. Gli do istruzioni precise
                &mdash; tono professionale, pubblico target, lunghezza desiderata &mdash; e poi rivedo sempre il risultato.
                Ho ridotto il tempo di stesura report del 60% circa, mantenendo la qualit&agrave; che mi viene richiesta.&quot;
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* --- Area 2: Audio e Voce --- */}
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(249, 115, 22, 0.12)',
                  color: 'var(--accent-primary)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                  <path d="M19 10v2a7 7 0 01-14 0v-2" />
                </svg>
              </div>
              <h4
                className="font-bold text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                2. Audio e Contenuti Vocali
              </h4>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Sapete trascrivere meeting e chiamate automaticamente, creare sottotitoli per video,
              e usare la voice mode degli assistenti AI per lavoro rapido in mobilit&agrave;. Sapete anche
              generare contenuti audio professionali e trasformare testi scritti in podcast o presentazioni narrate.
              Questo &egrave; particolarmente utile per chi lavora in team distribuiti o gestisce molte riunioni.
            </p>
            <div
              className="p-4 rounded-xl mb-3"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--accent-primary)' }}>
                Sul CV scrivete:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Esperienza nella trascrizione automatica e sintesi di meeting aziendali tramite strumenti AI.
                Capacit&agrave; di produrre minute strutturate e action item a partire da registrazioni audio.&quot;
              </p>
            </div>
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(34, 197, 94, 0.04)', border: '1px solid rgba(34, 197, 94, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-success)' }}>
                Al colloquio dite:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Dopo ogni riunione uso uno strumento AI per trascrivere la registrazione e generare un riassunto
                con i punti chiave e le azioni da fare. Prima ci voleva mezz&apos;ora per scrivere le minute a mano,
                ora in 2 minuti ho tutto pronto da condividere con il team.&quot;
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* --- Area 3: Visual e Design --- */}
        <AnimatedSection delay={0.12}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(249, 115, 22, 0.12)',
                  color: 'var(--accent-primary)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <h4
                className="font-bold text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                3. Visual e Design con AI
              </h4>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Sapete generare immagini professionali con prompt descrittivi &mdash; per presentazioni,
              social media, mockup di prodotto, materiali marketing. Conoscete le differenze tra le piattaforme
              (Leonardo, Canva AI, Microsoft Designer) e sapete scegliere quella giusta per ogni esigenza.
              Sapete anche creare brevi video con strumenti come Pika, e conoscete le basi dell&apos;editing AI
              (inpainting, upscaling, variazioni).
            </p>
            <div
              className="p-4 rounded-xl mb-3"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--accent-primary)' }}>
                Sul CV scrivete:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Creazione di contenuti visivi professionali (presentazioni, social media, materiali marketing)
                tramite strumenti di AI generativa. Familiarit&agrave; con piattaforme di image generation e editing AI.&quot;
              </p>
            </div>
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(34, 197, 94, 0.04)', border: '1px solid rgba(34, 197, 94, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-success)' }}>
                Al colloquio dite:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Per le presentazioni e i post social uso strumenti di AI per generare immagini personalizzate.
                Descrivo quello che mi serve &mdash; stile, colori, soggetto &mdash; e in pochi minuti ho un asset pronto.
                Per una campagna marketing ho creato tutti i visual con Leonardo AI, risparmiando il costo di un grafico esterno.&quot;
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* --- Area 4: Dati e Analisi --- */}
        <AnimatedSection delay={0.14}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(249, 115, 22, 0.12)',
                  color: 'var(--accent-primary)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h4
                className="font-bold text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                4. Dati e Analisi
              </h4>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Sapete usare l&apos;AI per lavorare con Excel e dati senza essere programmatori. Potete chiedere
              a ChatGPT di crearvi formule complesse in linguaggio naturale (&quot;dammi una formula che calcola la media
              solo delle celle con valore superiore a 100&quot;), usare Code Interpreter per analizzare file CSV
              e creare grafici, e pulire dataset disordinati. Sapete anche fare l&apos;essenziale: verificare
              i risultati, capire cosa l&apos;AI ha fatto, e non fidarvi ciecamente dei numeri.
            </p>
            <div
              className="p-4 rounded-xl mb-3"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--accent-primary)' }}>
                Sul CV scrivete:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Analisi dati assistita da AI: creazione formule Excel tramite linguaggio naturale,
                analisi dataset con Code Interpreter (ChatGPT), pulizia e trasformazione dati.
                Capacit&agrave; di validazione critica dei risultati generati.&quot;
              </p>
            </div>
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(34, 197, 94, 0.04)', border: '1px solid rgba(34, 197, 94, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-success)' }}>
                Al colloquio dite:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Quando devo fare analisi su Excel, uso ChatGPT per creare le formule pi&ugrave; complesse.
                Gli descrivo cosa mi serve in italiano e lui mi d&agrave; la formula pronta da incollare. Per analisi pi&ugrave; grosse,
                carico il file su Code Interpreter e gli chiedo di trovare trend, anomalie, e creare grafici.
                Verifico sempre i risultati con controlli a campione.&quot;
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* --- Area 5: Automazione e Integrazione --- */}
        <AnimatedSection delay={0.16}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(249, 115, 22, 0.12)',
                  color: 'var(--accent-primary)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <h4
                className="font-bold text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                5. Automazione e Strumenti Avanzati
              </h4>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Sapete cos&apos;&egrave; un&apos;automazione e come funziona il principio trigger &rarr; azione. Conoscete
              strumenti come Zapier e Make per collegare servizi diversi senza scrivere codice. Avete capito
              cosa sono gli agenti AI, i connettori (MCP), e il vibe coding &mdash; sapete che esistono
              e a cosa servono, anche se non li userete tutti dal primo giorno. Sapete anche che Copilot
              e Gemini sono gi&agrave; integrati nei tool aziendali (Office, Google Workspace) e come trarne vantaggio.
            </p>
            <div
              className="p-4 rounded-xl mb-3"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--accent-primary)' }}>
                Sul CV scrivete:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Conoscenza di strumenti di automazione no-code (Zapier, Make) e di AI integrata in ambienti
                di lavoro (Microsoft Copilot, Google Gemini). Familiarit&agrave; con agenti AI e protocolli di connessione (MCP).&quot;
              </p>
            </div>
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(34, 197, 94, 0.04)', border: '1px solid rgba(34, 197, 94, 0.12)' }}
            >
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-success)' }}>
                Al colloquio dite:
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                &quot;Ho familiarit&agrave; con gli strumenti di automazione come Zapier &mdash; so creare workflow
                che collegano servizi diversi, tipo salvare automaticamente gli allegati email su Google Drive.
                Conosco anche Copilot in Office e Gemini in Google Workspace, quindi sono pronto a lavorare
                con l&apos;AI gi&agrave; integrata nei vostri strumenti aziendali.&quot;
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-md my-12" />

        {/* ============================================================ */}
        {/*  COME PRESENTARLE — LA DIFFERENZA                            */}
        {/* ============================================================ */}

        <AnimatedSection delay={0.18}>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            La differenza tra presentarsi bene e presentarsi male
          </h3>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            La differenza tra un candidato che convince e uno che viene scartato non &egrave; cosa sa fare,
            ma <strong style={{ color: 'var(--text-primary)' }}>come lo racconta</strong>. La regola &egrave; semplice:
            mai frasi generiche, sempre esempi concreti con risultati misurabili. Vediamo il confronto.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* BAD */}
            <div className="warning-card">
              <div className="flex items-center gap-2 mb-5">
                <XIcon />
                <span
                  className="font-bold text-base"
                  style={{ color: 'var(--color-warning)' }}
                >
                  Cos&igrave; NO
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><XIcon /></span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &quot;So usare ChatGPT&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><XIcon /></span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Conosco l&apos;intelligenza artificiale&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><XIcon /></span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Ho fatto un corso sull&apos;AI&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><XIcon /></span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Sono esperto di prompt engineering&quot;
                  </span>
                </li>
              </ul>
              <p className="text-xs mt-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Queste frasi non dicono nulla. Sono vaghe, non verificabili, e le scrive chiunque.
                Un recruiter le legge e passa al prossimo CV.
              </p>
            </div>

            {/* GOOD */}
            <div className="success-card">
              <div className="flex items-center gap-2 mb-5">
                <CheckIcon />
                <span
                  className="font-bold text-base"
                  style={{ color: 'var(--color-success)' }}
                >
                  Cos&igrave; S&Igrave;
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Uso ChatGPT per redigere report settimanali, riducendo i tempi di stesura da 4 ore a 1 ora&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Ho automatizzato il processo di data entry con Zapier, eliminando 15 ore/mese di lavoro manuale&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Creo contenuti visivi per i social con Leonardo AI, risparmiando 800&euro;/mese in design esterno&quot;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    &quot;Uso Code Interpreter per analizzare dataset e creare dashboard &mdash; analisi che prima richiedeva 2 giorni ora la faccio in 2 ore&quot;
                  </span>
                </li>
              </ul>
              <p className="text-xs mt-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Azione concreta + strumento usato + risultato misurabile. Questo &egrave; ci&ograve; che un recruiter
                vuole leggere. Non servono numeri esatti &mdash; servono numeri credibili.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-md my-12" />

        {/* ============================================================ */}
        {/*  LINKEDIN                                                    */}
        {/* ============================================================ */}

        <AnimatedSection delay={0.22}>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Come aggiornare LinkedIn
          </h3>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            LinkedIn &egrave; il primo posto dove un recruiter vi cerca dopo aver letto il CV.
            Non serve riscrivere tutto il profilo &mdash; bastano 3 aggiornamenti mirati.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.24}>
          <div className="space-y-5 mb-12">
            {/* Headline */}
            <div className="glass-card p-6">
              <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                1. Headline (sotto il nome)
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                Aggiungete un riferimento all&apos;AI nella vostra headline. Non deve essere l&apos;unica cosa,
                ma deve esserci. Esempio:
              </p>
              <div className="flex flex-col gap-2">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.15)' }}
                >
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span className="line-through">Marketing Manager | Appassionato di innovazione</span>
                  </p>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ background: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.15)' }}
                >
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Marketing Manager | AI-assisted content creation &amp; data analysis
                  </p>
                </div>
              </div>
            </div>

            {/* Informazioni */}
            <div className="glass-card p-6">
              <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                2. Sezione &quot;Informazioni&quot; (il sommario)
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                Aggiungete 2-3 righe in fondo al vostro sommario che menzionano le competenze AI.
                Non serve un paragrafo intero &mdash; basta che sia presente. Esempio di chiusura:
              </p>
              <div
                className="p-4 rounded-xl"
                style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.12)' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                  &quot;Utilizzo quotidianamente strumenti di AI generativa (ChatGPT, Claude, Copilot)
                  per ottimizzare i processi di lavoro: dalla redazione documenti all&apos;analisi dati,
                  dalla creazione contenuti visivi all&apos;automazione di task ripetitivi.&quot;
                </p>
              </div>
            </div>

            {/* Competenze */}
            <div className="glass-card p-6">
              <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                3. Sezione &quot;Competenze&quot;
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                Aggiungete queste competenze alla lista (LinkedIn ne permette fino a 50).
                Mettete le pi&ugrave; rilevanti per il vostro settore in cima:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI Generativa', 'ChatGPT', 'Prompt Engineering',
                  'Microsoft Copilot', 'Google Gemini', 'Analisi Dati con AI',
                  'Automazione Processi', 'Content Creation con AI',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(249, 115, 22, 0.08)',
                      color: 'var(--accent-primary)',
                      border: '1px solid rgba(249, 115, 22, 0.15)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-md my-12" />

        {/* ============================================================ */}
        {/*  COLLOQUI — DOMANDE TIPICHE                                  */}
        {/* ============================================================ */}

        <AnimatedSection delay={0.26}>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Le domande che vi faranno ai colloqui
          </h3>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Sempre pi&ugrave; colloqui includono domande sull&apos;AI. Non vi chiederanno cose tecniche &mdash;
            vogliono capire se sapete usarla davvero e se ne capite i limiti. Ecco le domande pi&ugrave; comuni
            e come rispondere.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.28}>
          <div className="space-y-5 mb-12">
            {/* Q1 */}
            <div className="glass-card p-6">
              <p className="text-sm font-bold mb-3" style={{ color: 'var(--accent-primary)' }}>
                &quot;Ha esperienza con strumenti di intelligenza artificiale?&quot;
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Rispondete con un esempio, non con un s&igrave;.</strong>{' '}
                &quot;S&igrave;, li uso ogni giorno per il mio lavoro. Per esempio, uso ChatGPT per [la cosa pi&ugrave; rilevante
                per quel ruolo]. Mi ha permesso di [risultato concreto]. Conosco anche Claude e Gemini,
                e so quando &egrave; meglio usare uno piuttosto che l&apos;altro.&quot;
              </p>
            </div>

            {/* Q2 */}
            <div className="glass-card p-6">
              <p className="text-sm font-bold mb-3" style={{ color: 'var(--accent-primary)' }}>
                &quot;Come userebbe l&apos;AI in questo ruolo?&quot;
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Collegate le competenze alle mansioni dell&apos;annuncio.</strong>{' '}
                Studiate l&apos;annuncio prima del colloquio e preparate 2-3 esempi concreti.
                &quot;Vedo che il ruolo richiede [mansione dall&apos;annuncio]. Per quella attivit&agrave; userei [strumento AI]
                per [come lo userei], che nel mio lavoro precedente mi ha permesso di [risultato].&quot;
              </p>
            </div>

            {/* Q3 */}
            <div className="glass-card p-6">
              <p className="text-sm font-bold mb-3" style={{ color: 'var(--accent-primary)' }}>
                &quot;Quali sono i limiti dell&apos;AI?&quot;
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Questa &egrave; la domanda che vi distingue da chi ha solo &quot;giocato&quot; con ChatGPT.</strong>{' '}
                &quot;L&apos;AI pu&ograve; inventare informazioni false con grande sicurezza &mdash; le cosiddette allucinazioni.
                Per questo verifico sempre i fatti importanti. Non le affido dati sensibili o personali.
                E so che i risultati dipendono dalla qualit&agrave; delle istruzioni: un prompt vago d&agrave; un output vago.
                L&apos;AI &egrave; un assistente potente, ma la responsabilit&agrave; delle decisioni resta mia.&quot;
              </p>
            </div>

            {/* Q4 */}
            <div className="glass-card p-6">
              <p className="text-sm font-bold mb-3" style={{ color: 'var(--accent-primary)' }}>
                &quot;L&apos;azienda usa Microsoft 365 / Google Workspace. Ha familiarit&agrave;?&quot;
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Parlate di Copilot o Gemini integrati.</strong>{' '}
                &quot;S&igrave;, e so che Microsoft 365 include Copilot che &egrave; gi&agrave; integrato in Word, Excel, PowerPoint
                e Teams. Lo stesso vale per Gemini in Google Workspace. Ho familiarit&agrave; con entrambi
                e posso iniziare a usarli da subito per velocizzare il lavoro quotidiano &mdash; dalla
                stesura documenti all&apos;analisi dati.&quot;
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  LA REGOLA D'ORO                                             */}
        {/* ============================================================ */}

        <AnimatedSection delay={0.3}>
          <div className="quote-block max-w-3xl mx-auto p-6 rounded-2xl">
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              La regola d&apos;oro: ogni competenza AI va legata a un{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>risultato misurabile</strong>.
              <br />
              Non &quot;so usare l&apos;AI&quot;, ma &quot;uso [strumento] per [attivit&agrave;], ottenendo [risultato].&quot;
              <br />
              <span style={{ color: 'var(--text-muted)' }}>
                Non servono numeri esatti. Servono numeri credibili e verificabili.
              </span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
