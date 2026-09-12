import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import SectionHeader from '../components/SectionHeader'
import { copy, staff } from '../data'

export default function Staff() {
  const content = copy.staff

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((member) => (
            <article key={member.id} className="overflow-hidden rounded-2xl border border-ink/8 bg-sand">
              <Placeholder
                label={member.name}
                src={member.image}
                alt={member.name}
                ratio="4 / 5"
                rounded="rounded-none"
                className="group"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-ink">{member.name}</h2>
                <p className="mt-1 text-sm text-ink/55">{member.role}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {member.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-gold/40 bg-cream px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-ink/60"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
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
