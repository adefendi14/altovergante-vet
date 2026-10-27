import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import SectionHeader from '../components/SectionHeader'
import {
  aboutGallery,
  clinicSpaces,
  companyStats,
  companyValues,
  copy,
} from '../data'

export default function LaClinica() {
  const content = copy.about

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <SectionHeader kicker={content.kicker} title={content.title} />
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-16">
          <Placeholder
            label={content.imageAlt}
            src={content.imageSrc}
            alt={content.imageAlt}
            ratio="4 / 3"
            className="group"
          />
          <div>
            <p className="text-[1.05rem] leading-relaxed text-ink/75">{content.p1}</p>
            <p className="mt-4 leading-relaxed text-ink/70">
              {content.p2Before}
              <strong className="font-semibold text-ink">{content.p2Strong}</strong>
              {content.p2After}
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">{content.p3}</p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              {companyStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-ink">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-12 md:grid-cols-3 md:px-8 md:pb-20">
          {aboutGallery.map((photo) => (
            <figure key={photo.src}>
              <Placeholder
                label={photo.alt}
                src={photo.src}
                alt={photo.alt}
                ratio="4 / 3"
                className="group"
              />
              <figcaption className="mt-3">
                <p className="text-sm font-semibold text-ink">{photo.caption}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{photo.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeader
            kicker="Ambienti"
            title="Organizzazione della struttura"
            lead="Dal parcheggio al giardino, ogni spazio è pensato per accogliere e curare al meglio."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {clinicSpaces.map((item) => (
              <article key={item.title} className="rounded-2xl border border-ink/8 bg-sand px-6 py-6">
                <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeader kicker={copy.values.kicker} title={copy.values.title} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((item) => (
              <article key={item.name} className="rounded-2xl border border-ink/8 bg-cream px-5 py-6">
                <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/contatti#prenota"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
            >
              {copy.cta.quote}
            </Link>
            <Link
              to="/degenza"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-terracotta"
            >
              {copy.degenza.viewAll}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
