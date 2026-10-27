import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { copy, preventionPaths } from '../data'

export default function Prevenzione() {
  const content = copy.prevention

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} align="center" />

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/35 bg-sand/80 px-6 py-5 text-sm leading-relaxed text-ink/75">
          Nella nostra struttura seguiamo le linee guida internazionali WSAVA per la profilassi
          vaccinale. Oggi le prevenzioni sono fondamentali: siamo al vostro fianco per spiegare, con
          tutto il tempo necessario, come procedere in modo semplice ed efficace.
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {preventionPaths.map((path) => (
            <article key={path.id} id={path.id} className="scroll-mt-28 rounded-2xl border border-ink/8 bg-sand/50 px-7 py-8">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">{path.title}</h2>
              <p className="mt-4 leading-relaxed text-ink/70">{path.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {path.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-gold/40 bg-cream px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-ink/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contatti#prenota"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
          >
            {copy.cta.quote}
          </Link>
        </div>
      </div>
    </section>
  )
}
