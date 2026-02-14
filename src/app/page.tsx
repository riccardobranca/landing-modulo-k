import { AnimatedSection } from '@/components/AnimatedSection';
import RecapSection from '@/components/RecapSection';
import SkillsInventorySection from '@/components/SkillsInventorySection';
import ATSSection from '@/components/ATSSection';
import LearningSection from '@/components/LearningSection';
import HybridFutureSection from '@/components/HybridFutureSection';
import AIInCompanySection from '@/components/AIInCompanySection';

export default function ModuloK() {
  return (
    <main className="gradient-mesh min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-mono text-[var(--accent-primary)] mb-4">MODULO K</p>
            <h1 className="heading-hero mb-6">
              Carriera e <span className="text-gradient">Chiusura</span>
            </h1>
            <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
              Avete completato il percorso. Ora è il momento di presentare queste competenze
              nel CV e nei colloqui, superare i filtri ATS, e continuare a imparare.
              Il futuro è ibrido: umani CON macchine, non contro.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="quote-block">
              <strong>TL;DR</strong> — Avete acquisito competenze concrete in prompt engineering,
              AI generativa, analisi dati, automazione. Questo modulo inizia con un riassunto
              dei concetti chiave, poi vi aiuta a presentarli nel CV, superare gli ATS,
              e continuare a imparare. L&apos;AI amplifica le vostre capacità: saperla usare
              è la competenza che fa la differenza.
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* K.0 — Riassunto */}
      <section id="riassunto" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <RecapSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* K.1 — Competenze */}
      <section id="competenze" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SkillsInventorySection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* K.3 — ATS */}
      <section id="ats" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ATSSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* K.4 — Imparare */}
      <section id="imparare" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <LearningSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* K.5 — Futuro */}
      <section id="futuro" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <HybridFutureSection />
        </div>
      </section>

      <div className="section-divider max-w-xl my-4" />

      {/* K.6 — AI in azienda */}
      <section id="ai-azienda" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AIInCompanySection />
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-6 bg-[var(--bg-elevated)]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-subsection mb-8">Key Takeaways</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { n: '1', text: 'I 4 principi trasversali — Verificate sempre, partite dal semplice, privacy prima di tutto, l\'AI assiste ma voi decidete' },
                { n: '2', text: 'Competenze concrete da 5 moduli — Scrittura, Voce, Visual, Dati, Automazioni. Sapete quantificarle e presentarle' },
                { n: '3', text: 'CV ottimizzato per ATS — Usate le stesse parole dell\'annuncio, formato semplice. Verificate con Teal/Jobscan (target: 75%+)' },
                { n: '4', text: 'Nei colloqui: esempi concreti — Non "so usare l\'AI" ma "uso ChatGPT per X, riducendo il tempo del 40%"' },
                { n: '5', text: 'Utenti competenti, non esperti tecnici — Sapete usare gli strumenti, capite i limiti, ottenete risultati' },
                { n: '6', text: 'ATS: il primo filtro è un software — Se non passate il parsing (99% grandi aziende), nessun umano vedrà il CV' },
                { n: '7', text: 'Copilot e Gemini li incontrerete — Saper dire "ho familiarità con AI integrata" è un vantaggio' },
                { n: '8', text: 'Imparare semplice — YouTube italiano, giornali, chiedere all\'AI. Evitate guru con promesse esagerate' },
                { n: '9', text: 'Il futuro è ibrido, non competitivo — Umani CON macchine. Giudizio, relazioni, creatività restano umani' },
                { n: '10', text: 'Voi siete il pilota — La responsabilità, il contesto, le decisioni importanti restano sempre vostre' },
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

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-subtle)]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[var(--text-muted)] mb-4">Fine Modulo K — Fine Corso</p>
          <p className="text-[var(--text-secondary)] mb-6">
            Congratulazioni per aver completato il percorso. Avete acquisito competenze concrete
            che la maggior parte delle persone non ha. Ora è il momento di metterle in pratica:
            ottimizzate il CV, candidatevi con fiducia, e continuate a esplorare.
            L&apos;AI è uno strumento potente — voi sapete usarlo bene.
          </p>
          <p className="text-sm" style={{ color: 'var(--accent-primary)' }}>
            In bocca al lupo 🚀
          </p>
        </div>
      </footer>
    </main>
  );
}
