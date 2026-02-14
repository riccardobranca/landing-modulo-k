'use client';

import { AnimatedSection } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function AlertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function LearningSection() {
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
              K.4
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Continuare a Imparare
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              L&apos;AI cambia ogni settimana. Non serve seguire tutto &mdash; serve sapere dove guardare quando vi serve qualcosa di nuovo.
            </p>
          </div>
        </AnimatedSection>

        {/* Ask the AI — Featured */}
        <AnimatedSection delay={0.1}>
          <div
            className="p-8 rounded-2xl mb-12"
            style={{
              background: 'rgba(249, 115, 22, 0.06)',
              border: '2px solid rgba(249, 115, 22, 0.25)',
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'var(--accent-primary)',
                  color: '#fff',
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  <circle cx="9" cy="10" r="1" />
                  <circle cx="15" cy="10" r="1" />
                  <path d="M9 14s1 1 3 1 3-1 3-1" />
                </svg>
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  La risorsa migliore? Chiedete all&apos;AI stessa
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Sembra banale, ma è vero: lo strumento che avete imparato a usare in questo corso è anche il modo migliore
                  per continuare a imparare. L&apos;AI può spiegarvi concetti, riassumervi articoli, farvi tutorial personalizzati,
                  e rispondere a domande specifiche sul vostro lavoro. Non serve cercare altrove quando avete un tutor disponibile 24/7.
                </p>
              </div>
            </div>
            <div className="space-y-4 pl-0 sm:pl-[78px]">
              <div className="glass-card p-4">
                <p className="text-sm font-mono mb-1" style={{ color: 'var(--accent-primary)' }}>Esempio 1:</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  &quot;Spiegami cos&apos;è [nuovo tool AI] in parole semplici. Cosa fa? Serve a me che lavoro come [il vostro ruolo]?&quot;
                </p>
              </div>
              <div className="glass-card p-4">
                <p className="text-sm font-mono mb-1" style={{ color: 'var(--accent-primary)' }}>Esempio 2:</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  &quot;Ho letto che è uscito un nuovo modello AI chiamato [nome]. Quali sono le novità principali e cosa cambia per un utente normale come me?&quot;
                </p>
              </div>
              <div className="glass-card p-4">
                <p className="text-sm font-mono mb-1" style={{ color: 'var(--accent-primary)' }}>Esempio 3:</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  &quot;Fammi un mini-tutorial per usare [funzionalità]. Mostrami passo passo come si fa, con un esempio pratico.&quot;
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Other resources */}
        <AnimatedSection delay={0.15}>
          <h3
            className="text-xl font-semibold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Altre fonti utili
          </h3>

          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Quando volete aggiornarvi da fonti esterne, scegliete quelle semplici e affidabili.
            Non servono decine di fonti &mdash; ne bastano 2-3 che controllate quando avete tempo.
          </p>

          <div className="space-y-6 mb-12">
            {/* Giornali e blog ufficiali */}
            <div className="glass-card p-6">
              <h4 className="font-bold text-base mb-3" style={{ color: 'var(--text-primary)' }}>
                Giornali e blog ufficiali
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                I blog ufficiali dei provider annunciano le novità importanti in modo chiaro.
                I giornali generalisti danno contesto su cosa cambia nel mondo del lavoro.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sm flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }}>&#8226;</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <strong>Blog OpenAI / Anthropic / Google AI</strong> &mdash; Annunci ufficiali sulle novità (in inglese, ma potete chiedere all&apos;AI di tradurli)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sm flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }}>&#8226;</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <strong>Wired Italia, Il Sole 24 Ore Tech</strong> &mdash; Articoli in italiano sull&apos;impatto dell&apos;AI nel lavoro
                  </span>
                </li>
              </ul>
            </div>

            {/* Corsi gratuiti ufficiali */}
            <div className="glass-card p-6">
              <h4 className="font-bold text-base mb-3" style={{ color: 'var(--text-primary)' }}>
                Corsi gratuiti ufficiali
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                I provider stessi offrono corsi gratuiti per imparare ad usare i loro strumenti.
                Sono fatti bene, aggiornati, e non cercano di vendervi nulla.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sm flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }}>&#8226;</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Microsoft Learn</a> &mdash; Corsi su Copilot, anche in italiano, con certificazioni gratuite
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sm flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }}>&#8226;</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <a href="https://skillshop.withgoogle.com" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Google Skillshop</a> &mdash; Corsi su Gemini e AI di Google, gratuiti
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sm flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }}>&#8226;</span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <a href="https://www.coursera.org/learn/google-ai-essentials" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: 'var(--accent-primary)' }}>Google AI Essentials (Coursera)</a> &mdash; Corso base di Google sull&apos;AI, gratuito, adatto a principianti
                  </span>
                </li>
              </ul>
            </div>

            {/* YouTube in italiano */}
            <div className="glass-card p-6">
              <h4 className="font-bold text-base mb-3" style={{ color: 'var(--text-primary)' }}>
                YouTube in italiano
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                Cercate &quot;tutorial ChatGPT italiano&quot; o &quot;AI per [il vostro settore]&quot;.
                Non seguite un canale specifico &mdash; cercate quando vi serve qualcosa di preciso.
                Prima di seguire un canale, verificate che sia aggiornato e che non stia solo cercando di vendervi qualcosa.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Red Flags Section */}
        <AnimatedSection delay={0.2}>
          <h3
            className="text-xl font-semibold mb-6 flex items-center gap-2"
            style={{ color: 'var(--text-primary)' }}
          >
            <span style={{ color: 'var(--color-warning)' }}>
              <AlertIcon />
            </span>
            Da cosa stare alla larga
          </h3>

          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            Con l&apos;esplosione dell&apos;AI, sono esplosi anche i furbi che cercano di vendervi aria fritta.
            Ecco i segnali di allarme per riconoscerli.
          </p>

          <div className="space-y-4 mb-12">
            <div className="warning-card p-5">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--color-warning)' }}>&quot;Guadagna 5.000&euro;/mese con ChatGPT senza lavorare&quot;</strong>
                <br />
                Scam. L&apos;AI è uno strumento che vi fa lavorare meglio, non una macchina per soldi automatica.
                Se fosse così facile, lo farebbero tutti.
              </p>
            </div>

            <div className="warning-card p-5">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--color-warning)' }}>&quot;Il corso definitivo sull&apos;AI&quot; a 997&euro;</strong>
                <br />
                Se non dicono esattamente cosa imparerete, è fumo. La maggior parte delle informazioni sull&apos;AI è disponibile
                gratuitamente nei corsi ufficiali dei provider (Microsoft Learn, Google Skillshop).
              </p>
            </div>

            <div className="warning-card p-5">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--color-warning)' }}>&quot;Il prompt segreto che cambia tutto&quot;</strong>
                <br />
                Non esistono prompt magici. Lo avete imparato nel Modulo D: conta la chiarezza e la specificità,
                non formule segrete. Chi vi vende &quot;la raccolta di prompt da 10.000&quot; vi vende spazzatura.
              </p>
            </div>

            <div className="warning-card p-5">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--color-warning)' }}>&quot;Tool rivoluzionario per [qualcosa]&quot; con zero recensioni</strong>
                <br />
                Se un tool è davvero buono, ha recensioni verificabili e utenti reali. Diffidate dei tool sconosciuti
                promossi aggressivamente. Iniziate sempre da quelli che abbiamo visto nel corso.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom quote */}
        <AnimatedSection delay={0.25}>
          <div
            className="quote-block p-6 rounded-2xl"
          >
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              La miglior strategia di apprendimento? <strong style={{ color: 'var(--accent-primary)' }}>Imparate quando vi serve qualcosa</strong>.
              <br />
              Non serve stare dietro a ogni novità. Quando avete un problema concreto,
              cercate la soluzione &mdash; imparerete strada facendo. E quando siete in dubbio, <strong style={{ color: 'var(--accent-primary)' }}>chiedete all&apos;AI</strong>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
