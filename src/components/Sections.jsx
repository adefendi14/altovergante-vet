import { Link } from 'react-router-dom'
import {
  company,
  companyStats,
  copy,
  openingHours,
  preventionPaths,
  services,
  specialties,
  staff,
  strengths,
  testimonials,
} from '../data'
import Placeholder from './Placeholder'
import SectionHeader from './SectionHeader'

export function AboutPreview() {
  const content = copy.homeAbout
  const about = copy.about

  return (
    <section className="bg-sand/70">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        <Placeholder
          label={about.imageAlt}
          src={about.imageSrc}
          alt={about.imageAlt}
          ratio="4 / 3"
          className="group"
        />
        <div>
          <SectionHeader kicker={content.kicker} title={content.title} />
          <p className="mt-6 leading-relaxed text-ink/70">{about.p1}</p>
          <p className="mt-4 leading-relaxed text-ink/70">
            {about.p2Before}
            <strong className="font-semibold text-ink">{about.p2Strong}</strong>
            {about.p2After}
          </p>
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
          <Link
            to="/la-clinica"
            className="mt-8 inline-flex text-sm font-semibold text-terracotta transition-colors duration-300 hover:text-ink"
          >
            Scopri la clinica →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SpecialtiesPreview() {
  const content = copy.specialties

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} />
        <div className="mt-12 flex flex-wrap gap-3">
          {specialties.map((item) => (
            <Link
              key={item.id}
              to="/servizi"
              className="rounded-full border border-ink/8 bg-sand px-4 py-2 text-sm font-medium text-ink/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-terracotta"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/servizi"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-terracotta"
          >
            {content.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ServicesPreview() {
  const content = copy.services

  return (
    <section className="bg-sand/80">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.slice(0, 4).map((service) => (
            <article
              key={service.id}
              className={`rounded-2xl border px-7 py-8 ${
                service.featured
                  ? 'border-gold/40 bg-cream shadow-[0_18px_36px_-24px_rgba(30,111,154,0.22)]'
                  : 'border-ink/8 bg-cream'
              }`}
            >
              {service.featured && (
                <p className="mb-3 inline-flex rounded-full border border-gold/40 bg-sand px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink/70">
                  {content.featuredBadge}
                </p>
              )}
              <h3 className="text-2xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 line-clamp-4 leading-relaxed text-ink/70">{service.description}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-ink/65">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold" aria-hidden="true">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/servizi"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
          >
            {content.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function StaffPreview() {
  const content = copy.staff

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.slice(0, 3).map((member) => (
            <article key={member.id} className="overflow-hidden rounded-2xl border border-ink/8 bg-sand">
              <Placeholder
                label={member.name}
                src={member.image}
                alt={member.name}
                ratio="4 / 5"
                rounded="rounded-none"
                className="group"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm text-ink/55">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/staff"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-terracotta"
          >
            {content.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function StrengthsSection() {
  const content = copy.strengths

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
            <article key={item.id} className="rounded-2xl border border-ink/8 bg-sand px-5 py-6">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PreventionPreview() {
  const content = copy.prevention

  return (
    <section className="bg-sand/70">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.lead} align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {preventionPaths.slice(0, 3).map((path) => (
            <article key={path.id} className="rounded-2xl border border-ink/8 bg-cream px-6 py-6">
              <h3 className="text-xl font-semibold text-ink">{path.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{path.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/prevenzione"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-bordeaux"
          >
            {content.viewAll}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function HoursPreview() {
  const content = copy.hours

  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <SectionHeader kicker={content.kicker} title={content.title} lead={content.note} />
        <dl className="space-y-4">
          {openingHours.map((slot) => (
            <div key={slot.days} className="rounded-2xl border border-ink/8 bg-sand px-6 py-5">
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                {slot.days}
              </dt>
              <dd className="mt-2 text-xl font-semibold text-ink">{slot.hours}</dd>
            </div>
          ))}
          <p className="px-1 text-sm text-ink/60">
            {company.address}, {company.city}
          </p>
        </dl>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  const content = copy.testimonials

  return (
    <section className="bg-sand/70">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader kicker={content.kicker} title={content.title} align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="flex flex-col rounded-2xl bg-cream px-7 py-8">
              <p className="flex-1 text-xl font-medium leading-relaxed text-ink">“{item.quote}”</p>
              <footer className="mt-8 border-t border-ink/10 pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-ink">{item.name}</span>
                  <span className="mt-0.5 block text-xs tracking-wide text-ink/50">{item.company}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner() {
  const content = copy.cta
  const phoneHref = `tel:${company.phone.replace(/\s/g, '')}`
  const waHref = `https://wa.me/${company.phone.replace(/\D/g, '')}`

  return (
    <section className="bg-bordeaux text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{content.title}</h2>
          <p className="mt-3 max-w-xl text-cream/65">{content.lead}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={phoneHref}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream"
          >
            {company.phone}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream"
          >
            WhatsApp
          </a>
          <Link
            to="/contatti#prenota"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
          >
            {content.form}
          </Link>
        </div>
      </div>
    </section>
  )
}
