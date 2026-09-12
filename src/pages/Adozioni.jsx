import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import SectionHeader from '../components/SectionHeader'
import { adoptions, company, copy } from '../data'

export default function Adozioni() {
  const content = copy.adoptions

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {adoptions.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-ink/8 bg-sand">
              <Placeholder
                label={item.title}
                src={item.image}
                alt={item.title}
                ratio="4 / 3"
                rounded="rounded-none"
                className="group"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-ink/65">{item.excerpt}</p>
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent(`Adozione: ${item.title}`)}`}
                  className="mt-5 inline-flex text-sm font-semibold text-terracotta transition-colors duration-300 hover:text-ink"
                >
                  Chiedi informazioni →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-ink/8 bg-sand/70 px-6 py-8 md:px-10">
          <h3 className="text-2xl font-semibold text-ink">{content.propose}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">
            Avete un animale in cerca di casa? Scriveteci: valuteremo insieme come segnalarlo in
            ambulatorio.
          </p>
          <Link
            to="/contatti#prenota"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
          >
            {content.propose}
          </Link>
        </div>
      </div>
    </section>
  )
}
