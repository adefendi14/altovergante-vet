import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import SectionHeader from '../components/SectionHeader'
import { company, copy, openingHours } from '../data'

export default function Contatti() {
  const content = copy.contact
  const waHref = `https://wa.me/${company.phone.replace(/\D/g, '')}`

  return (
    <section className="bg-sand/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} />
          <div id="prenota" className="mt-8 scroll-mt-28">
            <ContactForm />
          </div>
        </div>

        <aside className="rounded-2xl bg-cream p-6 md:p-8">
          <address className="not-italic">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink/45">
              {content.address}
            </p>
            <p className="mt-2 text-2xl font-semibold text-ink">{company.address}</p>
            <p className="mt-1 text-ink/65">{company.city}</p>
            <p className="mt-4 text-sm">
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="text-terracotta transition-colors duration-300 hover:text-ink"
              >
                {company.phone}
              </a>
              <span className="mx-2 text-ink/25">·</span>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="text-terracotta transition-colors duration-300 hover:text-ink"
              >
                WhatsApp
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="text-terracotta transition-colors duration-300 hover:text-ink"
              >
                {company.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-ink/60">
              Dir. San. <strong className="text-ink">{company.director}</strong>
            </p>
          </address>

          <div className="mt-8 space-y-3">
            {openingHours.map((slot) => (
              <div key={slot.days}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
                  {slot.days}
                </p>
                <p className="mt-1 text-sm text-ink/70">{slot.hours}</p>
              </div>
            ))}
            <p className="text-xs leading-relaxed text-ink/50">{copy.hours.note}</p>
          </div>

          <div className="mt-8 rounded-xl border border-gold/35 bg-sand/80 px-4 py-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink/45">
              {content.urgencyTitle}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{content.urgencyText}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-ink/8">
            <MapEmbed title={content.mapTitle} src={company.mapEmbed} />
          </div>
        </aside>
      </div>
    </section>
  )
}
