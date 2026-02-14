'use client';

import { AnimatedSection } from '@/components/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RecapSection() {
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
              Un viaggio completo attraverso tutto quello che abbiamo affrontato nel corso &mdash; dai fondamenti teorici alle applicazioni pratiche che potete usare domani.
            </p>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO A — Cos'è l'AI                                        */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                A
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Cos&apos;è l&apos;AI e come funziona
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Siamo partiti dalla domanda fondamentale: <strong style={{ color: 'var(--text-primary)' }}>cos&apos;è realmente l&apos;AI che usate ogni giorno?</strong> La
                risposta, forse sorprendente, è che non si tratta di intelligenza nel senso umano.
                I Large Language Model (come GPT, Claude, Gemini) fanno una cosa sola, ripetuta miliardi
                di volte: <strong style={{ color: 'var(--text-primary)' }}>predicono la parola successiva</strong>. Funzionano come il T9 dei
                vecchi cellulari, ma a un livello di sofisticazione inimmaginabilmente maggiore.
              </p>

              <p>
                Abbiamo capito la differenza tra <strong style={{ color: 'var(--text-primary)' }}>AI tradizionale</strong> (che classifica: spam/non spam,
                gatto/cane) e <strong style={{ color: 'var(--text-primary)' }}>AI generativa</strong> (che crea contenuti nuovi: testo, immagini, audio). L&apos;AI
                generativa è il sottoinsieme più recente, reso possibile dall&apos;architettura Transformer
                (2017) e da quantità enormi di dati e potenza di calcolo.
              </p>

              <p>
                Il concetto chiave che ritorna in tutto il corso è quello del <strong style={{ color: 'var(--text-primary)' }}>&quot;pappagallo stocastico&quot;</strong>:
                l&apos;AI ripete pattern che ha visto, non &quot;capisce&quot; quello che dice. Quando sembra
                empatica, intelligente, o creativa, sta replicando pattern di empatia, intelligenza
                e creatività che ha trovato nei dati di addestramento. Questo spiega le <strong style={{ color: 'var(--text-primary)' }}>allucinazioni</strong>:
                l&apos;AI può inventare fatti con assoluta sicurezza, perché genera testo che <em>suona</em> plausibile,
                non testo che <em>è</em> vero.
              </p>

              <p>
                Infine abbiamo distinto tre strumenti diversi che la gente confonde:
                un <strong style={{ color: 'var(--text-primary)' }}>motore di ricerca</strong> (Google) trova documenti,
                un <strong style={{ color: 'var(--text-primary)' }}>LLM</strong> (ChatGPT, Claude) genera risposte, e
                un <strong style={{ color: 'var(--text-primary)' }}>motore di risposta</strong> (Perplexity) fa entrambe le cose mostrando le fonti.
                Sapere quando usare quale è una competenza pratica importante.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  MODULO B — Dal modello al prodotto                           */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                B
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Dal modello al prodotto
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Un concetto fondamentale: <strong style={{ color: 'var(--text-primary)' }}>GPT-5 non è ChatGPT</strong>. GPT-5 è il motore, ChatGPT è
                l&apos;auto completa. Ogni prodotto AI è composto da tre strati:
              </p>

              <div className="glass-card p-5 my-4 font-mono text-sm text-center" style={{ color: 'var(--text-primary)' }}>
                <div className="mb-2 p-2 rounded" style={{ background: 'rgba(249, 115, 22, 0.08)' }}>
                  <strong>Interfaccia</strong> &mdash; quello che vedete (chat, app, sidebar)
                </div>
                <div className="mb-2 p-2 rounded" style={{ background: 'rgba(249, 115, 22, 0.12)' }}>
                  <strong>Orchestrazione</strong> &mdash; memoria, tool, web, sicurezza
                </div>
                <div className="p-2 rounded" style={{ background: 'rgba(249, 115, 22, 0.18)' }}>
                  <strong>Modello</strong> &mdash; il &quot;cervello&quot; che predice le parole
                </div>
              </div>

              <p>
                Questa distinzione vi spiega perché <strong style={{ color: 'var(--text-primary)' }}>lo stesso modello in prodotti diversi si comporta diversamente</strong>:
                GPT in ChatGPT non è uguale a GPT in Copilot, perché l&apos;orchestrazione è diversa.
                Vi spiega anche perché ChatGPT può fare cose che il modello &quot;puro&quot; non può:
                cercare sul web, eseguire codice, generare immagini &mdash; sono tutte funzionalità aggiunte
                dallo strato di orchestrazione, non dal modello.
              </p>

              <p>
                Abbiamo anche visto la differenza tra <strong style={{ color: 'var(--text-primary)' }}>cloud e on-device</strong>: la maggior parte
                dei modelli potenti gira sui server del provider (i vostri dati viaggiano su internet),
                mentre alcuni modelli più piccoli girano direttamente sul vostro dispositivo (privacy totale
                ma meno capaci). Apple Intelligence e Gemini Nano sono esempi di AI on-device.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  MODULO C — I prodotti                                        */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                C
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                I prodotti che usate
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Abbiamo creato account e imparato ad orientarci nei quattro chatbot principali, ognuno con punti di forza diversi:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="glass-card p-4">
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>ChatGPT</p>
                  <p className="text-sm">Il più usato (900M utenti/settimana). Ecosistema ricchissimo: Agent, memoria, GPT Store, connettori. Il &quot;coltellino svizzero&quot;.</p>
                </div>
                <div className="glass-card p-4">
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Claude</p>
                  <p className="text-sm">Migliore per documenti lunghi e coding. Interfaccia pulita, Projects per lavoro persistente, Artifacts per visualizzare output.</p>
                </div>
                <div className="glass-card p-4">
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Gemini</p>
                  <p className="text-sm">Integrazione nativa con Google: @Gmail, @Drive, @Calendar. Generative Interfaces uniche. Perfetto per chi usa l&apos;ecosistema Google.</p>
                </div>
                <div className="glass-card p-4">
                  <p className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Copilot</p>
                  <p className="text-sm">Gratuito in Windows e Edge. Copilot dentro Office (Word, Excel, Teams) richiede licenze enterprise &mdash; ma il chatbot base è gratis.</p>
                </div>
              </div>

              <p>
                Punto importante: <strong style={{ color: 'var(--text-primary)' }}>i piani gratuiti hanno limiti severi</strong> ma
                sono sufficienti per iniziare. A $20/mese si sbloccano modelli migliori e limiti più alti.
                $200/mese (ChatGPT Pro) è per chi lo usa intensamente tutto il giorno &mdash;
                per la maggior parte delle persone non serve. Abbiamo anche visto tool specializzati
                come <strong style={{ color: 'var(--text-primary)' }}>Perplexity</strong> per la ricerca con fonti
                e <strong style={{ color: 'var(--text-primary)' }}>NotebookLM</strong> per analizzare i vostri documenti.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  MODULO D — Come comunicare con l'AI                          */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                D
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Come comunicare con l&apos;AI
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Il prompting non è magia e non servono trucchi segreti. È una <strong style={{ color: 'var(--text-primary)' }}>competenza di comunicazione</strong>:
                saper spiegare chiaramente cosa volete a un interlocutore molto capace ma privo di contesto.
                L&apos;AI è come un collega nuovo appena arrivato: bravissimo, ma non sa nulla della vostra
                situazione specifica.
              </p>

              <p>
                La struttura base che funziona sempre è <strong style={{ color: 'var(--text-primary)' }}>Contesto + Istruzione + Formato</strong>:
                date le informazioni di sfondo necessarie, dite chiaramente cosa deve fare, e specificate come volete la risposta.
                Non servono sempre tutti e tre, ma per compiti importanti fare questo sforzo fa un&apos;enorme differenza.
              </p>

              <div className="glass-card p-5 my-4">
                <p className="text-sm font-bold mb-3" style={{ color: 'var(--accent-primary)' }}>La differenza in pratica:</p>
                <div className="mb-3 p-3 rounded" style={{ background: 'rgba(239, 68, 68, 0.06)', borderLeft: '3px solid var(--color-error)' }}>
                  <p className="text-sm"><strong>Vago:</strong> &quot;Scrivi un&apos;email&quot;</p>
                </div>
                <div className="p-3 rounded" style={{ background: 'rgba(34, 197, 94, 0.06)', borderLeft: '3px solid var(--color-success)' }}>
                  <p className="text-sm"><strong>Specifico:</strong> &quot;Scrivi un&apos;email di sollecito pagamento a Tecnologie Srl, fattura 2024/456 da 1.200&euro; scaduta da 15 giorni. Tono cortese ma fermo, max 10 righe.&quot;</p>
                </div>
              </div>

              <p>
                Abbiamo poi approfondito i componenti utili: il <strong style={{ color: 'var(--text-primary)' }}>ruolo</strong> (&quot;Sei un recruiter
                con 15 anni di esperienza...&quot;), gli <strong style={{ color: 'var(--text-primary)' }}>esempi</strong> (mostrate quello che volete
                invece di descriverlo), i <strong style={{ color: 'var(--text-primary)' }}>vincoli</strong> (&quot;non usare gergo tecnico, max 300 parole&quot;),
                e soprattutto l&apos;<strong style={{ color: 'var(--text-primary)' }}>iterazione</strong>: il primo prompt raramente è perfetto,
                e affinare chiedendo modifiche (&quot;più breve&quot;, &quot;tono più formale&quot;, &quot;aggiungi esempi&quot;) è il modo
                normale di lavorare con l&apos;AI.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  MODULO E — Privacy e responsabilità                          */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                E
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Privacy e responsabilità
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Quando usate un&apos;AI in cloud, i vostri dati viaggiano sui server del provider. Abbiamo
                distinto due concetti fondamentali: <strong style={{ color: 'var(--text-primary)' }}>inference</strong> (il modello elabora la
                vostra richiesta &mdash; inevitabile, è il servizio) e <strong style={{ color: 'var(--text-primary)' }}>training</strong> (i vostri
                dati vengono usati per migliorare il modello &mdash; opzionale, disattivabile).
              </p>

              <p>
                La distinzione più importante del modulo: <strong style={{ color: 'var(--text-primary)' }}>uso personale vs uso lavorativo</strong>.
                Se i dati sono vostri, decidete voi il rischio. Ma se sono dati aziendali, di clienti o
                di pazienti, <strong style={{ color: 'var(--text-primary)' }}>non potete caricarli su servizi AI consumer senza autorizzazione</strong>.
                Potreste violare la policy aziendale, accordi di riservatezza (NDA), e il GDPR.
              </p>

              <div
                className="quote-block p-5 my-4 rounded-xl"
                style={{ borderLeft: '4px solid var(--color-warning)' }}
              >
                <p className="text-sm leading-relaxed" style={{ fontStyle: 'normal' }}>
                  <strong>La regola d&apos;oro:</strong> Se il dato non è vostro, non caricatelo su servizi AI consumer
                  senza autorizzazione esplicita. Non è paranoia &mdash; è professionalità. E in molti casi, è la legge.
                </p>
              </div>

              <p>
                Abbiamo anche toccato il <strong style={{ color: 'var(--text-primary)' }}>GDPR</strong> (minimizzazione, trasparenza, diritto
                di cancellazione) e l&apos;<strong style={{ color: 'var(--text-primary)' }}>AI Act europeo</strong>, in vigore dal febbraio 2025, che
                introduce l&apos;obbligo di &quot;AI literacy&quot; per chi usa sistemi di AI &mdash; esattamente quello che
                questo corso vi dà.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Transition to practical modules */}
        <AnimatedSection delay={0.05}>
          <div
            className="p-6 rounded-2xl mb-16 text-center"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Con i moduli A-E avete acquisito i <strong style={{ color: 'var(--accent-primary)' }}>fondamenti</strong>: sapete cos&apos;è l&apos;AI,
              come funziona, quali strumenti usare, come comunicare efficacemente, e come farlo in modo responsabile.
              <br />
              Con i moduli F-J siamo passati alle <strong style={{ color: 'var(--accent-primary)' }}>applicazioni pratiche</strong>.
            </p>
          </div>
        </AnimatedSection>

        {/* ============================================================ */}
        {/*  MODULO F — Scrittura                                         */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                F
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Scrittura, ricerca e documenti
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Il primo modulo pratico ha stabilito il <strong style={{ color: 'var(--text-primary)' }}>workflow fondamentale</strong> per
                lavorare con l&apos;AI nella scrittura: Idea &rarr; Scaletta AI &rarr; Bozza AI &rarr; Revisione umana &rarr; Finale.
                La regola d&apos;oro: <em>&quot;L&apos;AI scrive la bozza, voi scrivete la versione finale.&quot;</em>
                Mai pubblicare output AI senza review.
              </p>

              <p>
                Abbiamo imparato i <strong style={{ color: 'var(--text-primary)' }}>6 prompt fondamentali</strong> che coprono il 90% dei
                casi d&apos;uso nella scrittura: brainstorming, scaletta, bozza, editing, cambio tono, sintesi.
                Con questi sei &quot;attrezzi&quot; potete gestire email, report, presentazioni, CV e cover letter.
              </p>

              <p>
                Punto cruciale per la carriera: <strong style={{ color: 'var(--text-primary)' }}>un CV per ogni lavoro</strong>.
                Non mandate lo stesso CV a tutti &mdash; prendete l&apos;annuncio, estraete le keyword,
                e chiedete all&apos;AI di personalizzare il vostro CV base usando quelle parole chiave.
                Abbiamo anche visto <strong style={{ color: 'var(--text-primary)' }}>Perplexity</strong> per la ricerca con fonti verificabili
                e <strong style={{ color: 'var(--text-primary)' }}>NotebookLM</strong> per far analizzare all&apos;AI i vostri documenti senza
                che escano dal vostro spazio personale.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  MODULO G — Voce e audio                                      */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                G
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Voce e audio
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                L&apos;AI vocale si basa su tre componenti: <strong style={{ color: 'var(--text-primary)' }}>Speech-to-Text</strong> (trasforma
                audio in testo &mdash; la trascrizione), <strong style={{ color: 'var(--text-primary)' }}>Text-to-Speech</strong> (trasforma testo in
                audio &mdash; la sintesi vocale), e il <strong style={{ color: 'var(--text-primary)' }}>modello linguistico</strong> che capisce e risponde.
                Il voice mode di ChatGPT li usa tutti e tre in sequenza rapida.
              </p>

              <p>
                L&apos;applicazione più utile per il lavoro è la <strong style={{ color: 'var(--text-primary)' }}>trascrizione automatica dei meeting</strong>:
                tool come Fireflies o tl;dv entrano nella videochiamata, trascrivono tutto, e distinguono
                chi sta parlando (speaker diarization). Potete concentrarvi sulla discussione
                invece di prendere appunti, e poi chiedere all&apos;AI di estrarre i punti chiave e gli action item.
              </p>

              <p>
                Abbiamo anche visto il <strong style={{ color: 'var(--text-primary)' }}>voice cloning</strong> e i suoi rischi:
                con pochi secondi di audio si può replicare una voce. Questo rende possibili truffe vocali
                (qualcuno che &quot;simula&quot; la voce del vostro capo). La regola: <strong style={{ color: 'var(--text-primary)' }}>mai fidarsi solo di una voce</strong> per
                decisioni importanti &mdash; verificate sempre con un altro canale.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  MODULO H — Visual                                            */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                H
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Visual &mdash; immagini e video
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                L&apos;ecosistema dell&apos;AI visual si organizza su <strong style={{ color: 'var(--text-primary)' }}>tre livelli</strong>:
                il <strong style={{ color: 'var(--text-primary)' }}>modello</strong> (es. FLUX, Stable Diffusion, Kling),
                l&apos;<strong style={{ color: 'var(--text-primary)' }}>interfaccia</strong> che lo rende utilizzabile (es. Leonardo.ai, Microsoft Designer),
                e gli <strong style={{ color: 'var(--text-primary)' }}>aggregatori</strong> che ne raccolgono molti in un unico posto (es. Krea, Freepik).
                Lo stesso modello su piattaforme diverse produce risultati diversi, perché l&apos;interfaccia e
                i parametri cambiano.
              </p>

              <p>
                Per i prompt visivi la regola è: <strong style={{ color: 'var(--text-primary)' }}>soggetto + azione + ambiente + luce + stile + formato</strong>.
                Non &quot;una persona&quot; ma &quot;donna professionale in ufficio, luce naturale, stile fotografico corporate, 16:9&quot;.
                Più siete precisi nella descrizione, più il risultato sarà vicino a quello che volete.
              </p>

              <p>
                Per la <strong style={{ color: 'var(--text-primary)' }}>foto profilo professionale</strong> abbiamo scelto l&apos;approccio responsabile: migliorate le
                vostre vere foto (rimuovete lo sfondo con remove.bg, aggiungete sfondo professionale con
                Canva), non generate profili fake con AI. I tool gratuiti consigliati:
                Microsoft Designer per chi inizia, Leonardo.ai (150 crediti/giorno gratis) per chi vuole
                più controllo, Pika per video semplici.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  MODULO I — Excel e dati                                      */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                I
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Excel e dati
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                L&apos;AI ha cambiato il paradigma: non dovete più memorizzare &quot;come si fa CERCA.VERT?&quot;,
                ma descrivete cosa volete (&quot;ho questa tabella, voglio questo risultato&quot;) e <strong style={{ color: 'var(--text-primary)' }}>l&apos;AI scrive
                la formula per voi</strong>. Gemini è già integrato in Google Sheets, Copilot è in Excel &mdash;
                l&apos;AI è <em>dentro</em> i fogli, non serve aprire ChatGPT separatamente.
              </p>

              <p>
                Concetto fondamentale: <strong style={{ color: 'var(--text-primary)' }}>garbage in, garbage out</strong>.
                Se i dati sono sporchi (duplicati, errori, formati incoerenti), l&apos;analisi sarà sbagliata.
                L&apos;AI è bravissima a generare formule e grafici, ma non può sapere se i vostri dati
                hanno problemi &mdash; quello è il vostro lavoro.
              </p>

              <p>
                Due strumenti chiave: <strong style={{ color: 'var(--text-primary)' }}>Flash Fill</strong> (Ctrl+E in Excel) &mdash; mostrate un
                esempio di trasformazione e Excel capisce il pattern e lo applica a tutto.
                E il <strong style={{ color: 'var(--text-primary)' }}>Code Interpreter</strong> di ChatGPT: caricate un file Excel, l&apos;AI
                lo analizza, lo pulisce, crea grafici e statistiche &mdash; tutto senza che voi scriviate
                una riga di codice. Dovete solo verificare che i risultati abbiano senso.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  MODULO J — Automazioni, agenti e creazione                   */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: 'var(--accent-primary)', color: '#fff' }}
              >
                J
              </span>
              <h3
                className="text-2xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                Automazioni, agenti e creazione
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Siamo partiti dalle <strong style={{ color: 'var(--text-primary)' }}>API</strong>, i &quot;camerieri&quot; del mondo digitale:
                portano ordini tra software diversi. Le usate già ogni giorno senza saperlo (quando Google Maps
                mostra il traffico, chiede dati via API). Capire che esistono vi permette di capire come
                i tool si collegano tra loro.
              </p>

              <p>
                Distinzione pratica importante: un <strong style={{ color: 'var(--text-primary)' }}>connettore</strong> è quando l&apos;AI accede a
                un servizio quando <em>voi</em> glielo chiedete (es. &quot;cerca nel mio Drive&quot;). Un&apos;<strong style={{ color: 'var(--text-primary)' }}>automazione</strong> è
                quando lavora da sola al verificarsi di un evento (es. &quot;ogni volta che arriva un&apos;email
                da un cliente, salva l&apos;allegato in Drive e aggiorna il foglio&quot;). La logica
                base è sempre <strong style={{ color: 'var(--text-primary)' }}>trigger &rarr; azione</strong>: quando succede X, fai Y.
              </p>

              <p>
                Ma attenzione al <strong style={{ color: 'var(--text-primary)' }}>ROI</strong>: automatizzate solo se il tempo risparmiato
                supera il tempo di setup. Se ci mettete 3 ore a creare un&apos;automazione che vi fa risparmiare
                5 minuti al mese, non ha senso. Tool come <strong style={{ color: 'var(--text-primary)' }}>Make e Zapier</strong> rendono le automazioni
                accessibili senza codice, con interfacce visuali drag-and-drop.
              </p>

              <p>
                Infine, la differenza tra <strong style={{ color: 'var(--text-primary)' }}>chatbot e agente</strong>: un chatbot risponde alle
                vostre domande, un agente <em>pianifica e agisce</em>. Gli date un obiettivo (&quot;trova 10 fornitori
                di X con prezzi competitivi&quot;) e lui decide quali passi fare. E il <strong style={{ color: 'var(--text-primary)' }}>vibe coding</strong>:
                descrivete un&apos;applicazione a parole e tool come Lovable, v0 o Claude Artifacts la
                costruiscono per voi &mdash; utile per prototipi veloci, non per produzione.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="section-divider max-w-xs my-8" />

        {/* ============================================================ */}
        {/*  CONCETTI TRASVERSALI                                         */}
        {/* ============================================================ */}
        <AnimatedSection delay={0.05}>
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              I 4 principi che attraversano tutto il corso
            </h3>

            <p
              className="text-base leading-relaxed mb-8 text-center"
              style={{ color: 'var(--text-secondary)' }}
            >
              Alcuni principi si ripetono in ogni modulo. Sono la vera base di tutto.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(249, 115, 22, 0.04)',
                  border: '1px solid rgba(249, 115, 22, 0.15)',
                }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--accent-primary)' }}>
                  1. Verificate sempre
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  L&apos;AI può sbagliare, in ogni ambito. Mai pubblicare testi senza rileggere, mai fidarsi di fatti
                  senza controllarli, mai applicare formule senza testarle su casi semplici, mai attivare
                  automazioni senza farle girare in test.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(249, 115, 22, 0.04)',
                  border: '1px solid rgba(249, 115, 22, 0.15)',
                }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--accent-primary)' }}>
                  2. Partite dal semplice
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Tool gratuiti prima dei costosi. Funzionalità base prima delle avanzate.
                  Casi a basso rischio prima di quelli critici. Non serve il piano da $200/mese
                  per iniziare &mdash; la versione gratuita è sufficiente per la maggior parte degli usi.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(249, 115, 22, 0.04)',
                  border: '1px solid rgba(249, 115, 22, 0.15)',
                }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--accent-primary)' }}>
                  3. Privacy sempre
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Non caricate dati sensibili (clienti, pazienti, finanziari) su AI cloud.
                  Anonimizzate prima di analizzare. Capite cosa i connettori possono vedere:
                  se collegate Gmail, l&apos;AI può leggere tutte le email. Per aziende: piani enterprise.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(249, 115, 22, 0.04)',
                  border: '1px solid rgba(249, 115, 22, 0.15)',
                }}
              >
                <h4 className="font-bold text-lg mb-3" style={{ color: 'var(--accent-primary)' }}>
                  4. L&apos;AI assiste, voi decidete
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  L&apos;AI è uno strumento, non un sostituto del vostro giudizio.
                  Voi conoscete il contesto (cultura aziendale, persone, politiche) &mdash; l&apos;AI no.
                  Le decisioni importanti restano vostre. Se qualcosa va storto, rispondete voi.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom callout */}
        <AnimatedSection delay={0.1}>
          <div
            className="quote-block max-w-3xl mx-auto mt-12 p-6 rounded-2xl"
          >
            <p
              className="text-base leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)', fontStyle: 'normal' }}
            >
              Questo era il viaggio. Dai fondamenti dell&apos;AI alle applicazioni pratiche, avete acquisito
              una comprensione completa di come usare questi strumenti.
              <br />
              Ora è il momento di capire <strong style={{ color: 'var(--accent-primary)' }}>come presentare queste competenze</strong> nel CV, su LinkedIn, e nei colloqui.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
