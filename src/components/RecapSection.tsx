'use client';

import { AnimatedSection } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Reusable: concept chip                                             */
/* ------------------------------------------------------------------ */

function Concept({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-lg"
      style={{
        background: 'rgba(249, 115, 22, 0.06)',
        color: 'var(--text-primary)',
        border: '1px solid rgba(249, 115, 22, 0.12)',
      }}
    >
      {children}
    </span>
  );
}

function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mt-5 p-4 rounded-xl text-sm leading-relaxed"
      style={{
        background: 'rgba(249, 115, 22, 0.04)',
        borderLeft: '3px solid var(--accent-primary)',
        color: 'var(--text-secondary)',
      }}
    >
      {children}
    </div>
  );
}

function ModuleHeader({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
        style={{ background: 'var(--accent-primary)', color: '#fff' }}
      >
        {letter}
      </span>
      <h3
        className="text-xl font-bold"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RecapSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
              Il Vostro Percorso
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Tutto quello che abbiamo affrontato, modulo per modulo. I concetti chiave da portare con voi.
            </p>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO A                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="A" title="Cos&rsquo;è l&rsquo;AI e come funziona" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              L&apos;AI non pensa &mdash; <strong style={{ color: 'var(--text-primary)' }}>predice la parola successiva</strong>.
              Un T9 super sofisticato. Sembrare intelligente e essere intelligente sono cose diverse.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>Pappagallo stocastico</Concept>
              <Concept>Predice &ne; Capisce</Concept>
              <Concept>Allucinazioni</Concept>
              <Concept>AI tradizionale vs Generativa</Concept>
              <Concept>LLM vs Motore di ricerca</Concept>
              <Concept>Modelli standard vs Reasoning</Concept>
              <Concept>Multimodalità</Concept>
              <Concept>Limiti intrinseci</Concept>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="p-3 rounded-lg text-center" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>Motore di ricerca</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Trova documenti</p>
              </div>
              <div className="p-3 rounded-lg text-center" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>LLM (ChatGPT)</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Genera risposte</p>
              </div>
              <div className="p-3 rounded-lg text-center" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>Answer Engine</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Risponde + cita fonti</p>
              </div>
            </div>

            <Takeaway>
              L&apos;AI può inventare fatti con assoluta sicurezza. Non è un bug, è come funziona.
              <strong style={{ color: 'var(--accent-primary)' }}> Verificate sempre.</strong>
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO B                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="B" title="Dal modello al prodotto" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>GPT-5 non è ChatGPT.</strong>{' '}
              GPT-5 è il motore, ChatGPT è l&apos;auto completa. Ogni prodotto AI ha 3 strati.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>3 strati: Interfaccia / Orchestrazione / Modello</Concept>
              <Concept>Stesso modello &ne; stesso prodotto</Concept>
              <Concept>Cloud vs On-device</Concept>
              <Concept>I 4 giganti: OpenAI, Anthropic, Google, Meta</Concept>
              <Concept>Geopolitica dell&apos;AI</Concept>
            </div>

            <div className="font-mono text-sm text-center space-y-1" style={{ color: 'var(--text-primary)' }}>
              <div className="p-2.5 rounded-lg" style={{ background: 'rgba(249, 115, 22, 0.06)' }}>
                <strong>Interfaccia</strong> &mdash; quello che vedete (chat, app, sidebar)
              </div>
              <div className="p-2.5 rounded-lg" style={{ background: 'rgba(249, 115, 22, 0.10)' }}>
                <strong>Orchestrazione</strong> &mdash; memoria, tool, web, sicurezza
              </div>
              <div className="p-2.5 rounded-lg" style={{ background: 'rgba(249, 115, 22, 0.16)' }}>
                <strong>Modello</strong> &mdash; il &quot;cervello&quot; che predice le parole
              </div>
            </div>

            <Takeaway>
              Lo stesso modello in prodotti diversi si comporta diversamente. GPT in ChatGPT &ne; GPT in Copilot.
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO C                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="C" title="I prodotti che usate" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              I 4 chatbot principali e quando usare ciascuno. Più tool specializzati per esigenze specifiche.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <div className="p-3 rounded-xl text-center" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>ChatGPT</p>
                <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Coltellino svizzero</p>
              </div>
              <div className="p-3 rounded-xl text-center" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>Claude</p>
                <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Documenti e coding</p>
              </div>
              <div className="p-3 rounded-xl text-center" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>Gemini</p>
                <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Ecosistema Google</p>
              </div>
              <div className="p-3 rounded-xl text-center" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>Copilot</p>
                <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Gratuito in Windows</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              <Concept>Free vs Paid ($20/mese sblocca molto)</Concept>
              <Concept>Custom Instructions</Concept>
              <Concept>Perplexity = ricerca con fonti</Concept>
              <Concept>NotebookLM = analisi documenti</Concept>
              <Concept>Deep Research</Concept>
            </div>

            <Takeaway>
              Non esiste il tool &quot;migliore&quot;. Esiste quello giusto per la vostra esigenza e il vostro ecosistema.
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO D                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="D" title="Come comunicare con l&rsquo;AI" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Il prompting è una <strong style={{ color: 'var(--text-primary)' }}>competenza di comunicazione</strong>, non magia.
              Spiegare chiaramente a un collega nuovo molto capace ma senza contesto.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>Contesto + Istruzione + Formato</Concept>
              <Concept>Ruolo</Concept>
              <Concept>Vincoli</Concept>
              <Concept>Esempi (few-shot)</Concept>
              <Concept>Iterazione</Concept>
              <Concept>Chain-of-thought</Concept>
              <Concept>Meta-prompting</Concept>
              <Concept>No &quot;prompt segreti&quot;</Concept>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="p-3 rounded-lg" style={{ background: 'rgba(239, 68, 68, 0.05)', borderLeft: '3px solid var(--color-error)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: 'var(--color-error)' }}>Vago</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>&quot;Scrivi un&apos;email&quot;</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'rgba(34, 197, 94, 0.05)', borderLeft: '3px solid var(--color-success)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: 'var(--color-success)' }}>Specifico</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>&quot;Sollecito pagamento a Tecnologie Srl, fattura 2024/456, 1.200&euro;, tono cortese ma fermo, max 10 righe&quot;</p>
              </div>
            </div>

            <Takeaway>
              La specificità batte la lunghezza. E l&apos;iterazione è il vostro strumento principale:
              il primo prompt non è mai perfetto.
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO E                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="E" title="Privacy e responsabilità" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              I vostri dati viaggiano sui server del provider. Sapere cosa succede e cosa potete controllare.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>Inference vs Training</Concept>
              <Concept>Uso personale vs lavorativo</Concept>
              <Concept>GDPR</Concept>
              <Concept>AI Act europeo (feb 2025)</Concept>
              <Concept>Quando dichiarare uso AI</Concept>
              <Concept>Dati aziendali = mai su consumer</Concept>
            </div>

            <div
              className="p-4 rounded-xl mt-4"
              style={{ background: 'rgba(239, 68, 68, 0.04)', border: '1px solid rgba(239, 68, 68, 0.15)' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--color-error)' }}>Regola d&apos;oro:</strong> Se il dato non è vostro,
                non caricatelo su AI consumer senza autorizzazione. Non è paranoia &mdash; è professionalità. E spesso è la legge.
              </p>
            </div>

            <Takeaway>
              L&apos;AI Act obbliga alla &quot;AI literacy&quot; per chi usa sistemi AI. Questo corso ve la dà.
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* Transition banner */}
        <AnimatedSection delay={0.05}>
          <div
            className="p-5 rounded-2xl mb-6 text-center"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>A-E = Fondamenti</strong> &mdash; Cos&apos;è l&apos;AI, come funziona, come parlarci, come usarla responsabilmente
              <br />
              <strong style={{ color: 'var(--accent-primary)' }}>F-J = Applicazioni</strong> &mdash; Usarla davvero: scrivere, ascoltare, vedere, analizzare, automatizzare
            </p>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO F                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="F" title="Scrittura, ricerca e documenti" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Il workflow fondamentale: <strong style={{ color: 'var(--text-primary)' }}>Idea &rarr; Scaletta AI &rarr; Bozza AI &rarr; Revisione umana &rarr; Finale</strong>.
              L&apos;AI scrive la bozza, voi scrivete la versione finale.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>6 prompt fondamentali</Concept>
              <Concept>Brainstorming</Concept>
              <Concept>Scaletta &rarr; Bozza &rarr; Editing</Concept>
              <Concept>Cambio tono</Concept>
              <Concept>Sintesi</Concept>
              <Concept>Un CV per ogni lavoro</Concept>
              <Concept>Perplexity per ricerca</Concept>
              <Concept>NotebookLM per documenti</Concept>
            </div>

            <Takeaway>
              Mai pubblicare output AI senza review. E mai lo stesso CV per tutti &mdash; personalizzatelo
              con le keyword dell&apos;annuncio.
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO G                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="G" title="Voce e audio" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Tre componenti: <strong style={{ color: 'var(--text-primary)' }}>Speech-to-Text</strong> (trascrizione),{' '}
              <strong style={{ color: 'var(--text-primary)' }}>LLM</strong> (comprensione),{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Text-to-Speech</strong> (sintesi vocale).
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>Trascrizione meeting automatica</Concept>
              <Concept>Fireflies / tl;dv / Otter</Concept>
              <Concept>Speaker diarization</Concept>
              <Concept>Action item automatici</Concept>
              <Concept>Voice mode ChatGPT / Gemini</Concept>
              <Concept>Voice cloning e rischi</Concept>
              <Concept>NotebookLM Audio Overview</Concept>
            </div>

            <Takeaway>
              L&apos;app più utile per il lavoro: trascrizione meeting. Mai più prendere appunti durante le riunioni.
              E attenzione al voice cloning: <strong style={{ color: 'var(--accent-primary)' }}>mai fidarsi solo di una voce</strong> per decisioni importanti.
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO H                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="H" title="Visual &mdash; immagini e video" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              L&apos;ecosistema visual si organizza su <strong style={{ color: 'var(--text-primary)' }}>3 livelli</strong>:
              Modello &rarr; Interfaccia &rarr; Aggregatore.
              Lo stesso modello su piattaforme diverse = risultati diversi.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>3 livelli: Modello / Interfaccia / Aggregatore</Concept>
              <Concept>Prompt visivo: soggetto + azione + ambiente + stile</Concept>
              <Concept>Leonardo.ai (gratuito)</Concept>
              <Concept>Microsoft Designer</Concept>
              <Concept>Canva AI</Concept>
              <Concept>Pika per video</Concept>
              <Concept>Inpainting / Upscaling</Concept>
              <Concept>Foto profilo: migliorate, non generate</Concept>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="p-2.5 rounded-lg text-center" style={{ background: 'rgba(249, 115, 22, 0.16)' }}>
                <p className="text-[11px] font-bold" style={{ color: 'var(--text-primary)' }}>Modello</p>
                <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>FLUX, SD3, Kling</p>
              </div>
              <div className="p-2.5 rounded-lg text-center" style={{ background: 'rgba(249, 115, 22, 0.10)' }}>
                <p className="text-[11px] font-bold" style={{ color: 'var(--text-primary)' }}>Interfaccia</p>
                <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Leonardo, Canva</p>
              </div>
              <div className="p-2.5 rounded-lg text-center" style={{ background: 'rgba(249, 115, 22, 0.06)' }}>
                <p className="text-[11px] font-bold" style={{ color: 'var(--text-primary)' }}>Aggregatore</p>
                <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Krea, Freepik</p>
              </div>
            </div>

            <Takeaway>
              Per foto profilo: migliorate le vostre vere foto, non generate profili fake.
              Tool gratuiti più che sufficienti per iniziare.
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO I                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="I" title="Excel e dati" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Non memorizzare formule &mdash; <strong style={{ color: 'var(--text-primary)' }}>descrivete cosa volete</strong> e l&apos;AI
              scrive la formula per voi. L&apos;AI è già <em>dentro</em> i fogli (Gemini in Sheets, Copilot in Excel).
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>Descrivi &rarr; l&apos;AI scrive la formula</Concept>
              <Concept>Garbage in, garbage out</Concept>
              <Concept>Code Interpreter (analisi + grafici)</Concept>
              <Concept>Flash Fill (Ctrl+E)</Concept>
              <Concept>Pulizia dati</Concept>
              <Concept>OCR per digitalizzazione</Concept>
              <Concept>Forms &rarr; Sheet (mai dati a mano)</Concept>
              <Concept>Verificate i risultati</Concept>
            </div>

            <Takeaway>
              L&apos;AI è bravissima a generare formule e grafici, ma non può sapere se i vostri dati hanno problemi.
              <strong style={{ color: 'var(--accent-primary)' }}> Quello è il vostro lavoro.</strong>
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO J                                                     */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="glass-card p-6 sm:p-8 mb-6">
            <ModuleHeader letter="J" title="Automazioni, agenti e creazione" />
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              Dal &quot;fare le cose con l&apos;AI&quot; al &quot;far fare le cose all&apos;AI&quot;. API, connettori, automazioni, agenti.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <Concept>API = camerieri tra software</Concept>
              <Concept>Connettore vs Automazione</Concept>
              <Concept>Trigger &rarr; Azione</Concept>
              <Concept>Zapier / Make</Concept>
              <Concept>ROI: vale la pena automatizzare?</Concept>
              <Concept>Chatbot vs Agente</Concept>
              <Concept>MCP (USB-C dell&apos;AI)</Concept>
              <Concept>Vibe Coding (Lovable, Claude Artifacts)</Concept>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="p-3 rounded-lg" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>Connettore</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Voi chiedete, l&apos;AI agisce (es. &quot;cerca nel mio Drive&quot;)</p>
              </div>
              <div className="p-3 rounded-lg" style={{ background: 'var(--bg-elevated)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: 'var(--accent-primary)' }}>Automazione</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Lavora da sola al verificarsi di un evento</p>
              </div>
            </div>

            <Takeaway>
              Un chatbot risponde, un agente pianifica e agisce. Il vibe coding crea software a partire da
              descrizioni in italiano. Utile per prototipi, non per produzione.
            </Takeaway>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  I 4 PRINCIPI TRASVERSALI                                    */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <h3
            className="text-xl font-bold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            I 4 principi che attraversano tutto il corso
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.15)' }}
            >
              <p className="font-bold text-sm mb-2" style={{ color: 'var(--accent-primary)' }}>
                1. Verificate sempre
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Testi, fatti, formule, automazioni &mdash; l&apos;AI può sbagliare in ogni ambito.
                Testate, rileggete, controllate.
              </p>
            </div>
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.15)' }}
            >
              <p className="font-bold text-sm mb-2" style={{ color: 'var(--accent-primary)' }}>
                2. Partite dal semplice
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Tool gratuiti prima dei costosi. Funzionalità base prima delle avanzate.
                Non serve il piano da $200/mese.
              </p>
            </div>
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.15)' }}
            >
              <p className="font-bold text-sm mb-2" style={{ color: 'var(--accent-primary)' }}>
                3. Privacy sempre
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Dati sensibili non vanno su AI consumer. Anonimizzate, usate piani enterprise,
                capite cosa i connettori possono vedere.
              </p>
            </div>
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(249, 115, 22, 0.04)', border: '1px solid rgba(249, 115, 22, 0.15)' }}
            >
              <p className="font-bold text-sm mb-2" style={{ color: 'var(--accent-primary)' }}>
                4. L&apos;AI assiste, voi decidete
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                L&apos;AI è uno strumento, non un sostituto del giudizio. Voi conoscete il contesto.
                Le decisioni importanti restano vostre.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom */}
        <AnimatedSection delay={0.1}>
          <div className="quote-block max-w-3xl mx-auto p-6 rounded-2xl">
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              Questo era il percorso. Ora è il momento di capire{' '}
              <strong style={{ color: 'var(--accent-primary)' }}>come presentare queste competenze</strong>{' '}
              nel CV, su LinkedIn, e nei colloqui.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
