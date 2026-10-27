import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import SectionHeader from '../components/SectionHeader'
import { asset } from '../lib/assets'
import { copy, degenzaPoints } from '../data'

export default function Degenza() {
  const content = copy.degenza

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} />
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-16">
          <Placeholder
            label="Area degenza"
            src={asset('images/gallery/laboratorio.jpg')}
            alt="Area degenza della clinica"
            ratio="4 / 3"
            className="group"
          />
          <div>
            <p className="text-[1.05rem] leading-relaxed text-ink/75">
              Nella clinica abbiamo due degenze, una per cani e una per gatti. In entrambe c’è una
              vasca in acciaio inox dove possiamo lavare comodamente i nostri amici in caso di
              necessità, come lavaggi medicati prima di chirurgie o semplicemente per mantenerli
              puliti durante i ricoveri.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Essendo una clinica diurna ci occupiamo prevalentemente di day hospital. Nel caso di
              chirurgie complesse ed urgenti da effettuare nel pomeriggio siamo in grado di fermarci
              la notte per seguire al meglio il paziente che lo necessita.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              In entrambe le degenze le porte-finestre consentono agli animali ricoverati di accedere
              direttamente al giardino: un’esigenza particolarmente importante per i cani ospitati.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeader
            kicker="Organizzazione"
            title="Cosa caratterizza il servizio"
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {degenzaPoints.map((item) => (
              <article key={item.title} className="rounded-2xl border border-ink/8 bg-sand px-6 py-6">
                <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
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
    </>
  )
}
