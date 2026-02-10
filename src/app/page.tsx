import { AnimatedSection } from '@/components/AnimatedSection';
import MindsetSection from '@/components/MindsetSection';
import APISection from '@/components/APISection';
import AutomationToolsSection from '@/components/AutomationToolsSection';
import AIAutomationSection from '@/components/AIAutomationSection';
import ConnectorsSection from '@/components/ConnectorsSection';
import AgentsSection from '@/components/AgentsSection';
import MCPSection from '@/components/MCPSection';
import VibeCodingSection from '@/components/VibeCodingSection';
import ExercisesSection from '@/components/ExercisesSection';

export default function ModuloJ() {
  return (
    <main className="gradient-mesh min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-4">MODULO J</p>
            <h1 className="heading-hero mb-6">
              Automazioni, <span className="text-gradient">Agenti</span> e Creazione
            </h1>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
              L&apos;AI non e solo chat: puo lavorare per voi in background,
              collegare i vostri strumenti, e persino creare software.
              Senza scrivere una riga di codice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="quote-block">
              <strong>TL;DR</strong> — Le automazioni risparmiano ore di lavoro ripetitivo.
              Le API sono il modo in cui i software parlano tra loro (pensate al cameriere del ristorante).
              Gli agenti AI sono la prossima evoluzione: non rispondono solo, agiscono.
              E con il &quot;vibe coding&quot; potete creare app e siti web descrivendoli a parole.
              Questo modulo vi porta da zero a operativi.
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider max-w-xl my-12" />

      {/* J.1 - Il Mindset dell'Automazione */}
      <section id="mindset" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">J.1</p>
            <h2 className="heading-section mb-4">Il Mindset dell&apos;Automazione</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              Trigger, condizione, azione: la logica universale di ogni automazione.
              E quando ha senso automatizzare (e quando no).
            </p>
          </AnimatedSection>
          <MindsetSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* J.2 - Le API spiegate semplice */}
      <section id="api" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">J.2</p>
            <h2 className="heading-section mb-4">Le API spiegate semplice</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              Come i software parlano tra loro: la metafora del ristorante,
              le API nella vita quotidiana, e cosa significa per voi.
            </p>
          </AnimatedSection>
          <APISection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* J.3 - Strumenti di automazione */}
      <section id="strumenti" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">J.3</p>
            <h2 className="heading-section mb-4">Strumenti di automazione</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              Da Zapier a Make, da Power Automate a n8n.
              Piu le automazioni native che gia avete (e forse non usate).
            </p>
          </AnimatedSection>
          <AutomationToolsSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* J.4 - AI nelle automazioni */}
      <section id="ai-automazioni" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">J.4</p>
            <h2 className="heading-section mb-4">AI nelle automazioni</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              L&apos;AI capisce l&apos;intento, non solo le parole chiave.
              Classificare email, estrarre dati da fatture, generare contenuti: tre superpoteri.
            </p>
          </AnimatedSection>
          <AIAutomationSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* J.4B - Connettori */}
      <section id="connettori" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">J.4B</p>
            <h2 className="heading-section mb-4">Connettori: l&apos;AI collegata ai vostri strumenti</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              Non dovete piu copiare e incollare: l&apos;AI puo accedere
              direttamente alle vostre email, documenti e calendario.
            </p>
          </AnimatedSection>
          <ConnectorsSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* J.5 - Agenti AI */}
      <section id="agenti" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-2">J.5</p>
            <h2 className="heading-section mb-4">Agenti AI</h2>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl">
              Non solo rispondono: pianificano, agiscono, verificano.
              Da Netflix e Google Maps ai nuovi agenti nei chatbot.
            </p>
          </AnimatedSection>
          <AgentsSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* J.6 - GPT Actions & MCP */}
      <MCPSection />

      <div className="section-divider max-w-xl my-4" />

      {/* J.7-J.8 - Vibe Coding */}
      <VibeCodingSection />

      <div className="section-divider max-w-xl my-4" />

      {/* J.9-J.11 - Esercizi Pratici */}
      <ExercisesSection />

      {/* Key Takeaways */}
      <section className="py-16 px-6 bg-[var(--bg-elevated)]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-subsection mb-8">Key Takeaways</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { n: '1', text: 'Trigger → Condizione → Azione — La logica universale di ogni automazione, dalla sveglia a Make' },
                { n: '2', text: 'Le API sono camerieri — Portano ordini tra software. Non dovete cucinare, basta saper ordinare' },
                { n: '3', text: 'L\'AI capisce l\'intento — Classifica email, estrae dati, genera contenuti: fa cio che i filtri tradizionali non possono' },
                { n: '4', text: 'Connettori ≠ Automazioni — Il connettore risponde quando chiedete; l\'automazione lavora da sola' },
                { n: '5', text: 'Gli agenti pianificano e agiscono — Non solo rispondono: scompongono obiettivi, usano strumenti, verificano' },
                { n: '6', text: 'MCP = USB-C dell\'AI — Uno standard per collegare qualsiasi AI a qualsiasi strumento' },
                { n: '7', text: 'Vibe coding: descrivete, create — Dal convertitore di temperatura al sito web, senza scrivere codice' },
                { n: '8', text: 'Partite dal basso rischio — Prima monitoraggio e ricerca, poi analisi, infine azioni con conseguenze reali' },
              ].map((item) => (
                <div key={item.n} className="glass-card p-4 flex gap-3">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--accent-primary)' }}
                  >
                    {item.n}
                  </span>
                  <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-subsection mb-6">Per approfondire</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--accent-primary)]">Automazione</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Zapier
                    </a>{' '}
                    — 7.000+ integrazioni
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://make.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Make
                    </a>{' '}
                    — Visual workflow builder
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://n8n.io" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      n8n
                    </a>{' '}
                    — Open source, self-hosted
                  </li>
                </ul>
              </div>

              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--accent-primary)]">Vibe Coding</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Replit
                    </a>{' '}
                    — Agent + deploy immediato
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Lovable
                    </a>{' '}
                    — Il piu accessibile
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Claude Artifacts
                    </a>{' '}
                    — Demo in 2 minuti, gratis
                  </li>
                </ul>
              </div>

              <div className="glass-card p-5">
                <h4 className="font-semibold mb-3 text-[var(--color-success)]">Agenti e MCP</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>
                    &bull;{' '}
                    <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      MCP Docs
                    </a>{' '}
                    — Documentazione ufficiale
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      ChatGPT Connectors
                    </a>{' '}
                    — Connettori integrati
                  </li>
                  <li>
                    &bull;{' '}
                    <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-primary)] hover:underline">
                      Gemini Deep Research
                    </a>{' '}
                    — Agente di ricerca
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[var(--text-muted)] mb-4">Fine Modulo J</p>
          <p className="text-[var(--text-secondary)]">
            Avete completato il modulo. Ora automatizzate, sperimentate, create.
          </p>
        </div>
      </footer>
    </main>
  );
}
